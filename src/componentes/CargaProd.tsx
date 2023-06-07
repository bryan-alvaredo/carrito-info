import React from "react";
import { useState } from "react";

const CargaProd = (props: { agregarProducto: Function }) => {
  const { agregarProducto } = props;

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (event: { target: any; preventDefault: () => void }) => {
    event.preventDefault();

    const producto = {
      nombre,
      precio: parseFloat(precio),
      descripcion: descripcion || "",
    };

    agregarProducto(producto);
    setNombre("");
    setPrecio("");
    setDescripcion("");
    event.target.reset();
  };

  return (
    <section className="cardCargaProd">
      <h1>Cargar Producto</h1>
      <form className="formCargaProd" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del Producto</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          required
        />
        <label htmlFor="descripcion">Descripción (Opcional)</label>
        <input
          type="text"
          id="descripcion"
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
        />
        <label htmlFor="precio">Precio</label>
        <input
          type="text"
          id="precio"
          name="precio"
          step="0.01"
          onChange={(event) => setPrecio(event.target.value)}
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </section>
  );
};

export default CargaProd;
