import { Inter } from "next/font/google";
import { RootState } from "@/Store";
import { useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Dropdown } from "flowbite-react";
import { useGetUsersQuery } from "@/Store/Users/Reducer";
import ContentWrapper from "@/components/ContentWrapper";
import User from "@/components/user";
import { useState, useDeferredValue } from "react";
import UserList from "@/components/UserList";
import Repository from "@/components/repository";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [searchText, setSearchtext] = useState("");
  const [tab, setTab] = useState("Users");
  const [dataCount, setDataCount] = useState(0);
  const value = useDeferredValue(searchText);

  const [page, setPage] = useState(1);

  return (
    <ContentWrapper
      setSearchtext={setSearchtext}
      withDropdown
      className={"text-black"}
      count={dataCount}
      setTab={setTab}
      tab={tab}
      setPage={setPage}
    >
      {tab === "Users" ? (
        <UserList
          setPage={setPage}
          page={page}
          value={value}
          setDataCount={setDataCount}
        />
      ) : (
        <Repository
          value={value}
          page={page}
          setPage={setPage}
          setDataCount={setDataCount}
        />
      )}
    </ContentWrapper>
  );
}
