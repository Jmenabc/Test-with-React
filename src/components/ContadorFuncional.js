import React, { useState, useEffect } from 'react';
import styles from './../elements/ContadorFuncional.module.css';
import Boton from './../elements/Boton';

const ContadorFuncional = () => {
    const [count, changeCount] = useState(0);

    const incrementar = () => {
        changeCount(count + 1);
    }

    const disminuir = () => {
        changeCount(count - 1);
    }

    // useEffect(() => {
    //     console.log('se renderizo el componente');
    // })

    // useEffect(() => {
    //     console.log('el componente se renderizo por primera vez')
    // }, []);

    // useEffect(() => {
    //     console.log('El estado del contador cambio')
    // }, [count]);

    // useEffect(() => {
    //     //codigo del efecto
    //     return (() => {
    //         console.log('Adios componente');
    //         //Cerramos conexion a la API

    //     }, [])
    // });

    return (
        <div>
            <h1>Contador: {count}</h1>
            <Boton className={styles.boton} marginRight negro onClick={() => incrementar()}>Incrementar</Boton>
            <Boton className={styles.boton} negro onClick={() => disminuir()}>Disminuir</Boton>
        </div>
    );
}

export default ContadorFuncional;