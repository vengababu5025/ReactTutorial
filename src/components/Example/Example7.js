import React, { useEffect, useState } from 'react';

function Example7() {
    const [timer, setTimer] = useState(10);
    const [running, setRunning] = useState(false);
    const [message, setMessage] = useState('Time left is');

    useEffect(() => {
        if (running && timer > 0) {
         setTimeout(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            
           
        }
    },[timer,running]);
    

    const handleReset = () => {
        setTimer(10); 
        setRunning(false);
        setMessage('Time left is');
    };

    return (
        <div>
            <h2>{message}: {timer}</h2>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Example7;
