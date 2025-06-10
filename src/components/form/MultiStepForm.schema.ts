import {
  FORM_NAMES_MAP,
  type FormControlledValues
} from './MultiStepForm.types';
import { z, ZodType } from 'zod';

export const FormSchema: ZodType<FormControlledValues> = z.object({
  [FORM_NAMES_MAP.FIRST_NAME]: z
    .string()
    .min(1, { message: 'First name is required' }),
  [FORM_NAMES_MAP.LAST_NAME]: z
    .string()
    .min(1, { message: 'Last name is required' }),
  [FORM_NAMES_MAP.DATE_OF_BIRTH]: z
    .string()
    .min(1, { message: 'Date of birth is required' }),
  [FORM_NAMES_MAP.EMAIL]: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'It is not a valid email' }),
  [FORM_NAMES_MAP.PHONE]: z.string().min(1, { message: 'Phone is required' }),
  [FORM_NAMES_MAP.ADDRESS]: z
    .string()
    .min(1, { message: 'Address is required' }),
  [FORM_NAMES_MAP.ZIP_CODE]: z
    .string()
    .min(1, { message: 'Zip code is required' }),
  [FORM_NAMES_MAP.CITY_STATE]: z
    .string()
    .min(1, { message: 'City is required' }),
  [FORM_NAMES_MAP.OTHER]: z.string().min(1, { message: 'Other is required' }),
  [FORM_NAMES_MAP.TERMS]: z.boolean()
});
