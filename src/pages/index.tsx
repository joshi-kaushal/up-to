import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Upto</title>
        <meta
          name="description"
          content="Keep track of everything you are up to."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Up to
          </h1>
          <h3 className="text-2xl font-semibold text-white">
            Keep track of everything you are up to!
          </h3>
        </div>
      </main>
    </>
  );
};

export default Home;
