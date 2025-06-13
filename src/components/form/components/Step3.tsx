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
import { TextAreaField } from '../../atoms/TextAreaField';

export const Step3 = ({
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

      <TextAreaField
        label="Other"
        control={control as unknown as Control<FieldValues>}
        name={FORM_NAMES_MAP.OTHER}
        placeholder="Enter description..."
      />

      <div className="flex w-full justify-start gap-x-4">
        <input
          type="checkbox"
          id={FORM_NAMES_MAP.TERMS}
          name={FORM_NAMES_MAP.TERMS}
        />
        <label
          htmlFor={FORM_NAMES_MAP.TERMS}
          className="text-sm text-neutral-500"
        >
          I have read and agree to the{' '}
          <span className="text-black">Terms of service</span>
        </label>
      </div>

      <Button label="Submit" className="mt-6" type="submit" />
    </div>
  );
};
