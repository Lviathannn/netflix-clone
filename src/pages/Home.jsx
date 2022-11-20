import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Request from "../Request";

export default function Home() {
   return (
      <>
         <Main />
         <Row rowID="1" title="Up Coming" fetchURL={Request.requestUpcoming} />
         <Row rowID="2" title="Popular" fetchURL={Request.requestPopular} />
         <Row rowID="3" title="Trending" fetchURL={Request.requestTrending} />
         <Row rowID="4" title="Top Rated" fetchURL={Request.requestTopRated} />
         <Row rowID="5" title="Horror" fetchURL={Request.requestHorror} />
      </>
   );
}
