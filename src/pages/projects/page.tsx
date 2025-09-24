
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Projects() {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Our Projects - Federal IT Solutions & Case Studies | Mitaja Corp';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Explore our successful IT projects including cybersecurity implementations, cloud migrations, and managed IT solutions for federal agencies and enterprise clients.');

    // Add Project Schema.org JSON-LD
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Mitaja Corp IT Projects",
      "description": "Successful IT projects and case studies from Mitaja Corp",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "position": 1,
          "name": "Federal Agency Cybersecurity Modernization",
          "description": "Complete cybersecurity infrastructure overhaul for a major federal agency"
        },
        {
          "@type": "CreativeWork",
          "position": 2,
          "name": "Multi-Cloud Infrastructure Migration",
          "description": "Enterprise cloud migration and optimization project"
        }
      ]
    });
    
    document.head.appendChild(schemaScript);
    
    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Federal Agency Cybersecurity Modernization",
      category: "Cybersecurity",
      description: "Comprehensive cybersecurity infrastructure overhaul for a major federal agency, implementing zero-trust architecture and advanced threat detection systems.",
      technologies: ["NIST Framework", "Zero Trust", "SIEM", "Multi-Factor Authentication", "Endpoint Protection"],
      duration: "18 months",
      client: "Federal Agency",
      results: ["99.9% threat detection rate", "50% reduction in security incidents", "Full FISMA compliance achieved"],
      image: "https://readdy.ai/api/search-image?query=Modern%20cybersecurity%20operations%20center%20with%20multiple%20monitors%20displaying%20threat%20detection%20dashboards%2C%20network%20security%20analytics%2C%20and%20federal%20compliance%20frameworks.%20Professional%20blue%20and%20teal%20color%20scheme%20representing%20advanced%20cybersecurity%20infrastructure%20and%20government-grade%20security%20monitoring%20systems&width=600&height=400&seq=project-cyber-1&orientation=landscape",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "Multi-Cloud Infrastructure Migration",
      category: "Cloud Services",
      description: "Complete migration of legacy systems to a hybrid multi-cloud environment with enhanced security and scalability for a Fortune 500 company.",
      technologies: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "DevSecOps"],
      duration: "12 months",
      client: "Fortune 500 Enterprise",
      results: ["40% cost reduction", "99.99% uptime achieved", "3x faster deployment cycles"],
      image: "https://readdy.ai/api/search-image?query=Advanced%20cloud%20infrastructure%20visualization%20showing%20multi-cloud%20architecture%20with%20AWS%20and%20Azure%20services%2C%20containerized%20applications%2C%20and%20DevSecOps%20pipelines.%20Blue%20and%20cyan%20color%20scheme%20representing%20enterprise%20cloud%20migration%2C%20scalable%20infrastructure%2C%20and%20modern%20cloud%20computing%20solutions&width=600&height=400&seq=project-cloud-1&orientation=landscape",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "24/7 Managed IT Services Implementation",
      category: "Maintenance",
      description: "Comprehensive managed IT services deployment for a healthcare organization, including proactive monitoring and maintenance of critical systems.",
      technologies: ["Network Monitoring", "Automated Patching", "Backup Solutions", "HIPAA Compliance", "Helpdesk"],
      duration: "Ongoing",
      client: "Healthcare Organization",
      results: ["95% reduction in downtime", "30% faster issue resolution", "Full HIPAA compliance maintained"],
      image: "https://readdy.ai/api/search-image?query=IT%20operations%20center%20with%20system%20monitoring%20dashboards%2C%20network%20health%20displays%2C%20and%20maintenance%20scheduling%20interfaces.%20Green%20and%20emerald%20color%20scheme%20representing%2024%2F7%20managed%20IT%20services%2C%20proactive%20system%20monitoring%2C%20and%20comprehensive%20technical%20support%20infrastructure&width=600&height=400&seq=project-maintenance-1&orientation=landscape",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Government Portal Security Enhancement",
      category: "Cybersecurity",
      description: "Enhanced security measures for a state government citizen services portal, implementing advanced authentication and data protection protocols.",
      technologies: ["OAuth 2.0", "SSL/TLS", "Web Application Firewall", "Data Encryption", "Vulnerability Scanning"],
      duration: "8 months",
      client: "State Government",
      results: ["Zero security breaches", "98% user satisfaction", "ADA compliance achieved"],
      image: "https://readdy.ai/api/search-image?query=Secure%20government%20web%20portal%20interface%20with%20authentication%20systems%2C%20encrypted%20data%20flows%2C%20and%20security%20protocols.%20Professional%20red%20and%20orange%20color%20scheme%20representing%20government%20cybersecurity%2C%20citizen%20services%20protection%2C%20and%20advanced%20web%20application%20security%20measures&width=600&height=400&seq=project-cyber-2&orientation=landscape",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      title: "Enterprise Cloud-Native Application Platform",
      category: "Cloud Services",
      description: "Development and deployment of a cloud-native application platform using microservices architecture and container orchestration.",
      technologies: ["Microservices", "Kubernetes", "API Gateway", "Service Mesh", "CI/CD Pipeline"],
      duration: "15 months",
      client: "Financial Services",
      results: ["10x faster scaling", "60% improvement in performance", "Zero-downtime deployments"],
      image: "https://readdy.ai/api/search-image?query=Cloud-native%20application%20architecture%20with%20microservices%20containers%2C%20Kubernetes%20orchestration%2C%20and%20API%20management%20systems.%20Blue%20and%20purple%20color%20scheme%20representing%20modern%20cloud%20platforms%2C%20containerized%20applications%2C%20and%20enterprise-grade%20cloud-native%20solutions&width=600&height=400&seq=project-cloud-2&orientation=landscape",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 6,
      title: "Critical Infrastructure Monitoring System",
      category: "Maintenance",
      description: "Implementation of comprehensive monitoring and maintenance system for critical infrastructure components across multiple data centers.",
      technologies: ["IoT Sensors", "Real-time Analytics", "Predictive Maintenance", "Alert Systems", "Mobile Dashboard"],
      duration: "10 months",
      client: "Utility Company",
      results: ["85% reduction in equipment failures", "50% lower maintenance costs", "Improved system reliability"],
      image: "https://readdy.ai/api/search-image?query=Infrastructure%20monitoring%20control%20room%20with%20IoT%20sensor%20data%2C%20predictive%20maintenance%20analytics%2C%20and%20real-time%20system%20health%20displays.%20Green%20and%20teal%20color%20scheme%20representing%20critical%20infrastructure%20monitoring%2C%20predictive%20maintenance%20systems%2C%20and%20industrial%20IoT%20solutions&width=600&height=400&seq=project-maintenance-2&orientation=landscape",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 7,
      title: "Financial Institution Penetration Testing",
      category: "Cybersecurity",  
      description: "Comprehensive penetration testing and vulnerability assessment for a regional bank, identifying and resolving security weaknesses.",
      technologies: ["Penetration Testing", "Vulnerability Assessment", "Social Engineering", "Network Security", "Compliance Audit"],
      duration: "6 months",
      client: "Regional Bank",
      results: ["100% critical vulnerabilities resolved", "Enhanced security posture", "Regulatory compliance achieved"],
      image: "https://readdy.ai/api/search-image?query=Cybersecurity%20penetration%20testing%20laboratory%20with%20security%20assessment%20tools%2C%20vulnerability%20scanners%2C%20and%20network%20analysis%20displays.%20Dark%20red%20and%20purple%20color%20scheme%20representing%20ethical%20hacking%2C%20security%20testing%2C%20and%20financial%20institution%20cybersecurity%20assessment&width=600&height=400&seq=project-cyber-3&orientation=landscape",
      color: "from-red-600 to-purple-600"
    },
    {
      id: 8,
      title: "Disaster Recovery Cloud Solution",
      category: "Cloud Services",
      description: "Design and implementation of a comprehensive disaster recovery solution using cloud infrastructure for business continuity.",
      technologies: ["Backup Automation", "Failover Systems", "Cloud Replication", "Recovery Testing", "Business Continuity"],
      duration: "9 months",
      client: "Manufacturing Company",
      results: ["4-hour RTO achieved", "99.9% data recovery success", "Business continuity assured"],
      image: "https://readdy.ai/api/search-image?query=Disaster%20recovery%20data%20center%20with%20backup%20systems%2C%20cloud%20replication%20infrastructure%2C%20and%20business%20continuity%20monitoring.%20Blue%20and%20green%20color%20scheme%20representing%20cloud-based%20disaster%20recovery%2C%20data%20backup%20solutions%2C%20and%20enterprise%20business%20continuity%20planning&width=600&height=400&seq=project-cloud-3&orientation=landscape",
      color: "from-blue-500 to-green-500"
    },
    {
      id: 9,
      title: "Enterprise Asset Management System",
      category: "Maintenance",
      description: "Development and deployment of a comprehensive IT asset management system for tracking and maintaining enterprise hardware and software.",
      technologies: ["Asset Tracking", "Lifecycle Management", "Automated Discovery", "Compliance Reporting", "Mobile Access"],
      duration: "7 months",
      client: "Technology Company",
      results: ["Complete asset visibility", "25% reduction in licensing costs", "Improved compliance tracking"],
      image: "https://readdy.ai/api/search-image?query=IT%20asset%20management%20dashboard%20showing%20hardware%20inventory%2C%20software%20licensing%2C%20and%20lifecycle%20tracking%20displays.%20Green%20and%20blue%20color%20scheme%20representing%20enterprise%20asset%20management%2C%20IT%20inventory%20systems%2C%20and%20technology%20lifecycle%20management%20solutions&width=600&height=400&seq=project-maintenance-3&orientation=landscape",
      color: "from-green-500 to-blue-500"
    },
    {
      id: 10,
      title: "Advanced Threat Detection Platform",
      category: "Cybersecurity",
      description: "Implementation of AI-powered threat detection and response platform for proactive cybersecurity monitoring and incident response.",
      technologies: ["Machine Learning", "Behavioral Analytics", "SOAR Platform", "Threat Intelligence", "Automated Response"],
      duration: "14 months",
      client: "Defense Contractor",
      results: ["90% faster threat response", "Advanced persistent threat detection", "Automated incident handling"],
      image: "https://readdy.ai/api/search-image?query=Advanced%20cybersecurity%20threat%20detection%20center%20with%20AI-powered%20analytics%2C%20machine%20learning%20algorithms%2C%20and%20automated%20response%20systems.%20Red%20and%20orange%20color%20scheme%20representing%20cutting-edge%20threat%20detection%2C%20artificial%20intelligence%20security%2C%20and%20advanced%20cyber%20defense%20platforms&width=600&height=400&seq=project-cyber-4&orientation=landscape",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 11,
      title: "Hybrid Cloud Integration Project",
      category: "Cloud Services",
      description: "Seamless integration of on-premises infrastructure with public cloud services, creating a secure hybrid cloud environment.",
      technologies: ["Hybrid Architecture", "VPN Connectivity", "Identity Management", "Data Synchronization", "Load Balancing"],
      duration: "11 months",
      client: "Government Agency",
      results: ["Seamless data integration", "Enhanced security controls", "Improved system flexibility"],
      image: "https://readdy.ai/api/search-image?query=Hybrid%20cloud%20architecture%20visualization%20showing%20on-premises%20servers%20connected%20to%20public%20cloud%20services%20with%20secure%20networking%20and%20data%20integration.%20Blue%20and%20cyan%20color%20scheme%20representing%20hybrid%20cloud%20solutions%2C%20secure%20connectivity%2C%20and%20enterprise%20cloud%20integration&width=600&height=400&seq=project-cloud-4&orientation=landscape",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 12,
      title: "Proactive System Health Monitoring",
      category: "Maintenance",
      description: "Implementation of proactive monitoring and alerting system for critical business applications and infrastructure components.",
      technologies: ["Performance Monitoring", "Health Checks", "Automated Alerts", "Capacity Planning", "Trend Analysis"],
      duration: "5 months",
      client: "E-commerce Platform",
      results: ["Proactive issue identification", "99.95% system availability", "Optimized resource utilization"],
      image: "https://readdy.ai/api/search-image?query=System%20health%20monitoring%20dashboard%20with%20performance%20metrics%2C%20capacity%20planning%20charts%2C%20and%20proactive%20alerting%20systems.%20Green%20and%20yellow%20color%20scheme%20representing%20proactive%20IT%20monitoring%2C%20system%20health%20analytics%2C%20and%20performance%20optimization%20solutions&width=600&height=400&seq=project-maintenance-4&orientation=landscape",
      color: "from-green-500 to-yellow-500"
    },
    {
      id: 13,
      title: "Security Operations Center (SOC) Setup",
      category: "Cybersecurity",
      description: "Establishment of a comprehensive Security Operations Center with 24/7 monitoring, incident response, and threat hunting capabilities.",
      technologies: ["SIEM Platform", "Threat Hunting", "Incident Response", "Security Orchestration", "Forensic Analysis"],
      duration: "16 months",
      client: "Multi-National Corporation",
      results: ["24/7 security monitoring", "Rapid incident response", "Enhanced threat visibility"],
      image: "https://readdy.ai/api/search-image?query=Security%20Operations%20Center%20with%20multiple%20analysts%20monitoring%20threat%20detection%20systems%2C%20incident%20response%20workflows%2C%20and%20security%20orchestration%20platforms.%20Dark%20blue%20and%20red%20color%20scheme%20representing%2024%2F7%20SOC%20operations%2C%20cybersecurity%20monitoring%2C%20and%20enterprise%20security%20management&width=600&height=400&seq=project-cyber-5&orientation=landscape",
      color: "from-blue-600 to-red-600"
    }
  ];

  const categories = ["All", "Cybersecurity", "Cloud Services", "Maintenance"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-32 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-folder-line"></i>
                </div>
                Our Projects
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Successful IT Solutions for{' '}
                <span className="text-teal-600">Federal Agencies</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Explore our portfolio of successful cybersecurity implementations, cloud migrations, 
                and managed IT solutions delivered for federal agencies and enterprise clients.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-slate-100 rounded-full p-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-teal-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.category === 'Cybersecurity' 
                          ? 'bg-red-100 text-red-800' 
                          : project.category === 'Cloud Services'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-building-line text-slate-500"></i>
                        </div>
                        <span className="text-slate-600">{project.client}</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-time-line text-slate-500"></i>
                        </div>
                        <span className="text-slate-600">{project.duration}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Results:</h4>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {project.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-3 h-3 flex items-center justify-center mr-2 mt-0.5">
                              <i className="ri-check-line text-teal-600 text-xs"></i>
                            </div>
                            <span className="line-clamp-1">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-slate-100 rounded-full">
                  <i className="ri-folder-open-line text-2xl text-slate-400"></i>
                </div>
                <p className="text-slate-500">No projects found for the selected category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Let's discuss how we can help you achieve similar results with our proven expertise in 
              cybersecurity, cloud services, and managed IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                Start a Project
              </a>
              <a
                href="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-service-line"></i>
                </div>
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
