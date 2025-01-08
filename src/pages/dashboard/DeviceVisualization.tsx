import React, { useState } from 'react';
import { FloorPlan } from '../../components/devices/FloorPlan';
import { DeviceList } from '../../components/devices/DeviceList';
import { DeviceStats } from '../../components/devices/DeviceStats';
import { LayoutGrid, List } from 'lucide-react';

export const DeviceVisualization: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'floor-plan'>('list');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Connected Devices</h1>
          <p className="text-gray-500">Monitor and manage your smart outlets and devices</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
          >
            <List className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode('floor-plan')}
            className={`p-2 rounded-lg ${viewMode === 'floor-plan' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
          >
            <LayoutGrid className="h-5 w-5" />
          </button>
        </div>
      </div>

      <DeviceStats />

      <div className="bg-white rounded-lg shadow">
        {viewMode === 'list' ? <DeviceList /> : <FloorPlan />}
      </div>
    </div>
  );
};