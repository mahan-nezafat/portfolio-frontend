"use client"
import { Nav } from "@/components/nav";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

const Panel = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  const [collapse, setCollapse] = useState(false)
  return ( 
    <div className="w-full full">
      <Nav/>
      <div className="w-full h-[85vh] flex justify-around">
        <Sidebar collapse={collapse} setCollapse={setCollapse}/>
        {children}
      </div>
    </div>
   );
}
 
export default Panel;