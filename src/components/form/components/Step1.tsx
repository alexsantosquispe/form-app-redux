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

export const Step1 = ({
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

      <div className="flex w-full gap-6">
        <InputField
          control={control as unknown as Control<FieldValues>}
          label="First Name"
          placeholder="First Name"
          name={FORM_NAMES_MAP.FIRST_NAME}
        />

        <InputField
          control={control as unknown as Control<FieldValues>}
          label="Last Name"
          placeholder="Last Name"
          name={FORM_NAMES_MAP.LAST_NAME}
        />
      </div>

      <InputField
        control={control as unknown as Control<FieldValues>}
        type="date"
        label="Date of Birth"
        placeholder="enter date"
        name={FORM_NAMES_MAP.DATE_OF_BIRTH}
      />

      <InputField
        control={control as unknown as Control<FieldValues>}
        label="Email"
        type="email"
        placeholder="someone@gmail.com"
        name={FORM_NAMES_MAP.EMAIL}
      />

      <Button label="Continue" className="mt-6" />
    </div>
  );
};
