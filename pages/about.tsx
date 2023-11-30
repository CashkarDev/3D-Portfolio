import React from "react"
import {skills} from "../constants/index"
import Navbar from "../components/Navbar";
import Image from "next/image";

type skillProps={
  imageUrl: any;
  name: string;
  type: string;
}

const about = () => {
  console.log(skills)
  return (
    <section className="max-container relative">
    <span className="absolute inset-0 z-20 max-w-5xl 
     mx-auto h-[80px]">
    <Navbar/>
  </span>
      <h1 className="head-text">
        Hello, I&apos;m &nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow">
     
          Kritan &nbsp;
        </span>
        👋
      </h1>
      
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
     
        &quot;Passionate web developer from Nepal, dedicated to crafting innovative and user-friendly digital experiences that seamlessly blend functionality with aesthetic appeal.&quot;
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="flex justify-center item-center flex-wrap">
        {skills && skills.map((skill:skillProps)=>(
          <div className="block-container w-20 h-20" key={skill.name}>
     <div className="btn-front rounded-xl flex justify-center items-center">
                 <div className="btn-back rounded-xl" />
            <Image src={skill.imageUrl.src} width={100} height={100}     alt={skill.name}   className="w-1/2 h-1/2 object-contain" />
            </div>        
          </div>
        ))}
      </div>
      </div>
      </section>
  )
}

export default about