import React, { useState } from 'react';

function Colo({ getColor1 }) {
    const [activeColor, setActiveColor] = useState("");

    const handleColorChange = (e) => {
        const { value } = e.target;
        setActiveColor(value);
        getColor1(value);
        
    };

    return (
        <div>
            <label>Set Color:</label>
            <input type='text' value={activeColor} onChange={handleColorChange} />
        </div>
    );
}

export default Colo;
