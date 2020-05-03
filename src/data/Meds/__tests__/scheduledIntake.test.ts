import moment from 'moment';

import { WeeklySchedule } from '../../../models/WeeklySchedule';
import * as actions from '../actions';
import reducer from '../reducer';

const mockedMoment = moment.utc('18:00', 'HH:mm');

const mockedWeeklySchedule: WeeklySchedule = {
  monday: true,
  tuesday: false,
  wednesday: false,
  thursday: true,
  friday: true,
  saturday: false,
  sunday: false,
};

const testScheduledIntake = {
  days: mockedWeeklySchedule,
  id: 'test',
  moment: mockedMoment,
  medications: new Map(),
};

describe('Scheduled Intakes', () => {
  it('allows you to add a new scheduled intake', () => {
    const action = actions.setScheduledIntake(testScheduledIntake);
    const state = reducer(undefined, action);

    expect(action).toMatchSnapshot();
    expect(state).toMatchSnapshot();
  });

  it('allows you to update an existing scheduled intake', () => {
    const action = actions.setScheduledIntake(testScheduledIntake);
    const state = reducer(undefined, action);
    const updateAction = actions.setScheduledIntake({
      ...testScheduledIntake,
      medications: new Map().set('test', {
        medicationId: 'test',
        units: 2,
      }),
    });
    const updatedState = reducer(state, updateAction);

    expect(updateAction).toMatchSnapshot();
    expect(updatedState).toMatchSnapshot();
  });

  it('allows you to delete an existing scheduled intake', () => {
    const action = actions.setScheduledIntake(testScheduledIntake);
    const state = reducer(undefined, action);
    const updateAction = actions.deleteScheduledIntake('test');
    const updatedState = reducer(state, updateAction);

    expect(updateAction).toMatchSnapshot();
    expect(updatedState).toMatchSnapshot();
  });

  it('allows you to clear all existing scheduled intake', () => {
    const action1 = actions.setScheduledIntake(testScheduledIntake);
    const action2 = actions.setScheduledIntake({
      ...testScheduledIntake,
      id: 'test2',
    });
    const state = reducer(undefined, action1);
    const updatedState = reducer(state, action2);
    const clearAction = actions.clearScheduledIntakes();
    const clearedState = reducer(updatedState, clearAction);

    expect(clearAction).toMatchSnapshot();
    expect(clearedState).toMatchSnapshot();
  });
});
