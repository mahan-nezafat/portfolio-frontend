// import Image from "next/image";
"use client";
import { Blogs } from "@/components/blogs";
import ConsultationForm from "@/components/consultation-form";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Steps } from "@/components/steps";
import { useState } from "react";
import { Toaster  } from "react-hot-toast";
import { HeartIcon, InstagramIcon, GithubIcon, Linkedin, LinkedinIcon,  } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const [isActive, setActive] = useState<boolean>(false);

    return (
        <div >
            {isActive && (
                <div id="overlay" className=" w-[100%] max-md:w-full h-[100vh] fixed z-100">
                    <div className="blur-none w-[30vw] max-md:w-[90vw] max-md:h-[75vh] h-[80vh] bg-(--neutral)
                     border-[1px] border-(--secondary) rounded-lg fixed max-md:translate-x-[-6%] translate-x-[-120%]  translate-y-5">
                        <ConsultationForm />
                    </div>

                </div>
            )}


            <header className={` ${isActive && "blur-xs"}`} >
                <Nav />
                <Hero isActive={isActive} setActive={setActive} />
            </header>
            <main className={` ${isActive && "blur-xs"}`}>
                <Projects />
                <Services />
                <Steps />
                <Blogs />
            </main>
            {/* <footer>
                <div className="flex flex-col items-center text-(--primary)">
                    <div className="flex flex-col justify-center mb-10 items-center">
                        <span>gmail: nezafatmahan@gmail.com</span>
                        <div className="flex justify-between items-center mt-4 w-full">
                        <Link href="https://instagram.com/mahan._.programmer" className="border-blue-400 border-[1px] p-1 rounded" ><InstagramIcon className=""/></Link>
                        <Link href="https://github.com/mahan-nezafat" className="border-blue-400 border-[1px] p-1 rounded" ><GithubIcon className=""/></Link>
                        <Link href="https://www.linkedin.com/in/mahan-nezafat/" className="border-blue-400 border-[1px] p-1 rounded" ><LinkedinIcon className=""/></Link>
                        </div>
                    </div>
                    <span className="flex flex-row-reverse gap-1">made with 
                    <HeartIcon/>
                    by mahan</span>
                </div>
            </footer> */}
            
            <Toaster position="bottom-left" toastOptions={{duration: 3000}} />

        </div>
    );
}
