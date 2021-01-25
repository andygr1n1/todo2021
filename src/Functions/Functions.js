//ADD OBJ
export const addTodo = (todoData, tag, todo, setTodo) => {
    if (todoData.current.value.trim() === "" || tag.current.value.trim() === "" ) {
        alert("write something!!!")
        return;
    }
    const prev = todo;
    setTodo([ {
        name: todoData.current.value.trim(),
        tag:  tag.current.value.trim(),
        completed: false,
    }, ...prev]);
    todoData.current.value = "";
    tag.current.value = "";
}

//CREATE OBJ ON ENTER
export const keyPressHandler = (event, todoData, tag, todo, setTodo) => {
    if(event.key === 'Enter') {
        addTodo(todoData, tag, todo, setTodo)
    }
}

//--------------------------------------------------------------------------


//DELETE OBJ
export const removeTodo = (todo, setTodo, idx) => {
    setTodo(todo.filter((item, index) => {
        return index !== idx;
    }))
}

//--------------------------------------------------------------------------

//MOVE OBJ
export const taskCompleted = (todo, setTodo, idx) => {
    const newList = todo.map((item, index) => {
        if (idx === index) {
            item.completed = !item.completed
            return item;
        }
        return item;
    });
    setTodo(newList);
}

//--------------------------------------------------------------------------


//OTHER MANIPULATIONS
export const getSearchOptions = (element) => {
    document.querySelector(element).classList.add("show-options")
}

export const hideSearchOptions = (element) => {
    document.querySelector(element).classList.remove("show-options")
}

//--------------------------------------------------------------------------


export const searchFilter = (tag, searchByTagValue) => {
        let x = false;
        let _length = searchByTagValue.trim().length;

        for(let i = 0; i < _length; i++) {

            if ( _length === i+1) {
                if(searchByTagValue.substr(0,  _length) === tag.substr(0,  _length)) {
                    x = true
                }
            }
        }
        return x;
}



//LIFE ANIMATION

export const lifeAnimation = (event) => {
    const target = event.target
    console.log(target.closest(".key-maker"))
    target.closest(".key-maker").classList.add("beautify");
}
