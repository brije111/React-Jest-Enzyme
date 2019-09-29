import React, {useState} from 'react';
import CounterProps from './CounterProps';

const Counter = (props:CounterProps) => {
    const [count, setCount] = useState(0);
    return <div>
        <h4 className='title'>{props.title}</h4>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <h4 className='count'>{count}</h4>
    </div>
}

export default Counter;