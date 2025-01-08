import React from 'react';
import { Power, Shield, Zap, AlertTriangle } from 'lucide-react';

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

export const OutletMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Connected Outlets"
        value="6"
        subtext="active"
        change="All GFCI protected"
        icon={<Power className="h-6 w-6 text-blue-600" />}
        period="Real-time status"
      />
      <MetricCard
        title="Current Load"
        value="8.5"
        subtext="A"
        change="-2.3A from peak"
        icon={<Zap className="h-6 w-6 text-purple-600" />}
        period="Total draw"
      />
      <MetricCard
        title="Protection Status"
        value="100%"
        subtext="secure"
        change="All systems nominal"
        icon={<Shield className="h-6 w-6 text-green-600" />}
        period="GFCI/AFCI active"
      />
      <MetricCard
        title="Safety Alerts"
        value="0"
        subtext="issues"
        change="No active warnings"
        icon={<AlertTriangle className="h-6 w-6 text-amber-600" />}
        period="Last 24h"
      />
    </div>
  );
};