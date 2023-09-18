import Image from "next/image";
import React from "react";
import next from "../../public/next.svg";
import repo from "../../public/assets/git-repository-line-icon-858x1024-5cpm4tk8.png";
import followers from "../../public/assets/followers-6062544-5320792.png";
import star from "../../public/assets/star-png-icon-0.jpg";

const Repository = () => {
  
  return (
    <div className="w-auto m-3 p-3 bg-white border border-gray-200 rounded-md shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
      <div className="flow-root">
        <div className="flex items-start space-x-4">
          <div className="flex-1 min-w-0">
            <div className="flex mb-3">
              <div className="flex-shrink-0 mr-3 items-center border border-gray-400 rounded-md">
                <Image className="w-8 h-6" src={next} alt="Alternate text" />
              </div>
              <p className="text-base md:text-lg lg:text-lg mb-2 whitespace-normal overflow-hidden" style={{color: "rgb(9, 105, 218)"}}>
                email@windster.com
              </p>
            </div>
            <p className="text-sm md:text-base lg:text-base mb-2 text-black-500 whitespace-normal">
              Neil Sims erdskfhd wdjs,
            </p>

            <div className="flex">
              <div className="mr-2 flex">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2 mt-2"></div>
                <p className="text-sx md:text-base lg:text-base mb-2 text-gray-500 whitespace-normal">
                  Language
                </p>
              </div>
              <div className="mr-3"> &nbsp;{`\u00b7`}</div>
              <div className="flex items-center mr-2 text-xs text-gray-500">
                <Image
                  src={star}
                  alt="Star icon"
                  style={{
                    width: "auto",
                    height: "16px",
                    marginRight: "8px",
                    marginBottom: "4px",
                  }}
                />
                <p className="text-xs md:text-base lg:text-base mb-2 text-gray-500 whitespace-normal">
                  210
                </p>
              </div>
              <div className="mx-2"> &nbsp;{`\u00b7`}</div>
              <div className="flex items-center mr-2 text-xs text-gray-500 dark:text-gray-400">
                <Image
                  src={followers}
                  style={{
                    backgroundColor: "none",
                    height: "20px",
                    width: "auto",
                    color: "grey",
                    marginRight: "4px",
                    marginBottom: "4px",
                  }}
                  alt="Repository icon"
                />
                <p className="text-xs md:text-base lg:text-base mb-2 text-gray-500 whitespace-normal">
                  352
                </p>
              </div>
            </div>
          </div>
          <button className=" flex items-center bg-rgb(246, 248, 250)-500 hover:bg-grey text-rgb(36, 41, 47) font-semibold py-2 px-4 border border-rgba(31, 35, 40, 0.15) rounded-md">
            <Image
              src={star}
              alt="Star icon"
              style={{ width: "20px", height: "20px", marginRight: "8px" }}
            />
            Star
          </button>
        </div>
      </div>
    </div>
  );
};

export default Repository;
