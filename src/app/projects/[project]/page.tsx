"use client";
export const runtime = 'edge';
import { Nav } from "@/components/nav";
import Image from "next/image";
import * as avatar from "../../../../public/images/avatar (1).png";
import Footer from "@/components/footer";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";

const Project = () => {
  useEffect(() => {
    async function getProjects() {
      axios.get("http://localhost:3001/projects")
     const projects = await  axios.get("http://localhost:3001/projects")
     console.log(projects.data.data)
    }
    getProjects()
  },[])
  const project = {
    name: "لیندینگ پیج دیوار",
    tech: " HTML, CSS, JS",
    backgroundColor: "to-red-900 from-red-600",
    previewUrl: "https://portfolio-storage.storage.iran.liara.space/v1.mp4",
    projectName: "divar",
    projectUrl: "https://divar-home-page.vercel.app/",
    videoUrl: "https://portfolio-storage.storage.iran.liara.space/v1.mp4",
    content: [{h1: "توضیحات پروژه",p: "لیندیگ پیج دیوار که با تکنولوژی های html,css,javascript ساخته شده "} ]
  };
  return (
    <>
      <Nav />

      <div className="flex items-start w-[95%] mx-auto my-10">
        <div className="flex flex-col w-[70%] mx-auto justify-between gap-10 bg-[rgba(255,255,255,5%)] rounded-xl">
          <div className="w-full h-50 ">
            <video autoPlay muted loop  className={`w-full h-full`}>
              <source src={project.videoUrl} type="video/mp4" />
            </video>
          </div>
          <div className="text-(--primary) flex w-full justify-between  items-center px-4">
            <h1 className="text-2xl font-[iranbakhbold] ">{project.name}</h1>
            <div>
              <Link href={project.projectUrl} target="blank" className="bg-(--primary) mb-3 font-[iranbakhbold] text-(--neutral) flex justify-center items-center px-2 py-1 text-md rounded">لینک سایت
            <ExternalLink/>
            </Link>
            <p>TECH: {project.tech}</p>
            </div> 
          </div>
          <div className="text-(--primary) flex-col px-4 flex w-full justify-start py-5">
            {
              project.content.map((item, i) => {
                return(
                  <div className="flex flex-col w-full gap-3" key={i}>
                    <h1 className="text-lg">{item.h1}</h1>
                    <p className="text-(--secondary)">{item.p}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex w-[20%] flex-col items-center justify-center gap-5 px-2 text-(--secondary) bg-[rgba(255,255,255,5%)] rounded-xl h-100">
          <Image width={200} height={200} src={avatar} alt="avatar" />
          <h3 className="text-(--primary) font-[iranbakhbold]">ماهان نظافت</h3>
          <span className="text-(--secondary) ">FullStack Developer</span>
          <p className="text-center">
            سلام من ماهان هستم و سه ساله که تو حوزه وب به عنوان برنامه نویس فول استک فعالیت میکنم
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
