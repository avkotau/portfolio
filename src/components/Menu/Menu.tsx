import React from 'react';
import s from "./Menu.module.scss";

const Menu = () => {
    return (
        <ul className={s.menu}>
            <li>Home</li>
            <li>About</li>
            <li>resume</li>
            <li>skills</li>
            <li>portfolio</li>
            <li>contact</li>
        </ul>
    );
};

export default Menu;
