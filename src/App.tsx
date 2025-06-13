import { Footer } from './components/atoms/Footer';
import { MainContainer } from './components/MainContainer';
import { NavBar } from './components/atoms/Navbar';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white">
      <NavBar />
      <main className="flex w-full flex-col items-center bg-gray-200">
        <div className="flex p-4 md:w-[80rem] md:px-0 md:py-12">
          <MainContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
