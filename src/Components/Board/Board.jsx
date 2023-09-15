import React from 'react'
import Box from '../Box/Box'
import "./Board.css"

const Board = ({board, onClick}) => {
  return(
     <div class = "board">
     {board.map((item,id) =>(
      <Box key   = {id}value = {item} onClick={()=>onClick(id)}/>
     ))}
  </div>
  );
};
export default Board 
