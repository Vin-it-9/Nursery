import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { cardStyles } from "@/components/ui";

const testimonials = [
  {
    name: "Aarav Mehta",
    rating: 5,
    review:
      "The plants were fresh and the care instructions were simple enough for my flat balcony.",
  },
  {
    name: "Priya Shah",
    rating: 5,
    review:
      "Helpful suggestions, fair pricing, and good options for indoor plants in Satara weather.",
  },
  {
    name: "Neha Rao",
    rating: 5,
    review: "The nursery made it simple to pick plants that fit my small balcony space.",
  },
];

// Premium testimonial cards with enhanced visual design and typography
export default function Testimonials() {
  return (
    <section className="py-20">
      <SectionHeader
        align="center"
        eyebrow="Testimonials"
        title="Trusted by local plant lovers"
        description="Feedback from local customers who found the right plants for their homes and balconies."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.name}
            className={`flex min-h-72 flex-col p-7 sm:p-8 group hover:shadow-xl transition-all duration-300 relative overflow-hidden ${cardStyles}`}
          >
            {/* Background accent on hover */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-leaf-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-full -mr-12 -mt-12" />

            {/* Quote Icon */}
            <Quote aria-hidden="true" className="h-8 w-8 text-leaf-200 group-hover:text-leaf-300 transition-colors duration-300 mb-3" />

            {/* Star Rating - Premium styling */}
            <div
              className="flex gap-1.5 text-gold-400"
              aria-label={`${testimonial.rating} out of 5 stars`}
            >
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star
                  key={index}
                  aria-hidden="true"
                  className="h-5 w-5 fill-current"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="line-clamp-4 mt-5 text-base leading-8 text-slate-700 font-medium italic">
              "{testimonial.review}"
            </p>

            {/* Divider and Author Info */}
            <div className="mt-auto border-t border-leaf-100/50 pt-5 group-hover:border-leaf-200 transition-colors duration-300">
              <p className="font-bold text-leaf-900 text-sm sm:text-base">{testimonial.name}</p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Local customer</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
