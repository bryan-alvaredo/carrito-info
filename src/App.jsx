import { useState } from 'react';
import './App.css'
import CargaProd from './componentes/CargaProd'
import ListaProd from './componentes/ListaProd'

const App = () => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, { ...producto, cantidad: 1 }]);
  };

  const sumarCantidad = (index) => {
    setProductos((prevProductos) => {
      const nuevosProductos = [...prevProductos];
      nuevosProductos[index] = {
        ...nuevosProductos[index],
        cantidad: nuevosProductos[index].cantidad + 1,
        valorTotal: (nuevosProductos[index].cantidad + 1) * nuevosProductos[index].precio
      };
      return nuevosProductos;
    });
  };

  const restarCantidad = (index) => {
    setProductos((prevProductos) => {
      const nuevosProductos = [...prevProductos];
      if (nuevosProductos[index].cantidad > 0) {
        nuevosProductos[index] = {
          ...nuevosProductos[index],
          cantidad: nuevosProductos[index].cantidad - 1,
          valorTotal: (nuevosProductos[index].cantidad - 1) * nuevosProductos[index].precio
        };
      }
      return nuevosProductos;
    });
  };

  const eliminarProducto = (index) => {
    const updatedProductos = [...productos];
    updatedProductos.splice(index, 1);
    setProductos(updatedProductos);
  };

  return (
    <>
      <CargaProd agregarProducto={agregarProducto} />
      <ListaProd productos={productos} sumarCantidad={sumarCantidad} restarCantidad={restarCantidad} eliminarProducto={eliminarProducto} />
    </>
  )
}

export default App;
