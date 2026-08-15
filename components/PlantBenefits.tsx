import { CheckCircle2, Leaf } from "lucide-react";
import { cardStyles } from "@/components/ui";

type PlantBenefitsProps = {
  benefits: string[];
};

// Premium benefits section with enhanced card design and visual hierarchy
export default function PlantBenefits({ benefits }: PlantBenefitsProps) {
  return (
    <section className="py-8 sm:py-12">
      <div className="rounded-[2.5rem] p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-green-400/40 via-emerald-500/20 to-green-600/40 backdrop-blur-xl backdrop-saturate-150 border border-white/30 shadow-2xl shadow-green-500/20 ring-1 ring-inset ring-white/30">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-inset ring-slate-200">
            <Leaf aria-hidden="true" className="h-6 w-6 text-slate-700" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Benefits of this plant
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit}
              className={`group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md ${cardStyles}`}
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 h-6 w-6 shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-slate-800"
              />
              <div>
                <h3 className="text-base font-semibold leading-snug text-slate-900">
                  {benefit}
                </h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
