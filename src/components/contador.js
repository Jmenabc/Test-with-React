import React, {Component} from 'react';

// Componente basado en clase (ejemplo)
class Contador extends Component {

    constructor(props) {
        super(props);
        this.state = { contador: 0 }
    }
    //LIFE CYCLE METHODS
    componentDidMount() {
        // ... Llamamos a la API ...
    }

    componentDidUpdate() {
        //... Se actualiza el componente ...
    }

    componentWillUnmount() {
        //... Se ejecuta lo que queramos antes de eliminar el DOM ...
    }

    incrementar() {
        this.setState((prevState) => {
            return {
                contador: prevState.contador + 1
            }
        });
    }

    disminuir() {
        this.setState((prevState) => {
            return {
                contador: prevState.contador - 1
            }
        });
    }

    render () {
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <p>Pulsa los botones para añadir o restar al contador</p>
                <button onClick={() => this.incrementar()}>Incrementar</button>
                <button onClick={() => this.disminuir()}>Disminuir</button>
            </div>
        );
    }
}

export default Contador;