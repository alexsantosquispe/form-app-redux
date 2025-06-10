import { FORM_NAMES_MAP } from './MultiStepForm.types';
import { FormSchema } from './MultiStepForm.schema';
import { InputField } from '../atoms/InputField';
import { useForm, type Control, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../atoms/Button';

interface FormControlledProps {
  steps: string[];
  currentStep: string;
}

export const FormControlled = ({ steps, currentStep }: FormControlledProps) => {
  const { control } = useForm({
    resolver: zodResolver(FormSchema)
  });

  return (
    <form className="flex w-[28rem] self-center p-10">
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-col py-4">
          <span className="text-sm">{`Step ${steps.indexOf(currentStep) + 1}/${steps.length}`}</span>
          <h1 className="text-3xl font-bold">{currentStep}</h1>
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
    </form>
  );
};
