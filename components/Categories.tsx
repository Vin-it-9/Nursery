import Image from "next/image";
import Link from "next/link";
import { Flower2, Home, Package, Sprout, TreePine, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const categories = [
    {
        name: "Indoor Plants",
        image:
            "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=85",
        icon: Home,
        href: "/plants?category=Indoor%20Plants",
    },
    {
        name: "Outdoor Plants",
        image:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85",
        icon: TreePine,
        href: "/plants?category=Outdoor%20Plants",
    },
    {
        name: "Succulents",
        image:
            "https://plus.unsplash.com/premium_photo-1733248812856-971b4dbb4614?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: Sprout,
        href: "/plants?category=Succulents",
    },
    {
        name: "Flowering Plants",
        image:
            "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: Flower2,
        href: "/plants?category=Flowering%20Plants",
    },
    {
        name: "Pots",
        image:
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=85",
        icon: Package,
        href: "/plants",
    },
];

export default function Categories() {
  return (
    <section id="categories" className="relative overflow-hidden py-20">

      {/* Background atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/3 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(98,185,122,0.06),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(145,210,162,0.05),transparent_70%)] blur-3xl" />
      </div>
      <SectionHeader
        eyebrow="Categories"
        title="Browse plants and essentials by type"
        description="Start with the plant style that fits your space, light, and care routine."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-5">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.name}
              href={category.href}
              className="group relative flex min-h-56 flex-col items-center justify-center overflow-hidden rounded-2xl border border-[rgba(46,125,70,0.09)] bg-white/80 p-5 text-center shadow-subtle backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-[rgba(46,125,70,0.18)] hover:bg-white hover:shadow-elevated"
            >
              {/* Hover bloom */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-[rgba(60,170,100,0.04)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Top accent bar */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2e7d46] via-[#5a8e6a] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-2xl"
              />

              {/* Image circle */}
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-[rgba(46,125,70,0.12)] bg-[#edf7ef] shadow-md transition-all duration-400 group-hover:scale-[1.04] group-hover:border-[rgba(46,125,70,0.25)] group-hover:shadow-lg">
                <Image
                  src={category.image}
                  alt={`${category.name} nursery category`}
                  fill
                  sizes="112px"
                  className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.08]"
                />
              </div>

              {/* Icon badge — overlaps circle bottom */}
              <div className="relative z-10 -mt-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#2e7d46] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1a3d26] group-hover:shadow-lg">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>

              {/* Label */}
              <h3 className="mt-3.5 flex items-center gap-1 text-sm font-semibold text-[#1a3d26] transition-colors duration-200 group-hover:text-[#2e7d46]">
                {category.name}
                <ArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-250 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </h3>

            </Link>
          );
        })}
      </div>
    </section>
  );
}
