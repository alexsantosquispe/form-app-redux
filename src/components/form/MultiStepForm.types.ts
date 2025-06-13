export const FORM_NAMES_MAP = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  DATE_OF_BIRTH: 'dateOfBirth',
  EMAIL: 'email',
  PHONE: 'phone',
  ADDRESS: 'address',
  ZIP_CODE: 'zipCode',
  CITY_STATE: 'city',
  OTHER: 'other',
  TERMS: 'terms'
} as const;

export type MultiStepFormValues = {
  [FORM_NAMES_MAP.FIRST_NAME]: string;
  [FORM_NAMES_MAP.LAST_NAME]: string;
  [FORM_NAMES_MAP.DATE_OF_BIRTH]: string;
  [FORM_NAMES_MAP.EMAIL]: string;
  [FORM_NAMES_MAP.PHONE]: string;
  [FORM_NAMES_MAP.ADDRESS]: string;
  [FORM_NAMES_MAP.ZIP_CODE]: string;
  [FORM_NAMES_MAP.CITY_STATE]: string;
  [FORM_NAMES_MAP.OTHER]: string;
  [FORM_NAMES_MAP.TERMS]: boolean;
};

export interface StepProps {
  stepTitle: string;
  currentStepNumber: number;
  totalSteps: number;
}
