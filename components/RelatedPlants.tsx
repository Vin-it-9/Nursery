import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Plant } from "@/data/plants";
import PlantCard from "@/components/PlantCard";

type RelatedPlantsProps = {
  plants: Plant[];
};

// Premium related plants section with enhanced design and CTAs
export default function RelatedPlants({ plants }: RelatedPlantsProps) {
  if (plants.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
        <div>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-leaf-600">
            Similar Plants
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-leaf-900">
            You might also like
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-xl">
            Explore more plants from the same category that complement your home beautifully.
          </p>
        </div>
        <Link
          href="/plants"
          className="group inline-flex items-center gap-2 text-base font-semibold text-leaf-700 hover:text-leaf-900 transition-colors duration-250 focus:outline-none focus:ring-3 focus:ring-leaf-400/50 rounded px-3 py-2 whitespace-nowrap"
        >
          View catalog
          <ArrowRight aria-hidden="true" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-250" />
        </Link>
      </div>
      <div className="mt-8 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
}
