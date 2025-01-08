import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const powerData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  usage: Math.floor(Math.random() * 500 + 1000),
  temperature: Math.floor(Math.random() * 10 + 20),
}));

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Power Usage (Last 24 Hours)</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={powerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="usage" 
                  stroke="#2563eb" 
                  name="Power Usage (W)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Temperature Monitoring</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={powerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#dc2626" 
                  name="Temperature (°C)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Usage Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Power Usage"
            value="24.5 kWh"
            change="+2.3% vs last week"
          />
          <StatCard
            title="Peak Usage Time"
            value="18:00 - 20:00"
            change="Consistent with last week"
          />
          <StatCard
            title="Estimated Cost"
            value="$3.27"
            change="-5% vs last week"
          />
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change }) => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
    <p className="mt-2 text-sm text-gray-600">{change}</p>
  </div>
);