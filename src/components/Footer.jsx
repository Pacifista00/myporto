const Footer = () => {
  return (
    <footer className="bg-lime-500 text-slate-200">
      <div className="container mx-auto px-10 md:px-28 pt-7 pb-5 text-center">
        <h1>Adam Samudera | Website Developer</h1>
        <div className="my-3">
          <a href="https://www.instagram.com/adsmdr_/">
            <i className="fa-brands p-2 rounded-full bg-lime-500 cursor-pointer hover:bg-lime-400 transition duration-300 fa-instagram"></i>
          </a>
          <a href="https://github.com/Pacifista00">
            <i className="fa-brands p-2 rounded-full bg-lime-500 cursor-pointer hover:bg-lime-400 transition duration-300 fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/adam-samudera-659935253/">
            <i className="fa-brands p-2 rounded-full bg-lime-500 cursor-pointer hover:bg-lime-400 transition duration-300 fa-linkedin"></i>
          </a>
          <a href="mailto:adamsamudera99@gmail.com">
            <i className="fa-regular p-2 rounded-full bg-lime-500 cursor-pointer hover:bg-lime-400 transition duration-300 fa-envelope"></i>
          </a>
        </div>
        <h3>© 2024. All rights reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
