import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Globe2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, TRAINING_MODULES } from '../data/siteData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative w-full overflow-hidden text-white font-sans border-t border-white/10">
      {/* Background with official footer-image & world map ambient texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('/zisantech_footer.png')` }}
      />
      {/* Dark luxury glass overlay with cyan/teal enterprise gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020917]/95 via-[#03122c]/90 to-[#010613]/98 z-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent z-0" />

      {/* 1. TOP PREMIUM CONTACT & QUICK ACCESS BAR */}
      <div className="relative z-10 border-b border-white/10 bg-white/[0.03] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Phone */}
            <a 
              href={`tel:${COMPANY_INFO.primaryPhone}`} 
              className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-teal-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/25 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-teal-400">Direct Consultation</p>
                <p className="text-sm sm:text-base font-bold text-white group-hover:text-teal-300 transition-colors truncate">
                  {COMPANY_INFO.primaryPhone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${COMPANY_INFO.primaryEmail}`} 
              className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-teal-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/25 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-teal-400">Official Inquiries</p>
                <p className="text-sm sm:text-base font-bold text-white group-hover:text-teal-300 transition-colors truncate">
                  {COMPANY_INFO.primaryEmail}
                </p>
              </div>
            </a>

            {/* Location / Status */}
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/25">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-orange-400">Delivery Center</p>
                <p className="text-xs sm:text-sm font-semibold text-white/90 line-clamp-1">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN 4-COLUMN FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Newsletter (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-block p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <img
                src="/zisantech_official_badge.png"
                alt="ZisanTech Solutions - INNOVATE • DEVELOP • GROW"
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/zisantech_official_logo.png';
                }}
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              ZisanTech Solutions is a premier technology solutions provider specializing in full-lifecycle SAP Consulting, Enterprise IT Implementations, Cloud Modernization, and Career-Oriented Corporate Training.
            </p>

            {/* Newsletter Subscription with Glassmorphism */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">Stay Connected</p>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 bg-teal-500/20 border border-teal-500/40 rounded-full text-xs text-teal-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Thank you for subscribing to ZisanTech updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex w-full items-center overflow-hidden rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-1 focus-within:border-teal-400 transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    aria-label="Your Email"
                    className="min-w-0 flex-1 bg-transparent px-4 py-2 text-xs sm:text-sm text-white placeholder-slate-400 outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-orange-500 text-white shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Certified Enterprise SAP & IT Delivery Standards</span>
            </div>
          </div>

          {/* Column 2: SAP Services (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-teal-500 pb-2 inline-block">
              SAP Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="/services1/SAP%20SERVICES/1" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP Rollout Services</span>
                </a>
              </li>
              <li>
                <a href="/services1/SAP%20SERVICES/2" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP Custom Solutions</span>
                </a>
              </li>
              <li>
                <a href="/services1/SAP%20SERVICES/3" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP Support & SLA</span>
                </a>
              </li>
              <li>
                <a href="/services1/SAP%20SERVICES/4" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP Integration Architecture</span>
                </a>
              </li>
              <li>
                <a href="/services1/SAP%20SERVICES/5" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  <span>Enterprise SAP Consulting</span>
                </a>
              </li>
              <li>
                <a href="/services1/SAP%20SERVICES/6" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  <span>E-Invoice & E-Way Bill</span>
                </a>
              </li>
              <li>
                <a href="/services1/SAP%20SERVICES/7" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP AI & Automation</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Professional Training (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-orange-500 pb-2 inline-block">
              SAP Training
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="/trainingprogrammes/Functional%20Modules/1" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP SD Module</span>
                </a>
              </li>
              <li>
                <a href="/trainingprogrammes/Functional%20Modules/2" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP MM Module</span>
                </a>
              </li>
              <li>
                <a href="/trainingprogrammes/Functional%20Modules/5" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP FICO Module</span>
                </a>
              </li>
              <li>
                <a href="/trainingprogrammes/Technical%20Module/1" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP ABAP Coding</span>
                </a>
              </li>
              <li>
                <a href="/trainingprogrammes/Technical%20Module/2" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP BASIS Administration</span>
                </a>
              </li>
              <li>
                <a href="/trainingprogrammes/Technical%20Module/4" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  <span>SAP CPI Cloud Integration</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Corporate Hub (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-teal-500 pb-2 inline-block">
              Company
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="/about" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-1.5 py-1">
                <ChevronRight className="w-3 h-3 text-teal-400" /> About Us
              </a>
              <a href="/blog" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-1.5 py-1">
                <ChevronRight className="w-3 h-3 text-teal-400" /> Tech Blogs
              </a>
              <a href="/career" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-1.5 py-1">
                <ChevronRight className="w-3 h-3 text-teal-400" /> Careers
              </a>
              <a href="/contact" className="text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-1.5 py-1">
                <ChevronRight className="w-3 h-3 text-teal-400" /> Contact Us
              </a>
            </div>

            {/* Premium CTA Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500/15 via-white/[0.03] to-orange-500/10 border border-white/10 backdrop-blur-md space-y-3 mt-4">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Enterprise Inquiries</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our certified SAP architects to discover tailored IT roadmaps for your enterprise.
              </p>
              <a
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-orange-500 text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM COPYRIGHT & TRUST BAR */}
      <div className="relative z-10 border-t border-white/10 bg-[#01050f]/80 backdrop-blur-md py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-xs">
            © {new Date().getFullYear()} <span className="text-white font-semibold">ZisanTech Solutions</span>. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs">
            <a href="/about" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="/about" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="/contact" className="text-teal-400 hover:text-white transition-colors flex items-center gap-1 font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Contact ZisanTech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
