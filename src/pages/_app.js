import "@/styles/globals.css";
import React from "react";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DrinkBot</title>
        <link rel='icon' href='/images/logo.png' />
      </Head>
      <>
        <Toaster
          position='top-center'
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Define default options
            style: {
              background: "#000",
              color: "#fff",
            },
          }}
        />
        <Component {...pageProps} />
      </>
    </>
  );
}
