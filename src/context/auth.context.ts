import {createContext} from "react";

interface User {
    id: string;
    username: string;
    email: string;
    profilePicture: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User;
    addUser: (user: User) => void;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<any>(null);