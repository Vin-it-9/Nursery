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
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611211232932-da3113c5b960?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 3,
    slug: "golden-pothos",
    name: "Golden Pothos",
    category: "Indoor Plants",
    price: "₹299",
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
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611211232932-da3113c5b960?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1558293842-c0fd3db86157?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558293842-c0fd3db86157?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558293842-c0fd3db86157?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
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
