import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import WingDivider from "@/components/layout/WingDivider";
import CtaBanner from "@/components/home/CtaBanner";
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

export const metadata: Metadata = {
  title: "Freight Forwarding Services | Air, Sea & Customs Clearance Pakistan",
  description:
    "Explore our complete suite of 10 international freight forwarding solutions: Air Cargo, Ocean Container Shipping, Land Drayage, Customs Clearance, and Door-to-Door delivery.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Freight Forwarding Services | FLY AIR LOGISTICS Pakistan",
    description:
      "Comprehensive multi-modal freight solutions: Air Freight, Sea Freight (FCL/LCL), Customs Clearance, and Warehousing from Pakistan to worldwide.",
    url: "https://flyairlogistics.com/services",
    images: [
      {
        url: "https://flyairlogistics.com/og-image.jpg",
        secureUrl: "https://flyairlogistics.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FLY AIR LOGISTICS - Freight Forwarding Services Pakistan",
      },
    ],
  },
};

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

export default function ServicesIndexPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <ServiceBreadcrumbs items={[{ label: "Services" }]} />

      {/* Hero Header with High Contrast on Black */}
      <section className="bg-brand-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b-2 border-[#FF3B53]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-[#FF3B53] px-3.5 py-1.5 shadow-sm">
            Full-Spectrum Logistics Suite
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-white leading-tight">
            International Freight Forwarding Services
          </h1>
          <WingDivider centered theme="dark" />
          <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal">
            Connecting Pakistani exporters and global importers with reliable air
            space, container bookings, inland highway transport, and licensed
            customs clearance since 2012, with forwarding roots dating to the 1980s.
          </p>
        </div>
      </section>

      {/* Services Listing Section - Generous Margins & Padding */}
      <section className="py-20 sm:py-28 bg-brand-gray-50 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {servicesData.map((service, idx) => {
              const Icon = iconMap[service.iconName] || Package;

              return (
                <div
                  key={service.slug}
                  className="bg-white border border-brand-gray-200 hover:border-brand-red transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
                >
                  <div className="p-8 sm:p-9 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-brand-gray-100 group-hover:bg-brand-red group-hover:text-white text-brand-black transition-colors flex items-center justify-center shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono font-bold text-brand-gray-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-black group-hover:text-brand-red transition-colors leading-snug">
                        <Link href={`/services/${service.slug}`}>
                          {service.title}
                        </Link>
                      </h2>
                      <p className="text-xs text-brand-gray-500 font-medium mt-1.5">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="pt-3 border-t border-brand-gray-100 space-y-2 text-xs text-brand-gray-700">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-brand-gray-50 border-t border-brand-gray-200 flex items-center justify-between group-hover:bg-brand-black transition-colors">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-brand-black group-hover:text-white flex items-center gap-2 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 text-brand-red" />
                    </Link>
                    <span className="text-[11px] text-brand-gray-400 uppercase tracking-widest font-mono">
                      Worldwide
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner />
    </>
  );
}
