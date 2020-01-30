export interface Medication {
  /** Medication unique ID */
  id: string;
  /** Medication name */
  name: string;
  /** Medication's name alias to use in notifications */
  alias?: string;
}
