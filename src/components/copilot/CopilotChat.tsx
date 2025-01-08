import React, { useState } from 'react';
import { Send, Zap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    role: 'assistant',
    content: "Hi! I'm your Gfiex smart outlet assistant.\nHow can I help you optimize your electrical safety and usage today?\n\nI can help with:\n- GFCI/AFCI protection status\n- Power consumption analysis\n- Device safety monitoring\n- Outlet scheduling recommendations",
    timestamp: new Date(),
  },
];

export const CopilotChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        role: 'assistant',
        content: generateResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow h-full">
      <div className="p-4 border-b flex items-center space-x-2">
        <Zap className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Smart Outlet Assistant</h2>
      </div>

      <div className="h-[400px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <ReactMarkdown className="prose prose-sm max-w-none">
                  {message.content}
                </ReactMarkdown>
                <div className={`text-xs mt-1 ${
                  message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t mt-auto">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about outlet safety or power usage..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function generateResponse(input: string): string {
  const responses = {
    safety: "Current safety status:\n\n- GFCI Protection: Active\n- AFCI Protection: Active\n- Last self-test: Passed (2 hours ago)\n\nRecommendations:\n1. Schedule monthly GFCI tests\n2. Check outlet temperature sensors\n3. Review safety event logs",
    power: "Outlet power analysis:\n\n- Current draw: 2.1A\n- Voltage: 120V\n- Power factor: 0.95\n\nSuggestions:\n1. Consider scheduling high-power devices\n2. Monitor for unusual power patterns\n3. Check device power ratings",
    schedule: "Smart scheduling options:\n\n1. Auto-shutdown during non-use hours\n2. Peak usage avoidance\n3. Safety check scheduling\n\nCurrent schedule:\n- Safety tests: Every 30 days\n- Load balancing: Active\n- Power monitoring: Real-time",
    default: "I can help you manage your Gfiex smart outlets:\n\n1. Safety status monitoring\n2. Power consumption analysis\n3. Device scheduling\n4. Protection features\n\nWhat would you like to know more about?"
  };

  const lowercaseInput = input.toLowerCase();
  if (lowercaseInput.includes('safety') || lowercaseInput.includes('protection')) return responses.safety;
  if (lowercaseInput.includes('power') || lowercaseInput.includes('consumption')) return responses.power;
  if (lowercaseInput.includes('schedule') || lowercaseInput.includes('timing')) return responses.schedule;
  return responses.default;
}