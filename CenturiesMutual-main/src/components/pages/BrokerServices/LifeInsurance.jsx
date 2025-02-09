import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Umbrella, Shield, Heart, Users, Clock, Phone, ArrowLeft, CheckCircle, Leaf, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LifeInsurance = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-y-auto bg-[#F8F9FE] scrollbar-hide">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-[#2c4739] hover:text-[#1f332a]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Hero Section with Protection Theme */}
      <div className="bg-gradient-to-r from-[#2c4739] to-[#1f332a] text-white py-16 mt-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <Shield 
                key={i} 
                className="absolute text-white/20 h-24 w-24"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Life Insurance Services</h1>
                <p className="text-lg opacity-90 mb-6">Protect your family's future with our comprehensive life insurance plans</p>
                <button className="bg-[#F8F5F0] text-[#2c4739] px-5 py-2 rounded-lg font-semibold hover:bg-white transition-colors">
                  Calculate Coverage
                </button>
              </div>
              <div className="hidden md:flex flex-1 justify-center">
                <Shield className="h-32 w-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Important Information */}
          <div className="mb-12 bg-blue-50 rounded-lg p-6 border border-blue-100">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2 text-blue-900">Key Information</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Coverage amounts typically range from $100,000 to $1,000,000+</li>
                  <li>• Medical exam may be required for some policies</li>
                  <li>• Premiums are generally lower when you're younger and healthier</li>
                  <li>• Some policies build cash value over time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Coverage Types */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8 font-serif text-[#2c4739]">Types of Coverage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Term Life Insurance",
                  icon: Clock,
                  description: "Affordable coverage for a specific period",
                  features: [
                    "10, 20, or 30-year terms",
                    "Level premiums",
                    "High coverage amounts",
                    "Convertible options"
                  ]
                },
                {
                  title: "Whole Life Insurance",
                  icon: Leaf,
                  description: "Lifetime coverage with cash value",
                  features: [
                    "Permanent protection",
                    "Builds cash value",
                    "Fixed premiums",
                    "Dividend potential"
                  ]
                }
              ].map((type, index) => (
                <Card key={index} className="transform hover:scale-102 transition-transform border-none shadow-sm hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#2c4739]/10 rounded-full flex items-center justify-center">
                        <type.icon className="text-[#2c4739] h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-lg text-[#2c4739]">{type.title}</h3>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="text-[#2c4739] h-4 w-4" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Simplified CTA Section */}
          <Card className="bg-gradient-to-r from-[#2c4739] to-[#1f332a] text-white border-none">
            <CardContent className="p-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-3 font-serif">Speak with a Life Insurance Expert</h2>
                <p className="text-base mb-4 opacity-90">Get personalized advice on the best coverage for your situation</p>
                <button className="bg-[#F8F5F0] text-[#2c4739] px-6 py-2 rounded-lg font-semibold hover:bg-white transition-colors flex items-center gap-2 mx-auto text-sm">
                  <Phone className="h-4 w-4" />
                  Request a Call
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LifeInsurance; 