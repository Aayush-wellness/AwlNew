import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          {/* Logo and Slogan */}
          <div className="md:col-span-3 lg:col-span-1">
            <div className="mb-8">
              <Link href="/">
                <img
                  src="/images/Frame 1100.png"
                  alt="Aayush Wellness Logo"
                  className="h-10 md:h-12 w-auto brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[240px] font-light">
              Transforming Lives with Preventive Health Care & Science-Backed Wellness
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-8 text-gray-200">COMPANY</h3>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/mission" className="hover:text-white transition-colors">Mission</Link></li>
            </ul>
          </div>

          {/* WELLNESS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-8 text-gray-200">WELLNESS</h3>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base font-light">
              <li><Link href="/science" className="hover:text-white transition-colors">Science</Link></li>
              <li><Link href="/ayurveda" className="hover:text-white transition-colors">Ayurveda</Link></li>
              <li><Link href="/wellness" className="hover:text-white transition-colors">Wellness</Link></li>
            </ul>
          </div>

          {/* PRESS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-8 text-gray-200">PRESS</h3>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base font-light">
              <li><Link href="/science" className="hover:text-white transition-colors">Science</Link></li>
              <li><Link href="/ayurveda" className="hover:text-white transition-colors">Ayurveda</Link></li>
              <li><Link href="/wellness" className="hover:text-white transition-colors">Wellness</Link></li>
            </ul>
          </div>

          {/* CORPORATE */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-8 text-gray-200">CORPORATE</h3>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base font-light">
              <li><Link href="/investors" className="hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="/healthcare" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/nutrition" className="hover:text-white transition-colors">Nutrition</Link></li>
              <li><Link href="/health-check" className="hover:text-white transition-colors">Health Check</Link></li>
              <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] mb-8 text-gray-200">GET IN TOUCH</h3>
            <div className="space-y-4 text-gray-400 text-sm md:text-base font-light mb-10">
              <p className="hover:text-white transition-colors">+91 8655980810</p>
              <p className="hover:text-white transition-colors">sales@aayushwellness.com</p>
            </div>

            {/* Newsletter Input */}
            <div className="flex items-center gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#555555]/30 text-white px-5 py-3 rounded-xl text-sm md:text-base outline-none focus:ring-1 focus:ring-[#A6EB8E]/50 transition-all placeholder:text-gray-500 placeholder:italic"
                />
              </div>
              <button className="bg-[#004627] hover:bg-[#005a32] text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 group shadow-lg shadow-black/20 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Aayush Wellness. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
