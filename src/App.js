import React, { useState } from 'react';
import './App.css';

const Counter = () => {

  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
  };


  const decrement = () => {
    setCount(count - 1);
  };


  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Valeur du compteur : {count}</h1>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
      <button onClick={reset}>Réinitialiser</button>
    </div>
  );
};

export default Counter;
