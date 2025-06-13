import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema } from './MultiStepForm.schema';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Stepper } from '../atoms/Stepper';
import { useState, type ReactNode } from 'react';
import type { MultiStepFormValues } from './MultiStepForm.types';
import { Step3 } from './components/Step3';

const STEPS = [
  { id: 'personal', title: 'Personal Info' },
  { id: 'contact', title: 'Contact Info' },
  { id: 'additional', title: 'Additional Info' }
];

const STEPS_MAP: { [key: string]: ReactNode } = {
  personal: (
    <Step1 stepTitle="Personal Info" currentStepNumber={1} totalSteps={3} />
  ),
  contact: (
    <Step2 stepTitle="Contact Info" currentStepNumber={2} totalSteps={3} />
  ),
  additional: (
    <Step3 stepTitle="Additional Info" currentStepNumber={3} totalSteps={3} />
  )
};

export const MultiStepForm = () => {
  const [stepId, setStepId] = useState<string>(STEPS[0].id);
  const methods = useForm<MultiStepFormValues>({
    resolver: zodResolver(FormSchema)
  });

  return (
    <FormProvider {...methods}>
      <div className="flex w-full flex-col">
        <Stepper steps={STEPS} onStepSelected={setStepId} />
        <form className="flex w-[28rem] self-center py-10">
          {stepId ? STEPS_MAP[stepId] : null}
        </form>
      </div>
    </FormProvider>
  );
};
