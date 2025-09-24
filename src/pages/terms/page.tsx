
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service - Mitaja Corp';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Mitaja Corp Terms of Service - Review our terms and conditions for federal IT services, cybersecurity solutions, and enterprise technology consulting.');
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
                  <i className="ri-file-text-line"></i>
                </div>
                Terms of Service
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Terms of Service
              </h1>
              
              <p className="text-lg text-slate-600">
                Last updated: January 2025
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-700 mb-6">
                  By accessing our website or engaging our services, you agree to be bound by these Terms of Service and our Privacy Policy. These terms apply to all users of our federal and enterprise IT services, including cybersecurity, cloud services, maintenance, and application development.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Overview</h2>
                <p className="text-slate-700 mb-6">
                  Mitaja Corporation is a federal and enterprise IT services provider specializing in government-grade cybersecurity, secure cloud solutions, managed IT services, web and mobile application development, and data analytics. We serve federal agencies, government contractors, and private enterprises requiring high-security, compliant technology solutions.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services Description</h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3">3.1 Cybersecurity Services</h3>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>Security audits and risk assessments</li>
                  <li>Compliance management (FISMA, NIST, SOC 2)</li>
                  <li>Threat monitoring and incident response</li>
                  <li>Penetration testing and vulnerability assessments</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">3.2 Cloud Services</h3>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>Secure cloud migration and hosting</li>
                  <li>DevSecOps implementation</li>
                  <li>Infrastructure management and optimization</li>
                  <li>FedRAMP and government cloud solutions</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">3.3 Maintenance &amp; Managed IT</h3>
                <ul className="list-disc pl-6 text-slate-700 mb-6">
                  <li>24/7 monitoring and support</li>
                  <li>System updates and patch management</li>
                  <li>Performance optimization</li>
                  <li>Help desk and technical support</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Federal Contracting and Compliance</h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3">4.1 Government Contracts</h3>
                <p className="text-slate-700 mb-4">
                  For federal government engagements, additional terms may apply based on:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>Federal Acquisition Regulation (FAR)</li>
                  <li>Contract-specific terms and conditions</li>
                  <li>Security clearance requirements</li>
                  <li>Compliance with government data handling protocols</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">4.2 Security Requirements</h3>
                <p className="text-slate-700 mb-6">
                  All personnel working on federal projects must meet applicable security clearance requirements and undergo background investigations as required by the contracting agency.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Client Responsibilities</h2>
                <p className="text-slate-700 mb-4">Clients are responsible for:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-6">
                  <li>Providing accurate project requirements and timelines</li>
                  <li>Maintaining appropriate security protocols on their systems</li>
                  <li>Timely payment of invoices</li>
                  <li>Providing necessary access and cooperation for service delivery</li>
                  <li>Compliance with applicable laws and regulations</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3">6.1 Ownership</h3>
                <p className="text-slate-700 mb-4">
                  Unless otherwise specified in writing:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>Custom developed solutions become client property upon full payment</li>
                  <li>Pre-existing intellectual property remains with respective owners</li>
                  <li>Open source components retain their original licenses</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">6.2 Government Work</h3>
                <p className="text-slate-700 mb-6">
                  For federal contracts, intellectual property rights are governed by applicable federal regulations and contract terms, including potential government rights to developed solutions.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Confidentiality and Data Protection</h2>
                <p className="text-slate-700 mb-4">
                  We maintain strict confidentiality regarding:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-6">
                  <li>Client data and business information</li>
                  <li>Project details and technical specifications</li>
                  <li>Controlled Unclassified Information (CUI)</li>
                  <li>Classified information (when appropriately cleared)</li>
                  <li>Personal information subject to Privacy Act protections</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Payment Terms</h2>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3">8.1 Commercial Clients</h3>
                <ul className="list-disc pl-6 text-slate-700 mb-4">
                  <li>Payment terms are typically Net 30 days</li>
                  <li>Late payments may incur interest charges</li>
                  <li>Services may be suspended for non-payment</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">8.2 Government Clients</h3>
                <p className="text-slate-700 mb-6">
                  Payment terms follow government contracting procedures, including compliance with the Prompt Payment Act and contract-specific billing requirements.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-slate-700 mb-6">
                  To the maximum extent permitted by law, Mitaja Corporation's liability is limited to the amount paid for services in the twelve months preceding the claim. We are not liable for indirect, incidental, or consequential damages, except as required by applicable federal regulations or contract terms.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Service Level Agreements</h2>
                <p className="text-slate-700 mb-6">
                  Specific service level agreements (SLAs) are defined in individual contracts and may include uptime guarantees, response times, and performance metrics appropriate for the level of service required.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Termination</h2>
                <p className="text-slate-700 mb-6">
                  Either party may terminate services with appropriate notice as specified in the contract. For government contracts, termination procedures follow applicable federal regulations. Upon termination, we will assist with orderly transition of services and return of client data.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Dispute Resolution</h2>
                <p className="text-slate-700 mb-6">
                  Commercial disputes are resolved through binding arbitration. Government contract disputes follow procedures outlined in the Contract Disputes Act and applicable contract terms.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Regulatory Compliance</h2>
                <p className="text-slate-700 mb-6">
                  Our services comply with applicable federal regulations including FISMA, NIST Cybersecurity Framework, FedRAMP, SOC 2, and other industry-specific requirements. We maintain certifications and undergo regular audits to ensure ongoing compliance.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Changes to Terms</h2>
                <p className="text-slate-700 mb-6">
                  We may update these terms periodically. For existing contracts, changes take effect upon contract renewal unless otherwise specified. We will provide reasonable notice of material changes.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Contact Information</h2>
                <p className="text-slate-700 mb-4">
                  For questions about these Terms of Service, please contact us:
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

                <div className="mt-8 p-4 bg-teal-50 rounded-lg">
                  <p className="text-teal-800 text-sm">
                    <strong>Note:</strong> These terms are supplemented by specific contract terms for individual engagements. Federal contracts may include additional terms required by applicable regulations and procurement requirements.
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
