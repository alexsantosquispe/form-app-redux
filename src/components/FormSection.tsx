import { FormControlled } from './form/MultiStepForm';
import { Stepper } from './atoms/Stepper';
import { useState } from 'react';

const STEPS = ['Personal Info', 'Contact Info', 'Additional Info'];

export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(STEPS[0]);

  return (
    <div className="flex w-full overflow-hidden rounded-lg bg-white shadow-md">
      <div className="flex w-full flex-col p-8">
        <Stepper
          steps={STEPS}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <FormControlled steps={STEPS} currentStep={currentStep} />
      </div>
      <img
        src="/public/assets/bg-ideas.png"
        className="w-[32rem] bg-gray-100 object-contain"
      />
    </div>
  );
};
