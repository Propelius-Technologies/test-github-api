import { assets } from "@/Assets";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
// import { as Code } from "../Assets/Svgs/code.svg"
const data = [
  {
    icon: assets.svg.CODE,
    name: "Repositories",
  },
  {
    icon: assets.svg.USER,

    name: "Users",
  },
];
export const Sidebar = ({ setTab, tab }: any) => {
  const router = useRouter();

  const handleclick = (name: any) => {
    router.push("/");
    if (setTab) setTab(name);
  };

  console.log(tab);
  return (
    <div className="w-full bg-white h-full">
      <h2 className="px-4 pt-4 pb-2 text-black">Filter By</h2>
      <div className=" flex md:flex-col flex-row px-2 pt-1">
        {data.map(({ icon, name }) => {
          return (
            <div
              key={name}
              onClick={() => handleclick(name)}
              className={`flex flex-row px-2 py-1.5 gap-3 rounded cursor-pointer   text-gray-500 hover:bg-gray-100   ${
                tab === name && "bg-gray-100 "
              }`}
            >
              <Image src={icon.src} height={20} width={20} alt="asd" />
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
