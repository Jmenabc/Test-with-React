import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import User from './components/User';

function App() {

  const [sesion, cambiarEstadoSesion] = useState(false);

  return (
    <>
      {
        sesion === true ?
          <div>
            <User
              color="blue"
              name="Javier"
              years= "20"
              country="España"
               />
            <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesión</button>
          </div>
          : <div>
            <h1>No has iniciado sesión</h1>
            <p>Si quieres ver la información que se encuentra a continuación porfavor inicia sesión</p>
            <button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesión</button>
          </div>
      }
    </>
  );
}

export default App;
