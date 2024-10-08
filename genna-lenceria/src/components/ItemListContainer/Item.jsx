import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.css";
import { useParams } from 'react-router-dom';


const Item = ({ products }) => {

  const { categoryId } = useParams();

  
  return (
    <div>
      <h1>{categoryId}</h1>
      <div className="item-list-container">
        {products.map(product => (
          <article className='card' key={product.id}>
            <img className="img" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <Link className='button' to={`/Catalogo/${categoryId}/${product.id}`}>Mas Info.</Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Item;



