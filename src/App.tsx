import React from 'react';
import {Topbar} from "./components/Topbar/Topbar";
import {Single} from './pages/Single/Single';
import {Home} from "./pages/Home/Home";
import {Write} from './pages/Write/Write';
import {Settings} from './pages/Settings/Settings';
import {Login} from './pages/Login/Login';
import {Register} from "./pages/Register/Register";
import {Route, Routes} from 'react-router-dom';
import { NotFound } from './pages/404/404';


function App() {
    const user = false;
    return (
        <>
            <Topbar/>
            <Routes>
                <Route path="/rejestracja" element={user ? <Home/> : <Register/>}/>
                <Route path="/zaloguj" element={user ? <Home/> : <Login/>}/>
                <Route path="/dodaj-artykul" element={user ? <Write/> : <Register/>}/>
                <Route path="/artykul/:id" element={<Single/>}/>
                <Route path="/ustawienia" element={user ? <Settings/> : <Register/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
