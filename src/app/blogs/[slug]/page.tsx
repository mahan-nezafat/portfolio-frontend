"use client";
import Footer from "@/components/footer";
import { Nav } from "@/components/nav";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import * as avatar from "../../../../public/images/avatar (1).png";
import * as thumbnail from "../../../../public/images/unsplash.png";
import Image from "next/image";
import { BookOpen, Eye } from "lucide-react";
const Page = () => {
    const { slug } = useParams();
    const blog = {
        views: 30,
        readTime: 180,
        title: "چرا برنامه نویسی برای همه لازم است؟",
        shortDesc: `یکی از مهارت های مهمی که در زندگی میتونه کمک کنه
                            به افراد`,
        thumbnailSrc: thumbnail,
        avatarSrc: avatar,
        author: "ماهان نظافت",
        date: "3 اسفند 1403",
        slug: "coding",
        category: "Coding",
        authorDesc:
            "سلام من ماهان هستم و سه ساله که تو حوزه وب به عنوان برنامه نویس فول استک فعالیت میکنم",
        content: {
            mainHeader: "چرا برنامه نویسی برای همه لازم است؟",
            mainParagraph: `یکی از مهارت های مهمی که در زندگی میتونه کمک کنه
                            به افراد`,
            subContent: [
                {
                    subImageSrc: thumbnail,
                    subHeader: "برنامه نویسی یعنی چه؟",
                    subParagraph:
                        "به ساخت برنامه های کامپیوتر که با استفاده از زبان های برنامه نویسی انجام میشود برنامه نویسی میگویند",
                },
                {
                    subImageSrc: thumbnail,
                    subHeader: "برنامه نویسی یعنی چه؟",
                    subParagraph:
                        "به ساخت برنامه های کامپیوتر که با استفاده از زبان های برنامه نویسی انجام میشود برنامه نویسی میگویند",
                },
                {
                    subImageSrc: thumbnail,
                    subHeader: "برنامه نویسی یعنی چه؟",
                    subParagraph:
                        "به ساخت برنامه های کامپیوتر که با استفاده از زبان های برنامه نویسی انجام میشود برنامه نویسی میگویند",
                },
                {
                    subImageSrc: thumbnail,
                    subHeader: "برنامه نویسی یعنی چه؟",
                    subParagraph:
                        "به ساخت برنامه های کامپیوتر که با استفاده از زبان های برنامه نویسی انجام میشود برنامه نویسی میگویند",
                },
            ],
        },
    };
    // console.log(slug)
    return (
        <>
            <Nav />

            <div className="flex items-start w-[95%] mx-auto my-10">
                <div className="flex flex-col w-[70%] mx-auto justify-between gap-10">
                    <div className=" bg-[rgba(255,255,255,5%)] rounded">
                    <Image
                        src={thumbnail}
                        alt="thumbnail"
                        className="w-full h-[500px]"
                        width={520}
                        height={100}
                    />
                    <div className="flex justify-between pt-3 px-8 text-(--secondary) w-full">
                        <span>{blog.date}</span>
                        <div className="w-[20%] flex justify-between">
                            <div className="flex w-[50%] justify-start items-center gap-2 text-sm text-(--secondary)">
                                <Eye className="w-[40px]" />
                                <span>{blog.views}</span>
                            </div>
                            <div className="flex w-[50%] justify-start items-center gap-2 text-sm text-(--secondary)">
                                <BookOpen className="w-[40px]" />
                                <span>{blog.readTime / 60} دقیقه</span>
                            </div>
                        </div>
                        <span>دسته بندی: {blog.category}</span>
                    </div>
                    <div className="flex flex-col justify-center items-start pr-5 my-10 gap-3">
                        <h1 className="text-(--primary) text-3xl font-[iranbakhblack]">{blog.content.mainHeader}</h1>
                        <p className="text-(--primary)">{blog.content.mainParagraph}</p>
                    </div>
                    {blog.content.subContent.map((item,i) => {
                        return (
                            <div key={i} className="flex flex-col justify-start items-start gap-5 my-10 pr-5">
                                {
                                    item.subImageSrc && 
                                    <Image
                                    src={item.subImageSrc}
                                    alt="thumbnail"
                                    className="w-[80%] mx-auto h-[200px]"
                                    width={520}
                                    height={100}
                                />
                                }
                                <h3 className="text-(--primary) text-2xl font-[iranbakhbold]">{item.subHeader}</h3>
                                <p className="text-(--secondary) ">{item.subParagraph}</p>
                            </div>
                        );
                    })}
                    </div>

                    <div className="flex flex-col justify-between bg-[rgba(255,255,255,5%)] rounded pb-10">
                        <div className="flex my-3 justify-between px-3 w-full">
                            <h2 className="text-4xl text-(--primary) font-[iranbakhbold]">نظرات</h2>
                            <button className="from-blue-600 to-blue-800 via-blue-700 bg-gradient-to-l rounded text-white px-10 text-lg py-1">ثبت نظر</button>
                        </div>
                        <div className="flex flex-col w-[95%] rounded px-3 mx-auto py-4 bg-[rgba(255,255,255,6%)]">
                            <div className="flex text-white justify-between w-full">
                                <div className="flex items-center gap-2">
                                    <Image width={50} height={50} src={avatar} alt="avatar"/>
                                    <span>ماهان نظافت</span>
                                </div>
                                <span>1404/2/14</span>
                            </div>
                            <p className="text-(--secondary)">ممنون بابت این بلاگ آموزنده ممنون بابت این بلاگ آموزنده ممنون بابت ا
                            ممنون بابت این بلاگ آموزنده </p>
                            <div className="flex justify-end items-center"> 
                            <button className="bg-(--primary) w-30 rounded h-10 text-sm font-[iranbakhbold] text-(--neutral)">پاسخ به نظر</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[20%] flex-col items-center justify-center gap-5 px-2 text-(--secondary) bg-[rgba(255,255,255,5%)] rounded-xl h-100">
                    <Image width={200} height={200} src={avatar} alt="avatar" />
                    <h3 className="text-(--primary) font-[iranbakhbold]">
                        {blog.author}
                    </h3>
                    <span className="text-(--secondary) ">
                        FullStack Developer
                    </span>
                    <p className="text-center">{blog.authorDesc}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Page;
