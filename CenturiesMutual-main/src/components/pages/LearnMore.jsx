import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Shield, Target, Users, Award, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FE] pt-24">
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
      <div className="bg-[#2c4739] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Why Choose Centuries Mutual?</h1>
            <p className="text-xl opacity-90">Discover how we can help secure your financial future with our comprehensive wealth management solutions.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Core Values */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Trust & Security",
                description: "Your financial security is our top priority, backed by decades of experience and proven expertise."
              },
              {
                icon: Target,
                title: "Personalized Strategy",
                description: "We create tailored financial solutions that align with your unique goals and aspirations."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Our team of seasoned professionals brings diverse expertise to serve your financial needs."
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description: "Award-winning services recognized for excellence in wealth management and customer satisfaction."
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2c4739]/10 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-[#2c4739]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services Overview */}
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Our Comprehensive Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Insurance Solutions</h3>
                <p className="text-gray-600">
                  From health to life insurance, we provide comprehensive coverage options to protect what matters most. Our expert advisors help you navigate complex insurance decisions to ensure you have the right protection for your needs.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Tax Services</h3>
                <p className="text-gray-600">
                  Our professional tax services help you navigate complex tax regulations while maximizing your returns. We provide year-round support to ensure your tax strategy aligns with your financial goals.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Wealth Management</h3>
                <p className="text-gray-600">
                  Build and preserve your wealth with our comprehensive financial planning services. We offer personalized strategies for investment, retirement planning, and estate management.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">Take the first step towards securing your financial future.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/insurance-services')}
                className="bg-[#2c4739] text-white px-6 py-3 rounded-lg hover:bg-[#1f332a] transition-colors"
              >
                Explore Services
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="border border-[#2c4739] text-[#2c4739] px-6 py-3 rounded-lg hover:bg-[#2c4739] hover:text-white transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore; 