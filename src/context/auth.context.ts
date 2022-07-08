import {createContext} from "react";

interface User {
    id: string;
    username: string;
    email: string;
    profilePicture: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    addUser: (user: User | null) => void;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);