import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
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
  return (
    <div className="App">
      <Header items = {items}/>
      <Content/>
      <Footer items = {items} items2 = {itemsF}/>
    </div>
  );
}

export default App;
