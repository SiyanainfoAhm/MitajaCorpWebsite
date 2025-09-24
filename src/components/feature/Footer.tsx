
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const services = [
    { name: 'Cybersecurity', href: '/services' },
    { name: 'Cloud & Infrastructure', href: '/services' },
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Development', href: '/services' },
    { name: 'Data & Analytics', href: '/services' },
    { name: 'Managed IT Services', href: '/services' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Trusted IT partner for federal government and enterprise clients. Specializing in cybersecurity, 
              cloud services, and compliance-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm cursor-pointer flex items-center"
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-arrow-right-s-line text-xs"></i>
                    </div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm cursor-pointer flex items-center"
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-arrow-right-s-line text-xs"></i>
                    </div>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                  <i className="ri-map-pin-line text-teal-400"></i>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Address</p>
                  <p>8115 Maple Lawn Blvd</p>
                  <p>Fulton, MD 20759, USA</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-time-line text-teal-400"></i>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Business Hours</p>
                  <p>Mon–Fri / 8:00–17:00 EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated with IT Security News
              </h3>
              <p className="text-gray-300 text-sm">
                Get the latest insights on cybersecurity, cloud solutions, and federal IT compliance delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer text-sm">
                Subscribe
                <div className="w-4 h-4 inline-flex items-center justify-center ml-2">
                  <i className="ri-mail-send-line"></i>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <p className="text-gray-400 text-sm">
              © 2025 Mitaja Corporation. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
