import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data'; 
import "../style/pijamas.css";

const Pijamas = () => {
  const pijamaCategoria = data.find(categoria => categoria.nombre === "Pijamas");

  if (!pijamaCategoria) {
    return <div>Categoria no encontrada</div>;
  }

  return (
    <div>
      <h1>{pijamaCategoria.nombre}</h1>
      <div className="pijamas">
        {pijamaCategoria.productos.map((producto) => (
          <article key={producto.id}>
            <img className="img" src={producto.image} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <Link to={`/Catalogo/Pijamas/${producto.id}`}>Mas Info.</Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Pijamas;



