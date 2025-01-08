import { useState } from 'react';
import { Device } from '../types/devices';

const mockDevices: Device[] = [
  {
    id: 'gus-lr-01',
    name: 'Gus Standard',
    type: 'outlet',
    location: 'Living Room',
    status: 'online',
    power: 120,
    lastActive: '2 min ago',
    safety: 'protected',
    position: { x: 45, y: 25 }
  },
  {
    id: 'spot-kt-01',
    name: 'Gus+Spot Aware',
    type: 'outlet',
    location: 'Kitchen',
    status: 'online',
    power: 850,
    lastActive: '1 min ago',
    safety: 'protected',
    position: { x: 75, y: 25 }
  },
  {
    id: 'toby-br-01',
    name: 'Toby Switch',
    type: 'switch',
    location: 'Bedroom',
    status: 'warning',
    power: 60,
    lastActive: 'Just now',
    safety: 'warning',
    position: { x: 45, y: 75 }
  },
  {
    id: 'gus-of-01',
    name: 'Gus+Spot Speaker',
    type: 'outlet',
    location: 'Office',
    status: 'online',
    power: 240,
    lastActive: '5 min ago',
    safety: 'protected',
    position: { x: 15, y: 75 }
  },
  {
    id: 'gus-bt-01',
    name: 'Gus Standard',
    type: 'outlet',
    location: 'Bathroom',
    status: 'online',
    power: 80,
    lastActive: '3 min ago',
    safety: 'protected',
    position: { x: 85, y: 75 }
  },
  {
    id: 'spot-smoke-01',
    name: 'Gus+Spot Smoke',
    type: 'outlet',
    location: 'Garage',
    status: 'online',
    power: 50,
    lastActive: '1 min ago',
    safety: 'protected',
    position: { x: 15, y: 25 }
  }
];

export const useDevices = () => {
  const [devices] = useState<Device[]>(mockDevices);

  return {
    devices,
    totalPower: devices.reduce((sum, device) => sum + device.power, 0),
    activeDevices: devices.filter(d => d.status === 'online').length,
    warningDevices: devices.filter(d => d.status === 'warning').length
  };
};