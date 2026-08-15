import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  MessageCircle,
  Sprout,
  Sun,
  Droplets,
  Info,
} from "lucide-react";
import type { Plant } from "@/data/plants";
import { nurseryContact } from "@/data/contact";
import { primaryButtonStyles, secondaryButtonStyles } from "@/components/ui";

type PlantInfoProps = {
  plant: Plant;
};

export default function PlantInfo({ plant }: PlantInfoProps) {
  const message = encodeURIComponent(
    `Hello, I am interested in ${plant.name}.`,
  );
  const whatsappUrl = `${nurseryContact.whatsappUrl}?text=${message}`;

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[rgba(46,125,70,0.09)] bg-white shadow-elevated">

      {/* Subtle top green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(98,185,122,0.07),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(145,210,162,0.05),transparent_70%)] blur-3xl"
      />

      <div className="relative p-6 sm:p-8 lg:p-10">

        {/* ── Badges ── */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-[rgba(46,125,70,0.14)] bg-[#edf7ef] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#2e7d46]">
            {plant.category}
          </span>
        </div>

        {/* ── Plant name ── */}
        <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-[#1a3d26] sm:text-4xl lg:text-[2.75rem]">
          {plant.name}
        </h1>

        {/* ── Short description ── */}
        <p className="mt-4 text-[1rem] leading-7 text-[#4f6555] sm:text-[1.0625rem] sm:leading-8">
          {plant.shortDescription}
        </p>

        {/* ── Divider ── */}
        <div className="mt-7 h-px bg-gradient-to-r from-[rgba(46,125,70,0.12)] via-[rgba(46,125,70,0.06)] to-transparent" />

        {/* ── Price block ── */}
        <div className="mt-7 flex items-end gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5a8e6a]">
              Price
            </p>
            <p className="mt-1.5 text-4xl font-bold tracking-tight text-[#1a3d26] sm:text-5xl">
              {plant.price}
            </p>
          </div>
          <div className="mb-1.5 flex items-center gap-1.5 rounded-xl border border-[rgba(46,125,70,0.09)] bg-[#f6fbf7] px-3 py-2">
            <Info aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#5a8e6a]" />
            <p className="text-[0.7rem] leading-4 text-[#4f6555]">
              May vary by pot size and availability
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mt-8 h-px bg-gradient-to-r from-[rgba(46,125,70,0.12)] via-[rgba(46,125,70,0.06)] to-transparent" />

        {/* ── Help callout ── */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[rgba(46,125,70,0.09)] bg-gradient-to-br from-[#f6fbf7] to-white">
          <div className="flex gap-4 p-5 sm:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf7ef] text-[#2e7d46]">
              <MessageCircle aria-hidden="true" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a3d26] sm:text-[0.9375rem]">
                Need help choosing the right plant?
              </p>
              <p className="mt-1.5 text-sm leading-6 text-[#4f6555]">
                Send a WhatsApp inquiry to ask about current size, pot options,
                and pickup timing in Satara.
              </p>
            </div>
          </div>
          {/* Bottom accent */}
          <div className="h-[2px] bg-gradient-to-r from-[#2e7d46] via-[#5a8e6a] to-transparent opacity-40" />
        </div>

        {/* ── Action buttons ── */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            aria-label={`Send WhatsApp inquiry for ${plant.name}`}
            className={`${primaryButtonStyles} group justify-center`}
          >
            <MessageCircle
              aria-hidden="true"
              className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
            />
            WhatsApp Inquiry
          </a>
          <Link
            href="/plants"
            className={`${secondaryButtonStyles} group justify-center`}
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            View All Plants
          </Link>
        </div>

      </div>
    </section>
  );
}
