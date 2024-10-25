import React from 'react';

const Users = () => {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', color: 'bg-slate-50' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', color: 'bg-green-100' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', color: 'bg-yellow-100' },
    { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'User', color: 'bg-red-100' },
    { id: 5, name: 'Eva Green', email: 'eva@example.com', role: 'User', color: 'bg-purple-100' },
    { id: 6, name: 'Frank Wright', email: 'frank@example.com', role: 'User', color: 'bg-pink-100' },
    { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'User', color: 'bg-teal-100' },
    { id: 8, name: 'Henry Martinez', email: 'henry@example.com', role: 'User', color: 'bg-orange-100' },
    { id: 9, name: 'Irene Adams', email: 'irene@example.com', role: 'User', color: 'bg-lime-100' },
    { id: 10, name: 'Jake Brown', email: 'jake@example.com', role: 'User', color: 'bg-gray-100' },
  ];

  return (
    <div className="w-4/5 mx-auto bg-white py-5">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">User Details</h2>
      
      <div className="overflow-x-auto"> {/* Make the table scrollable on small screens */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-gray-600">Name</th>
              <th className="py-3 px-4 text-left text-gray-600">Email</th>
              <th className="py-3 px-4 text-left text-gray-600">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className={`hover:bg-opacity-50 ${user.color}`}>
                <td className="py-3 px-4 text-gray-800">{user.name}</td>
                <td className="py-3 px-4 text-gray-800">{user.email}</td>
                <td className="py-3 px-4 text-gray-800">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
