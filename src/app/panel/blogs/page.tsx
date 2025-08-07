"use client";
import BlogCard from "@/components/blog-card";
import CreateBlogForm from "@/components/create-blog-form";
import api from "@/handlers/api.handler";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import camelcaseKeys from "camelcase-keys";
import { MoonLoader } from "react-spinners";
const Blogs = () => {
  const [blogs, setBlogs] = useState<object[] | null>(null);
  const [blogOperation, setBlogOperation] = useState<string | null>("get");
  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);

  const [blogObject, setBlogObject] = useState<object>({
    id: null,
    authorId: 5,
    title: "",
    status: "",
    thumbnailfile: File || null,
    category: "",
    readTime: 0,
    authorSummary: "",
    language: "FARSI",
    shortDescription: "",
    content: "",
  });

async function deleteBlog() {
  return await api.delete(`/panel/blogs/${blogObject?.id}`)
}
async function updateBlog() {
  console.log(blogObject)
  
  const formData = new FormData()
    Object.entries(blogObject).forEach(([key, value]) => {
      formData.append(key, value)
    })
    formData.append("authorId", `${blogObject.user.id}`)
    const data = await api.put(
      `/panel/blogs/${blogObject?.id}`,
      formData,
      {
        headers: {
           "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(data)
}
  async function createBlog() {
    const formData = new FormData()
    Object.entries(blogObject).forEach(([key, value]) => {
      formData.append(key, value)
    })
    

    // formData.append("image", blogObject.file)
   for (const pair of formData.entries()) {
  console.log(pair[0], pair[1], typeof pair[1]);
}
    const data = await api.post(
      `/panel/blogs`,
      formData,
      {
        headers: {
           "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  useEffect(() => {
    console.log(blogObject);
  }, [blogObject]);
  useEffect(() => {
    async function getBlogs() {
      setLoader(true)
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST_NAME}/blogs`);
      const transformedData = camelcaseKeys(data.data, { deep: true });
      console.log(transformedData);
      setLoader(false)
      setBlogs(transformedData);
    }

    if (blogOperation === "get") getBlogs();
    else return;
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
          {blogOperation === "update" && (
            <div className="flex flex-row-reverse gap-2">
              <button
              onClick={updateBlog}
              className="flex cursor-pointer hover:bg-(--primary) hover:text-(--neutral) !transition-all ease-in-out duration-300 rounded justify-center font-[iranbakhbold] items-center px-10 py-1 border-[1px] border-(--secondary) text-(--primary)"
            >
              آپدیت بلاگ
            </button>
            <button
              onClick={deleteBlog}
              className="flex cursor-pointer hover:bg-(--primary) hover:text-(--neutral) !transition-all ease-in-out duration-300 rounded justify-center font-[iranbakhbold] items-center px-10 py-1 border-[1px] border-(--secondary) text-(--primary)"
            >
              حذف بلاگ
            </button>
            </div>
  )
}
          {blogOperation === "create" && (
            <button
              onClick={createBlog}
              className="flex cursor-pointer hover:bg-(--primary) hover:text-(--neutral) !transition-all ease-in-out duration-300 rounded justify-center font-[iranbakhbold] items-center px-10 py-1 border-[1px] border-(--secondary) text-(--primary)"
            >
              ثبت بلاگ
            </button>
          )}
        </div>
        {blogOperation === "get" && (
          <div className="w-full h-full flex justify-start mx-5 gap-5 items-center">
            { loader && 
             <div  className="w-full h-full flex justify-center items-center">
              <MoonLoader
              loading={true}
              className="dir-ltr"
              speedMultiplier={1}
              color="#FFFFFF"
              size={100}
            />
             </div>
        

            }
            { !loader && blogs?.map((blog, i) => {
              return <BlogCard blog={blog} key={i} setBlogOperation={setBlogOperation} setBlogObject={setBlogObject} />;
            })}
          </div>
        )}
        {(blogOperation === "create" || blogOperation === "update") && (
          <CreateBlogForm blogObject={blogObject} setBlogObject={setBlogObject} />
        )}
      </div>
    </div>
  );
};

export default Blogs;
