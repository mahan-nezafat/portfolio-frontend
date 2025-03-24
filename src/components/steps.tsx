"use client";
import React from "react";
import { StickySteps } from "../components/ui/stickysteps";
import Image from "next/image";

export const Steps = () => {
    const content = [
        {
            title: "مشاوره و پیدا کردن نیاز ها",
            description:
                
            `در این مرحله با شما در جلسه مشاوره به نیاز ها و مشکلات شما 
پرداخته میشود`,
            content: (
                <div className="flex h-full text-4xl w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                    مشاوره
                </div>
            ),
        },
        {
            title: "ارایه پروپوزال",
            description:
                "بعد پیدا کردن نیاز ها به شما راه حل های پیشنهادی ارایه داده میشود.",
            content: (
                <div className="flex h-full text-4xl w-full items-center justify-center text-white">
                 ارایه پروپوزال   
                    
                </div>
            ),
        },
        {
            title: "ثبت قرار داد",
            description:
                "بعد از انتخاب راه حل مورد نظرتون با توجه به بودجه ها  قرار داد با شما بسته میشود",
            content: (
                <div className="flex h-full text-4xl w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                   ثبت قرار داد
                </div>
            ),
        },
        {
            title: "شروع کار",
            description:
                "پس از ثبت قرار داد من شروع به کار روی پروژه شما میکنم و شما رو از وضعیت پروژه تا زمانی که به اتمام برسد در دوره های زمانی مشخص آگاه میکنم",
            content: (
                <div className="flex text-4xl h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                    شروع کار
                </div>
            ),
        },
        {
            title: "پشتیبانی",
            description:
                "پس از اتمام پروژه من در دوره های زمانی مشخص به شما پشتیبانی های لازمه را میدم همچنین به شما راهنمایی نحوه کار با پروژه و مستندات پروژه داده میشه",
            content: (
                <div className="flex text-4xl h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                    پشتیبانی
                </div>
            ),
        },
    ];
    return (
        <>
            <div className="w-full py-4">
                <h1 className="pr-10 text-5xl bg-clip-text text-transparent bg-gradient-to-b to-gray-800 font-[iranbakhbold] from-[#FFFFFF]">مراحل همکاری </h1>
                <StickySteps content={content} />
            </div>
        </>
    );
};
