import React from "react";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Dropdown } from "flowbite-react";

const ContentWrapper = ({ children }: any) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-row" style={{ height: "calc(100vh - 68px)" }}>
        <div className="w-64 border-r-2 ">
          <Sidebar />
        </div>
        <div className="bg-white h-full w-full">
          <div className="w-full flex justify-between">
            <div className="w-full py-4 px-6  flex justify-between ">
              <div className="w-60 px-4 text-black font-medium">
                2.4M results{" "}
                <span className="text-gray-500 text-xs">(550 ms)</span>
              </div>

              <div className="px-2 h-7 text-xs items-center rounded flex justify-center text-gray-500 font-medium bg-slate-100">
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
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
