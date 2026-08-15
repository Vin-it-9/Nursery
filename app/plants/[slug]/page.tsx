import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlantBenefits from "@/components/PlantBenefits";
import PlantCareGuide from "@/components/PlantCareGuide";
import PlantGallery from "@/components/PlantGallery";
import PlantInfo from "@/components/PlantInfo";
import RelatedPlants from "@/components/RelatedPlants";
import { getPlantBySlug, getRelatedPlants, plants } from "@/data/plants";

type PlantDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return plants.map((plant) => ({
    slug: plant.slug,
  }));
}

export async function generateMetadata({
  params,
}: PlantDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) {
    return {
      title: "Plant Not Found | Krushna Nursery satara",
    };
  }

  return {
    title: `${plant.name} | Krushna Nursery satara`,
    description: plant.shortDescription,
  };
}

// Plant detail page is generated from local static plant data only.
export default async function PlantDetailPage({ params }: PlantDetailPageProps) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) {
    notFound();
  }

  const relatedPlants = getRelatedPlants(plant, 4);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <PlantGallery
          name={plant.name}
          image={plant.image}
          galleryImages={plant.galleryImages}
        />
        <PlantInfo plant={plant} />
      </section>

      <section className="py-8 sm:py-10">
        <article className="rounded-[2rem] border border-leaf-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-leaf-600">
            About this plant
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-leaf-900">
            {plant.name}
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
            {plant.fullDescription}
          </p>
        </article>
      </section>

      {/*<PlantBenefits benefits={plant.benefits} />*/}
      <PlantCareGuide plant={plant} />
      <RelatedPlants plants={relatedPlants} />
    </main>
  );
}
