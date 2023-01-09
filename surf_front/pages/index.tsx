import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Main } from "next/document";
import MainPage from "./MainPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainPage />
    </>
  );
}
