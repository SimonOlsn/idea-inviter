import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="h-12 w-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
};