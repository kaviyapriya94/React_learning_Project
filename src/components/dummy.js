import React from  'react';
export default function Dummy({check,a}){
    return(
        <div>
            <button onClick={check}> Submit {a}</button>
        </div>
    )
}