import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todos from './components/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response);
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []); 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Todo List</h1>
      <Todos todos={todos} />
    </div>
  );
};

export default App;
