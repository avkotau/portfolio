import React from 'react';

import s from './App.module.scss';

function App() {
    return (
        <div className={s.app}>
            <div className={s.leftSidebarContainer}>
                <div className={s.leftSidebar}>
                    <div className={s.meImg}>me</div>
                </div>
            </div>

            <div className={s.mainContainer}>
                <div className={s.main}>
                    <div className={s.name}>
                        <h1>Say Hi from Alex, framer Developer</h1>
                    </div>
                </div>
                <div className={s.aboutContainer}>
                    <div className={s.about}>about me</div>
                </div>
                <div className={s.resumeContainer}>
                    <div className={s.resume}>Education & Experience</div>
                </div>
                <div className={s.skillsContainer}>
                    <div className={s.skills}>My skills</div>
                </div>
                <div className={s.portfolioContainer}>
                    <div className={s.portfolio}>Featured Projects</div>
                </div>
                <div className={s.contactContainer}>
                    <div className={s.contact}>Contact</div>
                </div>
            </div>

            <div className={s.menuContainer}>
                <ul className={s.menu}>menu</ul>
            </div>

        </div>
    );
}

export default App;
