import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import User from './components/User';

function App() {

  const [sesion, cambiarEstadoSesion] = useState(true);

  return (
    <>
      {
        sesion === true ?
          <div>
            <User
              color={"blue"}
              name="Javier"/>
          </div>
          : <div>

          </div>
      }
    </>
  );
}

export default App;
