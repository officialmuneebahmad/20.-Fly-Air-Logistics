"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ServiceFAQ } from "@/lib/services-data";
import WingDivider from "../layout/WingDivider";

interface ServiceFaqProps {
  faqs: ServiceFAQ[];
  serviceTitle: string;
}

export const ServiceFaq: React.FC<ServiceFaqProps> = ({
  faqs,
  serviceTitle,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white border-t border-brand-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 px-3 py-1 mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-brand-black uppercase tracking-tight">
            Questions Regarding {serviceTitle}
          </h2>
          <WingDivider centered theme="light" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-brand-gray-200 transition-colors duration-200 rounded-none overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className={`w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base transition-colors rounded-none ${
                    isOpen
                      ? "bg-brand-black text-white"
                      : "bg-brand-gray-50 hover:bg-brand-gray-100 text-brand-black"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle
                      className={`w-4 h-4 flex-shrink-0 ${
                        isOpen ? "text-brand-red" : "text-brand-gray-400"
                      }`}
                    />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-brand-red" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-6 bg-white border-t border-brand-gray-200 text-xs sm:text-sm text-brand-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;

