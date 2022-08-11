import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaNode, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiMaterialui, SiRedux, SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";


const Skills = () => {

  const IconContainer = (props) => {
    return <div className='flex items-center'>
      {props.children}
    </div>
  }

  const IconName = (props) => {
    return <span className="text-white font-thin pl-3 ">
      {props.children}
    </span> 
  }
  
  return (
    <section className='flex flex-col w-full md:flex-row justify-center bg-black py-16 px-12 md:px-14 lg:px-32 lg:py-32'>
      <div className="text-white text-left md:text-right text-2xl w-64 md:mr-24">
          my <span className="text-main"><em>skills</em></span>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-7 gap-x-4 w-full max-w-2xl pt-9 md:p-0 '>

        <IconContainer>
          <FaHtml5 className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>HTML</IconName>
        </IconContainer>
        <IconContainer>
          <FaCss3Alt className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>CSS</IconName>
        </IconContainer>
        <IconContainer>
          <SiJavascript className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName> Javascript</IconName>
        </IconContainer>
        <IconContainer>
          <SiTypescript className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName> Typescript</IconName>
        </IconContainer>
        <IconContainer>
          <FaReact className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>ReactJS</IconName>
        </IconContainer>
        <IconContainer>
          <FaAngular className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>AngularJS</IconName>
        </IconContainer>
        <IconContainer>
          <SiRedux className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>Redux</IconName>
        </IconContainer>
        <IconContainer>
          <TbApi className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>REST API</IconName>
        </IconContainer>
        <IconContainer>
          <SiMaterialui className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>Material-UI</IconName>
        </IconContainer>
        <IconContainer>
          <SiTailwindcss className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>Tailwind</IconName>
        </IconContainer>
        <IconContainer>
          <FaNode className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>NodeJS</IconName>
        </IconContainer>
        <IconContainer>
          <SiMongodb className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>MongoDB</IconName>
        </IconContainer>
        <IconContainer>
          <FaGitAlt className='text-white hover:text-main cursor-pointer ease-in-out duration-300 text-6xl' />
          <IconName>Git</IconName> 
        </IconContainer>            
      </div>
    </section>
  )
}

export default Skills