import React from "react";
import Button from "../ui/Button";
import { MessageSquare, Mail, Phone, Clock, ArrowRight } from "lucide-react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="bg-brand-red text-white py-16 px-4 sm:px-6 lg:px-8 border-y-2 border-brand-red-dark relative overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 100L400 0L1000 150" stroke="#FFFFFF" strokeWidth="4" />
          <path d="M0 250L600 100L1000 250" stroke="#FFFFFF" strokeWidth="6" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Call to Action Copy */}
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-block bg-black/30 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1">
              Direct Desk Access • Fast Response
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight leading-tight">
              Ready to Move Your Cargo Worldwide with Speed & Precision?
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
              Contact our freight coordinators today. Whether you require urgent
              air cargo space, sea container rates, or licensed Pakistan customs
              clearance, our advisory team is standing by.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span>Working Hours: 10:00 AM – 08:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                <span>Immediate Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 justify-center">
            {/* WhatsApp Button */}
            <Button
              href="https://wa.me/923255577711"
              external
              variant="secondary"
              size="lg"
              className="w-full gap-2.5 shadow-xl"
            >
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
              <span>WhatsApp: +92 325 5577711</span>
            </Button>

            {/* Email Button */}
            <Button
              href="mailto:flyairlogistics.official@gmail.com"
              variant="white"
              size="lg"
              className="w-full gap-2.5 shadow-xl text-brand-black"
            >
              <Mail className="w-5 h-5 text-brand-red" />
              <span>Email Freight Desk</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

