import React from "react";


const style = {

    background:'white',
    border:'2px solid black',
    fontSize: '25px',
    fontWeight: '800',
    cursor: 'pointer',
    FontFace: 'arial',
    outline: 'none'
}

const Square = ({value, onClick}) => (
    <button style={ style } onClick={ onClick } >
      { value }
    </button>
  );

export default Square;