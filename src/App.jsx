import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import { Home } from './components/home/Home';
import Comunidad from './components/comunidad/Comunidad';
import Conecta from './components/conecta/Conecta';
import Crearuta from './components/crearuta/Crearuta';
import Rutaje from './components/rutaje/Rutaje';
import Guia from './components/guia/Guia';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Home />
      <Conecta />
      <Crearuta />
      <Rutaje />
      <Guia />
      <Comunidad />
    </div>
  );
}

export default App;
