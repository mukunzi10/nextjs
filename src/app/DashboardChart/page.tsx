import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
  } from 'recharts';
  
  const data = [
    { name: 'Jan', students: 400 },
    { name: 'Feb', students: 300 },
    { name: 'Mar', students: 500 },
    { name: 'Apr', students: 200 },
    { name: 'May', students: 600 },
  ];
  
  export default function DashboardChart() {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-bold text-blue-700 mb-4">Monthly Student Registrations</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="students" fill="#3B82F6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  