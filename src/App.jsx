import { TypeAnimation } from "react-type-animation"
import linkedin from "./assets/linkedin.svg"
import resume from "./assets/My Resume.pdf"
import github from "./assets/github.svg"


function App() {


  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center">
        <div className=" flex flex-col gap-2">
          <p className=" text-3xl font-bold md:text-6xl text-[#6c72cb]">DILIP CHOUDHARY</p>
          <TypeAnimation
            sequence={[
              'I am a Software Developer',
              1000,
              'I am a Full Stack Web Developer',
              1000,
            
            ]}
            speed={50}
            className="  text-white md:text-2xl text-lg text-center mt-4"
            repeat={Infinity}
          />
        <div className=" flex justify-center items-center md:mt-12 mt-8 md:gap-8 gap-4">
         <a target="_blank" href="https://www.linkedin.com/in/dilipchoudhary469"> <img src={linkedin} alt="" className=" hover:scale-110 transition-all duration-200 p-[2px] cursor-pointer md:h-10 md:w-10 h-8 w-8 bg-gray-200 rounded-full  " /></a>
         <a  target="_blank" href="https://github.com/Dilip19IT19"> <img src={github} alt="" className=" hover:scale-110 transition-all duration-200 cursor-pointer md:h-10 md:w-10 h-8 w-8 p-[2px] bg-gray-200 rounded-full " /></a>
        </div>
        <div className=" flex justify-center mt-6">
          <a href={resume} download={'my resume'} className=' hover:scale-105 transition-all duration-200  p-1 md:p-2 text-blue-500 border-[1px] border-blue-500 hover:bg-blue-500 hover:border-none hover:text-white rounded-md '>My Resume</a>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
