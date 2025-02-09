import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { HeartPulse, Users, Calendar, Phone, FileText, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HealthInsurancePage = () => {
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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          {/* Main Content */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Health Insurance Policy</CardTitle>
                  <span className="text-green-500 text-sm font-medium px-2 py-0.5 bg-green-50 rounded-full">
                    Active
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Policy Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="text-blue-500" size={20} />
                        <h4 className="font-medium">Coverage Period</h4>
                      </div>
                      <p className="text-sm text-gray-600">Jan 2024 - Dec 2024</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="text-blue-500" size={20} />
                        <h4 className="font-medium">Plan Type</h4>
                      </div>
                      <p className="text-sm text-gray-600">Family Coverage</p>
                    </div>
                  </div>

                  {/* Coverage Details */}
                  <div>
                    <h4 className="font-medium mb-4">Coverage Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 border rounded-lg">
                        <span className="text-gray-600">Annual Deductible</span>
                        <span className="font-medium">$1,500</span>
                      </div>
                      <div className="flex justify-between p-3 border rounded-lg">
                        <span className="text-gray-600">Out-of-Pocket Maximum</span>
                        <span className="font-medium">$5,000</span>
                      </div>
                      <div className="flex justify-between p-3 border rounded-lg">
                        <span className="text-gray-600">Primary Care Visit</span>
                        <span className="font-medium">$25 Copay</span>
                      </div>
                      <div className="flex justify-between p-3 border rounded-lg">
                        <span className="text-gray-600">Specialist Visit</span>
                        <span className="font-medium">$50 Copay</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                    <FileText className="text-blue-500" />
                    <div>
                      <p className="font-medium">View ID Card</p>
                      <p className="text-sm text-gray-600">Download or print</p>
                    </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                    <Phone className="text-blue-500" />
                    <div>
                      <p className="font-medium">Contact Support</p>
                      <p className="text-sm text-gray-600">24/7 assistance</p>
                    </div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurancePage; 