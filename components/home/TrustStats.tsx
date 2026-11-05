import React from "react";
import { Calendar, Award, PackageCheck, Globe2 } from "lucide-react";

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: Calendar,
      number: "Since 2012",
      label: "Established Enterprise",
      subtext: "Incorporated operational logistics excellence in Pakistan",
    },
    {
      icon: Award,
      number: "Decades of Experience",
      label: "Roots from 1980s",
      subtext: "Deep-seated family forwarding heritage spanning 40+ years",
    },
    {
      icon: PackageCheck,
      number: "Countless",
      label: "Successful Shipments",
      subtext: "FCL, LCL, Air Consolidations & Breakbulk cargo delivered",
    },
    {
      icon: Globe2,
      number: "Global Coverage",
      label: "All Ports to Worldwide",
      subtext: "Direct connections across 150+ international countries",
    },
  ];

  return (
    <section className="bg-brand-black-charcoal text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-12 border-b border-brand-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-7 bg-brand-black border-l-4 border-[#FF3B53] border-y border-r border-brand-gray-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-gray-300">
                      Metric 0{idx + 1}
                    </span>
                    <Icon className="w-5 h-5 text-[#FF3B53]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold text-[#FF3B53] uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </div>
                </div>
                <p className="text-xs text-gray-200 mt-4 pt-4 border-t border-brand-gray-800/80 leading-relaxed font-normal">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
