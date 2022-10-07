import React from "react";
import Miniticket from "../../../components/miniticket/Miniticket";
import Navbar from "../../../components/navbar/Navbar";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const tickets = await prisma.ticket.findMany();
  return {
    props: {
      ticketprop: tickets,
    },
  };
}

type newTicketProps = {
  map(
    arg0: (el: {
      priority: string;
      description: string;
      title: string;
      id: string;
    }) => JSX.Element
  ): React.ReactNode;
  title: string;
  description: string;
  id: string;
  priority: string;
  ticketType: string;
  assignedTo: string;
};

const Index = (props: { ticketprop: newTicketProps }) => {
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
            {props.ticketprop.map(
              (el: {
                priority: string;
                description: string;
                title: string;
                id: string;
              }) => {
                return (
                  <Miniticket
                    key={el.id}
                    title={el.title}
                    priority={el.priority}
                    id={el.id}
                  />
                );
              }
            )}
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
