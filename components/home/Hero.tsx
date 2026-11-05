import React from "react";
import Button from "../ui/Button";
import WingDivider from "../layout/WingDivider";
import {
  Plane,
  Ship,
  Truck,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-brand-black via-[#11141A] to-brand-black text-white pt-16 sm:pt-20 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden border-b-2 border-[#FF3B53]">
      {/* Subtle Geometric Background Pattern / Wing Motif Watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200L600 50L1200 200L1000 350L600 200L200 350L0 200Z"
            fill="#FFFFFF"
          />
          <path
            d="M0 450L600 300L1200 450L950 600L600 450L250 600L0 450Z"
            fill="#FF3B53"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Hero Copy (Col 1-8) */}
          <div className="lg:col-span-8 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Tagline Badge - Solid High-Visibility Contrast */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#FF3B53] text-white text-xs font-bold tracking-widest uppercase shadow-md">
              <span className="w-2 h-2 bg-white animate-pulse" />
              <span>FLY AIR LOGISTICS • International Freight Forwarders</span>
            </div>

            {/* Core H1 Headline with Vivid High-Contrast Red */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.18] uppercase text-white">
              Moving Your Cargo{" "}
              <span className="text-[#FF3B53] underline decoration-[#FF3B53]/50 decoration-4 underline-offset-8">
                Worldwide
              </span>{" "}
              From Pakistan Since 2012{" "}
              <span className="text-gray-300 text-2xl sm:text-3xl md:text-4xl block sm:inline font-normal normal-case">
                (Roots from 1980s).
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed font-normal">
              Direct Air Freight, Ocean Shipping (FCL/LCL), Land Drayage, and
              Licensed Customs Clearance from All Ports, Airports, and Dry
              Ports of Pakistan to global markets worldwide.
            </p>

            {/* Quick Trust Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-semibold text-gray-100">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>All Pakistan Ports & Airports</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Licensed WeBOC & PSW Agents</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B53] flex-shrink-0" />
                <span>Air, Ocean & Door-to-Door</span>
              </div>
            </div>

            {/* Call to Action Buttons - Strictly Rectangle with Generous Padding */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                href="https://wa.me/923255577711"
                external
                variant="primary"
                size="lg"
                className="w-full sm:w-auto gap-3 font-bold"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>WhatsApp: +92 325 5577711</span>
              </Button>

              <Button
                href="/services"
                variant="outline-white"
                size="lg"
                className="w-full sm:w-auto gap-2 font-bold"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Corporate Trust Card (Col 9-12) */}
          <div className="lg:col-span-4">
            <div className="bg-brand-black-charcoal border-2 border-[#FF3B53] p-7 sm:p-9 space-y-6 shadow-2xl relative">
              <div className="absolute top-0 right-0 bg-[#FF3B53] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1">
                Official Forwarder
              </div>

              <div className="border-b border-brand-gray-700 pb-4">
                <h2 className="text-lg font-bold uppercase tracking-wider text-white">
                  Pakistan Gateway Operations
                </h2>
                <p className="text-xs text-gray-300 mt-1">
                  Prompt container booking & expedited air cargo space.
                </p>
              </div>

              {/* Mode Badges with High Contrast Icons */}
              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3.5 p-3.5 bg-brand-black border border-brand-gray-800">
                  <div className="p-2.5 bg-[#FF3B53] text-white flex-shrink-0">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase text-sm">
                      Air Cargo Desk
                    </div>
                    <div className="text-gray-300 text-xs mt-0.5">
                      LHE • KHI • ISB • SKT
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 bg-brand-black border border-brand-gray-800">
                  <div className="p-2.5 bg-[#FF3B53] text-white flex-shrink-0">
                    <Ship className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase text-sm">
                      Ocean Freight Lines
                    </div>
                    <div className="text-gray-300 text-xs mt-0.5">
                      Karachi Port (KPT) • Port Qasim (QICT)
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 bg-brand-black border border-brand-gray-800">
                  <div className="p-2.5 bg-[#FF3B53] text-white flex-shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase text-sm">
                      Dry Ports Drayage
                    </div>
                    <div className="text-gray-300 text-xs mt-0.5">
                      Lahore • Sialkot • Faisalabad • Multan
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Footer */}
              <div className="pt-3 text-center border-t border-brand-gray-800">
                <p className="text-xs text-gray-300">
                  Direct Inquiries & Rate Verification:
                </p>
                <a
                  href="mailto:contact@flyairlogistics.com"
                  className="text-xs text-[#FF3B53] font-bold hover:underline block mt-1"
                >
                  contact@flyairlogistics.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
