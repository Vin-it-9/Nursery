import PlantCatalog from "@/components/PlantCatalog";
import { categories, plants } from "@/data/plants";

// Plants page with premium visual design and layout
export default function PlantsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      {/* Premium Header Section */}
      <section className="mb-12 rounded-3xl bg-gradient-to-br from-leaf-50 via-white to-sage-50 px-6 py-16 sm:px-8 lg:px-12 lg:py-20 shadow-sm border border-leaf-100/30">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-leaf-600">
          🌿 Plant Catalog
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-leaf-900 leading-tight">
          Find the right plant for your home.
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-700 font-medium">
          Search by plant name, filter by category, and explore each plant's care information. Send WhatsApp inquiries directly from the detail page.
        </p>
      </section>

      {/* Catalog Section */}
      <PlantCatalog plants={plants} categories={categories} />
    </main>
  );
}


