import React from 'react';
import './Burger.css';

const Burger = (props) => (

    <div className="DrawerToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Burger;