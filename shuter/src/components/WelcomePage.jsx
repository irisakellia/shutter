// src/components/WelcomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Observations',
      data: [10, 25, 35, 50, 65, 70, 60, 75, 80, 95, 85, 100],
      borderColor: '#FB923C',
      backgroundColor: '#FB923C',
      fill: false,
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
        <button onClick={() => navigate('/')} className="text-2xl font-bold">
          E_Dive
        </button>
        <button className="text-red-500" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-gray-600">TOTAL ACTIVE OBSERVATIONS</div>
          <div className="text-3xl font-bold">95</div>
          <div className="text-sm text-gray-500">25% Improvement</div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-gray-600">NEW LEADS</div>
          <div className="text-3xl font-bold">21</div>
          <div className="text-sm text-gray-500">80% Daily Goal</div>
          <div className="text-sm text-gray-500">72 This week</div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-gray-600">NEW MESSAGES</div>
          <div className="text-3xl font-bold">85</div>
          <div className="text-sm text-gray-500">Response Rate</div>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-gray-600">Chart</div>
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white p-4 rounded-r-lg">
        <ul>
          <li className="py-2">Item 1</li>
          <li className="py-2">Item 2</li>
          <li className="py-2">Item 3</li>
          <li className="py-2">Item 4</li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomePage;
