import React from "react";
import { useRouter } from "next/router";

const TicketDetails = () => {
  const router = useRouter();
  const { ticketid } = router.query;
  console.log(router);
  return (
    <div>
      <p>This Ticked has the id of {ticketid}</p>
    </div>
  );
};

export default TicketDetails;
