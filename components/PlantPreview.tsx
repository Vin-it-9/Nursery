import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PlantCard from "@/components/PlantCard";
import SectionHeader from "@/components/SectionHeader";
import { plants } from "@/data/plants";

export default function PlantPreview() {
  const previewPlants = plants.slice(0, 8);

  return (
    <section className="relative overflow-hidden py-20">

      {/* Background atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/3 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(98,185,122,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(145,210,162,0.05),transparent_70%)] blur-3xl" />
      </div>

      {/* Header row */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
        <SectionHeader
          eyebrow="Plant preview"
          title="Popular nursery picks"
          description="A quick look at customer favourites selected from local plant data."
        />
        <Link
          href="/plants"
          className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[rgba(46,125,70,0.20)] bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#2e7d46] shadow-subtle backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(46,125,70,0.35)] hover:bg-white hover:shadow-elevated sm:self-auto"
        >
          View All Plants
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {previewPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>

    </section>
  );
}
