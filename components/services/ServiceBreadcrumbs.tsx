import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServiceBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const ServiceBreadcrumbs: React.FC<ServiceBreadcrumbsProps> = ({
  items,
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 sm:px-6 lg:px-8 bg-brand-gray-100 border-b border-brand-gray-200 text-xs text-brand-gray-600"
    >
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-brand-red transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-brand-gray-400" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-brand-red transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-brand-black" aria-current="page">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default ServiceBreadcrumbs;

