import React from 'react';
import MenuItem from "./MenuItem";

function Menu(props) {
    const  text1 = 'Home22';
    const  link1 = 'home-page';

    const item1 = {
        text: 'Home44',
        link: 'homePaGe'
    }

    const items = [{
        text: 'Service',
        link: 'homePaGe'},
        {text: 'Us',
        link: 'homePaGe'}];

  return (
    <nav>
        <ul>
            {props.items.map(el => <MenuItem key={el.text} menuItem={el}/>)}

        </ul>
    </nav>
  );
}

export default Menu;
