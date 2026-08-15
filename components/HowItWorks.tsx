import { Home, MessageCircle, Search, Sprout } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  { title: "Choose Plant", description: "Browse collections and pick a plant that fits your space.", icon: Search, color: "leaf" },
  { title: "Learn Care Tips", description: "Check simple care notes before you bring it home.", icon: Sprout, color: "sage" },
  { title: "Contact Nursery", description: "Message or call the nursery for availability and help.", icon: MessageCircle, color: "gold" },
  { title: "Take It Home", description: "Collect your plant and enjoy a greener everyday space.", icon: Home, color: "earth" },
];

export default function HowItWorks() {
  const colorMap = {
    leaf:  { bg: "bg-leaf-100",  text: "text-leaf-700",  badge: "bg-leaf-50"  },
    sage:  { bg: "bg-sage-100",  text: "text-sage-700",  badge: "bg-sage-50"  },
    gold:  { bg: "bg-gold-100",  text: "text-gold-700",  badge: "bg-gold-50"  },
    earth: { bg: "bg-earth-100", text: "text-earth-700", badge: "bg-earth-50" },
  };

  return (
    <section className="relative overflow-hidden py-24">

      {/* ── Background atmosphere ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(98,185,122,0.07),transparent_70%)] blur-3xl" />
        <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(145,210,162,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(83,160,106,0.05),transparent_70%)] blur-3xl" />
      </div>

      <SectionHeader
        align="center"
        eyebrow="How it works"
        title="Simple steps to greener spaces"
        description="A straightforward local nursery experience from browsing to bringing plants home."
      />

      {/* ── Decorative map ── */}
      <div className="relative mx-auto mt-14 mb-2 max-w-4xl overflow-hidden rounded-[2rem] border border-[rgba(46,125,70,0.10)] bg-gradient-to-br from-[#f0f9f2] via-[#f6fbf7] to-[#eaf5ed] shadow-md px-6 pt-8 pb-6">

        {/* Map grid lines */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.04]"
             style={{
               backgroundImage: "linear-gradient(#2e7d46 1px, transparent 1px), linear-gradient(90deg, #2e7d46 1px, transparent 1px)",
               backgroundSize: "40px 40px",
             }}
        />

        {/* Soft road blobs */}
        <div aria-hidden="true" className="absolute top-[38%] left-[5%] h-5 w-[90%] rounded-full bg-white/70 blur-[3px] shadow-sm" />
        <div aria-hidden="true" className="absolute top-[18%] left-[48%] h-[60%] w-5 rounded-full bg-white/60 blur-[3px] shadow-sm" />

        {/* Curved SVG journey path */}
        <svg
          aria-hidden="true"
          viewBox="0 0 800 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Road base */}
          <path
            d="M40 40 C140 10, 240 70, 380 40 C500 15, 620 68, 760 38"
            stroke="white"
            strokeWidth="14"
            strokeLinecap="round"
            opacity="0.7"
          />
          {/* Animated dotted route */}
          <path
            d="M40 40 C140 10, 240 70, 380 40 C500 15, 620 68, 760 38"
            stroke="#2e7d46"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="8 10"
            opacity="0.7"
            className="animate-[dash_3s_linear_infinite]"
            style={{ animationName: "dash" }}
          />
          {/* Glow layer */}
          <path
            d="M40 40 C140 10, 240 70, 380 40 C500 15, 620 68, 760 38"
            stroke="#5ec47e"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.12"
          />

          {/* Step markers on path */}
          {[40, 253, 507, 760].map((cx, i) => {
            const cy = [40, 48, 32, 38][i];
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="14" fill="white" className="drop-shadow-md" />
                <circle cx={cx} cy={cy} r="10" fill={i === 3 ? "#2e7d46" : "#edf7ef"} stroke="#2e7d46" strokeWidth="1.5" />
                <text x={cx} y={cy + 4} textAnchor="middle" fontSize="8" fill={i === 3 ? "white" : "#2e7d46"} fontWeight="700">{i + 1}</text>
              </g>
            );
          })}

          {/* Destination pin at end */}
          <g>
            <circle cx={760} cy={38} r="22" fill="rgba(46,125,70,0.12)" className="animate-ping" style={{ transformOrigin: "760px 38px" }} />
            <text x={760} y={14} textAnchor="middle" fontSize="16">🪴</text>
          </g>

          {/* Moving pulse dot */}
          <circle r="5" fill="#2e7d46" opacity="0.9">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M40 40 C140 10, 240 70, 380 40 C500 15, 620 68, 760 38"
            />
          </circle>
        </svg>

        {/* Step labels under map */}
        <div className="mt-2 grid grid-cols-4 gap-2">
          {steps.map((step) => (
            <p key={step.title} className="text-center text-[0.65rem] font-semibold uppercase tracking-wider text-[#4a5e50]">
              {step.title}
            </p>
          ))}
        </div>

        <style>{`
          @keyframes dash {
            to { stroke-dashoffset: -36; }
          }
        `}</style>
      </div>

      {/* ── Step cards ── */}
      <div className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const colors = colorMap[step.color as keyof typeof colorMap];
          const isLast = index === steps.length - 1;

          return (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {!isLast && (
                <div aria-hidden="true" className="hidden lg:block absolute top-[3.5rem] -right-2.5 z-10 w-5 h-[2px] bg-gradient-to-r from-[rgba(46,125,70,0.25)] to-transparent" />
              )}

              <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgba(46,125,70,0.09)] bg-white/80 p-6 sm:p-7 text-center shadow-subtle backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-elevated hover:border-[rgba(46,125,70,0.16)] hover:bg-white/95">

                {/* Hover background bloom */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-[rgba(60,170,100,0.04)] via-transparent to-[rgba(98,185,122,0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                />

                {/* Top accent bar */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2e7d46] via-[#5a8e6a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-2xl"
                />

                {/* Step number */}
                <div className={`relative mx-auto flex h-11 w-11 items-center justify-center rounded-xl ${colors.bg} ${colors.text} font-bold text-base shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300`}>
                  {index + 1}
                  {/* ring */}
                  <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-[rgba(46,125,70,0.15)] transition-all duration-300" />
                </div>

                {/* Icon */}
                <div className={`relative mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-2xl ${colors.badge} border border-[rgba(46,125,70,0.08)] group-hover:shadow-md group-hover:scale-[1.06] transition-all duration-300`}>
                  <Icon aria-hidden="true" className={`h-7 w-7 ${colors.text}`} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[1.0625rem] font-semibold leading-snug text-[#1a3d26] group-hover:text-[#2e7d46] transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-6 text-[#4f6555] flex-1">
                  {step.description}
                </p>

                {/* Accent bar */}
                <div
                  aria-hidden="true"
                  className="mt-5 mx-auto h-[2px] w-8 rounded-full bg-gradient-to-r from-[#2e7d46] to-[#5a8e6a] opacity-50 group-hover:w-14 group-hover:opacity-90 transition-all duration-400"
                />
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
