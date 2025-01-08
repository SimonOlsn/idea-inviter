import React from 'react';
import { Power, Wifi, ShieldCheck } from 'lucide-react';

interface Device {
  id: string;
  name: string;
  type: string;
  location: string;
  status: 'online' | 'offline' | 'warning';
  lastReading: string;
  safetyStatus: 'normal' | 'warning' | 'critical';
}

const devices: Device[] = [
  {
    id: 'gus-1',
    name: 'Gus Smart Outlet',
    type: 'Smart Outlet',
    location: 'Living Room',
    status: 'online',
    lastReading: '120V / 0.8A',
    safetyStatus: 'normal'
  },
  {
    id: 'spot-1',
    name: 'Spot Faceplate',
    type: 'Smart Faceplate',
    location: 'Kitchen',
    status: 'online',
    lastReading: 'AQ: 95/100',
    safetyStatus: 'normal'
  },
  {
    id: 'toby-1',
    name: 'Toby Switch',
    type: 'Smart Switch',
    location: 'Bedroom',
    status: 'warning',
    lastReading: '75W',
    safetyStatus: 'warning'
  }
];

export const DeviceStatus: React.FC = () => {
  return (
    <div className="space-y-4">
      {devices.map((device) => (
        <div
          key={device.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <div className="flex items-center space-x-4">
            <Power className={`h-5 w-5 ${
              device.status === 'online' ? 'text-green-500' : 
              device.status === 'warning' ? 'text-yellow-500' : 'text-gray-400'
            }`} />
            <div>
              <h3 className="font-medium text-gray-900">{device.name}</h3>
              <p className="text-sm text-gray-500">{device.location}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{device.lastReading}</p>
              <p className="text-xs text-gray-500">Last reading</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Wifi className={`h-4 w-4 ${
                device.status === 'online' ? 'text-green-500' : 'text-gray-400'
              }`} />
              <ShieldCheck className={`h-4 w-4 ${
                device.safetyStatus === 'normal' ? 'text-green-500' :
                device.safetyStatus === 'warning' ? 'text-yellow-500' : 'text-red-500'
              }`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};