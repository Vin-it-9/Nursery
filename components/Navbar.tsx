import Link from "next/link";
import { Leaf, MessageCircle, Phone } from "lucide-react";
import { nurseryContact } from "@/data/contact";

// Premium navbar with enhanced visual hierarchy and interactions
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-leaf-100 bg-white/95 backdrop-blur-md shadow-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-leaf-900 focus:outline-none focus:ring-3 focus:ring-leaf-100/50 transition-colors duration-250"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-leaf-600 to-leaf-700 text-white shadow-md hover:shadow-lg transition-all duration-250">
            <Leaf aria-hidden="true" className="h-6 w-6" />
          </span>
          <span className="hidden sm:inline text-leaf-900">Krushna Nursery satara</span>
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-leaf-700">
            <Link 
              className="hover:text-leaf-900 transition-colors duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-leaf-400 rounded px-2 py-1" 
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-leaf-900 transition-colors duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-leaf-400 rounded px-2 py-1"
              href="/plants"
            >
              Plants
            </Link>
            <Link
              className="hover:text-leaf-900 transition-colors duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-leaf-400 rounded px-2 py-1"
              href="/#categories"
            >
              Categories
            </Link>
            <Link
              className="hover:text-leaf-900 transition-colors duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-leaf-400 rounded px-2 py-1"
              href="/#contact"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={nurseryContact.whatsappUrl}
              aria-label="Contact the nursery on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full border-2 border-leaf-600 bg-white px-4 py-2 text-sm font-semibold text-leaf-700 hover:bg-leaf-50 hover:border-leaf-700 shadow-sm hover:shadow-md transition-all duration-250 focus:outline-none focus:ring-3 focus:ring-leaf-400/50"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <a
              href={nurseryContact.phoneHref}
              aria-label="Call the nursery"
              className="inline-flex items-center gap-2 rounded-full bg-leaf-700 px-4 py-2 text-sm font-semibold text-white hover:bg-leaf-800 shadow-md hover:shadow-lg transition-all duration-250 focus:outline-none focus:ring-3 focus:ring-leaf-400/50"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span className="hidden xs:inline">Call</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
