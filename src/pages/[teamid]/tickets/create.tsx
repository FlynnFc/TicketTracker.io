// import { useState } from "react";
// import Drawer from "../../../components/drawer/Drawer";
// import Navbar from "../../../components/navbar/Navbar";
// import { toast, Toaster } from "react-hot-toast";
// import { useForm } from "react-hook-form";
// interface Formdata {
//   title: string;
//   details: string;
//   ticketType: string;
//   priority: string;
//   complexity: string;
// }

// async function saveTicket(ticket: any) {
//   const response = await fetch("/api/tickets", {
//     method: "POST",
//     body: JSON.stringify(ticket),
//   });

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return await response.json;
// }

// const Create = () => {
//   const { handleSubmit } = useForm();
//   const [form, setForm] = useState<Formdata>({
//     title: "",
//     details: "",
//     ticketType: "",
//     priority: "",
//     complexity: "",
//   });

//   async function submitter() {
//     await saveTicket(form);
//   }

//   return (
//     <>
//       <Navbar />
//       <Toaster />
//       <div className="drawer-mobile drawer">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex w-[90%] items-center">
//           <div className="flex w-[50%] flex-col rounded-2xl bg-base-300 p-12 md:mx-auto">
//             <h1 className="text-center text-3xl font-bold text-base-content">
//               Creating a new ticket
//             </h1>

//             <form
//               onSubmit={submitter()}
//               method="post"
//               className="mt-4 flex flex-col space-y-4 text-base-content"
//             >
//               <label htmlFor="title" className="text-xl font-medium">
//                 Ticket Title
//               </label>
//               <input
//                 required
//                 type="text"
//                 className="rounded-lg bg-base-100 p-2 "
//                 placeholder="Event title"
//                 onChange={(e) => setForm({ ...form, title: e.target.value })}
//                 value={form.title}
//               />
//               <label htmlFor="last" className="text-xl font-medium">
//                 Further details
//               </label>
//               <input
//                 required
//                 type="text"
//                 className="rounded-lg bg-base-100 p-2 "
//                 placeholder="Details"
//                 onChange={(e) => setForm({ ...form, details: e.target.value })}
//                 value={form.details}
//               />
//               <div className="flex w-full flex-col">
//                 <label htmlFor="first" className="my-2 text-xl font-medium">
//                   Ticket type
//                 </label>

//                 <select
//                   className="select w-full"
//                   value={form.ticketType}
//                   onChange={(e) =>
//                     setForm({ ...form, ticketType: e.target.value })
//                   }
//                 >
//                   <option disabled selected>
//                     Choose the type of ticket
//                   </option>
//                   <option>Bug</option>
//                   <option>Feature</option>
//                   <option>Support/Advice</option>
//                   <option>Task</option>
//                 </select>
//               </div>

//               <div className="flex w-full flex-col">
//                 <label htmlFor="first" className="my-2 text-xl font-medium">
//                   Priority
//                 </label>

//                 <select className="select w-full">
//                   <option disabled selected>
//                     Choose the priority of this ticket
//                   </option>
//                   <option>Low</option>
//                   <option>Medium</option>
//                   <option>High</option>
//                   <option>Critical</option>
//                 </select>
//               </div>
//               <div className="flex w-full flex-col">
//                 <label htmlFor="first" className="my-2 text-xl font-medium">
//                   Complexity
//                 </label>

//                 <select
//                   className="select w-full"
//                   value={form.complexity}
//                   onChange={(e) =>
//                     setForm({ ...form, complexity: e.target.value })
//                   }
//                 >
//                   <option disabled selected>
//                     Choose the Complexity of this ticket
//                   </option>
//                   <option>Low</option>
//                   <option>Medium</option>
//                   <option>High</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="rounded-lg bg-primary p-2 text-2xl font-bold"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//           <label
//             htmlFor="my-drawer-2"
//             className="btn btn-primary drawer-button lg:hidden"
//           >
//             Open drawer
//           </label>
//         </div>
//         <Drawer />
//       </div>
//     </>
//   );
// };
// export default Create;

import React from "react";

const Create = () => {
  return <div>create</div>;
};

export default Create;
