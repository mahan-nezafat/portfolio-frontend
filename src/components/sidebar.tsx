"use client"
import { IconTerminal } from "@tabler/icons-react";
import { CircleDollarSign, LayoutDashboard, LogOut, MapPin, MoveLeft, MoveRight, Package, Paperclip, ReceiptText, Settings, TerminalIcon, Ticket, UserRound, Wallet } from "lucide-react";
import Link from "next/link";
// import { useState } from "react";

const Sidebar = ({collapse, setCollapse}) => {
  
  interface ISidebarItem {
     icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
     name: string
     url: string

  }
  const items:Array<ISidebarItem> = [
    {
      icon: LayoutDashboard,
      name: "داشبورد",
      url: "/panel/dashboard"
    },
     {
      icon: Paperclip,
      name: "بلاگ ها",
      url: "/panel/blogs"
    },
     {
      icon: TerminalIcon,
      name: "پروژه ها",
      url: "/panel/projects"
    },
     {
      icon: UserRound,
      name: "کاربران",
      url: "/panel/users"
    },
     {
      icon: ReceiptText,
      name: "درخواست ها",
      url: "/panel/requests"
    },
   
  ]
  // const [collapse, setCollapse] = useState(false);

  return ( 
    <div className={`border-[1px] border-(--secondary) mr-4 text-(--secondary) rounded ${!collapse && "w-[15%]"} transition-all duration-200 justify-center items-center w-[5%] h-[85vh]`}>
      <div onClick={() => setCollapse(!collapse)} className={`${collapse && ""} flex justify-center w-10  h-8 m-4 text-center  rounded items-center border-[1px] border-(--cover-2)`}>
       {
        collapse ? 
        <MoveLeft size={20}/>
        :
        <MoveRight size={20}/> 

        
       }
       
      </div>
      <div className={`flex flex-col justify-start gap-6 items-center  w-full h-[80%] `}>
        {
        items.map((item, i) => {
          const Icon = item.icon
          return <Link href={item.url} key={i} className={`${!collapse && "!w-[85%] px-2 !justify-between"} justify-center items-center border-[1px] border-(--border) rounded w-[50%] hover:text-(--primary) transition-all duration-75 h-9 text-sm text-(--white-light) font-[iranbakhregular] flex flex-row-reverse  `}>
          <Icon/>
          {!collapse && item.name}
        </Link>
        })
        }
        
      </div>
      <div className="flex flex-col justify-start gap-6 items-center w-full h-[10%] ">
        <Link href="/auth/logout" className={`${!collapse && "w-[85%] px-2 !justify-between"}  border-[1px] border-(--border) rounded  hover:text-red-500  transition-all duration-75 h-9 text-sm text-(--white-light) font-[iranbakhregular] flex flex-row-reverse justify-center px-2 items-center `}>
        <LogOut/>
         {!collapse && "خروج"}
        
        </Link>

      </div>
    </div>
   );
}
 
export default Sidebar;