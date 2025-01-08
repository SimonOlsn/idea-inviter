import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Shield, Zap, Cpu, LineChart, Wifi, Settings } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Advanced Safety Protection",
    description: "Industry-leading GFCI/AFCI protection with real-time monitoring and instant response to electrical faults.",
    details: [
      "Ground fault detection and prevention",
      "Arc fault monitoring",
      "Surge protection",
      "Temperature monitoring",
      "Automatic shutdown"
    ]
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-600" />,
    title: "Smart Power Management",
    description: "Intelligent power distribution and monitoring system for optimal energy usage.",
    details: [
      "Real-time power monitoring",
      "Load balancing",
      "Peak usage optimization",
      "Energy consumption analytics",
      "Cost-saving recommendations"
    ]
  },
  {
    icon: <Cpu className="h-8 w-8 text-green-600" />,
    title: "AI-Powered Automation",
    description: "Smart automation features that learn from your usage patterns and optimize accordingly.",
    details: [
      "Usage pattern recognition",
      "Automated scheduling",
      "Smart device integration",
      "Custom automation rules",
      "Energy-saving modes"
    ]
  },
  {
    icon: <LineChart className="h-8 w-8 text-red-600" />,
    title: "Advanced Analytics",
    description: "Comprehensive analytics and reporting tools for better energy management.",
    details: [
      "Usage trends analysis",
      "Cost projections",
      "Energy efficiency metrics",
      "Custom reports",
      "Performance insights"
    ]
  },
  {
    icon: <Wifi className="h-8 w-8 text-yellow-600" />,
    title: "Seamless Connectivity",
    description: "Robust mesh network ensuring reliable connection between all your smart devices.",
    details: [
      "Mesh network support",
      "Remote access",
      "Mobile app control",
      "Voice assistant integration",
      "Secure communication"
    ]
  },
  {
    icon: <Settings className="h-8 w-8 text-indigo-600" />,
    title: "Customizable Control",
    description: "Flexible control options to manage your electrical system your way.",
    details: [
      "Scheduling controls",
      "Scene creation",
      "Group management",
      "Priority settings",
      "Custom alerts"
    ]
  }
];

export const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Smart Living
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our innovative features transform your electrical infrastructure into an intelligent, efficient, and safe system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};