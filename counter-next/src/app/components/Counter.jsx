"use client"
import { useState } from 'react';


export default function Counter() {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [number, setNumber] = useState(0);
    
  return (
    <>
      <div className="counter-container">
        <button onClick={() => (number >= 10 ? setNumber(10) : setNumber(number + 1))}>+</button>
        <span>{number}</span>
        <button onClick={() => (number > 0 ? setNumber(number - 1) : setButtonDisabled(isButtonDisabled === true))}>-</button>
      </div>
    </>
  );
}

