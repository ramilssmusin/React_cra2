import React, {useState} from 'react';

function Counter(props) {

    return (
        <div className="state">
            <code className="field">{props.name+" "}</code>
            <button onClick={() => props.decrement(props.id)}>-</button>
            {props.count}
            <button onClick={() => props.increment(props.id)}>+</button>
            <button onClick={() => props.reset(props.id)}>Reset {props.name}</button>
            <button onClick={() => props.remover(props.id)}>Delete</button>
        </div>
  );
}

export default Counter;
