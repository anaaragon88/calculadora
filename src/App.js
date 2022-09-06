import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp.svg';
import Boton from './componentes/Boton';
import './hojas-de-estilo/Boton.css';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='logo freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
          <Boton>2</Boton>
          <Boton>4</Boton>
        </div>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
          <Boton>2</Boton>
          <Boton>4</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
