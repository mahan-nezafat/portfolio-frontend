"use client";
import { BookOpen, Eye } from "lucide-react";
import Image from "next/image";
import * as avatar from "../../public/images/avatar (1).png";
import { usePathname, useRouter } from "next/navigation";
import moment from "jalali-moment";
import api from "@/handlers/api.handler";
import camelcaseKeys from "camelcase-keys";
import { useState } from "react";
const ProjectCard = ({ project, setProjectOperation, setProjectObject }) => {
  const router = useRouter();
  const path = usePathname();
  const [playVideo, setPlayVideo] = useState<string | null>(null);
  console.log(path);
  function toPersianNumbers(numbers: string) {
    return numbers.replace(/\d/g, (num) => "۰۱۲۳۴۵۶۷۸۹"[num]);
  }
  async function getOneProject() {
    let data;
    if (path.startsWith("/panel")) {
      data = await api.get(`/panel/project/?id=${project.id}`);
      setProjectOperation("update");
    } else if (path.startsWith("/projects")) {
      data = await api.get(`/projects/project/?id=${project.id}`);
      router.push(`/projects/${project.id}`);
    }
    // const { data } = await api.get(`/panel/project/?id=${project.id}`);
    console.log(data?.data.data);
    const transformedData = camelcaseKeys(data?.data.data, { deep: true });
    return setProjectObject(transformedData);
  }
  return (
    <div className="w-60">
      <div
        onMouseEnter={() => setPlayVideo(project.name)}
        onMouseLeave={() => setPlayVideo(null)}
        onClick={() => getOneProject()}
        className={`rounded overflow-hidden relative items-center cursor-pointer w-full h-100 bg-gradient-to-b ${project.backgroundColor}  `}
      >
        {playVideo !== project.name && (
          <div className="flex flex-col justify-center w-full h-full items-center object-cover">
            <h3 className="font-[iranbakhbold] text-(--primary) text-2xl">{project.name}</h3>
            <span className="text-amber-50">Tech:{project.tech}</span>
          </div>
        )}

        <div>
          <video
            autoPlay
            muted
            loop
            className={`object-cover ${
              playVideo === project.name ? "opacity-100" : "opacity-0"
            } duration-500 ease-in-out transition-all absolute left-0 top-0 w-60 h-120`}
          >
            <source src={project.videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>

    // <div
    //   onClick={() => {
    //     if (path.startsWith("/panel")) {
    //       setProjectOperation("update");
    //       return getOneProject();
    //     }
    //     router.push(`/projects/${project.id}`);
    //   }}
    //   className="max-md:w-[70%] max-md:h-130 relative max-sm:h-120 max-sm:w-[90%] max-xs:h-110 max-md:mx-auto  max-lg:w-[45%] max-lg:h-115 max-xl:w-[30%] max-2xl:w-[23%] min-2xl:w-[23%]  min-2xl:h-110 flex flex-col justify-start items-center hover:translate-y-[-6px] !transition-all duration-300 ease-in-out rounded h-110 shadow-md shadow-blue-900"
    // >
    //   <Image
    //     src={project?.thumbnailSrc ? project?.thumbnailSrc : null}
    //     alt="thumbnail"
    //     className="w-full h-[60%] rounded"
    //     width={520}
    //     height={100}
    //   />
    //   {/* <div className="img-bg w-full h-[70%]"></div> */}
    //   <div className="flex absolute left-[-10px] bottom-[40%] rounded-tr-lg justify-center items-center ml-2  text-sm py-1 text-center text-white bg-gray-900 border-y-blue-600 px-3 ">
    //     <span>{project?.category}</span>
    //   </div>
    //   <div className="flex pr-3 flex-col gap-4 w-full">
    //     <div className="pt-2 flex gap-1 w-full justify-start items-center">
    //       <div className="flex w-[15%] justify-start items-center gap-2 text-sm text-(--secondary)">
    //         <Eye className="w-[20px]" />
    //         <span>{project?.views}</span>
    //       </div>
    //       <div className="flex w-[70%] justify-start items-center gap-2 text-sm text-(--secondary)">
    //         <BookOpen className="w-[20px]" />
    //         <span>{Number(project?.readTime) / 60} دقیقه</span>
    //       </div>
    //     </div>
    //     <div className="flex flex-col justify-center items-start text-(--primary) w-[90%]">
    //       <h1 className="text-lg font-[iranbakhbold]">{project?.title}</h1>
    //       <h4 className="text-xs font-light">{project?.shortDescription}</h4>
    //     </div>
    //     <div className="flex justify-start gap-2 items-center pb-1">
    //       <Image
    //         // className="w-10 h-10"
    //         width={70}
    //         height={70}
    //         src={avatar}
    //         alt="avatar"
    //       />
    //       <div className="flex flex-col">
    //         <h3 className="text-xs text-(--primary)">{`${project?.user.firstName} ${project?.user.lastName}`}</h3>
    //         <span className="text-xs text-(--secondary)">
    //           {toPersianNumbers(
    //             moment(project?.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")
    //           )}
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
