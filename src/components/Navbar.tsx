"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoMark } from "@/components/brand";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Mega Menu Data Structure
const NAV_DATA = [
  { label: "Home", href: "/", isMega: false },
  {
    label: "About Us",
    href: "/about",
    isMega: false,
    dropdown: [
      { title: "About Temple", desc: "Learn about our spiritual sanctuary", href: "/about/temple" },
      { title: "Our Mission", desc: "Our core values and vision", href: "/about/mission" },
      { title: "Our History", desc: "The journey of our movement", href: "/about/history" },
      { title: "Founder Acharya", desc: "Srila Prabhupada's legacy", href: "/about/founder" },
      { title: "Temple Architecture", desc: "Explore the sacred design and heritage", href: "/about/architecture" },
      { title: "Leadership Team", desc: "Meet the devotees guiding our mission", href: "/about/leadership" },
      { title: "Governance", desc: "Transparency and administrative structure", href: "/about/governance" },
      { title: "Global ISKCON Movement", desc: "Our worldwide community", href: "/about/iskcon" },
      { title: "Contact Us", desc: "Get in touch with us", href: "/contact" },
    ],
  },
  {
    label: "Sevas",
    href: "/sevas",
    isMega: false,
    dropdownColumns: [
      {
        header: "Daily Worship",
        items: [
          { title: "Mangala Aarti", href: "/sevas/mangala" },
          { title: "Tulasi Aarti", href: "/sevas/tulasi" },
          { title: "Raj Bhoga Offering", href: "/sevas/raj-bhoga" },
          { title: "Sandhya Aarti", href: "/sevas/sandhya" },
          { title: "Shayana Aarti", href: "/sevas/shayana" },
        ],
      },
      {
        header: "Offerings",
        items: [
          { title: "Annadanam Seva", href: "/sevas/annadanam" },
          { title: "Gau Seva", href: "/sevas/gau" },
          { title: "Flower Seva", href: "/sevas/flower" },
          { title: "Deepa Seva", href: "/sevas/deepa" },
          { title: "Festival Sponsorship", href: "/sevas/festival" },
        ],
      },
      {
        header: "Devotional Services",
        items: [
          { title: "Book Distribution", href: "/sevas/books" },
          { title: "Temple Volunteering", href: "/sevas/volunteer" },
          { title: "Bhajan Seva", href: "/sevas/bhajan" },
          { title: "Sponsorship Opportunities", href: "/sevas/sponsorship" },
        ],
      },
    ],
  },
  {
    label: "Festivals",
    href: "/festivals",
    isMega: true,
    dropdownColumns: [
      {
        header: "Featured Festivals",
        items: [
          { title: "Janmashtami", href: "/festivals/janmashtami" },
          { title: "Ratha Yatra", href: "/festivals/ratha-yatra" },
          { title: "Gaura Purnima", href: "/festivals/gaura-purnima" },
          { title: "Radhashtami", href: "/festivals/radhashtami" },
          { title: "Nityananda Trayodashi", href: "/festivals/nityananda" },
        ],
      },
      {
        header: "Yearly Celebrations",
        items: [
          { title: "Kartik Month", href: "/festivals/kartik" },
          { title: "Govardhan Puja", href: "/festivals/govardhan" },
          { title: "Narasimha Chaturdashi", href: "/festivals/narasimha" },
          { title: "Rama Navami", href: "/festivals/rama-navami" },
          { title: "Ekadashi Calendar", href: "/festivals/ekadashi" },
        ],
      },
    ],
    featuredCard: {
      image: "/images/festival_celebration_4k.png",
      date: "August 26, 2026",
      title: "Sri Krishna Janmashtami",
      desc: "Join us for the grandest celebration of Lord Krishna's appearance day.",
      href: "/festivals/janmashtami",
    },
  },
  {
    label: "Visit",
    href: "/visit",
    isMega: false,
    dropdownColumns: [
      {
        header: "Temple Information",
        items: [
          { title: "Darshan Timings", href: "/visit/darshan" },
          { title: "Temple Schedule", href: "/visit/schedule" },
          { title: "Daily Programs", href: "/visit/programs" },
          { title: "Aarti Timings", href: "/visit/aarti" },
        ],
      },
      {
        header: "Visitor Guide",
        items: [
          { title: "First Time Visitors", href: "/visit/first-time" },
          { title: "Dress Code", href: "/visit/dress-code" },
          { title: "Temple Etiquette", href: "/visit/etiquette" },
          { title: "Frequently Asked Questions", href: "/visit/faq" },
        ],
      },
      {
        header: "Location",
        items: [
          { title: "Directions", href: "/visit/directions" },
          { title: "Parking Information", href: "/visit/parking" },
          { title: "Nearby Attractions", href: "/visit/attractions" },
          { title: "Accommodation", href: "/visit/accommodation" },
        ],
      },
    ],
  },
  {
    label: "Activities",
    href: "/activities",
    isMega: false,
    dropdownColumns: [
      {
        header: "Education",
        items: [
          { title: "Bhagavad Gita Classes", href: "/activities/gita" },
          { title: "Srimad Bhagavatam Classes", href: "/activities/bhavagatam" },
          { title: "Youth Programs", href: "/activities/youth" },
          { title: "Children's Classes", href: "/activities/children" },
        ],
      },
      {
        header: "Community",
        items: [
          { title: "Sunday Feast", href: "/activities/sunday-feast" },
          { title: "Spiritual Retreats", href: "/activities/retreats" },
          { title: "Cultural Events", href: "/activities/cultural" },
          { title: "Community Gatherings", href: "/activities/gatherings" },
        ],
      },
      {
        header: "Outreach",
        items: [
          { title: "Harinam Sankirtan", href: "/activities/harinam" },
          { title: "Food Distribution", href: "/activities/food" },
          { title: "Prison Outreach", href: "/activities/prison" },
          { title: "College Programs", href: "/activities/college" },
        ],
      },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    isMega: false,
    dropdownColumns: [
      {
        header: "Volunteer",
        items: [
          { title: "Become a Volunteer", href: "/get-involved/volunteer" },
          { title: "Event Support", href: "/get-involved/events" },
          { title: "Temple Services", href: "/get-involved/services" },
          { title: "Community Outreach", href: "/get-involved/outreach" },
        ],
      },
      {
        header: "Donate",
        items: [
          { title: "One-Time Donation", href: "/donate/one-time" },
          { title: "Monthly Donation", href: "/donate/monthly" },
          { title: "Sponsor a Program", href: "/donate/sponsor" },
          { title: "Legacy Giving", href: "/donate/legacy" },
        ],
      },
      {
        header: "Membership",
        items: [
          { title: "Devotee Membership", href: "/get-involved/membership/devotee" },
          { title: "Community Membership", href: "/get-involved/membership/community" },
          { title: "Youth Membership", href: "/get-involved/membership/youth" },
        ],
      },
    ],
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Mobile drawer animation variants
  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: EASE, staggerChildren: 0.05, delayChildren: 0.1 }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: { duration: 0.4, ease: EASE }
    }
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: EASE } }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Mega Menu Core Styles */
        .mega-dropdown-panel {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 24px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
          padding: 32px;
          z-index: 100;
          cursor: default;
          pointer-events: auto;
          margin-top: 16px;
        }

        .mega-link-item {
          display: block;
          padding: 12px 16px;
          border-radius: 12px;
          color: #4A4A4A;
          font-family: var(--font-inter);
          transition: all 300ms ease;
          text-decoration: none;
        }

        .mega-link-item:hover {
          background: rgba(18, 58, 140, 0.04);
          color: #123A8C;
        }

        .mega-link-title {
          font-weight: 500;
          font-size: 15px;
          margin-bottom: 2px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .mega-link-item:hover .mega-link-title {
          color: #123A8C;
        }
        
        .mega-link-desc {
          font-size: 13px;
          color: #888;
        }

        .mega-col-header {
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A54A;
          margin-bottom: 16px;
          padding-left: 16px;
        }

        /* Nav Link Active State */
        .desktop-nav-link {
          position: relative;
          color: #1F1F1F;
          font-family: var(--font-inter);
          font-weight: 500;
          font-size: 16px;
          transition: color 300ms ease;
          padding: 8px 12px;
        }
        .desktop-nav-link:hover {
          color: #123A8C;
        }
        .desktop-nav-link .active-line {
          position: absolute;
          bottom: -2px;
          left: 20%;
          width: 60%;
          height: 2px;
          background: #D4AF37;
          border-radius: 2px;
        }

        /* Mobile Accordion */
        .mobile-accordion-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 16px 0;
          font-size: 20px;
          font-family: var(--font-inter);
          font-weight: 500;
          color: #1F1F1F;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
      `}} />

      {/* ── DESKTOP HEADER ── */}
      <header 
        className={`ultra-navbar ${scrolled ? "is-scrolled" : ""}`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10 group">
          <div className="w-[48px] h-[48px] bg-[var(--color-accent-primary)]/10 border border-[var(--color-accent-primary)]/20 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105">
            <LogoMark className="w-[28px] h-[28px] text-[var(--color-accent-primary)]" />
          </div>
          <div className="flex flex-col">
            <span
              className="tracking-tight text-[var(--color-text-primary)] transition-colors"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "19px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                lineHeight: "1.1",
              }}
            >
              Hare Krishna
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-accent-primary)",
                fontWeight: 600,
                marginTop: "2px",
                lineHeight: "1",
              }}
            >
              MOVEMENT
            </span>
          </div>
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden xl:flex items-center gap-6 relative h-full">
          {NAV_DATA.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            const hasDropdown = item.dropdown || item.dropdownColumns;
            const isHovered = activeDropdown === item.label;

            return (
              <div 
                key={item.label} 
                className="h-full flex items-center relative"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
              >
                <Link 
                  href={item.href}
                  className="desktop-nav-link flex items-center gap-1.5"
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${isHovered ? "rotate-180 text-[#123A8C]" : "text-gray-400"}`} 
                    />
                  )}
                  {isActive && (
                    <motion.div layoutId="activeNavLine" className="active-line" />
                  )}
                </Link>

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {isHovered && hasDropdown && (
                    <motion.div
                      className="mega-dropdown-panel"
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      style={{ 
                        width: item.isMega ? "900px" : item.dropdownColumns ? "max-content" : "320px",
                        left: item.isMega ? "50%" : "0%",
                        transform: item.isMega ? "translateX(-50%)" : "translateX(-20%)",
                      }}
                    >
                      {/* Simple List (About Us) */}
                      {item.dropdown && (
                        <div className="flex flex-col gap-1">
                          {item.dropdown.map((link) => (
                            <Link key={link.href} href={link.href} className="mega-link-item group/item" onClick={() => setActiveDropdown(null)}>
                              <div className="mega-link-title justify-between">
                                <span>{link.title}</span>
                                <ArrowRight size={14} className="text-[#123A8C] opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:-rotate-45" />
                              </div>
                              {link.desc && <div className="mega-link-desc">{link.desc}</div>}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Column Layout (Sevas, Visit, Activities, Get Involved, Festivals) */}
                      {item.dropdownColumns && (
                        <div className="flex gap-12">
                          <div className="flex gap-8">
                            {item.dropdownColumns.map((col, idx) => (
                              <div key={idx} className="flex flex-col min-w-[200px]">
                                <div className="mega-col-header">{col.header}</div>
                                <div className="flex flex-col gap-1">
                                  {col.items.map((link) => (
                                    <Link key={link.title} href={link.href} className="mega-link-item group/item" onClick={() => setActiveDropdown(null)}>
                                      <span className="mega-link-title justify-between">
                                        <span>{link.title}</span>
                                        <ArrowRight size={14} className="text-[#123A8C] opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:-rotate-45" />
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Featured Card for Mega Menu */}
                          {item.featuredCard && (
                            <div className="w-[320px] rounded-[16px] overflow-hidden bg-gray-50 flex flex-col group relative">
                              <div className="h-[160px] w-full bg-gray-200 relative overflow-hidden">
                                <Image 
                                  src={item.featuredCard.image} 
                                  alt={item.featuredCard.title} 
                                  fill 
                                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                                  unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-5 right-5 text-white">
                                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] mb-1">{item.featuredCard.date}</div>
                                  <div className="font-serif text-lg font-medium leading-tight">{item.featuredCard.title}</div>
                                </div>
                              </div>
                              <div className="p-5 flex flex-col flex-1 justify-between bg-white border border-t-0 border-gray-100 rounded-b-[16px]">
                                <p className="text-sm text-gray-500 mb-4">{item.featuredCard.desc}</p>
                                <Link 
                                  href={item.featuredCard.href}
                                  className="text-[13px] font-semibold text-[#123A8C] uppercase tracking-wider flex items-center gap-2 group-hover:text-[#D4AF37] transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  View Festival <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right: CTA */}
        <div className="hidden xl:flex items-center gap-4 relative z-10">
          <Link
            href="/donate"
            className="ultra-btn-secondary h-[48px] px-6"
            style={{ 
              borderRadius: 999, 
              border: "1px solid rgba(0,0,0,0.1)", 
              fontFamily: "var(--font-inter)", 
              fontWeight: 500,
              display: "flex",
              alignItems: "center"
            }}
          >
            Donate
          </Link>
          <Link
            href="/visit"
            className="ultra-btn-primary h-[48px] px-7"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 500, display: "flex", alignItems: "center" }}
          >
            Visit Temple
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="grid h-12 w-12 place-items-center rounded-full xl:hidden transition-colors bg-gray-50 hover:bg-gray-100"
          aria-label="Open mobile menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* ── MOBILE FULLSCREEN DRAWER ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100000] bg-white flex flex-col overflow-hidden"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-[42px] h-[42px] bg-[#123A8C]/10 rounded-full flex items-center justify-center">
                  <LogoMark className="w-[24px] h-[24px] text-[#123A8C]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold text-[#123A8C] leading-none">Hare Krishna</span>
                  <span className="font-sans text-[10px] tracking-widest text-[#D4AF37] font-bold mt-1">MOVEMENT</span>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-50 text-gray-800"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="flex flex-col">
                {NAV_DATA.map((item) => {
                  const hasDropdown = item.dropdown || item.dropdownColumns;
                  const isOpen = mobileAccordion === item.label;

                  return (
                    <motion.div key={item.label} variants={itemVariants} className="flex flex-col">
                      {hasDropdown ? (
                        <>
                          <button 
                            className="mobile-accordion-btn"
                            onClick={() => setMobileAccordion(isOpen ? null : item.label)}
                          >
                            {item.label}
                            <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#D4AF37]" : "text-gray-400"}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="py-4 pl-4 flex flex-col gap-6 bg-gray-50/50 rounded-b-2xl border-b border-l border-r border-gray-50">
                                  {/* Simple Dropdown */}
                                  {item.dropdown && (
                                    <div className="flex flex-col gap-4">
                                      {item.dropdown.map(link => (
                                        <Link 
                                          key={link.href} 
                                          href={link.href}
                                          className="text-[15px] font-medium text-gray-600"
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          {link.title}
                                        </Link>
                                      ))}
                                    </div>
                                  )}

                                  {/* Column Dropdown */}
                                  {item.dropdownColumns && (
                                    <div className="flex flex-col gap-6">
                                      {item.dropdownColumns.map((col, idx) => (
                                        <div key={idx} className="flex flex-col">
                                          <div className="text-[11px] font-bold tracking-widest uppercase text-[#D4AF37] mb-3">{col.header}</div>
                                          <div className="flex flex-col gap-3">
                                            {col.items.map(link => (
                                              <Link 
                                                key={link.title} 
                                                href={link.href}
                                                className="text-[15px] font-medium text-gray-600"
                                                onClick={() => setMobileMenuOpen(false)}
                                              >
                                                {link.title}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link 
                          href={item.href} 
                          className="mobile-accordion-btn"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col gap-4">
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="ultra-btn-secondary w-full h-[52px] rounded-full flex items-center justify-center font-medium font-sans border border-gray-200"
              >
                Donate
              </Link>
              <Link
                href="/visit"
                onClick={() => setMobileMenuOpen(false)}
                className="ultra-btn-primary w-full h-[52px] rounded-full flex items-center justify-center font-medium font-sans"
              >
                Visit Temple
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
