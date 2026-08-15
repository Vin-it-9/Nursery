import type { Plant } from "@/data/plants";
import Image from "next/image";
import Link from "next/link";
import { Droplets, Leaf, ArrowUpRight } from "lucide-react";
import { badgePrimaryStyles, interactiveCardStyles } from "@/components/ui";

type PlantCardProps = {
  plant: Plant;
};

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <Link
      href={`/plants/${plant.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(46,125,70,0.09)] bg-white/80 shadow-subtle backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-[rgba(46,125,70,0.16)] hover:bg-white hover:shadow-elevated"
    >
      <article className="flex h-full flex-col">

        {/* ── Image ── */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f0f7f1]">
          <Image
            src={plant.image}
            alt={`${plant.name} plant in nursery pot`}
            fill
            sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.05]"
          />

          {/* Gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[rgba(26,61,38,0.18)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Top accent bar */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2e7d46] via-[#5a8e6a] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Category badge */}
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full border border-white/60 bg-white/90 px-2.5 py-1 text-[0.68rem] font-semibold text-[#2e7d46] shadow-sm backdrop-blur-sm">
            {plant.category}
          </span>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-1 flex-col p-5">

          {/* Name + Price */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-1 text-[1rem] font-semibold leading-snug text-[#1a3d26] transition-colors duration-200 group-hover:text-[#2e7d46]">
              {plant.name}
            </h3>
            <span className="shrink-0 rounded-full border border-[rgba(46,125,70,0.15)] bg-[#edf7ef] px-2.5 py-0.5 text-[0.75rem] font-bold text-[#2e7d46] whitespace-nowrap">
              {plant.price}
            </span>
          </div>

          {/* Short description */}
          <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-sm leading-6 text-[#4f6555]">
            {plant.shortDescription}
          </p>

          {/* CTA */}
          <div className="mt-5 flex items-center justify-between gap-2 rounded-xl border border-[rgba(46,125,70,0.10)] bg-[#edf7ef] px-4 py-3 transition-all duration-300 group-hover:bg-[#2e7d46] group-hover:border-[#2e7d46] group-hover:shadow-md">
            <span className="text-sm font-semibold text-[#2e7d46] transition-colors duration-200 group-hover:text-white">
              View Details
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 text-[#2e7d46] transition-all duration-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>

        </div>
      </article>
    </Link>
  );
}
