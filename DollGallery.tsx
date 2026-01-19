import { DollCard } from "./DollCard";

export interface Doll {
  id: number;
  imageUrls: string[];  // Array of images for different angles
  culture: string;
  region: string;
  description: string;
  detailedInfo: {
    tribe: string;
    location: string;
    overview: string;
    history: string;
    traditionalGarments: string[];
    materials: string[];
    patterns: string;
  };
}

const dolls: Doll[] = [
  {
    id: 1,
    imageUrls: [
      "https://images.unsplash.com/photo-1648372429968-8d649cab1389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiaWUlMjBkb2xsJTIwc3RhbmRpbmd8ZW58MXx8fHwxNzY3NzkyOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1758919005125-363f7be78139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZG9sbCUyMG91dGZpdHxlbnwxfHx8fDE3Njc3OTI5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1612506001235-f0d0892aa11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NzkyOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    culture: "Kalinga Tribe",
    region: "Kalinga Province",
    description: "description ng kalinga",
    detailedInfo: {
      tribe: "Kalinga",
      location: "Kalinga Province, Cordillera Region",
      overview: "the kalinga people r known for their vibrant culture, traditions, and weaving skills. etc etc",
      history: "rich history of headhunting etc etc,otjer info other info",
      traditionalGarments: ["mga traditional fabrics n textiles n clothes nila"],
      materials: ["Cotton", "Natural dyes", "Beads", "Shell accessories", "idk what else"],
      patterns: "desc ng patterns then meaning/sumbolism nila"
    }
  },
  {
    id: 2,
    imageUrls: [
      "https://images.unsplash.com/photo-1613626253486-e2d1d9fd9bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBkb2xsJTIwZHJlc3N8ZW58MXx8fHwxNzY3NzkyOTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1648372429968-8d649cab1389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiaWUlMjBkb2xsJTIwc3RhbmRpbmd8ZW58MXx8fHwxNzY3NzkyOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1758919005125-363f7be78139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZG9sbCUyMG91dGZpdHxlbnwxfHx8fDE3Njc3OTI5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    culture: "Ivatan Tribe",
    region: "Batanes",
    description: "description ng ivatan",
    detailedInfo: {
      tribe: "Ivatan",
      location: "Batanes Islands, Northern Philippines",
      overview: "The Ivatan people have adapted to their harsh island environment with unique architectural and clothing traditions. They're famous for the vakul (rain gear made from palm fiber) and their colorful traditional attire.",
      history: "Living in the northernmost province of the Philippines, the Ivatan have developed a distinct culture shaped by their isolation and frequent typhoons. Their stone houses (ijang) and traditional garments reflect centuries of adaptation to extreme weather conditions.",
      traditionalGarments: ["Vakul (headpiece)", "Kanayi (vest)", "Arkufi (traditional dress)"],
      materials: ["Vuyavuy palm fiber", "Cotton", "Natural plant fibers"],
      patterns: "Striped patterns and simple geometric designs suited for practical island life"
    }
  },
  {
    id: 3,
    imageUrls: [
      "https://images.unsplash.com/photo-1612506001235-f0d0892aa11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NzkyOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1613626253486-e2d1d9fd9bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBkb2xsJTIwZHJlc3N8ZW58MXx8fHwxNzY3NzkyOTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1648372429968-8d649cab1389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiaWUlMjBkb2xsJTIwc3RhbmRpbmd8ZW58MXx8fHwxNzY3NzkyOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    culture: "Tagalog Tribe",
    region: "Central Luzon and Southern Luzon",
    description: "The largest ethnic group known for their barong tagalog and terno",
    detailedInfo: {
      tribe: "Tagalog",
      location: "Central and Southern Luzon, Manila",
      overview: "The Tagalog people represent the largest cultural-linguistic group in the Philippines. Their traditional clothing, especially the elegant barong tagalog and terno, showcase sophisticated embroidery and design.",
      history: "The Tagalog civilization flourished long before Spanish colonization, with evidence of advanced trade networks and political systems. Their traditional clothing evolved through centuries, blending indigenous weaving techniques with Spanish colonial influences to create iconic garments like the barong tagalog.",
      traditionalGarments: ["Barong Tagalog (embroidered shirt)", "Terno (butterfly-sleeved dress)", "Baro't Saya (blouse and skirt)"],
      materials: ["Piña (pineapple fiber)", "Jusi (silk-organza blend)", "Cotton", "Mother-of-pearl buttons"],
      patterns: "Intricate floral embroidery, delicate callado and calado work"
    }
  },
  {
    id: 4,
    imageUrls: [
      "https://images.unsplash.com/photo-1758919005125-363f7be78139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZG9sbCUyMG91dGZpdHxlbnwxfHx8fDE3Njc3OTI5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1612506001235-f0d0892aa11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NzkyOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1613626253486-e2d1d9fd9bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBkb2xsJTIwZHJlc3N8ZW58MXx8fHwxNzY3NzkyOTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    culture: "Bontoc Tribe",
    region: "Mountain Province",
    description: "Mountain warriors known for their colorful woven fabrics and feathered headdresses",
    detailedInfo: {
      tribe: "Bontoc",
      location: "Mountain Province, Cordillera Region",
      overview: "The Bontoc people are known for their elaborate weaving traditions and distinctive warrior culture. Their traditional clothing features bold stripes and is often complemented by striking feathered headdresses and accessories.",
      history: "The Bontoc were fierce warriors who protected their mountain territories and rice terraces for centuries. Their warrior traditions are reflected in their clothing, particularly the feathered headdresses worn by successful warriors. They practiced headhunting until the early 20th century, and tattoos served as records of their achievements.",
      traditionalGarments: ["Gateng (wraparound skirt)", "Siniwsiwan (headdress)", "Chuno (loincloth)"],
      materials: ["Hand-woven cotton", "Natural dyes", "Feathers", "Beads", "Shells"],
      patterns: "Bold horizontal stripes in red, black, and white with geometric accents"
    }
  }
];

export function DollGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {dolls.map((doll) => (
        <DollCard key={doll.id} doll={doll} />
      ))}
    </div>
  );
}