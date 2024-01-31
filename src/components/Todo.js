import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div className="border p-4 rounded-md mb-4">
      <h3 className="text-lg font-bold mb-2">Title: {todo.title}</h3>
      <p className="text-gray-700">Description: {todo.body}</p>
    </div>
  );
};

export default Todo;
