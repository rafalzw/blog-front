import React from 'react';
import {Topbar} from "./components/Topbar/Topbar";
import { Single } from './pages/Single/Single';
import {Home} from "./pages/Home/Home";
import { Write } from './pages/Write/Write';

function App() {
    return (
        <>
            <Topbar/>
            <Write/>
        </>
    );
}

export default App;
