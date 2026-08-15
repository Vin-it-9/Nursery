import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";
import { primaryButtonStyles, secondaryButtonStyles } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f8fbf8] via-white to-[#f0f7f1] px-5 py-12 shadow-elevated sm:px-8 lg:px-12 lg:py-20">

      {/* Subtle background radial glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(60,170,100,0.06),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 h-[360px] w-[360px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(94,196,126,0.05),transparent_70%)] blur-3xl"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col">

          {/* Badge */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(46,125,70,0.12)] bg-white/80 px-4 py-2 text-sm font-semibold text-[#2e7d46] shadow-sm backdrop-blur-md">
            <Leaf aria-hidden="true" className="h-3.5 w-3.5 flex-shrink-0" />
            Fresh plants for every space
          </span>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#1a3d26] sm:text-5xl lg:text-[3.5rem]">
            Bring natural calm
            <span className="mt-2 block bg-gradient-to-r from-[#1a3d26] via-[#2e7d46] to-[#5a8e6a] bg-clip-text text-transparent">
              into your home.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-lg text-[1.05rem] leading-8 text-[#4a5e50] sm:text-lg">
            Krushna Nursery satara offers healthy plants, simple care tips,
            and friendly guidance for homes, balconies, and workspaces.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/plants"
              className={`${primaryButtonStyles} group justify-center`}
            >
              Shop Plants
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/#categories"
              className={`${secondaryButtonStyles} justify-center`}
            >
              Explore Categories
            </Link>
          </div>

        </div>

        {/* ── RIGHT: Hero image ── */}
        <div className="relative">

          {/* Main image card */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-[rgba(46,125,70,0.08)] bg-white/90 shadow-elevated sm:min-h-[30rem]">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=85"
              alt="Healthy green nursery plants arranged in pots"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Bottom gradient overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[rgba(26,61,38,0.10)] via-transparent to-transparent pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
