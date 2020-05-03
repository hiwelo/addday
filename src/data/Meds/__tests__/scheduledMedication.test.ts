import { mockedMedication } from '../__mocks__/medication';
import { mockedScheduledIntake } from '../__mocks__/scheduledIntake';
import * as actions from '../actions';
import reducer from '../reducer';

const stateWithScheduledIntake = reducer(
  undefined,
  actions.setScheduledIntake(mockedScheduledIntake),
);
const stateWithScheduledMedication = reducer(
  stateWithScheduledIntake,
  actions.setScheduledMedicationIntake(mockedScheduledIntake.id, {
    medicationId: mockedMedication.id,
    units: 2,
  }),
);

describe('Scheduled Medications', () => {
  it('allows you to add a new scheduled medication', () => {
    const action = actions.setScheduledMedicationIntake(
      mockedScheduledIntake.id,
      {
        medicationId: mockedMedication.id,
        units: 2,
      },
    );
    const state = reducer(stateWithScheduledIntake, action);

    expect(action).toMatchSnapshot();
    expect(state).toMatchSnapshot();
  });

  it('allows you to update an existing scheduled medication', () => {
    const action = actions.setScheduledMedicationIntake(
      mockedScheduledIntake.id,
      {
        medicationId: mockedMedication.id,
        units: 4,
      },
    );
    const state = reducer(stateWithScheduledMedication, action);

    expect(action).toMatchSnapshot();
    expect(state).toMatchSnapshot();
  });

  it('allows you to delete an existing scheduled medication', () => {
    const action = actions.deleteScheduledMedicationIntake(
      mockedScheduledIntake.id,
      mockedMedication.id,
    );
    const state = reducer(stateWithScheduledMedication, action);

    expect(action).toMatchSnapshot();
    expect(state).toMatchSnapshot();
  });

  it('allows you to clear all existing scheduled medication', () => {
    const action = actions.clearScheduledMedicationIntakes(
      mockedScheduledIntake.id,
    );
    const state = reducer(stateWithScheduledMedication, action);

    expect(action).toMatchSnapshot();
    expect(state).toMatchSnapshot();
  });

  it('throws an error if you try to clear all existing scheduled medication for a missing ScheduledIntake', () => {
    const action = actions.clearScheduledMedicationIntakes('fakeId');

    expect(() =>
      reducer(stateWithScheduledMedication, action),
    ).toThrowErrorMatchingSnapshot();
  });

  it('throws an error if you try to delete a scheduled medication for a missing ScheduledIntake', () => {
    const action = actions.deleteScheduledMedicationIntake(
      'fakeId',
      mockedMedication.id,
    );

    expect(() =>
      reducer(stateWithScheduledMedication, action),
    ).toThrowErrorMatchingSnapshot();
  });

  it('throws an error if you try to update a scheduled medication for a missing ScheduledIntake', () => {
    const action = actions.setScheduledMedicationIntake('fakeId', {
      medicationId: mockedMedication.id,
      units: 4,
    });

    expect(() =>
      reducer(stateWithScheduledMedication, action),
    ).toThrowErrorMatchingSnapshot();
  });
});
