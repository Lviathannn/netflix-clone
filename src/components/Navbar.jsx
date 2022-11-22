import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { BsFillPersonFill } from "react-icons/bs";

export default function Navbar() {
   const { user, logOut } = UserAuth();

   const navigate = useNavigate();

   const handleLogout = async () => {
      try {
         await logOut();
         navigate("/");
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
         <Link to="/">
            <h1 className="text-red-500 text-4xl font-bold cursor-pointer">
               NETFLIX
            </h1>
         </Link>
         {user ? (
            <div className="text-white flex">
               <Link to="/account">
                  <button className="pr-4 cursor-pointer hover:bg-black/20 px-6 py-2 mr-2 rounded flex gap-1 items-center">
                     <BsFillPersonFill className="flex" />
                     <p>Account</p>
                  </button>
               </Link>
               <button
                  className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded cursor-pointer"
                  onClick={handleLogout}
               >
                  Log Out
               </button>
            </div>
         ) : (
            <div className="text-white">
               <Link to="/signup">
                  <button className="pr-4 cursor-pointer hover:bg-black/20 px-6 py-2 mr-2 rounded">
                     Sign Up
                  </button>
               </Link>
               <Link to="/login">
                  <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded cursor-pointer">
                     Sign In
                  </button>
               </Link>
            </div>
         )}
      </div>
   );
}
