import React, { useState } from 'react';

const FormularioInicioSesión = () => {
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');
    
    const onChangeUsername = (event) => {
        changeUsername(event.target.value)
    }

    const onChangePassword = (event) => {
        changePassword(event.target.value)
    }

    return (
        <form action=''>
            <p>Usuario: {username}</p>
            <p>Contraseña: {password}</p>
            <div>
                <label htmlFor='usuario'>Usuario</label>
                <input
                    type='text'
                    name='usuario'
                    id='usuario'
                    value={username}
                    onChange={onChangeUsername}
                />
            </div>

            <div>
                <label htmlFor='password'>Contraseña</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <button type='submit'>Iniciar sesión</button>
        </form>
    );
}

export default FormularioInicioSesión;
