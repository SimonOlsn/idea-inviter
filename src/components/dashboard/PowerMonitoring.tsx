import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const powerData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  current: Math.random() * 10 + 5,
  voltage: Math.random() * 5 + 115,
  power: Math.random() * 500 + 800
}));

export const PowerMonitoring: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-[300px]">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Power Consumption</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={powerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="power" 
                stroke="#2563eb" 
                name="Power (W)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="h-[300px]">
          <h3 className="text-sm font-medium text-gray-600 mb-4">Voltage & Current</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={powerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="voltage" 
                stroke="#dc2626" 
                name="Voltage (V)"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="current" 
                stroke="#16a34a" 
                name="Current (A)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};