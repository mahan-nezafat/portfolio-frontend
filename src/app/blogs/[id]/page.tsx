"use client";
export const runtime = "edge";
// import Footer from "@/components/footer";
import { Nav } from "@/components/nav";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import * as avatar from "../../../../public/images/avatar (1).png";
// import * as thumbnail from "../../../../public/images/unsplash.png";
// import * as thumbnail2 from "../../../../public/images/istock.jpg";
import DOMPurify from "dompurify"
import Image from "next/image";
import { BookOpen, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import api from "@/handlers/api.handler";
import camelcaseKeys from "camelcase-keys";
import { MoonLoader } from "react-spinners";
const Page = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<null | object>(null);
  // console.log(blog?.content?.split("<p></p>"));
  const sanitizedContent = DOMPurify.sanitize(blog?.content)
  useEffect(() => {
    async function getBlog() {
      const { data } = await api.get(`/panel/blog/?id=${id}`);
      console.log(data.data);
      const transformedData = camelcaseKeys(data.data, { deep: true });
      return setBlog(transformedData);
    }
    getBlog();
  }, [id]);
  // const blog = {
  //     views: 30,
  //     readTime: 180,
  //     title: "چرا برنامه نویسی برای همه لازم است؟",
  //     shortDesc: `یکی از مهارت های مهمی که در زندگی میتونه کمک کنه
  //                         به افراد`,
  //     thumbnailSrc: thumbnail,
  //     avatarSrc: avatar,
  //     author: "ماهان نظافت",
  //     date: "3 اسفند 1403",
  //     slug: "coding",
  //     category: "Coding",
  //     authorDesc:
  //         "سلام من ماهان هستم و سه ساله که تو حوزه وب به عنوان برنامه نویس فول استک فعالیت میکنم",
  //     content: {
  //         mainHeader: "چرا برنامه نویسی برای همه لازم است؟",
  //         mainParagraph: `یکی از مهارت های مهمی که در زندگی میتونه کمک کنه
  //                         به افراد`,
  //         subContent: [
  //             {
  //                 subImageSrc: thumbnail,
  //                 subHeader: "برنامه نویسی یعنی چه؟",
  //                 subParagraph:
  //                     "به ساخت برنامه های کامپیوتر که با استفاده از زبان های برنامه نویسی انجام میشود برنامه نویسی میگویند",
  //             },
  //             {
  //                 subImageSrc: thumbnail,
  //                 subHeader: "زبان آینده‌ساز دنیای دیجیتال",
  //                 subParagraph:
  //             "برنامه‌نویسی دیگر فقط مخصوص مهندسان نرم‌افزار نیست؛ بلکه تبدیل به مهارتی پایه مثل خواندن و نوشتن شده است. در دنیایی که همه چیز از گوشی هوشمند تا یخچال و خودرو با نرم‌افزار کار می‌کند، درک منطق برنامه‌نویسی باعث می‌شود افراد بهتر بتوانند با تکنولوژی تعامل داشته باشند و تصمیمات هوشمندانه‌تری بگیرند. حتی در مشاغل غیرمرتبط، آشنایی با اصول برنامه‌نویسی می‌تواند روند کار را بهینه کند."
  //             },
  //             {
  //                 subImageSrc: thumbnail,
  //                 subHeader:" پرورش تفکر منطقی و حل مسئله",
  //                 subParagraph:
  //              `برنامه‌نویسی تنها نوشتن کد نیست؛ بلکه فرآیندی است که ذهن را برای تفکر گام‌به‌گام و حل مسئله تربیت می‌کند. کسانی که برنامه‌نویسی یاد می‌گیرند، در تحلیل مسائل، پیدا کردن الگوها و یافتن راه‌حل‌های مؤثر مهارت پیدا می‌کنند. این نوع تفکر، در زندگی شخصی و حرفه‌ای بسیار کاربردی است، حتی اگر فرد هیچ‌گاه به‌طور مستقیم کدنویسی نکند.
  //              `

  //             },
  //             {
  //                 subImageSrc: thumbnail,
  //                 subHeader: " فرصت‌های شغلی و استقلال مالی",
  //                 subParagraph:
  //              `امروزه با یادگیری برنامه‌نویسی می‌توان بدون نیاز به سرمایه زیاد، پروژه‌های شخصی راه‌اندازی کرد، فریلنسری انجام داد یا در شرکت‌های مطرح دنیا به‌صورت دورکاری فعالیت کرد. این مهارت، دروازه‌ای است به دنیای فرصت‌ها که محدود به موقعیت جغرافیایی یا مدرک دانشگاهی نیست. یادگیری آن می‌تواند به افراد استقلال مالی و انعطاف‌پذیری شغلی ببخشد.
  //              `
  //             },
  //         ],
  //     },
  // };

  // console.log(slug)
  return (
    <div className="">
      <Nav />
      {!blog && (
        <div className="w-full h-[500px] flex justify-center items-center">
          <MoonLoader
            loading={true}
            className="dir-ltr"
            speedMultiplier={1}
            color="#FFFFFF"
            size={100}
          />
        </div>
      )}

   
        <div className="flex  w-[95%] h-[1100px]">
          { blog && (

          
         <div className="flex items-start  w-[100%] mx-auto my-10">
           <div className="flex flex-col w-[70%] mx-auto justify-between gap-10">
            <div className=" bg-[rgba(255,255,255,5%)] rounded">
              <Image
                src={blog?.thumbnailSrc}
                alt="thumbnail"
                className="w-full h-[500px] rounded"
                width={520}
                height={100}
              />
              <div className="flex justify-start gap-3 pt-3 px-8 text-(--secondary) w-full">
                <span>{blog?.date}</span>
                <div className="w-[20%] flex justify-start">
                  <div className="flex w-[30%] justify-start items-center text-sm text-(--secondary)">
                    <Eye className="w-[40px]" />
                    <span>{blog?.views}</span>
                  </div>
                  <div className="flex w-[50%] justify-start items-center gap-2 text-sm text-(--secondary)">
                    <BookOpen className="w-[40px]" />
                    <span>{blog?.readTime / 60} دقیقه</span>
                  </div>
                </div>
                <span>دسته بندی: {blog?.category}</span>
              </div>
              <div className="flex flex-col justify-center items-start pr-5 my-10 gap-3">
                {/* <h1 className="text-(--primary) text-3xl font-[iranbakhblack]">{blog?.content}</h1>
                <p className="text-(--primary)">{blog?.content}</p> */}
                <div className="text-(--primary)" dangerouslySetInnerHTML={{__html: sanitizedContent}}/>
              </div>
            
            </div>

            <div className="flex flex-col justify-between bg-[rgba(255,255,255,5%)] rounded pb-10">
              <div className="flex my-3 justify-between px-3 w-full">
                <h2 className="text-4xl text-(--primary) font-[iranbakhbold]">نظرات</h2>
                <button className="ml-4 hover:opacity-90 from-blue-600 to-blue-800 via-blue-700 bg-gradient-to-l rounded text-white px-10 text-lg py-1">
                  ثبت نظر
                </button>
              </div>
              <div className="flex flex-col w-[95%] rounded px-3 mx-auto py-4 bg-[rgba(255,255,255,6%)]">
                <div className="flex text-white justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Image width={50} height={50} src={avatar} alt="avatar" />
                    <span>ماهان نظافت</span>
                  </div>
                  <span>1404/2/14</span>
                </div>
                <p className="text-(--secondary)">
                  ممنون بابت مطالعه بلاگ نظراتتون رو این پایین میتوانید کامنت کنید.
                </p>
                <div className="flex justify-end items-center">
                  <button className="bg-(--primary) w-30 rounded h-10 text-sm font-[iranbakhbold] text-(--neutral)">
                    پاسخ به نظر
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[20%] flex-col items-center justify-center gap-5 px-2 text-(--secondary) bg-[rgba(255,255,255,5%)] rounded-xl h-100">
            <Image width={200} height={200} src={avatar} alt="avatar" />
            <h3 className="text-(--primary) font-[iranbakhbold]">ماهان نظافت</h3>
            <span className="text-(--secondary) ">FullStack Developer</span>
            <p className="text-center">
              سلام من ماهان هستم و سه ساله که تو حوزه وب به عنوان برنامه نویس فول استک فعالیت میکنم
            </p>
          </div>
         </div>
        )}
        </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
