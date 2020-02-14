import React from 'react';

function MenuItem(props) {
        console.log(props);
      return (
        <li className="menuItem">
            <a href={props.menuItem.link}>{props.menuItem.text}</a>
        </li>
  );
}

export default MenuItem;
