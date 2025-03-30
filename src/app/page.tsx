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

export default function Home() {
    const [isActive, setActive] = useState<boolean>(false);

    return (
        <div >
            {isActive && (
                <div id="overlay" className=" w-[100%] max-md:w-full h-[100vh] fixed z-100">
                    <div className="blur-none w-[30vw] max-md:w-[90vw] max-md:h-[75vh] h-[80vh] bg-(--neutral)
                     border-[1px] border-(--secondary) rounded-lg fixed translate-x-[-6%] translate-y-5">
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
        </div>
    );
}
