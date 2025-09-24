
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Services() {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'IT Services - Federal & Enterprise Solutions | Mitaja Corp';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Comprehensive IT services for federal government and enterprise clients. Cybersecurity, cloud services, web development, mobile apps, data analytics, and managed IT solutions.');

    // Add Service Schema.org JSON-LD
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "Organization",
        "name": "Mitaja Corp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8115 Maple Lawn Blvd",
          "addressLocality": "Fulton",
          "addressRegion": "MD",
          "postalCode": "20759",
          "addressCountry": "US"
        }
      },
      "serviceType": "IT Services",
      "description": "Comprehensive IT services for federal government and enterprise clients including cybersecurity, cloud services, web development, mobile applications, data analytics, and managed IT solutions.",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      }
    });
    
    document.head.appendChild(schemaScript);
    
    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  const services = [
    {
      id: 'cybersecurity',
      icon: 'ri-shield-check-line',
      title: 'Cybersecurity Services',
      description: 'Government-grade security solutions with compliance-driven cybersecurity frameworks, threat protection, and risk management tailored for federal and enterprise environments.',
      features: [
        'Security Audits & Assessments',
        'Compliance Management (FISMA, NIST, SOC)',
        'Threat Monitoring & Response',
        'Risk Assessment & Mitigation',
        'Penetration Testing',
        'Security Training & Awareness'
      ],
      benefits: [
        'Federal compliance readiness',
        'Proactive threat detection',
        'Reduced security risks',
        'Enhanced data protection'
      ],
      color: 'from-red-500 to-pink-500',
      image: 'https://readdy.ai/api/search-image?query=Professional%20cybersecurity%20operations%20center%20with%20multiple%20monitors%20displaying%20security%20dashboards%2C%20threat%20monitoring%20systems%2C%20and%20compliance%20frameworks.%20Government-grade%20security%20infrastructure%20with%20blue%20and%20red%20color%20schemes%2C%20representing%20federal%20IT%20security%20standards%20and%20enterprise%20protection%20protocols&width=600&height=400&seq=cybersecurity-service&orientation=landscape'
    },
    {
      id: 'cloud',
      icon: 'ri-cloud-line',
      title: 'Cloud Services',
      description: 'Secure cloud hosting, migration, and DevSecOps implementations with enterprise-grade infrastructure designed for government and private sector requirements.',
      features: [
        'Cloud Migration & Strategy',
        'DevSecOps Implementation',
        'Secure Cloud Hosting',
        'Infrastructure Management',
        'Multi-Cloud Solutions',
        'Disaster Recovery Planning'
      ],
      benefits: [
        'Scalable infrastructure',
        'Enhanced security controls',
        'Cost optimization',
        'Improved reliability'
      ],
      color: 'from-blue-500 to-cyan-500',
      image: 'https://readdy.ai/api/search-image?query=Modern%20cloud%20infrastructure%20visualization%20with%20servers%2C%20data%20centers%2C%20and%20network%20connections.%20Professional%20blue%20and%20cyan%20color%20scheme%20representing%20secure%20cloud%20computing%2C%20DevSecOps%20workflows%2C%20and%20enterprise-grade%20hosting%20solutions%20for%20government%20and%20business%20applications&width=600&height=400&seq=cloud-service&orientation=landscape'
    },
    {
      id: 'maintenance',
      icon: 'ri-tools-line',
      title: 'Maintenance & Managed IT',
      description: 'Comprehensive IT maintenance and managed services providing ongoing support, system optimization, and proactive monitoring for mission-critical systems.',
      features: [
        '24/7 System Monitoring',
        'Proactive Maintenance',
        'System Updates & Patches',
        'Performance Optimization',
        'Technical Support',
        'Asset Management'
      ],
      benefits: [
        'Reduced downtime',
        'Optimized performance',
        'Predictable costs',
        'Expert support'
      ],
      color: 'from-green-500 to-emerald-500',
      image: 'https://readdy.ai/api/search-image?query=IT%20maintenance%20and%20monitoring%20dashboard%20showing%20system%20performance%20metrics%2C%20server%20status%20indicators%2C%20and%20network%20health%20displays.%20Professional%20green%20and%20emerald%20color%20scheme%20representing%20managed%20IT%20services%2C%2024%2F7%20monitoring%2C%20and%20technical%20support%20for%20enterprise%20systems&width=600&height=400&seq=maintenance-service&orientation=landscape'
    },
    {
      id: 'web-development',
      icon: 'ri-window-line',
      title: 'Web Application Development',
      description: 'Custom web applications built with security-first principles, scalable architecture, and compliance requirements for government and enterprise use.',
      features: [
        'Custom Web Development',
        'Secure Architecture Design',
        'API Integration & Development',
        'Performance Optimization',
        'Mobile-Responsive Design',
        'Security Implementation'
      ],
      benefits: [
        'Tailored solutions',
        'Enhanced user experience',
        'Scalable architecture',
        'Security compliance'
      ],
      color: 'from-purple-500 to-violet-500',
      image: 'https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20with%20code%20editors%2C%20responsive%20design%20mockups%2C%20and%20application%20architecture%20diagrams.%20Purple%20and%20violet%20color%20scheme%20representing%20custom%20web%20application%20development%2C%20secure%20coding%20practices%2C%20and%20enterprise%20software%20solutions&width=600&height=400&seq=web-dev-service&orientation=landscape'
    },
    {
      id: 'mobile-development',
      icon: 'ri-smartphone-line',
      title: 'Mobile Application Development',
      description: 'Enterprise mobile solutions designed for government and private organizations with security focus, cross-platform compatibility, and user-centric design.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Solutions',
        'Security Integration',
        'Enterprise Mobility Management',
        'App Store Deployment'
      ],
      benefits: [
        'Multi-platform reach',
        'Enhanced mobility',
        'Secure data handling',
        'User engagement'
      ],
      color: 'from-orange-500 to-red-500',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20application%20development%20environment%20showing%20smartphones%2C%20tablets%2C%20and%20development%20tools%20with%20app%20interfaces%20and%20security%20features.%20Orange%20and%20red%20color%20scheme%20representing%20enterprise%20mobile%20solutions%2C%20cross-platform%20development%2C%20and%20secure%20mobile%20applications&width=600&height=400&seq=mobile-dev-service&orientation=landscape'
    },
    {
      id: 'data-analytics',
      icon: 'ri-bar-chart-line',
      title: 'Data & Analytics',
      description: 'Advanced data analytics and business intelligence solutions providing insights for informed decision-making and strategic planning.',
      features: [
        'Business Intelligence Solutions',
        'Data Visualization & Dashboards',
        'Predictive Analytics',
        'Custom Reporting Solutions',
        'Data Integration & ETL',
        'Performance Metrics & KPIs'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved insights',
        'Performance tracking',
        'Strategic planning'
      ],
      color: 'from-teal-500 to-green-500',
      image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20dashboard%20with%20charts%2C%20graphs%2C%20and%20business%20intelligence%20visualizations.%20Teal%20and%20green%20color%20scheme%20representing%20advanced%20analytics%2C%20predictive%20modeling%2C%20and%20data-driven%20insights%20for%20enterprise%20decision%20making%20and%20strategic%20planning&width=600&height=400&seq=data-analytics-service&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-32 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-service-line"></i>
                </div>
                Our Services
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Comprehensive IT Solutions for{' '}
                <span className="text-teal-600">Federal & Enterprise</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From cybersecurity and cloud infrastructure to custom applications and data analytics, 
                we deliver secure, scalable, and compliant technology solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={feature}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <div className="w-4 h-4 flex items-center justify-center mr-3">
                            <i className="ri-check-line text-teal-500 text-xs"></i>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li 
                          key={benefit}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <div className="w-4 h-4 flex items-center justify-center mr-3">
                            <i className="ri-arrow-right-s-line text-teal-500 text-xs"></i>
                          </div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center text-sm text-slate-500">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-shield-check-line text-teal-500"></i>
                      </div>
                      Federal & Enterprise Ready
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
