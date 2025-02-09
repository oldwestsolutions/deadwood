import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Shield, Heart, Umbrella, Phone, CheckCircle, Users, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InsuranceServices = () => {
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

      {/* Hero Section */}
      <div className="bg-[#2c4739] bg-gradient-to-r from-[#2c4739] to-[#1f332a] text-white py-16 mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Protect What Matters Most</h1>
            <p className="text-lg opacity-90 mb-6">Comprehensive insurance solutions for you and your family</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#F8F5F0] text-[#2c4739] px-5 py-2 rounded-lg font-semibold hover:bg-white transition-colors">
                Get Coverage
              </button>
              <button className="border border-[#F8F5F0] px-5 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Compare Plans
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Insurance Plans - More Compact */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Heart,
                title: "Health Insurance",
                benefits: [
                  "Comprehensive medical coverage",
                  "Prescription drug benefits",
                  "Preventive care included",
                  "Large provider network"
                ],
                color: "bg-[#2c4739]/10"
              },
              {
                icon: Umbrella,
                title: "Life Insurance",
                benefits: [
                  "Term life coverage",
                  "Whole life options",
                  "Flexible payment plans",
                  "Death benefit protection"
                ],
                color: "bg-[#2c4739]/10"
              }
            ].map((plan, index) => (
              <Card key={index} className="transform hover:scale-102 transition-transform border-none shadow-sm hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${plan.color} rounded-full flex items-center justify-center`}>
                      <plan.icon className="text-[#2c4739] h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-[#2c4739]">{plan.title}</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="text-[#2c4739] h-4 w-4 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 bg-[#2c4739] text-white rounded-lg hover:bg-[#1f332a] transition-colors flex items-center justify-center gap-2 text-sm">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section - More Compact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8 font-serif text-[#2c4739]">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: Shield,
                  title: "Trusted Coverage",
                  description: "Industry-leading insurance providers"
                },
                {
                  icon: Users,
                  title: "Expert Guidance",
                  description: "Professional insurance advisors"
                },
                {
                  icon: Clock,
                  title: "Quick & Easy",
                  description: "Streamlined application process"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#2c4739]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="text-[#2c4739] h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-semibold text-base mb-1 text-[#2c4739]">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - More Compact */}
          <Card className="bg-[#2c4739] bg-gradient-to-r from-[#2c4739] to-[#1f332a] text-white border-none">
            <CardContent className="p-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-3 font-serif">Ready to Get Protected?</h2>
                <p className="text-base mb-4 opacity-90">Speak with an insurance expert today</p>
                <button className="bg-[#F8F5F0] text-[#2c4739] px-6 py-2 rounded-lg font-semibold hover:bg-white transition-colors flex items-center gap-2 mx-auto text-sm">
                  <Phone className="h-4 w-4" />
                  Contact an Agent
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InsuranceServices; 