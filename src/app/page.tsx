// import Image from "next/image";

import { Blogs } from "@/components/blogs";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Steps } from "@/components/steps";

export default function Home() {
    return (
        <>
            <header>
                <Nav />
                <Hero />
            </header>
            <main>
               
                <Projects />
                <Services />
                <Steps/>
                <Blogs/>
            </main>
        </>
    );
}
