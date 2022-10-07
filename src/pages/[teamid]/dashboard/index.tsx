import React from "react";
import Miniticket from "../../../components/miniticket/Miniticket";
import Navbar from "../../../components/navbar/Navbar";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

type TicketProps = {
  title: string;
  description: string;
  id: string;
  priority: string;
  ticketType: string;
  assignedTo: string;
};
const prisma = new PrismaClient();

export async function getServerSideProps() {
  const tickets: TicketProps[] = await prisma.ticket.findMany();
  return {
    props: {
      ticketprop: tickets,
    },
  };
}

const Index = ({ ticketprop }) => {
  const { data: session } = useSession();
  console.log(ticketprop);
  return (
    <>
      {session ? (
        <div>
          <Navbar />
          <section
            id="minitickets"
            className="fixed bottom-2 left-2 flex w-full flex-row justify-start space-x-4"
          >
            {ticketprop.map(
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
