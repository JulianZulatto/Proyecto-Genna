import React from 'react';
import { Link } from 'react-router-dom';
import "../style/pijamas.css";


const Pijamas = ({ products }) => {
  return (
    <div>
      <h1>Pijamas</h1>
      <div className="pijamas">
        {products.map(product => (
          <article key={product.id}>
            <img className="img" src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <Link to={`/Catalogo/Pijamas/${product.id}`}>Mas Info.</Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Pijamas;



