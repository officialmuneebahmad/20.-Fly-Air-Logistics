import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageSquare,
  ShieldCheck,
  Building,
} from "lucide-react";
import Button from "../ui/Button";

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Primary Office Card */}
      <div className="bg-brand-black text-white p-8 border-l-4 border-[#FF3B53] border-y border-r border-brand-gray-800 shadow-md">
        <div className="inline-block bg-[#FF3B53] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 mb-4 shadow-sm">
          Headquarters
        </div>

        <h3 className="text-2xl font-heading font-black uppercase tracking-tight text-white">
          FLY AIR LOGISTICS
        </h3>
        <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mt-0.5">
          International Freight Forwarders
        </p>

        <div className="mt-6 space-y-4 text-xs text-brand-gray-200">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#FF3B53] flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white uppercase">
                Registered Head Office:
              </div>
              <p className="mt-0.5 leading-relaxed text-gray-200">
                84 Brandreth Road, Lahore, Pakistan
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Central Commercial Machinery & Hardware District
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#FF3B53] flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white uppercase">Business Hours:</div>
              <p className="mt-0.5 text-gray-200">
                Monday – Saturday: 10:00 AM – 08:00 PM
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Sunday: Closed (Emergency Port Operations Active)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-[#FF3B53] flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white uppercase">Official Email:</div>
              <a
                href="mailto:contact@flyairlogistics.com"
                className="mt-0.5 text-gray-200 hover:text-white block underline transition-colors"
              >
                contact@flyairlogistics.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white uppercase">
                WhatsApp Freight Hotline:
              </div>
              <a
                href="https://wa.me/923255577711"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 text-white hover:text-[#25D366] font-semibold block transition-colors"
              >
                +92 325 5577711
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-gray-800">
          <Button
            href="https://wa.me/923255577711"
            external
            variant="primary"
            size="md"
            fullWidth
            className="gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat via WhatsApp</span>
          </Button>
        </div>
      </div>

      {/* Operational Dry Port Liaison Card */}
      <div className="bg-white p-6 border border-brand-gray-200">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red mb-3">
          <Building className="w-4 h-4" />
          <span>Operational Terminals Covered</span>
        </div>
        <p className="text-xs text-brand-gray-600 leading-relaxed">
          Our customs clearance executives and terminal ground coordinators are
          physically stationed across key cargo checkposts:
        </p>
        <ul className="mt-3 space-y-1.5 text-xs text-brand-gray-700">
          <li>• Allama Iqbal Int&apos;l Airport (AFU Lahore)</li>
          <li>• Lahore Dry Port (Prem Nagar / Mughalpura)</li>
          <li>• Karachi Port Trust (KPT) East & West Berths</li>
          <li>• Port Muhammad Bin Qasim (QICT Terminals)</li>
          <li>• Sialkot & Faisalabad Dry Port Trusts</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;

