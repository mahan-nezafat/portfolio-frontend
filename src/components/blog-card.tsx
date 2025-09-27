import { BookOpen, Eye } from "lucide-react";
import Image from "next/image";
import * as avatar from "../../public/images/avatar (1).png";
import { usePathname, useRouter } from "next/navigation";
import moment from "jalali-moment";
import api from "@/handlers/api.handler";
import camelcaseKeys from "camelcase-keys";
const BlogCard = ({ blog, setBlogOperation, setBlogObject }) => {
  const router = useRouter();
  const path = usePathname();
  console.log(path);
  function toPersianNumbers(numbers: string) {
    return numbers.replace(/\d/g, (num) => "۰۱۲۳۴۵۶۷۸۹"[num]);
  }
  async function getOneBlog() {
    let data;
    if (path.startsWith("/panel")) {
      data = await api.get( `/panel/blog/?id=${blog.id}`);

    }else if(path.startsWith("/blogs")) {
      data = await api.get( `/blogs/blog/?id=${blog.id}`);
      
    }
    console.log(data?.data.data);
    const transformedData = camelcaseKeys(data?.data.data, { deep: true });
    return setBlogObject(transformedData);
  }
  return (
    <div
      onClick={() => {
        if (path.startsWith("/panel")) {
          setBlogOperation("update");
          return getOneBlog();
        }
        router.push(`/blogs/${blog.id}`);
      }}
      className="max-md:w-[70%] max-md:h-130 relative max-sm:h-120 max-sm:w-[90%] max-xs:h-110 max-md:mx-auto  max-lg:w-[45%] max-lg:h-115 max-xl:w-[30%] max-2xl:w-[23%] min-2xl:w-[23%]  min-2xl:h-110 flex flex-col justify-start items-center hover:translate-y-[-6px] !transition-all duration-300 ease-in-out rounded h-110 shadow-md shadow-blue-900"
    >
      <Image
        src={blog.thumbnailSrc ? blog.thumbnailSrc : null}
        alt="thumbnail"
        className="w-full h-[60%] rounded"
        width={520}
        height={100}
      />
      {/* <div className="img-bg w-full h-[70%]"></div> */}
      <div className="flex absolute left-[-10px] bottom-[40%] rounded-tr-lg justify-center items-center ml-2  text-sm py-1 text-center text-white bg-gray-900 border-y-blue-600 px-3 ">
        <span>{blog.category}</span>
      </div>
      <div className="flex pr-3 flex-col gap-4 w-full">
        <div className="pt-2 flex gap-1 w-full justify-start items-center">
          <div className="flex w-[15%] justify-start items-center gap-2 text-sm text-(--secondary)">
            <Eye className="w-[20px]" />
            <span>{blog.views}</span>
          </div>
          <div className="flex w-[70%] justify-start items-center gap-2 text-sm text-(--secondary)">
            <BookOpen className="w-[20px]" />
            <span>{Number(blog.readTime) / 60} دقیقه</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start text-(--primary) w-[90%]">
          <h1 className="text-lg font-[iranbakhbold]">{blog.title}</h1>
          <h4 className="text-xs font-light">{blog.shortDescription}</h4>
        </div>
        <div className="flex justify-start gap-2 items-center pb-1">
          <Image
            // className="w-10 h-10"
            width={70}
            height={70}
            src={avatar}
            alt="avatar"
          />
          <div className="flex flex-col">
            <h3 className="text-xs text-(--primary)">{`${blog.user.firstName} ${blog.user.lastName}`}</h3>
            <span className="text-xs text-(--secondary)">
              {toPersianNumbers(
                moment(blog.createdAt, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
