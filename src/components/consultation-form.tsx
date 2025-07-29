"use client";

import type React from "react";

import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { InputOtp } from "./otp-input";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function ConsultationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("");
  const [isDisable, setDisable] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [error, setError] = useState("");
  const [spin, setSpin] = useState(false);
  async function handleSendOtp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (phone.length < 11 || firstName.length <= 0 || lastName.length <= 0)
      return setError("اسم یا شماره همراه نا معتبر");
    else setError("");
    const otpObj = {
      phoneNumber: phone,
      firstName,
      lastName,
    };

    setMinutes(2);
    setDisable(!isDisable);

    const data = await axios(`${process.env.NEXT_PUBLIC_BACKEND_HOST_NAME}/auth/send-otp`, {
      method: "POST",
      data: JSON.stringify(otpObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (value.length < 6) return setError("کد تایید را کامل وارد کنید");
      setSpin(true);
      const formObj = {
        firstName,
        lastName,
        phoneNumber: phone,
        otp: value,
        role: "CUSTOMER",
      };
      setTimeout(() => setSpin(false), 2000);
      const data = await axios(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST_NAME}/auth/request-consultation`,
        {
          method: "POST",
          data: JSON.stringify(formObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const toastRes = new Promise((resolve, reject) => {
        resolve(data);
      });
      toast.promise(toastRes, {
        loading: "در حال ثبت درخواست",
        success: "درخواست شما با موفقیت ثبت شد!",
        error: "مشکلی در ثبت درخواست پیش آمد دوباره امتحان کنید!",
      });

      sessionStorage.setItem("jwt", data.data.jwt);

      // console.log(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setDisable(true);
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  return (
    <div className="flex items-center justify-center h-full w-full  p-4">
      <div id="consultform" className="w-full h-full  space-y-8 text-white">
        <h1 className=" bg-clip-text text-transparent bg-gradient-to-b to-[#020024]  text-3xl pb-3 from-[#FFFFFF] text-center mb-8">
          فرم مشاوره
        </h1>

        <form className="space-y-6 w-full" dir="rtl">
          <div className="space-y-2 w-full flex justify-between ">
            <div className="w-[48%]">
              <label htmlFor="name" className="block text-right w-full">
                نام
              </label>
              <input
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-[#151516] rounded outline-none text-white text-right h-12 px-3"
                placeholder="مثال: علی  "
              />
            </div>
            <div className="w-[48%]">
              <label htmlFor="name" className="block text-right w-full">
                نام خانوادگی
              </label>
              <input
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-[#151516] rounded outline-none text-white text-right h-12 px-3"
                placeholder="مثال: علی پور "
              />
            </div>
          </div>

          <div className="space-y-2 relative">
            <button
              disabled={!isDisable}
              onClick={(e) => handleSendOtp(e)}
              className="w-23 text-xs absolute left-4 bottom-1 cursor-pointer border-(--secondary) border-[1px] rounded py-1 px-2"
            >
              <span className={!isDisable ? "text-[16px]" : ""}>
                {isDisable
                  ? "ارسال کد تایید"
                  : ` ${minutes <= 0 ? "00" : minutes}:${
                      seconds <= 0 ? "00" : seconds > 0 && seconds < 10 ? `0${seconds}` : seconds
                    }`}
              </span>
            </button>
            <label htmlFor="phone" className="block text-right">
              شماره همراه
            </label>
            <input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#151516] rounded  outline-none text-white text-right h-12 px-3"
              placeholder="مثال: 09112320000"
            />
          </div>
          <div className="my-15 relative">
            <span className="absolute text-xs text-red-700 right-0 bottom-15">{error}</span>
            <InputOtp disable={isDisable} value={value} setValue={setValue} />
          </div>
          <div className="relative group my-15">
            {/* Gradient border background */}
            <div className="absolute inset-0 rounded-md left-[-2px]  bg-gradient-to-b  from-blue-600 to-blue-400 via-blue-700"></div>

            {/* Button with transparent background */}
            <button
              type="submit"
              disabled={spin}
              onClick={handleSubmit}
              className="relative  cursor-pointer w-full h-14 bg-black hover:opacity-80 text-white text-lg m-[1px] rounded-md"
            >
              {spin ? (
                <SyncLoader
                  loading={true}
                  className="dir-ltr"
                  speedMultiplier={1}
                  color="#0969C1"
                  size={10}
                />
              ) : (
                "ثبت درخواست"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
