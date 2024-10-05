import CertificateList from "./CertificateList";

const Certification = () => {
  const data = CertificateList;

  return (
    <section id="certification" className="bg-zinc-900 text-slate-200">
      <div className="container mx-auto px-4 md:px-10 xl:px-28 py-7 md:py-14 text-end">
        <h1
          className="text-3xl font-semibold text-lime-500"
          data-aos="fade-left"
        >
          SERTIFIKAT
        </h1>
        <p className="text-xs md:text-sm" data-aos="fade-left">
          Beberapa sertifikat yanng saya dapatkan melalui suatu event.
        </p>
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-8 text-center"
          data-aos="fade-up"
        >
          {data.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-between text-slate-200 p-4 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition duration-300 group"
            >
              <img
                className="h-12 md:h-24 mx-auto mb-1 group-hover:scale-110 transition duration-300"
                src={item.logo_path}
                alt=""
              />
              <h2>{item.name}</h2>
              <div>
                <a href={item.certificate}>
                  <button className="mt-4 py-1 px-5 bg-lime-500 hover:bg-lime-600 hover:scale-105 text-slate-200 rounded-tl-xl rounded-br-xl transition duration-300">
                    Lihat
                  </button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certification;
