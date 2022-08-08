import React from 'react';

const User = ({ name, color }) => {
    return (
        <div>
            <h1
                style={{ color: color }}
            >
                Bienvenido {name}
            </h1>
        </div>
    );
}

export default User;