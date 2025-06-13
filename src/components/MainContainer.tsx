import { MultiStepForm } from './form/MultiStepForm';

export const MainContainer = () => {
  return (
    <div className="flex min-h-[78dvh] w-full overflow-hidden rounded-lg bg-white shadow-md">
      <div className="flex w-full flex-col items-center py-8">
        <h1 className="text-xl font-bold">Multi Step Form</h1>
        <MultiStepForm />
      </div>
      <img
        src="/public/assets/bg-ideas.png"
        className="w-[32rem] bg-gray-100 object-contain md:flex"
      />
    </div>
  );
};
