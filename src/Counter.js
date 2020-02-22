import React, {useState} from 'react';

function Counter(props) {

    return (
        <div className="state">
            <marker className="field">{props.name+" "} </marker>
            <button onClick={() => props.decrement(props.id)}>-</button>
            <code>{props.count}</code>
            <button onClick={() => props.increment(props.id)} className='btn-primary'>+</button>
            <button onClick={() => props.reset(props.id)}>Reset {props.name}</button>
            <button onClick={() => props.remover(props.id)}>Delete</button>
        </div>
  );
}

export default Counter;
