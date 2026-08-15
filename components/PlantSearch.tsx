"use client";

import { Search, X } from "lucide-react";

type PlantSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

// Premium plant search with enhanced visual design and interactions
export default function PlantSearch({ value, onChange }: PlantSearchProps) {
  return (
    <label className="block">
      <span className="sr-only">Search plants</span>
      <div className="relative group">
        <Search
          aria-hidden="true"
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 group-focus-within:text-leaf-600 transition-colors duration-250"
        />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search for Monstera, Aloe Vera, Snake Plant..."
          className="min-h-13 w-full rounded-full border-2 border-leaf-100 bg-white py-3 pl-12 pr-12 text-base text-leaf-900 shadow-sm outline-none transition-all duration-250 placeholder:text-slate-400 focus:border-leaf-600 focus:shadow-md focus:ring-3 focus:ring-leaf-400/50 sm:text-sm hover:border-leaf-200"
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear plant search"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-leaf-50 text-slate-500 hover:bg-leaf-100 hover:text-slate-700 focus:outline-none focus:ring-3 focus:ring-leaf-400/50 transition-all duration-250"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </label>
  );
}
