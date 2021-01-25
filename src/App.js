import React from 'react';
import {Context} from "./Functions/Context";
import {Input} from "./Components/Input/Input";
import {TodoActiveList} from "./Components/TodoActiveList/TodoActiveList";
import {TodoNav} from "./Components/TodoNav/TodoNav";
import {TodoCompletedList} from "./Components/TodoCompletedList/TodoCompletedList";
import {useTabs} from "./Hooks/useTabs";
import {useTodo} from "./Hooks/useTodo";
import {removeTodo, taskCompleted} from "./Functions/Functions";
import {useTagSearch} from "./Hooks/useTagSearch";
import {TodoTagList} from "./Components/TodoTagList/TodoTagList";

function App() {
    const {todo, setTodo} = useTodo();
    const {tab, setTab, active} = useTabs();
    const  {searchByTagValue, setSearchByTagValue} = useTagSearch();

    return (
        <Context.Provider value={{todo, setTodo, tab, setTab, active, searchByTagValue, setSearchByTagValue, removeTodo, taskCompleted}}>

            <div className="container">
                <h1>TODO DIARY</h1>
                <TodoNav/>
                <div className="todo-body">
                    <Input/>
                    { searchByTagValue.trim() === "" ?
                        tab ? <TodoActiveList/> : <TodoCompletedList/>
                        : <TodoTagList />
                    }
                </div>
            </div>

        </Context.Provider>
    )
}

export default App;
