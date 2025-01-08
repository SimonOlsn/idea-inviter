import React from 'react';
import { OutletMetrics } from '../../components/dashboard/OutletMetrics';
import { SafetyMonitor } from '../../components/dashboard/SafetyMonitor';
import { CopilotChat } from '../../components/copilot/CopilotChat';
import { AutomationRules } from '../../components/automation/AutomationRules';
import { EnergyHub } from '../../components/energy/EnergyHub';

export const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Smart Outlet Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">System Status: Protected</span>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      <OutletMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AutomationRules />
        <CopilotChat />
      </div>

      <EnergyHub />

      <SafetyMonitor />
    </div>
  );
};