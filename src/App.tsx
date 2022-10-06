import React from 'react';
import {Topbar} from "./components/Topbar/Topbar";
import {Single} from './pages/Single/Single';
import {Home} from "./pages/Home/Home";
import {Write} from './pages/Write/Write';
import {Settings} from './pages/Settings/Settings';
import {Login} from './pages/Login/Login';
import {Register} from "./pages/Register/Register";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFound} from './pages/404/404';
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";

function App() {
    const {user} = useSelector((store: RootState) => store.user);
    return (
        <BrowserRouter>
            <Topbar/>
            <Routes>
                <Route path="/register" element={user ? <Home/> : <Register/>}/>
                <Route path="/login" element={user ? <Home/> : <Login/>}/>
                <Route path="/add-post" element={user ? <Write/> : <Register/>}/>
                <Route path="/post/:id" element={<Single/>}/>
                <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
