import React from 'react';
import {Topbar} from "./components/Topbar/Topbar";
import { Single } from './pages/Single/Single';
import {Home} from "./pages/Home/Home";

function App() {
    return (
        <>
            <Topbar/>
            <Single/>
        </>
    );
}

export default App;
