import React, { useState, useEffect,useCallback } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  // State stuff
  const [inputText, setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Use effect

  // Functions
  const filterHandler = useCallback(() => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
    }
  },[status, todos])

  useEffect(() => {
    filterHandler();
  }, [todos, status,filterHandler]);
  return (
    <div className="App">
      <header>
        <h1>Jayant's ToDo List </h1>
      </header>
      <Form 
        inputText = {inputText}
        todos={todos} 
        setTodos = {setTodos} 
        setInputText = {setInputText}
        setStatus = {setStatus}
        
        />
      <ToDoList 
        filteredTodos={filteredTodos} 
        setTodos={setTodos} 
        todos = {todos} 
        />
    </div>
  );
}

export default App;
