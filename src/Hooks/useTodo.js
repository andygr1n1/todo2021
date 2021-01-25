import {useEffect, useState} from 'react';

export const useTodo = () => {
    const [todo, setTodo] = useState([]);
    const [todoTags, setTodoTags] = useState([])


    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todoStorage') || '[]');
        setTodo(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todoStorage', JSON.stringify(todo))
    }, [todo])

    return {todo, setTodo, todoTags,setTodoTags}
}
