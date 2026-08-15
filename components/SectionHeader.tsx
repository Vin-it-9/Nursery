type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

// Premium section header with enhanced visual hierarchy and typography
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-leaf-600 letter-spacing[0.1em]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-leaf-900 leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
}
