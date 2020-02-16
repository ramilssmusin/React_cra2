import React, {useState} from 'react';

function Counter(props) {

    const [count, setCount] = useState(props.vals[props.index]);

    const countChangeUpHandler = () => {
        setCount(count+1);
        props.vals[props.index] += 1;
        props.countChanged(props.vals);
    };

    const countChangeDownHandler = () => {
        setCount(count-1);
        props.vals[props.index] -= 1;
        props.countChanged(props.vals);
    };

    return (
        <div className="state">
            <button onClick={countChangeDownHandler}>-</button>
            {count}
            <button onClick={countChangeUpHandler}>+</button>
        </div>
  );
}

export default Counter;
