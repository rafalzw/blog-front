import {createContext} from "react";
import { UserInterface } from "types";

// interface AuthContextType {
//     isAuthenticated: boolean;
//     user: UserInterface;
//     addUser: (user: UserInterface) => void;
//     login: () => void;
//     logout: () => void;
// }

export const AuthContext = createContext<any>(null);