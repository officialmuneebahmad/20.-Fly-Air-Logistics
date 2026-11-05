import React from "react";
import type { Metadata } from "next";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import WingDivider from "@/components/layout/WingDivider";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/home/CtaBanner";
import {
  ShieldCheck,
  Target,
  Compass,
  Building,
  CheckCircle2,
  Anchor,
  Plane,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Company Heritage Since 2012 (Roots from 1980s)",
  description:
    "Learn about Fly Air Logistics: our four-decade logistics heritage originating in the 1980s on Brandreth Road, Lahore, and our corporate incorporation since 2012.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Fly Air Logistics | International Freight Forwarders Pakistan",
    description:
      "Moving Your Cargo Worldwide from Pakistan Since 2012 (Roots from 1980s). Our history, mission, leadership, and operational capabilities.",
    url: "https://flyairlogistics.com/about",
    images: [
      {
        url: "https://flyairlogistics.com/og-image.jpg",
        secureUrl: "https://flyairlogistics.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Fly Air Logistics - International Freight Forwarders",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <ServiceBreadcrumbs items={[{ label: "About" }]} />

      {/* Hero Section with High-Contrast Vivid Accents */}
      <section className="bg-brand-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b-2 border-[#FF3B53]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-[#FF3B53] px-3.5 py-1.5 shadow-md">
            Corporate Heritage & Overview
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-white leading-tight">
            Moving Your Cargo Worldwide Since 2012
          </h1>
          <p className="text-lg sm:text-xl text-[#FF3B53] font-bold">
            With Freight & Forwarding Roots Dating Back to the 1980s
          </p>
          <WingDivider centered theme="dark" />
          <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Headquartered on Brandreth Road, Lahore, FLY AIR LOGISTICS stands as a
            premier international freight forwarder and licensed customs brokerage,
            bridging Pakistan’s industrial heartlands with international supply
            chains across 150+ countries.
          </p>
        </div>
      </section>

      {/* Heritage & Timeline Section - Decent Margins & Padding */}
      <section className="py-20 sm:py-28 bg-white px-4 sm:px-6 lg:px-12 border-b border-brand-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 px-3.5 py-1.5">
                Our Origin Story
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-brand-black uppercase tracking-tight leading-tight">
                From Historic Brandreth Road to the World&apos;s Major Ports
              </h2>
              <WingDivider centered={false} theme="light" />

              <div className="space-y-4 text-sm sm:text-base text-brand-gray-700 leading-[1.85]">
                <p>
                  The foundational roots of our logistics and commercial operations
                  took shape during the 1980s along Brandreth Road, Lahore—the
                  historic center of Pakistan&apos;s industrial machinery,
                  manufacturing supplies, and hardware trade.
                </p>
                <p>
                  As Pakistani manufacturing evolved from domestic distribution to
                  vibrant international exports, our trade advisory expanded into
                  cross-border freight movement, ocean container drayage, and air
                  cargo logistics.
                </p>
                <p>
                  In <strong>2012</strong>, the enterprise formally incorporated as{" "}
                  <strong>FLY AIR LOGISTICS</strong>, establishing direct agency
                  networks, investing in digital customs systems (WeBOC and Pakistan
                  Single Window), and formalizing long-term space commitments with
                  the world’s leading container shipping lines and air carriers.
                </p>
              </div>

              <div className="pt-3">
                <Button href="/contact" variant="primary" size="md">
                  Partner with Our Freight Desk
                </Button>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 bg-brand-gray-50 border-l-4 border-brand-red border border-brand-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 bg-brand-red text-white text-xs font-bold">
                    1980s
                  </div>
                  <h3 className="text-base font-bold uppercase text-brand-black">
                    Commercial & Logistics Foundations
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed">
                  Began commercial trade coordination and inland logistics out of
                  Brandreth Road, Lahore, building institutional trust with local
                  manufacturers and customs houses.
                </p>
              </div>

              <div className="p-7 bg-brand-gray-50 border-l-4 border-brand-red border border-brand-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 bg-brand-red text-white text-xs font-bold">
                    2012
                  </div>
                  <h3 className="text-base font-bold uppercase text-brand-black">
                    Formal Establishment of Fly Air Logistics
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed">
                  Incorporated as an international freight forwarder. Expanded air
                  cargo allocations out of Lahore (LHE) and ocean contracts via
                  Karachi Port Trust (KPT) and Port Qasim (QICT).
                </p>
              </div>

              <div className="p-7 bg-brand-gray-50 border-l-4 border-brand-red border border-brand-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 bg-brand-red text-white text-xs font-bold">
                    Today
                  </div>
                  <h3 className="text-base font-bold uppercase text-brand-black">
                    Nationwide Reach & 150+ Global Destinations
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed">
                  Managing full-scale multi-modal operations: air cargo, FCL/LCL ocean
                  consolidation, customs brokerage on PSW, and door-to-door deliveries
                  for Pakistan&apos;s leading trade sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 sm:py-28 bg-brand-gray-50 px-4 sm:px-6 lg:px-12 border-b border-brand-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-white p-8 sm:p-12 border border-brand-gray-200 border-t-4 border-t-brand-red shadow-sm space-y-5">
              <div className="w-12 h-12 bg-brand-red/10 border border-brand-red flex items-center justify-center text-brand-red">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-brand-black">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-brand-gray-700 leading-relaxed">
                To empower Pakistani exporters and international importers with
                frictionless, predictable, and cost-effective multi-modal freight
                forwarding. We safeguard cargo value, streamline regulatory
                compliance, and accelerate global transit through disciplined
                operational execution.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-brand-gray-700 pt-4 border-t border-brand-gray-100">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>Uncompromising cargo safety and handling protocols</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>Complete transparency with zero hidden terminal fees</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>Deep commitment to Pakistan&apos;s export growth</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 sm:p-12 border border-brand-gray-200 border-t-4 border-t-brand-black shadow-sm space-y-5">
              <div className="w-12 h-12 bg-brand-black/10 border border-brand-black flex items-center justify-center text-brand-black">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-brand-black">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base text-brand-gray-700 leading-relaxed">
                To be the most trusted international freight forwarding brand
                originating from Pakistan—recognized globally for unyielding
                integrity, customs expertise, responsive customer service, and
                strategic global supply chain connectivity.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-brand-gray-700 pt-4 border-t border-brand-gray-100">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-black flex-shrink-0" />
                  <span>Leading the digital transformation of cross-border trade</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-black flex-shrink-0" />
                  <span>Expanding direct LCL consolidation lanes from Lahore</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-black flex-shrink-0" />
                  <span>Bridging regional exporters with emerging global trade hubs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founders & Executive Leadership */}
      <section className="py-20 sm:py-24 bg-brand-gray-50 border-b border-brand-gray-200 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 px-3.5 py-1.5">
              Executive Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black uppercase tracking-tight text-brand-black">
              Company Founders
            </h2>
            <WingDivider centered />
            <p className="text-sm text-brand-gray-600 mt-3 leading-relaxed">
              Guided by four decades of Pakistani logistics heritage, our founding leadership oversees every critical corridor in international air cargo, ocean shipping, and nationwide customs clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-brand-gray-200 p-8 space-y-4 hover:border-brand-red transition-all">
              <div className="w-12 h-12 bg-brand-black text-white flex items-center justify-center font-black text-lg">
                ZR
              </div>
              <div>
                <h3 className="text-lg font-heading font-black uppercase tracking-wide text-brand-black">
                  Zaka-ur-Rehman
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red mt-1">
                  Co-Founder &amp; Executive Leadership
                </p>
              </div>
              <p className="text-xs text-brand-gray-600 leading-relaxed pt-2 border-t border-brand-gray-100">
                Foundational freight visionary with deep roots in Brandreth Road logistics dating back to the 1980s, steering bilateral air and sea forwarding corridors.
              </p>
            </div>

            <div className="bg-white border-2 border-brand-gray-200 p-8 space-y-4 hover:border-brand-red transition-all">
              <div className="w-12 h-12 bg-brand-black text-white flex items-center justify-center font-black text-lg">
                MA
              </div>
              <div>
                <h3 className="text-lg font-heading font-black uppercase tracking-wide text-brand-black">
                  Meeran Ahmad
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red mt-1">
                  Co-Founder &amp; Executive Leadership
                </p>
              </div>
              <p className="text-xs text-brand-gray-600 leading-relaxed pt-2 border-t border-brand-gray-100">
                Spearheading multimodal shipping operations, carrier rate negotiations, and port clearance networks across Karachi, Lahore, and Islamabad gateways.
              </p>
            </div>

            <div className="bg-white border-2 border-brand-gray-200 p-8 space-y-4 hover:border-brand-red transition-all">
              <div className="w-12 h-12 bg-brand-black text-white flex items-center justify-center font-black text-lg">
                AR
              </div>
              <div>
                <h3 className="text-lg font-heading font-black uppercase tracking-wide text-brand-black">
                  Abdullah Rehman
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red mt-1">
                  Co-Founder &amp; Executive Leadership
                </p>
              </div>
              <p className="text-xs text-brand-gray-600 leading-relaxed pt-2 border-t border-brand-gray-100">
                Driving corporate partnerships, global agency networks, digital customs compliance (PSW/WeBOC), and tailored enterprise supply chain solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & Institutional Accreditations on Dark Black */}
      <section className="py-20 sm:py-28 bg-brand-black text-white px-4 sm:px-6 lg:px-12 border-b border-brand-black-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-[#FF3B53] px-3.5 py-1.5 shadow-sm">
              Corporate Governance
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black uppercase tracking-tight text-white">
              Why Corporate Traders Choose Fly Air Logistics
            </h2>
            <WingDivider centered theme="dark" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-7 bg-[#0E1117] border-l-4 border-[#FF3B53] border border-brand-gray-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#FF3B53]" />
              <h3 className="text-sm font-bold uppercase text-white">
                FBR & Customs Licensed
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Registered customs clearing agent authorized for digital GD filings
                across all Pakistan Collectorates.
              </p>
            </div>

            <div className="p-7 bg-[#0E1117] border-l-4 border-[#FF3B53] border border-brand-gray-800 space-y-3">
              <Plane className="w-6 h-6 text-[#FF3B53]" />
              <h3 className="text-sm font-bold uppercase text-white">
                IATA Airline Allocations
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Direct agreements with top international carriers ensuring reliable
                cargo space during peak seasons.
              </p>
            </div>

            <div className="p-7 bg-[#0E1117] border-l-4 border-[#FF3B53] border border-brand-gray-800 space-y-3">
              <Anchor className="w-6 h-6 text-[#FF3B53]" />
              <h3 className="text-sm font-bold uppercase text-white">
                Global Ocean Carrier Contracts
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Volume contracts with Maersk, MSC, CMA CGM, and Hapag-Lloyd for
                secure container bookings.
              </p>
            </div>

            <div className="p-7 bg-[#0E1117] border-l-4 border-[#FF3B53] border border-brand-gray-800 space-y-3">
              <Building className="w-6 h-6 text-[#FF3B53]" />
              <h3 className="text-sm font-bold uppercase text-white">
                Permanent Lahore Headquarters
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Established physical presence at 84 Brandreth Road, Lahore,
                operating continuously Monday through Saturday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </>
  );
}
