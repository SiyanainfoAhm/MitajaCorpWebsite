
export default function WhyChooseSection() {
  const reasons = [
    {
      icon: 'ri-government-line',
      title: 'Federal Readiness',
      description: 'Deep expertise in government IT requirements, compliance standards, and federal procurement processes.',
      stats: 'Gov-Certified'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Secure Frameworks',
      description: 'Implementation of government-grade security protocols and enterprise-level cybersecurity measures.',
      stats: 'SOC Compliant'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Scalable Infrastructure',
      description: 'Cloud-native solutions designed to grow with your organization while maintaining security and performance.',
      stats: '99.9% Uptime'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Long-term Support',
      description: 'Comprehensive maintenance services and dedicated technical support for sustained operational excellence.',
      stats: '24/7 Support'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-award-line"></i>
            </div>
            Why Choose Mitaja Corp
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Your Trusted Partner for{' '}
            <span className="text-teal-600">Mission-Critical</span> IT Solutions
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We combine federal expertise, enterprise-grade security, and scalable infrastructure 
            to deliver IT solutions that meet the highest standards of reliability and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-teal-200">
                  <i className={`${reason.icon} text-3xl text-teal-600`}></i>
                </div>
                <div className="absolute -top-2 -right-8 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {reason.stats}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}