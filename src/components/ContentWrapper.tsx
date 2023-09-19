import React from "react";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Dropdown } from "flowbite-react";
import { formatNumber } from "../Assets/Js/utils";

const ContentWrapper = ({
  children,
  setSearchtext,
  withDropdown = false,
  className,
  count,
  tab,
  setTab,
  setPage,
}: any) => {
  return (
    <div className="h-screen">
      <Navbar setSearchtext={setSearchtext} />
      <div className="flex md:flex-row hide-overflow h-full flex-col">
        <div className="md:w-64 h-28  w-full bg-white md:h-full md:border-r-2 border-b-2 ">
          <Sidebar setTab={setTab} setPage={setPage} tab={tab} />
        </div>
        <div className="bg-white h-full w-full">
          <div className="w-full flex-col px-6 flex justify-between">
            <div className="w-full  py-4   flex justify-between ">
              {withDropdown && (
                <>
                  <div className="w-60  text-black font-medium">
                    {formatNumber(count)} Results
                  </div>
                </>
              )}
            </div>
            <div className={`overflow-y-auto h-full ${className}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
