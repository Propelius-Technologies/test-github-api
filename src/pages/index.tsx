import Image from "next/image";
import { Inter } from "next/font/google";
import { RootState } from "@/Store";
import { useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Dropdown } from "flowbite-react";
import { useGetUsersQuery } from "@/Store/Users/Reducer";
import ContentWrapper from "@/components/ContentWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const store = useSelector((state: RootState) => state);
  console.log(store);
  const {
    data: userData = [],
    error,
    isLoading,
    isFetching,
    refetch,
  } = useGetUsersQuery("sa");
  console.log(userData, store);
  return <ContentWrapper>helloksjgfksfvisvb</ContentWrapper>;
}
