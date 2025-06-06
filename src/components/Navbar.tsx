export const NavBar = () => {
  return (
    <header className="flex h-14 w-full items-center justify-center border-b border-neutral-100">
      <div className="flex items-center justify-between p-8 md:w-[80rem]">
        <div className="text-2xl">
          <span className="font-bold">Easy</span>
          <span className="font-medium">Form</span>
        </div>
        <div>
          <a className="hover:cursor-pointer hover:text-black" href="#">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};
