export interface Device {
  id: string;
  name: string;
  type: 'outlet' | 'switch' | 'panel';
  location: string;
  status: 'online' | 'offline' | 'warning';
  power: number;
  lastActive: string;
  safety: 'protected' | 'warning';
  position: {
    x: number;
    y: number;
  };
}