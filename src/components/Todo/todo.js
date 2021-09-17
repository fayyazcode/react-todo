import React from "react";
const Todo=({todo,text,todos,setTodos})=>{

    const deleteHandler=()=>{
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    return(
<div className="todo">
    <li className="todo-item" key={todo.id}>{text}</li>
    <button className="complete-btn">
        <i className="fas fa-edit"></i>
    </button>
    <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
    </button>
</div>
    );
};
export default Todo;