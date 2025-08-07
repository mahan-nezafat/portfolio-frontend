"use client";
import { Nav } from "@/components/nav";
// import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useEffect, useState } from "react";
import {
  BookOpen,
  Eye,
  GithubIcon,
  HeartIcon,
  InstagramIcon,
  Link,
  LinkedinIcon,
} from "lucide-react";
import * as avatar from "../../../public/images/avatar (1).png";
import * as thumbnail from "../../../public/images/unsplash.png";
import Image from "next/image";
import path from "path";
import { useRouter, useSearchParams } from "next/navigation";
import BlogCard from "@/components/blog-card";
import camelcaseKeys from "camelcase-keys";
import api from "@/handlers/api.handler";
import { MoonLoader } from "react-spinners";

const Page = () => {
  const router = useRouter();
  // const params = useSearchParams()
  const [value, setValue] = useState(0);
  const [loader, setLoader] = useState<boolean>(false);
  enum filters {
    recent = 1,
    oldest = 2,
    popular = 3,
  }
  const [blogs, setBlogs] = useState<object[] | null>(null);

  function handleSelect(e) {
    setValue(Number(e.target.parentNode.id));
    if (filters.recent === value) console.log("user clicked recent");
    // console.log(value)
  }
  useEffect(() => {
    console.log(value);
  }, [value]);

  useEffect(() => {
    async function getBlogs() {
      setLoader(true);
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST_NAME}/blogs`);
      const transformedData = camelcaseKeys(data.data, { deep: true });
      console.log(transformedData);
      setLoader(false);
      setBlogs(transformedData);
    }
    getBlogs();
  }, []);
  //   const blogs = [
  //     {
  //       title: "چرا برنامه نویسی برای همه لازم است؟",
  //       views: 30,
  //       readTime: 180,
  //       shortDescription: `یکی از مهارت های مهمی که در زندگی میتونه کمک کنه
  //                                 به افراد`,
  //       thumbnailSrc: thumbnail,
  //       avatarSrc: avatar,
  //       author: "ماهان نظافت",
  //       date: "3 اسفند 1403",
  //       slug: "coding",
  //       category: "coding",
  //     },
  //   ];
  return (
    <>
      <Nav />
      <div>
        <h1 className="pr-10 max-md:pr-5 py-3 mt-5 text-5xl bg-clip-text text-transparent bg-gradient-to-b to-gray-800 font-[iranbakhbold] from-[#FFFFFF]">
          بلاگ ها
        </h1>
        <div className="flex p-10 gap-4 justify-start items-center relative text-(--primary)">
          {/* <ChevronDown className="absolute right-70 text-(--primary)" /> */}
          <h3 className="text-(--secondary) text-xl">فیلتر بر اساس</h3>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="بروز ترین" />
            </SelectTrigger>
            <SelectContent
              onClick={(e) => handleSelect(e)}
              className="text-(--primary) bg-black z-10"
            >
              <SelectGroup className="bg-black">
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem id="1" value="recent">
                  بروز ترین
                </SelectItem>
                <SelectItem id="2" value="oldest">
                  قدیمی ترین
                </SelectItem>

                <SelectItem id="3" value="popular">
                  پر بازدید ترین
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* <select name="" id="" className="text-(--primary) outline-0 text-md border-[rgba(255,255,255,20%)]  border-[1px] w-35 appearance-none h-10 text-center rounded-md">

                    <option value="" className="bg-transparent">بروز ترین</option>
                    </select> */}
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-[95%] gap-6 h-[60vh] max-lg:h-full max-md:h-full mx-auto">
        {loader && (
          <div className="w-full h-full flex justify-center items-center">
            <MoonLoader
              loading={true}
              className="dir-ltr"
              speedMultiplier={1}
              color="#FFFFFF"
              size={100}
            />
          </div>
        )}
        {blogs?.map((blog, i) => {
          return (
            <BlogCard blog={blog} key={i} />
            // <div
            //   key={i}
            //   onClick={() => {
            //     router.push(`/blogs/${blog.slug}`);
            //   }}
            //   className="max-md:w-[70%] max-md:h-130 relative max-sm:h-120 max-sm:w-[90%] max-xs:h-110 max-md:mx-auto  max-lg:w-[45%] max-lg:h-115 max-xl:w-[30%] max-2xl:w-[23%] min-2xl:w-[23%]  min-2xl:h-110 flex flex-col justify-start items-center hover:translate-y-[-6px] transition-all duration-300 ease-in-out rounded h-110 shadow-md shadow-blue-900"
            // >
            //   <Image
            //     src={thumbnail}
            //     alt="thumbnail"
            //     className="w-full h-[60%]"
            //     width={520}
            //     height={100}
            //   />
            //   {/* <div className="img-bg w-full h-[70%]"></div> */}
            //   <div className="flex absolute left-[-10px] bottom-[40%] rounded-tr-lg justify-center items-center ml-2  text-sm py-1 text-center text-white bg-gray-900 border-y-blue-600 px-3 ">
            //     <span>{blog.category}</span>
            //   </div>
            //   <div className="flex mr-4 flex-col gap-4">
            //     <div className="pt-2 flex gap-1 w-full justify-start items-center">
            //       <div className="flex w-[15%] justify-start items-center gap-2 text-sm text-(--secondary)">
            //         <Eye className="w-[20px]" />
            //         <span>{blog.views}</span>
            //       </div>
            //       <div className="flex w-[50%] justify-start items-center gap-2 text-sm text-(--secondary)">
            //         <BookOpen className="w-[20px]" />
            //         <span>{blog.readTime / 60} دقیقه</span>
            //       </div>
            //     </div>
            //     <div className="flex flex-col justify-center items-start text-(--primary) w-[90%]">
            //       <h1 className="text-lg font-[iranbakhbold]">{blog.title}</h1>
            //       <h4 className="text-xs font-light">{blog.shortDesc}</h4>
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
            //         <h3 className="text-xs text-(--primary)">{blog.author}</h3>
            //         <span className="text-xs text-(--secondary)">{blog.date}</span>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>

      {/* <footer>
        <div className="flex mt-5 flex-col items-center text-(--primary)">
          <div className="flex flex-col justify-center mb-10 items-center">
            <span>gmail: nezafatmahan@gmail.com</span>
            <div className="flex justify-between items-center mt-4 w-full">
              <Link
                href="https://instagram.com/mahan._.programmer"
                className="border-blue-400 border-[1px] p-1 rounded"
              >
                <InstagramIcon className="" />
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
      </footer> */}
    </>
  );
};

export default Page;
