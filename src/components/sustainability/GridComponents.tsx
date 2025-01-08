import React from 'react';
import { Battery, Factory, Home, Sun, Wind } from 'lucide-react';

interface GridComponentProps {
  name: string;
  icon: React.ReactNode;
  capacity: string;
  load: number;
  status: 'active' | 'warning' | 'error';
}

const GridComponent: React.FC<GridComponentProps> = ({
  name,
  icon,
  capacity,
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
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Capacity</span>
          <span className="font-medium">{capacity}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Load</span>
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
  );
};

export const GridComponents: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <GridComponent
        name="Solar Array 1"
        icon={<Sun className="h-5 w-5 text-yellow-500" />}
        capacity="2.5 MW"
        load={85}
        status="active"
      />
      <GridComponent
        name="Wind Farm 1"
        icon={<Wind className="h-5 w-5 text-blue-500" />}
        capacity="3.8 MW"
        load={65}
        status="active"
      />
      <GridComponent
        name="Battery Bank 1"
        icon={<Battery className="h-5 w-5 text-green-500" />}
        capacity="1.2 MW"
        load={45}
        status="active"
      />
      <GridComponent
        name="Industrial Zone"
        icon={<Factory className="h-5 w-5 text-orange-500" />}
        capacity="4.0 MW"
        load={90}
        status="warning"
      />
      <GridComponent
        name="Residential Area"
        icon={<Home className="h-5 w-5 text-purple-500" />}
        capacity="2.8 MW"
        load={75}
        status="active"
      />
    </div>
  );
};