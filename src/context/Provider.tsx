import { useState } from "react";
import Context from "./Context";
import { useNavigate } from "react-router-dom";

type ProviderProps = {
    children: React.ReactNode
}

export type ProviderValues = {
    onLogin: (email: string) => void,
    todos: string[],
    user: string
}

function Provider({ children }: ProviderProps) {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [todos, setTodos] = useState([]);

    const onLogin = (email: string) => {
        setUser(email);
        navigate("/todolist");
    };

    const values: ProviderValues = {
        onLogin,
        todos,
        user
    };

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>);
}

export default Provider;