import { mockedScheduledIntake } from '../__mocks__/scheduledIntake';
import * as actions from '../actions';
import reducer from '../reducer';

describe('Scheduled Intakes', () => {
  it('allows you to add a new scheduled intake', () => {
    const action = actions.setScheduledIntake(mockedScheduledIntake);
    const state = reducer(undefined, action);

    expect(action).toMatchSnapshot();
    expect(state).toMatchSnapshot();
  });

  it('allows you to update an existing scheduled intake', () => {
    const action = actions.setScheduledIntake(mockedScheduledIntake);
    const state = reducer(undefined, action);
    const updateAction = actions.setScheduledIntake({
      ...mockedScheduledIntake,
      medications: {
        test: {
          medicationId: 'test',
          units: 2,
        },
      },
    });
    const updatedState = reducer(state, updateAction);

    expect(updateAction).toMatchSnapshot();
    expect(updatedState).toMatchSnapshot();
  });

  it('allows you to delete an existing scheduled intake', () => {
    const action = actions.setScheduledIntake(mockedScheduledIntake);
    const state = reducer(undefined, action);
    const updateAction = actions.deleteScheduledIntake(
      mockedScheduledIntake.id,
    );
    const updatedState = reducer(state, updateAction);

    expect(updateAction).toMatchSnapshot();
    expect(updatedState).toMatchSnapshot();
  });

  it('allows you to clear all existing scheduled intake', () => {
    const action1 = actions.setScheduledIntake(mockedScheduledIntake);
    const action2 = actions.setScheduledIntake({
      ...mockedScheduledIntake,
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
