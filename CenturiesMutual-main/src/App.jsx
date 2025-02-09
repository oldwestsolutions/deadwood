import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoginModal from './components/login-preview';
import InsuranceDashboard from './components/insurance-dashboard';
import HomePage from './components/HomePage';
import TaxFilingPage from './components/pages/TaxFilingPage';
import HealthInsurancePage from './components/pages/HealthInsurancePage';
import LifeInsurancePage from './components/pages/LifeInsurancePage';
import ProfileSettings from './components/pages/ProfileSettings';
import SecuritySettings from './components/pages/SecuritySettings';
import BillingSettings from './components/pages/BillingSettings';
import TaxServices from './components/pages/BrokerServices/TaxServices';
import InsuranceServices from './components/pages/BrokerServices/InsuranceServices';
import Documents from './components/pages/Documents';
import FAQ from './components/pages/FAQ';
import Newsletter from './components/pages/Newsletter';
import Careers from './components/pages/Careers';
import LearnMore from './components/pages/LearnMore';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import PageTransition from './components/layout/PageTransition';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    return localStorage.getItem('auth_token') !== null;
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return children;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <InsuranceDashboard />
          </ProtectedRoute>
        } />
        <Route path="/1040-filing" element={<TaxFilingPage />} />
        <Route path="/health-insurance" element={<HealthInsurancePage />} />
        <Route path="/life-insurance" element={<LifeInsurancePage />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <ProfileSettings />
          </ProtectedRoute>
        } />
        <Route path="/security" element={
          <ProtectedRoute>
            <SecuritySettings />
          </ProtectedRoute>
        } />
        <Route path="/billing" element={
          <ProtectedRoute>
            <BillingSettings />
          </ProtectedRoute>
        } />
        <Route path="/tax-services" element={<TaxServices />} />
        <Route path="/insurance-services" element={<InsuranceServices />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router basename="/centuriesmutual">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/tax-services" element={<TaxServices />} />
        <Route path="/insurance-services" element={<InsuranceServices />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App; 