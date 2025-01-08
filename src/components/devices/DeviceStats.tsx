import React from 'react';
import { Power, Shield, Wifi, AlertTriangle } from 'lucide-react';

export const DeviceStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={<Power className="h-6 w-6 text-blue-600" />}
        title="Active Devices"
        value="12"
        change="+2 from yesterday"
      />
      <StatCard
        icon={<Shield className="h-6 w-6 text-green-600" />}
        title="Protected"
        value="100%"
        change="All devices secure"
      />
      <StatCard
        icon={<Wifi className="h-6 w-6 text-purple-600" />}
        title="Network Status"
        value="Strong"
        change="95% signal strength"
      />
      <StatCard
        icon={<AlertTriangle className="h-6 w-6 text-yellow-600" />}
        title="Alerts"
        value="0"
        change="No active warnings"
      />
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{change}</p>
      </div>
    </div>
  </div>
);