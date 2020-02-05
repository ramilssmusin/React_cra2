import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
        <header>
            <div className="container">
                <Logo/>

                <Menu/>
            </div>
        </header>
  );
}

export default Header;
