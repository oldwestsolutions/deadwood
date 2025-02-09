import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ArrowLeft, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <FileText className="h-8 w-8 text-[#2c4739]" />
            <h1 className="text-4xl font-bold font-serif text-[#2c4739]">Terms of Service</h1>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Use License</h2>
                <p className="text-gray-600 leading-relaxed">
                  Permission is granted to temporarily access our services for personal, non-commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mt-3">
                  <li>Modify or copy our materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Transfer the materials to another person</li>
                  <li>Attempt to reverse engineer any software contained in our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Limitations</h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall Centuries Mutual or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-gray-600 mb-8">
            <p>Last updated: March 1, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 