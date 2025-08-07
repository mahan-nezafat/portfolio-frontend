"use client";
import BlogCard from "@/components/blog-card";
import CreateBlogForm from "@/components/create-blog-form";
import api from "@/handlers/api.handler";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import camelcaseKeys from "camelcase-keys";
import { MoonLoader } from "react-spinners";
import ProjectCard from "@/components/project-card";
import CreateProjectForm from "@/components/create-project-form";
const Projects = () => {
  const [projects, setProjects] = useState<object[] | null>(null);
  const [projectOperation, setProjectOperation] = useState<string | null>("get");
  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);

  const [projectObject, setProjectObject] = useState<object>({
    id: null,
    authorId: 5,
    // status: "",
    name: "",
    // thumbnailfile: File || null,
    tech: "",
    backgroundColor: "",
    link: "",
    // previewUrl: "",
    // projectName: "",
    // projectUrl: "",
    content: "",
    videoSrc:  File || null,
  });

  async function deleteProject() {
    return await api.delete(`/panel/projects/${projectObject?.id}`);
  }
  async function updateProject() {
    console.log(projectObject);

    const formData = new FormData();
    Object.entries(projectObject).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("authorId", `${projectObject.user.id}`);
    const data = await api.put(`/panel/projects/${projectObject?.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(data);
  }
  async function createProject() {
    const formData = new FormData();
    Object.entries(projectObject).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // formData.append("image", blogObject.file)
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1], typeof pair[1]);
    }
    const data = await api.post(`/panel/projects`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  useEffect(() => {
    console.log(projectObject);
  }, [projectObject]);
  useEffect(() => {
    async function getProjects() {
      setLoader(true);
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST_NAME}/projects`);
      const transformedData = camelcaseKeys(data.data, { deep: true });
      console.log(transformedData);
      setLoader(false);
      setProjects(transformedData);
    }

    if (projectOperation === "get") getProjects();
    else return;
  }, [projectOperation]);
  return (
    <div className="w-[80%] h-full rounded border-[1px] border-(--secondary) ">
      <div className="w-full p-2 flex flex-col h-full gap-2">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setProjectOperation("create")}
              className="flex cursor-pointer rounded justify-center items-center bg-(--primary) px-2 py-1 text-(--neutral)"
            >
              ایجاد پروژه
            </button>
            <button
              onClick={() => setProjectOperation("get")}
              className="flex cursor-pointer rounded justify-center items-center bg-(--primary) px-2 py-1 text-(--neutral)"
            >
              لیست پروژه ها
            </button>
          </div>
          {projectOperation === "update" && (
            <div className="flex flex-row-reverse gap-2">
              <button
                onClick={updateProject}
                className="flex cursor-pointer hover:bg-(--primary) hover:text-(--neutral) !transition-all ease-in-out duration-300 rounded justify-center font-[iranbakhbold] items-center px-10 py-1 border-[1px] border-(--secondary) text-(--primary)"
              >
                آپدیت پروژه
              </button>
              <button
                onClick={deleteProject}
                className="flex cursor-pointer hover:bg-(--primary) hover:text-(--neutral) !transition-all ease-in-out duration-300 rounded justify-center font-[iranbakhbold] items-center px-10 py-1 border-[1px] border-(--secondary) text-(--primary)"
              >
                حذف پروژه
              </button>
            </div>
          )}
          {projectOperation === "create" && (
            <button
              onClick={createProject}
              className="flex cursor-pointer hover:bg-(--primary) hover:text-(--neutral) !transition-all ease-in-out duration-300 rounded justify-center font-[iranbakhbold] items-center px-10 py-1 border-[1px] border-(--secondary) text-(--primary)"
            >
              ثبت پروژه
            </button>
          )}
        </div>
        {projectOperation === "get" && (
          <div className="w-full h-full flex justify-start mx-5 gap-5 items-center">
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
            {!loader &&
              projects?.map((project, i) => {
                return (
                  <ProjectCard
                    project={project}
                    key={i}
                    setProjectOperation={setProjectOperation}
                    setProjectObject={setProjectObject}
                  />
                );
              })}
          </div>
        )}
        {(projectOperation === "create" || projectOperation === "update") && (
          <CreateProjectForm projectObject={projectObject} setProjectObject={setProjectObject} />
        )}
      </div>
    </div>
  );
};

export default Projects;
