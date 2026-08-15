import { BadgeDollarSign, HeartHandshake, Leaf, Sprout } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const features = [
  {
    title: "Healthy Plants",
    description: "Fresh stock selected for strong roots, clean leaves, and Indian weather conditions.",
    icon: Sprout,
  },
  {
    title: "Expert Guidance",
    description: "Practical care advice for balconies, windows, terraces, and compact apartments.",
    icon: Leaf,
  },
  {
    title: "Affordable Pricing",
    description: "Clear rupee pricing across indoor greens, succulents, pots, and seasonal picks.",
    icon: BadgeDollarSign,
  },
  {
    title: "Local Support",
    description: "Friendly Satara-based support before and after you take your plant home.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f6fbf7] via-white to-[#eef7f1] px-5 py-16 sm:px-8 lg:px-10">
      {/* Subtle background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(98,185,122,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(145,210,162,0.05),transparent_70%)] blur-3xl" />
      </div>

      <SectionHeader
        align="center"
        eyebrow=""
        title="Healthy plants with guidance that fits local homes"
        description="Every plant is chosen with care, priced clearly, and supported with practical local advice."
      />

      <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl bg-white/70 p-6 sm:p-7 shadow-subtle backdrop-blur-md border border-[#e8f2eb] transition-all duration-400 hover:-translate-y-1 hover:shadow-elevated hover:border-[rgba(46,125,70,0.15)] hover:bg-white/90"
            >
              {/* Top accent bar - subtle, consistent */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2e7d46] via-[#5a8e6a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              />

              {/* Icon Container - unified style */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#edf7ef] text-[#2e7d46] group-hover:bg-[#e6f3eb] group-hover:scale-[1.03] transition-all duration-300">
                <Icon aria-hidden="true" className="h-7 w-7" />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold leading-snug text-[#1a3d26] group-hover:text-[#2e7d46] transition-colors duration-200">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-[#4f6555] flex-1">
                {feature.description}
              </p>

              {/* Bottom accent indicator */}
              <div
                aria-hidden="true"
                className="mt-6 h-[2px] w-10 bg-gradient-to-r from-[#2e7d46] to-[#5a8e6a] rounded-full opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-400"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
