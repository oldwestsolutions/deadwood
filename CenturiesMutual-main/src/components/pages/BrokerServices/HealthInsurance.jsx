import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Heart, Stethoscope, Pills, Users, Hospital, Phone, ArrowLeft, CheckCircle, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HealthInsurance = () => {
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

      {/* Hero Section with Medical Theme */}
      <div className="bg-[#2c4739] bg-gradient-to-r from-[#2c4739] to-[#1f332a] text-white py-16 mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <Stethoscope className="h-16 w-16 text-blue-300" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Health Insurance Services</h1>
            <p className="text-lg opacity-90 mb-6">Protecting Your Health and Wellness with Comprehensive Medical Coverage</p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {[
                { icon: Heart, text: "Preventive Care", color: "text-red-300" },
                { icon: Pills, text: "Prescription Benefits", color: "text-blue-300" },
                { icon: Hospital, text: "Hospital Coverage", color: "text-green-300" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform">
                  <item.icon className={`h-8 w-8 mx-auto mb-3 ${item.color}`} />
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
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
                <h3 className="font-serif font-semibold text-lg mb-2 text-blue-900">Before You Apply</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Health insurance is required by law in many states</li>
                  <li>• Pre-existing conditions are covered</li>
                  <li>• Open enrollment periods may apply</li>
                  <li>• Financial assistance may be available based on income</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Plan Options */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8 font-serif text-[#2c4739]">Available Plans</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  name: "Essential Care",
                  price: "$199",
                  features: ["Basic preventive care", "Emergency services", "Generic prescriptions"]
                },
                {
                  name: "Premium Care",
                  price: "$299",
                  features: ["Comprehensive coverage", "Specialist visits", "Brand-name prescriptions", "Mental health services"],
                  highlighted: true
                },
                {
                  name: "Family Plus",
                  price: "$399",
                  features: ["Family coverage", "Dental & vision", "Wellness programs", "24/7 telemedicine"]
                }
              ].map((plan, index) => (
                <Card 
                  key={index} 
                  className={`transform hover:scale-102 transition-transform border-none shadow-sm hover:shadow-md ${
                    plan.highlighted ? 'bg-[#2c4739] text-white' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-lg mb-2">{plan.name}</h3>
                    <p className="text-2xl font-bold mb-4">{plan.price}<span className="text-sm">/month</span></p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`h-4 w-4 ${plan.highlighted ? 'text-white' : 'text-[#2c4739]'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-2 mt-4 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center gap-2 ${
                      plan.highlighted 
                        ? 'bg-white text-[#2c4739] hover:bg-cream' 
                        : 'bg-[#2c4739] text-white hover:bg-[#1f332a]'
                    }`}>
                      Select Plan
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Network Section */}
          <div className="mb-12 bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold font-serif text-[#2c4739] mb-4">Our Provider Network</h2>
                <p className="text-gray-600 mb-4">Access to over 5,000 healthcare providers and facilities nationwide</p>
                <ul className="space-y-2">
                  {[
                    "Top-rated hospitals",
                    "Specialist physicians",
                    "Urgent care centers",
                    "Mental health professionals"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-[#2c4739] h-4 w-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[Hospital, Users, Stethoscope, Pills].map((Icon, index) => (
                  <div key={index} className="bg-[#2c4739]/5 rounded-lg p-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-[#2c4739]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Simplified CTA Section */}
          <Card className="bg-gradient-to-br from-[#2c4739] via-[#2c4739] to-[#3c5b48] text-white border-none">
            <CardContent className="p-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-3 font-serif">Speak with a Healthcare Specialist</h2>
                <p className="text-base mb-4 opacity-90">Our experts will help you choose the right coverage for your needs</p>
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

export default HealthInsurance; 