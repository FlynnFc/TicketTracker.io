import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Dashboard from "../dashboard/Dashboard";
import Hero from "../components/hero/Hero";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {session ? <Dashboard></Dashboard> : <Hero></Hero>}
      </main>
    </>
  );
};

export default Home;
