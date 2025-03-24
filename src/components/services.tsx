"use client";

import { Box, Lock, Sparkles , Database, Bot } from "lucide-react";
import { GlowingEffect } from "../components/ui/glowingeffect";
import React from "react";

export const Services = () => {
    return (
        <>
            <div className="mr-10 mb-10">
                <h1 className="text-5xl font-[iranbakhbold] bg-clip-text text-transparent bg-gradient-to-b to-[#000000] from-[#FFFFFF]">
                    خدمات
                </h1>
            </div>
            <ul className="grid pb-10 w-[95%] mx-auto grid-cols-1 !text-(--primary) grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={<Box className="h-4 w-4 text-(--secondary)" />}
                    title="دیپلوی"
                    description="بیلد و دیپلوی پروژه و انجام پایپ لاین ci/cd"
                />

                <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={<Lock className="h-4 w-4 text-(--secondary)" />}
                    title="امنیت"
                    description="ستاپ کانفیگ ها و برقراری امنیت با توجه به استاندارد های لازمه برای سرور"
                />

                <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={<Bot className="h-4 w-4 text-(--secondary)" />}
                    title="ساخت ربات ها"
                    description="ساخت و توسعه انواع ربات ها از قبیل تلگرام, اینستاگرام و دیسکورد"
                />

                <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={<Sparkles className="h-4 w-4 text-(--secondary)" />}
                    title="فرانت اند"
                    description="طراحی و پیاده سازی فرانت وب اپلیکیشن"
                />

                <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={<Database className="h-4 w-4 text-(--secondary)" />}
                    title="بک اند"
                    description="طراحی و پیاده سازی بک اند اپلیکیشن ها"
                />
            </ul>
        </>
    );
};

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2 ">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-(--primary)">
                                {title}
                            </h3>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-(--secondary)"
                            >
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
