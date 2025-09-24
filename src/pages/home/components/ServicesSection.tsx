
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const services = [
    {
      id: 'cybersecurity',
      icon: 'ri-shield-check-line',
      title: 'Cybersecurity',
      description: 'Government-grade security solutions with compliance-driven cybersecurity frameworks and threat protection.',
      features: ['Security Audits', 'Compliance Management', 'Threat Monitoring', 'Risk Assessment'],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'cloud',
      icon: 'ri-cloud-line',
      title: 'Cloud Services',
      description: 'Secure hosting, cloud migration, and DevSecOps implementations with enterprise-grade infrastructure.',
      features: ['Cloud Migration', 'DevSecOps', 'Secure Hosting', 'Infrastructure Management'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'maintenance',
      icon: 'ri-tools-line',
      title: 'Maintenance & Managed IT',
      description: 'Comprehensive IT maintenance and managed services for ongoing support and system optimization.',
      features: ['24/7 Monitoring', 'System Updates', 'Performance Optimization', 'Technical Support'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'web-development',
      icon: 'ri-window-line',
      title: 'Web Application Development',
      description: 'Custom web applications built with security-first principles and scalable architecture.',
      features: ['Custom Development', 'Secure Architecture', 'API Integration', 'Performance Optimization'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'mobile-development',
      icon: 'ri-smartphone-line',
      title: 'Mobile Application Development',
      description: 'Enterprise mobile solutions designed for government and private organizations with security focus.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'Security Integration'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'data-analytics',
      icon: 'ri-bar-chart-line',
      title: 'Data & Analytics',
      description: 'Advanced data analytics and business intelligence solutions for informed decision-making.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Reporting Solutions'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-service-line"></i>
            </div>
            Our Services
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Comprehensive IT Solutions for{' '}
            <span className="text-teal-600">Federal & Enterprise</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From cybersecurity to cloud infrastructure, we deliver secure, scalable, 
            and compliant technology solutions tailored to your organization's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r ${service.color} opacity-20 group-hover:scale-150 transition-transform duration-300`}></div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={feature}
                    className="flex items-center text-sm text-slate-600"
                    style={{ animationDelay: `${(index * 100) + (featureIndex * 50)}ms` }}
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-teal-500 text-xs"></i>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              View All Services
              <div className="w-5 h-5 inline-flex items-center justify-center ml-2">
                <i className="ri-arrow-right-line"></i>
              </div>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
