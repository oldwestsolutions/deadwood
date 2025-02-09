import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { 
  Search, Upload, 
  HeartPulse, 
  Umbrella,
  UserCog,
  FileText,
  Coins,
  Settings,
  Bell,
  Mail,
  ChevronDown,
  LogOut,
} from 'lucide-react';

const InsuranceDashboard = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Health Insurance Renewal",
      message: "Your health insurance policy has been renewed successfully",
      time: "5 minutes ago",
      type: "success"
    },
    {
      id: 2,
      title: "Tax Document Required",
      message: "Please upload your W-2 form for tax filing",
      time: "1 hour ago",
      type: "warning"
    },
    {
      id: 3,
      title: "Agent Message",
      message: "Your agent has requested a policy review meeting",
      time: "2 hours ago",
      type: "info"
    }
  ]);

  // Add state for active mobile tab
  const [activeTab, setActiveTab] = useState('policies');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE]">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/cmlogotrans.png" alt="Logo" className="h-8 w-auto" />
            </div>
            
            {/* Profile and Actions Section */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Mail className="h-5 w-5 text-gray-600" />
              </button>
              
              {/* Profile Menu */}
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    JD
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">Premium Member</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-gray-500">john.doe@example.com</p>
                    </div>
                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile Settings
                    </a>
                    <a href="/security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Security
                    </a>
                    <a href="/billing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Billing
                    </a>
                    <div className="border-t mt-1">
                      <button 
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Updated Mobile Navigation Tabs */}
      <div className="md:hidden bg-white border-b sticky top-16 z-10">
        <div className="flex justify-around">
          <button 
            onClick={() => setActiveTab('policies')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'policies' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500'
            }`}
          >
            Policies
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'notifications' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500'
            }`}
          >
            Notifications
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'messages' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500'
            }`}
          >
            Messages
          </button>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr_300px] gap-6">
          {/* Left Sidebar - Policies */}
          <div className={`space-y-4 order-2 md:order-1 ${
            activeTab !== 'policies' ? 'hidden md:block' : ''
          }`}>
            {/* Agent of Record Card - Mobile */}
            <div className="md:hidden">
              <Card className="bg-white p-4 text-center">
                <div className="flex items-center gap-2 mb-2">
                  <UserCog className="text-purple-500" size={20} />
                  <span className="text-gray-500 text-xs font-medium px-2 py-0.5 bg-gray-100 rounded-full">Available</span>
                </div>
                <h3 className="font-semibold mb-1">Agent of Record</h3>
                <p className="text-sm text-gray-600 mb-2">John Smith</p>
                <p className="text-xs text-gray-500">Your Dedicated Agent</p>
                <p className="text-xs text-gray-400 mt-2">Contact:</p>
                <p className="text-xs text-gray-400">john.smith@agency.com</p>
              </Card>
            </div>

            {/* Insurance Cards */}
            <Card className="bg-white p-4 text-center group relative">
              <div className="flex items-center justify-center gap-2 mb-2">
                <HeartPulse className="text-red-500" size={20} />
                <span className="text-green-500 text-xs font-medium px-2 py-0.5 bg-green-50 rounded-full">Active</span>
              </div>
              <h3 className="font-semibold mb-1">Health Insurance</h3>
              <p className="text-sm text-gray-600 mb-2">Active</p>
              <p className="text-xs text-gray-500">Comprehensive Health Coverage</p>
              <p className="text-xs text-gray-400 mt-2">Policy: POL-2024-001</p>
              <p className="text-xs text-gray-400">Valid until: Dec 2025</p>
              {/* Hover Information */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center invisible group-hover:visible">
                <h4 className="font-semibold text-blue-600 mb-2">Coverage Details</h4>
                <ul className="space-y-2 text-sm">
                  <li>Deductible: $1,500</li>
                  <li>Out-of-pocket max: $5,000</li>
                  <li>Primary Care: $25 copay</li>
                  <li>Specialist: $50 copay</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-white p-4 text-center group relative">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Umbrella className="text-blue-500" size={20} />
                <span className="text-green-500 text-xs font-medium px-2 py-0.5 bg-green-50 rounded-full">Active</span>
              </div>
              <h3 className="font-semibold mb-1">Life Insurance</h3>
              <p className="text-sm text-gray-600 mb-2">Active</p>
              <p className="text-xs text-gray-500">Term Life Policy</p>
              <p className="text-xs text-gray-400 mt-2">Policy: POL-2024-002</p>
              <p className="text-xs text-gray-400">Valid until: Jan 2026</p>
              {/* Hover Information */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center invisible group-hover:visible">
                <h4 className="font-semibold text-blue-600 mb-2">Policy Details</h4>
                <ul className="space-y-2 text-sm">
                  <li>Coverage: $500,000</li>
                  <li>Term: 20 Years</li>
                  <li>Premium: $45/month</li>
                  <li>Next Payment: Apr 1, 2024</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-white p-4 text-center group relative">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="text-yellow-500" size={20} />
                <span className="text-green-500 text-xs font-medium px-2 py-0.5 bg-green-50 rounded-full">Active</span>
              </div>
              <h3 className="font-semibold mb-1">Ether Bonds</h3>
              <p className="text-sm text-gray-600 mb-2">Active</p>
              <p className="text-xs text-gray-500">Digital Asset Holdings</p>
              <p className="text-xs text-gray-400 mt-2">Portfolio: ETH-2024-003</p>
              <p className="text-xs text-gray-400">Maturity: Dec 2026</p>
              {/* Hover Information */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center invisible group-hover:visible">
                <h4 className="font-semibold text-blue-600 mb-2">Bond Details</h4>
                <ul className="space-y-2 text-sm">
                  <li>Principal: 10 ETH</li>
                  <li>APY: 4.5%</li>
                  <li>Term: 2 Years</li>
                  <li>Next Interest: May 1, 2024</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-white p-4 text-center group relative">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FileText className="text-green-500" size={20} />
                <span className="text-blue-500 text-xs font-medium px-2 py-0.5 bg-blue-50 rounded-full">Filed</span>
              </div>
              <h3 className="font-semibold mb-1">Tax Filing Status</h3>
              <p className="text-sm text-gray-600 mb-2">Completed</p>
              <p className="text-xs text-gray-500">Annual Tax Filing</p>
              <p className="text-xs text-gray-400 mt-2">Last filed: March 15, 2024</p>
              {/* Hover Information */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center invisible group-hover:visible">
                <h4 className="font-semibold text-blue-600 mb-2">Filing Details</h4>
                <ul className="space-y-2 text-sm">
                  <li>Tax Year: 2023</li>
                  <li>Status: Completed</li>
                  <li>Refund: $1,250</li>
                  <li>Processing Time: 2-3 weeks</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Middle Section - Notifications */}
          <div className={`order-1 md:order-2 ${
            activeTab !== 'notifications' ? 'hidden md:block' : ''
          }`}>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-3 p-4 rounded-lg border">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'success' ? 'bg-green-500' :
                        notification.type === 'warning' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`} />
                      <div>
                        <h4 className="font-medium">{notification.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section - Messages */}
          <div className={`space-y-4 order-3 ${
            activeTab !== 'messages' ? 'hidden md:block' : ''
          }`}>
            {/* Agent of Record - Desktop only */}
            <div className="hidden md:block">
              <Card className="bg-white p-4">
                <div className="flex items-center gap-2 mb-2">
                  <UserCog className="text-purple-500" size={20} />
                  <span className="text-gray-500 text-xs font-medium px-2 py-0.5 bg-gray-100 rounded-full">Available</span>
                </div>
                <h3 className="font-semibold mb-1">Agent of Record</h3>
                <p className="text-sm text-gray-600 mb-2">John Smith</p>
                <p className="text-xs text-gray-500">Your Dedicated Agent</p>
                <p className="text-xs text-gray-400 mt-2">Contact:</p>
                <p className="text-xs text-gray-400">john.smith@agency.com</p>
              </Card>
            </div>

            {/* Messages Card */}
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Messages</CardTitle>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                    Unread
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 rounded-full">
                    All
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Dr. Sarah Wilson</h4>
                      <span className="text-xs text-gray-400">2m ago</span>
                    </div>
                    <p className="text-sm font-medium">Health Policy Update</p>
                    <p className="text-sm text-gray-600 mt-1">Your annual health checkup is due next month. Please schedule at your earliest convenience.</p>
                  </div>
                  <div className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Tax Department</h4>
                      <span className="text-xs text-gray-400">1h ago</span>
                    </div>
                    <p className="text-sm font-medium">Tax Filing Confirmation</p>
                    <p className="text-sm text-gray-600 mt-1">Your tax documents have been received and are being processed.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InsuranceDashboard; 