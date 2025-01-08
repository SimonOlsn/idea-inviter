import React from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface SafetyEvent {
  id: string;
  type: 'gfci' | 'afci' | 'surge' | 'temperature';
  device: string;
  timestamp: string;
  status: 'active' | 'resolved';
  description: string;
}

const safetyEvents: SafetyEvent[] = [
  {
    id: 'event-1',
    type: 'gfci',
    device: 'Kitchen Gus Outlet',
    timestamp: '2024-03-15 14:23',
    status: 'resolved',
    description: 'Ground fault detected and prevented'
  },
  {
    id: 'event-2',
    type: 'temperature',
    device: 'Living Room Outlet',
    timestamp: '2024-03-15 13:15',
    status: 'resolved',
    description: 'Temperature threshold warning'
  }
];

export const SafetyMonitor: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Safety Monitor</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatusCard
            title="GFCI Protection"
            status="active"
            icon={<Shield className="h-6 w-6" />}
            description="All outlets protected"
          />
          <StatusCard
            title="AFCI Protection"
            status="active"
            icon={<Shield className="h-6 w-6" />}
            description="Arc detection active"
          />
          <StatusCard
            title="Temperature"
            status="active"
            icon={<Shield className="h-6 w-6" />}
            description="Within safe range"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Recent Safety Events</h3>
          <div className="space-y-4">
            {safetyEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  {event.status === 'resolved' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  )}
                  <div>
                    <h4 className="font-medium text-gray-900">{event.device}</h4>
                    <p className="text-sm text-gray-500">{event.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {event.status === 'resolved' ? 'Resolved' : 'Active'}
                  </p>
                  <p className="text-xs text-gray-500">{event.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatusCardProps {
  title: string;
  status: 'active' | 'warning' | 'error';
  icon: React.ReactNode;
  description: string;
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  status,
  icon,
  description
}) => {
  const statusColors = {
    active: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center space-x-3">
        <div className={statusColors[status]}>{icon}</div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};