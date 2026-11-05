import React from "react";
import type { Metadata } from "next";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import WingDivider from "@/components/layout/WingDivider";

export const metadata: Metadata = {
  title: "Terms & Conditions | Fly Air Logistics",
  description:
    "Standard Trading Terms and Conditions of Carriage for Fly Air Logistics. Governing international freight forwarding, customs brokerage, and cargo handling.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <>
      <ServiceBreadcrumbs items={[{ label: "Terms & Conditions" }]} />

      <section className="bg-brand-black text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#FF3B53]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight text-white">
            Terms & Conditions of Carriage
          </h1>
          <WingDivider centered theme="dark" />
          <p className="text-xs sm:text-sm text-gray-200">
            Standard Trading Conditions of FLY AIR LOGISTICS • 84 Brandreth Road, Lahore, Pakistan
          </p>
        </div>
      </section>

      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-xs sm:text-sm text-brand-gray-700 space-y-6 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold uppercase text-brand-black mb-2">
              1. Scope of Services
            </h2>
            <p>
              FLY AIR LOGISTICS acts as an international freight forwarder, customs broker, and transport coordinator. We procure and coordinate transportation services using ocean shipping lines, airlines, road carriers, container freight stations, and bonded warehouse operators on behalf of the customer (shipper or consignee).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase text-brand-black mb-2">
              2. Shipper Warranties & Compliance
            </h2>
            <p>
              The shipper warrants that all cargo descriptions, carton counts, gross weights, dimensions, and declared values submitted for transport and customs declarations are accurate and complete. The shipper is solely responsible for ensuring compliance with the Pakistan Customs Act 1969, import/export trade control orders, and destination import regulations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase text-brand-black mb-2">
              3. Carrier Liability & Insurance
            </h2>
            <p>
              Transportation by air is subject to the rules relating to liability established by the Warsaw Convention or Montreal Convention 1999. Transportation by sea is subject to the Hague-Visby Rules. Because statutory carrier liability is strictly limited by weight or shipping unit, FLY AIR LOGISTICS strongly advises shippers to procure All-Risk Marine/Air Cargo Insurance for the full value of the goods.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase text-brand-black mb-2">
              4. Demurrage, Detention & Terminal Storage
            </h2>
            <p>
              Unless explicitly agreed otherwise in writing, freight quotations exclude terminal demurrage, container detention, customs examination charges, port storage, or fines arising from documentary discrepancies, channel escalations, or customs holds outside our direct control.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase text-brand-black mb-2">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              All contracts and forwarding arrangements entered into with FLY AIR LOGISTICS are governed by the laws of the Islamic Republic of Pakistan, with exclusive legal jurisdiction resting in the competent courts of Lahore, Pakistan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

