"use client"
import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'
import StarterKit from "@tiptap/starter-kit";
import { IBlog } from "@/app/panel/blogs/page";
const CreateProjectForm = ({projectObject, setProjectObject}) => {
  const [file, setFile] = useState<File|null>(null)
 

  return (
    <div className="text-(--primary) py-5">
      <form
        action=""
        className="flex w-full h-full justify-between items-start flex-wrap "
      >
       <div className="flex flex-col w-[30%] gap-1 [&>div]:gap-2 [&>div]:my-3 [&>div]:justify-between [&>div]:items-center [&>div]:flex [&>div]:w-[100%] [&>div>label]:text-(--secondary) [&>div>input]:px-2 [&>div>input]:h-9 [&>div>input]:w-[70%] [&>div>input]:border-[1px] [&>div>input]:border-(--secondary) [&>div>input]:rounded">
         <div>
          <label htmlFor=""> اسم پروژه</label>
          <input type="text" value={projectObject.name} onChange={(e) => setProjectObject(prev => ({
            ...prev,
            name: e.target.value
          }))}/>
        </div>
        {/* <div>
          <h3>وضعیت انتشار</h3>
          <label htmlFor="publish-status"> فعال</label>

          <input type="radio" onChange={(e) => setProjectObject(prev => ({
            ...prev,
            status: e.target.value   
          }))}
           name="publish-status" value="PUBLISH" checked={projectObject.status === "PUBLISH"} className="!w-[20px] " />  
          <label htmlFor="publish-status"> غیر فعال </label>
          <input type="radio" name="publish-status" 
          onChange={(e) => setProjectObject(prev => ({
            ...prev,
            status: e.target.value   
          }))}
          value="UNPUBLISH" checked={projectObject.status === "UNPUBLISH"} className="!w-[20px] " />
        </div> */}
        <div>
         <label
        htmlFor="file-upload"
        className="cursor-pointer bg-(--primary) !text-(--neutral) px-4 py-2 rounded-md inline-block hover:!text-(--primary) hover:bg-blue-500 transition"
      >
       آپلود ویدیو
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={(e) => setProjectObject(prev => ({
            ...prev,
            videoSrc: e.target.files?.[0] 
          }))}
      
      />
      {file && (
        <p className="text-sm text-(--primary)">فایل: {file.name}</p>
      )}
        </div>
        <div>
          <label htmlFor="">تکنولوژی ها</label>
          <input type="text" 
            value={projectObject.tech}
            onChange={(e) => setProjectObject(prev => ({
            ...prev,
            tech: e.target.value
          }))}/>
        </div>
         <div>
          <label htmlFor=""> لینک</label>
          <input type="text" 
            value={projectObject.link}
            onChange={(e) => setProjectObject(prev => ({
            ...prev,
            link: e.target.value
          }))}/>
        </div>
        <div>
          <label htmlFor="">رنگ پس زمینه</label>
          <input type="text"  value={projectObject.backgroundColor}
            onChange={(e) => setProjectObject(prev => ({
            ...prev,
            backgroundColor: e.target.value
          }))}/> 
        </div>
        {/* <div>
          <label htmlFor="">خلاصه نویسنده</label>
          <input type="text" value={projectObject.authorSummary}
            onChange={(e) => setProjectObject(prev => ({
            ...prev,
            authorSummary: e.target.value
          }))} />
        </div> */}
        {/* <div>
          <h3>زبان</h3>
          <label htmlFor="lang">فارسی</label>
          <input type="radio"
           checked={projectObject.language === "FARSI"}
          name="lang"  className="!w-[20px]"
          value="FARSI"
            onChange={(e) => setProjectObject(prev => ({
            ...prev,
            language: e.target.value
          }))} 
          />
          <label htmlFor="lang">انگلیسی</label>
          <input type="radio" name="lang" className="!w-[20px]"  value="ENGLISH"
            checked={projectObject.language === "ENGLISH"}
            onChange={(e) => setProjectObject(prev => ({
            ...prev,
            language: e.target.value
          }))} />
        </div> */}
        {/* <div>
          <label htmlFor="">توضیح کوتاه</label>
          <input type="text"  value={projectObject.shortDescription}
            onChange={(e) => setProjectObject(prev => ({
            ...prev,
            shortDescription: e.target.value
          }))} />
        </div> */}
       </div>
        <div className="w-[68%]">
          <h1>محتوا پروژه</h1>
          <div className="border-[1px] w-full h-125 rounded  overflow-auto z-100">
            <SimpleEditor object={projectObject} setObject={setProjectObject}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectForm;
