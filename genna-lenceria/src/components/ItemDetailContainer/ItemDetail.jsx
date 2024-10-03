import React from "react";
import Counter from "../Counter/Counter";



const ItemDetail = ({ item, onAdd }) => {
    return (
        <>
            <img src={item.image} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>Stock: {item.stock} unidades</p>
                <p>Price: ${item.price}</p>
                <Counter onAdd={onAdd}/>
            </div>
        </>

    )
}

export default ItemDetail;


