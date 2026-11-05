import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  MapPin,
  Clock,
  Mail,
  MessageSquare,
  ShieldCheck,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-gray-300 border-t-4 border-[#FF3B53]">
      {/* Top Banner Feature Bar with High-Contrast Vivid Accents */}
      <div className="border-b border-brand-black-charcoal bg-[#0A0C0F] py-10 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-5 border border-brand-black-charcoal bg-brand-black/60">
            <div className="w-12 h-12 bg-[#FF3B53]/15 border border-[#FF3B53] flex items-center justify-center flex-shrink-0">
              <Globe2 className="w-6 h-6 text-[#FF3B53]" />
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                Global Coverage
              </h4>
              <p className="text-xs text-brand-gray-300 mt-1">
                Connecting all Pakistani ports and airports to 150+ countries.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 border border-brand-black-charcoal bg-brand-black/60">
            <div className="w-12 h-12 bg-[#FF3B53]/15 border border-[#FF3B53] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#FF3B53]" />
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                Heritage Since 2012
              </h4>
              <p className="text-xs text-brand-gray-300 mt-1">
                Decades of forwarding expertise with roots tracing to the 1980s.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 border border-brand-black-charcoal bg-brand-black/60">
            <div className="w-12 h-12 bg-[#FF3B53]/15 border border-[#FF3B53] flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-[#FF3B53]" />
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                Direct Desk Support
              </h4>
              <p className="text-xs text-brand-gray-300 mt-1">
                Immediate quote requests and shipment consultation via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links - Decent Margins & Padding */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Address */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="light" size="md" href="/" />
            <p className="text-xs leading-relaxed text-brand-gray-300 max-w-sm pt-2">
              FLY AIR LOGISTICS is an international freight forwarding and customs
              brokerage enterprise headquartered in Lahore, Pakistan. Moving your
              cargo worldwide with speed, security, and precision since 2012, with
              foundational freight heritage originating in the 1980s.
            </p>

            {/* Founders & Leadership Attribution */}
            <div className="p-3.5 bg-brand-black-charcoal/40 border-l-2 border-[#FF3B53] space-y-1.5 max-w-sm">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                  Founders &amp; Executive Leadership
                </span>
              </div>
              <p className="text-xs text-white font-medium tracking-wide">
                Zaka-ur-Rehman &bull; Meeran Ahmad &bull; Abdullah Rehman
              </p>
              <p className="text-[11px] text-brand-gray-400 leading-snug">
                Pioneering international freight forwarding, air chartering, and customs clearance across Pakistan.
              </p>
            </div>

            <div className="pt-2 space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF3B53] flex-shrink-0 mt-0.5" />
                <span className="text-gray-100">
                  84 Brandreth Road, Lahore, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span className="text-gray-100">
                  Business Hours: 10:00 AM – 08:00 PM (Mon – Sat)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <a
                  href="mailto:contact@flyairlogistics.com"
                  className="text-gray-100 hover:text-white underline transition-colors"
                >
                  contact@flyairlogistics.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/923255577711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#25D366] font-bold transition-colors"
                >
                  WhatsApp: +92 325 5577711
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Services Left */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-5 border-l-2 border-[#FF3B53] pl-2.5">
              Primary Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-brand-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF3B53]" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services Right */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-5 border-l-2 border-[#FF3B53] pl-2.5">
              Specialized Logistics
            </h3>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(5, 10).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-brand-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF3B53]" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-5 border-l-2 border-[#FF3B53] pl-2.5">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/about"
                  className="text-brand-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-brand-gray-300 hover:text-white transition-colors"
                >
                  All Services Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-brand-gray-300 hover:text-white transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-gray-300 hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-brand-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-brand-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-[#050608] border-t border-brand-black-charcoal py-6 px-4 sm:px-6 lg:px-12 text-xs text-brand-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} FLY AIR LOGISTICS. All rights reserved.
            Founded by Zaka-ur-Rehman, Meeran Ahmad &amp; Abdullah Rehman.
            Headquartered at 84 Brandreth Road, Lahore, Pakistan.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms of Carriage
            </Link>
            <span>•</span>
            <Link
              href="/sitemap.xml"
              className="hover:text-white transition-colors"
            >
              XML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
