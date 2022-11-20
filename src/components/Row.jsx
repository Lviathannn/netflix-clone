import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Row({ title, fetchURL, rowID }) {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      axios.get(fetchURL).then((response) => {
         setMovies(response.data.results);
      });
   }, [fetchURL]);

   const handleClick = (direction) => {
      let slider = document.getElementById("slider" + rowID);
      direction === "right"
         ? (slider.scrollLeft = slider.scrollLeft - 500)
         : (slider.scrollLeft = slider.scrollLeft + 500);
   };

   return (
      <>
         <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
         <div className="relative flex items-center group">
            <MdChevronLeft
               size={40}
               className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden left-2"
               onClick={() => {
                  handleClick("right");
               }}
            />
            <div
               id={"slider" + rowID}
               className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
               {movies.map((movie, index) => {
                  return <Movie movie={movie} key={index} />;
               })}
            </div>
            <MdChevronRight
               onClick={() => {
                  handleClick("left");
               }}
               size={40}
               className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden right-2"
            />
         </div>
      </>
   );
}
