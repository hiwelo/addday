export interface Medication {
  /** Unique ID for this medication */
  id: string;
  /** Name of the medication */
  name: string;
}

/** List keys of available actions for the Meds reducer */
export type MedsActions = 'MEDS_ADD';

/** Information requested to execute an action */
export type MedsAction = {
  /** Action to execute */
  type: MedsActions;
  /** Informationr required */
  value: Partial<Medication>;
};

export interface MedsState {
  /** Lists all medications set in the platform */
  medications: Record<string, Medication>;
}
