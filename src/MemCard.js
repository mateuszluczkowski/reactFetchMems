import { useState } from "react";

const MemCard = ({ name, url, height, width }) => {
   const [isLoaded, setIsLoaded] = useState(false);

   return (
      <div>
         <h1>{name}</h1>
         <img
            style={{
               display: `${isLoaded ? "inline" : "none"}`,
               height: height * 0.3,
               width: width * 0.3,
               margin: "20px",
            }}
            src={url}
            alt={name}
            className="image"
            onLoad={() => {
               console.log("zaladowane");
               setIsLoaded(true);
            }}
         />
         {isLoaded ? null : (
            <>
               <div
                  style={{
                     display: `${isLoaded ? "none" : "block"}`,
                     zIndex: "10",
                     width: width * 0.3,
                     height: height * 0.3,
                     backgroundColor: "#999",
                     margin: "20px",
                  }}
               ></div>
            </>
         )}
      </div>
   );
};

export default MemCard;
