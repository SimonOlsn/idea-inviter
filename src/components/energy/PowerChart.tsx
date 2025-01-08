import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const powerData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  solar: Math.random() * 3,
  grid: Math.random() * 2 + 1,
  battery: Math.random() * 1,
  consumption: Math.random() * 4 + 2
}));

export const PowerChart: React.FC = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={powerData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="solar" 
            stroke="#16a34a" 
            name="Solar Generation"
          />
          <Line 
            type="monotone" 
            dataKey="grid" 
            stroke="#dc2626" 
            name="Grid Draw"
          />
          <Line 
            type="monotone" 
            dataKey="battery" 
            stroke="#2563eb" 
            name="Battery"
          />
          <Line 
            type="monotone" 
            dataKey="consumption" 
            stroke="#9333ea" 
            name="Total Consumption"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};