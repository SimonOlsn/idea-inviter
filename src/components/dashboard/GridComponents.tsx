import React from 'react';
import { Power, Shield, Wifi, Activity, Camera } from 'lucide-react';

interface SmartDeviceProps {
  name: string;
  icon: React.ReactNode;
  features: string[];
  load: number;
  status: 'active' | 'warning' | 'error';
}

const SmartDevice: React.FC<SmartDeviceProps> = ({
  name,
  icon,
  features,
  load,
  status
}) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {icon}
          <span className="font-medium">{name}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <div className="space-y-2">
        <div className="text-sm space-y-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-600">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
              {feature}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Power Load</span>
            <span className="font-medium">{load}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 rounded-full h-2 transition-all duration-500"
              style={{ width: `${load}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const GridComponents: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SmartDevice
        name="Gus Smart Outlet"
        icon={<Power className="h-5 w-5 text-blue-500" />}
        features={[
          'GFCI Protection Active',
          'Power Monitoring',
          'WiFi Connected'
        ]}
        load={75}
        status="active"
      />
      <SmartDevice
        name="Spot Faceplate"
        icon={<Camera className="h-5 w-5 text-green-500" />}
        features={[
          'Air Quality: 95/100',
          'Motion Detection',
          'Camera Active'
        ]}
        load={60}
        status="active"
      />
      <SmartDevice
        name="Toby Switch"
        icon={<Activity className="h-5 w-5 text-purple-500" />}
        features={[
          'Gesture Control',
          'Scene Control',
          'Schedule Active'
        ]}
        load={45}
        status="active"
      />
      <SmartDevice
        name="Nanook Panel"
        icon={<Shield className="h-5 w-5 text-red-500" />}
        features={[
          'Circuit Monitoring',
          'Surge Protection',
          'Remote Control'
        ]}
        load={85}
        status="warning"
      />
      <SmartDevice
        name="Max Controller"
        icon={<Wifi className="h-5 w-5 text-yellow-500" />}
        features={[
          'Mesh Network Active',
          'Device Management',
          '6 Connected Devices'
        ]}
        load={30}
        status="active"
      />
    </div>
  );
};