import React from 'react';
import { Leaf, Droplets, Wind, Sun } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sustainabilityData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  carbonOffset: Math.floor(Math.random() * 50 + 100),
  renewableEnergy: Math.floor(Math.random() * 30 + 60),
  energyEfficiency: Math.floor(Math.random() * 20 + 70),
}));

export const SustainabilityMetrics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Sustainability Impact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Carbon Footprint"
          value="2.4 tons"
          change="-12% vs. last month"
          icon={<Leaf className="h-6 w-6 text-green-600" />}
          description="CO2 emissions saved"
        />
        <MetricCard
          title="Energy Efficiency"
          value="92%"
          change="+5% improvement"
          icon={<Sun className="h-6 w-6 text-yellow-600" />}
          description="Overall system efficiency"
        />
        <MetricCard
          title="Renewable Usage"
          value="75%"
          change="+15% vs. last month"
          icon={<Wind className="h-6 w-6 text-teal-600" />}
          description="Power from renewable sources"
        />
        <MetricCard
          title="Resource Optimization"
          value="A+"
          change="Top 5% in your area"
          icon={<Droplets className="h-6 w-6 text-blue-600" />}
          description="Resource utilization rating"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">Energy Efficiency Trends</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sustainabilityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="energyEfficiency"
                  stroke="#16a34a"
                  name="Efficiency Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">Renewable Energy Mix</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sustainabilityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="renewableEnergy"
                  stroke="#0891b2"
                  name="Renewable %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon, description }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
    </div>
    <div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <p className="text-sm font-medium text-green-600 mt-2">{change}</p>
    </div>
  </div>
);