"use client";
// import Image from "next/image";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { LuLanguages } from "react-icons/lu";
export const Nav = () => {
    return (
        <>
            <nav className="flex w-full h-10 my-2 pb-2 justify-between items-center faded-border-buttom">
                <div className="flex mr-2 w-[20%] h-full items-center text-(--secondary)">
                    <ul className="flex  w-full justify-around  *:hover:text-(--primary) *:transition-colors *:duration-300 *:ease-in-out">
                        {/* <Image alt="" src=""/> */}
                        <Link className="" href="/">
                            خانه
                        </Link>
                        <Link href="/blogs">بلاگ</Link>
                        <Link href="/services">خدمات</Link>
                        <Link href="/projects">پروژه ها</Link>
                    </ul>
                </div>
                <div className="flex w-[20%] h-full ml-4 gap-4 items-center justify-start flex-row-reverse">
                    {/* <button className="flex items-center justify-around bg-foreground text-background w-30 h-8 p-0.5 rounded"> */}
                    <Link
                        href="/resume"
                        className="hover:opacity-95 font-[iranbakhblack] flex items-center justify-around bg-foreground text-background w-30 h-8 p-0.5 rounded"
                    >
                        <HiOutlineDownload className="text-2xl" />
                        رزومه
                    </Link>
                    {/* </button> */}
                    <button className="flex justify-center items-center  gap-1 border-(--secondary)">
                        <LuLanguages />
                        <span>Language</span>
                    </button>
                </div>
            </nav>
        </>
    );
};
