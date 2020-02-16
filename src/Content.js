import React from 'react';

function Content(props) {

    let name = 'Initial';

    const clickButtonHandler = (value) => {
        props.bc(name+value);
        console.log('Clicked ' + name);
    };

    const inputHandler = (e) => {
        name = e.target.value;
        console.log(e.target.value);
    };

    const changeHandler = () => {
        console.log('Change!');
    };

    return (
    <main>
        <div className="container-main">
            <h1>My app</h1>
            {name}
            <input type="text" onChange={inputHandler}/>

            <button onClick={() => clickButtonHandler(1)}>Add one</button>
            <button onClick={() => clickButtonHandler(2)}>Add two</button>


        </div>
    </main>
  );
}

export default Content;
