import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Counter from "./Counter";
import AddCounter from "./AddCounter";

const items = [
    {text: 'Home',
        link: 'home-page'},
    {text: 'Products',
        link: 'product-page'},
    {text: 'Service',
        link: 'service-page'},
    {text: 'About us',
        link: 'aboutus-page'}
];

const itemsF = [
    {text: 'Hiring',
        link: 'hire-page'},
    {text: 'Contacts',
        link: 'contacts-page'},
    {text: 'Feedback',
        link: 'feedback-page'},
    {text: '© 2005-2020',
        link: ''}
];

function App() {
    const Initialvalues = [
        {id: 11, name: 'Counter 1', count: 8},
        {id: 22, name: "Counter 2", count: 8}
    ];

    const [values, setValues] = useState(Initialvalues);

    function incrementCounter(id) {
        console.log('INC');
        const index = values.findIndex(el => el.id === id);
        const newCounters = [...values];
        newCounters[index].count = newCounters[index].count + 1;
        setValues(newCounters);
    }

    function decrementCounter(id) {
        console.log('DEC');
        const newCounters = values.map(el => {
            if (el.id === id) return {...el, count: el.count - 1};
            return el;
        });
        setValues(newCounters);
    }

    function removeCounter(id) {
        const newVal = values.filter(e => e.id !== id);
        setValues(newVal);
    }

    const addCounter = (name, count) => {
        const newVal = [...values, {
            id: Date.now(),
            count: count,
            name: name
        }];
        setValues(newVal);
    }

    function resetTotalCount() {
        const newVal = values.map(e => ({...e, count: 0}));
        setValues(newVal);
    }

    function resetCount(id) {
        const newVal = [...values];
        for (let i=0; i<newVal.length; i++){
            if (values[i].id===id) {values[i].count=0;}
        }
        setValues(newVal);
    }

  return (

    <div className="App">
      <Header items = {items}/>

      Total count {values.reduce((acc, cur) => acc+cur.count, 0)}
      <button onClick={resetTotalCount}>Reset total count</button>

      <hr/>
      Counters
      {values.map(el => <Counter key = {el.id}
                                 id = {el.id}
                                 name = {el.name}
                                 count = {el.count}
                                 increment = {incrementCounter}
                                 decrement = {decrementCounter}
                                 remover = {removeCounter}
                                 reset = {resetCount}

      />)}

      <hr/>
      Add new counter
      <AddCounter onSubmit = {addCounter} />

      <Footer items = {items} items2 = {itemsF}/>
    </div>
  );
}

export default App;
