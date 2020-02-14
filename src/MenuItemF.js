import React from 'react';

function MenuItemF(props) {
        console.log(props);
      return (
        <li className="menuItemF">
            <a href={props.menuItem.link}>{props.menuItem.text}</a>
        </li>
  );
}

export default MenuItemF;
