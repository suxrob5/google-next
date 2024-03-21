import React from "react";
import User from "@/assets/google/user.png";
import Image from "next/image";
const Profile = () => {
  return (
    <div>
      <div className="h-[450px] w-[400px] flex justify-center flex-wrap gap-5 rounded-[30px] bg-black bg-opacity-30 border-2 border-black overflow-y-scroll scroll-snap-type-y mandatory-scroll-snap">
        <div>
          <div className="p-5">
            <h1 className="text-xl font-[500] text-center mt-5 text-white">
              example@gmail.com
            </h1>
            <div className="flex items-center justify-center">
              <Image
                src={User}
                alt="user"
                className="text-white bg-white rounded-[50%] w-[150px] h-[150px] mt-5"
              />
            </div>
            <h1 className="text-xl font-[500] text-center mt-5 text-white">
              Здравствуйте, User
            </h1>
            <a
              href="https://myaccount.google.com/?hl=ru&authuser=0&utm_source=OGB&utm_medium=act"
              className="border-2 text-blue-200 bg-gray-800 py-3 text-2xl px-5 rounded-[30px] mt-10"
            >
              <button className=" mt-10">Управление аккаунтом Google</button>
            </a>
            <div className="mt-10 text-white flex items-center justify-between">
              <a
                href="https://accounts.google.com/AddSession?hl=ru&continue=https://www.google.com%3Fhl%3Dru&ec=GAlA8wE"
                className="border bg-[#3C3C3CFF] py-3 px-14 text-xl rounded-l-[50px]"
              >
                <button>
                  Добавить <br /> аккаунт
                </button>
              </a>
              <a
                href="https://accounts.google.com/Logout?hl=ru&continue=https://www.google.com%3Fhl%3Dru&timeStmp=1710683636&secTok=.AG5fkS-FZpr-Fm6wmokjfzDMPkcCO-Lx7A&ec=GAdA8wE"
                className="border bg-[#3C3C3CFF] py-3 px-14 text-xl rounded-r-[50px]"
              >
                <button className="py-[10px]">Выйти</button>
              </a>
            </div>
            <a
              href="https://policies.google.com/privacy?hl=ru&authuser=0"
              className="text-xl text-white"
            >
              <h1 className="text-center mt-16">Политика конфиденциальности</h1>
            </a>{" "}
            <br />
            <h1 className="text-3xl py-3 text-white text-center">.</h1>
            <a
              href="https://policies.google.com/terms?hl=ru&authuser=0"
              className="text-xl text-white"
            >
              <h1 className="text-center mt-6">Условия использования</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
