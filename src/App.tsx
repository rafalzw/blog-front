import React from 'react';
import {Topbar} from "./components/Topbar/Topbar";
import { Single } from './pages/Single/Single';
import {Home} from "./pages/Home/Home";
import { Write } from './pages/Write/Write';
import { Settings } from './pages/Settings/Settings';
import { Login } from './pages/Login/Login';
import {Register} from "./pages/Register/Register";

function App() {
    return (
        <>
            <Topbar/>
            <Register/>
        </>
    );
}

export default App;
