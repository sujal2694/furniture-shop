import hero_img from './hero-img.jpeg'

import cross_icon from './cross_icon.png'
import profile_icon from './profile_icon.png'
import search_icon from './search_icon.png'
import cart_icon from './cart.png'
import add_icon from './plus.png'
import add_cart_icon from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'

import sofa_img_1 from './sofa-img-1.webp'
import sofa_img_2 from './sofa-img-2.webp'
import sofa_img_3 from './sofa-img-3.webp'
import sofa_img_4 from './sofa-img-4.webp'
import sofa_img_5 from './sofa-img-5.webp'
import bed_img_1 from './bed-img-1.webp'
import bed_img_2 from './bed-img-2.webp'
import bed_img_3 from './bed-img-3.webp'
import bed_img_4 from './bed-img-4.webp'
import bed_img_5 from './bed-img-5.webp'
import table_img_1 from './table-img-1.webp'
import table_img_2 from './table-img-2.webp'
import table_img_3 from './table-img-3.webp'
import table_img_4 from './table-img-4.webp'
import table_img_5 from './table-img-5.webp'
import refrigerator_img_1 from './refrigerator-img-1.webp'
import refrigerator_img_2 from './refrigerator-img-2.webp'
import refrigerator_img_3 from './refrigerator-img-3.webp'
import refrigerator_img_4 from './refrigerator-img-4.jpg'
import refrigerator_img_5 from './refrigerator-img-5.webp'
import ac_img_1 from './ac-img-1.webp'
import ac_img_2 from './ac-img-2.webp'
import ac_img_3 from './ac-img-3.webp'
import ac_img_4 from './ac-img-4.webp'
import ac_img_5 from './ac-img-5.webp'
import microwave_img_1 from './microwave_-img-1.webp'
import microwave_img_2 from './microwave-img-2.webp'
import microwave_img_3 from './microwave-img-3.webp'
import microwave_img_4 from './microwave-img-4.webp'
import microwave_img_5 from './microwave-img-5.webp'


export const assets = {
  hero_img,
  search_icon,
  profile_icon,
  cross_icon,
  cart_icon,
  add_icon,
  add_cart_icon,
  add_icon_green,
  remove_icon_red,
}

