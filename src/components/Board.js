import React from "react";
import Square from "./Square";

const style = {
    border:'3px solid black',
    borderRadius:'5px',
    width:'200px',
    height:'200px',
    margin: '50px auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({squares , onClick}) => (
    <>
        <h1><center>Tic Tac Toe</center></h1>
        <div style={ style }>
        {
        squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))
        }
        </div>
    </>
)

export default Board;