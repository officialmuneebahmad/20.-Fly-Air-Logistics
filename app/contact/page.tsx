import React from "react";
import type { Metadata } from "next";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import WingDivider from "@/components/layout/WingDivider";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | 84 Brandreth Road, Lahore | Fly Air Logistics",
  description:
    "Get in touch with Fly Air Logistics. Located at 84 Brandreth Road, Lahore, Pakistan. Call or WhatsApp +92 325 5577711 or email contact@flyairlogistics.com. Hours: 10:00 AM - 08:00 PM.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Fly Air Logistics | Freight Forwarder Desk Pakistan",
    description:
      "Direct desk contact for international air freight, sea freight, and customs clearance inquiries. Located at 84 Brandreth Road, Lahore.",
    url: "https://flyairlogistics.com/contact",
    images: [
      {
        url: "https://flyairlogistics.com/og-image.jpg",
        secureUrl: "https://flyairlogistics.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Fly Air Logistics - International Freight Forwarders",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <ServiceBreadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Page Hero Header */}
      <section className="bg-brand-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b-2 border-[#FF3B53]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-[#FF3B53] px-3.5 py-1.5 mb-4 shadow-sm">
            Operations & Customer Service Desk
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-white">
            Contact Fly Air Logistics
          </h1>
          <WingDivider centered theme="dark" />
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Our trade coordinators and customs specialists are ready to assist you.
            Visit our registered head office on Brandreth Road, Lahore, or connect
            via our direct communication channels.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-20 bg-brand-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Interactive Form with Thank You state */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Address, Business Hours, Hotlines */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Location Map / Directions Bar */}
      <section className="py-12 bg-white border-t border-brand-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-brand-gray-50 border border-brand-gray-200">
            <h4 className="text-sm font-bold uppercase text-brand-black mb-1">
              Visiting Our Office
            </h4>
            <p className="text-xs text-brand-gray-600 leading-relaxed">
              We are situated in the central commercial district of Brandreth Road,
              Lahore, easily accessible from Lahore Railway Station, Circular
              Road, and the Mall Road commercial hubs.
            </p>
          </div>

          <div className="p-6 bg-brand-gray-50 border border-brand-gray-200">
            <h4 className="text-sm font-bold uppercase text-brand-black mb-1">
              Operating Schedule
            </h4>
            <p className="text-xs text-brand-gray-600 leading-relaxed">
              Open Monday through Saturday from 10:00 AM to 08:00 PM. Our terminal
              customs personnel operate according to port vessel and flight
              schedules 24/7.
            </p>
          </div>

          <div className="p-6 bg-brand-gray-50 border border-brand-gray-200">
            <h4 className="text-sm font-bold uppercase text-brand-black mb-1">
              Urgent Cargo Inquiries
            </h4>
            <p className="text-xs text-brand-gray-600 leading-relaxed">
              For emergency customs clearances or same-day flight bookings,
              message our dedicated WhatsApp hotline at{" "}
              <strong className="text-brand-black">+92 325 5577711</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

