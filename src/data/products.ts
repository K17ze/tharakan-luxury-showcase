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
    description: "Luxurious dark accord with black truffle, ylang-ylang, black currant, and patchouli",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
  },
  {
    id: "tf-002",
    name: "Lost Cherry Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "women",
    description: "Intoxicating blend of black cherry, bitter almond, Turkish rose, and tonka bean",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&q=80"
  },
  {
    id: "tf-003",
    name: "Velvet Orchid Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "women",
    description: "Sensual floral oriental with rum extract, honey, orchid accord, and suede",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
  },
  {
    id: "tf-004",
    name: "Rose Prick Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "women",
    description: "Bold and unexpected rose with Sichuan pepper, Turkish rose absolute, and patchouli",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
  },
  {
    id: "tf-005",
    name: "Bitter Peach Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "women",
    description: "Opulent fruity warmth with peach, blood orange, rum, and sandalwood",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80"
  },

  // TOM FORD - Men's Fragrances
  {
    id: "tf-101",
    name: "Oud Wood Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "men",
    description: "Rare oud wood with exotic spices, sensual amber, and Brazilian rosewood",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
  },
  {
    id: "tf-102",
    name: "Tobacco Vanille Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "men",
    description: "Opulent oriental with tobacco leaf, vanilla, cocoa, and tonka bean",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
  },
  {
    id: "tf-103",
    name: "Noir Extreme Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "men",
    description: "Amber drenched, woody oriental with mandarin, kulfi accord, and sandalwood",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
  },
  {
    id: "tf-104",
    name: "Grey Vetiver Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "men",
    description: "Elegant vetiver with citrus, nutmeg, oakmoss, and amber woods",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
  },
  {
    id: "tf-105",
    name: "Ombré Leather Eau de Parfum",
    brand: "TOM FORD",
    category: "fragrance",
    gender: "men",
    description: "Raw sensual leather with cardamom, jasmine sambac, and patchouli",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800&q=80"
  },

  // AMOUAGE - Women's Fragrances
  {
    id: "am-001",
    name: "Interlude Woman Eau de Parfum",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "women",
    description: "Intense amber floral with bergamot, violet leaf, frankincense, and myrrh",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80"
  },
  {
    id: "am-002",
    name: "Gold Woman Eau de Parfum",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "women",
    description: "Luxurious floral bouquet with lily, jasmine, frankincense, and orris root",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
  },
  {
    id: "am-003",
    name: "Jubilation XXV Woman",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "women",
    description: "Rich fruity floral with rose, ylang-ylang, patchouli, and myrrh",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
  },
  {
    id: "am-004",
    name: "Beloved Woman",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "women",
    description: "Romantic floral gourmand with rose, cinnamon, vanilla, and guaiac wood",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&q=80"
  },
  {
    id: "am-005",
    name: "Honour Woman",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "women",
    description: "Luminous floral with tuberose, gardenia, jasmine, and vetiver",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
  },

  // AMOUAGE - Men's Fragrances
  {
    id: "am-101",
    name: "Interlude Man Eau de Parfum",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "men",
    description: "Powerful amber woody with oregano, frankincense, myrrh, and leather",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
  },
  {
    id: "am-102",
    name: "Reflection Man Eau de Parfum",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "men",
    description: "Elegant floral woody with rosemary, neroli, jasmine, and vetiver",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800&q=80"
  },
  {
    id: "am-103",
    name: "Jubilation XXV Man",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "men",
    description: "Rich oriental spicy with frankincense, coriander, patchouli, and oud",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
  },
  {
    id: "am-104",
    name: "Epic Man",
    brand: "AMOUAGE",
    category: "fragrance",
    gender: "men",
    description: "Spicy oriental with pink pepper, saffron, geranium, and oud wood",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
  },

  // LOUIS VUITTON - Women's Fragrances
  {
    id: "lv-001",
    name: "Attrape-Rêves Eau de Parfum",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "women",
    description: "Luminous floral with Turkish rose, lychee, pear, and Indonesian patchouli",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80"
  },
  {
    id: "lv-002",
    name: "Rose des Vents Eau de Parfum",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "women",
    description: "Fresh floral with Grasse rose, blackcurrant, saffron, and white musk",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80"
  },
  {
    id: "lv-003",
    name: "Coeur Battant Eau de Parfum",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "women",
    description: "Radiant floral with jasmine, pear, iris, and white musk",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
  },
  {
    id: "lv-004",
    name: "Mille Feux Eau de Parfum",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "women",
    description: "Spicy floral with raspberry, saffron, iris, and tonka bean",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&q=80"
  },

  // LOUIS VUITTON - Men's Fragrances
  {
    id: "lv-101",
    name: "L'Immensité Eau de Parfum",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "men",
    description: "Intense woody with grapefruit, ginger, sage, and labdanum amber",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
  },
  {
    id: "lv-102",
    name: "Orage Eau de Parfum",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "men",
    description: "Powerful woody with iris absolute, vetiver, and Indonesian patchouli",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
  },
  {
    id: "lv-103",
    name: "Nouveau Monde Eau de Parfum",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "men",
    description: "Spicy woody with oud wood, cocoa, saffron, and leather",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
  },
  {
    id: "lv-104",
    name: "Imagination Eau de Parfum",
    brand: "LOUIS VUITTON",
    category: "fragrance",
    gender: "men",
    description: "Oriental woody with citrus, tea, ambroxan, and black musk",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
  },

  // PRADA - Women's Fragrances
  {
    id: "pr-001",
    name: "La Femme Prada Eau de Parfum",
    brand: "PRADA",
    category: "fragrance",
    gender: "women",
    description: "Sophisticated oriental with frangipani, tuberose, beeswax, and vetiver",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
  },
  {
    id: "pr-002",
    name: "Candy Eau de Parfum",
    brand: "PRADA",
    category: "fragrance",
    gender: "women",
    description: "Sweet oriental with caramel, white musk, benzoin, and vanilla",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
  },
  {
    id: "pr-003",
    name: "Paradoxe Eau de Parfum",
    brand: "PRADA",
    category: "fragrance",
    gender: "women",
    description: "Floral ambery with neroli, amber, and white musk accord",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80"
  },
  {
    id: "pr-004",
    name: "Infusion d'Iris Eau de Parfum",
    brand: "PRADA",
    category: "fragrance",
    gender: "women",
    description: "Fresh floral with iris pallida, mandarin, orange blossom, and vetiver",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80"
  },

  // PRADA - Men's Fragrances
  {
    id: "pr-101",
    name: "L'Homme Prada Eau de Toilette",
    brand: "PRADA",
    category: "fragrance",
    gender: "men",
    description: "Fresh amber with neroli, violet, iris, patchouli, and amber",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800&q=80"
  },
  {
    id: "pr-102",
    name: "Luna Rossa Black Eau de Parfum",
    brand: "PRADA",
    category: "fragrance",
    gender: "men",
    description: "Intense woody with bergamot, angelica, patchouli, and amber",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
  },
  {
    id: "pr-103",
    name: "Luna Rossa Ocean Eau de Toilette",
    brand: "PRADA",
    category: "fragrance",
    gender: "men",
    description: "Aromatic fougère with bergamot, sage, lavender, and suede accord",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
  },

  // DIOR - Women's Fragrances
  {
    id: "di-001",
    name: "J'adore Eau de Parfum",
    brand: "DIOR",
    category: "fragrance",
    gender: "women",
    description: "Iconic floral bouquet with ylang-ylang, Damascus rose, and jasmine sambac",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
  },
  {
    id: "di-002",
    name: "Miss Dior Eau de Parfum",
    brand: "DIOR",
    category: "fragrance",
    gender: "women",
    description: "Chypre floral with Grasse rose, peony, iris, and white musk",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&q=80"
  },
  {
    id: "di-003",
    name: "Hypnotic Poison Eau de Toilette",
    brand: "DIOR",
    category: "fragrance",
    gender: "women",
    description: "Sensual oriental with bitter almond, carvi, jasmine, and vanilla",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
  },
  {
    id: "di-004",
    name: "Joy Eau de Parfum",
    brand: "DIOR",
    category: "fragrance",
    gender: "women",
    description: "Radiant floral with bergamot, Grasse rose, jasmine, and sandalwood",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80"
  },
  {
    id: "di-005",
    name: "Dior Addict Eau de Parfum",
    brand: "DIOR",
    category: "fragrance",
    gender: "women",
    description: "Oriental floral with mandarin leaf, Tunisian orange blossom, and vanilla",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
  },

  // DIOR - Men's Fragrances
  {
    id: "di-101",
    name: "Sauvage Eau de Toilette",
    brand: "DIOR",
    category: "fragrance",
    gender: "men",
    description: "Fresh spicy with bergamot, Sichuan pepper, lavender, and ambroxan",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
  },
  {
    id: "di-102",
    name: "Dior Homme Intense Eau de Parfum",
    brand: "DIOR",
    category: "fragrance",
    gender: "men",
    description: "Powdery woody with lavender, iris, pear, vetiver, and cedar",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
  },
  {
    id: "di-103",
    name: "Fahrenheit Eau de Toilette",
    brand: "DIOR",
    category: "fragrance",
    gender: "men",
    description: "Woody floral musk with mandarin, honeysuckle, violet, and leather",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
  },
  {
    id: "di-104",
    name: "Sauvage Elixir",
    brand: "DIOR",
    category: "fragrance",
    gender: "men",
    description: "Concentrated spicy aromatic with grapefruit, cinnamon, nutmeg, and sandalwood",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
  },

  // CHANEL - Women's Fragrances
  {
    id: "ch-001",
    name: "No. 5 Eau de Parfum",
    brand: "CHANEL",
    category: "fragrance",
    gender: "women",
    description: "Legendary floral aldehyde with rose, jasmine, sandalwood, and vanilla",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80"
  },
  {
    id: "ch-002",
    name: "Coco Mademoiselle Eau de Parfum",
    brand: "CHANEL",
    category: "fragrance",
    gender: "women",
    description: "Fresh oriental with orange, rose, jasmine, patchouli, and vetiver",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
  },
  {
    id: "ch-003",
    name: "Chance Eau Tendre Eau de Toilette",
    brand: "CHANEL",
    category: "fragrance",
    gender: "women",
    description: "Delicate floral fruity with grapefruit, quince, jasmine, and white musk",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80"
  },
  {
    id: "ch-004",
    name: "Gabrielle Chanel Eau de Parfum",
    brand: "CHANEL",
    category: "fragrance",
    gender: "women",
    description: "Radiant floral with jasmine, ylang-ylang, orange blossom, and tuberose",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&q=80"
  },
  {
    id: "ch-005",
    name: "Coco Noir Eau de Parfum",
    brand: "CHANEL",
    category: "fragrance",
    gender: "women",
    description: "Modern oriental with grapefruit, rose, narcissus, patchouli, and vanilla",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
  },

  // CHANEL - Men's Fragrances
  {
    id: "ch-101",
    name: "Bleu de Chanel Eau de Parfum",
    brand: "CHANEL",
    category: "fragrance",
    gender: "men",
    description: "Woody aromatic with citrus, ginger, incense, sandalwood, and cedar",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800&q=80"
  },
  {
    id: "ch-102",
    name: "Allure Homme Sport Eau Extrême",
    brand: "CHANEL",
    category: "fragrance",
    gender: "men",
    description: "Fresh woody with mandarin, cypress, pepper, tonka bean, and musk",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
  },
  {
    id: "ch-103",
    name: "Platinum Égoïste Eau de Toilette",
    brand: "CHANEL",
    category: "fragrance",
    gender: "men",
    description: "Aromatic fougère with lavender, rosemary, geranium, and oakmoss",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
  },

  // CREED - Women's Fragrances
  {
    id: "cr-001",
    name: "Aventus for Her Eau de Parfum",
    brand: "CREED",
    category: "fragrance",
    gender: "women",
    description: "Chypre fruity with bergamot, lemon, rose, peach, and musk",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
  },
  {
    id: "cr-002",
    name: "Spring Flower Eau de Parfum",
    brand: "CREED",
    category: "fragrance",
    gender: "women",
    description: "Fresh floral with peach, melon, rose, jasmine, and ambergris",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80"
  },
  {
    id: "cr-003",
    name: "Love in White Eau de Parfum",
    brand: "CREED",
    category: "fragrance",
    gender: "women",
    description: "Floral fresh with orange, magnolia, daffodil, iris, and tonka bean",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80"
  },

  // CREED - Men's Fragrances
  {
    id: "cr-101",
    name: "Aventus Eau de Parfum",
    brand: "CREED",
    category: "fragrance",
    gender: "men",
    description: "Iconic fruity chypre with pineapple, blackcurrant, birch smoke, and musk",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
  },
  {
    id: "cr-102",
    name: "Green Irish Tweed Eau de Parfum",
    brand: "CREED",
    category: "fragrance",
    gender: "men",
    description: "Fresh woody with lemon, violet leaf, iris, and sandalwood",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
  },
  {
    id: "cr-103",
    name: "Silver Mountain Water Eau de Parfum",
    brand: "CREED",
    category: "fragrance",
    gender: "men",
    description: "Fresh metallic with bergamot, mandarin, green tea, and sandalwood",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800&q=80"
  },
  {
    id: "cr-104",
    name: "Viking Eau de Parfum",
    brand: "CREED",
    category: "fragrance",
    gender: "men",
    description: "Spicy woody with bergamot, rose, pepper, patchouli, and sandalwood",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
  },

  // GIVENCHY - Women's Fragrances
  {
    id: "gv-001",
    name: "L'Interdit Eau de Parfum",
    brand: "GIVENCHY",
    category: "fragrance",
    gender: "women",
    description: "White floral with orange blossom, jasmine, tuberose, and vetiver",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
  },
  {
    id: "gv-002",
    name: "Irresistible Eau de Parfum",
    brand: "GIVENCHY",
    category: "fragrance",
    gender: "women",
    description: "Fruity floral with rose, pear, ambrette seed, and Virginia cedar",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
  },
  {
    id: "gv-003",
    name: "Ange ou Démon Eau de Parfum",
    brand: "GIVENCHY",
    category: "fragrance",
    gender: "women",
    description: "Oriental floral with saffron, lily, tonka bean, and vanilla",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&q=80"
  },

  // GIVENCHY - Men's Fragrances
  {
    id: "gv-101",
    name: "Gentleman Eau de Parfum",
    brand: "GIVENCHY",
    category: "fragrance",
    gender: "men",
    description: "Aromatic woody with pear, cardamom, lavender, iris, and black vanilla",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
  },
  {
    id: "gv-102",
    name: "Gentleman Reserve Privée",
    brand: "GIVENCHY",
    category: "fragrance",
    gender: "men",
    description: "Spicy woody with whiskey accord, cinnamon, iris, and vanilla",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
  },

  // HERMÈS - Women's Fragrances
  {
    id: "he-001",
    name: "Twilly d'Hermès Eau de Parfum",
    brand: "HERMÈS",
    category: "fragrance",
    gender: "women",
    description: "Spicy floral with ginger, tuberose, sandalwood, and creamy notes",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
  },
  {
    id: "he-002",
    name: "Jour d'Hermès Eau de Parfum",
    brand: "HERMÈS",
    category: "fragrance",
    gender: "women",
    description: "Floral fresh with gardenia, sweet pea, apricot, and musk",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80"
  },
  {
    id: "he-003",
    name: "Kelly Calèche Eau de Parfum",
    brand: "HERMÈS",
    category: "fragrance",
    gender: "women",
    description: "Floral leather with rose, mimosa, iris, and leather accord",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80"
  },

  // HERMÈS - Men's Fragrances
  {
    id: "he-101",
    name: "Terre d'Hermès Eau de Toilette",
    brand: "HERMÈS",
    category: "fragrance",
    gender: "men",
    description: "Woody spicy with orange, pepper, flint, vetiver, and cedar",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800&q=80"
  },
  {
    id: "he-102",
    name: "H24 Eau de Toilette",
    brand: "HERMÈS",
    category: "fragrance",
    gender: "men",
    description: "Aromatic woody with clary sage, rosewood, metallic notes, and sclarene",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
  },
  {
    id: "he-103",
    name: "Equipage Eau de Toilette",
    brand: "HERMÈS",
    category: "fragrance",
    gender: "men",
    description: "Aromatic woody with bergamot, rosewood, clove, and vetiver",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
  },

  // YVES SAINT LAURENT - Women's Fragrances
  {
    id: "ys-001",
    name: "Black Opium Eau de Parfum",
    brand: "YVES SAINT LAURENT",
    category: "fragrance",
    gender: "women",
    description: "Oriental with black coffee, white flowers, vanilla, and cedarwood",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
  },
  {
    id: "ys-002",
    name: "Libre Eau de Parfum",
    brand: "YVES SAINT LAURENT",
    category: "fragrance",
    gender: "women",
    description: "Floral fougère with lavender, orange blossom, musk, and vanilla",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&q=80"
  },
  {
    id: "ys-003",
    name: "Mon Paris Eau de Parfum",
    brand: "YVES SAINT LAURENT",
    category: "fragrance",
    gender: "women",
    description: "Chypre fruity with strawberry, raspberry, pear, patchouli, and white musk",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
  },
  {
    id: "ys-004",
    name: "Opium Eau de Parfum",
    brand: "YVES SAINT LAURENT",
    category: "fragrance",
    gender: "women",
    description: "Spicy oriental with mandarin, myrrh, jasmine, patchouli, and vanilla",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80"
  },

  // YVES SAINT LAURENT - Men's Fragrances
  {
    id: "ys-101",
    name: "Y Eau de Parfum",
    brand: "YVES SAINT LAURENT",
    category: "fragrance",
    gender: "men",
    description: "Aromatic fougère with apple, ginger, sage, geranium, and cedarwood",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
  },
  {
    id: "ys-102",
    name: "La Nuit de L'Homme Eau de Toilette",
    brand: "YVES SAINT LAURENT",
    category: "fragrance",
    gender: "men",
    description: "Oriental woody with cardamom, bergamot, lavender, vetiver, and tonka bean",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
  },
  {
    id: "ys-103",
    name: "L'Homme Eau de Toilette",
    brand: "YVES SAINT LAURENT",
    category: "fragrance",
    gender: "men",
    description: "Woody oriental with ginger, bergamot, violet leaf, tonka bean, and cedar",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
  },

  // VERSACE - Women's Fragrances
  {
    id: "ve-001",
    name: "Bright Crystal Eau de Toilette",
    brand: "VERSACE",
    category: "fragrance",
    gender: "women",
    description: "Floral fruity with pomegranate, peony, magnolia, and amber",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80"
  },
  {
    id: "ve-002",
    name: "Crystal Noir Eau de Parfum",
    brand: "VERSACE",
    category: "fragrance",
    gender: "women",
    description: "Oriental floral with ginger, cardamom, gardenia, coconut, and amber",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80"
  },

  // VERSACE - Men's Fragrances
  {
    id: "ve-101",
    name: "Eros Eau de Toilette",
    brand: "VERSACE",
    category: "fragrance",
    gender: "men",
    description: "Aromatic fougère with mint, lemon, apple, tonka bean, and vanilla",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
  },
  {
    id: "ve-102",
    name: "Dylan Blue Eau de Toilette",
    brand: "VERSACE",
    category: "fragrance",
    gender: "men",
    description: "Aromatic fougère with grapefruit, fig, patchouli, incense, and musk",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800&q=80"
  },

  // BVLGARI - Women's Fragrances
  {
    id: "bv-001",
    name: "Omnia Crystalline Eau de Toilette",
    brand: "BVLGARI",
    category: "fragrance",
    gender: "women",
    description: "Floral aquatic with bamboo, nashi pear, lotus flower, and balsa wood",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800&q=80"
  },
  {
    id: "bv-002",
    name: "Jasmin Noir Eau de Parfum",
    brand: "BVLGARI",
    category: "fragrance",
    gender: "women",
    description: "Woody floral with gardenia, green sap, jasmine sambac, and precious woods",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
  },

  // BVLGARI - Men's Fragrances
  {
    id: "bv-101",
    name: "Aqva Pour Homme Eau de Toilette",
    brand: "BVLGARI",
    category: "fragrance",
    gender: "men",
    description: "Aquatic aromatic with mandarin, neroli, santolina, seaweed, and amber",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80"
  },
  {
    id: "bv-102",
    name: "Man in Black Eau de Parfum",
    brand: "BVLGARI",
    category: "fragrance",
    gender: "men",
    description: "Oriental woody with rum, spices, leather, iris, and tonka bean",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80"
  },

  // BURBERRY - Women's Fragrances
  {
    id: "bu-001",
    name: "Her Eau de Parfum",
    brand: "BURBERRY",
    category: "fragrance",
    gender: "women",
    description: "Fruity gourmand with berries, jasmine, violet, dry amber, and musk",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&q=80"
  },
  {
    id: "bu-002",
    name: "My Burberry Eau de Parfum",
    brand: "BURBERRY",
    category: "fragrance",
    gender: "women",
    description: "Floral with sweet pea, freesia, geranium, patchouli, and damascena rose",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80"
  },

  // BURBERRY - Men's Fragrances
  {
    id: "bu-101",
    name: "Hero Eau de Toilette",
    brand: "BURBERRY",
    category: "fragrance",
    gender: "men",
    description: "Woody fresh with bergamot, juniper, black pepper, cedar, and pine needles",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80"
  },
  {
    id: "bu-102",
    name: "Mr. Burberry Eau de Toilette",
    brand: "BURBERRY",
    category: "fragrance",
    gender: "men",
    description: "Woody aromatic with grapefruit, tarragon, birch leaf, vetiver, and sandalwood",
    image: "https://images.unsplash.com/photo-1592878849436-0a7e1b935d39?w=800&q=80"
  },

  // Luxury Cosmetics - DIOR
  {
    id: "co-001",
    name: "Rouge Dior Lipstick",
    brand: "DIOR",
    category: "cosmetics",
    gender: "women",
    description: "Couture color refillable lipstick with 16-hour wear and floral lip care",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80"
  },
  {
    id: "co-002",
    name: "Dior Addict Lip Glow",
    brand: "DIOR",
    category: "cosmetics",
    gender: "women",
    description: "Color-reviving lip balm with 97% natural-origin ingredients and 24h hydration",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&q=80"
  },
  {
    id: "co-003",
    name: "5 Couleurs Couture Eyeshadow Palette",
    brand: "DIOR",
    category: "cosmetics",
    gender: "women",
    description: "Professional eyeshadow palette with high pigment shades and creamy textures",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80"
  },
  {
    id: "co-004",
    name: "Diorshow Mascara",
    brand: "DIOR",
    category: "cosmetics",
    gender: "women",
    description: "Spectacular volume mascara for lash extension effect with intense black color",
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=800&q=80"
  },

  // Luxury Cosmetics - CHANEL
  {
    id: "co-011",
    name: "Rouge Allure Ink Liquid Lipstick",
    brand: "CHANEL",
    category: "cosmetics",
    gender: "women",
    description: "Matte liquid lip color with intense pigment and 8-hour longwear",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&q=80"
  },
  {
    id: "co-012",
    name: "Les Beiges Healthy Glow Foundation",
    brand: "CHANEL",
    category: "cosmetics",
    gender: "women",
    description: "Radiant foundation with natural coverage and 12-hour wear",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
  },
  {
    id: "co-013",
    name: "Ombre Première Powder Eyeshadow",
    brand: "CHANEL",
    category: "cosmetics",
    gender: "women",
    description: "Long-wear powder eyeshadow with velvet finish and intense color",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80"
  },

  // Luxury Cosmetics - TOM FORD
  {
    id: "co-021",
    name: "Lip Color Luxe Matte",
    brand: "TOM FORD",
    category: "cosmetics",
    gender: "women",
    description: "Ultra-rich lip color with modern matte finish and rare orchid extract",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80"
  },
  {
    id: "co-022",
    name: "Eye Color Quad",
    brand: "TOM FORD",
    category: "cosmetics",
    gender: "women",
    description: "Luxury eyeshadow palette with coordinated shades for multiple looks",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80"
  },
  {
    id: "co-023",
    name: "Shade and Illuminate Contour Duo",
    brand: "TOM FORD",
    category: "cosmetics",
    gender: "women",
    description: "Contour and highlighter duo for sculpted luminosity and definition",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
  },

  // Luxury Cosmetics - YSL
  {
    id: "co-031",
    name: "Rouge Pur Couture Lipstick",
    brand: "YVES SAINT LAURENT",
    category: "cosmetics",
    gender: "women",
    description: "Iconic lipstick with intense color, satin finish, and long-lasting comfort",
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&q=80"
  },
  {
    id: "co-032",
    name: "Touche Éclat Radiant Touch",
    brand: "YVES SAINT LAURENT",
    category: "cosmetics",
    gender: "women",
    description: "Legendary illuminating pen for instant radiance and rested look",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
  },

  // Luxury Skincare - LA MER
  {
    id: "sk-001",
    name: "Crème de la Mer Moisturizing Cream",
    brand: "LA MER",
    category: "skincare",
    gender: "unisex",
    description: "Legendary face cream with Miracle Broth™ for transformation and renewal",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
  },
  {
    id: "sk-002",
    name: "The Concentrate Serum",
    brand: "LA MER",
    category: "skincare",
    gender: "unisex",
    description: "Intensive renewing serum for visible transformation and radiance",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
  },
  {
    id: "sk-003",
    name: "The Eye Concentrate",
    brand: "LA MER",
    category: "skincare",
    gender: "unisex",
    description: "Intensive eye treatment to visibly firm, smooth, and brighten",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&q=80"
  },

  // Luxury Skincare - DIOR
  {
    id: "sk-011",
    name: "Capture Youth Age-Delay Serum",
    brand: "DIOR",
    category: "skincare",
    gender: "unisex",
    description: "Advanced progressive peeling serum for youthful skin texture",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
  },
  {
    id: "sk-012",
    name: "L'Or de Vie La Crème",
    brand: "DIOR",
    category: "skincare",
    gender: "unisex",
    description: "Ultimate luxury anti-aging cream with extraordinary regenerating power",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
  },

  // Luxury Skincare - CHANEL
  {
    id: "sk-021",
    name: "Le Lift Crème Riche",
    brand: "CHANEL",
    category: "skincare",
    gender: "unisex",
    description: "Firming anti-wrinkle rich cream with botanical alfalfa concentrate",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
  },
  {
    id: "sk-022",
    name: "Sublimage La Crème",
    brand: "CHANEL",
    category: "skincare",
    gender: "unisex",
    description: "Ultimate luxury regenerating cream with Vanilla Planifolia extract",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
  },
  {
    id: "sk-023",
    name: "Hydra Beauty Micro Serum",
    brand: "CHANEL",
    category: "skincare",
    gender: "unisex",
    description: "Intense replenishing hydration serum with white camellia micro-droplets",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&q=80"
  },

  // Luxury Skincare - TOM FORD
  {
    id: "sk-031",
    name: "Research Serum Concentrate",
    brand: "TOM FORD",
    category: "skincare",
    gender: "unisex",
    description: "Advanced infusion complex for visible radiance and refined skin texture",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
  },
  {
    id: "sk-032",
    name: "Intensive Infusion Face Oil",
    brand: "TOM FORD",
    category: "skincare",
    gender: "unisex",
    description: "Luxurious facial oil blend for nourishment and luminous complexion",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&q=80"
  },

  // Luxury Skincare - SK-II
  {
    id: "sk-041",
    name: "Facial Treatment Essence",
    brand: "SK-II",
    category: "skincare",
    gender: "unisex",
    description: "Iconic essence with over 90% Pitera™ for crystal clear skin",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
  },
  {
    id: "sk-042",
    name: "R.N.A. Power Cream",
    brand: "SK-II",
    category: "skincare",
    gender: "unisex",
    description: "Radical new age cream for plump, firm, and radiant skin",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
  },
];
