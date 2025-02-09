import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { FileText, Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Documents = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#F8F9FE] pt-24">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-[#2c4739] hover:text-[#1f332a]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 font-serif text-[#2c4739]">Important Documents</h1>
          
          <div className="grid gap-6">
            {[
              {
                category: "Insurance Forms",
                documents: [
                  { name: "Health Insurance Claim Form", size: "245 KB" },
                  { name: "Life Insurance Application", size: "180 KB" },
                  { name: "Insurance Policy Change Request", size: "156 KB" }
                ]
              },
              {
                category: "Tax Documents",
                documents: [
                  { name: "W-9 Form", size: "125 KB" },
                  { name: "1099 Information", size: "198 KB" },
                  { name: "Tax Preparation Checklist", size: "167 KB" }
                ]
              },
              {
                category: "Client Resources",
                documents: [
                  { name: "Privacy Policy", size: "145 KB" },
                  { name: "Terms of Service", size: "178 KB" },
                  { name: "Client Agreement", size: "234 KB" }
                ]
              }
            ].map((category) => (
              <Card key={category.category} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-[#2c4739]">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.documents.map((doc) => (
                      <div key={doc.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-[#2c4739]" />
                          <span>{doc.name}</span>
                          <span className="text-sm text-gray-500">({doc.size})</span>
                        </div>
                        <button className="text-[#2c4739] hover:text-[#1f332a]">
                          <Download className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
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

export default Documents; 