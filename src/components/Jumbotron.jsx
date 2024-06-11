import { ReactTyped } from "react-typed";

const Jumbotron = () => {
  return (
    <section className="jumbotron bg-zinc-800 text-slate-200">
      <div className="container min-h-screen flex justify-center items-center">
        <div className="px-10 xl:px-28 mx-auto md:flex md:flex-row-reverse md:justify-between md:items-center md:gap-7">
          <div className="photo mb-3 md:mb-0 animate__animated animate__fadeInRight">
            <img
              className="h-64 md:h-80 object-cover rounded-full shadow-white shadow-op mx-auto hover:scale-105 hover:shadow-md hover:shadow-lime-300 transition duration-300 mb-10 md:mb-0"
              src="./images/me.JPG"
              alt=""
            />
          </div>
          <div className="title text-center md:text-start font-semibold animate__animated animate__fadeInLeft">
            <h2 className="text-base md:text-2xl">Halo, nama saya</h2>
            <h1 className="text-3xl md:text-6xl lg:text-7xl">Adam Samudera</h1>
            <h2 className="text-sm md:text-2xl lg:text-2xl mb-3">
              Saya adalah seorang{" "}
              <span className="text-lime-500">
                <ReactTyped
                  strings={["Coder", "Programmer", "Developer"]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                />
              </span>
            </h2>
            <p className="md:w-5/6 text-xs md:text-md font-normal tracking-wide">
              Menjelajahi Setiap Kode adalah petualangan bagi saya demi menjadi
              seorang Developer Profesional.
            </p>
            <button className="mt-4 py-1 px-6 bg-lime-500 hover:bg-lime-600 hover:scale-105 text-slate-200 rounded-tl-xl rounded-br-xl transition duration-300">
              <a href="#about">About Me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
