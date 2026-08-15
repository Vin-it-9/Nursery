"use client";

import type { PlantCategory } from "@/data/plants";

type PlantFiltersProps = {
  categories: PlantCategory[];
  selectedCategory: PlantCategory | "All";
  onChange: (category: PlantCategory | "All") => void;
};

// Premium filter buttons with enhanced visual design and interactions
export default function PlantFilters({
  categories,
  selectedCategory,
  onChange,
}: PlantFiltersProps) {
  return (
    <div
      aria-label="Filter plants by category"
      className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:overflow-visible sm:gap-3"
    >
      <button
        type="button"
        onClick={() => onChange("All")}
        aria-pressed={selectedCategory === "All"}
        className={`min-h-11 shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-250 focus:outline-none focus:ring-3 focus:ring-leaf-400/50 ${
          selectedCategory === "All"
            ? "bg-leaf-700 text-white shadow-md hover:shadow-lg hover:bg-leaf-800"
            : "border-2 border-leaf-100 bg-white text-leaf-700 hover:border-leaf-200 hover:shadow-sm"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={selectedCategory === category}
          className={`min-h-11 shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-250 focus:outline-none focus:ring-3 focus:ring-leaf-400/50 ${
            selectedCategory === category
              ? "bg-leaf-700 text-white shadow-md hover:shadow-lg hover:bg-leaf-800"
              : "border-2 border-leaf-100 bg-white text-leaf-700 hover:border-leaf-200 hover:shadow-sm"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
