import React, { useEffect, useState } from "react";

const ListaProd = ({
  productos,
  sumarCantidad,
  restarCantidad,
  eliminarProducto,
}) => {
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    calcularPrecioTotal();
  }, [productos]);

  const calcularPrecioTotal = () => {
    const total = productos.reduce((total, producto) => {
      return total + producto.precio * producto.cantidad;
    }, 0);
    setPrecioTotal(total);
  };

  return (
    <section>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto, i) => (
          <li key={i}>
            <strong>{producto.nombre}</strong> - ${producto.precio.toFixed(2)}
            {producto.descripcion && <p>{producto.descripcion}</p>}
            <p>Cantidad: {producto.cantidad}</p>
            <button onClick={() => sumarCantidad(i)}>+</button>
            <button onClick={() => restarCantidad(i)}>-</button>
            <button onClick={() => eliminarProducto(i)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <p>Precio total: ${precioTotal.toFixed(2)}</p>
    </section>
  );
};

export default ListaProd;
