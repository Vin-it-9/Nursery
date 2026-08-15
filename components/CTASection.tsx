import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { primaryButtonStyles } from "@/components/ui";

// Premium CTA section with enhanced visual design and copy
export default function CTASection() {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-leaf-700 to-leaf-800 px-5 py-16 text-center text-white shadow-lg sm:px-10 lg:px-16 lg:py-20 relative overflow-hidden border border-leaf-600/50">
      {/* Decorative elements */}
      <div className="absolute -right-32 -top-32 h-64 w-64 bg-leaf-600/20 rounded-full blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-48 w-48 bg-leaf-800/20 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Ready to bring more green into your space?
        </h2>
        <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-leaf-100/90 leading-relaxed">
          Explore our carefully selected collection of healthy plants perfect for your home, balcony, or workspace.
        </p>
        <Link
          href="/plants"
          className="mt-8 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white text-leaf-700 px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl hover:bg-leaf-50 active:translate-y-0.5 transition-all duration-250 ease-out focus:outline-none focus:ring-3 focus:ring-white/50"
        >
          Explore Plants
          <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
