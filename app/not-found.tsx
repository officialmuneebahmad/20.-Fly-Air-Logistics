import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import WingDivider from "@/components/layout/WingDivider";
import { AlertTriangle, Home, ArrowRight, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-brand-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-xl w-full text-center bg-white p-10 sm:p-14 border border-brand-gray-200 shadow-sm">
        <div className="w-16 h-16 bg-brand-red/10 border border-brand-red text-brand-red flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-widest">
          Error 404 • Page Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-heading font-black text-brand-black uppercase tracking-tight mt-2">
          Route Not Located
        </h1>

        <WingDivider centered theme="light" />

        <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed mb-8">
          The logistics page or forwarding resource you requested does not exist or
          may have been relocated. Use the links below to return to our active cargo
          operations.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/" variant="primary" size="md" className="gap-2">
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Button>

          <Button href="/services" variant="outline" size="md" className="gap-2">
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-gray-200 text-xs text-brand-gray-500">
          Need immediate shipment assistance?{" "}
          <a
            href="https://wa.me/923255577711"
            className="text-brand-red font-semibold hover:underline"
          >
            WhatsApp +92 325 5577711
          </a>
        </div>
      </div>
    </div>
  );
}

