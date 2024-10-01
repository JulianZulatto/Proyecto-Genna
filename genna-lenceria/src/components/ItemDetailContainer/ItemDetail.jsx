import React from "react";


const ItemDetail = ({item}) => {
    return(
        <>
        <img src={item.img} alt={item.name} />
        <div>
            <h3>{item.name}</h3>
            <p>Model: {item.model}</p>
            <p>Stock: {item.stock} unidades</p>
            <p>Price: ${item.price}</p>
        </div>
        </>

    )
}

export default ItemDetail;


