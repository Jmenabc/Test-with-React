import React, { useReducer } from 'react';
import Boton from './../elements/Boton';


const initialCounter = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENTAR':
            return { count: state.count + 1 }
        case 'DISMINUIR':
            return { count: state.count - 1 }
    }
}

const EjemploUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialCounter);
    console.log('hola',state);
    return (
        <div>
            <h1>Contador: {state.count}</h1>
            <Boton onclick={() => dispatch({ type: 'INCREMENTAR' })} marginRight negro >Incrementar</Boton>
            <Boton onclick={() => dispatch({ type: 'DISMINUIR' })} negro>Disminuir</Boton>
        </div>
    );
}

export default EjemploUseReducer;