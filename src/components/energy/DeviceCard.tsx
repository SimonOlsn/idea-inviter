import React from 'react';
import { ChevronRight } from 'lucide-react';

interface DeviceCardProps {
  icon: React.ReactNode;
  title: string;
  status: string;
  level: number;
  details: {
    [key: string]: string;
  };
}

export const DeviceCard: React.FC<DeviceCardProps> = ({
  icon,
  title,
  status,
  level,
  details
}) => {
  const getStatusColor = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'Charging': 'text-green-600',
      'Active': 'text-blue-600',
      'Connected': 'text-purple-600',
      'Heating': 'text-orange-600',
      'Cooling': 'text-cyan-600',
      'Standby': 'text-gray-600'
    };
    return statusMap[status] || 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 p-5">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className={`text-sm font-medium ${getStatusColor(status)}`}>{status}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Load</span>
          <span className="font-medium">{level}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${level}%`,
              background: `linear-gradient(90deg, rgb(37, 99, 235) ${level}%, rgb(147, 197, 253) 100%)`
            }}
          />
        </div>
      </div>

      <div className="space-y-2">
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="flex justify-between text-sm items-center">
            <span className="text-gray-500">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            <span className="font-medium bg-gray-50 px-2 py-1 rounded-md">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};