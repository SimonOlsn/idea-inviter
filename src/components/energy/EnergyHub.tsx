import React from 'react';
import { Plug, Thermometer, DollarSign, Zap } from 'lucide-react';
import { DeviceCard } from './DeviceCard';
import { PowerChart } from './PowerChart';

export const EnergyHub: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Energy Optimization</h2>
          <p className="text-sm text-gray-500 mt-1">Smart outlet power management</p>
        </div>
        <div className="flex items-center space-x-3 bg-green-50 px-4 py-2 rounded-lg">
          <DollarSign className="h-5 w-5 text-green-600" />
          <div>
            <span className="text-sm text-gray-600">Monthly Savings: </span>
            <span className="font-medium text-green-600">$45.20</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DeviceCard
          icon={<Zap className="h-6 w-6 text-blue-600" />}
          title="Smart Outlets"
          status="Optimizing"
          level={75}
          details={{
            active: '6 devices',
            power: '850W',
            savings: '15% vs avg'
          }}
        />
        <DeviceCard
          icon={<Plug className="h-6 w-6 text-purple-600" />}
          title="Peak Usage"
          status="Normal"
          level={45}
          details={{
            current: '2.1 kW',
            peak: '3.5 kW',
            time: '6:00 PM'
          }}
        />
        <DeviceCard
          icon={<Thermometer className="h-6 w-6 text-orange-600" />}
          title="Safety Status"
          status="Protected"
          level={100}
          details={{
            gfci: 'Active',
            temp: 'Normal',
            alerts: 'None'
          }}
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Power Usage Trends</h3>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-green-600 font-medium">Peak: $0.18/kWh</span>
            <span className="text-blue-600 font-medium">Off-Peak: $0.08/kWh</span>
          </div>
        </div>
        <PowerChart />
      </div>
    </div>
  );
};