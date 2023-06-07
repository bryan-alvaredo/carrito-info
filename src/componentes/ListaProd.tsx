import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

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
    const total = productos.reduce(
      (total: number, producto: { precio: number; cantidad: number }) => {
        return total + producto.precio * producto.cantidad;
      },
      0
    );
    setPrecioTotal(total);
  };

  return (
    <>
      <section className="seccionLista">
        <h2>Lista de Productos</h2>
        <section>
          {productos.map((producto, i) => (
            <article key={i} className="producto">
              {console.log(i)}
              <button className="eliminar" onClick={() => eliminarProducto(i)}>
                <FaTrashAlt />
              </button>
              <p className="nombre">{producto.nombre}</p>
              {producto.descripcion && (
                <p className="descripcion">{producto.descripcion}</p>
              )}
              <p className="precio">${producto.precio.toFixed(2)}</p>
              <article>
                <button className="suma" onClick={() => sumarCantidad(i)}>
                  +
                </button>
                <button className="resta" onClick={() => restarCantidad(i)}>
                  -
                </button>
              </article>
              <p className="cantidad">Cantidad: {producto.cantidad}</p>
            </article>
          ))}
        </section>
      </section>
      <section className="infoCarrito">
        <p>
          <FaShoppingCart /> ${precioTotal.toFixed(2)}
        </p>
      </section>
    </>
  );
};

export default ListaProd;
