
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Mitaja Corp - Secure. Build. Transform.';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Trusted IT Partner for Government & Private Organizations. Specializing in Cybersecurity, Web & Mobile Development, Cloud Infrastructure, and Data Analytics.');
    }

    // Add Organization Schema.org JSON-LD
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Mitaja Corp",
      "alternateName": "Mitaja Corporation",
      "url": import.meta.env.VITE_SITE_URL || "https://example.com",
      "logo": "https://mitajacorp.com/wp-content/uploads/2024/04/mitaja_favicon.jpg",
      "description": "Trusted IT Partner for Government & Private Organizations. Specializing in Cybersecurity, Web & Mobile Development, Cloud Infrastructure, and Data Analytics.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8115 Maple Lawn Blvd",
        "addressLocality": "Fulton",
        "addressRegion": "MD",
        "postalCode": "20759",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-240-646-2538",
        "contactType": "Customer Service",
        "email": "hr@mitajacorp.com",
        "availableLanguage": ["English"]
      },
      "foundingDate": "2024",
      "numberOfEmployees": "10-50",
      "industry": "Information Technology",
      "serviceArea": {
        "@type": "Country",
        "name": "United States"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity Services",
            "description": "Comprehensive cybersecurity solutions for government and private organizations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development",
            "description": "Custom web applications with modern technologies and security best practices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Application Development",
            "description": "Native and cross-platform mobile solutions for iOS and Android"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud & Infrastructure",
            "description": "Cloud migration, infrastructure setup, and management services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data & Analytics",
            "description": "Data-driven insights and analytics solutions for business decisions"
          }
        }
      ]
    });
    
    document.head.appendChild(schemaScript);
    
    return () => {
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
