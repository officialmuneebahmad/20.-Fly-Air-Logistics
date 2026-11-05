import React from "react";
import HomeCarousel from "@/components/home/HomeCarousel";
import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import ServicesGrid from "@/components/home/ServicesGrid";
import CoverageSection from "@/components/home/CoverageSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CtaBanner from "@/components/home/CtaBanner";
import Link from "next/link";
import Button from "@/components/ui/Button";
import WingDivider from "@/components/layout/WingDivider";
import { getRecentPosts } from "@/lib/posts";
import {
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const recentArticles = getRecentPosts(3);

  return (
    <>
      {/* 0. Top Branded Visual Showcase Carousel (Full-width edge-to-edge, zero side padding/margins) */}
      <section className="w-full p-0 m-0 border-b-2 border-brand-black-charcoal bg-[#0A0C0F]">
        <HomeCarousel />
      </section>

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Stats */}
      <TrustStats />

      {/* 3. Core Services Grid */}
      <ServicesGrid />

      {/* 4. Coverage: From All Ports & Airports of Pakistan to Worldwide */}
      <CoverageSection />

      {/* 5. Company Heritage & Trust Bar */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-gray-200 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 px-3.5 py-1.5">
                Heritage & Trust
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-brand-black uppercase tracking-tight leading-tight">
                Rooted in Pakistan&apos;s Forwarding Industry Since the 1980s
              </h2>
              <WingDivider centered={false} theme="light" />
              <p className="text-sm sm:text-base text-brand-gray-700 leading-[1.8]">
                Operating officially as FLY AIR LOGISTICS since 2012, our trade
                ancestry traces back over four decades to the historic commercial
                trading lanes of Brandreth Road, Lahore.
              </p>
              <p className="text-sm sm:text-base text-brand-gray-700 leading-[1.8]">
                We combine deep institutional relationships with Pakistan Customs,
                port terminal operators, and international shipping lines to give
                shippers guaranteed capacity and priority terminal processing.
              </p>
              <div className="pt-2">
                <Button href="/about" variant="outline" size="md">
                  About Our Legacy &rarr;
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-7 bg-brand-gray-50 border-l-4 border-brand-red border border-brand-gray-200 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-brand-red mb-4" />
                <h3 className="text-base font-bold text-brand-black uppercase">
                  Licensed Customs Brokerage
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray-600 mt-2.5 leading-relaxed">
                  Direct electronic filing across PSW and WeBOC platforms,
                  eliminating third-party intermediary delays.
                </p>
              </div>

              <div className="p-7 bg-brand-gray-50 border-l-4 border-brand-red border border-brand-gray-200 shadow-sm">
                <Layers className="w-8 h-8 text-brand-red mb-4" />
                <h3 className="text-base font-bold text-brand-black uppercase">
                  Multi-Modal Integration
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray-600 mt-2.5 leading-relaxed">
                  Smooth synchronisation between factory drayage, upcountry dry
                  ports, and deep-sea or air cargo terminals.
                </p>
              </div>

              <div className="p-7 bg-brand-gray-50 border-l-4 border-brand-red border border-brand-gray-200 shadow-sm">
                <Award className="w-8 h-8 text-brand-red mb-4" />
                <h3 className="text-base font-bold text-brand-black uppercase">
                  Space & Equipment Allocation
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray-600 mt-2.5 leading-relaxed">
                  Securing 20ft, 40ft High Cube containers, and peak-season
                  air cargo pallets when market space is tight.
                </p>
              </div>

              <div className="p-7 bg-brand-gray-50 border-l-4 border-brand-red border border-brand-gray-200 shadow-sm">
                <Sparkles className="w-8 h-8 text-brand-red mb-4" />
                <h3 className="text-base font-bold text-brand-black uppercase">
                  Single Account Manager
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray-600 mt-2.5 leading-relaxed">
                  Dedicated freight coordinators who manage your shipments
                  proactively from pickup to final delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Recent Freight Articles / Blog Preview */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-gray-200 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 px-3.5 py-1.5 mb-3">
                Trade Knowledge Hub
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-brand-black uppercase tracking-tight">
                Latest Articles on Pakistan Freight & Customs
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-bold uppercase tracking-wider text-brand-red hover:underline flex items-center gap-2"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-brand-gray-50 border border-brand-gray-200 p-8 flex flex-col justify-between hover:border-brand-red transition-all shadow-sm hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-brand-gray-500 mb-4">
                    <span className="font-bold text-brand-red uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-black group-hover:text-brand-red transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-gray-600 mt-3 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-gray-200 flex items-center justify-between text-xs">
                  <span className="text-brand-gray-500">
                    {article.publishedAt}
                  </span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="font-bold text-brand-black group-hover:text-brand-red flex items-center gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonial Section */}
      <TestimonialSection />

      {/* 8. Call to Action Banner */}
      <CtaBanner />
    </>
  );
}
