import React, { useState } from 'react';

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
        <form action='' onSubmit={onSubmit}>
            <p>Usuario: {username}</p>
            <p>Contraseña: {password}</p>
            <div>
                <label htmlFor='usuario'>Usuario</label>
                <input
                    type='text'
                    name='usuario'
                    id='usuario'
                    value={username}
                    onChange={onChange}

                />
            </div>

            <div>
                <label htmlFor='password'>Contraseña</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={onChange}
                />
            </div>
            <button type='submit'>Iniciar sesión</button>
        </form>
    );
}

export default FormularioInicioSesión;
