
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set page title and meta description
    document.title = 'About Us - Federal IT Expertise | Mitaja Corp';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Learn about Mitaja Corp - your trusted IT partner for federal government and enterprise clients. Specializing in cybersecurity, cloud services, and compliance-driven solutions since our founding.');

    // Add AboutPage Schema.org JSON-LD
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Mitaja Corp",
        "description": "Trusted IT partner for federal government and enterprise clients specializing in cybersecurity, cloud services, and compliance-driven solutions.",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8115 Maple Lawn Blvd",
          "addressLocality": "Fulton",
          "addressRegion": "MD",
          "postalCode": "20759",
          "addressCountry": "US"
        },
        "serviceArea": {
          "@type": "Country",
          "name": "United States"
        },
        "knowsAbout": [
          "Federal IT Services",
          "Government Cybersecurity",
          "Enterprise Cloud Solutions",
          "IT Compliance",
          "DevSecOps",
          "Managed IT Services"
        ]
      }
    });
    
    document.head.appendChild(schemaScript);
    
    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const handleServicesClick = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Security First',
      description: 'Every solution we deliver is built with government-grade security protocols and enterprise-level protection standards.'
    },
    {
      icon: 'ri-award-line',
      title: 'Excellence',
      description: 'We maintain the highest standards of technical excellence and service delivery for all our federal and enterprise clients.'
    },
    {
      icon: 'ri-team-line',
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, serving as their trusted technology partner for mission-critical systems.'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We stay at the forefront of technology trends while ensuring all innovations meet strict compliance and security requirements.'
    }
  ];

  const expertise = [
    {
      area: 'Federal IT Compliance',
      description: 'Deep understanding of federal regulations, procurement processes, and government IT standards including FISMA, FedRAMP, and NIST frameworks.'
    },
    {
      area: 'Enterprise Security',
      description: 'Comprehensive cybersecurity solutions including threat assessment, security audits, incident response, and ongoing security monitoring.'
    },
    {
      area: 'Cloud & Infrastructure',
      description: 'Secure cloud migration, DevSecOps implementation, and scalable infrastructure design optimized for government and enterprise workloads.'
    },
    {
      area: 'Application Development',
      description: 'Custom web and mobile applications built with security-first principles, scalable architecture, and compliance requirements in mind.'
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
                  <i className="ri-building-line"></i>
                </div>
                About Mitaja Corp
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Your Trusted Partner for{' '}
                <span className="text-teal-600">Federal & Enterprise</span> IT
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Specializing in secure, scalable, and compliant IT solutions for government agencies 
                and enterprise organizations across the United States.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Delivering Mission-Critical IT Solutions
                </h2>
                
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Founded in 2020, Mitaja Corp has established itself as a trusted IT partner for federal 
                  government agencies and enterprise organizations. Our team combines deep technical expertise 
                  with extensive knowledge of government compliance requirements and enterprise security standards.
                </p>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  We understand that government and enterprise IT systems require the highest levels of security, 
                  reliability, and compliance. Our comprehensive suite of services is designed to meet these 
                  demanding requirements while enabling digital transformation and operational efficiency.
                </p>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  From cybersecurity and cloud infrastructure to custom application development and managed IT services, 
                  we provide end-to-end solutions that help organizations achieve their mission objectives while 
                  maintaining the security and compliance standards essential for federal and enterprise operations.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600 mb-1">Federal</div>
                    <div className="text-sm text-slate-600">Compliance Ready</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600 mb-1">Enterprise</div>
                    <div className="text-sm text-slate-600">Security Standards</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20diverse%20IT%20team%20working%20in%20a%20modern%20government-style%20office%20environment%20with%20multiple%20computer%20monitors%20displaying%20security%20dashboards%20and%20network%20infrastructure%20diagrams.%20Clean%2C%20organized%20workspace%20with%20American%20flag%20visible%2C%20representing%20federal%20IT%20services%20and%20enterprise%20technology%20solutions%20with%20blue%20and%20teal%20color%20accents&width=600&height=500&seq=about-team&orientation=landscape"
                  alt="Mitaja Corp IT Team"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <i className="ri-award-line text-teal-600 text-xl"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Certified Experts</div>
                      <div className="text-sm text-slate-600">Government & Enterprise Ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-team-line"></i>
                  </div>
                  Our Expertise
                </div>
                
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Trusted IT Partner for{' '}
                  <span className="text-teal-600">Government & Enterprise</span>
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  With extensive experience in federal contracting and enterprise IT solutions, 
                  we understand the unique challenges of government and large organization technology needs. 
                  Our team holds the necessary clearances and certifications to work on sensitive projects.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                    <div className="text-sm text-slate-600">Compliance Focus</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                    <div className="text-sm text-slate-600">Support Available</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-teal-600 mb-2">Gov</div>
                    <div className="text-sm text-slate-600">Certified Team</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://mitajacorp.com/wp-content/uploads/2024/04/IT_development.png"
                  alt="IT Development Team"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help secure and scale your IT infrastructure 
                while maintaining the highest standards of compliance and security.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleContactClick}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  Contact Us
                  <div className="w-5 h-5 inline-flex items-center justify-center ml-2">
                    <i className="ri-mail-line"></i>
                  </div>
                </button>
                <button 
                  onClick={handleServicesClick}
                  className="border border-slate-300 hover:border-teal-300 text-slate-700 hover:text-teal-600 px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:bg-white whitespace-nowrap cursor-pointer"
                >
                  View Our Services
                  <div className="w-5 h-5 inline-flex items-center justify-center ml-2">
                    <i className="ri-service-line"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
