import React from 'react'
import profile from "../assets/profilemini.jpeg"


function About() {
  return (
    <>
      <div className=' w-full h-screen flex justify-center items-center'>
        <div className=' flex md:flex-row flex-col md:justify-around md:gap-8 gap-4 p-2 items-center'>
          <div className=' text-center md:text-left  flex flex-col gap-4'>
          <p className=' text-white text-lg md:text-2xl'>Hello everyone I am <span className=' text-[#B5E6DB]'>Dilip Choudhary</span> . </p>
          <p className=' text-white text-lg md:text-2xl'>I am a passionate software engineer with a strong background in Web Development.</p>
          <p className=' text-white text-lg md:text-2xl'>I've worked on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>
          <p className=' text-white text-lg md:text-2xl'>I thrive on turning complex ideas into elegant solutions that not only meet user need but also creat lasting impacts.</p>
          </div>
          <img src={profile} height={100} width={250} alt="" className=' rounded-md' />
         
        </div>      
      </div>
    </>
  )
}

export default About