import React from "react";
import second from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
return (
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-slate-900"
  >    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">        
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl sm:text-6xl font-bold text-white px-4">
                [Software Engineer]</h2>
            
            <p className="text-gray-300 py-4 max-w-lg ">
                 I am College Graduate who Graducated at the top of his class. I was given an Academic Excellence Award upon graduating. This was achieved by my hard work and love for programming. The time I spent in Univeristy, I have made great stides in increasing my programming language and its understanding. I have made many project that was used to solve real world problems, and I am constantly learning new ways to use programming. I am comfortable in all programming languages that I have learned, however I am must comfortable with Python, Java, and C++/C#. I understand software development process, Front-end development and its Back-end development, API, OOP along with there concepts.
            </p>
            
            <div>
                <Link   to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center 
                                    rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700  hover:scale-105 duration-200">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                    <MdKeyboardArrowRight size={30} className="ml-1"/> 
                    </span>
                    
                </Link>
            </div>
        </div>
        <div>
            <img src={second}  
            alt="my profile" 
            className="rounded-2xl mx-auto max-w-2/3 md:w-full hover:scale-105 duration-200"
           />
        </div>
        
    </div>
</div>
);
};

export default Home;
