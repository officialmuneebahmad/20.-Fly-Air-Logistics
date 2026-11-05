"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "../ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronDown,
  MessageSquare,
  ArrowRight,
  Plane,
  Ship,
  Truck,
  FileCheck,
  Package,
  Warehouse,
  Shield,
  FileSpreadsheet,
  Boxes,
  ShieldAlert,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

// Service Icon Mapper
const serviceIconMap: Record<string, React.ElementType> = {
  Plane,
  Ship,
  Truck,
  FileCheck,
  Package,
  Warehouse,
  Shield,
  FileSpreadsheet,
  Boxes,
  ShieldAlert,
};

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // 200ms grace window prevents vanishing when moving mouse between trigger and dropdown
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
    },
    { name: "About", href: "/about" },
    { name: "Articles", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-white border-b border-brand-gray-200 sticky top-0 z-50 shadow-sm relative">
      {/* 
        Top Corporate Strip:
        CRITICAL RULE: Strictly HIDDEN on mobile (hidden md:block).
        Only visible on tablet & desktop for a clean, distraction-free mobile view.
      */}
      <div className="hidden md:block bg-brand-black text-brand-gray-200 text-xs py-2.5 px-6 lg:px-12 border-b border-brand-black-charcoal">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Office Location & Working Hours */}
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2 text-gray-200">
              <MapPin className="w-3.5 h-3.5 text-[#FF3B53] flex-shrink-0" />
              <span>84 Brandreth Road, Lahore, Pakistan</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#FF3B53] flex-shrink-0" />
              <span>Mon – Sat: 10:00 AM – 08:00 PM</span>
            </div>
          </div>

          {/* Right: Direct Hotlines */}
          <div className="flex items-center gap-6 text-xs font-medium">
            <a
              href="mailto:contact@flyairlogistics.com"
              className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF3B53] flex-shrink-0" />
              <span>contact@flyairlogistics.com</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="https://wa.me/923255577711"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-semibold hover:text-[#25D366] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0" />
              <span>+92 325 5577711</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Generous Padding, Spacing & Height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Official Uploaded Brand Logo */}
          <Logo variant="dark" size="md" href="/" />

          {/* Desktop Navigation with Decent Spacing & Padding */}
          <nav className="hidden lg:flex items-center h-full space-x-2 xl:space-x-3">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="h-full flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold tracking-wider uppercase transition-colors rounded-none ${
                        isActive(link.href)
                          ? "text-brand-red border-b-2 border-brand-red"
                          : "text-brand-black hover:text-brand-red"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-brand-gray-400 group-hover:text-brand-red transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-brand-red" : ""
                        }`}
                      />
                    </Link>

                    {/* 
                      Full-Width Mega Menu Dropdown:
                      Takes maximum available space across the viewport.
                      NO scrollbars, all 10 services visible immediately.
                      Invisible top bridge + debounce prevents vanishing when moving mouse to click.
                    */}
                    {servicesDropdownOpen && (
                      <div
                        className="absolute top-full left-0 right-0 w-full bg-white border-b-4 border-brand-red shadow-2xl z-50 border-t border-brand-gray-200 animate-in fade-in-50 duration-150 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:w-full before:content-['']"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
                          {/* Top Header Banner Strip */}
                          <div className="pb-4 mb-6 border-b border-brand-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="w-2.5 h-2.5 bg-brand-red" />
                              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-black">
                                International Forwarding Capabilities{" "}
                                <span className="text-brand-gray-400 font-normal">
                                  | 10 Specialized Logistics Divisions
                                </span>
                              </h3>
                            </div>
                            <Link
                              href="/services"
                              className="text-xs font-bold uppercase tracking-wider text-brand-red hover:underline flex items-center gap-1.5"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <span>View All Services Directory</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                          {/* 4-Column Spacious Grid (NO SCROLLBAR, Maximum Space) */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Column 1: Core Multimodal Modes */}
                            <div className="space-y-4">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-red border-b border-brand-gray-100 pb-2">
                                Multimodal Transport
                              </h4>
                              <div className="space-y-2">
                                {servicesData.slice(0, 3).map((service) => {
                                  const Icon = serviceIconMap[service.iconName] || Package;
                                  return (
                                    <Link
                                      key={service.slug}
                                      href={`/services/${service.slug}`}
                                      className="group flex items-start gap-3 p-2.5 hover:bg-brand-gray-50 border-l-2 border-transparent hover:border-brand-red transition-all"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      <div className="p-2 bg-brand-gray-100 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors flex-shrink-0">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div>
                                        <div className="font-bold text-xs uppercase tracking-tight text-brand-black group-hover:text-brand-red transition-colors leading-snug">
                                          {service.title}
                                        </div>
                                        <div className="text-[11px] text-brand-gray-500 line-clamp-1 mt-0.5">
                                          {service.tagline}
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Column 2: Regulatory, Cargo & Warehousing */}
                            <div className="space-y-4">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-red border-b border-brand-gray-100 pb-2">
                                Customs & Storage
                              </h4>
                              <div className="space-y-2">
                                {servicesData.slice(3, 6).map((service) => {
                                  const Icon = serviceIconMap[service.iconName] || Package;
                                  return (
                                    <Link
                                      key={service.slug}
                                      href={`/services/${service.slug}`}
                                      className="group flex items-start gap-3 p-2.5 hover:bg-brand-gray-50 border-l-2 border-transparent hover:border-brand-red transition-all"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      <div className="p-2 bg-brand-gray-100 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors flex-shrink-0">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div>
                                        <div className="font-bold text-xs uppercase tracking-tight text-brand-black group-hover:text-brand-red transition-colors leading-snug">
                                          {service.title}
                                        </div>
                                        <div className="text-[11px] text-brand-gray-500 line-clamp-1 mt-0.5">
                                          {service.tagline}
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Column 3: Specialized Logistics & Documentation */}
                            <div className="space-y-4">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-red border-b border-brand-gray-100 pb-2">
                                Trade Solutions
                              </h4>
                              <div className="space-y-2">
                                {servicesData.slice(6, 10).map((service) => {
                                  const Icon = serviceIconMap[service.iconName] || Package;
                                  return (
                                    <Link
                                      key={service.slug}
                                      href={`/services/${service.slug}`}
                                      className="group flex items-start gap-3 p-2.5 hover:bg-brand-gray-50 border-l-2 border-transparent hover:border-brand-red transition-all"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      <div className="p-2 bg-brand-gray-100 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors flex-shrink-0">
                                        <Icon className="w-4 h-4" />
                                      </div>
                                      <div>
                                        <div className="font-bold text-xs uppercase tracking-tight text-brand-black group-hover:text-brand-red transition-colors leading-snug">
                                          {service.title}
                                        </div>
                                        <div className="text-[11px] text-brand-gray-500 line-clamp-1 mt-0.5">
                                          {service.tagline}
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Column 4: Quick Action & Trade Desk Highlight Card */}
                            <div className="bg-brand-black text-white p-6 border-l-4 border-[#FF3B53] flex flex-col justify-between shadow-xl">
                              <div className="space-y-3">
                                <div className="inline-block bg-[#FF3B53] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-sm">
                                  Direct Freight Desk
                                </div>
                                <h4 className="text-sm font-heading font-black uppercase text-white tracking-tight leading-snug">
                                  Moving Cargo Worldwide
                                </h4>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                  Fast customs clearance & freight forwarding connecting all Pakistani ports and airports to global destinations.
                                </p>
                                <div className="pt-3 border-t border-brand-gray-800 text-[11px] text-gray-400 space-y-1">
                                  <p className="text-white font-semibold">Registered Office:</p>
                                  <p className="text-gray-200">84 Brandreth Road, Lahore</p>
                                  <p className="text-gray-300">10:00 AM – 08:00 PM (Mon – Sat)</p>
                                </div>
                              </div>

                              <div className="pt-5 space-y-2.5">
                                <a
                                  href="https://wa.me/923255577711"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#FF3B53] hover:bg-[#e02840] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-none shadow-md"
                                >
                                  <MessageSquare className="w-3.5 h-3.5 text-white" />
                                  <span>WhatsApp Desk</span>
                                </a>
                                <Link
                                  href="/contact"
                                  className="w-full inline-flex items-center justify-center py-2 px-3 border border-gray-600 hover:border-white text-gray-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-none text-center"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  Submit Inquiry &rarr;
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 text-sm font-bold tracking-wider uppercase transition-colors rounded-none ${
                    isActive(link.href)
                      ? "text-brand-red border-b-2 border-brand-red"
                      : "text-brand-black hover:text-brand-red"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href="/contact"
              variant="outline"
              size="md"
            >
              Contact
            </Button>
            <Button
              href="https://wa.me/923255577711"
              external
              variant="primary"
              size="md"
              className="gap-2 font-bold"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Clean Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 text-brand-black hover:text-brand-red focus:outline-none rounded-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-brand-gray-200 px-6 pt-5 pb-8 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-none ${
                    isActive(link.href)
                      ? "bg-brand-red text-white"
                      : "text-brand-black hover:bg-brand-gray-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 py-2 space-y-2 border-l-2 border-brand-red/30 my-1 ml-3">
                    {servicesData.slice(0, 5).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block py-1 text-xs text-brand-gray-700 hover:text-brand-red font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        • {s.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block py-1 text-xs font-bold text-brand-red"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="pt-4 border-t border-brand-gray-200 space-y-3">
            <Button
              href="/contact"
              variant="outline"
              size="md"
              fullWidth
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Button>
            <Button
              href="https://wa.me/923255577711"
              external
              variant="primary"
              size="md"
              fullWidth
              className="gap-2"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp: +92 325 5577711</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
