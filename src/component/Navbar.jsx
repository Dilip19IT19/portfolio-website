import { AlignJustify, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {

  let[isopen, setIsOpen]=useState(false);

  return (
    <nav className='w-full  shadow-md bg-[#2F3651] p-4 md:flex md:justify-around md:items-center    '>

      <div className=' flex justify-around items-center md:mb-0 mb-4'>
        <Link className='md:text-2xl text-xl   text-[#2A86FF] font-bold' to={`/`}>My Portfolio </Link>
        {isopen ? <AlignJustify onClick={()=>setIsOpen(!isopen)} className='md:hidden block text-[#4e93c1]' /> : <X onClick={()=>setIsOpen(!isopen)} className='md:hidden block text-[#4e93c1]' /> }
        
       
      </div>     
        
        <hr className={` ${!isopen ? 'md:hidden mb-4 ' : 'hidden'} ` } />

        <div className={` flex md:flex-row ${!isopen ? '  flex-col gap-4 text-center ': 'hidden'}  md:gap-12`}>

          <NavLink className={({ isActive }) =>
                isActive ? " text-lg md:text-xl  transition-all duration-200  border-[#347efd] text-[#2A86FF] " : "text-white hover:text-[#8EBBFF] hover:left"
                } 
                to={`/`}>Home
              </NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? " text-lg md:text-xl font-semibold text-[#2A86FF] transition-all duration-200 " : "text-white hover:text-[#8EBBFF]"
                } 
                to={`/about`}>About Me
              </NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? " text-lg md:text-xl font-semibold text-[#2A86FF] transition-all duration-200" : "text-white hover:text-[#8EBBFF]"
                } 
                to={`/skills`}>Skills
              </NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? "  text-lg md:text-xl font-semibold text-[#2A86FF] transition-all duration-200" : "text-white hover:text-[#8EBBFF]"
                } 
                to={`/education`}>Education
              </NavLink>
              <NavLink className={({ isActive }) =>
                isActive ? "  text-lg md:text-xl font-semibold text-[#2A86FF] " : "text-white hover:text-[#8EBBFF]"
                } 
                to={`/projects`}>Projects
              </NavLink>

        </div>
    </nav>
  )
}

export default Navbar