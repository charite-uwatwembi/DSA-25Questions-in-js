// Write a React component Counter that includes a button and a display of the current count. 
// The count should start at 0 and increment by 1 each time the button is clicked. 
// Use React’s useState hook for state management.

import React , { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;