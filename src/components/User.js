import React from 'react';

const User = ({ name, color }) => {
    return (
        <div>
            <h1
                color={color}
            >
                Bienvenido {name}
            </h1>
        </div>
    );
}

export default User;