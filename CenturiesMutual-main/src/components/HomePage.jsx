import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FileText, Heart, Umbrella } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll handler for nav
    let lastScroll = 0;
    const handleScroll = () => {
      const header = document.querySelector('.nav-header');
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 0) {
        header.classList.remove('nav-hidden');
        return;
      }
      
      if (currentScroll > lastScroll && !header.classList.contains('nav-hidden')) {
        header.classList.add('nav-hidden');
      } else if (currentScroll < lastScroll && header.classList.contains('nav-hidden')) {
        header.classList.remove('nav-hidden');
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="nav-header bg-white shadow-lg fixed w-full z-50 transition-transform duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-6">
              <img src="/cmlogotrans.png" alt="Centuries Mutual Logo" className="h-20 w-auto" />
              <span className="brand-text text-4xl font-bold text-primary">Centuries Mutual</span>
            </div>
            <div>
              <button 
                onClick={() => navigate('/login')} 
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all duration-500 hover:-translate-y-1 hover:shadow-lg animate-[fade-in_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]"
              >
                Client Portal
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-[slide-in_1s_ease-out]">
                Secure Your Financial Future
                </h1>
              <p className="text-xl mb-8 font-light animate-[fade-in_1s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                Expert wealth management solutions tailored to your unique goals and aspirations.
              </p>
              <button 
                onClick={() => navigate('/learn-more')}
                className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-cream transition-all duration-500 hover:-translate-y-1 hover:shadow-lg animate-[fade-in_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards] font-semibold"
              >
                Learn More
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 animate-[fade-in_1s_ease-out_0.7s] opacity-0 [animation-fill-mode:forwards]">
              <img src="/buffalohero.jpeg" alt="Wealth Management" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Broker Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              onClick={() => navigate('/tax-services')}
              className="service-card cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-semibold text-primary text-center">1040 Filing</h3>
              <p className="text-gray-600 text-center mt-2">Professional tax preparation services</p>
            </div>
            <div 
              onClick={() => navigate('/insurance-services')}
              className="service-card cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-semibold text-primary text-center">Health Insurance</h3>
              <p className="text-gray-600 text-center mt-2">Comprehensive health coverage options</p>
            </div>
            <div 
              onClick={() => navigate('/insurance-services')}
              className="service-card cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Umbrella className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-semibold text-primary text-center">Life Insurance</h3>
              <p className="text-gray-600 text-center mt-2">Protect your family's future</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <img src="/cmdeer_1_75.jpeg" alt="About Us" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2 md:pl-14">
              <h2 className="text-5xl font-extrabold mb-8 text-gray-900">About Us</h2>
              <p className="text-gray-700 text-2xl mb-10 leading-relaxed">
                With over 25 years of experience in wealth management, we've helped countless clients achieve their financial goals through personalized strategies and expert guidance.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-4xl font-extrabold text-primary mb-3">$2B+</h4>
                  <p className="text-gray-700 text-xl">Assets Under Management</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-primary mb-3">1,000+</h4>
                  <p className="text-gray-700 text-xl">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-6">
                <img src="/cmlogotrans.png" alt="Centuries Mutual Logo" className="h-20 w-auto" />
                <h3 className="brand-text text-4xl font-semibold mb-4">Centuries Mutual</h3>
              </div>
              <p className="text-gray-400">Your trusted partner in wealth management.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Company</h4>
              <ul className="space-y-2">
                <li><Link to="/documents" className="text-gray-400 hover:text-white transition-colors">Documents</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/newsletter" className="text-gray-400 hover:text-white transition-colors">Newsletter</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>6000 Ross Perot</li>
                <li>Dallas, TX 75235</li>
                <li>+1 (888) 324-6642</li>
                <li>support@centuriesmutual.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Centuries Mutual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 