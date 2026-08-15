import Link from "next/link";
import { Leaf, MapPin, MessageSquare, Phone } from "lucide-react";
import { nurseryContact } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-[rgba(46,125,70,0.08)] bg-gradient-to-b from-white via-[#f8fbf8] to-[#f0f7f1]">

      {/* Background atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 left-1/4 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(98,185,122,0.05),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(145,210,162,0.04),transparent_70%)] blur-3xl" />
      </div>

      {/* Main grid */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* ── Branding ── */}
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1a3d26] text-white shadow-md">
              <Leaf aria-hidden="true" className="h-5 w-5" />
              <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </span>
            <h2 className="text-lg font-bold tracking-tight text-[#1a3d26]">Krushna Nursery satara</h2>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#4f6555]">
            A local Satara nursery for healthy plants, practical care tips, and
            easy WhatsApp inquiries.
          </p>


        </div>

        {/* ── Quick Links ── */}
        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#2e7d46]">
            Quick Links
          </h3>
          <div className="mt-5 flex flex-col gap-2.5">
            {[
              { label: "Home", href: "/" },
              { label: "Plants", href: "/plants" },
              { label: "Categories", href: "/#categories" },
              { label: "Contact", href: "/#contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#4f6555] transition-all duration-200 hover:text-[#1a3d26]"
              >
                <span className="h-1 w-1 rounded-full bg-[#2e7d46] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:w-2" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Categories ── */}
        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#2e7d46]">
            Categories
          </h3>
          <div className="mt-5 flex flex-col gap-2.5">
            {[
              { label: "Indoor Plants", href: "/plants?category=Indoor%20Plants" },
              { label: "Outdoor Plants", href: "/plants?category=Outdoor%20Plants" },
              { label: "Succulents", href: "/plants?category=Succulents" },
              { label: "Flowering Plants", href: "/plants?category=Flowering%20Plants" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#4f6555] transition-all duration-200 hover:text-[#1a3d26]"
              >
                <span className="h-1 w-1 rounded-full bg-[#2e7d46] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:w-2" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Contact ── */}
        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#2e7d46]">
            Contact
          </h3>
          <div className="mt-5 flex flex-col gap-3">
            {[
              { href: nurseryContact.mapsUrl, icon: MapPin, label: nurseryContact.address },
              { href: nurseryContact.phoneHref, icon: Phone, label: nurseryContact.phoneDisplay },
              { href: nurseryContact.whatsappUrl, icon: MessageSquare, label: nurseryContact.phoneDisplay },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={`${href}-${label}`}
                href={href}
                className="group flex items-start gap-3 text-sm font-medium text-[#4f6555] transition-colors duration-200 hover:text-[#1a3d26]"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#edf7ef] text-[#2e7d46] transition-all duration-200 group-hover:bg-[#e2f5e7] group-hover:shadow-sm">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="leading-6">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-[rgba(46,125,70,0.07)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-[#5f7867]">
            © 2026 Krushna Nursery satara.
          </p>
        </div>
      </div>

    </footer>
  );
}
