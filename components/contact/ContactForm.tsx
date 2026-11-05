"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  MessageSquare,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.error ||
            "Unable to submit form. Please contact our desk directly via WhatsApp."
        );
      }
    } catch (err: any) {
      setErrorMessage(
        "Network connection interrupted. Please use the WhatsApp or Email button below."
      );
    } finally {
      setLoading(false);
    }
  };

  // SUCCESS / THANK YOU VIEW
  if (submitted) {
    return (
      <div className="bg-white border-2 border-brand-red p-8 sm:p-12 text-center rounded-none shadow-lg">
        <div className="w-16 h-16 bg-brand-red/10 border border-brand-red text-brand-red flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-black uppercase tracking-tight">
          Thank You for Your Inquiry!
        </h3>

        <p className="text-sm text-brand-gray-600 max-w-md mx-auto mt-3 leading-relaxed">
          Your shipment details have been submitted directly to the FLY AIR LOGISTICS
          operations desk. An experienced freight consultant will review your
          requirements and reach out shortly.
        </p>

        {/* Expected Response Time */}
        <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-brand-gray-50 border border-brand-gray-200 text-xs text-brand-gray-600">
          <Clock className="w-4 h-4 text-brand-red" />
          <span>Expected response time: within 2 to 4 business hours</span>
        </div>

        {/* Fallback direct channels */}
        <div className="mt-8 pt-8 border-t border-brand-gray-200">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-black mb-4">
            Need Immediate Assistance? Connect with Our Desk:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="https://wa.me/923255577711"
              external
              variant="primary"
              size="md"
              className="gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: +92 325 5577711</span>
            </Button>

            <Button
              href="mailto:contact@flyairlogistics.com"
              variant="outline"
              size="md"
              className="gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email: contact@flyairlogistics.com</span>
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: "",
              });
            }}
            className="text-xs text-brand-red font-semibold hover:underline uppercase tracking-wider"
          >
            Submit Another Request &rarr;
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE FORM VIEW
  return (
    <div className="bg-white border border-brand-gray-200 p-6 sm:p-10 shadow-sm rounded-none">
      <div className="border-b border-brand-gray-200 pb-5 mb-6">
        <h3 className="text-xl sm:text-2xl font-heading font-black uppercase tracking-tight text-brand-black">
          Send Us a Cargo Inquiry
        </h3>
        <p className="text-xs text-brand-gray-500 mt-1">
          Complete the form below to receive a consultation from our freight specialists.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-brand-red flex items-start gap-3 text-xs text-red-800">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-red" />
          <div>
            <div className="font-bold">Submission Notice:</div>
            <div>{errorMessage}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Muhammad Tariq"
              className="w-full px-4 py-3 bg-brand-gray-50 border border-brand-gray-300 text-brand-black text-sm focus:bg-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g., tariq@exportcompany.com"
              className="w-full px-4 py-3 bg-brand-gray-50 border border-brand-gray-300 text-brand-black text-sm focus:bg-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-none transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Phone & Service of Interest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5"
            >
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g., +92 300 1234567"
              className="w-full px-4 py-3 bg-brand-gray-50 border border-brand-gray-300 text-brand-black text-sm focus:bg-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5"
            >
              Service Required
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-gray-50 border border-brand-gray-300 text-brand-black text-sm focus:bg-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-none transition-colors"
            >
              <option value="">Select a Forwarding Service...</option>
              {servicesData.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="General Consultation">General Inquiry</option>
            </select>
          </div>
        </div>

        {/* Row 3: Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-brand-black mb-1.5"
          >
            Cargo Details / Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please specify cargo type, estimated weight/CBM, origin port/city (e.g. Lahore / Karachi), and destination..."
            className="w-full px-4 py-3 bg-brand-gray-50 border border-brand-gray-300 text-brand-black text-sm focus:bg-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-none transition-colors"
          />
        </div>

        {/* Submit Button - Rectangle only */}
        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={loading}
            className="gap-2"
          >
            {loading ? (
              <span>Submitting to Operations Desk...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Cargo Inquiry</span>
              </>
            )}
          </Button>
        </div>

        {/* Fallback Channels */}
        <div className="pt-4 border-t border-brand-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-gray-500">
          <span>Prefer direct real-time communication?</span>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/923255577711"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-black hover:text-brand-red flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Now</span>
            </a>
            <span>•</span>
            <a
              href="mailto:contact@flyairlogistics.com"
              className="font-semibold text-brand-black hover:text-brand-red flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-brand-red" />
              <span>Direct Email</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

