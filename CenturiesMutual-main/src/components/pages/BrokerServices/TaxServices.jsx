import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Calculator, FileText, Clock, Download, ChevronRight, DollarSign, Shield, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TaxServices = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Professional Tax Services</h1>
            <p className="text-lg opacity-90 mb-6">Expert tax preparation and planning for individuals and businesses</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#F8F5F0] text-[#2c4739] px-5 py-2 rounded-lg font-semibold hover:bg-white transition-colors">
                Get Started
              </button>
              <button className="border border-[#F8F5F0] px-5 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: FileText,
                title: "Tax Preparation",
                description: "Accurate and timely preparation of your tax returns",
                color: "bg-[#2c4739]/10"
              },
              {
                icon: Calculator,
                title: "Tax Planning",
                description: "Strategic planning to minimize your tax liability",
                color: "bg-[#2c4739]/10"
              },
              {
                icon: Shield,
                title: "Audit Support",
                description: "Professional representation in case of an audit",
                color: "bg-[#2c4739]/10"
              }
            ].map((service, index) => (
              <Card key={index} className="transform hover:scale-102 transition-transform border-none shadow-sm hover:shadow-md">
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <service.icon className="text-[#2c4739] h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-semibold text-base mb-1 text-[#2c4739]">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section - More Compact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8 font-serif text-[#2c4739]">Our Process</h2>
            <div className="grid gap-4">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  description: "Meet with our tax experts to discuss your situation"
                },
                {
                  step: 2,
                  title: "Document Collection",
                  description: "Secure upload of all necessary tax documents"
                },
                {
                  step: 3,
                  title: "Preparation & Review",
                  description: "Thorough preparation and review of your returns"
                },
                {
                  step: 4,
                  title: "Filing & Follow-up",
                  description: "Electronic filing and year-round support"
                }
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-[#2c4739] text-white rounded-full flex items-center justify-center font-bold text-base">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-base text-[#2c4739]">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - More Compact */}
          <Card className="bg-[#2c4739] bg-gradient-to-r from-[#2c4739] to-[#1f332a] text-white border-none">
            <CardContent className="p-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-3 font-serif">Ready to Get Started?</h2>
                <p className="text-base mb-4 opacity-90">Schedule your free consultation today</p>
                <button className="bg-[#F8F5F0] text-[#2c4739] px-6 py-2 rounded-lg font-semibold hover:bg-white transition-colors">
                  Schedule Now
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TaxServices; 