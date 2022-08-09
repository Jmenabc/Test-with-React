import React, { useState } from 'react';
import styles from './../elements/Formulario.module.css';

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
            className={styles.formulario}
        >
            <h1>No has iniciado sesión</h1>
            <p>Para ver la información necesita iniciar sesión</p>
            <div>
                <label htmlFor='usuario' className={styles.label}>Usuario</label>
                <input
                    type='text'
                    name='usuario'
                    id='usuario'
                    value={username}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>

            <div>
                <label htmlFor='password' className={styles.label}>Contraseña</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <button type='submit' className={styles.boton}>Iniciar sesión</button>
        </form>
    );
}

export default FormularioInicioSesión;
