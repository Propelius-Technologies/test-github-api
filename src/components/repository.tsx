import Image from "next/image";
import React, { useEffect } from "react";
import next from "../../public/next.svg";
import repo from "../../src/assets/image/git-repository-line-icon-858x1024-5cpm4tk8.png";
import followers from "../../src/assets/image/followers-6062544-5320792.png";
import star from "../../src/assets/image/star-png-icon-0.jpg";
import { useGetRepositoriesQuery } from "@/Store/Repositories/Reducer";
import Link from "next/link";

const Repository = ({ value, setDataCount }: any) => {
  const { data: repoData = [], isLoading } = useGetRepositoriesQuery({
    repository: value,
  });
  useEffect(() => {
    setDataCount(repoData?.total_count);
  }, [repoData]);
  return (
    <>
      {isLoading ? (
        <div
          role="status"
          className=" w-full mt-3 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>

          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        repoData.items?.slice(0, 10)?.map((item: any) => (
          <div
            className="w-auto m-3 p-3 bg-white border border-gray-200 rounded-md shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700"
            key={item.id}
          >
            <div className="flow-root">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <div className="flex mb-3">
                    <div className="flex-shrink-0 h-8 w-8 mr-3 items-center border border-gray-400 rounded-md">
                      <Image
                        className="w-full h-full"
                        src={item.owner.avatar_url}
                        alt="Alternate text"
                        width={400}
                        height={400}
                        style={{ objectFit: "fill" }}
                      />
                    </div>
                    <Link href={`/${item?.owner?.login}/${item.name}`}>
                      <p
                        className="text-base md:text-lg lg:text-lg mb-2 whitespace-normal overflow-hidden"
                        style={{ color: "rgb(9, 105, 218)" }}
                      >
                        {item.full_name}
                      </p>
                    </Link>
                  </div>
                  <p className="text-sm md:text-base lg:text-base mb-2 text-black-500 whitespace-normal">
                    Neil Sims erdskfhd wdjs,
                  </p>

                  <div className="flex">
                    <div className="mr-2 flex">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2 mt-2"></div>
                      <p className="text-sx md:text-base lg:text-base mb-2 text-gray-500 whitespace-normal">
                        {item.language}
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
                        {item.stargazers_count}
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
                        Updated on {item.updated_at}
                      </p>
                    </div>
                  </div>
                </div>
                <button className=" flex items-center bg-rgb(246, 248, 250)-500 hover:bg-grey text-rgb(36, 41, 47) font-semibold py-2 px-4 border border-rgba(31, 35, 40, 0.15) rounded-md">
                  <Image
                    src={star}
                    alt="Star icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                    }}
                  />
                  Star
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Repository;
