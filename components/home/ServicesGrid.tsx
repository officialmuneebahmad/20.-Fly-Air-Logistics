import React from "react";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import WingDivider from "../layout/WingDivider";
import Button from "../ui/Button";
import {
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
  ArrowRight,
  Check,
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
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

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-gray-50 px-4 sm:px-6 lg:px-12 border-b border-brand-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 px-3.5 py-1.5 mb-2">
            Core International Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-brand-black uppercase tracking-tight">
            Comprehensive Freight Forwarding Services
          </h2>
          <WingDivider centered theme="light" />
          <p className="text-sm sm:text-base text-brand-gray-600 leading-relaxed max-w-2xl mx-auto">
            Delivering bespoke multi-modal transport, customs brokerage, and
            supply chain execution across Pakistan and worldwide commercial lanes.
          </p>
        </div>

        {/* 10 Services Grid with Decent Margins & Padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Package;

            return (
              <div
                key={service.slug}
                className="group relative bg-white border border-brand-gray-200 hover:border-brand-red transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-2xl rounded-none overflow-hidden"
              >
                {/* Red top accent strip */}
                <div className="h-2 w-full bg-brand-gray-200 group-hover:bg-brand-red transition-colors duration-300" />

                <div className="p-8 sm:p-9 space-y-5 flex-grow">
                  {/* Header Row: Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-brand-gray-100 group-hover:bg-brand-red group-hover:text-white text-brand-black transition-colors duration-300 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-gray-400 group-hover:text-brand-red transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-black group-hover:text-brand-red transition-colors leading-snug">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-brand-gray-500 font-medium mt-1.5">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="pt-3 space-y-2 border-t border-brand-gray-100 text-xs text-brand-gray-700">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="p-6 bg-brand-gray-50 border-t border-brand-gray-200 flex items-center justify-between group-hover:bg-brand-black transition-colors duration-300">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-brand-black group-hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <span>Service Details</span>
                    <ArrowRight className="w-4 h-4 text-brand-red group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-brand-gray-400 group-hover:text-brand-gray-300 uppercase tracking-widest font-mono">
                    Pakistan &rarr; Global
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA within Services */}
        <div className="mt-20 text-center bg-white p-10 sm:p-14 border border-brand-gray-200 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-tight text-brand-black">
            Looking for a Tailored Multi-Modal Freight Route?
          </h3>
          <p className="text-sm sm:text-base text-brand-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            From factory pickup in Punjab or Sindh to overseas customs
            clearance and door delivery, our operations desk configures the
            fastest and most economical transit path.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="font-bold"
            >
              Contact Our Freight Desk
            </Button>
            <Button
              href="https://wa.me/923255577711"
              external
              variant="outline"
              size="md"
              className="font-bold"
            >
              Consult via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
