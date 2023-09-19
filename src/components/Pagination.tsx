import React from "react";

const Pagination = ({ total, page, setPage, Loading }: any) => {
  const handleIncrease = () => {
    if (Math.round(total / 10) - 1 > page) {
      setPage(page + 1);
    }
  };
  const handleDecrease = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex flex-col mb-4 items-center">
      <span className="text-sm flex gap-2 text-gray-700 dark:text-gray-400">
        Showing
        <span className="font-semibold text-gray-900 dark:text-white">
          {page * 10 - 9}
        </span>
        to
        <span className="font-semibold text-gray-900 dark:text-white">
          {" "}
          {page * 10}
        </span>
        of
        <span className="font-semibold text-gray-900 dark:text-white">
          {total}
        </span>
        Entries
      </span>
      <div className="inline-flex gap-5 mt-2 xs:mt-0">
        <button
          onClick={() => handleDecrease()}
          disabled={page === 1 || Loading}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </button>
        <button
          onClick={() => handleIncrease()}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          disabled={Math.round(total / 10) === page || Loading}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
