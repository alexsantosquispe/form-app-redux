import { ArrowRight } from '../icons/ArrowRight';
import { useState } from 'react';

const steps = ['Personal Info', 'Contact Info', 'Secure  Info'];

export const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(steps[0]);

  return (
    <div className="flex justify-center py-4">
      {steps.map((title, index) => {
        const stepNumber = index + 1;
        return (
          <div
            key={`${title}-${index}`}
            className="flex items-center justify-center text-base text-neutral-400"
          >
            <button className="group flex cursor-pointer items-center gap-x-4 px-4 py-2 hover:text-black">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-black group-hover:text-white">
                {stepNumber}
              </span>
              <span>{title}</span>
            </button>
            {stepNumber !== steps.length && (
              <ArrowRight className="size-4 text-neutral-400" />
            )}
          </div>
        );
      })}
    </div>
  );
};
