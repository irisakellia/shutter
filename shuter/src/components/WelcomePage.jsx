
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', viewers: 10 },
  { month: 'Feb', viewers: 25 },
  { month: 'Mar', viewers: 35 },
  { month: 'Apr', viewers: 50 },
  { month: 'May', viewers: 65 },
  { month: 'Jun', viewers: 70 },
  { month: 'Jul', viewers: 60 },
  { month: 'Aug', viewers: 75 },
  { month: 'Sep', viewers: 80 },
  { month: 'Oct', viewers: 95 },
  { month: 'Nov', viewers: 85 },
  { month: 'Dec', viewers: 100 },
];

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
        <button onClick={() => navigate('/')} className="text-xl font-bold text-red-600 font-serif">
          GALLERY VIEWS
        </button>
        <button className="text-red-500 font-serif text-xl" onClick={handleLogout} >
          Log out
        </button>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-gray-600 font-serif">TOTAL Images</div>
          <div className="text-3xl font-bold">95<sup>+</sup></div>
          
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-gray-600">NEW ALBUMS</div>
          <div className="text-3xl font-bold">21</div>
          <div className="text-sm text-gray-500">80% Daily Goal</div>
          <div className="text-sm text-gray-500">72 This week</div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-gray-600">NEW IMAGES</div>
          <div className="text-3xl font-bold">85</div>
          </div>
      </div>
      <div className="p-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="text-gray-600">Chart</div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="viewers" stroke="#FB923C" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="absolute left-0 top-80 transform -translate-y-1/2 bg-red-600 text-white p-4 rounded-r-lg">
        <ul>
          <li className="py-2">Images</li>
          <li className="py-2">nums</li>
          <li className="py-2">profile</li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomePage;
