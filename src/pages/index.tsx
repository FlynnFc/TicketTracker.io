import type { NextPage } from "next";
import Hero from "../components/hero/Hero";

const Home: NextPage = () => {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
  <Hero></Hero>
      </main>
    </>
  );
};

export default Home;
