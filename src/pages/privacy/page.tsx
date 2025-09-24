
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - Mitaja Corp';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Mitaja Corp Privacy Policy - Learn how we protect your personal information and maintain federal compliance standards for our IT services.');
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-shield-check-line"></i>
                </div>
                Privacy Policy
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Privacy Policy
              </h1>
              
              <p className="text-lg text-slate-600">
                Last updated: January 2025
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p className="text-slate-700 mb-6">
                  Mitaja Corporation ("we," "our," or "us") is committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our federal and enterprise IT services.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3">2.1 Personal Information</h3>
                <p className="text-slate-700 mb-4">We may collect the following personal information:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-6">
                  <li>Contact information (name, email address, business address)</li>
                  <li>Professional information (job title, company, industry)</li>
                  <li>Communication records and correspondence</li>
                  <li>Project requirements and technical specifications</li>
                  <li>Security clearance information (when applicable)</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">2.2 Automatically Collected Information</h3>
                <ul className="list-disc pl-6 text-slate-700 mb-6">
                  <li>IP addresses and device information</li>
                  <li>Browser type and version</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-slate-700 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-6">
                  <li>Providing cybersecurity, cloud services, and IT solutions</li>
                  <li>Responding to inquiries and service requests</li>
                  <li>Project management and service delivery</li>
                  <li>Compliance with federal regulations and security requirements</li>
                  <li>Improving our services and website functionality</li>
                  <li>Meeting contractual obligations with government agencies</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Information Sharing and Disclosure</h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3">4.1 Federal Compliance Requirements</h3>
                <p className="text-slate-700 mb-4">
                  We may share information as required by federal law, regulations, or government contracts, including:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-6">
                  <li>FISMA (Federal Information Security Management Act) compliance</li>
                  <li>NIST (National Institute of Standards and Technology) framework requirements</li>
                  <li>Government auditing and security assessments</li>
                  <li>Federal contracting and procurement processes</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">4.2 Service Providers</h3>
                <p className="text-slate-700 mb-6">
                  We may share information with trusted third-party service providers who assist in delivering our services, subject to strict confidentiality agreements and security standards.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
                <p className="text-slate-700 mb-4">
                  We implement government-grade security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-6">
                  <li>Advanced encryption for data in transit and at rest</li>
                  <li>Multi-factor authentication and access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Compliance with SOC 2 Type II and FedRAMP standards</li>
                  <li>Secure cloud infrastructure with continuous monitoring</li>
                  <li>Employee security training and background checks</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
                <p className="text-slate-700 mb-6">
                  We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. For federal contracts, retention periods may be governed by specific regulatory requirements.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights and Choices</h2>
                <p className="text-slate-700 mb-4">Subject to applicable laws, you have the right to:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-6">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your information (where legally permissible)</li>
                  <li>Opt-out of non-essential communications</li>
                  <li>Request information about data sharing practices</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Federal and Enterprise Compliance</h2>
                <p className="text-slate-700 mb-6">
                  Our privacy practices are designed to meet or exceed federal requirements including FISMA, NIST Cybersecurity Framework, Privacy Act of 1974, and other applicable regulations. We maintain appropriate safeguards for Controlled Unclassified Information (CUI) and other sensitive data.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. International Data Transfers</h2>
                <p className="text-slate-700 mb-6">
                  For federal and enterprise clients, we ensure that any international data transfers comply with applicable regulations and maintain the same level of protection as required by U.S. federal standards.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-slate-700 mb-6">
                  We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Information</h2>
                <p className="text-slate-700 mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-slate-50 rounded-lg p-6">
                  <p className="text-slate-700 mb-2">
                    <strong>Email:</strong> hr@mitajacorp.com
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Address:</strong><br />
                    Mitaja Corporation<br />
                    8115 Maple Lawn Blvd<br />
                    Fulton, MD 20759, USA
                  </p>
                  <p className="text-slate-700">
                    <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM EST
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
