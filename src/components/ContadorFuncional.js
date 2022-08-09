import React,{useState} from 'react';

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
            <button onClick={() => incrementar()}>Incrementar</button>
            <button onClick={() => disminuir()}>Disminuir</button>
        </div>
    );
}
 
export default ContadorFuncional;