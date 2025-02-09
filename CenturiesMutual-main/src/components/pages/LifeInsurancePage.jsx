import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Umbrella, Users, Calendar, FileText, Settings, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LifeInsurancePage = () => {
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
                  <CardTitle>Life Insurance Policy</CardTitle>
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
                        <h4 className="font-medium">Policy Term</h4>
                      </div>
                      <p className="text-sm text-gray-600">20 Year Term</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="text-blue-500" size={20} />
                        <h4 className="font-medium">Coverage Amount</h4>
                      </div>
                      <p className="text-sm text-gray-600">$500,000</p>
                    </div>
                  </div>

                  {/* Beneficiary Information */}
                  <div>
                    <h4 className="font-medium mb-4">Beneficiary Details</h4>
                    <div className="space-y-3">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium">Primary Beneficiary</h5>
                          <span className="text-sm text-gray-500">80%</span>
                        </div>
                        <p className="text-sm text-gray-600">Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Relationship: Spouse</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium">Secondary Beneficiary</h5>
                          <span className="text-sm text-gray-500">20%</span>
                        </div>
                        <p className="text-sm text-gray-600">Michael Johnson</p>
                        <p className="text-sm text-gray-500">Relationship: Son</p>
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
                <CardTitle className="text-xl">Policy Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                    <FileText className="text-blue-500" />
                    <div>
                      <p className="font-medium">Policy Documents</p>
                      <p className="text-sm text-gray-600">View and download</p>
                    </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg">
                    <Settings className="text-blue-500" />
                    <div>
                      <p className="font-medium">Update Beneficiaries</p>
                      <p className="text-sm text-gray-600">Manage recipients</p>
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

export default LifeInsurancePage; 