export const products = {
  sofa: [
    {
      _id:1,
      title: "Home Center Hellos Lewis Anne Brown Wooden Convertible Sofabed",
      image: sofa_img_1,
      price: 10000,
      discount: 50,
      ratings: 3.3,
      category: "sofa",
      description: "A versatile wooden convertible sofabed that effortlessly transitions from a stylish sofa to a comfortable bed, making it perfect for compact homes and guest rooms. The warm brown finish adds a classic charm to any living space, while the sturdy wooden frame ensures long-lasting durability. Ideal for those who want smart, space-saving furniture without compromising on comfort.",
    },
    {
      _id:2,
      title: "3 Seater Modular L Shape Sofa Set with Ottoman | Soft Velvet Suede Fabric | Modern Design",
      image: sofa_img_2,
      price: 12990,
      ratings: 4.7,
      discount: 56,
      category: "sofa",
      description: "This contemporary L-shaped modular sofa set combines luxurious soft velvet suede fabric with a sleek modern design, creating an elegant centerpiece for your living room. The included ottoman adds extra seating or footrest flexibility, making it perfect for relaxed lounging. Its modular build allows easy rearrangement to suit any room layout.",
    },
    {
      _id:3,
      title: "WESTIDO Orlando Leatherette 3 Seater Sofa | 1 year Warranty",
      image: sofa_img_3,
      price: 8990,
      ratings: 3.2,
      category: "sofa",
      discount: 53,
      description: "The WESTIDO Orlando offers premium leatherette upholstery that is easy to clean and maintain, making it an excellent choice for families and pet owners. Designed to seat three comfortably, it features a sturdy frame and high-density foam cushions for lasting support. Backed by a 1-year warranty, this sofa blends style and reliability at an attractive price point.",
    },
    {
      _id:4,
      title: "3 Seater Modular L Shape Sofa | Soft Velvet Suede Fabric",
      image: sofa_img_4,
      price: 11999,
      discount: 60,
      ratings: 5,
      category: "sofa",
      description:"Crafted with indulgently soft velvet suede fabric, this 3-seater L-shape modular sofa delivers both comfort and a refined aesthetic for modern homes. The generous seating space makes it perfect for families or entertaining guests, while the high-density cushions retain their shape over time. Its modular design provides the flexibility to reconfigure and adapt to changing room needs.",
    },
    {
      _id:5,
      title: "Duroflex Ease Plus - 2 Seater Sofa Set for living room | 3 year warranty",
      image: sofa_img_5,
      price: 9490,
      discount: 33,
      ratings: 3.9,
      category: "sofa",
      description: "The Duroflex Ease Plus is engineered for everyday comfort, featuring ergonomically designed cushions and a durable frame that supports years of use. Its compact 2-seater form is ideal for smaller living rooms without sacrificing comfort or style. With an impressive 3-year warranty, this sofa set is a smart, worry-free investment for your home.",
    }
  ],

  ac: [
    {
      _id:6,
      title: "Whirlpool 1.5 Ton 5 Star, Magicool Inverter Split AC",
      image: ac_img_1,
      price: 21990,
      discount: 52,
      ratings: 3.5,
      category: "ac",
      description: "The Whirlpool Magicool Inverter Split AC delivers powerful 1.5-ton cooling with a 5-star energy rating, helping you save significantly on electricity bills. Its advanced inverter technology adjusts compressor speed for consistent temperature maintenance and quieter operation. Built for Indian summers, it features robust cooling performance even at high ambient temperatures."
    },
    {
      _id:7,
      title: "Godrej 1 Ton 5 Star, 5 Years Comprehensive Warranty, AI Powered, 5-in-1 Convertible Cooling, Self Clean, Inverter Split AC",
      image: ac_img_2,
      price: 16999,
      discount: 40,
      ratings: 3.9,
      category: "ac",
      description: "Powered by AI technology, this Godrej inverter AC intelligently adapts cooling based on room occupancy and usage patterns for maximum energy efficiency. The 5-in-1 convertible mode lets you adjust the cooling capacity to match your needs, while the self-cleaning function keeps the coils fresh without any manual effort. A 5-year comprehensive warranty makes it one of the most reliable options in its class.",
    },
    {
      _id:8,
      title: "Samsung 1.5 Ton 3 Star WiFi Enabled Bespoke AI WindFree Air Conditioner",
      image: ac_img_3,
      price: 23999,
      discount: 33,
      ratings: 4,
      category: "ac",
      description: "Samsung's Bespoke AI WindFree AC uses thousands of micro air holes to disperse cool air gently without direct cold wind, ensuring a comfortable, draught-free environment. Wi-Fi connectivity allows you to control settings from anywhere via the SmartThings app, adding modern convenience to your home. Its AI Auto Cooling mode learns your preferences over time to optimize comfort and energy use automatically.",
    },
    {
      _id:9,
      title: "Cruise 1.5 Ton 3 Star Inverter Split AC with 7-Stage Air Filtration",
      image: ac_img_4,
      price: 18990,
      discount: 38,
      ratings: 4,
      category: "ac",
      description: "The Cruise Inverter Split AC stands out with its advanced 7-stage air filtration system that removes dust, allergens, and bacteria, making it ideal for households with children or allergy sufferers. The 3-star inverter compressor ensures efficient cooling with reduced power consumption throughout the day. A solid choice for clean, cool, and healthy indoor air during hot Indian summers."
    },
    {
      _id:10,
      title: "Voltas 1.5 Ton 3 Star Inverter Split AC (Copper, 4-in-1 Adjustable Mode)",
      image: ac_img_5,
      price: 19999    ,
      discount: 42,
      ratings: 4,
      category: "ac",
      description: "Voltas' trusted inverter split AC features a copper condenser coil for superior heat exchange, better durability, and easier maintenance compared to aluminium alternatives. The 4-in-1 adjustable mode lets you switch between different cooling capacities to suit varying occupancy levels and save energy. A dependable brand known for performance in extreme Indian summer conditions.",
    }
  ],

  refrigerator: [
    {
      _id:11,
      title: "Haier 185L 2 Star Direct Cool Single Door Refrigerator",
      image: refrigerator_img_1,
      price: 25000,
      discount: 36,
      ratings: 4.2,
      category: "refrigerator",
      description: "The Haier 185L single door refrigerator is a compact and energy-efficient choice perfect for small families, bachelors, or studio apartments. Its direct cool technology ensures uniform cooling while the large vegetable tray keeps produce fresh for longer. The anti-bacterial gasket and easy-clean interiors make daily maintenance a breeze.",
    },
    {
      _id:12,
      title: "LG Smart Choice, 446 L, 1 Star, Convertible",
      image: refrigerator_img_2,
      price: 21999,
      discount: 27,
      ratings: 4.3,
      category: "refrigerator",
      description:"The LG Smart Choice 446L convertible refrigerator offers generous storage space with the flexibility to convert the freezer into a fresh food section as needed. Smart Diagnosis technology helps troubleshoot issues instantly via the LG ThinQ app, saving time and service costs. Ideal for larger families who need versatile storage with smart connectivity features.",
    },
    {
      _id:13,
      title: "Samsung 236 L, 3 Star, Convertible",
      image: refrigerator_img_3,
      price: 8990,
      discount: 20,
      ratings: 4.1,
      category: "refrigerator",
      description: "Samsung's 236L 3-star convertible refrigerator offers five convertible modes to adapt storage between fridge and freezer as per your requirements. The Tropical Inverter compressor is optimized for Indian voltage fluctuations and delivers consistent cooling performance. Its compact yet spacious design makes it a smart pick for medium-sized families.",
    },
    {
      _id:14,
      title: "Haier 240L 2 Star Frost Free Top Mount Double Door",
      image: refrigerator_img_4,
      price: 10499,
      discount: 35,
      ratings: 4.1,
      category: "refrigerator",
      description: "This Haier 240L frost-free double door refrigerator eliminates the hassle of manual defrosting while maintaining optimal temperature in both compartments. The top-mount freezer design provides easy access to frequently used items in the fresh food section. With a turbo icing feature and deep freezing capability, it's built for practical everyday use.",
    },
    {
      _id:15,
      title: "Samsung 350 L, 3 Star, Convertible 5-in-1",
      image: refrigerator_img_5,
      price: 11990,
      discount: 34,
      ratings: 4,
      category: "refrigerator",
      description: "The Samsung 350L 5-in-1 convertible refrigerator adapts to your lifestyle with five flexible modes, including an All-Freezer option for bulk freezing during festive seasons. Digital Inverter technology ensures energy efficiency, less noise, and a longer compressor lifespan. A versatile and future-ready choice for growing families with diverse storage needs.",
    }
  ],

  bed: [
    {
      _id:16,
      title: "RATANDHARA FURNITURE Single Size Leopard Sheesham Wood Platform Bed Without Storage",
      image: bed_img_1,
      price: 7490,
      discount: 58,
      ratings: 4,
      category: "bed",
      description: "Handcrafted from premium Sheesham wood, this single-size platform bed brings natural warmth and rustic elegance to any bedroom. The solid wood construction ensures exceptional strength and longevity, making it a one-time investment that lasts decades. Its clean platform design pairs beautifully with both traditional and contemporary bedroom décor.",
    },
    {
      _id:17,
      title: "Acacia Solid Sheesham Wood Queen Size Bed",
      image: bed_img_2,
      price: 11999,
      discount: 43,
      ratings: 4,
      category: "bed",
      description: "Made from sustainably sourced solid Sheesham (Acacia) wood, this queen-size bed showcases rich natural grain patterns and robust craftsmanship. The sturdy frame supports heavy-duty use while the classic design blends seamlessly with a variety of interior styles. A timeless piece that adds earthy character and long-term value to your bedroom.",
    },
    {
      _id:18,
      title: "s k modern art Wrought Iron Storage Bed",
      image: bed_img_3,
      price: 10999,
      discount: 17,
      ratings: 4.0,
      category: "bed",
      description: "This stylish wrought iron storage bed combines durable metalwork with functional under-bed storage, making the most of every inch in your bedroom. The elegant iron frame adds an artistic, boutique-hotel feel to the space while the built-in drawers keep bedding and essentials neatly organized. Perfect for urban homes where style and storage go hand in hand.",
    },
    {
      _id:19,
      title: "Klenta Home Decor Modern Queen Size Upholstered Bed",
      image: bed_img_4,
      price: 9999,
      discount: 40,
      ratings: 4,
      category: "bed",
      description: "The Klenta upholstered queen-size bed features a plush fabric headboard and a sleek modern silhouette that instantly elevates bedroom aesthetics. Thick cushioned panels provide comfortable back support for reading or relaxing in bed. Its premium fabric upholstery and solid base make it a luxurious yet practical centerpiece for the modern bedroom.",
    },
    {
      _id:20,
      title: "BedCult Furniture Solid Sheesham Wood Wooden Single Size Bed",
      image: bed_img_5,
      price: 10999,
      discount: 40,
      ratings: 4,
      category: "bed",
      description: "BedCult's single-size Sheesham wood bed is built to withstand daily use with its solid wood joints and sturdy frame construction. The natural teak-toned finish highlights the wood's beautiful grain, adding organic warmth to any room. Compact and robust, it's an ideal choice for children's rooms, guest rooms, or compact living spaces.",
    }
  ],

  microwave: [
    {
      _id:21,
      title: "Panasonic 20L Solo Microwave Oven",
      image: microwave_img_1,
      price: 4499,
      discount: 14,
      ratings: 4.3,
      category: "microwave",
      description: "The Panasonic 20L solo microwave is a reliable and easy-to-use kitchen appliance for reheating, defrosting, and basic cooking tasks. Its compact footprint makes it ideal for small kitchens and single-person households, while the intuitive controls ensure a hassle-free experience. Built with Panasonic's trusted quality, it delivers consistent heating performance every day.",
    },
    {
      _id:22,
      title: "Panasonic 27L Convection Microwave Oven",
      image: microwave_img_2,
      price: 6490,
      discount: 25,
      ratings: 4.3,
      category: "microwave",
      description: "With 27 litres of capacity and convection cooking capability, this Panasonic microwave handles everything from baking and grilling to reheating and defrosting with ease. The inverter technology ensures even and precise cooking, preventing hot or cold spots in your food. A versatile kitchen partner for families who love to cook a variety of dishes at home.",
    },
    {
      _id:23,
      title: "LG 28 L Convection Microwave Oven",
      image: microwave_img_3,
      price: 5999,
      discount: 30,
      ratings: 4.3,
      category: "microwave",
      description: "LG's 28L convection microwave combines smart inverter technology with a wide range of auto-cook menus tailored to Indian cooking preferences. The charcoal lighting cavity and even heat distribution ensure your food is cooked to perfection from all sides. Its elegant design and child lock feature make it a safe and stylish addition to any modern kitchen.",
    },
    {
      _id:24,
      title: "Samsung 28 L Convection Microwave Oven",
      image: microwave_img_4,
      price: 6999,
      discount: 25,
      ratings: 4.2,
      category: "microwave",
      description: "Samsung's 28L convection microwave features a slim fry technology and ceramic enamel cavity that is scratch-resistant, antibacterial, and easy to clean. The wide range of pre-set cooking modes makes it simple to prepare grills, bakes, and Indian recipes with minimal effort. A feature-packed microwave that brings restaurant-quality results to your home kitchen.",
    },
    {
      _id:25,
      title: "IFB 30L Convection Microwave Oven",
      image: microwave_img_5,
      price: 7299,
      discount: 30,
      ratings: 4.3,
      category: "microwave",
      description: "The IFB 30L convection microwave is designed for the serious home cook, offering a large capacity, steam clean function, and multi-stage cooking for complex recipes. Its advanced sensor and motorised rotisserie ensure thorough and even cooking across all food types. IFB's reputation for quality and an extensive service network make this a dependable long-term kitchen investment.",
    }
  ],

  center_table: [
    {
      _id:26,
      title: "CREATIVE SKILLS Coffee Table 2 Tier",
      image: table_img_1,
      price: 2999,
      discount: 50,
      ratings: 4,
      category: "center_table",
      description: "This 2-tier coffee table offers smart dual-level storage, keeping your living room tidy with space for books, remotes, and décor on the lower shelf. The contemporary design and neutral finish complement a wide range of sofas and living room styles. Lightweight yet sturdy, it's easy to move and rearrange as your space evolves.",
    },
    {
      _id:27,
      title: "Lukzer Engineered Wood Center Table with Wheels",
      image: table_img_2,
      price: 2499,
      discount: 50,
      ratings: 3.5,
      category: "center_table",
      description: "Crafted from durable engineered wood and fitted with smooth-rolling wheels, this center table offers effortless mobility for flexible living arrangements. The clean, minimalist design suits modern and Scandinavian-inspired interiors perfectly. Its practical design with ample tabletop space makes it equally suitable for casual dining, working from home, or displaying décor.",
    },
    {
      _id:28,
      title: "THE KASHTH Retro Shape Brown Coffee Table",
      image: table_img_3,
      price: 3490,
      discount: 50,
      ratings: 4,
      category: "center_table",
      description: "The KASHTH retro-shaped coffee table brings a distinctive mid-century modern character to your living space with its unique organic silhouette. The warm brown finish pairs beautifully with earthy-toned sofas and wooden furniture for a cohesive, curated look. Sturdy construction ensures it stands up to everyday use while remaining a stylish conversation starter.",
    },
    {
      _id:29,
      title: "Home Centre Clary Coffee Table – White",
      image: table_img_4,
      price: 2790,
      discount: 50,
      ratings: 4,
      category: "center_table",
      description: "The Home Centre Clary coffee table in crisp white adds a fresh, airy feel to any living room and pairs effortlessly with both neutral and bold décor palettes. Its clean lines and smooth surface are easy to wipe down, making it a practical choice for families with young children. A timeless, versatile piece that brightens up living spaces of all sizes."
    },
    {
      _id:30,
      title: "ARTILUXE Orchid Marble Round Nesting Center Table",
      image: table_img_5,
      price: 5989,
      discount: 20,
      ratings: 4,
      category: "center_table",
      description: "The ARTILUXE Orchid features a stunning marble-finish top on a round nesting design, bringing a touch of luxury and sophistication to your living room. The nesting structure provides flexible use — spread them out for entertaining or stack them together to save space. Premium materials and elegant aesthetics make this table a statement piece in any contemporary home.",
    }
  ],
}
