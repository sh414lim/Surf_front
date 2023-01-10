import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/layout/AppLayout";
import Header from "../components/common/Header";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Header />

      <Component {...pageProps} />
    </AppLayout>
  );
}
