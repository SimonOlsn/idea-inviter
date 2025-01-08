import React from 'react';
import { Device } from '../../types/devices';
import { Zap } from 'lucide-react';

interface DeviceMarkerProps {
  device: Device;
}

export const DeviceMarker: React.FC<DeviceMarkerProps> = ({ device }) => {
  const getMarkerColor = () => {
    if (device.name.includes('Standard')) {
      return 'bg-orange-500 ring-orange-200';
    }
    if (device.name.includes('Spot')) {
      return 'bg-blue-500 ring-blue-200';
    }
    if (device.name.includes('Toby')) {
      return 'bg-purple-500 ring-purple-200';
    }
    return 'bg-gray-500 ring-gray-200';
  };

  return (
    <div
      className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${device.position.x}%`, top: `${device.position.y}%` }}
    >
      <div className={`h-4 w-4 rounded-full ${getMarkerColor()} ring-4 shadow-lg`}></div>
      
      {/* Tooltip */}
      <div className="absolute z-10 left-1/2 bottom-full mb-2 -translate-x-1/2 invisible group-hover:visible">
        <div className="bg-white rounded-lg shadow-lg p-3 w-48">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-900">{device.name}</span>
            <Zap className="h-4 w-4 text-blue-500" />
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Location:</span>
              <span className="font-medium">{device.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Power:</span>
              <span className="font-medium">{device.power}W</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status:</span>
              <span className={`font-medium ${
                device.status === 'online' ? 'text-green-500' :
                device.status === 'warning' ? 'text-yellow-500' : 'text-red-500'
              }`}>
                {device.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
