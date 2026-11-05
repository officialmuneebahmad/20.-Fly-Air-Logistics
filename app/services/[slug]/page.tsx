import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug } from "@/lib/services-data";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import ServiceFaq from "@/components/services/ServiceFaq";
import Button from "@/components/ui/Button";
import {
  JsonLd,
  createServiceSchema,
  createBreadcrumbSchema,
} from "@/components/seo/JsonLd";
import {
  Plane,
  Ship,
  Truck,
  FileCheck,
  Package,
  Warehouse,
  Shield,
  FileSpreadsheet,
  Boxes,
  ShieldAlert,
  CheckCircle2,
  MapPin,
  Globe2,
  MessageSquare,
  Mail,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const iconMap: Record<string, React.ElementType> = {
  Plane,
  Ship,
  Truck,
  FileCheck,
  Package,
  Warehouse,
  Shield,
  FileSpreadsheet,
  Boxes,
  ShieldAlert,
};

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://flyairlogistics.com/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: "https://flyairlogistics.com/og-image.jpg",
          secureUrl: "https://flyairlogistics.com/og-image.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["https://flyairlogistics.com/og-image.jpg"],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || Package;

  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  const serviceJsonLd = createServiceSchema({
    title: service.title,
    slug: service.slug,
    description: service.shortDescription,
  });

  const breadcrumbJsonLd = createBreadcrumbSchema([
    { name: "Home", url: "https://flyairlogistics.com" },
    { name: "Services", url: "https://flyairlogistics.com/services" },
    {
      name: service.title,
      url: `https://flyairlogistics.com/services/${service.slug}`,
    },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* 1. Breadcrumbs */}
      <ServiceBreadcrumbs items={breadcrumbs} />

      {/* 2. Hero & H1 Header with Vivid High-Contrast Red on Black */}
      <section className="bg-brand-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b-2 border-[#FF3B53] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="space-y-5 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#FF3B53] text-white text-xs font-bold uppercase tracking-widest shadow-sm">
                <span>Freight Solutions</span>
                <span>•</span>
                <span>Origin Pakistan &rarr; Worldwide</span>
              </div>

              {/* Strict One H1 Per Page */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-white leading-tight">
                {service.title}
              </h1>

              {/* Intro Tagline in High-Visibility Red */}
              <p className="text-base sm:text-xl text-[#FF3B53] font-bold">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl font-normal">
                {service.shortDescription}
              </p>
            </div>

            {/* Quick Action Box */}
            <div className="bg-brand-black-charcoal p-7 border-2 border-[#FF3B53] space-y-5 w-full lg:w-84 flex-shrink-0 shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 bg-[#FF3B53] text-white flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase">
                    Direct Operations Desk
                  </div>
                  <div className="text-xs text-gray-300 mt-0.5">
                    Immediate Inquiries
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-brand-gray-700">
                <Button
                  href="https://wa.me/923255577711"
                  external
                  variant="primary"
                  size="md"
                  fullWidth
                  className="gap-2.5 font-bold"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>WhatsApp Inquiry</span>
                </Button>
                <Button
                  href="/contact"
                  variant="outline-white"
                  size="md"
                  fullWidth
                >
                  Request Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Details Section - Generous Margins & Spacing */}
      <section className="py-20 sm:py-28 bg-white px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content Body (Col 1-8) */}
            <div className="lg:col-span-8 space-y-14">
              {/* Comprehensive Overview Paragraphs */}
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-brand-black uppercase tracking-tight border-l-4 border-brand-red pl-4">
                  Service Overview & Operational Scope
                </h2>
                {service.overview.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-[17px] text-brand-gray-800 leading-[1.85]"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Key Service Capabilities Grid */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-brand-black uppercase tracking-tight border-l-4 border-brand-red pl-4">
                  Core Capabilities & Specializations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.capabilities.map((cap, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-6 bg-brand-gray-50 border border-brand-gray-200 shadow-sm"
                    >
                      <h3 className="text-base font-bold text-brand-black uppercase tracking-wide flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                        <span>{cap.title}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-gray-600 mt-2.5 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features & Key Benefits */}
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-brand-black uppercase tracking-tight border-l-4 border-brand-red pl-4">
                  Key Advantages for Pakistani Exporters & Importers
                </h2>
                <div className="bg-brand-gray-50 p-7 sm:p-9 border border-brand-gray-200 shadow-sm">
                  <ul className="space-y-3.5">
                    {service.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-3 text-sm sm:text-base text-brand-gray-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Geographic Gateways on Dark Background with High Contrast */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Pakistan Gateways */}
                <div className="p-7 bg-brand-black text-white border-l-4 border-[#FF3B53] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#FF3B53]">
                    <MapPin className="w-4 h-4" />
                    <span>Pakistan Gateways Handled</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200">
                    {service.pakistanGateways.map((gw, gwIdx) => (
                      <li key={gwIdx}>• {gw}</li>
                    ))}
                  </ul>
                </div>

                {/* Global Reach */}
                <div className="p-7 bg-brand-black text-white border-l-4 border-[#FF3B53] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#FF3B53]">
                    <Globe2 className="w-4 h-4" />
                    <span>Key International Hubs</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200">
                    {service.globalReach.map((reach, rIdx) => (
                      <li key={rIdx}>• {reach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Column (Col 9-12) */}
            <div className="lg:col-span-4 space-y-8">
              {/* All Services Navigation */}
              <div className="bg-brand-gray-50 p-7 border border-brand-gray-200 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-black border-b border-brand-gray-200 pb-3 mb-5">
                  All Forwarding Solutions
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {getAllServices().map((s) => {
                    const isCurrent = s.slug === service.slug;
                    return (
                      <li key={s.slug}>
                        <a
                          href={`/services/${s.slug}`}
                          className={`block p-3 transition-colors ${
                            isCurrent
                              ? "bg-brand-red text-white font-bold"
                              : "text-brand-gray-700 hover:bg-brand-gray-200"
                          }`}
                        >
                          {s.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Direct Booking Desk Support with High-Contrast Vivid Accents */}
              <div className="bg-brand-black text-white p-7 border-2 border-[#FF3B53] space-y-4 shadow-xl">
                <div className="text-xs font-bold uppercase tracking-widest text-[#FF3B53]">
                  Direct Inquiries
                </div>
                <h4 className="text-xl font-bold uppercase text-white">
                  Consult a Freight Specialist
                </h4>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
                  Discuss route options, airline space allocations, container
                  availability, or WeBOC clearance requirements directly with
                  our operations desk.
                </p>

                <div className="pt-3 space-y-3 text-xs border-t border-brand-gray-800">
                  <a
                    href="https://wa.me/923255577711"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white hover:text-[#25D366] font-semibold"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp: +92 325 5577711</span>
                  </a>
                  <a
                    href="mailto:contact@flyairlogistics.com"
                    className="flex items-center gap-2.5 text-gray-200 hover:text-white"
                  >
                    <Mail className="w-4 h-4 text-[#FF3B53]" />
                    <span>contact@flyairlogistics.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <ServiceFaq faqs={service.faqs} serviceTitle={service.title} />

      {/* 5. Direct CTA Banner (No rate calculator or tracking) */}
      <section className="bg-brand-red text-white py-16 px-4 sm:px-6 lg:px-12 border-t-2 border-brand-red-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black uppercase tracking-tight">
              Ready to Book {service.title}?
            </h2>
            <p className="text-xs sm:text-sm text-white/90 mt-2 max-w-xl leading-relaxed">
              Connect with our Lahore and Karachi operations teams for immediate
              space coordination and customs clearance advice.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="https://wa.me/923255577711"
              external
              variant="secondary"
              size="md"
              className="gap-2.5 font-bold"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: +92 325 5577711</span>
            </Button>
            <Button
              href="/contact"
              variant="white"
              size="md"
            >
              Contact Our Desk
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
