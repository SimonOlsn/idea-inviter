import React from 'react';
import { Shield, Cpu, Network, Zap, Lock, Workflow } from 'lucide-react';

const technologies = [
  {
    title: "GFCI/AFCI Technology",
    icon: <Shield className="h-12 w-12 text-blue-600" />,
    description: "Advanced protection mechanisms that detect and prevent electrical hazards.",
    details: {
      "Response Time": "<10ms",
      "Protection Types": "Ground Fault, Arc Fault, Surge",
      "Safety Standards": "UL 943, UL 1699",
      "Monitoring": "Continuous"
    }
  },
  {
    title: "Smart Processing",
    icon: <Cpu className="h-12 w-12 text-purple-600" />,
    description: "Powerful embedded processors for real-time monitoring and control.",
    details: {
      "Processor": "Dual-core ARM Cortex-M4",
      "Memory": "256KB RAM",
      "Analytics": "On-device ML",
      "Updates": "OTA capable"
    }
  },
  {
    title: "Mesh Networking",
    icon: <Network className="h-12 w-12 text-green-600" />,
    description: "Self-forming, self-healing mesh network for reliable connectivity.",
    details: {
      "Protocol": "IEEE 802.15.4",
      "Range": "50m indoor",
      "Nodes": "Up to 100 devices",
      "Bandwidth": "250 Kbps"
    }
  },
  {
    title: "Power Management",
    icon: <Zap className="h-12 w-12 text-yellow-600" />,
    description: "Sophisticated power monitoring and distribution system.",
    details: {
      "Voltage Range": "100-240V AC",
      "Current": "Up to 20A",
      "Accuracy": "±1%",
      "Sampling": "4000 Hz"
    }
  },
  {
    title: "Security Architecture",
    icon: <Lock className="h-12 w-12 text-red-600" />,
    description: "Enterprise-grade security protecting your electrical infrastructure.",
    details: {
      "Encryption": "AES-256",
      "Authentication": "2-factor",
      "Certificates": "X.509",
      "Updates": "Signed firmware"
    }
  },
  {
    title: "Automation Engine",
    icon: <Workflow className="h-12 w-12 text-indigo-600" />,
    description: "Intelligent automation system with advanced scheduling capabilities.",
    details: {
      "Rules Engine": "Custom logic",
      "Schedules": "Unlimited",
      "Triggers": "Event-based",
      "Integration": "REST API"
    }
  }
];

export const TechnologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the advanced technologies that power our smart electrical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-50 rounded-full">
                  {tech.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {tech.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {tech.description}
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Technical Specifications</h4>
                <dl className="space-y-2">
                  {Object.entries(tech.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <dt className="text-gray-500">{key}</dt>
                      <dd className="font-medium text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};