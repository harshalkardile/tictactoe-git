import React from "react";


const style = {

    background:'orange',
    border:'2px solid black',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({value, onClick}) => (
    <button style={ style } onClick={ onClick } >
      { value }
    </button>
  );

export default Square;