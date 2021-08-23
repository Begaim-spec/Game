import React, {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const dec = () => {
        setCounter (counter -1 )
    }
    const inc = () => {
        setCounter (counter+1)
    }
    return (
        <div>
            <button onclick={dec}>-</button>
            <span>{counter}</span>
            <button onClick={inc}>+</button>
        </div>
    );
};
export default Counter;