import React,{useState} from 'react';
import './App.css';
//Importing components
import {Form,TodoList} from './components'

function App() {
let [inputText , setInputText] = useState("");
let [todos , setTodos] = useState([]);
  return (
 <div className="App">
      <header>
      <h1> Todo List   </h1>
    </header>
 <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos}/>
 <TodoList setTodos={setTodos} todos={todos}/>
 
 </div>
  );
}

export default App;
