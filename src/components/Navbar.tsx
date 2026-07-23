"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, Mail, MessageCircle, Youtube, Instagram, Twitter, Facebook, Moon, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoMark } from "@/components/brand";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Mega Menu Data Structure
type NavItem = {
  label: string;
  href: string;
  isMega: boolean;
  dropdown?: { title: string; href: string; desc?: string }[];
  dropdownColumns?: {
    header: string;
    items?: { title: string; href: string; desc?: string }[];
    links?: { title: string; href: string; desc?: string }[];
  }[];
  highlight?: {
    title: string;
    desc: string;
    href: string;
    action: string;
  };
  featuredCard?: {
    title: string;
    desc: string;
    image: string;
    href: string;
    action: string;
    date?: string;
  };
};

const NAV_DATA: NavItem[] = [
  { label: "Home", href: "/", isMega: false },
  {
    label: "About Us",
    href: "/about",
    isMega: false,
    dropdown: [
      { title: "About Temple", href: "/about/temple" },
      { title: "Our Centers", href: "/about/centers" },
      { title: "Our Architecture", href: "/about/architecture" },
      { title: "Leadership", href: "/about/leadership" },
      { title: "Governance", href: "/about/governance" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Mandir",
    href: "/mandir",
    isMega: false,
    dropdown: [
      { title: "Explore Temple", href: "/mandir/explore" },
      { title: "Our Schedule", href: "/mandir/schedule" },
      { title: "News & Media Coverage", href: "/mandir/news" },
      { title: "Gallery", href: "/mandir/gallery" },
      { title: "Darshans", href: "/mandir/darshans" },
      { title: "Wallpapers", href: "/mandir/wallpapers" },
    ],
  },
  {
    label: "Prabhupada",
    href: "/prabhupada",
    isMega: false,
    dropdown: [
      { title: "About", href: "/prabhupada/about" },
      { title: "Qualities", href: "/prabhupada/qualities" },
      { title: "Facts", href: "/prabhupada/facts" },
      { title: "Milestone Timeline", href: "/prabhupada/timeline" },
      { title: "Books", href: "/prabhupada/books" },
      { title: "Sampradaya", href: "/prabhupada/sampradaya" },
      { title: "Quotes", href: "/prabhupada/quotes" },
    ],
  },
  {
    label: "Activities",
    href: "/activities",
    isMega: false,
    dropdown: [
      { title: "Education", href: "/activities/education" },
      { title: "Food Distribution", href: "/activities/food-distribution" },
      { title: "Cow Protection", href: "/activities/cow-protection" },
      { title: "Yuga Dharma", href: "/activities/yuga-dharma" },
      { title: "Projects", href: "/activities/projects" },
      { title: "Events", href: "/activities/events" },
      { title: "Services", href: "/activities/services" },
    ],
  },
  {
    label: "Festivals",
    href: "/festivals",
    isMega: false,
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    isMega: false,
    dropdown: [
      { title: "Blogs", href: "/get-involved/blogs" },
      { title: "Temple Universe", href: "/get-involved/temple-universe" },
      { title: "Web Stories", href: "/get-involved/web-stories" },
      { title: "Vaishnav Calendar", href: "/get-involved/calendar" },
      { title: "Volunteer", href: "/get-involved/volunteer" },
      { title: "Careers", href: "/get-involved/careers" },
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
          top: calc(100% + 4px);
          left: 0;
          background: #F6F4FB;
          border: 1px solid rgba(18, 58, 140, 0.1);
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          padding: 8px 6px;
          z-index: 100;
          cursor: default;
          pointer-events: auto;
        }

        .mega-link-item {
          display: block;
          padding: 8px 12px;
          border-radius: 8px;
          color: #1F1F1F;
          font-family: var(--font-inter);
          transition: all 200ms ease;
          text-decoration: none;
        }

        .mega-link-item:hover {
          background: rgba(18, 58, 140, 0.06);
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
          color: #1D5C96;
          margin-bottom: 12px;
          padding-left: 12px;
        }

        /* Nav Link Active State */
        .desktop-nav-link {
          position: relative;
          color: #333333;
          font-family: var(--font-inter);
          font-weight: 500;
          font-size: 14.5px;
          transition: color 300ms ease;
          padding: 8px 14px;
          border-radius: 6px;
        }
        .desktop-nav-link:hover, .desktop-nav-link.active-nav-link {
          color: #123A8C;
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
      <div className="w-full flex flex-col">
        {/* Top Bar */}
        <div className="hidden md:flex bg-[#F6F4FB] h-[36px] w-full items-center justify-between px-6 xl:px-12 text-[12px] text-[#4A4A4A] border-b border-[rgba(0,0,0,0.03)] font-medium">
          <div className="flex items-center gap-6">
            <a href="mailto:info@hkmvizag.org" className="flex items-center gap-2 hover:text-[#123A8C] transition-colors">
              <Mail size={14} strokeWidth={1.5} /> <span>info@hkmvizag.org</span>
            </a>
            <a href="tel:+919799999881" className="flex items-center gap-2 hover:text-[#123A8C] transition-colors">
              <MessageCircle size={14} strokeWidth={1.5} /> <span>+91-97999 99881</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white px-3 py-[3px] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-gray-100 text-[11px] font-semibold text-[#1F3254]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123A8C]"></span>
              Darshan Open 4:30 - 13:00
            </div>
            <div className="flex items-center gap-4 text-[#4A4A4A]">
              <a href="#" className="hover:text-[#123A8C] transition-colors"><Youtube size={15} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-[#123A8C] transition-colors"><Instagram size={15} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-[#123A8C] transition-colors"><Twitter size={15} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-[#123A8C] transition-colors"><Facebook size={15} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-[9999] w-full flex justify-center">
        <header 
          className={`ultra-navbar !static transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled 
              ? "shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[rgba(18,58,140,0.15)] bg-white/95 backdrop-blur-md" 
              : "border border-transparent border-b-[rgba(0,0,0,0.05)] bg-white"
          }`}
          style={{ 
            height: '64px',
            width: scrolled ? 'calc(100% - 32px)' : '100%',
            maxWidth: scrolled ? '1400px' : '100%',
            borderRadius: scrolled ? '16px' : '0px',
            marginTop: scrolled ? '8px' : '0px'
          }}
          onMouseLeave={() => setActiveDropdown(null)}
        >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10 group">
          <img
            src="/images/logo.png"
            alt="Srila Prabhupada ISKCON Gambheeram logo"
            width={160}
            height={44}
            className="object-contain object-left transition-transform duration-500 group-hover:scale-[1.02] max-h-[44px]"
          />
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden xl:flex items-center gap-8 relative h-full">
          {NAV_DATA.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            const hasDropdown = item.dropdown || item.dropdownColumns;
            const isHovered = activeDropdown === item.label;

            return (
              <div 
                key={item.label} 
                className="h-full flex items-center relative"
                onMouseEnter={() => setActiveDropdown(hasDropdown ? item.label : null)}
              >
                <Link 
                  href={item.href}
                  className={`desktop-nav-link flex items-center gap-1.5 ${isActive ? 'active-nav-link' : ''}`}
                  onClick={(e) => {
                    if (hasDropdown) {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${isHovered || isActive ? "rotate-180 text-[#123A8C]" : "text-gray-400"}`} 
                    />
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
                        width: item.dropdownColumns ? "max-content" : "240px",
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

                      {/* Column Layout */}
                      {item.dropdownColumns && (
                        <div className="flex gap-8">
                          {item.highlight && (
                            <div className="w-[260px] flex flex-col justify-between p-5 bg-gray-50/70 rounded-[14px] border border-gray-100/80 group/hl">
                              <div>
                                <h3 className="text-lg font-serif font-medium text-gray-900 mb-2">{item.highlight.title}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{item.highlight.desc}</p>
                              </div>
                              <Link 
                                href={item.highlight.href}
                                className="mt-4 text-[13px] font-semibold text-[#123A8C] uppercase tracking-wider flex items-center gap-2 group-hover/hl:text-[#0a2663] transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.highlight.action} <ArrowRight size={14} className="transition-transform group-hover/hl:translate-x-1" />
                              </Link>
                            </div>
                          )}
                          <div className="flex gap-6 py-2">
                            {item.dropdownColumns.map((col, idx) => (
                              <div key={idx} className="flex flex-col min-w-[170px]">
                                <div className="mega-col-header">{col.header}</div>
                                <div className="flex flex-col gap-1">
                                  {(col.items || col.links || []).map((link) => (
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
                                  <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent-primary)] mb-1">{item.featuredCard.date}</div>
                                  <div className="font-serif text-lg font-medium leading-tight">{item.featuredCard.title}</div>
                                </div>
                              </div>
                              <div className="p-5 flex flex-col flex-1 justify-between bg-white border border-t-0 border-gray-100 rounded-b-[16px]">
                                <p className="text-sm text-gray-500 mb-4">{item.featuredCard.desc}</p>
                                <Link 
                                  href={item.featuredCard.href}
                                  className="text-[13px] font-semibold text-[#123A8C] uppercase tracking-wider flex items-center gap-2 group-hover:text-[var(--color-accent-primary)] transition-colors"
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
        <div className="hidden xl:flex items-center gap-3 relative z-10">
          <Link
            href="/donate"
            className="h-9 px-5 rounded-lg flex items-center gap-2 bg-[#123A8C] text-white font-medium text-[13px] hover:bg-[#0a2663] transition-colors shadow-sm group/btn"
          >
            <Heart size={14} fill="currentColor" className="animate-heart-beat" />
            Donate Now
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="grid h-12 w-12 place-items-center rounded-lg xl:hidden transition-colors bg-gray-50 hover:bg-gray-100"
          aria-label="Open mobile menu"
        >
          <Menu size={24} />
        </button>
      </header>
      </div>

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
                <img
                  src="/images/logo.png"
                  alt="Srila Prabhupada ISKCON Gambheeram logo"
                  width={150}
                  height={48}
                  className="object-contain object-left"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="h-12 w-12 flex items-center justify-center rounded-lg bg-gray-50 text-gray-800"
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
                            <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--color-accent-primary)]" : "text-gray-400"}`} />
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
                                          <div className="text-[11px] font-bold tracking-widest uppercase text-[var(--color-accent-primary)] mb-3">{col.header}</div>
                                          <div className="flex flex-col gap-3">
                                            {(col.items || col.links || []).map(link => (
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
                className="ultra-btn-secondary w-full h-[52px] rounded-lg flex items-center justify-center font-medium font-sans border border-gray-200"
              >
                Donate
              </Link>
              <Link
                href="/visit"
                onClick={() => setMobileMenuOpen(false)}
                className="ultra-btn-primary w-full h-[52px] rounded-lg flex items-center justify-center font-medium font-sans"
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
