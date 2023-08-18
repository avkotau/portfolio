import React from 'react';
import LeftSidebar from '../src/components/LeftSidebar/LeftSidebar'

import s from './App.module.scss';
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

function App() {
    return (
        <div className={s.app}>
            <LeftSidebar/>
            <Main/>
            <Menu/>
        </div>
    );
}

export default App;
