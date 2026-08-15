import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { nurseryContact } from "@/data/contact";
import SectionHeader from "@/components/SectionHeader";
import { primaryButtonStyles } from "@/components/ui";

export default function VisitUs() {
  return (
    <section id="contact" className="relative overflow-hidden py-20">

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(98,185,122,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(145,210,162,0.05),transparent_70%)] blur-3xl" />
      </div>

      <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-[rgba(46,125,70,0.09)] bg-gradient-to-br from-[#f6fbf7] via-white to-[#eef7f1] p-6 sm:p-8 lg:grid-cols-[1fr_1.25fr] lg:gap-10 lg:p-12 shadow-elevated">

        {/* ── LEFT: Info ── */}
        <div className="flex flex-col">
          <SectionHeader
            eyebrow="Visit us"
            title="Visit to the nursery"
            description="Get directions to Krushna Nursery satara and visit us for healthy plants and on-site guidance."
          />

          <div className="mt-8 flex flex-col gap-3">

            <a
              href={nurseryContact.mapsUrl}
              className="group flex gap-4 rounded-2xl border border-[rgba(46,125,70,0.09)] bg-white/80 p-5 text-sm leading-6 text-[#4a5e50] shadow-subtle backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(46,125,70,0.18)] hover:bg-white hover:shadow-elevated"
            >
              <div className="relative mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf7ef] text-[#2e7d46] transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                <MapPin aria-hidden="true" className="h-5 w-5" />
                <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-[rgba(46,125,70,0.15)] transition-all duration-300" />
              </div>
              <div>
                <p className="font-semibold text-[#1a3d26] group-hover:text-[#2e7d46] transition-colors duration-200">
                  Nursery Location
                </p>
                <p className="mt-1 text-[#4f6555]">{nurseryContact.address}</p>
              </div>
            </a>

            <a
              href={nurseryContact.phoneHref}
              className="group flex min-h-[3.5rem] gap-4 rounded-2xl border border-[rgba(46,125,70,0.09)] bg-white/80 p-5 text-sm shadow-subtle backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(46,125,70,0.18)] hover:bg-white hover:shadow-elevated"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf7ef] text-[#2e7d46] transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                <Phone aria-hidden="true" className="h-5 w-5" />
                <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-[rgba(46,125,70,0.15)] transition-all duration-300" />
              </div>
              <div>
                <p className="font-semibold text-[#1a3d26] group-hover:text-[#2e7d46] transition-colors duration-200">Call us</p>
                <p className="mt-0.5 text-xs font-normal text-[#4f6555]">{nurseryContact.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={nurseryContact.whatsappUrl}
              className="group flex min-h-[3.5rem] gap-4 rounded-2xl border border-[rgba(46,125,70,0.09)] bg-white/80 p-5 text-sm shadow-subtle backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(46,125,70,0.18)] hover:bg-white hover:shadow-elevated"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf7ef] text-[#2e7d46] transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
                <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-[rgba(46,125,70,0.15)] transition-all duration-300" />
              </div>
              <div>
                <p className="font-semibold text-[#1a3d26] group-hover:text-[#2e7d46] transition-colors duration-200">WhatsApp inquiry</p>
                <p className="mt-0.5 text-xs font-normal text-[#4f6555]">Quick response to your questions</p>
              </div>
            </a>

          </div>
        </div>

        {/* ── RIGHT: Google Maps embed ── */}
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(46,125,70,0.09)] shadow-elevated min-h-80">

          {/* Rounded corner mask */}
          <div className="absolute inset-0 z-10 rounded-[1.5rem] ring-1 ring-inset ring-[rgba(46,125,70,0.07)] pointer-events-none" />

          <iframe
            title="Krushna Plant Nursery Satara location on Google Maps"
            src="https://www.google.com/maps?q=17.6868181,74.0273218&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px", display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />

          {/* Floating open-in-maps badge */}
          <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
            <a
              href={nurseryContact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Krushna Plant Nursery Satara in Google Maps"
              className={`${primaryButtonStyles} group whitespace-nowrap shadow-lg`}
            >
              <Navigation
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              Open in Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
