import React from 'react';
import { useDevices } from '../../hooks/useDevices';
import { Power, Shield, Settings } from 'lucide-react';

export const DeviceList: React.FC = () => {
  const { devices } = useDevices();

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Power</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Safety</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {devices.map((device) => (
            <tr key={device.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Power className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{device.name}</div>
                    <div className="text-sm text-gray-500">ID: {device.id}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className={`h-2.5 w-2.5 rounded-full mr-2 ${
                    device.status === 'online' ? 'bg-green-500' : 
                    device.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-sm text-gray-900">{device.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.power}W</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Shield className={`h-5 w-5 ${device.safety === 'protected' ? 'text-green-500' : 'text-yellow-500'}`} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-blue-600 hover:text-blue-900">
                  <Settings className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
