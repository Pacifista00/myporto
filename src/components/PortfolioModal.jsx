const PortfolioModal = ({ isOpen, triggerModal, data }) => {
  return (
    <>
      {isOpen ? (
        <div
          id="modal"
          className="fixed z-20 bg-black bg-opacity-70 flex items-center justify-center inset-0"
        >
          <div className="bg-gray-900 p-5 max-w-xl mx-4 shadow-md shadow-slate-600">
            <div className="text-slate-200 text-sm">
              <h1 className="text-lime-500 text-3xl border-b">{data.title}</h1>
              <div className="my-4">
                <p>{data.description}</p>
                <div className="mt-3">
                  <h3 className="font-semibold">Tech Stack :</h3>
                  <ul>
                    {data.tech_stack.map((item, index) => (
                      <li key={index}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  <h3 className="font-semibold">Screenshot :</h3>
                  <ul className="grid grid-cols-2 gap-5">
                    {data.images.map((link, index) => (
                      <li key={index}>
                        <img src={link} alt="index" />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  <h3 className="font-semibold">Repository Github:</h3>
                  <ul className="flex gap-5">
                    {data.repository.map((item, index) => (
                      <li key={index}>
                        <button className="py-1 px-5 bg-lime-500 text-slate-100 text-base hover:scale-95 transition duration-300 hover:bg-lime-600">
                          <a href={item.link} target="_blank">
                            {item.name}
                          </a>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-end border-t pt-3">
              <button
                className="py-1 px-6 bg-red-600 text-lg hover:scale-95 hover:bg-red-700 transition duration-300"
                onClick={triggerModal}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PortfolioModal;
