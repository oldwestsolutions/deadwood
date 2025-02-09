import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ArrowLeft, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <Shield className="h-8 w-8 text-[#2c4739]" />
            <h1 className="text-4xl font-bold font-serif text-[#2c4739]">Privacy Policy</h1>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed">
                  We collect information that you provide directly to us, including personal information such as your name, email address, phone number, and any other information you choose to provide. We also collect information automatically when you use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our services</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Information Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to access, update, or delete your personal information. You can exercise these rights by contacting us through the provided contact information.
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

export default PrivacyPolicy; 