import React, { useState } from 'react';
import ColorPicker from './Colo';

function Example3() {
    const [color, setColor] = useState("");

    const getColor = (color) => {
        setColor(color);
    };

    return (
        <div>
            <div style={{ backgroundColor: color }}>
                <h1 style={{ color: color ? 'white' : 'black' }}>This is a heading</h1>
            </div>
            <ColorPicker getColor1={getColor} />
        </div>
    );
}

export default Example3;
