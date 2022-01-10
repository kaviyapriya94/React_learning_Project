import React from 'react';
import { useSelector } from "react-redux";
export default function Child(){
    const selectedDetails = useSelector(
        (state) => state.searchReducer
      );
    console.log(selectedDetails);
   
    return(
        <div className="text-center">
           
            <>
            <h1 className=" text-primary text-center pt-5">Your Age</h1>
           <h4 className="text-center pt-3">{selectedDetails.age.Years} years {selectedDetails.age.Months} Months {selectedDetails.age.Days} Days</h4>
           
            </>
      
            </div>
    )
}