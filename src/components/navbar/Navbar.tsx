import Link from "next/link";
import React from "react";
import { HiOutlineUserAdd, HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import LoginBtn from "../login-btn/LoginBtn";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 z-50 bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-primary p-2 font-semibold text-primary-content shadow"
          >
            <li>
              <a>
                <HiOutlineUserAdd />
                Mange Roles
              </a>
            </li>
            <li>
              <a>
                <HiOutlineUserGroup />
                Manage Projet users
              </a>
            </li>
            <li>
              <a>
                <AiOutlineProject />
                Projects
              </a>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/[teamid]/tickets/",
                  query: { teamid: "demo" },
                }}
              >
                <a>
                  <BiTask />
                  Tickets
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href={{
            pathname: "/[teamid]/dashboard",
            query: { teamid: "demo" },
          }}
        >
          <a className="btn btn-ghost text-xl normal-case">Dashboard</a>
        </Link>
      </div>
      <div className="navbar-end">
        <LoginBtn />
        <button disabled className="btn btn-ghost btn-circle ml-2">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge indicator-item badge-primary badge-xs"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
