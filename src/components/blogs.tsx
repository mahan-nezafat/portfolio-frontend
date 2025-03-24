import Image from "next/image";
import Link from "next/link";
import { BookOpen, Eye } from "lucide-react";
import { IoIosArrowRoundBack } from "react-icons/io";
import * as avatar from "../../public/images/avatar.png"

export const Blogs = () => {
    return (
        <>
            <div className="flex w-full justify-between items-center mt-10">
                <h1 className="pr-10 text-5xl bg-clip-text text-transparent bg-gradient-to-b to-gray-800 font-[iranbakhbold] from-[#FFFFFF]">
                    بلاگ
                </h1>
                <Link
                    href="/projects"
                    className="ml-4 flex justify-center items-center hover:nth-2:translate-x-[-3px] transition-all duration-200  ease-in-out "
                >
                    بیشتر
                    <IoIosArrowRoundBack className="text-xl" />
                </Link>
            </div>
            <div className="py-10 px-10 flex justify-around items-center ">
                
                <div className="flex flex-col justify-between items-center hover:translate-y-[-6px] transition-all duration-300 ease-in-out rounded w-[23%] h-110 shadow-md shadow-blue-900">
                    <div className="img-bg w-full h-[70%]"></div>
                    <div className="flex mr-4 flex-col gap-4">
                        <div className="pt-2 flex gap-1 w-full justify-start items-center">
                            <div className="flex w-[15%] justify-start items-center gap-2 text-sm text-(--secondary)">
                                <Eye className="w-[20px]"/>
                                <span>32</span>
                            </div>
                            <div  className="flex w-[23%] justify-start items-center gap-2 text-sm text-(--secondary)">
                                <BookOpen className="w-[20px]"/>
                                <span>3 دقیقه</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start w-[90%]">
                            <h1 className="text-lg font-[iranbakhbold]">
                                چرا برنامه نویسی برای همه لازم است؟
                            </h1>
                            <h4 className="text-xs font-light">
                                یکی از مهارت های مهمی که در زندگی میتونه کمک کنه
                                به افراد
                            </h4>
                        </div>
                        <div className="flex justify-start gap-2 items-center pb-1">
                            <Image className="w-10 h-10" src={avatar} alt="avatar" />
                            <div className="flex flex-col">
                                <h3 className="text-xs">ماهان نظافت</h3>
                                <span className="text-xs text-(--secondary)">
                                    3 اسفند 1403
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
               
            </div>
        </>
    );
};
