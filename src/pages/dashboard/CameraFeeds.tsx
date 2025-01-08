import React, { useState } from 'react';
import { Camera, Video, Eye, EyeOff, Settings } from 'lucide-react';

interface CameraFeed {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'inactive';
  type: 'spot-standard' | 'spot-pro';
  lastMotion: string;
  thumbnail: string;
}

const cameraFeeds: CameraFeed[] = [
  {
    id: 'cam-1',
    name: 'Living Room Spot',
    location: 'Living Room',
    status: 'active',
    type: 'spot-pro',
    lastMotion: '2 minutes ago',
    thumbnail: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'cam-2',
    name: 'Kitchen Spot',
    location: 'Kitchen',
    status: 'active',
    type: 'spot-standard',
    lastMotion: '5 minutes ago',
    thumbnail: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'cam-3',
    name: 'Garage Spot',
    location: 'Garage',
    status: 'inactive',
    type: 'spot-standard',
    lastMotion: '1 hour ago',
    thumbnail: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=2000'
  }
];

export const CameraFeeds: React.FC = () => {
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const [showInactive, setShowInactive] = useState(true);

  const filteredCameras = showInactive 
    ? cameraFeeds 
    : cameraFeeds.filter(cam => cam.status === 'active');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Camera Feeds</h1>
          <p className="text-gray-500">Monitor your Spot camera feeds</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowInactive(!showInactive)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            {showInactive ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
            <span>{showInactive ? 'Show All' : 'Show Active'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCameras.map((camera) => (
          <div key={camera.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={camera.thumbnail}
                alt={camera.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  camera.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {camera.status}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {camera.type}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{camera.name}</h3>
                  <p className="text-sm text-gray-500">{camera.location}</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Settings className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Video className="h-4 w-4 mr-1" />
                  Last motion: {camera.lastMotion}
                </div>
                <button
                  onClick={() => setSelectedCamera(camera.id)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View Feed
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-medium">Live Feed</h3>
              <button
                onClick={() => setSelectedCamera(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Eye className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video bg-gray-900">
              {/* Live feed would go here */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <Camera className="h-8 w-8 mr-2" />
                <span>Live Feed</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};