import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setSubscribed(true);
  };

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
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-center">
                <h1 className="text-4xl font-bold font-serif text-[#2c4739]">Newsletter Subscription</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <p className="text-gray-600">Stay informed with our latest updates on insurance, tax services, and financial planning.</p>
              </div>

              {subscribed ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Thank You for Subscribing!</h2>
                  <p className="text-gray-600">You'll receive our next newsletter in your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2c4739] focus:border-[#2c4739] pl-10"
                        placeholder="Enter your email"
                        required
                      />
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2c4739] text-white py-2 rounded-lg hover:bg-[#1f332a] transition-colors"
                  >
                    Subscribe to Newsletter
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    You can unsubscribe at any time. View our Privacy Policy.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 