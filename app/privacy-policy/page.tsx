import React from "react";
import type { Metadata } from "next";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import WingDivider from "@/components/layout/WingDivider";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy | Fly Air Logistics",
  description:
    "Privacy Policy for Fly Air Logistics. How we handle trade data, client inquiries, commercial documentation, and website interactions.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <ServiceBreadcrumbs items={[{ label: "Privacy Policy" }]} />

      <section className="bg-brand-black text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#FF3B53]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight text-white">
            Privacy Policy
          </h1>
          <WingDivider centered theme="dark" />
          <p className="text-xs sm:text-sm text-gray-200">
            Last Updated: January 2025 • FLY AIR LOGISTICS (Headquartered at 84 Brandreth Road, Lahore, Pakistan)
          </p>
        </div>
      </section>

      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-xs sm:text-sm text-brand-gray-700 space-y-6 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold uppercase text-brand-black mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you submit an inquiry through our website, request a freight quote,
              or book cargo forwarding services, FLY AIR LOGISTICS collects essential
              business and contact data including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
              <li>Contact details: Name, business email, telephone/WhatsApp numbers, and corporate address.</li>
              <li>Consignment information: Origin and destination addresses, cargo descriptions, weights, dimensions (CBM), and HS codes.</li>
              <li>Statutory trade paperwork: Commercial invoices, packing lists, Bills of Lading, and WeBOC/PSW identifiers necessary for customs clearance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase text-brand-black mb-2">
              2. How We Utilize Your Data
            </h2>
            <p>
              Your personal and commercial trade data is utilized strictly for executing logistics services:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
              <li>Transmitting accurate rate assessments and freight booking confirmations.</li>
              <li>Filing legal customs documentation with Pakistan Customs (WeBOC and Pakistan Single Window).</li>
              <li>Booking ocean container slots with shipping lines and air waybill space with commercial airlines.</li>
              <li>Providing milestone transit alerts and operational delivery confirmations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase text-brand-black mb-2">
              3. Data Protection & Confidentiality
            </h2>
            <p>
              We treat all commercial invoicing, client customer names, product pricing, and trade volumes with strict professional confidentiality. We never sell, rent, or monetize client data. Data is shared only with certified carriers, customs authorities, and vetted destination clearing agents as required by international maritime and aviation law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase text-brand-black mb-2">
              4. Contact Regarding Privacy
            </h2>
            <p>
              For questions concerning this Privacy Policy or data security, please contact our administrative desk:
            </p>
            <p className="mt-2 font-semibold text-brand-black">
              FLY AIR LOGISTICS<br />
              84 Brandreth Road, Lahore, Pakistan<br />
              Email: contact@flyairlogistics.com<br />
              WhatsApp: +92 325 5577711
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

