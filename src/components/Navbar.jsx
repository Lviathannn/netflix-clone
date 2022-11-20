import React from "react";

export default function Navbar() {
   return (
      <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
         <h1 className="text-red-500 text-4xl font-bold cursor-pointer">
            NETFLIX
         </h1>
         <div className="text-white">
            <button className=" pr-4">Sign Up</button>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
               Sign In
            </button>
         </div>
      </div>
   );
}
