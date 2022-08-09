import React from 'react';

const User = ({ name, color, years, country }) => {
    return (
        <div>
            <h1
                style={{ color: color }}
            >
                Bienvenido {name}
            </h1>
            <p>Tienes {years} años</p>
            <p>Vives en {country}</p>
        </div>
    );
}

export default User;