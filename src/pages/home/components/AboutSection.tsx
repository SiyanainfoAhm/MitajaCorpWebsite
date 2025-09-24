
import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function AboutSection() {
  const capabilities = [
    {
      icon: 'ri-government-line',
      title: 'Federal Expertise',
      description: 'Deep understanding of government IT requirements and compliance standards'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security-First',
      description: 'Government-grade security protocols and enterprise-level protection'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your organization\'s needs'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Long-term Support',
      description: 'Dedicated maintenance and ongoing technical support services'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-building-line"></i>
              </div>
              About Mitaja Corp
            </div>
            
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Trusted IT Partner for{' '}
              <span className="text-teal-600">Government & Enterprises</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mitaja Corp specializes in delivering secure, scalable, and compliant IT solutions 
              tailored for federal government agencies and enterprise organizations. Our expertise 
              spans cybersecurity, cloud infrastructure, and comprehensive IT maintenance services.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              With a focus on government-grade security frameworks and federal compliance standards, 
              we ensure your digital infrastructure meets the highest security requirements while 
              maintaining operational excellence and long-term reliability.
            </p>

            <Link to="/about">
              <Button variant="outline" size="lg" className="whitespace-nowrap">
                Learn More About Us
                <div className="w-5 h-5 flex items-center justify-center ml-2">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className="flex items-start p-6 bg-slate-50 rounded-xl hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <i className={`${capability.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
