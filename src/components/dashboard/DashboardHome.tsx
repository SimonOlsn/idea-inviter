import React from 'react';
import { Power, AlertTriangle, Zap, Shield } from 'lucide-react';
import { DeviceStatus } from './DeviceStatus';
import { PowerMonitoring } from './PowerMonitoring';
import { SafetyStatus } from './SafetyStatus';
import { CopilotChat } from '../copilot/CopilotChat';

export const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Smart Outlet Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">System Status: Online</span>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Active Outlets"
          value="6"
          subtext="devices"
          change="All operational"
          icon={<Power className="h-6 w-6 text-blue-600" />}
          period="Real-time status"
        />
        <MetricCard
          title="Power Draw"
          value="1.2"
          subtext="kW"
          change="-15% vs avg"
          icon={<Zap className="h-6 w-6 text-purple-600" />}
          period="Current total"
        />
        <MetricCard
          title="Safety Events"
          value="0"
          subtext="issues"
          change="All clear"
          icon={<Shield className="h-6 w-6 text-green-600" />}
          period="Last 24h"
        />
        <MetricCard
          title="Alerts"
          value="1"
          subtext=""
          change="Non-critical"
          icon={<AlertTriangle className="h-6 w-6 text-amber-600" />}
          period="Requires attention"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Status Overview */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Connected Devices</h2>
          <DeviceStatus />
        </div>

        {/* AI Energy Advisor */}
        <CopilotChat />
      </div>

      {/* Power Monitoring */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Power Monitoring</h2>
        <PowerMonitoring />
      </div>

      {/* Safety Status */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Safety Status</h2>
        <SafetyStatus />
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  subtext: string;
  change: string;
  icon: React.ReactNode;
  period: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtext,
  change,
  icon,
  period
}) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
    </div>
    <div>
      <div className="flex items-baseline">
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <span className="ml-1 text-gray-600">{subtext}</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{period}</p>
      <p className="text-sm font-medium text-blue-600 mt-2">{change}</p>
    </div>
  </div>
);