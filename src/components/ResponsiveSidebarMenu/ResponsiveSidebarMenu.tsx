import React, { useState } from 'react';
import s from './ResponsiveSidebarMenu.module.scss';

export const ResponsiveSidebarMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <>
            {menuOpen && <div className={s.background} onClick={toggleMenu}/>}
            <div>
                {!menuOpen && (
                    <button className={s.iconMenu} onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                        ☰
                    </button>
                )}
                <div className={`${s.sidebar} ${menuOpen ? s.open : ''}`}>
                    <ul onClick={toggleMenu}>
                        <li>Пункт 1</li>
                        <li>Пункт 2</li>
                        <li>Пункт 3</li>
                        <li>Пункт 4</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

