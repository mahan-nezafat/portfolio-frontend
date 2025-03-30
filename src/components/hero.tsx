"use client";
import Image from "next/image";

// import Link from "next/link";
// import * as hero from "../../public/images/hero.webp";
import * as heroSvg from "../../public/images/avatar.png";
import { useEffect } from "react";
// import { div } from "motion/react-client";
// import ConsultationForm from "./consultation-form";

interface HeroProps {
    isActive: boolean;
    setActive: (value: boolean) => void;
}
export const Hero = ({ isActive, setActive }: HeroProps, ) => {
    // const [isActive, setActive] = useState<boolean>(false);
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
        
        console.log(isActive)
        return () => window.removeEventListener("click", handleAppointment);
    }, [isActive, setActive]);

    return (
        <>
           
            <div
                onClick={(e) => handleAppointment(e)}
                className="w-full h-full flex justify-between max-md:flex-col-reverse"
            >
                <div className="flex lg:w-[50%] w-[60%] max-md:w-full h-full flex-col lg:py-30 lg:px-10 gap-15 py-10 pr-5 max-md:px-0 max-md:gap-5 max-md:justify-center max-md:items-center">
                    <h1 className="outline-none border-none text-5xl font-[iranbakhbold] max-md:text-3xl max-md:text-center">
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
                    <h3 className="text-xl text-(--secondary)">
                        فول استک دولوپر
                    </h3>
                    <h6 className="text-(--secondary) w-[60%] max-md:w-[95%] max-md:mx-auto max-md:text-center">
                        طراحی , ساخت و استقرار اپلیکیشن های فول استک با سابقه سه
                        سال فعالیت در حوزه وب{" "}
                    </h6>
                    <button
                        onClick={() => setActive(!isActive)}
                        id="appointment"
                        className="flex justify-center items-center rounded bg-(--primary) text-(--neutral) mt-10 w-[60%] max-md:w-[95%] p-2 font-[iranbakhblack]"
                    >
                        مشاوره رایگان
                    </button>
                </div>
                <div className="lg:w-[50%] w-[40%] max-md:w-[90%] max-md:mx-auto max-md:py-5 max-md:px-0 pl-5  h-full relative flex justify-center items-center my-auto">
                    <div>
                        <Image src={heroSvg} alt="hero" className="w-full" />
                    </div>
                </div>
            </div>
        </>
    );
};
