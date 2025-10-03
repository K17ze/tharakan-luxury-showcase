export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "fragrance" | "cosmetics" | "skincare";
  gender: "women" | "men" | "unisex";
  description: string;
  image: string;
}

export const products: Product[] = [
  // TOM FORD - Women's Fragrances
  {
    id: "tf-001",
    name: "Black Orchid Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "women",
    description: "A luxurious and sensual fragrance with black truffle, ylang-ylang, and black currant",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800"
  },
  {
    id: "tf-002",
    name: "Lost Cherry Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "women",
    description: "A warm and spicy fragrance with black cherry, bitter almond, and tonka bean",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800"
  },
  {
    id: "tf-003",
    name: "Velvet Orchid",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "women",
    description: "An intoxicating floral oriental with rum, honey, and orchid",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800"
  },

  // TOM FORD - Men's Fragrances
  {
    id: "tf-101",
    name: "Oud Wood Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "men",
    description: "A sophisticated blend of oud wood, rosewood, and cardamom",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800"
  },
  {
    id: "tf-102",
    name: "Tobacco Vanille",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "men",
    description: "A rich oriental with tobacco leaf, vanilla, and cocoa",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800"
  },
  {
    id: "tf-103",
    name: "Noir Extreme",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "men",
    description: "An amber woody fragrance with mandarin, neroli, and kulfi",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800"
  },

  // AMOUAGE - Women's Fragrances
  {
    id: "am-001",
    name: "Interlude Woman",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "women",
    description: "An intense amber floral with bergamot, frankincense, and myrrh",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800"
  },
  {
    id: "am-002",
    name: "Gold Woman",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "women",
    description: "A luxurious floral fragrance with lily, jasmine, and frankincense",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800"
  },
  {
    id: "am-003",
    name: "Jubilation XXV Woman",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "women",
    description: "A rich oriental with rose, ylang-ylang, and patchouli",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800"
  },

  // AMOUAGE - Men's Fragrances
  {
    id: "am-101",
    name: "Interlude Man",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "men",
    description: "A powerful amber woody with oregano, frankincense, and leather",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800"
  },
  {
    id: "am-102",
    name: "Reflection Man",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "men",
    description: "An elegant floral woody with rosemary, neroli, and vetiver",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800"
  },

  // LOUIS VUITTON - Women's Fragrances
  {
    id: "lv-001",
    name: "Attrape-Rêves",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "women",
    description: "A luminous floral with Turkish rose, pear, and patchouli",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800"
  },
  {
    id: "lv-002",
    name: "Rose des Vents",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "women",
    description: "A fresh floral with Grasse rose, saffron, and white musk",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800"
  },

  // LOUIS VUITTON - Men's Fragrances
  {
    id: "lv-101",
    name: "L'Immensité",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "men",
    description: "An intense woody with grapefruit, ginger, and amber",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800"
  },
  {
    id: "lv-102",
    name: "Orage",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "men",
    description: "A powerful woody with iris, vetiver, and patchouli",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800"
  },

  // PRADA - Women's Fragrances
  {
    id: "pr-001",
    name: "La Femme Prada",
    brand: "PRADA",
    category: "fragrance",
    gender: "women",
    description: "A sophisticated floral with frangipani, beeswax, and vetiver",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800"
  },
  {
    id: "pr-002",
    name: "Candy",
    brand: "PRADA",
    category: "fragrance",
    gender: "women",
    description: "A sweet oriental with caramel, musk, and benzoin",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800"
  },

  // PRADA - Men's Fragrances
  {
    id: "pr-101",
    name: "L'Homme Prada",
    brand: "PRADA",
    category: "fragrance",
    gender: "men",
    description: "A fresh amber with neroli, iris, and amber",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800"
  },
  {
    id: "pr-102",
    name: "Luna Rossa Black",
    brand: "PRADA",
    category: "fragrance",
    gender: "men",
    description: "An intense woody with bergamot, angelica, and patchouli",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800"
  },

  // DIOR - Women's Fragrances
  {
    id: "di-001",
    name: "J'adore Eau de Parfum",
    brand: "DIOR",
    category: "fragrance",
    gender: "women",
    description: "An iconic floral with ylang-ylang, Damascus rose, and jasmine",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800"
  },
  {
    id: "di-002",
    name: "Miss Dior",
    brand: "DIOR",
    category: "fragrance",
    gender: "women",
    description: "A chypre floral with rose, peony, and patchouli",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800"
  },
  {
    id: "di-003",
    name: "Hypnotic Poison",
    brand: "DIOR",
    category: "fragrance",
    gender: "women",
    description: "A sensual oriental with bitter almond, jasmine, and vanilla",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800"
  },

  // DIOR - Men's Fragrances
  {
    id: "di-101",
    name: "Sauvage Eau de Toilette",
    brand: "DIOR",
    category: "fragrance",
    gender: "men",
    description: "A fresh spicy with bergamot, Sichuan pepper, and ambroxan",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800"
  },
  {
    id: "di-102",
    name: "Dior Homme Intense",
    brand: "DIOR",
    category: "fragrance",
    gender: "men",
    description: "A powdery woody with iris, lavender, and cedar",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800"
  },

  // CHANEL - Women's Fragrances
  {
    id: "ch-001",
    name: "No. 5 Eau de Parfum",
    brand: "CHANEL",
    category: "fragrance",
    gender: "women",
    description: "The legendary floral aldehyde with rose, jasmine, and vanilla",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800"
  },
  {
    id: "ch-002",
    name: "Coco Mademoiselle",
    brand: "CHANEL",
    category: "fragrance",
    gender: "women",
    description: "A fresh oriental with orange, rose, and patchouli",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800"
  },
  {
    id: "ch-003",
    name: "Chance Eau Tendre",
    brand: "CHANEL",
    category: "fragrance",
    gender: "women",
    description: "A delicate floral fruity with grapefruit, quince, and jasmine",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800"
  },

  // CHANEL - Men's Fragrances
  {
    id: "ch-101",
    name: "Bleu de Chanel",
    brand: "CHANEL",
    category: "fragrance",
    gender: "men",
    description: "A woody aromatic with citrus, labdanum, and cedar",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800"
  },
  {
    id: "ch-102",
    name: "Allure Homme Sport",
    brand: "CHANEL",
    category: "fragrance",
    gender: "men",
    description: "A fresh woody with mandarin, tonka bean, and vetiver",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800"
  },

  // CREED - Women's Fragrances
  {
    id: "cr-001",
    name: "Aventus for Her",
    brand: "CREED",
    category: "fragrance",
    gender: "women",
    description: "A chypre fruity with bergamot, rose, and musk",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800"
  },
  {
    id: "cr-002",
    name: "Spring Flower",
    brand: "CREED",
    category: "fragrance",
    gender: "women",
    description: "A fresh floral with peach, melon, and ambergris",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800"
  },

  // CREED - Men's Fragrances
  {
    id: "cr-101",
    name: "Aventus",
    brand: "CREED",
    category: "fragrance",
    gender: "men",
    description: "An iconic fruity chypre with pineapple, birch, and musk",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800"
  },
  {
    id: "cr-102",
    name: "Green Irish Tweed",
    brand: "CREED",
    category: "fragrance",
    gender: "men",
    description: "A fresh woody with lemon, violet leaf, and sandalwood",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800"
  },

  // GIVENCHY - Women's Fragrances
  {
    id: "gv-001",
    name: "L'Interdit",
    brand: "GIVENCHY",
    category: "fragrance",
    gender: "women",
    description: "A white floral with orange blossom, jasmine, and vetiver",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800"
  },
  {
    id: "gv-002",
    name: "Irresistible",
    brand: "GIVENCHY",
    category: "fragrance",
    gender: "women",
    description: "A fruity floral with rose, pear, and ambrette",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800"
  },

  // GIVENCHY - Men's Fragrances
  {
    id: "gv-101",
    name: "Gentleman",
    brand: "GIVENCHY",
    category: "fragrance",
    gender: "men",
    description: "An aromatic woody with pear, lavender, and patchouli",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800"
  },

  // Luxury Cosmetics - Various Brands
  {
    id: "co-001",
    name: "Rouge Dior Lipstick",
    brand: "DIOR",
    category: "cosmetics",
    gender: "women",
    description: "Couture color with long-lasting comfort and iconic formula",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800"
  },
  {
    id: "co-002",
    name: "Le Rouge Crayon de Couleur",
    brand: "CHANEL",
    category: "cosmetics",
    gender: "women",
    description: "Precision lip crayon with intense matte finish",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800"
  },
  {
    id: "co-003",
    name: "5 Couleurs Eyeshadow Palette",
    brand: "DIOR",
    category: "cosmetics",
    gender: "women",
    description: "Professional eyeshadow palette with 5 harmonious shades",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800"
  },
  {
    id: "co-004",
    name: "Shade and Illuminate",
    brand: "TOM FORD",
    category: "cosmetics",
    gender: "women",
    description: "Contouring palette for sculpted luminosity",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800"
  },

  // Luxury Skincare
  {
    id: "sk-001",
    name: "Capture Youth Serum",
    brand: "DIOR",
    category: "skincare",
    gender: "unisex",
    description: "Age-delay advanced serum for youthful skin",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800"
  },
  {
    id: "sk-002",
    name: "Le Lift Crème",
    brand: "CHANEL",
    category: "skincare",
    gender: "unisex",
    description: "Firming anti-wrinkle cream with 3.5-DA",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800"
  },
  {
    id: "sk-003",
    name: "Research Serum",
    brand: "TOM FORD",
    category: "skincare",
    gender: "unisex",
    description: "Infusion complex for radiant skin",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800"
  },
];
