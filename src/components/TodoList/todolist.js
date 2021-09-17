import React from "react";
import Todo from "../Todo/todo";

const TodoList= ({todos ,setTodos}) => {
   
    return(
        <div className="todo-container">
        <ul className="todo-list">
          {todos.map(todo => (
            <Todo text={todo.text}
              setTodos={setTodos} 
              todos={todos} 
              key={todos.id}
              todo={todo}
              />
          ) )}
        </ul>
        
      </div>
    );
};
export default TodoList;