import React from 'react';
import Logo from "./Logo";
import MenuItemF from "./MenuItemF";

function Footer(props) {
  return (

    <footer>
        <div className="container">
            <Logo/>
            <ul>
                {props.items.map(el => <MenuItemF key={el.text} menuItem={el}/>)}
            </ul>
            <ul>
                {props.items2.map(el => <MenuItemF key={el.text} menuItem={el}/>)}
            </ul>
        </div>
    </footer>
  );
}

export default Footer;
