import React from "react";
import WingDivider from "../layout/WingDivider";
import { MessageSquareQuote, Shield } from "lucide-react";

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray-50 px-4 sm:px-6 lg:px-8 border-b border-brand-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subhead */}
        <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 px-3 py-1 mb-3">
          Client Feedback & Trust
        </div>
        <h2 className="text-3xl font-heading font-black text-brand-black uppercase tracking-tight">
          Client Testimonials
        </h2>
        <WingDivider centered theme="light" />

        {/* Clean Corporate Placeholder Box */}
        <div className="mt-8 bg-white p-10 sm:p-14 border border-brand-gray-300 shadow-sm relative text-center">
          <div className="w-16 h-16 bg-brand-red/10 border border-brand-red text-brand-red flex items-center justify-center mx-auto mb-6">
            <MessageSquareQuote className="w-8 h-8" />
          </div>

          {/* Exact required text */}
          <blockquote className="text-xl sm:text-2xl font-heading font-bold text-brand-black tracking-tight uppercase">
            &ldquo;Testimonial coming soon.&rdquo;
          </blockquote>

          <p className="text-xs sm:text-sm text-brand-gray-500 mt-4 max-w-lg mx-auto">
            We are currently compiling verified feedback and case studies from our
            corporate exporters and international consignees.
          </p>

          <div className="mt-8 pt-6 border-t border-brand-gray-200 flex items-center justify-center gap-3 text-xs text-brand-gray-600">
            <Shield className="w-4 h-4 text-brand-red" />
            <span className="font-semibold uppercase tracking-wider">
              FLY AIR LOGISTICS • Trusted Trade Partner Since 2012
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

