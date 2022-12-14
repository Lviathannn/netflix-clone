import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function SignUp() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const { signUp } = UserAuth();
   const [error, setError] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
      try {
         password.length >= 6 ? await signUp(email, password) : setError(true);
         password.length >= 6 ? navigate("/") : setError(true);
      } catch (error) {
         console.log(error);
         setError(true);
      }
   };

   return (
      <>
         <div className="w-full max-h-screen">
            <img
               src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/c79d7cea-0f2f-4b5c-9130-e3a74468be57/ID-id-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg"
               alt=""
               className="hidden sm:block absolute w-full h-full object-cover"
            />
            <div className="fixed w-full px-4 py-24 z-50 bg-black/60">
               <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                  <div className="max-w-[320px] mx-auto py-16">
                     <h1 className="text-3xl font-bold">Sign Up</h1>
                     {error ? (
                        <p className="text-red-500 mt-2">
                           Password must be longer than 6 characters
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
                           onChange={(e) => {
                              setPassword(e.target.value);
                           }}
                           className="p-3 my-2 bg-gray-600/50 rounded"
                           type="password"
                           placeholder="Password"
                           autoComplete="current-password"
                        />
                        <button
                           type="submit"
                           className="bg-red-600 py-3 my-6 rounded font-bold"
                        >
                           Sign Up
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
                              Already Subscribe to Neetflix?
                           </span>
                           <Link to="/login">SignIn</Link>
                        </p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         ;
      </>
   );
}
