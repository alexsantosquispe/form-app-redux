import { Footer } from './components/atoms/Footer';
import { MultiStepForm } from './components/FormSection';
import { NavBar } from './components/atoms/Navbar';

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-white">
      <NavBar />
      <main className="flex w-full flex-col items-center bg-gray-200">
        <div className="flex px-8 py-16 md:w-[80rem]">
          <MultiStepForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
