import PortfolioList from "./PortfolioList";
import { useState } from "react";
import PortfolioModal from "./PortfolioModal";

const Portfolio = () => {
  const data = PortfolioList;
  const [isOpen, setIsOpen] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const triggerModal = (portfolioItem) => {
    setPortfolio(portfolioItem);
    setIsOpen(!isOpen);
  };

  return (
    <section id="portfolio" className="portfolio text-slate-200 bg-zinc-900">
      <div className="container px-5 md:px-10 xl:px-28 mx-auto py-7 md:py-14">
        <h1
          className="text-3xl font-semibold text-lime-500"
          data-aos="fade-right"
        >
          PORTFOLIO
        </h1>
        <p className="text-xs md:text-sm" data-aos="fade-right">
          Jelajahi beberapa projek yang saya buat.
        </p>
        {data ? (
          <ul
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-8"
            data-aos="fade-up"
          >
            {data.map((item, index) => (
              <li
                key={index}
                className="mb-4 relative overflow-hidden rounded-lg group"
              >
                <img
                  onClick={() => triggerModal(item)}
                  src={item.main_image}
                  alt={item.name}
                  className="w-full h-auto group-hover:brightness-50 transition duration-300 group-hover:scale-105"
                />
                <h2
                  onClick={() => triggerModal(item)}
                  className="md:absolute md:opacity-0 cursor-pointer text-lg md:text-2xl md:m-3 md:-translate-x-7 bottom-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300"
                >
                  {item.title}
                </h2>
                <button
                  onClick={() => triggerModal(item)}
                  className="hidden md:block md:absolute bottom-0 right-0 mt-2 py-1 px-6 bg-lime-500 hover:bg-lime-600 hover:scale-110 text-slate-200 rounded-tl-xl transition duration-300"
                >
                  Detail
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <PortfolioModal
        isOpen={isOpen}
        triggerModal={triggerModal}
        data={portfolio}
      />
    </section>
  );
};

export default Portfolio;
