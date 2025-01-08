import React, { useState } from 'react';
import { Power, Settings, AlertTriangle, Wifi } from 'lucide-react';
import { products } from '../../data/products';

interface DeviceStatus {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'warning';
  lastSeen: string;
  powerUsage: string;
  signalStrength: number;
}

const deviceStatuses: DeviceStatus[] = products.map(product => ({
  id: product.id,
  name: product.name,
  location: ['Living Room', 'Kitchen', 'Bedroom', 'Office'][Math.floor(Math.random() * 4)],
  status: ['online', 'online', 'online', 'offline', 'warning'][Math.floor(Math.random() * 5)] as DeviceStatus['status'],
  lastSeen: '2 minutes ago',
  powerUsage: `${Math.floor(Math.random() * 100 + 50)}W`,
  signalStrength: Math.floor(Math.random() * 40 + 60),
}));

export const DeviceManagement: React.FC = () => {
  const [devices] = useState<DeviceStatus[]>(deviceStatuses);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Device Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Device
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Device
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Power Usage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Signal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {devices.map((device) => (
              <tr key={device.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Power className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{device.name}</div>
                      <div className="text-sm text-gray-500">Last seen {device.lastSeen}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={device.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {device.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {device.powerUsage}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <SignalStrength strength={device.signalStrength} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Settings className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <AlertTriangle className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: DeviceStatus['status'] }> = ({ status }) => {
  const colors = {
    online: 'bg-green-100 text-green-800',
    offline: 'bg-gray-100 text-gray-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const SignalStrength: React.FC<{ strength: number }> = ({ strength }) => {
  const bars = [
    { height: 'h-2', opacity: strength >= 20 ? 'opacity-100' : 'opacity-30' },
    { height: 'h-3', opacity: strength >= 40 ? 'opacity-100' : 'opacity-30' },
    { height: 'h-4', opacity: strength >= 60 ? 'opacity-100' : 'opacity-30' },
    { height: 'h-5', opacity: strength >= 80 ? 'opacity-100' : 'opacity-30' },
  ];

  return (
    <div className="flex items-end space-x-1">
      {bars.map((bar, index) => (
        <div
          key={index}
          className={`w-1 ${bar.height} bg-blue-600 rounded-sm ${bar.opacity}`}
        />
      ))}
      <Wifi className={`h-5 w-5 ml-2 ${strength >= 90 ? 'text-blue-600' : 'text-gray-400'}`} />
    </div>
  );
};