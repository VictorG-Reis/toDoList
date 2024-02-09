import { useState } from "react";
import Context from "./Context";
import { useNavigate } from "react-router-dom";
import { Todo, todosApi } from "../services/toDoApi";

type ProviderProps = {
    children: React.ReactNode
}

export type ProviderValues = {
    onLogin: (email: string) => void,
    todos: Todo[],
    user: string
    getTodos: () => Promise<void>,
    loading: boolean
}

function Provider({ children }: ProviderProps) {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [todos, setTodos] = useState([] as Todo[]);
    const [loading, setLoading] = useState(false)

    const onLogin = (email: string) => {
        setUser(email);
        navigate("/todolist");
    };


    const getTodos = async () => {
        setLoading(true)
        try {
            const data = await todosApi()
            setTodos(data)
            
        } catch (error) {
            throw new Error('error')
        } finally {
            setLoading(false)
        }
    }


    const values: ProviderValues = {
        onLogin,
        todos,
        user,
        getTodos,
        loading
    };

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>);
}

export default Provider;