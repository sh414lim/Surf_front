import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Main } from "next/document";
import IntroPage from "../components/shop/IntroPage";
import Header from "../components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <IntroPage />
    </>
  );
}
