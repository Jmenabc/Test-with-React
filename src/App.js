import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import User from './components/User';
import Formulario from './components/Formulario';
import ContadorFuncional from './components/ContadorFuncional';
import './elements/App.css';

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
            {/* <ContadorClass /> */}
            <ContadorFuncional />
            <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesión</button>
          </div>
          : <div>
            <p>Si quieres ver la información que se encuentra a continuación porfavor inicia sesión</p>
            <Formulario function={cambiarEstadoSesion} />
            {/* <button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesión</button> */}
          </div>
      }
    </div>
  );
}

export default App;
