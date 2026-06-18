"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Moon, Heart, Mail, MessageCircle, Home, Landmark, Globe, Sparkles, LayoutGrid, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_DATA = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { title: "About Temple", href: "/about/temple" },
      { title: "Our Centers", href: "/about/centers" },
      { title: "Our History", href: "/about/history" },
      { title: "Founder Acharya", href: "/about/founder" },
      { title: "Leadership Team", href: "/about/leadership" },
    ],
  },
  {
    label: "Mandir",
    href: "/visit",
    icon: Landmark,
    dropdown: [
      { title: "Darshan Timings", href: "/visit/darshan" },
      { title: "Daily Programs", href: "/visit/programs" },
      { title: "Visitor Guide", href: "/visit/first-time" },
      { title: "Location", href: "/visit/directions" },
    ],
  },
  {
    label: "Prabhupada",
    href: "/prabhupada",
    icon: Globe,
    dropdown: [
      { title: "Biography", href: "/prabhupada/biography" },
      { title: "Books", href: "/prabhupada/books" },
      { title: "Quotes", href: "/prabhupada/quotes" },
      { title: "Milestone Timeline", href: "/prabhupada/timeline" },
      { title: "Sampradaya", href: "/prabhupada/sampradaya" },
    ],
  },
  {
    label: "Activities",
    href: "/activities",
    icon: Sparkles,
    dropdown: [
      { title: "Gita Classes", href: "/activities/gita" },
      { title: "Sunday Feast", href: "/activities/sunday-feast" },
      { title: "Cow Care", href: "/activities/cow-care" },
      { title: "Food Distribution", href: "/activities/food" },
    ],
  },
  { label: "Festivals", href: "/festivals" },
  {
    label: "Get Involved",
    href: "/get-involved",
    dropdown: [
      { title: "Volunteer", href: "/get-involved/volunteer" },
      { title: "Membership", href: "/get-involved/membership" },
      { title: "Sponsor", href: "/donate/sponsor" },
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  // Desktop
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Mobile Bottom Nav Popup State
  const [activeMobilePopup, setActiveMobilePopup] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close popups when navigating
  useEffect(() => {
    setActiveMobilePopup(null);
  }, [pathname]);

  const popupVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3, ease: EASE }
    },
    exit: { 
      y: "100%", 
      opacity: 0,
      transition: { duration: 0.25, ease: EASE }
    }
  };

  // Helper to get dropdown data
  const getDropdownData = (label: string) => NAV_DATA.find(item => item.label === label)?.dropdown;

  return (
    <>
      {/* =========================================
          DESKTOP NAVBAR (Hidden on Mobile)
          ========================================= */}
      <header 
        className={`hidden xl:flex fixed left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] h-[72px] z-[9999] transition-all duration-500 items-center justify-between px-6 rounded-full border shadow-lg ${
          scrolled ? "top-4 bg-white/95 backdrop-blur-md border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)]" : "top-6 bg-white/80 backdrop-blur-md border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center relative z-10 group shrink-0">
          <Image
            src="/images/logo.png"
            alt="ISKCON Logo"
            width={140}
            height={44}
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="flex items-center gap-1 xl:gap-3 absolute left-1/2 -translate-x-1/2 h-full">
          {NAV_DATA.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            const hasDropdown = !!item.dropdown;
            const isHovered = activeDropdown === item.label;

            return (
              <div 
                key={item.label} 
                className="h-full flex items-center relative group/navitem"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
              >
                <Link 
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[14px] font-medium transition-colors ${
                    isActive ? "text-[#123A8C] bg-[#ebf0f8]" : "text-gray-700 hover:text-[#123A8C]"
                  }`}
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${isHovered ? "rotate-180 text-[#123A8C]" : "text-gray-400 group-hover/navitem:text-[#123A8C]"}`} 
                    />
                  )}
                </Link>

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {isHovered && hasDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#f4f8fc]/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-2"
                    >
                      <div className="flex flex-col gap-1">
                        {item.dropdown!.map((link) => (
                          <Link 
                            key={link.href} 
                            href={link.href} 
                            className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-white hover:text-[#123A8C] rounded-xl transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-3 relative z-10 shrink-0">
          <button className="h-10 w-10 rounded-full bg-[#123A8C] text-white flex items-center justify-center hover:bg-[#1D5C96] transition-colors shadow-sm">
            <Moon size={18} fill="currentColor" />
          </button>
          <Link
            href="/donate"
            className="h-10 px-6 rounded-full bg-[#123A8C] text-white text-[14px] font-semibold flex items-center gap-2 hover:bg-[#1D5C96] transition-colors shadow-sm"
          >
            <Heart size={16} fill="currentColor" /> Donate Now
          </Link>
        </div>
      </header>


      {/* =========================================
          MOBILE NAVBAR (Visible on < 1024px)
          ========================================= */}
      <div className="flex xl:hidden flex-col w-full z-[8000] relative">
        {/* Top Contact Bar */}
        <div className="w-full bg-[#f4f8fc] h-[34px] flex items-center px-4 gap-5 text-[11px] sm:text-xs font-semibold text-gray-700 overflow-hidden shrink-0 border-b border-[#e2e8f0]">
          <a href="mailto:info@harekrishnamandir.org" className="flex items-center gap-1.5 whitespace-nowrap hover:text-[#123A8C]">
            <Mail size={13} /> <span className="hidden sm:inline">info@harekrishnamandir.org</span>
          </a>
          <a href="https://wa.me/919799999881" className="flex items-center gap-1.5 whitespace-nowrap hover:text-[#123A8C]">
            <MessageCircle size={13} /> +91-97999 99881
          </a>
        </div>

        {/* Main Sticky Header */}
        <header className={`sticky top-0 w-full h-[64px] bg-white flex items-center justify-between px-4 z-[8000] transition-shadow ${scrolled ? 'shadow-md border-b border-gray-100' : ''}`}>
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={110}
              height={34}
              className="object-contain"
            />
          </Link>
          
          <div className="flex items-center gap-2.5">
            <button className="h-[38px] w-[38px] rounded-xl bg-[#123A8C] text-white flex items-center justify-center shadow-sm active:scale-95 transition-transform">
              <Moon size={18} fill="currentColor" />
            </button>
            <Link
              href="/donate"
              className="h-[38px] px-4 rounded-xl bg-[#123A8C] text-white text-[13px] font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform"
            >
              <Heart size={14} fill="currentColor" /> <span className="hidden sm:inline">Donate Now</span><span className="sm:hidden">Donate</span>
            </Link>
          </div>
        </header>
      </div>

      {/* =========================================
          MOBILE BOTTOM NAV BAR & POPUPS
          ========================================= */}

      {/* Overlay behind popups */}
      <AnimatePresence>
        {activeMobilePopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-[8500] xl:hidden"
            onClick={() => setActiveMobilePopup(null)}
          />
        )}
      </AnimatePresence>

      {/* Bottom Up Popups */}
      <AnimatePresence>
        {activeMobilePopup && (
          <motion.div
            className="fixed inset-x-0 bottom-[68px] z-[8600] bg-[#f5f3ff] rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.12)] xl:hidden flex flex-col max-h-[75vh] border border-[#ebe5f8]"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
              
              {/* Dynamic Content based on activePopup */}
              {activeMobilePopup === "More" ? (
                <div className="flex flex-col gap-2">
                  {/* Filter out tabs already in bottom bar */}
                  {NAV_DATA.filter(n => !["Home", "Mandir", "Prabhupada", "Activities"].includes(n.label)).map((item) => {
                    const hasDropdown = !!item.dropdown;
                    const isOpen = mobileAccordion === item.label;

                    return (
                      <div key={item.label} className="flex flex-col">
                        {hasDropdown ? (
                          <>
                            <button 
                              className="flex justify-between items-center py-4 text-[16px] font-bold text-gray-900 border-b border-[#e9e3f4]"
                              onClick={() => setMobileAccordion(isOpen ? null : item.label)}
                            >
                              {item.label}
                              <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#123A8C]" : "text-gray-400"}`} />
                            </button>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="py-2 flex flex-col gap-1 mb-2">
                                    {item.dropdown!.map(link => (
                                      <Link 
                                        key={link.href} 
                                        href={link.href}
                                        className="py-2.5 px-2 text-[15px] font-medium text-gray-700 hover:text-[#123A8C] transition-colors"
                                        onClick={() => setActiveMobilePopup(null)}
                                      >
                                        {link.title}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link 
                            href={item.href} 
                            className="py-4 text-[16px] font-bold text-gray-900 border-b border-[#e9e3f4] flex items-center gap-3"
                            onClick={() => setActiveMobilePopup(null)}
                          >
                             {item.label}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Simple list for Mandir, Prabhupada, Activities */
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2 px-2">{activeMobilePopup}</h3>
                  {getDropdownData(activeMobilePopup)?.map(link => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className="py-3 px-2 text-[15px] font-medium text-gray-700 hover:text-[#123A8C] transition-colors border-b border-[#e9e3f4] last:border-0"
                      onClick={() => setActiveMobilePopup(null)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex xl:hidden fixed bottom-0 left-0 w-full h-[68px] bg-[#f4f8fc] border-t border-[#dbeafe] z-[9000] justify-between items-center px-2 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        {/* Bottom Nav Items */}
        {[
          { label: "Home", href: "/", icon: Home, isDropdown: false },
          { label: "Mandir", icon: Landmark, isDropdown: true },
          { label: "Prabhupada", icon: Globe, isDropdown: true },
          { label: "Activities", icon: Sparkles, isDropdown: true },
        ].map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && item.href && pathname?.startsWith(item.href)) || activeMobilePopup === item.label;
          
          return item.isDropdown ? (
            <button 
              key={item.label}
              onClick={() => setActiveMobilePopup(activeMobilePopup === item.label ? null : item.label)}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${isActive ? "text-[#123A8C]" : "text-gray-600 hover:text-[#123A8C]"}`}
            >
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "scale-110 transition-transform" : ""} />
              <span className={`text-[10px] font-semibold tracking-wide ${isActive ? "opacity-100" : "opacity-80"}`}>{item.label}</span>
            </button>
          ) : (
            <Link 
              key={item.label} 
              href={item.href!}
              onClick={() => setActiveMobilePopup(null)}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${isActive && !activeMobilePopup ? "text-[#123A8C]" : "text-gray-600 hover:text-[#123A8C]"}`}
            >
              <item.icon size={22} strokeWidth={isActive && !activeMobilePopup ? 2.5 : 2} className={isActive && !activeMobilePopup ? "scale-110 transition-transform" : ""} />
              <span className={`text-[10px] font-semibold tracking-wide ${isActive && !activeMobilePopup ? "opacity-100" : "opacity-80"}`}>{item.label}</span>
            </Link>
          );
        })}
        
        {/* 'More' Button triggers drawer */}
        <button 
          onClick={() => setActiveMobilePopup(activeMobilePopup === "More" ? null : "More")}
          className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${activeMobilePopup === "More" ? "text-[#123A8C]" : "text-gray-600 hover:text-[#123A8C]"}`}
        >
          <LayoutGrid size={22} strokeWidth={activeMobilePopup === "More" ? 2.5 : 2} className={activeMobilePopup === "More" ? "scale-110 transition-transform" : ""} />
          <span className={`text-[10px] font-semibold tracking-wide ${activeMobilePopup === "More" ? "opacity-100" : "opacity-80"}`}>More</span>
        </button>
      </nav>

      {/* Spacer to prevent content from hiding behind the bottom nav on mobile */}
      <div className="h-[68px] xl:hidden w-full" />
    </>
  );
}
