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
}: any) => {
  return (
    <div className="h-screen">
      <Navbar setSearchtext={setSearchtext} />
      <div className="flex md:flex-row hide-overflow h-full flex-col">
        <div className="md:w-64 h-28  w-full bg-white md:h-full md:border-r-2 border-b-2 ">
          <Sidebar setTab={setTab} tab={tab} />
        </div>
        <div className="bg-white h-full w-full">
          <div className="w-full flex-col px-6 flex justify-between">
            <div className="w-full  py-4   flex justify-between ">
              {withDropdown && (
                <>
                  <div className="w-60  text-black font-medium">
                    {formatNumber(count)} Results
                  </div>
                  {/* <div className="px-2 h-7 text-xs items-center rounded flex justify-center text-gray-500 font-medium bg-slate-100">
                    Sort by:
                    <Dropdown
                      style={{
                        backgroundColor: "transparent",
                        border: 0,
                        height: 20,
                        color: "black",
                      }}
                      label="Dropdown button"
                      defaultValue={"Best match"}
                    >
                      <Dropdown.Item>Best match </Dropdown.Item>
                      <Dropdown.Item>Most stars </Dropdown.Item>
                      <Dropdown.Item>Fewest stars </Dropdown.Item>
                      <Dropdown.Item>Most forks</Dropdown.Item>
                      <Dropdown.Item> Fewest forks</Dropdown.Item>
                      <Dropdown.Item> Recently updated</Dropdown.Item>
                      <Dropdown.Item>Least recently updated</Dropdown.Item>
                    </Dropdown>
                  </div> */}
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
