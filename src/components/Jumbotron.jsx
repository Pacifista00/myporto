const Jumbotron = () => {
  return (
    <section className="jumbotron bg-slate-900 text-slate-200">
      <div className="container px-10 mx-auto md:flex md:flex-row-reverse md:justify-between md:items-center md:gap-7 py-20 md:py-32">
        <div className="photo mb-3 md:mb-0">
          <img
            className="w-60 rounded-md shadow-md shadow-white shadow-op mx-auto hover:scale-105 transition duration-300"
            src="../../public/images/me.jpg"
            alt=""
          />
          <div className="flex justify-center gap-3 text-lg md:text-xl mt-3">
            <a href="https://www.instagram.com/adsmdr_/">
              <i className="fa-brands fa-instagram hover:text-slate-400 transition duration-300 active:text-red-500"></i>
            </a>
            <a href="https://www.linkedin.com/in/adam-samudera-659935253/">
              <i className="fa-brands fa-linkedin hover:text-slate-400 transition duration-300 active:text-red-500"></i>
            </a>
            <a href="https://github.com/Pacifista00">
              <i className="fa-brands fa-github hover:text-slate-400 transition duration-300 active:text-red-500"></i>
            </a>
          </div>
        </div>
        <div className="title text-center md:text-start">
          <h1 className="text-red-500 text-3xl md:text-6xl mb-2">
            Adam Samudera
          </h1>
          <p className="md:w-5/6 text-xs md:text-base">
            Saya adalah seorang Website Developer yang berdedikasi tinggi untuk
            menjadi seorang Website Developer handal.
          </p>
          <button className="mt-4 py-1 px-6 bg-amber-500 hover:bg-amber-400 text-slate-200 hover:text-slate-600 rounded-tl-xl rounded-br-xl transition duration-300">
            Lihat CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
