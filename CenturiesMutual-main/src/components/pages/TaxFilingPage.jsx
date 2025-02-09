import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { FileText, Upload, Download, Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TaxFilingPage = () => {
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
                  <CardTitle>1040 Tax Filing</CardTitle>
                  <span className="text-blue-500 text-sm font-medium px-2 py-0.5 bg-blue-50 rounded-full">
                    2024 Tax Year
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Status Section */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="text-blue-500" />
                      <div>
                        <h4 className="font-medium">Filing Deadline</h4>
                        <p className="text-sm text-gray-600">April 15, 2024</p>
                      </div>
                    </div>
                    <span className="text-green-500 text-sm font-medium px-3 py-1 bg-green-50 rounded-full">
                      On Track
                    </span>
                  </div>

                  {/* Document Upload Section */}
                  <div>
                    <h4 className="font-medium mb-4">Required Documents</h4>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="text-gray-400" />
                          <div>
                            <p className="font-medium">W-2 Form</p>
                            <p className="text-sm text-gray-600">Employment Income</p>
                          </div>
                        </div>
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                          <Upload className="h-4 w-4" />
                          <span className="text-sm">Upload</span>
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="text-gray-400" />
                          <div>
                            <p className="font-medium">1099-INT</p>
                            <p className="text-sm text-gray-600">Interest Income</p>
                          </div>
                        </div>
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                          <Upload className="h-4 w-4" />
                          <span className="text-sm">Upload</span>
                        </button>
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
                <CardTitle className="text-xl">Previous Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium">2023 Tax Return</p>
                      <p className="text-sm text-gray-600">Filed: Mar 15, 2023</p>
                    </div>
                    <Download className="text-gray-400 hover:text-blue-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium">2022 Tax Return</p>
                      <p className="text-sm text-gray-600">Filed: Apr 1, 2022</p>
                    </div>
                    <Download className="text-gray-400 hover:text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxFilingPage; 