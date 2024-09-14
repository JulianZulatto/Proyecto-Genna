import { Link, useParams } from "react-router-dom";
import React from "react";
import data from "../data/data";

function DetalleProducto() {
  const { productoId } = useParams();


  let resultadoFind = null;

  for (const categoria of data) {
    resultadoFind = categoria.productos.find((producto) => producto.id === parseInt(productoId));
    if (resultadoFind) break; 
  }


  if (!resultadoFind) {
    return <div>Producto no encontrado</div>;
  }

  const { image, nombre, precio } = resultadoFind;

  return (
    <div>
      <img src={image} alt={nombre} />
      <h2>{nombre}</h2>
      <h3>Precio: ${precio}</h3>
      <Link to="/Catalogo/Pijamas">Volver</Link>
    </div>
  );
}

export default DetalleProducto;

