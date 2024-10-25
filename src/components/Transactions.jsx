import React from 'react';

const TransactionsPage = () => {
  const transactions = [
    { id: 1, user: 'Alice Johnson', amount: '$150.00', date: '2024-10-01', status: 'Completed' },
    { id: 2, user: 'Bob Smith', amount: '$75.00', date: '2024-10-02', status: 'Pending' },
    { id: 3, user: 'Charlie Brown', amount: '$200.00', date: '2024-10-03', status: 'Completed' },
    { id: 4, user: 'David Wilson', amount: '$50.00', date: '2024-10-04', status: 'Failed' },
    { id: 5, user: 'Eva Green', amount: '$300.00', date: '2024-10-05', status: 'Completed' },
    { id: 6, user: 'Frank Wright', amount: '$120.00', date: '2024-10-06', status: 'Pending' },
    { id: 7, user: 'Grace Lee', amount: '$250.00', date: '2024-10-07', status: 'Completed' },
    { id: 8, user: 'Henry Martinez', amount: '$90.00', date: '2024-10-08', status: 'Failed' },
    { id: 9, user: 'Irene Adams', amount: '$400.00', date: '2024-10-09', status: 'Completed' },
    { id: 10, user: 'Jake Brown', amount: '$60.00', date: '2024-10-10', status: 'Pending' },
  ];

  return (
    <div className="w-4/5 mx-auto bg-white py-5">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Transactions</h2>
      <div className="overflow-x-auto"> 
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-gray-600">User</th>
              <th className="py-3 px-4 text-left text-gray-600">Amount</th>
              <th className="py-3 px-4 text-left text-gray-600">Date</th>
              <th className="py-3 px-4 text-left text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-800">{transaction.user}</td>
                <td className="py-3 px-4 text-gray-800">{transaction.amount}</td>
                <td className="py-3 px-4 text-gray-800">{transaction.date}</td>
                <td className={`py-3 px-4 font-semibold ${transaction.status === 'Completed' ? 'text-green-600' : transaction.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;
