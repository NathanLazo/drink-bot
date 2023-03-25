import "@/styles/globals.css";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Toaster position='top-center' reverseOrder={false} gutter={8} /> */}
      <Component {...pageProps} />
    </>
  );
}
