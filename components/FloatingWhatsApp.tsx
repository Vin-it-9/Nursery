import { MessageCircle } from "lucide-react";
import { nurseryContact } from "@/data/contact";

export default function FloatingWhatsApp() {
  return (
    <a
      href={nurseryContact.whatsappUrl}
      aria-label="Contact the nursery on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group"
      style={{ animation: "float 4s ease-in-out infinite" }}
    >
      {/* Outer pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25d366] opacity-30 animate-ping"
        style={{ animationDuration: "2s" }}
      />

      {/* Second softer ring */}
      <span
        aria-hidden="true"
        className="absolute -inset-2 rounded-full bg-[#25d366] opacity-10 animate-ping"
        style={{ animationDuration: "2.5s", animationDelay: "0.4s" }}
      />

      {/* Main button */}
      <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25d366] shadow-[0_8px_24px_rgba(37,211,102,0.40)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_32px_rgba(37,211,102,0.50)]">

        {/* Inner gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"
        />

        {/* WhatsApp icon */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.525 5.859L.057 23.428a.5.5 0 0 0 .609.61l5.684-1.49A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.67-.52-5.18-1.427l-.37-.22-3.838 1.006 1.02-3.735-.24-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </div>

      {/* Tooltip */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[calc(100%+10px)] right-0 flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-[rgba(37,211,102,0.15)] bg-[#1a3d26] px-3.5 py-2 text-xs font-semibold text-white shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#25d366] animate-pulse" />
        Quick message
        {/* Tooltip arrow */}
        <span
          className="absolute -bottom-[5px] right-5 h-2.5 w-2.5 rotate-45 rounded-sm border-b border-r border-[rgba(37,211,102,0.15)] bg-[#1a3d26]"
        />
      </span>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>
    </a>
  );
}
