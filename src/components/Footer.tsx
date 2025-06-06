export const Footer = () => {
  return (
    <footer className="flex h-14 w-full items-center justify-center border-t border-neutral-100">
      <span className="bottom-0 flex justify-center gap-2 text-xs text-neutral-500">
        <a className="hover:cursor-pointer hover:text-black">
          Terms of service
        </a>
        {` | `}
        <a className="hover:cursor-pointer hover:text-black">Privacy policy</a>
      </span>
    </footer>
  );
};
