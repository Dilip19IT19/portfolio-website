import React from 'react'
import java from "../assets/java.svg"
import js from "../assets/js.svg"
import ts from "../assets/ts.svg"
import mysql from "../assets/mysql.svg"
import mongodb from "../assets/mongodb.svg"
import reactjs from "../assets/reactjs.svg"
import nextjs from "../assets/nextjs.svg"
import nodejs from "../assets/nodejs.svg"
import tailwind from "../assets/tailwind.svg"
import git from "../assets/git.svg"
import docker from "../assets/docker.svg"
import redux from "../assets/redux.svg"




function Skills() {
  return (
    <div className=' md:mt-12 mt-8 w-full flex flex-col justify-center items-center'>
      <div className=' p-1 text-center'>
          <p className=' text-lg md:text-center text-white md:text-2xl'>I love to learn new things and experiment with new technologies.</p>
          <p className=' my-2 text-lg md:text-2xl text-white'>These are some of the major languages, technologies, tools and platforms I have worked with :</p>
      </div>
      <div className=' md:mt-12 mb-2'>
        <p className=' text-center text-[#8ebbff] hover:underline text-2xl md:text-3xl'>Programming Languages</p>
        <div className=' my-4 flex gap-8 justify-center'>
          <img src={java} alt="" className=' transition-all duration-200 md:h-12 md:w-12 h-8 w-8 hover:scale-110 cursor-pointer' />
          <img src={js} alt="" className=' transition-all duration-200 md:h-12 md:w-12 h-8 w-8 hover:scale-110 cursor-pointer' />
          <img src={ts} alt="" className=' transition-all duration-200 md:h-12 md:w-12 h-8 w-8 hover:scale-110 cursor-pointer' />
        </div>
      </div>
      <div className=' mb-4'>
        <p className=' text-center text-[#8ebbff] hover:underline text-2xl md:text-3xl'>Databases</p>
        <div className=' my-1 flex gap-8 justify-center items-center'>
          <img src={mysql} alt="" className=' transition-all duration-200 md:h-24 md:w-24 h-20 w-20 hover:scale-110 cursor-pointer' />
          <img src={mongodb} alt="" className=' transition-all duration-200 md:h-24 md:w-24 h-20 w-20 hover:scale-110 cursor-pointer' />
        </div>
      </div>
      <div className=' my-1'>
        <p className=' text-center text-[#8ebbff] hover:underline text-2xl md:text-3xl'>Frameworks & Technologies</p>
        <div className=' my-4 flex gap-8 justify-center items-center'>
          <img src={reactjs} alt="" className=' transition-all duration-200 md:h-14 md:w-14 h-12 w-12 hover:scale-110 cursor-pointer' />
          <img src={nextjs} alt="" className=' transition-all duration-200 md:h-12 md:w-12 h-10 w-10  hover:scale-110 cursor-pointer' />
          <img src={nodejs} alt="" className=' transition-all duration-200 md:h-12 md:w-12 h-10 w-10 hover:scale-110 cursor-pointer' />
          <img src={tailwind} alt="" className=' transition-all duration-200 md:h-14 md:w-14 h-12 w-12 hover:scale-110 cursor-pointer' />
        </div>
      </div>
      <div className=' my-1'>
        <p className=' text-center text-[#8ebbff] hover:underline text-2xl md:text-3xl'>Tools & Platforms</p>
        <div className=' my-4 flex gap-8 justify-center items-center'>
          <img src={git} alt="" className=' transition-all duration-200 md:h-14 md:w-14 h-10 w-10 hover:scale-110 cursor-pointer' />
          <img src={docker} alt="" className=' transition-all duration-200 md:h-16 md:w-16 h-12 w-12 hover:scale-110 cursor-pointer' />
          <img src={redux} alt="" className=' transition-all duration-200 md:h-12 md:w-12 h-8 w-8 hover:scale-110 cursor-pointer' />
         
        </div>
      </div>
    </div>
  )
}

export default Skills