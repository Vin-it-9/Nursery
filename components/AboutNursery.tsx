import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function AboutNursery() {
  return (
    <section className="relative overflow-hidden grid items-center gap-10 rounded-[2rem] border border-[rgba(46,125,70,0.09)] bg-gradient-to-br from-[#f6fbf7] via-white to-[#eef7f1] px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 shadow-elevated">

      {/* Background atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(98,185,122,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(145,210,162,0.05),transparent_70%)] blur-3xl" />
      </div>

      {/* ── LEFT: Image ── */}
      <div className="group relative order-2 min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-[rgba(46,125,70,0.09)] bg-[#edf7ef] shadow-elevated lg:order-1 sm:min-h-[28rem]">
        <Image
          src="https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1600&q=80"
          alt="Nursery owner arranging healthy potted plants"
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[rgba(26,61,38,0.14)] via-transparent to-transparent pointer-events-none"
        />

        {/* Top accent bar */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2e7d46] via-[#5a8e6a] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

      </div>

      {/* ── RIGHT: Content ── */}
      <div className="order-1 flex flex-col lg:order-2">
        <SectionHeader
          eyebrow="About the nursery"
          title="A local Satara nursery for everyday plant lovers"
          description="Krushna Nursery satara began with a simple goal: help local homes, shops, and balconies feel greener without making plant care complicated."
        />

        <p className="mt-6 text-base leading-8 text-[#4f6555] sm:text-[1.0625rem]">
          We focus on healthy plants, honest recommendations, and care tips that
          match everyday Indian homes. Whether you are choosing your first snake
          plant or refreshing a balcony corner before monsoon, our team helps
          you find plants that fit your light, space, and routine.
        </p>
      </div>

    </section>
  );
}
