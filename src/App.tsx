import React from 'react';
import {Topbar} from "./components/Topbar/Topbar";
import { Single } from './pages/Single/Single';
import {Home} from "./pages/Home/Home";
import { Write } from './pages/Write/Write';
import { Settings } from './pages/Settings/Settings';

function App() {
    return (
        <>
            <Topbar/>
            <Settings/>
        </>
    );
}

export default App;
