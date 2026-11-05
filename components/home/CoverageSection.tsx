import React from "react";
import WingDivider from "../layout/WingDivider";
import {
  Anchor,
  Plane,
  Building2,
  Globe2,
  CheckCircle2,
} from "lucide-react";

export const CoverageSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-black text-white px-4 sm:px-6 lg:px-12 border-b border-brand-black-charcoal relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-[#FF3B53] px-3.5 py-1.5 shadow-sm">
            National Gateways & International Corridors
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight">
            From All Ports & Airports of Pakistan to Worldwide
          </h2>
          <WingDivider centered theme="dark" />
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
            Operating comprehensive Import and Export forwarding networks
            interfacing directly with Pakistan Customs, major container liners,
            and international air cargo carriers.
          </p>
        </div>

        {/* 4 Gateway Pillars with High-Contrast Vivid Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Pillar 1: Seaports */}
          <div className="p-7 bg-[#0E1117] border-t-4 border-[#FF3B53] border-x border-b border-brand-gray-800 space-y-5">
            <div className="w-12 h-12 bg-[#FF3B53]/15 border border-[#FF3B53] flex items-center justify-center">
              <Anchor className="w-6 h-6 text-[#FF3B53]" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-white">
                Seaports of Pakistan
              </h3>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Deep-water maritime berths for containerized & breakbulk cargo.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-gray-200 border-t border-brand-gray-800 pt-4">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Karachi Port Trust (KPT)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Port Muhammad Bin Qasim (QICT)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Gwadar Deep Sea Port</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Bulk Oil & Liquid Terminals (FOTCO)</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Airports */}
          <div className="p-7 bg-[#0E1117] border-t-4 border-[#FF3B53] border-x border-b border-brand-gray-800 space-y-5">
            <div className="w-12 h-12 bg-[#FF3B53]/15 border border-[#FF3B53] flex items-center justify-center">
              <Plane className="w-6 h-6 text-[#FF3B53]" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-white">
                Air Cargo Hubs
              </h3>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Scheduled flights & express charters at all major Air Freight Units.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-gray-200 border-t border-brand-gray-800 pt-4">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Allama Iqbal Int&apos;l (LHE) - Lahore</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Jinnah Int&apos;l (KHI) - Karachi</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Islamabad Int&apos;l (ISB) - Capital</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Sialkot Int&apos;l (SKT) & Multan (MUX)</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Inland Dry Ports */}
          <div className="p-7 bg-[#0E1117] border-t-4 border-[#FF3B53] border-x border-b border-brand-gray-800 space-y-5">
            <div className="w-12 h-12 bg-[#FF3B53]/15 border border-[#FF3B53] flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#FF3B53]" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-white">
                Inland Dry Ports
              </h3>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Customs-bonded clearance directly inside manufacturing clusters.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-gray-200 border-t border-brand-gray-800 pt-4">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Lahore Dry Port (Prem Nagar / Mughalpura)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Sialkot Dry Port Trust (Sambrial)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Faisalabad Dry Port Trust</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Multan, Peshawar & Rawalpindi Depots</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Global Destinations */}
          <div className="p-7 bg-[#0E1117] border-t-4 border-[#FF3B53] border-x border-b border-brand-gray-800 space-y-5">
            <div className="w-12 h-12 bg-[#FF3B53]/15 border border-[#FF3B53] flex items-center justify-center">
              <Globe2 className="w-6 h-6 text-[#FF3B53]" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-white">
                Global Destinations
              </h3>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Direct export-import trade lanes with vetted global agent networks.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-gray-200 border-t border-brand-gray-800 pt-4">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>North America: USA & Canada</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>UK & European Union</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Middle East & GCC (UAE, KSA)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>East Asia, China & Australia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Import vs Export Summary Banner */}
        <div className="mt-14 bg-brand-black-charcoal p-8 sm:p-10 border border-brand-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-bold text-[#FF3B53] uppercase tracking-wider">
              Dual Operational Wings
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
              Export Outbound & Import Inbound Services
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 mt-2 leading-relaxed">
              Whether you are an exporter dispatching manufactured goods out of
              Punjab or an importer bringing raw industrial polymers, machinery,
              or consumer items through Karachi, we oversee the entire logistics
              dossier.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <div className="p-5 bg-brand-black border-l-2 border-[#FF3B53]">
              <div className="text-xs font-bold text-white uppercase">
                Export Services
              </div>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                PSW/WeBOC filing, Form E coordination, carrier bookings, and port
                gate-in.
              </p>
            </div>
            <div className="p-5 bg-brand-black border-l-2 border-[#FF3B53]">
              <div className="text-xs font-bold text-white uppercase">
                Import Clearance
              </div>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Customs duty assessment, valuation, de-stuffing, and delivery to
                factory gate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
