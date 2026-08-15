import Link from "next/link";
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
          href=""
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-leaf-900 focus:outline-none focus:ring-3 focus:ring-leaf-100/50 transition-colors duration-250"
        >

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
          </div>
          <div className="flex items-center gap-3">
            <a
                href={nurseryContact.whatsappUrl}
                aria-label="Contact the nursery on WhatsApp"
                className="inline-flex items-center gap-2 rounded-full border-2 border-leaf-600 bg-white px-4 py-2 text-sm font-semibold text-leaf-700 hover:bg-leaf-50 hover:border-leaf-700 shadow-sm hover:shadow-md transition-all duration-250 focus:outline-none focus:ring-3 focus:ring-leaf-400/50"
            >
              {/* Official WhatsApp logo */}
              <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L.07 24l6.34-1.66a11.86 11.86 0 0 0 5.63 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.41-8.41ZM12.05 21.76h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.86 9.86 0 0 1-1.51-5.22C2.15 6.43 6.58 2 12.05 2c2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.44 9.83-9.91 9.83Zm5.42-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            <a
                href={nurseryContact.phoneHref}
                aria-label="Call the nursery"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-lg transition-all duration-250 focus:outline-none focus:ring-3 focus:ring-leaf-400/50"
                style={{ backgroundColor: "#275136", color: "#ffffff" }}
            >
              <svg
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call</span>
            </a>

          </div>
        </div>
      </nav>
    </header>
  );
}
