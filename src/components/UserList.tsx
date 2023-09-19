import { useGetUsersQuery } from "@/Store/Users/Reducer";
import React, { useEffect } from "react";
import User from "./user";
import Pagination from "./Pagination";

const UserList = ({ value, setDataCount, page, setPage }: any) => {
  const {
    data: userData,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useGetUsersQuery({ user: value, page: page });
  useEffect(() => {
    setDataCount(userData?.total_count);
  }, [userData]);
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
      ) : !userData ? (
        <div className="text-black h-full w-full flex justify-center items-center">
          No Data{" "}
        </div>
      ) : (
        <>
          {userData?.items?.slice(0, 10)?.map((user: any) => {
            return <User key={user.id} {...user} />;
          })}

          {userData?.total_count > 10 && (
            <Pagination
              setPage={setPage}
              page={page}
              Loading={isLoading || isFetching}
              total={userData?.total_count || 0}
            />
          )}
        </>
      )}
    </>
  );
};

export default UserList;
