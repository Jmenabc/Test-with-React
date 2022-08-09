import React,{useState} from 'react';
import styles from './../elements/ContadorFuncional.module.css';
import Boton from './../elements/Boton';

const ContadorFuncional = () => {
    const [count,changeCount] = useState(0);

    const incrementar = () => {
        changeCount(count + 1);
    }

    const disminuir = () => {
        changeCount(count - 1);
    }

    return ( 
        <div>
            <h1>Contador: {count}</h1>
            <button className={styles.boton} onClick={() => incrementar()}>Incrementar</button>
            <button className={styles.boton} onClick={() => disminuir()}>Disminuir</button>
        </div>
    );
}
 
export default ContadorFuncional;