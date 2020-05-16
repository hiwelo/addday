import { mockedIntake } from '../../../models/__mocks__/Intake';
import * as actions from '../actions';
import reducer from '../reducer';

const stateWithExistingIntake = reducer(
  undefined,
  actions.setIntake(mockedIntake),
);

describe('Intakes', () => {
  it('allows you to add a new intake', () => {
    const action = actions.setIntake(mockedIntake);
    const state = reducer(undefined, action);

    expect(action).toMatchSnapshot();
    expect(state).toMatchSnapshot();
  });

  it('allows you to update an existing intake', () => {
    const action = actions.setIntake({
      ...mockedIntake,
      days: {
        ...mockedIntake.days,
        sunday: true,
      },
    });
    const state = reducer(stateWithExistingIntake, action);

    expect(action).toMatchSnapshot();
    expect(state).toMatchSnapshot();
  });

  it('allows you to delete an existing intake', () => {
    const action = actions.deleteIntake(mockedIntake.id);
    const state = reducer(stateWithExistingIntake, action);

    expect(action).toMatchSnapshot();
    expect(state).toMatchSnapshot();
  });

  it('allows you to clear all existing intake', () => {
    const addAction = actions.setIntake({
      ...mockedIntake,
      id: 'test2',
    });
    const updatedState = reducer(stateWithExistingIntake, addAction);
    const action = actions.clearIntakes();
    const state = reducer(updatedState, action);

    expect(action).toMatchSnapshot();
    expect(state).toMatchSnapshot();
  });
});
