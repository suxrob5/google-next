"use client";

import Image from "next/image";
import Script from "next/script";
//img
import { useState } from "react";
import lens from "../assets/lens.svg";
import menu from "../assets/menu.png";
import mic from "../assets/mic.svg";

import "./main.css";

// shadsien IU
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Add from "@/components/add/Add";
import { Avatars } from "@/components/avatar/avatars";
import GoogleApps from "@/components/googleApps";
import { useRouter } from "next/navigation";

const Google = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handeSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue !== "") {
      router.push(`https://www.google.com/search?q=${inputValue}`);
      localStorage.setItem("searchHistory", JSON.stringify({ inputValue }));
    }
    if (inputValue === "https://youtube.com") {
      router.push(`https://youtube.com`);
    }
  };

  return (
    <>
      <Script
        src="https://kit.fontawesome.com/1d3a6012a0.js"
        crossOrigin="anonymous"
      ></Script>
      <div id="fon" className="bg-gray-700 w-[100%] h-screen">
        {/* header */}
        <div className="w-[99%] mx-auto flex items-center justify-between">
          <h1>.</h1>
          <div className="flex items-center justify-center">
            <div className="flex">
              <a
                className="text-white m-2 text-lg hover:underline hover:decoration-solid"
                href="https://mail.google.com/mail/?tab=rm&authuser=0&ogbl"
              >
                почта
              </a>
              <a
                className="text-white m-2 text-lg hover:underline hover:decoration-solid"
                href="https://www.google.com/imghp?hl=ru&tab=ri&authuser=0&ogbl"
              >
                картинки
              </a>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image src={menu} alt="menu" width={20} className="m-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-opacity-0 bg-black border-none">
                <GoogleApps />
              </DropdownMenuContent>
            </DropdownMenu>
            {/*  */}
            <Avatars />
          </div>
        </div>
        {/* center */}
        <div className="max-w-[1519px] mx-auto mt-[100px]">
          <div className="text-center">
            <h1 className="text-white text-[90px] font-[500]">Google</h1>
          </div>
          <form onSubmit={handeSubmit} className="mt-10">
            <div className="w-[40%] mx-auto flex items-center justify-center relative">
              <i className="fa-solid fa-magnifying-glass text-2xl absolute left-5 cursor-pointer text-[#5F6368FF]"></i>
              <input
                type="text"
                value={inputValue}
                placeholder="Введите поисковый запрос или URL"
                onChange={(e) => setInputValue(e.target.value)}
                className="rounded-[50px] w-[100%] py-4 px-7 pl-16 outline-none text-xl my-5"
              />
              <Image
                src={mic}
                alt="Picture of the author"
                className="w-[15px] absolute right-20 cursor-pointer"
              />
              <Image
                src={lens}
                alt="Picture of the author"
                className="w-[35px] absolute right-5 cursor-pointer"
              />
            </div>
          </form>
        </div>
        <div>
          <Add />
        </div>
      </div>
    </>
  );
};

export default Google;
