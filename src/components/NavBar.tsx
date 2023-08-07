/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import {FaShoppingBag} from "react-icons/fa";
import Link from "next/link";
import React, {useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/router";
import axios from "axios";

const Navbar = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/api/v1/users/getuserrole", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        // console.log(response.data.data.role);
        setUserRole(response.data.data.role);
      })
      .catch((error) => {
        console.error("Error fetching user role:", error);
        setUserRole(""); // Set userRole to empty string in case of error
      });
  }, []);

  const handleLogout = (e) => {
    // Remove the token from local storage on logout
    e.preventDefault();
    localStorage.removeItem("token");
    // Redirect to the login page after logout
    router.push("/login");
  };

   const isAdmin = userRole === "admin";

   const handleAdminClick = () => {
    if (isAdmin) {
      router.push("/admin");
    } else {
      alert("You do not have permission to access the Admin section.");
      router.push("/");
    }
  };

  return (
    <>
      <div className="navbar">
        <nav className="bg-slate-50 dark:bg-slate-50">
          <div className="flex justify-between ..">
            <div className="side-left">
              <div className="max-w-screen-xl py-3 mx-auto">
                <div className="p-1 bg-black">
                  <a href="/">
                    <h1 className="text-white tracking-wide">NOUS</h1>
                  </a>
                </div>
              </div>
            </div>
            <div className="side-right">
              <div className="navbar-container__1">
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-black bg-white dark:bg-white"
                  />
                  <label
                    htmlFor="default-search"
                    className="absolute inset-y-0 left-7 flex items-center pl-3 pointer-events-none text-black dark:text-black dark:placeholder-transparent"
                  >
                    Search...
                  </label>
                  <svg
                    className="absolute w-4 h-4 left-3 bottom-4 text-gray-500 dark:text-black "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="max-w-screen-xl pl-4 pr-0 py-3 mx-auto mr-0">
              <div className="flex items-center">
                <ul className="hidden lg:flex lg:flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-black dark:text-black hover:text-orange-400"
                      aria-current="page"
                    >
                      Shop All
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/plp"
                      className="text-black dark:text-black hover:text-orange-400"
                    >
                      Women
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black dark:text-black hover:text-orange-400"
                    >
                      Men
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black dark:text-black hover:text-orange-400"
                    >
                      Sale
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black dark:text-black hover:text-orange-400"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-black dark:text-black hover:text-orange-400"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <button
                      className="text-black dark:text-black hover:text-orange-400"
                      onClick={handleAdminClick}
                    >
                      Admin
                    </button>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center">
                      <div className="h-6 w-6">
                      <img
                        src="images/login.jpg"
                        className="h-5 mr-3"
                        alt="Login-logo"
                      />
                      </div>
                      <span className="text-black dark:text-black hover:text-orange-400 pl-2">
                        {/* <button onClick={handleLogout}>Log out</button> */}
                        <button onClick={handleLogout}>Log out</button>
                      </span>
                    </Link>
                  </li>

                  <li><Link href="/checkout" className="hover:text-orange-400">
                  <button className="relative flex items-center w-8 h-8 border border-black">
                    <FaShoppingBag className="w-10" />
                    
                  </button>
                    </Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;



