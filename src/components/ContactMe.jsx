const ContactMe = () => {
  return (
    <section id="contactMe" className="bg-slate-200 text-slate-700">
      <div className="container mx-auto px-4 md:px-10 xl:px-28 py-7 md:py-14 text-start">
        <h1
          className="text-3xl font-semibold text-lime-500"
          data-aos="fade-right"
        >
          Contact Me
        </h1>
        <p className="text-xs md:text-sm" data-aos="fade-right">
          Hubungi saya jika anda butuh bantuan
        </p>
        <div className="contact-form text-sm" data-aos="fade-up">
          <div className="flex">
            <form action="" className="flex-1">
              <div className="pt-5 pr-5">
                <div className="mb-3 lg:mb-5 text-zinc-700 flex gap-2 lg:gap-5">
                  <input
                    type="text"
                    placeholder="Nama depan"
                    name="firstName"
                    class="px-2 w-full p-1 rounded-md focus:outline-lime-500"
                    required
                    autocomplete="off"
                  />
                  <input
                    type="text"
                    placeholder="Nama belakang"
                    name="lastName"
                    className="px-2 w-full p-1 rounded-md focus:outline-lime-500"
                    required
                    autocomplete="off"
                  />
                </div>
                <div className="mb-3 lg:mb-5 flex gap-2 lg:gap-5">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-2 w-full p-1 rounded-md focus:outline-lime-500"
                    required
                    autocomplete="off"
                  />
                  <input
                    type="number"
                    placeholder="No Telepon"
                    name="phone"
                    className="px-2 w-full p-1 rounded-md focus:outline-lime-500"
                    required
                    autocomplete="off"
                  />
                </div>
                <div className="mb-3 lg:mb-5">
                  <textarea
                    name="message"
                    placeholder="Pesan"
                    id="message"
                    className="px-2 w-full p-1 rounded-md focus:outline-lime-500"
                    required
                    autocomplete="off"
                  ></textarea>
                </div>
              </div>
              <div className="pr-5 pb-5 flex justify-end">
                <button
                  type="submit"
                  className="bg-lime-400 py-2 px-5 rounded-lg text-slate-200"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
            <div className="flex-1 flex items-center">
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
