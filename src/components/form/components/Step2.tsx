import {
  useFormContext,
  type Control,
  type FieldValues
} from 'react-hook-form';

import { Button } from '../../atoms/Button';
import {
  FORM_NAMES_MAP,
  type MultiStepFormValues,
  type StepProps
} from '../MultiStepForm.types';
import { InputField } from '../../atoms/InputField';

export const Step2 = ({
  stepTitle,
  currentStepNumber,
  totalSteps
}: StepProps) => {
  const { control } = useFormContext<MultiStepFormValues>();

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col py-4">
        <span className="text-sm">{`Step ${currentStepNumber}/${totalSteps}`}</span>
        <h2 className="text-3xl font-bold">{stepTitle}</h2>
      </div>

      <InputField
        control={control as unknown as Control<FieldValues>}
        label="Phone"
        placeholder="Enter your phone number"
        name={FORM_NAMES_MAP.ADDRESS}
      />

      <InputField
        control={control as unknown as Control<FieldValues>}
        label="Address"
        placeholder="Enter address"
        name={FORM_NAMES_MAP.ADDRESS}
      />

      <div className="flex gap-6">
        <InputField
          control={control as unknown as Control<FieldValues>}
          label="Zip Code"
          placeholder="Zip code"
          name={FORM_NAMES_MAP.ZIP_CODE}
        />

        <InputField
          control={control as unknown as Control<FieldValues>}
          label="City"
          placeholder="Enter city name"
          name={FORM_NAMES_MAP.CITY_STATE}
        />
      </div>

      <Button label="Continue" className="mt-6" />
    </div>
  );
};
