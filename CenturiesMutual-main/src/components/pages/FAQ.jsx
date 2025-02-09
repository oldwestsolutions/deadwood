import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      category: "Insurance Services",
      questions: [
        {
          q: "What types of insurance do you offer?",
          a: "We offer a comprehensive range of insurance services including health insurance, life insurance, and specialized coverage options tailored to your needs."
        },
        {
          q: "How do I file an insurance claim?",
          a: "Claims can be filed through our client portal or by contacting your dedicated insurance agent. We strive to make the process as smooth as possible."
        },
        {
          q: "Can I modify my insurance coverage?",
          a: "Yes, you can modify your coverage during open enrollment periods or when you experience qualifying life events."
        }
      ]
    },
    {
      category: "Tax Services",
      questions: [
        {
          q: "What tax preparation services do you provide?",
          a: "We offer comprehensive tax preparation services for individuals and businesses, including 1040 filing, tax planning, and consultation."
        },
        {
          q: "When should I start preparing my taxes?",
          a: "We recommend gathering documents early in the year and scheduling a consultation at least a month before the filing deadline."
        }
      ]
    },
    {
      category: "Account Management",
      questions: [
        {
          q: "How do I access my account?",
          a: "You can access your account through our secure client portal using your email and password."
        },
        {
          q: "What if I forget my password?",
          a: "You can reset your password through the 'Forgot Password' link on the login page or contact our support team."
        }
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
          <h1 className="text-4xl font-bold mb-8 font-serif text-[#2c4739]">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            {faqs.map((category, categoryIndex) => (
              <Card key={category.category} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-[#2c4739]">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div key={questionIndex} className="border rounded-lg">
                        <button
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                          <span className="font-medium text-[#2c4739]">{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-[#2c4739]" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-[#2c4739]" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="p-4 pt-0 text-gray-600">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 