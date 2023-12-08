import React from "react"
import { projects } from "../constants"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Image from "next/image"

type projectProp={
  thumbnail: any,
  name: string,
  description: string,
  link: string,
}

const Projects = () => {
 
  return (
    <section className="max-container relative">
  <div className="absolute inset-0 z-20 h-[80px] max-w-5xl mx-auto">
    <Navbar/>
  </div>
            <h1 className="head-text">
        My  &nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow">
       
    Projects
        </span>
    
      </h1>
      
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
     
        &quot;Passionate web developer from Nepal, dedicated to crafting innovative and user-friendly digital experiences that seamlessly blend functionality with aesthetic appeal.&quot;
        </p>
      </div>

      <div className="flex mt-8  justify-center items-center  w-full flex-wrap gap-12 md:gap-8" >
        {projects && projects.map((project:projectProp)=>(
  
                <div className={`md:w-[46%]  rounded  md:min-w-[300px] w-[80%] min-w-[200px]   cursor-pointer`} key={project.name }    
         
                >
              
               <Link     target="_blank"
                  rel="noopener noreferrer" href={project.link}  className="relative flex flex-col h-auto  bottom-0 left-0 z-10 bg-slate-300"
            > 
            <Image 
            width={1000} height={1000}
             src={project.thumbnail.src} className="  w-full h-auto rounded" alt={project.name} />
       <div className="absolute bottom-0 left-0 flex flex-col px-4 py-2 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200  
       backdrop-blur-md backdrop-filter bg-opacity-25
        ">
       <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
       </div>
       
            </Link>
            </div>  
            
            ))}
           </div>

  
        
     
      
         


     
     

   
    </section>
  )
}

export default Projects