import { Droplets, Scissors, Sun } from "lucide-react";
import type { Plant } from "@/data/plants";

type PlantCareGuideProps = {
  plant: Plant;
};

// Premium care guide with enhanced visual design and information hierarchy
export default function PlantCareGuide({ plant }: PlantCareGuideProps) {
  const guideItems = [
    {
      title: "Watering",
      value: plant.watering,
      icon: Droplets,
      color: "from-blue-100 to-transparent",
      iconColor: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      title: "Sunlight",
      value: plant.sunlight,
      icon: Sun,
      color: "from-gold-100 to-transparent",
      iconColor: "text-gold-700",
      bgColor: "bg-gold-50",
    },
    {
      title: "Maintenance",
      value: plant.careTips.join(" "),
      icon: Scissors,
      color: "from-leaf-100 to-transparent",
      iconColor: "text-leaf-700",
      bgColor: "bg-leaf-50",
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-1 bg-gradient-to-b from-leaf-700 to-leaf-600 rounded-full" />
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-leaf-900">
          Care Guide
        </h2>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {guideItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className={`group flex min-h-64 flex-col rounded-2xl border-2 border-leaf-100/50 bg-gradient-to-br ${item.color} p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-leaf-200 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}
            >
              {/* Icon Container */}
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bgColor} ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                <Icon aria-hidden="true" className="h-7 w-7" />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold text-leaf-900 group-hover:text-leaf-700 transition-colors duration-250">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-base leading-7 text-slate-700 flex-grow">
                {item.value}
              </p>

              {/* Bottom accent */}
              <div className="mt-auto pt-4 border-t border-leaf-100/50 group-hover:border-leaf-200 transition-colors duration-300">

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
