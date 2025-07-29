"use client"
import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'
import StarterKit from "@tiptap/starter-kit";
import { IBlog } from "@/app/panel/blogs/page";
const CreateBlogForm = ({blogObject, setBlogObject}) => {
  const [file, setFile] = useState<File|null>(null)
  // const editor = useEditor({
  //   extensions: [SimpleEditor],
  //   content: "<h1>شروع به نوشتن کنید...</h1>",
  // immediatelyRender: false
  // })
// const b1 = {
//    title: "greet",
//   status: "UNPUBLISH",
//   file: null,
//   category: "greet",
//   readTime: "12",
//   authorSummary: "asdf",
//   language: "FARSI",
//   shortDesc: "asdfasdf",
//   content: "<h1>hello</h1>",
// }
//   useEffect(() => {
//     setBlogObject(b1)
//   }, [])

  return (
    <div className="text-(--primary) py-5">
      <form
        action=""
        className="flex w-full h-full justify-between items-start flex-wrap "
      >
       <div className="flex flex-col w-[30%] gap-1 [&>div]:gap-2 [&>div]:my-3 [&>div]:justify-between [&>div]:items-center [&>div]:flex [&>div]:w-[100%] [&>div>label]:text-(--secondary) [&>div>input]:px-2 [&>div>input]:h-9 [&>div>input]:w-[70%] [&>div>input]:border-[1px] [&>div>input]:border-(--secondary) [&>div>input]:rounded">
         <div>
          <label htmlFor="">عنوان بلاگ</label>
          <input type="text" value={blogObject.title} onChange={(e) => setBlogObject(prev => ({
            ...prev,
            title: e.target.value
          }))}/>
        </div>
        <div>
          <h3>وضعیت انتشار</h3>
          <label htmlFor="publish-status"> فعال</label>

          <input type="radio" onChange={(e) => setBlogObject(prev => ({
            ...prev,
            status: e.target.value   
          }))}
           name="publish-status" value="PUBLISH" checked={blogObject.status === "PUBLISH"} className="!w-[20px] " />  
          <label htmlFor="publish-status"> غیر فعال </label>
          <input type="radio" name="publish-status" 
          onChange={(e) => setBlogObject(prev => ({
            ...prev,
            status: e.target.value   
          }))}
          value="UNPUBLISH" checked={blogObject.status === "UNPUBLISH"} className="!w-[20px] " />
        </div>
        <div>
         <label
        htmlFor="file-upload"
        className="cursor-pointer bg-(--primary) !text-(--neutral) px-4 py-2 rounded-md inline-block hover:!text-(--primary) hover:bg-blue-500 transition"
      >
       آپلود تامبنیل
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={(e) => setBlogObject(prev => ({
            ...prev,
            file: e.target.files?.[0] 
          }))}
        // onChange={(e) => { setFile(e.target.files?.[0] || null)
        //    console.log(e.target.files?.[0]) }}
      />
      {file && (
        <p className="text-sm text-gray-700">فایل: {file.name}</p>
      )}
        </div>
        <div>
          <label htmlFor="">دسته بندی</label>
          <input type="text" 
            value={blogObject.category}
            onChange={(e) => setBlogObject(prev => ({
            ...prev,
            category: e.target.value
          }))}/>
        </div>
        <div>
          <label htmlFor="">زمان مطالعه</label>
          <input type="text"  value={blogObject.readTime}
            onChange={(e) => setBlogObject(prev => ({
            ...prev,
            readTime: Number(e.target.value)
          }))}/> 
        </div>
        <div>
          <label htmlFor="">خلاصه نویسنده</label>
          <input type="text" value={blogObject.authorSummary}
            onChange={(e) => setBlogObject(prev => ({
            ...prev,
            authorSummary: e.target.value
          }))} />
        </div>
        <div>
          <h3>زبان</h3>
          <label htmlFor="lang">فارسی</label>
          <input type="radio"
           checked={blogObject.language === "FARSI"}
          name="lang"  className="!w-[20px]"
          value="FARSI"
            onChange={(e) => setBlogObject(prev => ({
            ...prev,
            language: e.target.value
          }))} 
          />
          <label htmlFor="lang">انگلیسی</label>
          <input type="radio" name="lang" className="!w-[20px]"  value="ENGLISH"
            checked={blogObject.language === "ENGLISH"}
            onChange={(e) => setBlogObject(prev => ({
            ...prev,
            language: e.target.value
          }))} />
        </div>
        <div>
          <label htmlFor="">توضیح کوتاه</label>
          <input type="text"  value={blogObject.shortDescription}
            onChange={(e) => setBlogObject(prev => ({
            ...prev,
            shortDescription: e.target.value
          }))} />
        </div>
       </div>
        <div className="w-[68%]">
          <h1>محتوا بلاگ</h1>
          <div className="border-[1px] w-full h-125 rounded  overflow-auto z-100">
            <SimpleEditor setBlogObject={setBlogObject}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogForm;
