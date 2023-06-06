import { useState } from 'react';
import './App.css'
import CargaProd from './componentes/CargaProd'
import ListaProd from './componentes/ListaProd'

const App = () => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  return (
    <>
      <CargaProd agregarProducto={agregarProducto} />
      <ListaProd productos={productos} />
    </>
  )
}

export default App;
