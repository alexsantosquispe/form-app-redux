import { Footer } from './components/Footer';
import { FormSection } from './components/FormSection';
import { NavBar } from './components/Navbar';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white">
      <NavBar />
      <main className="flex w-full flex-col items-center bg-gray-50">
        <div className="flex h-screen px-8 py-16 md:w-[80rem]">
          <FormSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
