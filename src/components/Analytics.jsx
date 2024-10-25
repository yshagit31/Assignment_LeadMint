import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FaUsers, FaUserPlus, FaUserCheck, FaUserFriends, FaUserTie, FaUserGraduate } from 'react-icons/fa';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics = () => {
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  const registrations = [150, 300, 450, 600, 700, 800, 750];
  const referrals = [100, 200, 300, 400, 500, 400, 600];

  const userData = {
    labels: days,
    datasets: [
      {
        label: 'Registrations',
        data: registrations,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
      },
      {
        label: 'Referrals',
        data: referrals,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
    <div className="w-4/5 mx-auto bg-white">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-slate-800">Analytics</h2>
        <input
          type="text"
          placeholder="Select Data Range"
          className="border bg-slate-50 border-gray-300 rounded-lg p-2 w-1/3"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-5">
        <div className="border border-gray-300 rounded-lg p-3 relative h-24">
          <h4 className="font-semibold text-left mb-1 text-blue-800 pl-8">Total Users</h4>
          <FaUsers className="absolute top-2 left-3 text-blue-600" size={24} />
          <p className="text-xl absolute bottom-1 right-3 text-blue-800 p-2">140</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-3 relative h-24">
          <h4 className="font-semibold text-left mb-1 text-red-800 pl-8">Referred Users</h4>
          <FaUserPlus className="absolute top-2 left-3 text-red-600" size={24} />
          <p className="text-xl absolute bottom-1 right-3 text-red-800 p-2">64</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-3 relative h-24">
          <h4 className="font-semibold text-left mb-1 text-yellow-800 pl-8">Organic Users</h4>
          <FaUserCheck className="absolute top-2 left-3 text-yellow-600" size={24} />
          <p className="text-xl absolute bottom-1 right-3 text-yellow-800 p-2">6</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-3 relative h-24">
          <h4 className="font-semibold text-left mb-1 text-green-800 pl-8">This Week Users</h4>
          <FaUserFriends className="absolute top-2 left-3 text-green-600" size={24} />
          <p className="text-xl absolute bottom-1 right-3 text-green-800 p-2">679</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-3 relative h-24">
          <h4 className="font-semibold text-left mb-1 text-purple-800 pl-8">Monthly Users</h4>
          <FaUserTie className="absolute top-2 left-3 text-purple-600" size={24} />
          <p className="text-xl absolute bottom-1 right-3 text-purple-800 p-2">22,727</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-3 relative h-24">
          <h4 className="font-semibold text-left mb-1 text-orange-800 pl-8">Last Month Users</h4>
          <FaUserGraduate className="absolute top-2 left-3 text-orange-600" size={24} />
          <p className="text-xl absolute bottom-1 right-3 text-orange-800 p-2">72,999</p>
        </div>
      </div>
      
      <div className="mx-auto h-96">
        <h4 className='text-slate-600'>User Statistics Line Chart</h4>
        <Line data={userData} options={options} height={300} />
      </div>
    </div>
  );
};

export default Analytics;
