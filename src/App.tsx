import React from 'react';
import {Topbar} from "./components/Topbar/Topbar";
import { Single } from './pages/Single/Single';
import {Home} from "./pages/Home/Home";
import { Write } from './pages/Write/Write';
import { Settings } from './pages/Settings/Settings';
import { Login } from './pages/Login/Login';

function App() {
    return (
        <>
            <Topbar/>
            <Login/>
        </>
    );
}

export default App;
