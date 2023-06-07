import React from "react";
import { useState } from "react";
import { CardCargaProd, FormCargaProd } from "../styles/styles";

const CargaProd = (props: { agregarProducto: Function; }) => {
  const { agregarProducto } = props;
  if (typeof agregarProducto !== "function") {
    console.error("La prop agregarProducto debe ser una función.");
    return null;
  }

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
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
    // event.target.reset();
  };

  return (
    <CardCargaProd>
      <h1>Cargar Producto</h1>
      <FormCargaProd onSubmit={handleSubmit}>
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
      </FormCargaProd>
    </CardCargaProd>
  );
};

export default CargaProd;
