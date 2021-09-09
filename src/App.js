import React, { useState, useEffect, Suspense } from "react";
import data from "./data";
import "./style.css";
const MemCard = React.lazy(() => {
   return import("./MemCard.js");
});

export const App = () => {
   const [memsData, setMemsData] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);
   const [error, setError] = useState(null);
   const getData = () => {
      data.then(
         (result) => {
            setIsLoaded(true);
            setMemsData(result);
         },
         (err) => {
            return setError(err);
         }
      );
   };
   useEffect(() => {
      getData();
   });

   if (error) {
      return <div>{error.message}</div>;
   } else if (!isLoaded) {
      return <div>Loading data...</div>;
   } else {
      return (
         <div
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-evenly",
               alignItems: "flex-start",
            }}
         >
            {memsData.map((mem) => {
               return (
                  <Suspense
                     key={Math.floor(Math.random() * 1000000)}
                     fallback={
                        <div
                           style={{
                              width: mem.width * 0.3,
                              height: mem.height * 0.3,
                              margin: "20px",
                           }}
                        >
                           Please wait... Data is loading...
                        </div>
                     }
                  >
                     <MemCard
                        name={mem.name}
                        url={mem.url}
                        width={mem.width}
                        height={mem.height}
                     />
                  </Suspense>
               );
            })}
         </div>
      );
   }
};
