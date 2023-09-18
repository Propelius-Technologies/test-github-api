import Image from "next/image";
import React from "react";
import next from "../../public/next.svg";
import repo from "../../public/assets/git-repository-line-icon-858x1024-5cpm4tk8.png";
import followers from "../../public/assets/followers-6062544-5320792.png";

const User = () => {
  return (
    <div className="w-auto m-3 p-3 bg-white border border-gray-200 rounded-md shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
      <div className="flow-root">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 border border-gray-400 rounded-full">
            <Image
              className="w-11 h-11 rounded-full"
              src={next}
              alt="Alternate text"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base md:text-lg lg:text-lg mb-2 text-gray-500 whitespace-normal overflow-hidden">
              email@windster.com
            </p>
            <p className="text-sm md:text-base lg:text-base mb-2 text-black-500 whitespace-normal">
              Neil Sims erdskfhd wdjs,
            </p>

            <div className="flex">
              <div className="mr-2">
              <p className="text-sx md:text-base lg:text-base mb-2 text-gray-500 whitespace-normal">
                Location
              </p>
              </div>
              <div className="mr-3"> &nbsp;{`\u00b7`}</div>
              <div className="flex items-center mr-2 text-sm text-gray-500">
                <Image
                  src={repo}
                  style={{
                    backgroundColor: "none",
                    height: "20px",
                    width: "auto",
                    color: "grey",
                    marginRight: "4px",
                    marginBottom: "4px"
                  }}
                  alt="Repository icon"
                />
                <p className="text-sm md:text-base lg:text-base mb-2 text-gray-500 whitespace-normal">210</p>
              </div>
              <div className="mr-2"> &nbsp;{`\u00b7`}</div>
              <div className="flex items-center mr-2 text-sm text-gray-500 dark:text-gray-400">
                <Image
                  src={followers}
                  style={{
                    backgroundColor: "none",
                    height: "20px",
                    width: "auto",
                    color: "grey",
                    marginRight: "4px",
                    marginBottom: "4px"
                  }}
                  alt="Followers icon"
                />
                <p className="text-sm md:text-base lg:text-base mb-2 text-gray-500 whitespace-normal">352</p>
              </div>
            </div>
          </div>
          <button className="bg-rgb(246, 248, 250)-500 hover:bg-grey text-rgb(36, 41, 47) font-semibold py-2 px-4 border border-rgba(31, 35, 40, 0.15) rounded-md">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
