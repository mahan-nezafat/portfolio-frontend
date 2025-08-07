import { GithubIcon, HeartIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return ( 
        <>
         <footer>
                <div className="flex mt-5 flex-col items-center text-(--primary)">
                    <div className="flex flex-col justify-center mb-10 items-center">
                        <span>gmail: nezafatmahan@gmail.com</span>
                        <div className="flex justify-between items-center mt-4 w-full">
                            <Link
                                href="https://instagram.com/mahan._.programmer"
                                className="border-blue-400 border-[1px] p-1 rounded"
                            >
                            <InstagramIcon/>
                            </Link>
                            <Link
                                href="https://github.com/mahan-nezafat"
                                className="border-blue-400 border-[1px] p-1 rounded"
                            >
                                <GithubIcon className="" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/mahan-nezafat/"
                                className="border-blue-400 border-[1px] p-1 rounded"
                            >
                                <LinkedinIcon className="" />
                            </Link>
                        </div>
                    </div>
                    <span className="flex flex-row-reverse gap-1">
                        made with
                        <HeartIcon />
                        by mahan
                    </span>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;