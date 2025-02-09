import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { CreditCard, Download, Plus } from 'lucide-react';

const BillingSettings = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FE] pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Billing & Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Payment Methods</h3>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg">
                      <Plus className="h-4 w-4" />
                      Add New Card
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <CreditCard className="text-blue-500" />
                        <div>
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-sm text-gray-600">Expires 04/2024</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 text-xs text-blue-600 bg-blue-50 rounded-full">
                        Default
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing History</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">March 2024</p>
                        <p className="text-sm text-gray-600">Health Insurance Premium</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-medium">$199.00</span>
                        <button className="text-blue-600">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">February 2024</p>
                        <p className="text-sm text-gray-600">Health Insurance Premium</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-medium">$199.00</span>
                        <button className="text-blue-600">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BillingSettings; 