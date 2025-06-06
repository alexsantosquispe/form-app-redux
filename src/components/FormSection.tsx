import { Stepper } from './Stepper';

export const FormSection = () => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-8 shadow-md">
      <Stepper />
      <form className="flex w-full bg-yellow-100 p-8">HELLO</form>
    </div>
  );
};
