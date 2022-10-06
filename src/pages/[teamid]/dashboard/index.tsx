import React from "react";
import Miniticket from "../../../components/miniticket/Miniticket";
import Navbar from "../../../components/navbar/Navbar";
import { useSession } from "next-auth/react";

const Index = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div>
          <Navbar />
          <section
            id="minitickets"
            className="fixed bottom-2 left-2 flex w-full flex-row justify-start space-x-4"
          >
            <Miniticket title="US sever maintainece" priority="warning" />
            <Miniticket title="User forgot password" priority="success" />
            <Miniticket title="Issue with styles" priority="error" />
          </section>
        </div>
      ) : (
        <>
          <Navbar />
          <h3 className="text-center text-3xl font-bold">{`You don't have permission to acsess this page`}</h3>
        </>
      )}
    </>
  );
};

export default Index;
