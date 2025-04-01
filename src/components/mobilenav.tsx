import React from "react";
import { FloatingDock } from "./ui/floatingdock";
import {
  IconBrandGithub,
  IconBrandBlogger,
  IconBrandInstagram,
  IconTool,
  IconHome,
  IconServicemark,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function MobileNav() {
  const links = [
    {
      title: "خانه",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "پروژه ها",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "خدمات",
      icon: (
        <IconTool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },
    
    {
      title: "بلاگ",
      icon: (
        <IconBrandBlogger className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blogs",
    },

    {
      title: "اینستاگرام",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/mahan._.programmer",
    },
    {
      title: "گیت هاب",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/mahan-nezafat",
    },
  ];
  return (
    <div className="flex items-center justify-center h-full w-full">
      <FloatingDock
        items={links}
        desktopClassName="font-[iranbakhbold] border-slate-700 border-[1px]"
      />
    </div>
  );
}
