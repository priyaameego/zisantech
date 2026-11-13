import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  ChevronUp,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

// Clean Enterprise Brand Social Icons
const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#171a21] text-slate-300 font-sans border-t border-slate-800 overflow-hidden">
      
      {/* Background Subtle Tech Matrix Watermark */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Ambient Blue/Cyan Glow for Enterprise Depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#087FE5]/10 via-[#08B9E8]/5 to-transparent blur-[120px]" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#063B83]/15 via-transparent to-transparent blur-[120px]" />
      </div>

      {/* =========================================================================
          MAIN 4-COLUMN LAYOUT WITH RICH FRAMER MOTION TEXT ANIMATIONS
          Column 1: Logo & Company Bio & Socials
          Column 2: Explore
          Column 3: Contact (Address, Emails, Phones with Clean Icons)
          Column 4: Gallery (6-Image Grid with Rounded Corners + Floating Action)
      ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: ZisanTech Logo & Bio (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-5"
          >
            {/* Logo with White Pill Container matching Navbar */}
            <div className="inline-block">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/"
                className="inline-block bg-white px-3.5 py-2 rounded-xl shadow-md group transition-all"
              >
                <img
                  src="/zisantech_official_logo.png"
                  alt="ZisanTech - INNOVATE • DEVELOP • GROW"
                  className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/zisantech_logo_transparent.png';
                  }}
                />
              </motion.a>

              {/* Animated Horizontal Accent Line under logo */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="h-[2px] bg-gradient-to-r from-[#087FE5] via-[#08B9E8] to-transparent mt-3.5"
              />
            </div>

            {/* Verified ZisanTech Company Bio with Fade-in Animation */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal pr-4"
            >
              ZisanTech Solutions, a premier enterprise SAP S/4HANA consultancy in New Delhi, offers extensive expertise and innovative technology solutions to unlock your digital business potential.
            </motion.p>

            {/* Social Icons matching Reference Design with Hover Animations */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex items-center gap-4 text-slate-400"
            >
              {[
                { icon: <TwitterIcon className="w-4 h-4" />, href: "https://twitter.com", label: "Twitter" },
                { icon: <FacebookIcon className="w-4 h-4" />, href: "https://facebook.com", label: "Facebook" },
                { icon: <LinkedInIcon className="w-4 h-4" />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <InstagramIcon className="w-4 h-4" />, href: "https://instagram.com", label: "Instagram" }
              ].map((social, idx) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.25, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#08B9E8] transition-colors p-1 cursor-pointer"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Column 2: Explore (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            <div>
              <h4 className="text-base font-bold text-white font-heading tracking-wide">
                Explore
              </h4>
              {/* Animated Accent Line under heading */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-[2px] bg-[#087FE5] mt-2.5"
              />
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {[
                { title: 'About ZisanTech', href: '/about' },
                { title: 'Services', href: '/services' },
                { title: 'Training', href: '/training' },
                { title: 'Industries', href: '/industries' },
                { title: 'Career', href: '/career' },
                { title: 'Blogs', href: '/blog' },
                { title: 'Contact Us', href: '/contact' },
                { title: 'Sitemap', href: '/services1/SAP SERVICES/1' }
              ].map((link, idx) => (
                <motion.li
                  key={link.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block py-0.5 group cursor-pointer"
                  >
                    <span className="group-hover:text-[#08B9E8] transition-colors">
                      {link.title}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact (Span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-4"
          >
            <div>
              <h4 className="text-base font-bold text-white font-heading tracking-wide">
                Contact
              </h4>
              {/* Animated Accent Line under heading */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="h-[2px] bg-[#087FE5] mt-2.5"
              />
            </div>

            {/* Address */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-xs sm:text-sm text-slate-400 leading-relaxed"
            >
              {COMPANY_INFO.address}
            </motion.p>

            {/* Verified Emails & Phones with Brand Blue Icons & Interactive Hover */}
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
              {[
                { type: 'mail', text: 'marketing@zisantech.com', href: 'mailto:marketing@zisantech.com' },
                { type: 'mail', text: 'sales@zisantech.com', href: 'mailto:sales@zisantech.com' },
                { type: 'mail', text: COMPANY_INFO.primaryEmail, href: `mailto:${COMPANY_INFO.primaryEmail}` },
                { type: 'phone', text: COMPANY_INFO.primaryPhone, href: `tel:${COMPANY_INFO.primaryPhone}` },
                { type: 'phone', text: '+91 87978 18498', href: 'tel:+918797818498' }
              ].map((contact, idx) => (
                <motion.a
                  key={contact.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.35 + idx * 0.05 }}
                  href={contact.href}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-all duration-200 group cursor-pointer"
                >
                  {contact.type === 'mail' ? (
                    <Mail className="w-4 h-4 text-[#087FE5] group-hover:text-[#08B9E8] group-hover:scale-110 transition-all flex-shrink-0" />
                  ) : (
                    <Phone className="w-4 h-4 text-[#087FE5] group-hover:text-[#08B9E8] group-hover:scale-110 transition-all flex-shrink-0" />
                  )}
                  <span className="group-hover:translate-x-1 transition-transform">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Gallery (Span 3 - 6 Square Thumbnails + Floating Action Button) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-4 relative"
          >
            <div>
              <h4 className="text-base font-bold text-white font-heading tracking-wide">
                Gallery
              </h4>
              {/* Animated Accent Line under heading */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-[2px] bg-[#087FE5] mt-2.5"
              />
            </div>

            {/* 6 Square Grid Thumbnails with Staggered Fade & Zoom */}
            <div className="grid grid-cols-3 gap-2 pt-1 max-w-[260px]">
              {[
                { src: '/gallery_thumb1.jpg', alt: 'Cybernetic AI Enterprise Intelligence' },
                { src: '/gallery_thumb2.jpg', alt: 'Enterprise Semiconductor Processing' },
                { src: '/gallery_thumb3.jpg', alt: 'SAP Implementation Consultants' },
                { src: '/gallery_thumb4.jpg', alt: 'Modern Server Cloud Infrastructure' },
                { src: '/gallery_thumb5.jpg', alt: 'Futuristic Robotic Automation' },
                { src: '/gallery_thumb6.jpg', alt: 'Executive Technology Operations' }
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  whileHover={{ scale: 1.08 }}
                  className="aspect-square rounded-sm overflow-hidden bg-slate-800 border border-slate-700/60 group cursor-pointer shadow-sm hover:border-[#08B9E8]/60 transition-colors"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-125"
                  />
                </motion.div>
              ))}
            </div>

            {/* Right Chat Action Badge matching Reference Design with Float Animation */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 hidden sm:block">
              <motion.a
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${COMPANY_INFO.primaryPhone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#087FE5] to-[#08B9E8] hover:from-[#08B9E8] hover:to-[#087FE5] text-white flex items-center justify-center shadow-lg shadow-[#087FE5]/40 transition-all cursor-pointer"
                aria-label="Direct Chat"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM COPYRIGHT BAR (Matching Reference Design with Smooth Transitions)
      ========================================================================= */}
      <div className="relative z-10 border-t border-slate-800 bg-[#0f1116] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-center sm:text-left mx-auto sm:mx-0"
          >
            <span>© 2026 ZisanTech Solutions. All Rights Reserved.</span>
            <span>|</span>
            <a href="/payment" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/services" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </motion.div>

          {/* Round Scroll-To-Top Button with Spring Hover */}
          <motion.button
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-[#087FE5] hover:bg-[#08B9E8] text-white flex items-center justify-center shadow-md transition-all cursor-pointer flex-shrink-0"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-4 h-4 stroke-[2.5]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
