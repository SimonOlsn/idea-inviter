import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Former Tesla engineer with 15+ years experience in electrical systems and IoT."
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "PhD in Electrical Engineering, specializing in smart grid technologies."
  },
  {
    name: "Priya Patel",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "10+ years experience in product development for consumer electronics."
  },
  {
    name: "David Kim",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Expert in embedded systems and IoT security protocols."
  }
];

export const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate experts dedicated to revolutionizing electrical safety and smart home technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};