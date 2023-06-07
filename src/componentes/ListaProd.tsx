import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { Boton } from "../styles/styles";

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
    <>
      <section>
        <h2>Lista de Productos</h2>
        <ul>
          {productos.map((producto, i) => (
            <li key={i}>
              <button onClick={() => eliminarProducto(i)}><FaTrashAlt /></button>
              <p>{producto.nombre}</p>
              {producto.descripcion && <p>{producto.descripcion}</p>}
              <p>${producto.precio.toFixed(2)}</p>
              <Boton onClick={() => sumarCantidad(i)}>+</Boton>
              <p>Cantidad: {producto.cantidad}</p>
              <button onClick={() => restarCantidad(i)}>-</button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <p><FaShoppingCart /> ${precioTotal.toFixed(2)}</p>
      </section>
    </>
  );
};

export default ListaProd;
