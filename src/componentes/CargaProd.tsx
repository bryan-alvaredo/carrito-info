import React from "react";
import { useState } from "react";

const CargaProd = (props) => {
  const { agregarProducto } = props;
  if (typeof agregarProducto !== 'function') {
    console.error('La prop agregarProducto debe ser una función.');
    return null;
  }

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const producto = {
      nombre,
      precio: parseFloat(precio),
      descripcion: descripcion || "",
    };

    agregarProducto(producto);
    setNombre('');
    setPrecio('');
    setDescripcion('');
    // event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h1>Cargar Producto</h1>
        <label htmlFor="nombre">Nombre del Producto</label>
        <input type="text" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
        <label htmlFor="descripcion">Descripción (Opcional)</label>
        <input type="text" id="descripcion" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
        <label htmlFor="precio">Precio</label>
        <input type="text" id="precio" name="precio" step="0.01" onChange={(event) => setPrecio(event.target.value)} required />
      </section>
      <button type="submit">Agregar</button>
    </form>
  )
}

export default CargaProd;