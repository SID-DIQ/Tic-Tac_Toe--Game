 import React from 'react'
 import "./Box.css"
 
 const Box = ({value,id,onClick}) => {
   return ( 
   <button key ={id}
   className={`box $ {value == X ? "X" : "O"}`} 
   onClick={onClick}>
    {value}
    </button>
   );
 };
 
 export default Box;
 