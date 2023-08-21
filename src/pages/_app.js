// import "@/styles/Home.module.css";
import "@/styles/globals.css";
import { Urbanist } from "next/font/google";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import "../components/portfolio.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urban",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${urbanist.variable} font-urban`}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}
