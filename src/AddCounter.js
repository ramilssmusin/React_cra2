import React, {useState} from 'react';

function AddCounter(props) {

    const [name, setName] = useState('unknown');
    const [count, setCount] = useState(10);

    const onSubmit = () => {
        props.onSubmit(name, Number(count));
        setName('');
        setCount(0);
    };

    return (
        <div className="state">
            <input placeholder={'Name'} type={"text"} name='name' value={name}
            onChange={e => setName(e.target.value)}/>
            <input placeholder={'Initial value'} type={"number"} name='count' value={count}
            onChange={e => setCount(e.target.value)}/>
            <button onClick={() => onSubmit(name, count)}>Add counter</button>
        </div>
  );
}

export default AddCounter;
