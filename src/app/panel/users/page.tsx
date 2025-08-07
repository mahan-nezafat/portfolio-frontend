"use client";
import api from "@/handlers/api.handler";
import camelcaseKeys from "camelcase-keys";
import { useEffect, useState } from "react";

const Users = () => {
  //   user = {
  //     age
  //
  // avatarSrc
  //
  // created_at
  // "2025-07-10T1251.952Z"
  // email
  //
  // first_name
  // "ماهان"
  // id
  // 4
  // last_name
  // "نظافت"
  // otp
  //
  // phone_number
  // "09053217299"
  // request
  // "consultation"
  // role
  // "CUSTOMER"
  // updated_at
  // "2025-07-12T14:17:36.204Z"
  // username
  //
  //   }
  const [users, setUsers] = useState<[] | null>(null);
  const requests = {
    "consultation": "مشاوره",
    "backend" : "بک اند",
    "frontend": "فرانت اند",
    "bot" : "ربات"
  }
  useEffect(() => {
    if (users) return;
    async function getUsers() {
      const { data } = await api.get("/panel/users");
      console.log(data.data);
      const transformedData = camelcaseKeys(data.data, { deep: true });
      return setUsers(transformedData);
    }
    getUsers();
  }, [users]);
  return (
    <div className="w-[80%] pt-5 h-full flex justify-start items-center flex-col rounded border-[1px] border-(--secondary) ">
      {/* <div className="w-full p-2 flex flex-col h-full gap-2"></div> */}
      <div  className="w-full text-(--secondary) [&>span]:text-sm px-3 py-2 my-2 flex [&>span]:w-40 border-[1px] border-(--secondary)  justify-center gap-4 items-center ">
            <span>نام و نام خانوادگی</span>
            <span>شماره همراه</span>
            <span>ایمیل</span>
            <span>درخواست</span>
            <span>رول</span>
            <span>نام کاربری</span>
          </div>
      {users?.map((user) => {
        return (
          <div key={user?.id} className="w-[90%] [&>span]:text-sm px-3 py-2 my-2 flex [&>span]:w-40 border-[1px] border-(--secondary) rounded justify-center gap-4 items-center text-(--primary)">
            <span>{user.firstName} {user.lastName}</span>
            <span>{user.phoneNumber ? user.phoneNumber : "موجود نیست"}</span>
            <span>{user.email ? user.email : "موجود نیست"}</span>
            <span>{user.request ? requests[user.request] : "موجود نیست"}</span>
            <span>{user.role === "ADMIN" ? "ادمین" : "مشتری"}</span>
            <span>{user.username ? user.username : "موجود نیست"}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
