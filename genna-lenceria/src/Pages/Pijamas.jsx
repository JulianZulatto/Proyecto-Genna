import React from 'react';
import { Link } from 'react-router-dom';
import "../style/pijamas.css";


const Pijamas = ({ products }) => {
  console.log(products)
  // const pijamaCategoria = products.filter(product => product.category === "pijamas")

  // if (pijamaCategoria.length === 0) {
  //   return console.log("categoria no encontrada")
  // }

  // return (
  //   <div>
  //     <h1>Pijamas</h1>
  //     <div className="pijamas">
  //       {pijamaCategoria.map((product) => (
  //         <article key={product.id}>
  //           {/* <img className="img" src={product.image} alt={product.name} /> */}
  //           <h2>{product.name}</h2>
  //           <p>Precio: ${product.price}</p>
  //           <Link to={`/Catalogo/Pijamas/${product.id}`}>Mas Info.</Link>
  //         </article>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Pijamas;



