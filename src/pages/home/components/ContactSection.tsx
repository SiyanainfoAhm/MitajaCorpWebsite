
import { useState } from 'react';
import Button from '../../../components/base/Button';
import Input from '../../../components/base/Input';
import Textarea from '../../../components/base/Textarea';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://readdy.ai/api/form/d392lsfo061p8m5kod1g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
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
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-mail-line"></i>
              </div>
              Contact Us
            </div>
            
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Get in Touch with Our{' '}
              <span className="text-teal-600">IT Experts</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ready to discuss your federal or enterprise IT needs? Our team is here to help you 
              build secure, scalable, and compliant technology solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
                  <p className="text-slate-600">
                    8115 Maple Lawn Blvd<br />
                    Fulton, MD 20759, USA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-time-line text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-slate-600">
                    Monday - Friday<br />
                    8:00 AM - 5:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} id="contact-form" data-readdy-form>
              <div className="space-y-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
                
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />

                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your IT requirements and how we can help..."
                  rows={5}
                  maxLength={500}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <div className="w-5 h-5 flex items-center justify-center ml-2">
                    <i className="ri-send-plane-line"></i>
                  </div>
                </Button>

                {submitStatus === 'success' && (
                  <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-center p-4 bg-red-100 text-red-800 rounded-lg">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
