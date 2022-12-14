import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import User from './components/User';
import Formulario from './components/Formulario';
import ContadorFuncional from './components/ContadorFuncional';
import './elements/App.css';
import Boton from './elements/Boton';
import EjemploUseReducer from './components/useReducer';
import Blog from './components/Blog';

function App() {
  const [sesion, cambiarEstadoSesion] = useState(false);

  return (
    <div className='contenedor'>
      {
        sesion === true ?
          <div>
            <User
              color="blue"
              name="Javier"
              years="20"
              country="España"
            />
            <Blog />
            {/* <EjemploUseReducer /> */}
            {/* <ContadorClass /> */}
            <ContadorFuncional />
            <Boton largo marginTop onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesión</Boton>
          </div>
          : <div>
            <Formulario function={cambiarEstadoSesion} />
            {/* <button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesión</button> */}
          </div>
      }
    </div>
  );
}

export default App;
