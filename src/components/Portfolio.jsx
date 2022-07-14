import React from "react";

import JavaSchool from "../assets/portfolio/JavaSchool.jpg";
import ReactWeb from "../assets/portfolio/ReactWebsite.png";

const Portfolio = () => {
  const portfolios = [
    /**
     * add more work
      
    {
      id:,
      src: ,
      href:"",
    },

     */
  
    {
      id: 1,
      src: ReactWeb,
      href:"https://github.com/moumenjuma/my-portfolio",

    },
    
    {
      id: 2,
      src: JavaSchool,
      href:"https://github.com/moumenjuma/JavaSimpleBanking",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-slate-800 to-slate-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg  hover:shadow-yellow-800">
              <img
                src={src}
                alt=""
                className="rounded-md "
              />
              <div className="flex items-center justify-center">
              
                <text className="w-1/2 px-10 py-3 m-4">Demo</text>
                
                
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-yellow-500">
                  <a href={href} target="_blank" rel="noopener noreferrer">Code   </a>
                </button>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

