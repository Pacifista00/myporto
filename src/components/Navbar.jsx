const Navbar = () => {
  return (
    <nav className="fixed z-20 py-3 bg-zinc-800 text-slate-200 overflow-hidden top-0 w-screen shadow-sm shadow-zinc-600">
      <div className="container mx-auto animate__animated animate__fadeInDown ">
        <ul className="mx-auto flex justify-center gap-4 md:gap-10 ">
          <li className="hover:text-lime-300 cursor-pointer transition duration-500">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:text-lime-300 cursor-pointer transition duration-500">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-lime-300 cursor-pointer transition duration-500">
            <a href="#certification">Certification</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
