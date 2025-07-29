/* eslint-disable react/jsx-no-undef */
"use client"
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Timeline } from "./ui/timeline";
import Image from "next/image";
// import * as hero from '../../public/images/hero.svg'
import * as cogno1 from "../../public/images/cogno1.png"
import * as cogno2 from "../../public/images/cogno2.png"
import * as cogno3 from "../../public/images/cogno3.png"
// import * as cogno4 from "../../public/images/cogno4.png"
import * as social1 from "../../public/images/social1.png"
import * as social2 from "../../public/images/social2.png"
import * as social3 from "../../public/images/social3.png"
import * as gold1 from "../../public/images/gold1.png"
import * as gold2 from "../../public/images/gold2.png"
import * as gold3 from "../../public/images/gold3.png"

export const Projects = () => {
    const data = [
        {
            title: "1403 نیمه دوم",
            content: (
                <div className="flex flex-col">
                    <p className="text-(--primary) text-right text-md font-normal mb-8">
                    ربات هوش مصنوعی کاگنو
                    </p>
                    <ul className="*:mr-3 dir-rtl mb-5 flex flex-col list-disc text-sm font-[iranbakhregular] text-(--secondary) pt-2">
                        <li>ربات تلگرام</li>
                        <li>مکالمه با مدل زبانی لاما 3</li>
                        <li>مکالمه با مدل زبانی دیپسیک </li>
                        <li> flux و diffusion توانایی تولید تصویر با مدل های </li>
                        <li> pdf و text تحلیل فایل های</li>
                        <li>فیچر عضویت در کانال</li>
                        <li>CI دیپلوی با داکر و داکر کامپوز , دارای پایپ لاین </li>
                        <li>استفاده از سرور لوکال تلگرام برای سرعت بالاتر و برداشتن محدودیت های تلگرام</li>
                    </ul>
                    <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 max-md:ml-3">
                        <Image
                            src={cogno1}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover  h-20 max-md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={cogno2}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover max-md:bg-cover h-20 max-md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={cogno3}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover max-md:bg-cover h-20 max-md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        {/* <Image
                            src={cogno4}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        /> */}
                    </div>
                </div>
            ),
        },
        {
            title: "1403 نیمه دوم",
            content: (
                <div>
                    <p className="text-(--primary) text-right text-md font-normal mb-8">
                    ربات سوشیال مدیا 
                    </p>
                    <ul className="*:mr-3 dir-rtl mb-5  flex flex-col list-disc text-sm font-[iranbakhregular] text-(--secondary) pt-2">
                        <li> ربات تلگرام</li>
                        <li>یوتیوب دانلودر</li>
                        <li>دانلود ویدیو های یوتیوب به صورت صوتی و تصویری با فرمت های مختلف</li>
                        <li>دانلود پلی لیست های یوتیوب</li>
                        <li>فیچر عضویت در کانال</li>
                        <li>CI دیپلوی با داکر و داکر کامپوز , دارای پایپ لاین </li>
                        <li>استفاده از سرور لوکال تلگرام برای سرعت بالاتر و برداشتن محدودیت های تلگرام</li>
                    </ul>
                   
                    <div className="grid grid-cols-2 gap-4  max-md:grid-cols-1 max-md:ml-3">
                        <Image
                            src={social1}                          alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover max-md:bg-cover h-20 max-md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={social2}                         alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover max-md:bg-cover h-20 max-md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={social3}                        alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover max-md:bg-cover h-20 max-md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        
                    </div>
                </div>
            ),
        },
        {
            title: "1403 نیمه اول",
            content: (
                <div>
                    <p className="text-(--primary) text-right text-md font-normal mb-8">
                        پلتفرم خرید و فروش آنلاین طلا
                    </p>
                    <ul className="*:mr-3 dir-rtl  mb-5  flex flex-col list-disc text-sm font-[iranbakhregular] text-(--secondary) pt-2">
                        <li>ماشین حساب و نمودار طلا</li>
                        <li>احراز هویت پیامکی کاربر </li>
                        <li>پنل کاربری , داشبورد , کیف پول , معامله سریع و لیمیت طلا , تحویل حضوری , گزارشات و تیکت پشتیبانی</li>
                        <li>دارای بخش ادمین : لیست کاربران, لیست تراکنش ها و سفارشات , ثبت کارمزد و صندوق طلا , سیستم تیکت , ارسال اعلانات, ثبت گالری های طلا </li>
                    </ul>
                   
                    <div className="grid grid-cols-2 gap-4  max-md:grid-cols-1 max-md:ml-3">
                        <Image
                            src={gold1}                          alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg min-lg:object-cover max-md:bg-cover h-20 max-md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={gold2}                         alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg min-lg:object-cover max-md:bg-cover h-20 max-md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={gold3}                      alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg min-lg:object-cover max-md:bg-cover h-20 max-md:h-60 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="flex flex-col w-full justify-start items-start  mt-[100px]">
                <div className="flex w-full justify-between items-center mt-10">
                <h1 className="pr-10 max-md:pr-5 pb-1 text-5xl bg-clip-text text-transparent bg-gradient-to-b to-gray-800 font-[iranbakhbold] from-[#FFFFFF]">
                    پروژه ها
                </h1>
                    <Link
                        href="/projects"
                        className="ml-4 flex justify-center items-center hover:nth-2:translate-x-[-3px] transition-all duration-200  ease-in-out "
                    >
                        بیشتر
                        <IoIosArrowRoundBack className="text-xl" />
                    </Link>
                    
                </div>
            <Timeline data={data} />
            </div>
        </>
    );
};
