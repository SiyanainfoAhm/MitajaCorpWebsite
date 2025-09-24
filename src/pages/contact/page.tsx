
import { useState, FormEvent, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Input from '../../components/base/Input';
import Textarea from '../../components/base/Textarea';
import Button from '../../components/base/Button';

export default function Contact() {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Contact Us - Federal IT Services | Mitaja Corp';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Contact Mitaja Corp for federal IT services and enterprise solutions. Located at 8115 Maple Lawn Blvd, Fulton, MD. Business hours: Mon-Fri 8:00-17:00. Government-grade security and compliance.');

    // Add ContactPage Schema.org JSON-LD
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Mitaja Corp",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": ["English"],
            "hoursAvailable": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              }
            ]
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8115 Maple Lawn Blvd",
          "addressLocality": "Fulton",
          "addressRegion": "MD",
          "postalCode": "20759",
          "addressCountry": "US"
        }
      }
    });
    
    document.head.appendChild(schemaScript);
    
    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d3929lqfkoblkdk5ckvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative py-32 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-mail-line"></i>
              </div>
              Contact Us
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Get in <span className="text-teal-600">Touch</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to secure and transform your IT infrastructure? Contact our team of federal 
              and enterprise IT experts today to discuss your project requirements.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Send Us a Message
                </h2>
                
                <form 
                  id="contact-page-form"
                  data-readdy-form
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <Input
                    label="Full Name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  
                  <Textarea
                    label="Message"
                    name="message"
                    required
                    placeholder="Tell us about your project requirements, timeline, compliance needs, and any specific federal or enterprise standards you need to meet..."
                    rows={8}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    maxLength={500}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-loader-4-line animate-spin"></i>
                        </div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <div className="w-5 h-5 flex items-center justify-center ml-2">
                          <i className="ri-send-plane-line"></i>
                        </div>
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-check-circle-line"></i>
                        </div>
                        Message sent successfully! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-error-warning-line"></i>
                        </div>
                        Failed to send message. Please try again or contact us directly.
                      </p>
                    </div>
                  )}
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center bg-teal-100 text-teal-600 rounded-lg mr-4 mt-1">
                        <i className="ri-map-pin-line"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Address</h4>
                        <p className="text-slate-600">
                          8115 Maple Lawn Blvd<br />
                          Fulton, MD 20759<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center bg-teal-100 text-teal-600 rounded-lg mr-4 mt-1">
                        <i className="ri-time-line"></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Business Hours</h4>
                        <p className="text-slate-600">
                          Monday - Friday: 8:00 AM - 5:00 PM EST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-shield-check-line text-teal-600"></i>
                    </div>
                    Security & Compliance
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    All communications are handled with government-grade security protocols. 
                    We maintain strict confidentiality and compliance with federal data protection standards 
                    including FISMA, NIST, and other regulatory requirements.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-customer-service-2-line text-blue-600"></i>
                    </div>
                    Response Time
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent federal or enterprise matters, expedited response protocols are available 
                    to ensure critical needs are addressed promptly.
                  </p>
                </div>

                <div className="bg-slate-100 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-government-line text-slate-600"></i>
                    </div>
                    Federal Contractors Welcome
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    We have extensive experience working with federal agencies, government contractors, 
                    and enterprise organizations. Our team understands procurement processes, 
                    compliance requirements, and security clearance protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
