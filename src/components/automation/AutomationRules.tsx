import React, { useState } from 'react';
import { Clock, Zap, ThermometerSun, DollarSign, Power, Plus } from 'lucide-react';

interface AutomationRule {
  id: string;
  name: string;
  condition: string;
  action: string;
  status: 'active' | 'inactive';
  savings: string;
  icon: 'clock' | 'thermometer' | 'power' | 'dollar';
}

const defaultRules: AutomationRule[] = [
  {
    id: '1',
    name: 'Smart Outlet Scheduling',
    condition: 'During peak hours (2PM - 6PM)',
    action: 'Reduce non-essential outlet power by 30%',
    status: 'active',
    savings: '$15/month',
    icon: 'clock'
  },
  {
    id: '2',
    name: 'Idle Device Detection',
    condition: 'When device idle > 30 mins',
    action: 'Switch outlet to low power mode',
    status: 'active',
    savings: '$8/month',
    icon: 'power'
  },
  {
    id: '3',
    name: 'Temperature Protection',
    condition: 'When outlet temp > 35°C',
    action: 'Reduce load and notify',
    status: 'active',
    savings: '$5/month',
    icon: 'thermometer'
  }
];

const getIcon = (iconName: AutomationRule['icon']) => {
  switch (iconName) {
    case 'clock':
      return <Clock className="h-5 w-5" />;
    case 'thermometer':
      return <ThermometerSun className="h-5 w-5" />;
    case 'power':
      return <Power className="h-5 w-5" />;
    case 'dollar':
      return <DollarSign className="h-5 w-5" />;
    default:
      return <Zap className="h-5 w-5" />;
  }
};

export const AutomationRules: React.FC = () => {
  const [rules] = useState<AutomationRule[]>(defaultRules);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Automation Rules</h2>
          <p className="text-sm text-gray-500">Smart power management rules</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>Add Rule</span>
        </button>
      </div>

      <div className="space-y-4">
        {rules.map((rule) => (
          <div
            key={rule.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white rounded-lg text-blue-600">
                {getIcon(rule.icon)}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{rule.name}</h3>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>When: {rule.condition}</p>
                  <p>Then: {rule.action}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <span className="text-sm font-medium text-green-600">{rule.savings}</span>
                <p className="text-xs text-gray-500">estimated savings</p>
              </div>
              <div className="flex items-center">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={rule.status === 'active'}
                    readOnly
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};