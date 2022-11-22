import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const { user, logIn } = UserAuth();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
         await logIn(email, password);
         navigate("/");
      } catch (error) {
         setError(error);
      }
   };
   return (
      <div className="w-full max-h-screen">
         <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/c79d7cea-0f2f-4b5c-9130-e3a74468be57/ID-id-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt=""
            className="hidden sm:block absolute w-full h-full object-cover"
         />
         <div className="fixed w-full px-4 py-24 z-50 bg-black/60">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
               <div className="max-w-[320px] mx-auto py-16">
                  <h1 className="text-3xl font-bold">Sign In</h1>
                  {error ? (
                     <p className="text-red-500 mt-2">
                        Wrong Email or Password
                     </p>
                  ) : null}
                  <form
                     className="flex flex-col py-4 w-full"
                     onSubmit={handleSubmit}
                  >
                     <input
                        onChange={(e) => {
                           setEmail(e.target.value);
                        }}
                        className="p-3 my-2 bg-gray-600/50 rounded"
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                     />
                     <input
                        className="p-3 my-2 bg-gray-600/50 rounded"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => {
                           setPassword(e.target.value);
                        }}
                     />
                     <button className="bg-red-600 py-3 my-6 rounded font-bold">
                        Sign In
                     </button>
                     <div className="flex justify-between items-center text-sm text-gray-500">
                        <p>
                           <input type="checkbox" className="mr-2" />
                           Remember Me ?
                        </p>
                        <p>Need Help?</p>
                     </div>
                     <p className="py-8">
                        <span className="text-sm text-gray-500 mr-1">
                           New to Netflix?
                        </span>
                        <Link to="/signup">Sign Up</Link>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}
