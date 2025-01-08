import React from 'react';
import { useDevices } from '../../hooks/useDevices';
import { DeviceMarker } from './DeviceMarker';

export const FloorPlan: React.FC = () => {
  const { devices } = useDevices();

  return (
    <div className="relative p-8 bg-white">
      <div className="aspect-[2/1] bg-white rounded-lg relative">
        {/* Floor Plan Background */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&q=80&w=2000&h=1000"
            alt="Floor Plan"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
            {/* Room labels */}
            <div className="p-4">
              <span className="text-sm font-medium text-gray-600">Garage</span>
            </div>
            <div className="p-4 text-center">
              <span className="text-sm font-medium text-gray-600">Living Room</span>
            </div>
            <div className="p-4 text-right">
              <span className="text-sm font-medium text-gray-600">Kitchen</span>
            </div>
            <div className="p-4 flex items-end">
              <span className="text-sm font-medium text-gray-600">Office</span>
            </div>
            <div className="p-4 flex items-end justify-center">
              <span className="text-sm font-medium text-gray-600">Bedroom</span>
            </div>
            <div className="p-4 flex items-end justify-end">
              <span className="text-sm font-medium text-gray-600">Bathroom</span>
            </div>
          </div>

          {/* Device markers */}
          {devices.map((device) => (
            <DeviceMarker key={device.id} device={device} />
          ))}
        </div>

        {/* Legend */}
        <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Device Types</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-orange-500 ring-4 ring-orange-100"></div>
              <span className="ml-3 text-gray-600">Gus Standard</span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>
              <span className="ml-3 text-gray-600">Gus+Spot</span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-purple-500 ring-4 ring-purple-100"></div>
              <span className="ml-3 text-gray-600">Toby Switch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};