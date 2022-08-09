import React from 'react';
import styled from 'styled-components';

const User = ({ name, color, years, country }) => {
    return (
        <div>
            <h1 style={{ color: color }}>
                Bienvenido {name}
            </h1>
            <Parrafo>Tienes {years} años</Parrafo>
            <Parrafo>Vives en {country}</Parrafo>
        </div>
    );
}

//Styles 
const Parrafo = styled.p`
    margin: 0 10px;
`;

export default User;