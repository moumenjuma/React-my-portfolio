import React from 'react'
import myResume from "../assets/Resume.docx";
const About = () => {
  return (
    <div name= "about" className='w=full h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white'>  
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-blod inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>I am an entry level full stack developer, who has learned many programming languages. I first learned Python in high school and my interest in programming was awakened at the point on. Since then, I keep increasing my programming repertoire, learning HTML, CSS, JavaScript, PHP, and Ruby on the rails, after that I went to Farmingdale University and learned the core C++, C#, Java, and Python in my first two years in the University, I took all the advance courses in my third year. Even though, they were difficult I could not stop being drown to them, the more difficult it was the more I invested in my studies and the ore curious on the ways I could use the things I learned. In the course we learned many ways to use the programming languages, learned algorithm, learning Object Orientation Programming with its concepts and its use in the real world, we used real world problem and solved it with programming, the use of databasing, networking, the use of API, Data structures, Automated programming, the use of Front-end and Back-end Development, and full stack development. 
            <br/>
            <br/>
            For more details about my background, please review my enclosed resume. I believe that I can be the Software Engineer you're looking for and welcome the opportunity to speak with you at your earliest convenience.
          </p> 
          <br/>
           <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700  hover:scale-105 duration-200">
           <a href={myResume} download={myResume}> Resume</a>
           </button>

        </div>
    </div>
  )
}

export default About