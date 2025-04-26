import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const pieData = [
    { name: 'Computer Science', value: 400 },
    { name: 'Business', value: 300 },
    { name: 'Engineering', value: 300 },
    { name: 'Arts', value: 200 },
  ];
  
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
  
  export default function EnrollmentPieChart() {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-bold text-blue-700 mb-4">Department-wise Enrollment</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
  