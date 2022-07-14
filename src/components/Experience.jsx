import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import nextjs from '../assets/nextjs.png';
import github from '../assets/github.png';
import java from '../assets/java.jpg';
import python from "../assets/Python.png";
import C from "../assets/C.png";
import Clogo from "../assets/c-logo.png";
import node from "../assets/node.png";


const Experience = () => {

    /**
     * add more Coding languages that have expierence
       {
            id: ,
            src:  ,
            title:' ',
            style:'hover:shadow-',
        },
     */
    const Lang=[
        {
            id:1,
            src: html,
            title:'HTML',
            style:'hover:shadow-orange-500',
        },
        {
            id:2,
            src: css,
            title:'CSS',
            style:'hover:shadow-blue-500',
        },
        {
            id:3,
            src: javascript,
            title:'JavaScript',
            style:'hover:shadow-yellow-400',
        },
        {
            id:4,
            src: reactImg,
            title:'React',
            style:'hover:shadow-blue-400',
        },
        {
            id:5,
            src: tailwind,
            title:'TailWind',
            style:'hover:shadow-sky-400 duration:500',
        },{
            id:6,
            src: nextjs,
            title:'Next JS',
            style:'hover:shadow-white duration:500',
        },{
            id:7,
            src: python,
            title:'Python',
            style:'hover:shadow-yellow-500 duration:500',
        },{
            id:8,
            src: C,
            title:'C#',
            style:'hover:shadow-indigo-500 duration:500',
        },{
            id:9,
            src: java,
            title:'Java',
            style:'hover:shadow-red-700 duration:500',
        },
        {
            id:11,
            src: Clogo,
            title:'C++',
            style:'hover:shadow-blue-400 duration:500',
        },
        {id:10,
            src: github,
            title:'GitHub',
            style:'hover:shadow-gray-400 duration:500',
            
        },
        {
            id: 11,
            src: node ,
            title:'Node',
            style:'hover:shadow-green-400 durtation:500',
        },
    ]




  return (
    <div name='experience' className='bg-gradient-to-b from-slate-900 to-slate-800 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-4'>Coding Languages I am the most experienceed with</p>
            </div>
            <div  className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
            {
                Lang.map(({id, src, title, style})=>(

   
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` }>
                    <img src={src} alt=''className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>

           
                ))
            }
            </div>
            </div>
        </div>
   
  )
}

export default Experience