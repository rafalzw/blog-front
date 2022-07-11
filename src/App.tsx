import React, {useEffect, useState} from 'react';
import {Topbar} from "./components/Topbar/Topbar";
import {Single} from './pages/Single/Single';
import {Home} from "./pages/Home/Home";
import {Write} from './pages/Write/Write';
import {Settings} from './pages/Settings/Settings';
import {Login} from './pages/Login/Login';
import {Register} from "./pages/Register/Register";
import {Route, Routes} from 'react-router-dom';
import {NotFound} from './pages/404/404';
import {AuthContext} from './context/auth.context';
import {UserInterface} from 'types';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<UserInterface>({email: "", id: "", profilePicture: "", username: ""});

    const addUser = (user: UserInterface) => {
        setUser(user);
    }

    useEffect(() => {
        const storage = localStorage.getItem("user");
        if (storage) {

            setUser(JSON.parse(storage));
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <>
            <AuthContext.Provider value={{
                isAuthenticated,
                user,
                addUser,
                login: () => setIsAuthenticated(true),
                logout: () => setIsAuthenticated(false),
            }}>
                <Topbar/>
                <Routes>
                    <Route path="/register" element={isAuthenticated ? <Home/> : <Register/>}/>
                    <Route path="/login" element={isAuthenticated ? <Home/> : <Login/>}/>
                    <Route path="/add-post" element={isAuthenticated ? <Write/> : <Register/>}/>
                    <Route path="/posts/:id" element={<Single/>}/>
                    <Route path="/settings" element={isAuthenticated ? <Settings/> : <Register/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </AuthContext.Provider>
        </>
    );
}

export default App;
