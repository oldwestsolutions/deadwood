import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Briefcase, MapPin, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: "Insurance Agent",
      location: "Dallas, TX",
      type: "Full-time",
      description: "Looking for experienced insurance agents to join our growing team.",
      requirements: [
        "5+ years of insurance sales experience",
        "Licensed in Property & Casualty",
        "Strong communication skills",
        "Self-motivated with proven track record"
      ]
    },
    {
      title: "Tax Consultant",
      location: "Dallas, TX",
      type: "Full-time",
      description: "Seeking qualified tax professionals for the upcoming tax season.",
      requirements: [
        "CPA certification",
        "3+ years tax preparation experience",
        "Knowledge of tax laws and regulations",
        "Experience with tax software"
      ]
    },
    {
      title: "Client Service Representative",
      location: "Remote",
      type: "Full-time",
      description: "Join our client service team to provide exceptional support.",
      requirements: [
        "2+ years customer service experience",
        "Strong problem-solving skills",
        "Excellent communication abilities",
        "Insurance or financial background preferred"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FE] pt-24">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center gap-2 text-[#2c4739] hover:text-[#1f332a]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-serif text-[#2c4739]">Join Our Team</h1>
            <p className="text-gray-600">Build your career with a company that values growth, innovation, and excellence.</p>
          </div>

          <div className="grid gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-[#2c4739] mb-2">{position.title}</h2>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-[#2c4739] text-white px-6 py-2 rounded-lg hover:bg-[#1f332a] transition-colors flex items-center gap-2 text-sm">
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-4">{position.description}</p>

                  <div>
                    <h3 className="font-semibold mb-2 text-[#2c4739]">Requirements:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers; 