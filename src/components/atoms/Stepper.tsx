import { ArrowRight } from '../../icons/ArrowRight';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

interface StepperProps {
  steps: string[];
  currentStep: string;
  setCurrentStep: (setSelected: string) => void;
}

export const Stepper = ({
  steps,
  currentStep,
  setCurrentStep
}: StepperProps) => {
  return (
    <div className="flex w-fit justify-center self-center border-b border-gray-200 py-4">
      {steps.map((title, index) => {
        const stepNumber = index + 1;
        const isCurrentStep = title === currentStep;
        return (
          <div
            key={`${title}-${index}`}
            className="flex items-center justify-center text-base text-neutral-400"
          >
            <button
              className={twMerge(
                'group flex cursor-pointer items-center gap-x-4 px-4 py-2 hover:text-black',
                cn({ 'text-black': isCurrentStep })
              )}
              onClick={() => {
                setCurrentStep(title);
              }}
            >
              <span
                className={twMerge(
                  'flex h-8 w-8 items-center justify-center rounded-sm bg-gray-100 group-hover:bg-black group-hover:text-white',
                  cn({
                    'bg-black text-white': isCurrentStep
                  })
                )}
              >
                {stepNumber}
              </span>
              <span>{title}</span>
            </button>
            {stepNumber !== steps.length && (
              <ArrowRight className={twMerge('size-4 text-neutral-400')} />
            )}
          </div>
        );
      })}
    </div>
  );
};
