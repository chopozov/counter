import React, { useState } from 'react';
import './App.css';
function Example() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p className="bold">{count}</p>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
}

export default Example;