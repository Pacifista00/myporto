const Navbar = () => {
  return (
    <nav className="py-3 bg-slate-900 text-slate-200 overflow-hidden sticky top-0 z-10 shadow-sm shadow-slate-500">
      <div className="container mx-auto">
        <ul className="mx-auto flex justify-center gap-4 md:gap-7 text-sm md:text-lg uppercase">
          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            About Me
          </li>
          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Portfolio
          </li>
          <li className="hover:text-red-500 cursor-pointer transition duration-300">
            Certification
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
