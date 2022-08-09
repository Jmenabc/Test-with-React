import React, { useState } from 'react';
import './../elements/Formulario.css';

const FormularioInicioSesión = (props) => {
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');

    const onChange = (event) => {
        if (event.target.name === 'usuario') {
            changeUsername(event.target.value)
        } else if (event.target.name === 'password') {
            changePassword(event.target.value)
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (username === 'Javier' && password === '123') {
            props.function(true);
        } else {
            alert('Datos incorrectos, intentelo de nuevo');
            changeUsername('');
            changePassword('');
        }
    }

    return (
        <form
            action=''
            onSubmit={onSubmit}
            className='formulario'
        >
            <h1>No has iniciado sesión</h1>
            <div>
                <label htmlFor='usuario' className='label'>Usuario</label>
                <input
                    type='text'
                    name='usuario'
                    id='usuario'
                    value={username}
                    onChange={onChange}
                    className='input'
                />
            </div>

            <div>
                <label htmlFor='password' className='label'>Contraseña</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={onChange}
                    className='input'
                />
            </div>
            <button type='submit' className='boton'>Iniciar sesión</button>
        </form>
    );
}

export default FormularioInicioSesión;
