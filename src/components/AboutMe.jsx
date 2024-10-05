const AboutMe = () => {
  return (
    <section
      id="about"
      className="about-me bg-white text-slate-700 text-sm md:text-base"
    >
      <div className="container px-5 lg:px-28 py-16 md:py-24 mx-auto">
        <div className="md:flex items-start gap-7 lg:gap-10">
          <img
            className="object-contain flex-1 w-80 mb-3 md:mb-0"
            data-aos="fade-right"
            src="./images/coder.png"
            alt=""
          />
          <div className="flex-1" data-aos="fade-left">
            <h1 className="text-3xl mb-1 font-semibold text-lime-500">
              TENTANG SAYA
            </h1>
            <p className="text-justify text-sm">
              Saya adalah lulusan D3 Teknik Komputer dari Politeknik Harapan
              Bersama kota Tegal. Saya memiliki keterampilan dalam pemrograman
              website dan sudah membuat beberapa project dengan menggunakan
              bahasa pemrograman dan framework beragam. Saya siap membantu dalam
              merancang dan mengembangkan proyek website dengan keahlian teknis
              terbaik yang saya miliki.
            </p>
            <h4 className="font-semibold  mt-2">PENGALAMAN</h4>
            <p>Web Developer Internship</p>
            <p className="text-sm">
              PT Zona Media Indonesia(Juni 2024-September 2024)
            </p>
            <div className="flex gap-3 text-2xl my-2 text-slate-200">
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
            <a href="./CV/CV_AdamSamudera.pdf">
              <button className="mt-2 py-2 px-7 bg-lime-500 hover:bg-lime-400 hover:scale-105 text-slate-200 rounded-tl-xl rounded-br-xl transition duration-300">
                Lihat CV
              </button>
            </a>
          </div>
        </div>
        <div className="md:text-center mt-10" data-aos="fade-up">
          <h1 className="text-3xl mb-3 font-semibold text-lime-500">
            Keahlian
          </h1>
          <div>
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/html.png"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/css.png"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/php.png"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/js.png"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/bootstrap.webp"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/tailwind.webp"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/codeigniter.png"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/laravel.png"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/Vue.png"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/reactjs.webp"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/mysql.png"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/git.png"
              alt=""
            />
            <img
              className="h-9 md:h-12 inline-block p-1"
              src="./images/logo/postman.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
