import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import WingDivider from "@/components/layout/WingDivider";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/home/CtaBanner";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Articles & Trade Insights | Pakistan Freight Forwarding & Customs",
  description:
    "Authoritative operational articles, customs clearance tutorials (WeBOC/PSW), air vs sea shipping analysis, and Incoterms 2020 advice from Fly Air Logistics.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Articles & Trade Insights | Fly Air Logistics Pakistan",
    description:
      "Expert trade knowledge: export documentation, shipping cost optimization, and Pakistan customs procedures.",
    url: "https://flyairlogistics.com/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <ServiceBreadcrumbs items={[{ label: "Articles" }]} />

      {/* Hero Header with High Contrast */}
      <section className="bg-brand-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b-2 border-[#FF3B53]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-[#FF3B53] px-3.5 py-1.5 shadow-sm">
            Industry Advisory & Trade Knowledge
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-white">
            Pakistan Freight & Customs Articles
          </h1>
          <WingDivider centered theme="dark" />
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Essential operational intelligence for Pakistani exporters,
            international trading houses, and supply chain managers navigating
            cross-border freight.
          </p>
        </div>
      </section>

      {/* Articles Listing - Generous Margins & Padding */}
      <section className="py-20 sm:py-24 bg-brand-gray-50 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-brand-gray-200 hover:border-brand-red p-8 sm:p-10 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Reading Time */}
                  <div className="flex items-center justify-between text-xs text-brand-gray-500 mb-5">
                    <span className="font-bold text-brand-red uppercase tracking-wider bg-brand-red/10 px-3 py-1">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-brand-gray-500">
                      <Clock className="w-4 h-4 text-brand-gray-400" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-black group-hover:text-brand-red transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-brand-gray-600 mt-3.5 leading-[1.75]">
                    {post.description}
                  </p>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-brand-gray-100">
                      {post.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] bg-brand-gray-100 text-brand-gray-600 px-2.5 py-1 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Author & Read More Bar */}
                <div className="mt-8 pt-5 border-t border-brand-gray-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-brand-gray-500 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-brand-red" />
                    <span>{post.publishedAt}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold uppercase tracking-wider text-xs text-brand-black group-hover:text-brand-red flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner />
    </>
  );
}
