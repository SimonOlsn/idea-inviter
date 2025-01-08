import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for support, sales inquiries, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:contact@gfiex.com" className="text-blue-600">contact@gfiex.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1-888-GFIEX" className="text-blue-600">1-888-GFIEX</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p>123 Innovation Drive</p>
                    <p>Silicon Valley, CA 94025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Support</h2>
              <p className="text-gray-600 mb-4">
                For technical support and product assistance, our team is available 24/7.
              </p>
              <a
                href="tel:+1-888-GFIEX-HELP"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Call Support
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};