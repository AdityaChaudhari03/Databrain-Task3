import React from 'react';

const Todo = ({ user }) => {
  return (
    <div className="border p-4 rounded-md mb-4">
      <h3 className="text-lg font-bold mb-2">Title: {user.title}</h3>
      <p className="text-gray-700">Description: {user.body}</p>
      {/* <p className="text-gray-700">Phone: {user.phone}</p> */}
    </div>
  );
};

export default Todo;
