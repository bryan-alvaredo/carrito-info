import React from "react";

const ListaProd = ({ productos }) => {
  const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);

  return (
    <section>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto, i) => (
          <li key={i}>
            <strong>{producto.nombre}</strong> - ${producto.precio.toFixed(2)}
            {producto.descripcion && <p>{producto.descripcion}</p>}
          </li>
        ))}
      </ul>

      <p>Precio total: ${precioTotal.toFixed(2)}</p>
    </section>
  )
}

export default ListaProd;