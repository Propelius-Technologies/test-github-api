import Image from "next/image";
import React from "react";
import next from "../../public/next.svg";
import repo from "../Assets/image/git-repository-line-icon-858x1024-5cpm4tk8.png";
import followers from "../Assets/image/followers-6062544-5320792.png";
import { useGetPerticulerUserQuery } from "@/Store/Users/Reducer";
import { assets } from "@/Assets";
import Link from "next/link";
const User = ({ url }: any) => {
  const userName = url.split("/").pop();
  const {
    data: user = {},
    isLoading,
    refetch,
  } = useGetPerticulerUserQuery({ user: userName });

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
        <div className="w-auto m-3 p-3 bg-white border border-gray-200 rounded-md shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
          <div className="flow-root">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 border border-gray-400 rounded-full">
                <Image
                  className="w-11 h-11 rounded-full"
                  src={user?.avatar_url}
                  height={11}
                  width={11}
                  alt="Alternate text"
                />
              </div>
              <div className="flex-1 cursor-pointer min-w-0">
                <Link href={`/user/${user.login}`}>
                  <p className="text-base md:text-lg lg:text-lg mb-2 text-gray-500 whitespace-normal overflow-hidden">
                    <span className="text-blue-500">
                      {user?.name === "undefined" ? "" : user.name}
                    </span>{" "}
                    {user.login}
                  </p>
                </Link>
                <p className="text-sm md:text-base lg:text-base mb-2 text-black-500 whitespace-normal">
                  {user?.bio === "undefined" ? "" : user.bio}
                </p>

                <div className="flex items-center flex-wrap">
                  {!user?.location || user?.location === "undefined" ? (
                    ""
                  ) : (
                    <>
                      <div className="mr-2">
                        <p className="text-sx md:text-base lg:text-base text-gray-500 whitespace-normal">
                          {user?.location === "undefined" ? "" : user.location}
                        </p>
                      </div>
                      <div className="mr-3"> &nbsp;{`\u00b7`}</div>
                    </>
                  )}
                  <div className="flex gap-1 items-center mr-2 text-sm text-gray-500">
                    <Image
                      src={assets.svg.REPO}
                      style={{
                        backgroundColor: "none",
                        height: "18px",
                        width: "18px",
                        color: "grey",
                      }}
                      alt="Repository icon"
                    />
                    <p className="text-sm text-gray-500 whitespace-normal">
                      {user?.public_repos}
                    </p>
                  </div>
                  <div className="mr-2"> &nbsp;{`\u00b7`}</div>
                  <div className="flex gap-1 items-center mr-2 text-xs text-gray-500 dark:text-gray-400">
                    <Image
                      src={followers}
                      style={{
                        backgroundColor: "none",
                        height: "18px",
                        width: "18px",
                        color: "grey",
                      }}
                      alt="Followers icon"
                    />
                    <p className="text-sm  text-gray-500 whitespace-normal">
                      {user?.followers}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
