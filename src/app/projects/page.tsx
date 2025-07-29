"use client";
import { Nav } from "@/components/nav";
import Image from "next/image";
import * as p1 from "../../../public/images/different-field-logoType-img1.jpg";
import * as v1 from "../../../videos"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
const Projects = () => {
  const router = useRouter();
  const [cardsData, setCardsData] = useState<Array<any>|null>(null)
  const [playVideo, setPlayVideo] = useState<string|null>(null);
  const project = "divar";
  function handleOnClick(projectName) {
    router.push(`/projects/${projectName}`);
  }
  
   useEffect(() => {
    async function getProjects() {
      // axios.get("http://localhost:3001/projects")
     const {data} = await  axios.get("http://localhost:3001/projects")
     setCardsData(data.data)
    }
    getProjects()
  },[cardsData])
  console.log(cardsData)
  return (
    <>
      <Nav />
      <div className="w-full">
        <h1 className="pr-10 max-md:pr-5 py-3 mt-15 text-5xl bg-clip-text text-transparent bg-gradient-to-b to-gray-800 font-[iranbakhbold] from-[#FFFFFF]">
          پروژه ها
        </h1>
        <div className="flex flex-wrap justify-start items-center gap-10 m-10">
          {/* <Image src={p1} alt="project" className="w-20 h-20 opacity-60"/> */}
         
            {cardsData &&
              cardsData.map((card, i) => {
                return( 
                <div key={i+1}
              onMouseEnter={() => setPlayVideo(card.name)}
              onMouseLeave={() => setPlayVideo(null)}
              onClick={() => handleOnClick(card.name)}
              className={`rounded overflow-hidden relative items-center cursor-pointer w-60 h-100 bg-gradient-to-b ${card.background_color}  `}
            >
               {playVideo !== card.name  && (
             <div className="flex flex-col justify-center w-full h-full items-center object-cover">
               <h3 className="font-[iranbakhbold] text-(--primary) text-2xl">{card.name}</h3>
              <span className="text-amber-50">Tech:{card.tech}</span>
             </div>
            )}
            
            <div>
              <video autoPlay muted loop className={`object-cover ${playVideo === card.name ? "opacity-100" : "opacity-0"} duration-500 ease-in-out transition-all absolute left-0 top-0 w-60 h-120`}>
                <source src={card.preview_src} type="video/mp4" />
              </video>
            </div>
          
            </div>
              )
              })
            }
          
          
        </div>
      </div>
    </>
  );
};

export default Projects;
