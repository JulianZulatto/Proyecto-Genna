import React, { useState } from "react";

const Counter = ({ onAdd, text = "Agregar al carrito", q = 1}) => {
    const [count, setCount] = useState(q);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <button onClick={decrement}> - </button>
            <span>{count}</span>
            <button onClick={increment}> + </button>
            <button onClick={() => onAdd(count)}> {text}</button>
        </div>
    );
};

export default Counter;