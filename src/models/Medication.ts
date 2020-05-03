export interface Medication {
  /** Unique ID for this medication */
  id: string;
  /** Name of the medication */
  name: string;
  /** Alias name for this medication, to use in sensible places */
  alias?: string;
  /** Dosage for this instance of the medication */
  dosage?: string;
}
