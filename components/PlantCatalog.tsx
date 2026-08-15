"use client";

import { useEffect, useMemo, useState } from "react";
import type { Plant, PlantCategory } from "@/data/plants";
import PlantCard from "@/components/PlantCard";
import PlantFilters from "@/components/PlantFilters";
import PlantSearch from "@/components/PlantSearch";
import { SearchX } from "lucide-react";

type PlantCatalogProps = {
  plants: Plant[];
  categories: PlantCategory[];
  initialCategory?: PlantCategory | "All";
};

// Premium plant catalog with enhanced search and filter UI
export default function PlantCatalog({
  plants,
  categories,
  initialCategory = "All",
}: PlantCatalogProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<PlantCategory | "All">(initialCategory);

  useEffect(() => {
    const categoryFromUrl = new URLSearchParams(window.location.search).get(
      "category",
    );

    if (categories.includes(categoryFromUrl as PlantCategory)) {
      setSelectedCategory(categoryFromUrl as PlantCategory);
    }
  }, [categories]);

  const filteredPlants = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return plants.filter((plant) => {
      const matchesSearch =
        plant.name.toLowerCase().includes(normalizedSearch) ||
        plant.shortDescription.toLowerCase().includes(normalizedSearch);
      const matchesCategory =
        selectedCategory === "All" || plant.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [plants, searchTerm, selectedCategory]);

  return (
    <section className="space-y-10">
      {/* Search & Filter Container */}
      <div className="rounded-3xl border border-forest-100/50 bg-white p-5 sm:p-8 shadow-subtle hover:shadow-elevated transition-shadow duration-300">
        <div className="grid gap-6 xl:grid-cols-[1fr_auto] xl:items-center">
          <PlantSearch value={searchTerm} onChange={setSearchTerm} />
          <PlantFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm sm:text-base font-medium text-forest-700">
          {filteredPlants.length === 0 ? (
            <span>No plants match your search criteria</span>
          ) : (
            <>
              <span className="text-xl font-bold text-forest-900">{filteredPlants.length}</span>
              <span className="ml-2">
                {filteredPlants.length === 1 ? "plant" : "plants"} available
                {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
                {searchTerm.trim() ? ` for "${searchTerm.trim()}"` : ""}
              </span>
            </>
          )}
        </p>
      </div>

      {/* Plant Grid or Empty State */}
      {filteredPlants.length > 0 ? (
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-forest-200 bg-forest-50/30 p-12 sm:p-16 text-center shadow-subtle">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-100 text-forest-500 mb-6">
            <SearchX aria-hidden="true" className="h-8 w-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-forest-900">
            No plants match your search.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-7 text-forest-700/80 max-w-md mx-auto">
            Try a different plant name, or explore our{" "}
            <span className="font-semibold text-forest-800">full collection</span> to discover
            something amazing.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-forest-800 transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-forest-300"
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}
