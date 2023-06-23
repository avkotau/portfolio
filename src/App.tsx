import React from 'react';

import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
        <div className={s.leftSidebarContainer}>
            <div className={s.meImg}>me</div>
        </div>
        <div className={s.mainContainer}>main
            <div className={s.main}>
                <div className={s.name}>
                    <h1>Say Hi from Alex, framer Developer</h1>
                </div>
            </div>
            <div className={s.aboutContainer}> about me</div>
            <div className={s.resumeContainer}>Education & Experience</div>
            <div className={s.skillsContainer}>My skills</div>
            <div className={s.portfolioContainer}>Featured Projects</div>
            <div className={s.contactContainer}>Contact</div>
        </div>
        <ul className={s.menuContainer}>menu</ul>

    </div>
  );
}

export default App;
