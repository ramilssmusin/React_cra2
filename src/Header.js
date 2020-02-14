import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {



  return (
        <header>
            <div className="container">
                <Logo/>

                <Menu items = {props.items}/>
            </div>
        </header>
  );
}

export default Header;
