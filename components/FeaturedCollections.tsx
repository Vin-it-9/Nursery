import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { interactiveCardStyles } from "@/components/ui";

const collections = [
  {
    title: "Indoor Plants",
    description: "Calm greenery for living rooms, desks, and bright corners.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    href: "/plants?category=Indoor%20Plants",
  },
  {
    title: "New Arrivals",
    description: "Fresh seasonal selections from the nursery floor.",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80",
    href: "/plants",
  },
  {
    title: "Succulents",
    description: "Low-maintenance plants for sunny windows and shelves.",
    image: "https://images.unsplash.com/photo-1558293842-c0fd3db86157?auto=format&fit=crop&w=1200&q=80",
    href: "/plants?category=Succulents",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Subtle background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(98,185,122,0.05),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(145,210,162,0.04),transparent_70%)] blur-3xl" />
      </div>

      <SectionHeader
        eyebrow="Featured collections"
        title="Curated plant groups for faster decisions"
        description="Explore popular collections grouped by lifestyle, care level, and space."
      />

      <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
        {collections.map((collection) => (
          <Link
            key={collection.title}
            href={collection.href}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-elevated border border-[#e8f2eb] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(46,125,70,0.12)] hover:border-[rgba(46,125,70,0.12)]"
          >
            {/* Image wrapper with aspect ratio */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={collection.image}
                alt={`${collection.title} nursery collection`}
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Multi-layer gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[rgba(26,61,38,0.95)] via-[rgba(26,61,38,0.55)] to-transparent group-hover:from-[rgba(26,61,38,1)] transition-all duration-400"
              />

              {/* Subtle top highlight on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white">
              {/* Category tag */}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold text-white/80 uppercase tracking-wider backdrop-blur-sm">
                Collection
              </span>

              {/* Title */}
              <h3 className="mt-3 text-xl sm:text-2xl font-bold leading-tight tracking-tight group-hover:translate-x-0.5 transition-transform duration-300">
                {collection.title}
              </h3>

              {/* Description */}
              <p className="mt-2.5 line-clamp-2 min-h-[3.5rem] text-sm leading-6 text-white/80 group-hover:text-white transition-colors duration-300">
                {collection.description}
              </p>

              {/* CTA */}
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:text-white group-hover:gap-3 transition-all duration-300">
                Explore collection
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </div>

            {/* Shimmer sweep on hover */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 ease-out"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
