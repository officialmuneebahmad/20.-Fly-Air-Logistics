import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/posts";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import WingDivider from "@/components/layout/WingDivider";
import Button from "@/components/ui/Button";
import {
  JsonLd,
  createArticleSchema,
  createBreadcrumbSchema,
} from "@/components/seo/JsonLd";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  BookOpen,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Fly Air Logistics Articles`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://flyairlogistics.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = createArticleSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedAt: post.publishedAt,
    author: post.author,
  });

  const breadcrumbJsonLd = createBreadcrumbSchema([
    { name: "Home", url: "https://flyairlogistics.com" },
    { name: "Articles", url: "https://flyairlogistics.com/blog" },
    { name: post.title, url: `https://flyairlogistics.com/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* Breadcrumbs with "Articles" */}
      <ServiceBreadcrumbs
        items={[
          { label: "Articles", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* Article Header with High-Contrast Vivid Accents on Dark Background */}
      <article className="bg-white">
        <header className="bg-brand-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b-2 border-[#FF3B53]">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-bold text-white uppercase tracking-wider bg-[#FF3B53] px-3 py-1.5 shadow-sm">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-gray-200">
                <Clock className="w-4 h-4 text-[#FF3B53]" />
                <span className="font-medium">{post.readingTime}</span>
              </span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center gap-1.5 text-gray-200">
                <Calendar className="w-4 h-4 text-[#FF3B53]" />
                <span className="font-medium">{post.publishedAt}</span>
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight leading-[1.2] text-white">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              {post.description}
            </p>

            <div className="pt-4 flex items-center gap-3 text-xs text-gray-300 border-t border-brand-gray-800">
              <User className="w-4 h-4 text-[#FF3B53]" />
              <span>
                Authored by: <strong className="text-white font-semibold">{post.author}</strong>
              </span>
            </div>
          </div>
        </header>

        {/* Article Body & Sidebar - Generous Spacing, Margins & Padding */}
        <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Article Content (Col 1-8) */}
            <div className="lg:col-span-8">
              <MarkdownRenderer content={post.content} />

              {/* Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-14 pt-8 border-t border-brand-gray-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-black mb-4">
                    <Tag className="w-4 h-4 text-brand-red" />
                    <span>Related Trade Topics</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-brand-gray-100 border border-brand-gray-300 text-brand-gray-700 px-3.5 py-1.5 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Articles Button */}
              <div className="mt-10 pt-8 border-t border-brand-gray-200 flex justify-between items-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-black hover:text-brand-red transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 text-brand-red" />
                  <span>Back to All Articles</span>
                </Link>
              </div>
            </div>

            {/* Sidebar (Col 9-12) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Table of Contents */}
              {post.headings && post.headings.length > 0 && (
                <div className="bg-brand-gray-50 border border-brand-gray-200 p-7 sticky top-28 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-black border-b border-brand-gray-200 pb-3 mb-5">
                    <BookOpen className="w-4 h-4 text-brand-red" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-3 text-xs leading-relaxed">
                    {post.headings.map((h, idx) => (
                      <a
                        key={idx}
                        href={`#${h.id}`}
                        className={`block text-brand-gray-700 hover:text-brand-red hover:underline transition-colors ${
                          h.level === 3 ? "pl-4 text-[11px] text-brand-gray-500" : "font-semibold"
                        }`}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>

                  {/* Quick Freight Support Box */}
                  <div className="mt-8 pt-6 border-t border-brand-gray-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-black mb-2">
                      Need Export Advisory?
                    </h4>
                    <p className="text-xs text-brand-gray-600 mb-5 leading-relaxed">
                      Consult with our customs clearing agents and air/sea booking
                      coordinators for your next consignment.
                    </p>
                    <Button
                      href="https://wa.me/923255577711"
                      external
                      variant="primary"
                      size="sm"
                      fullWidth
                      className="gap-2 font-bold"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Inquiries</span>
                    </Button>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>

      {/* Related Articles Strip with Generous Padding */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-brand-gray-50 border-t border-brand-gray-200 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-heading font-black uppercase tracking-tight text-brand-black mb-8">
              More Trade Guides from Fly Air Logistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-white border border-brand-gray-200 p-8 flex flex-col justify-between hover:border-brand-red transition-all shadow-sm"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase text-brand-red tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="text-lg font-bold text-brand-black mt-2 hover:text-brand-red transition-colors leading-snug">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-gray-600 mt-3 line-clamp-2 leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-gray-100 flex items-center justify-between text-xs">
                    <span className="text-brand-gray-400 font-medium">
                      {rel.readingTime}
                    </span>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="font-bold text-brand-black hover:text-brand-red flex items-center gap-1.5"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className="bg-brand-red text-white py-16 px-4 sm:px-6 lg:px-12 border-t-2 border-brand-red-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight">
              Have Questions About This Guide or Your Shipment?
            </h2>
            <p className="text-xs sm:text-sm text-white/90 mt-2 max-w-xl leading-relaxed">
              Our freight desk at 84 Brandreth Road, Lahore provides direct guidance
              on PSW registration, HS codes, and space bookings.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              href="https://wa.me/923255577711"
              external
              variant="secondary"
              size="md"
            >
              WhatsApp: +92 325 5577711
            </Button>
            <Button href="/contact" variant="white" size="md">
              Send an Inquiry
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
