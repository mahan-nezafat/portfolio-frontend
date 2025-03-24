"use client";
import Image from "next/image";

import Link from "next/link";
// import * as hero from "../../public/images/hero.webp";
import * as heroSvg from "../../public/images/avatar.png";
export const Hero = () => {
    return (
        <div className="w-full h-full flex justify-between ">
            <div className="flex w-[50%] h-full flex-col py-30 px-10 gap-15">
                <h1 className="outline-none border-none text-5xl font-[iranbakhbold]">
                    <span className=" bg-clip-text text-transparent bg-gradient-to-b to-[#020024]   from-[#FFFFFF]">
                        سلام من{" "}
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-l  to-[#172FA6] from-[#0FBFE9]">
                        ماهان
                    </span>{" "}
                    <span className=" bg-clip-text text-transparent bg-gradient-to-b to-[#020024]   from-[#FFFFFF]">
                        هستم
                    </span>
                </h1>
                <h3 className="text-xl text-(--secondary)">فول استک دولوپر</h3>
                <h6 className="text-(--secondary) w-[60%]">
                    طراحی , ساخت و استقرار اپلیکیشن های فول استک با سابقه سه سال
                    فعالیت در حوزه وب{" "}
                </h6>
                <Link
                    href=""
                    className="flex justify-center items-center rounded bg-(--primary) text-(--neutral) mt-10 w-[60%] p-2 font-[iranbakhblack]"
                >
                    مشاوره رایگان
                </Link>
            </div>
            <div className="w-[50%] h-full relative flex justify-center items-center my-auto">
                <div 
                // className="relative flex border-(--secondary) border-2 w-100 h-100 overflow-hidden rounded-full bg-gradient-to-b to-(--neutral)   from-[#FFFFFF]"
                >
                <Image
                    src={heroSvg}
                    alt="hero"
                    className="w-full"
                    
                
                />

                </div>
            </div>
        </div>
    );
};
