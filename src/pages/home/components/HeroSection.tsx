
import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-shield-check-line"></i>
              </div>
              Federal &amp; Enterprise Ready
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Secure Solutions for{' '}
              <span className="text-teal-600">Federal &amp; Enterprise</span>{' '}
              IT
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl">
              Cybersecurity, Cloud, and Maintenance-first IT partner for Government and Private Organizations. 
              Delivering government-grade security and enterprise-ready solutions.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">Gov-Grade</div>
                <div className="text-sm text-slate-600">Security</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">Compliant</div>
                <div className="text-sm text-slate-600">Solutions</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://mitajacorp.com/wp-content/uploads/2024/04/topSectionImg.png"
                alt="Federal IT Security Operations"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Tech badges */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center text-teal-600">
                  <i className="ri-shield-check-fill"></i>
                </div>
                <span className="text-sm font-medium text-slate-900">SOC Compliant</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                  <i className="ri-cloud-fill"></i>
                </div>
                <span className="text-sm font-medium text-slate-900">Cloud Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
