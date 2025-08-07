"use client"
import ConsultationForm from "@/components/consultation-form";
import { Nav } from "@/components/nav";
import { GithubIcon, HeartIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
        const [isActive, setActive] = useState<boolean>(false);
    function handleAppointment(e) {
            e.preventDefault();
            if (e.target.id === "appointment" && !isActive) {
               
                return setActive(true);
            }
            if (e.target.id === "overlay" ) {
                return setActive(false);
            }
    
          
        }
        useEffect(() => {
            
    
            window.addEventListener("click", handleAppointment);
            
            // console.log(isActive)
            return () => window.removeEventListener("click", handleAppointment);
        }, [isActive, setActive]);
    return (
        <>
        {isActive && (
            <div id="overlay" className=" w-[100%] max-md:w-full h-[100vh] fixed z-100">
                <div className="blur-none w-[30vw] max-md:w-[90vw] max-md:h-[75vh] h-[80vh] bg-(--neutral)
                 border-[1px] border-(--secondary) rounded-lg fixed max-md:translate-x-[-6%] translate-x-[-120%]  translate-y-5">
                    <ConsultationForm />
                </div>

            </div>
        )}
        <div className={` ${isActive && "blur-xs"}`}>
        
            <Nav />
            <div className="flex flex-col gap-10">
            <h1 className="pr-10 max-md:pr-5 pb-1 mt-15 text-5xl bg-clip-text text-transparent bg-gradient-to-b to-gray-800 font-[iranbakhbold] from-[#FFFFFF]">
            خدمات
                </h1>
            <div className="flex w-full px-10 gap-20 justify-center flex-row flex-wrap">
                <div className="flex flex-col w-[22%] max-lg:w-[40%] max-md:w-[90%] py-3 justify-center items-center border-[rgba(255,255,255,12%)] border-[0.5px] rounded">
                    <h2 className="text-(--primary) text-xl">فرانت اند وب اپلیکیشن</h2>
                    <ul className="list-disc text-(--secondary) px-10 py-3">
                        <li className="py-1">طراحی و دیزاین ux / ui</li>
                        <li className="py-1">پیاده سازی فرانت اند</li>
                        <li className="py-1">استفاده از تکنولوژی های پیشرفته برای بهبود حداکثری سایت</li>
                        <li className="py-1">تقویت seo سایت</li>
                        <li className="py-1">سایت های فروشگاهی و رستوران ها</li>
                        <li className="py-1">سایت های خبری و شرکتی و غیره</li>
                        <li className="py-1">کاملا ریسپانسیو با تمامی موبایل ها و دستگاه های همراه</li>
                        <li className="py-1">دیپلوی و استقرار وب اپ</li>
                        <li className="py-1">تهیه اینماد, دامنه و درگاه اینترنتی</li>
                        <li className="py-1">سه ماه پشتیبانی رایگان</li>
                        <li className="py-1">امکان پرداخت اقساطی</li>
                       
                    </ul>
                    <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-l font-[iranbakhbold] text-center to-[#172FA6] from-[#0FBFE9]">از 100 میلیون تومان</h2>
                </div>
                <div className="flex flex-col w-[22%] max-lg:w-[40%] max-md:w-[90%] py-3 justify-between items-center border-[rgba(255,255,255,12%)] border-[0.5px] rounded">
                    <div className="flex flex-col items-center">
                    <h2 className="text-(--primary) text-xl">بک اند اپلیکیشن</h2>
                    <ul className="list-disc text-(--secondary) px-10 py-3">
                        <li className="py-1">طراحی و معماری بک اند</li>
                        <li className="py-1">پیاده سازی بک اند</li>
                        <li className="py-1">بک اند  فروشگاه ها و رستوران ها </li>
                        <li className="py-1">بک اند سایت های خبری و شرکتی</li>
                        <li className="py-1">بک اند سایت های نوبت دهی</li>
                        <li className="py-1">دیپلوی و استقرار بک اند </li>
                        <li className="py-1">تهیه اینماد, دامنه و درگاه اینترنتی</li>
                        <li className="py-1">سه ماه پشتیبانی رایگان</li>
                        <li className="py-1">امکان پرداخت اقساطی</li>
                      
                        
                       
                    </ul>
                    </div>
                    <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-l font-[iranbakhbold] text-center to-[#172FA6] from-[#0FBFE9]">از 100 میلیون تومان</h2>
                </div>
                <div className="flex flex-col w-[22%] max-lg:w-[40%] max-md:w-[90%]  py-3 justify-between items-center border-[rgba(255,255,255,12%)] border-[0.5px] rounded">
                    <div className="flex flex-col items-center">
                    <h2 className="text-(--primary) text-xl">ساخت ربات ها</h2>
                    <ul className="list-disc text-(--secondary) px-10 py-3">
                        <li className="py-1">طراحی ربات ها</li>
                        <li className="py-1">پیاده سازی ربات ها</li>
                        <li className="py-1">ربات تلگرام مثل ربات های هوش مصنوعی</li>
                        <li className="py-1">ربات اینستاگرام مثل ربات ادمین</li>
                        <li className="py-1">ربات دیسکورد</li>
                        <li className="py-1">دیپلوی و استقرار ربات</li>
                        <li className="py-1">تهیه اینماد, دامنه و درگاه اینترنتی</li>
                        <li className="py-1">سه ماه پشتیبانی رایگان</li>
                        <li className="py-1">امکان پرداخت اقساطی</li>
                        
                      
                        
                       
                    </ul>
                    </div>
                    <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-l font-[iranbakhbold] text-center to-[#172FA6] from-[#0FBFE9]">از 50 میلیون تومان</h2>
                </div>
                
            </div>
            <div className="flex w-[73%] max-sm:flex-col  max-sm:h-120 justify-between mx-auto border-[rgba(255,255,255,12%)] rounded border-[1px] h-60">
                <div>
                    <div className="flex flex-col p-5">
                        <h1 className="text-2xl text-(--primary)">مشاوره</h1>
                        <h3 className="text-sm text-(--secondary)">با ثبت درخواست مشاوره رایگان دریافت کنید</h3>
                    </div>
                    <div className="text-(--secondary) p-5">
                        <ul className="list-disc pr-4">
                            <li> تحلیل و بررسی نیاز های  کسب و کار شما </li>
                            <li>ارایه راه حل های مناسب برای نیاز ها</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center gap-15 px-5 mt-10 max-sm:pb-10">
                    <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-l font-[iranbakhbold] text-center to-[#172FA6] from-[#0FBFE9]">رایگان</h1>
                    <button onClick={() => setActive(true)} className="text-(--neutral) bg-(--primary) font-[iranbakhbold] rounded w-50 h-10 ">ثبت درخواست</button>
                </div>
            </div>
            </div>
            {/* <footer>
                <div className="flex mt-5 flex-col items-center text-(--primary)">
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
        </div>
        </>
    );
};

export default Page;
