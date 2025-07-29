"use client";
import CreateBlogForm from "@/components/create-blog-form";
import api from "@/handlers/api.handler";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// export interface IBlog {
//   title: string
//   status: string
//   file: File | null
//   category: string
//   readTime: string
//   authorSummary: string
//   language: string
//   shortDesc: string
//   content: string
// }
const Blogs = () => {
  const [blogs, setBlogs] = useState<object[] | null>(null);
  const [blogOperation, setBlogOperation] = useState<string | null>(null);
  const router = useRouter();
  const [blogObject, setBlogObject] = useState<object>({
    title: "",
    status: "",
    file: null,
    category: "",
    readTime: "",
    authorSummary: "",
    language: "FARSI",
    shortDescription: "",
    content: "",
  });

  async function createBlog() {
    console.log(blogObject)
    const data = await api.post(`/panel/blogs`,
      JSON.stringify({
        ...blogObject,
        authorId: 4
      }),{
      headers: {
        "Content-Type": "application/json",
        
      },
      
    });
  }

  useEffect(() => {
    console.log(blogObject);
  }, [blogObject]);
  useEffect(() => {
    async function getBlogs() {
      const data = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST_NAME}/blogs`);
      console.log(data);
      setBlogs(data.data);
    }

    getBlogs();
    if (blogOperation === "get") getBlogs();
    // if create -> post the blog obj to server
    // if update -> put the updated blog obj to server
    // if delete -> delet the blog obj from server
  }, [blogOperation]);
  return (
    <div className="w-[80%] h-full rounded border-[1px] border-(--secondary) ">
      <div className="w-full p-2 flex flex-col h-full gap-2">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setBlogOperation("create")}
              className="flex cursor-pointer rounded justify-center items-center bg-(--primary) px-2 py-1 text-(--neutral)"
            >
              ایجاد بلاگ
            </button>
            <button
              onClick={() => setBlogOperation("get")}
              className="flex cursor-pointer rounded justify-center items-center bg-(--primary) px-2 py-1 text-(--neutral)"
            >
              لیست بلاگ ها
            </button>
          </div>
          {blogOperation === "create" && (
            <button
              onClick={createBlog}
              className="flex cursor-pointer hover:bg-(--primary) hover:text-(--neutral) !transition-all ease-in-out duration-300 rounded justify-center font-[iranbakhbold] items-center px-10 py-1 border-[1px] border-(--secondary) text-(--primary)"
            >
              ثبت بلاگ
            </button>
          )}
        </div>

        {blogOperation === "create" && (
          <CreateBlogForm blogObject={blogObject} setBlogObject={setBlogObject} />
        )}
      </div>
    </div>
  );
};

export default Blogs;
