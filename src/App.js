import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Counter from "./Counter";

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

const c1 =2, c2 = 5;
const tc = c1 + c2;
let values = [2,5];

function App() {
    const [totalCount, setTotalCount] = useState(tc);
    // function buttonClicked(name) {
    //     console.log('CLICKED!!!&'+name);
    // }

    function countChanged(value) {
        console.log('changeD! '+value);
        let s = 0;
        for (let i=0; i<value.length; i++){
            s += value[i];
        }
        setTotalCount(s);
    }

  return (
    <div className="App">
      <Header items = {items}/>
      {/*<Content bc={buttonClicked}/>*/}
      Total {totalCount}
      <Counter index = {0} countChanged = {countChanged} vals = {values}/>
      <hr/>
      <Counter index = {1} countChanged = {countChanged} vals = {values}/>
      <Footer items = {items} items2 = {itemsF}/>
    </div>
  );
}

export default App;
