import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/Todos';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Todo List</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
