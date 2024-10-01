import React from "react";
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div key={item.id} className="cardItem">
            <img src={item.img} alt={item.name} />
            <h3>Name: {item.name}</h3>
            <p>Descripcion: {item.model}</p>
            <p>Price: {item.price}</p>
            <Link className='button' to={`/detail/${item.id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item;