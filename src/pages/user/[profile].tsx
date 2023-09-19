import { Inter } from "next/font/google";
import { RootState } from "@/Store";
import { useSelector } from "react-redux";
import ContentWrapper from "@/components/ContentWrapper";
import { useRouter } from "next/router";
import {
  useGetPerticulerUserQuery,
  useGetUserReposQuery,
} from "@/Store/Users/Reducer";
import { getColorByLanguage } from "@/Assets/Js/utils";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const { query } = useRouter();
  const store = useSelector((state: RootState) => state);
  const { data: userDetails = {} } = useGetPerticulerUserQuery({
    user: query.profile,
  });
  const { data: userRepos = [], isLoading: isRepoLoading } =
    useGetUserReposQuery({
      user: query.profile,
    });

  return (
    <ContentWrapper className={"text-black"}>
      <div className="flex ">
        <div className="container mx-auto ">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-1/4 w-full">
              <div className="mb-4">
                <img className="rounded-full" src={userDetails.avatar_url} />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-medium text-grey-darkest">
                  {userDetails.name}
                </div>
                <div className="text-xl text-grey-dark font-light">
                  {userDetails.login}
                </div>
              </div>
              <div className="pb-6 border-b">
                <a href="#" className="no-underline text-sm ">
                  {userDetails?.bio === "undefined" ? "" : userDetails.bio}
                </a>
              </div>

              {!userDetails.email || userDetails.email === "undefined" ? (
                ""
              ) : (
                <div className="flex w-full items-center text-left py-4 mb-4 border-b">
                  <div className="flex items-center mr-2">
                    <svg
                      className="fill-current text-grey-dark w-4 h-4"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                    </svg>
                  </div>
                  <div className="w-11/12 truncate">
                    <a href="#" className="no-underline   text-sm">
                      {userDetails.email}
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full md:w-3/4 ml-6 mt-2">
              <div className="flex items-center font-thin text-grey-dark text-sm border-b">
                <div className="p-4 flex items-center">
                  <div>Repositories</div>
                  <div className="rounded-lg bg-grey-light text-xs ml-1 p-px">
                    {userDetails.public_repos}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/2 pt-6 pb-2 font-normal text-grey-darkest">
                  Pinned repositories
                </div>
                <div className="w-1/2 justify-end text-right text-grey-dark text-sm font-light pt-6 pb-2">
                  Customize your pinned repositories
                </div>
              </div>
              <div className="flex flex-row gap-1 justify-between flex-wrap">
                {isRepoLoading ? (
                  <div
                    role="status"
                    className=" w-full mt-3 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <div>
                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                      </div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                    </div>

                    <span className="sr-only">Loading...</span>
                  </div>
                ) : userRepos.length === 0 ? (
                  <div className="text-black h-full w-full flex justify-center items-center">
                    No Data{" "}
                  </div>
                ) : (
                  userRepos.slice(0, 6).map((data: any) => {
                    return (
                      <div
                        key={data.id}
                        className=" lg:w-[48%] w-full  border px-4 py-4 mb-4  rounded text-sm"
                      >
                        <div className="flex text-blue-500  justify-between font-semibold">
                          <a
                            href={data?.html_url}
                            target="_blank"
                            className="no-underline truncate"
                          >
                            {data.name}
                          </a>
                          <div
                            className="font-medium text-gray-400 border-gray-100 border-2 rounded-xl "
                            style={{ padding: "0 4px " }}
                          >
                            {data.visibility}
                          </div>
                        </div>
                        <div className="flex  items-center  gap-2 text-sm mt-6">
                          <span
                            style={{
                              backgroundColor: `${getColorByLanguage(
                                data.language
                              )}`,
                            }}
                            className="h-3 w-3 rounded-full "
                          ></span>
                          {data.language}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="container mx-auto px-8">
          <div className="px-10">
            <div className="flex items-center flex-row justify-between border-t py-8">
              <div className="justify-start justify-between text-xs w-2/5 flex md:flex-row flex-wrap">
                <div className="mr-4">&copy; 2017 GitHub, Inc.</div>
                <div className="mr-4">
                  <a href="#" className="no-underline">
                    Terms
                  </a>
                </div>
                <div className="mr-4">
                  <a href="#" className="no-underline">
                    Privacy
                  </a>
                </div>
                <div className="mr-4">
                  <a href="#" className="no-underline">
                    Security
                  </a>
                </div>
                <div className="mr-4">
                  <a href="#" className="no-underline">
                    Status
                  </a>
                </div>
                <div className="mr-4">
                  <a href="#" className="no-underline">
                    Help
                  </a>
                </div>
              </div>
              <div className="justify-center  text-center">
                <svg
                  className="fill-current text-grey h-6 w-6"
                  aria-labelledby="simpleicons-github-icon"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="simpleicons-github-icon">GitHub icon</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
              <div className="justify-end justify-between flex-col md:flex-row text-xs w-2/5 flex text-right">
                <div className="ml-4">
                  <a href="#" className="no-underline">
                    Contact GitHub
                  </a>
                </div>
                <div className="ml-4">
                  <a href="#" className="no-underline">
                    API
                  </a>
                </div>
                <div className="ml-4">
                  <a href="#" className="no-underline">
                    Training
                  </a>
                </div>
                <div className="ml-4">
                  <a href="#" className="no-underline">
                    Shop
                  </a>
                </div>
                <div className="ml-4">
                  <a href="#" className="no-underline">
                    Blog
                  </a>
                </div>
                <div className="ml-4">
                  <a href="#" className="no-underline">
                    About
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Home;
