import { useCallback, useMemo, useState } from "react";
import Context from "./Context";
import { useNavigate } from "react-router-dom";
import { Todo, todosApi, updateTodo, addTodo, deleteTodo } from "../services/toDoApi";

type ProviderProps = {
    children: React.ReactNode
}

export type ProviderValues = {
    onLogin: (email: string) => void,
    getTodos: () => Promise<void>,
    editCheckToDo: (todoCheck: Todo) => Promise<void>
    addTodos: (task: string) => Promise<void>
    deleteTodos: (item: Todo) => Promise<void>
    todos: Todo[],
    user: string
    loading: boolean

}

function Provider({ children }: ProviderProps) {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [todos, setTodos] = useState([] as Todo[]);
    const [loading, setLoading] = useState(false)

    const onLogin = useCallback((email: string) => {
        setUser(email);
        navigate("/todolist");
    }, [setUser, navigate]) 


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

    const editCheckToDo = async (todoCheck: Todo) => {
        const editCheck = todos.map((todo) => {
            if(todo.id === todoCheck.id) {
                todo.checked = todoCheck.checked
            }
            return todo
        })
        setLoading(true)
        setTodos(editCheck)
        setLoading(false)
        await updateTodo(todoCheck)
    }

    const addTodos = async (task: string) => {
        try {
            const addTask = await addTodo(task);
            setTodos([...todos, addTask]);
            navigate('/todolist')
        } catch (error) {
            throw new Error('erro')
        }
    }
    const deleteTodos = async (item: Todo) => {
        const deleteItem = todos.filter((todo) => todo.id !== item.id)
        setLoading(true)
        setTodos(deleteItem)
        setLoading(false)
        await handleDeleteTodo(item.id)
    }

    const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id)
}


    const values: ProviderValues = useMemo(() => ({
        onLogin,
        todos,
        user,
        getTodos,
        loading,
        editCheckToDo,
        addTodos,
        deleteTodos
    }),[todos, user]) 

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>);
}

export default Provider;