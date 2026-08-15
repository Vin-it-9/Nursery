// Local plant data powers the static catalog and detail pages.
export type PlantCategory =
  | "Indoor Plants"
  | "Outdoor Plants"
  | "Succulents"
  | "Flowering Plants";

export type Plant = {
  id: number;
  slug: string;
  name: string;
  category: PlantCategory;
  price: string;
  shortDescription: string;
  fullDescription: string;
  careLevel: "Easy" | "Moderate";
  sunlight: string;
  watering: string;
  benefits: string[];
  careTips: string[];
  image: string;
  galleryImages: string[];
};

export const categories: PlantCategory[] = [
  "Indoor Plants",
  "Outdoor Plants",
  "Succulents",
  "Flowering Plants",
];

export const plants: Plant[] = [
  {
    id: 1,
    slug: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    category: "Indoor Plants",
    price: "₹899",
    shortDescription:
      "A popular indoor plant known for decorative split leaves and strong visual presence.",
    fullDescription:
      "Monstera Deliciosa is a statement indoor plant loved for its large split leaves and tropical character. It works beautifully in Indian homes, offices, and bright corners where it can grow steadily with simple routine care.",
    careLevel: "Moderate",
    sunlight: "Bright indirect light",
    watering: "Water when the top 2 inches of soil feel dry",
    benefits: ["Air Purification", "Indoor Friendly", "Statement Decor"],
    careTips: [
      "Keep near a bright window with filtered sunlight.",
      "Use a moss pole or support as the plant matures.",
      "Wipe leaves monthly to keep them clean and glossy.",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImages: [
      "https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1700213040197-d13ed110bfb9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 2,
    slug: "snake-plant",
    name: "Snake Plant",
    category: "Indoor Plants",
    price: "₹349",
    shortDescription:
      "A hardy upright plant that handles missed watering and low-light corners well.",
    fullDescription:
      "Snake Plant is one of the easiest houseplants to maintain. Its upright leaves, compact footprint, and tolerance for lower light make it ideal for bedrooms, offices, and first-time plant owners in city homes.",
    careLevel: "Easy",
    sunlight: "Low to bright indirect light",
    watering: "Allow soil to dry fully between watering",
    benefits: ["Low Maintenance", "Beginner Friendly", "Air Purifying"],
    careTips: [
      "Avoid overwatering; dry soil is safer than wet soil.",
      "Place in bedrooms, offices, or shaded living room corners.",
      "Use a well-draining pot to protect the roots.",
    ],
    image:
      "https://images.unsplash.com/photo-1599009944997-3544a939813c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImages: [
      "https://images.unsplash.com/photo-1599009944997-3544a939813c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1687552212914-03a30c82053c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1611211232932-da3113c5b960?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 3,
    slug: "golden-pothos",
    name: "Golden Pothos",
    category: "Indoor Plants",
    price: "₹200",
    shortDescription:
      "A fast-growing trailing plant ideal for shelves, hanging pots, and tabletops.",
    fullDescription:
      "Golden Pothos is a fast-growing trailing plant with heart-shaped leaves. It is a flexible choice for shelves, hanging baskets, and tabletops, and it adapts well to most indoor environments.",
    careLevel: "Easy",
    sunlight: "Medium to bright indirect light",
    watering: "Water when the top soil feels dry",
    benefits: ["Fast Growing", "Hanging Friendly", "Beginner Friendly"],
    careTips: [
      "Trim long vines to keep the plant full and fresh.",
      "Keep away from harsh afternoon sun.",
      "Propagate cuttings easily in water.",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1663962975773-44cfbefe880b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImages: [
      "https://images.unsplash.com/photo-1747156198758-e12dfd4fe7ee?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1625321642799-694ec5bbbb85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663962975773-44cfbefe880b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 4,
    slug: "peace-lily",
    name: "Peace Lily",
    category: "Flowering Plants",
    price: "₹549",
    shortDescription:
      "An elegant flowering plant with glossy foliage and soft white blooms.",
    fullDescription:
      "Peace Lily brings soft white blooms and glossy foliage into indoor spaces. It is a refined choice for homes and offices, especially where a calm, clean look is desired.",
    careLevel: "Moderate",
    sunlight: "Medium indirect light",
    watering: "Keep soil lightly moist, not soggy",
    benefits: ["Flowering Indoor Plant", "Air Purifying", "Elegant Decor"],
    careTips: [
      "Keep soil lightly moist during warm months.",
      "Place in bright indirect light for better blooms.",
      "Remove faded flowers to keep the plant tidy.",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1708769592969-9f42825496a7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImages: [
      "https://plus.unsplash.com/premium_photo-1708769592969-9f42825496a7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 5,
    slug: "aloe-vera",
    name: "Aloe Vera",
    category: "Succulents",
    price: "₹249",
    shortDescription:
      "A compact succulent with sculptural leaves and excellent tolerance for dry spells.",
    fullDescription:
      "Aloe Vera is a sunny-window favourite with sculptural leaves and practical appeal. It needs very little water and is a smart choice for busy plant owners.",
    careLevel: "Easy",
    sunlight: "Bright direct or indirect light",
    watering: "Water sparingly after soil dries out",
    benefits: ["Low Water Needs", "Sunny Window Friendly", "Beginner Friendly"],
    careTips: [
      "Use a sunny window, balcony ledge, or bright outdoor spot.",
      "Water deeply but infrequently.",
      "Avoid letting water sit in the crown of the plant.",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1688045553706-e2c642bfa410?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImages: [
      "https://plus.unsplash.com/premium_photo-1688045553706-e2c642bfa410?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632380211596-b96123618ca8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 6,
    slug: "rubber-plant",
    name: "Rubber Plant",
    category: "Outdoor Plants",
    price: "₹699",
    shortDescription:
      "A bold foliage plant with glossy leaves that adds height and structure.",
    fullDescription:
      "Rubber Plant is known for its broad glossy leaves and strong upright shape. It can be styled indoors near bright windows or in protected outdoor spaces with filtered light.",
    careLevel: "Moderate",
    sunlight: "Bright filtered light",
    watering: "Water when the top soil begins to dry",
    benefits: ["Bold Foliage", "Decor Friendly", "Long Lasting"],
    careTips: [
      "Rotate the pot every few weeks for balanced growth.",
      "Clean leaves gently with a damp cloth.",
      "Avoid sudden movement from shade to direct sun.",
    ],
    image:
      "https://images.unsplash.com/photo-1669392597221-bbfd4b6e13ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImages: [
      "https://images.unsplash.com/photo-1669392597221-bbfd4b6e13ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1562351757-66f3589f30cf?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591656884447-8562e2373a66?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 7,
    slug: "jade-plant",
    name: "Jade Plant",
    category: "Succulents",
    price: "₹399",
    shortDescription:
      "A tidy succulent with thick rounded leaves, ideal for desks and windowsills.",
    fullDescription:
      "Jade Plant is a compact succulent with thick rounded leaves and a clean silhouette. It is excellent for desks, windowsills, and small sunny corners.",
    careLevel: "Easy",
    sunlight: "Bright indirect light with some sun",
    watering: "Water only when soil is completely dry",
    benefits: ["Compact Size", "Low Maintenance", "Desk Friendly"],
    careTips: [
      "Keep in a bright spot with good airflow.",
      "Water only after the soil dries completely.",
      "Use a shallow pot with drainage holes.",
    ],
    image:
      "https://images.unsplash.com/photo-1785247859976-bf4a3bef70f8?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImages: [
      "https://images.unsplash.com/photo-1785247859976-bf4a3bef70f8?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1651067089590-b1aabb5c406f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632752369730-b0439fc482a6?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: 8,
    slug: "areca-palm",
    name: "Areca Palm",
    category: "Outdoor Plants",
    price: "₹799",
    shortDescription:
      "A graceful palm that brings lush greenery to balconies, patios, and bright rooms.",
    fullDescription:
      "Areca Palm adds height, softness, and tropical texture to homes, balconies, and shaded outdoor areas. Its feathery fronds make it a favourite for creating lush green corners.",
    careLevel: "Moderate",
    sunlight: "Bright indirect light or partial shade",
    watering: "Keep soil evenly moist but not waterlogged",
    benefits: ["Lush Greenery", "Patio Friendly", "Natural Privacy"],
    careTips: [
      "Mist occasionally in dry weather.",
      "Keep away from harsh afternoon sun.",
      "Trim dry fronds from the base when needed.",
    ],
    image:
      "https://images.unsplash.com/photo-1615309363679-fed456ff8113?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    galleryImages: [
      "https://images.unsplash.com/photo-1615309363679-fed456ff8113?q=80&w=672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1709215992319-e10ecbbe3c98?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1716640015433-ac745a652630?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

export function getPlantBySlug(slug: string) {
  return plants.find((plant) => plant.slug === slug);
}

export function getRelatedPlants(plant: Plant, limit = 4) {
  return plants
    .filter(
      (relatedPlant) =>
        relatedPlant.category === plant.category && relatedPlant.id !== plant.id,
    )
    .slice(0, limit);
}
