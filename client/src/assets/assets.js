import hero_img from './hero-img.jpeg'

import cross_icon from './cross_icon.png'
import profile_icon from './profile_icon.png'
import search_icon from './search_icon.png'

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
import refrigerator_img_4 from './refrigerator-img-4.webp'
import refrigerator_img_5 from './refrigerator-img-5.webp'
import ac_img_1 from './ac-img-1.webp'
import ac_img_2 from './ac-img-2.webp'
import ac_img_3 from './ac-img-3.webp'
import ac_img_4 from './ac-img-4.webp'
import ac_img_5 from './ac-img-5.webp'
import microwave_img_1 from './microwave-img-1.webp'
import microwave_img_2 from './microwave-img-2.webp'
import microwave_img_3 from './microwave-img-3.webp'
import microwave_img_4 from './microwave-img-4.webp'
import microwave_img_5 from './microwave-img-5.webp'


export const assets = {
  hero_img,
  search_icon,
  profile_icon,
  cross_icon,
}

export const products = {
  sofa: [
    {
      title:"Home Center Hellos Lewis Anne Brown Wooden Converrtible Sofabed",
      image:sofa_img_1,
      price:37999,
      discount: 50,
      originalPrice: 75998,
      ratings:3.3,
      category: sofa,
      description:{
        brand: "Contemporary",
        Assembly: "NO",
        depth: 137,//centi
        height: 17,//inches
        weight: 50,//kgs
        capacity: 3,//how many people
        itemWeight: 33,//kgs
        type: "sectional",
        color: "Walnut",
      },
    },
    {
      title:"3 Seater Modular L Shape Sofa Set with Ottoman | Soft Velvet Suede Fabric | Modern Design",
      image:sofa_img_2,
      price: 12350,
      originalPrice: 34403,
      ratings:4.7,
      discount: 56,
      category: sofa,
      description:{
        brand: "SOCOZI",
        Assembly: "NO",
        depth: 137,//centi
        height: 17,//inches
        weight: 50,//kgs
        capacity: 3,//how many people
        itemWeight: 33,//kgs
        type: "sectional",
        color: "Greenish Teal",
      },
    },
    {
      title:"WESTIDO Orlando Leatherette 3  Seater Sofa | 1 year Warranty",
      image:sofa_img_3,
      price:7478,
      originalPrice: 15999,
      ratings:3.2,
      category: sofa,
      discount: 53,
      description:{
        brand: "WESTIDO",
        Assembly: "NO",
        depth: 53,//centi
        height: 16,//inches
        weight: 350,//kgs
        capacity: 3,//how many people
        itemWeight: 80,//kgs
        type: "Standard",
        color: "Brown",
      },
    },
    {
      title:"3 Seater Modular L Shape Sofa | Soft Velvet Suede Fabric",
      image:sofa_img_4,
      price:11329,
      discount:60,
      originalPrice:27999,
      ratings:5,
      category: sofa,
      description:{
        brand: "SOCOZI",
        Assembly: "NO",
        depth: 137,//centi
        height: 17,//inches
        weight: 50,//kgs
        capacity: 3,//how many people
        itemWeight: 33,//kgs
        type: "sectional",
        color: "Cream",
      },
    },
    {
      title:"Duroflex Ease Plus - 2 Seater Sofa Set for living room | 3 year warranty",
      image:sofa_img_5,
      price:13499,
      discount: 33,
      originalPrice: 19999,
      ratings:3.9,
      category: sofa,
      description:{
        brand: "Duroflex",
        Assembly: "YES",
        depth: 137,//centi
        height: 17,//inches
        weight: 50,//kgs
        capacity: 2,//how many people
        itemWeight: 27,//kgs
        type: "Loveseat",
        color: "Greenish Teal",
      },
    }
  ],

  ac: [
    {
      title: "Whirlpool 1.5 Ton 5 Star, Magicool Inverter Split AC (MAGICOOL 15T 5S INV CNV S5K2PP0, Copper, Convertible 4-in-1 Cooling Mode, HD Filter White)",
      image: ac_img_1,
      price: 33540,
      discount: 52,
      originalPrice: 70600,
      ratings: 3.5,
      category: "ac",
      description: {
        brand: "Whirlpool",
        Assembly: "NO",
        depth: 23.5,
        height: 31.5,
        weight: 25,
        capacity: 1.5,
        itemWeight: 25,
        type: "Split",
        color: "White",
      },
    },
    {
      title: "Godrej 1 Ton 5 Star, 5 Years Comprehensive Warranty, AI Powered, 5-in-1 Convertible Cooling, Self Clean, Inverter Split AC (Copper, Heavy-Duty Cooling at 52° Celcius, AC 1T EI 12IINV5R32-WWR, White)",
      image: ac_img_2,
      price: 29990,
      discount: 40,
      originalPrice: 49990,
      ratings: 3.9,
      category: "ac",
      description: {
        brand: "Godrej",
        Assembly: "NO",
        depth: 23,
        height: 29.5,
        weight: 9.3,
        capacity: 1,
        itemWeight: 9.3,
        type: "Split",
        color: "White",
      },
    },
    {
      title: "Samsung 1.5 Ton 3 Star WiFi Enabled Bespoke AI WindFree Air Conditioner (2025 Model, Copper, AI, Convertible 5in1,4 Way Swing, Faster & Powerful Cooling, Energy Saving, AR60F19D13WNNA)",
      image: ac_img_3,
      price: 40000,
      discount: 33,
      originalPrice: 60000,
      ratings: 4,
      category: "ac",
      description: {
        brand: "Samsung",
        Assembly: "NO",
        depth: 21.5,
        height: 29.9,
        weight: 30,
        capacity: 1.5,
        itemWeight: 30,
        type: "Split",
        color: "White",
      },
    },
    {
      title: "Cruise 1.5 Ton 3 Star Inverter Split AC with 7-Stage Air Filtration (100% Copper, Convertible 4-in-1, PM 2.5 Filter, CWCVBK-VQ1W173, White)",
      image: ac_img_4,
      price: 28000,
      discount: 38,
      originalPrice: 45000,
      ratings: 4,
      category: "ac",
      description: {
        brand: "Cruise",
        Assembly: "NO",
        depth: 22,
        height: 30,
        weight: 10,
        capacity: 1.5,
        itemWeight: 10,
        type: "Split",
        color: "White",
      },
    },
    {
      title: "Voltas 1.5 Ton 3 Star Inverter Split AC (Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2023 Model, 183V Vectra Prism, White)",
      image: ac_img_5,
      price: 35000,
      discount: 42,
      originalPrice: 60000,
      ratings: 4,
      category: "ac",
      description: {
        brand: "Voltas",
        Assembly: "NO",
        depth: 22,
        height: 30,
        weight: 11,
        capacity: 1.5,
        itemWeight: 11,
        type: "Split",
        color: "White",
      },
    }
  ],
refrigerator: [
    {
      title: "Haier 185L 2 Star Direct Cool Single Door Refrigerator | Toughened Glass Shelves | Large Veg Box | Fast Ice Making | Longer Cooling Retention | Easy Clean Back (HED-19TMS-N, Moon Silver)",
      image: refrigerator_img_1,
      price: 10990,
      discount: 36,
      originalPrice: 17090,
      ratings: 4.2,
      category: "refrigerator",
      description: {
        brand: "Haier",
        Assembly: "NO",
        depth: 57,
        height: 117.3,
        weight: 31,
        capacity: 185,
        itemWeight: 31,
        type: "Single Door",
        color: "Moon Silver",
      },
    },
    {
      title: "LG Smart Choice, 446 L, 1 Star, Convertible, Door Cooling+, Smart Inverter Compressor, Frost Free Double Door Refrigerator (GL-T502CESR, Ebony Sheen, Express Freeze & Multi Air Flow)",
      image: refrigerator_img_2,
      price: 51990,
      discount: 27,
      originalPrice: 71499,
      ratings: 4.3,
      category: "refrigerator",
      description: {
        brand: "LG",
        Assembly: "NO",
        depth: 70,
        height: 178,
        weight: 71,
        capacity: 446,
        itemWeight: 71,
        type: "Double Door",
        color: "Ebony Sheen",
      },
    },
    {
      title: "Samsung 236 L, 3 Star, Convertible, Digital Inverter with Display Frost Free Double Door Refrigerator (RT28C3733S8/HL, Silver, Elegant Inox)",
      image: refrigerator_img_3,
      price: 24000,
      discount: 20,
      originalPrice: 30000,
      ratings: 4.1,
      category: "refrigerator",
      description: {
        brand: "Samsung",
        Assembly: "NO",
        depth: 65,
        height: 155,
        weight: 50,
        capacity: 236,
        itemWeight: 50,
        type: "Double Door",
        color: "Silver",
      },
    },
    {
      title: "Haier 240L 2 Star Frost Free Top Mount Double Door Refrigerator|Cool Pad|200% Faster Ice Making in 49 Minutes (HEF-252EMR-P, Marine Rose)",
      image: refrigerator_img_4,
      price: 22990,
      discount: 35,
      originalPrice: 35290,
      ratings: 4.1,
      category: "refrigerator",
      description: {
        brand: "Haier",
        Assembly: "NO",
        depth: 61.5,
        height: 156,
        weight: 53,
        capacity: 240,
        itemWeight: 53,
        type: "Double Door",
        color: "Marine Rose",
      },
    },
    {
      title: "Samsung 350 L, 3 Star, Convertible 5-in-1, Digital Inverter, Frost Free Double Door, WiFi Enabled Bespoke AI Refrigerator (RT38DG5A4DBXHL, Luxe Black)",
      image: refrigerator_img_5,
      price: 35000,
      discount: 34,
      originalPrice: 53000,
      ratings: 4,
      category: "refrigerator",
      description: {
        brand: "Samsung",
        Assembly: "NO",
        depth: 67,
        height: 171,
        weight: 60,
        capacity: 350,
        itemWeight: 60,
        type: "Double Door",
        color: "Luxe Black",
      },
    }
  ],
bed: [
    {
      title: "RATANDHARA FURNITURE Single Size Leopard Sheesham Wood Platform Bed Without Storage Single Bed (Single Size (6 ft x 4 ft), Teak Finish)",
      image: bed_img_1,
      price: 16499,
      discount: 58,
      originalPrice: 39999,
      ratings: 4,
      category: "bed",
      description: {
        brand: "Ratandhara Furniture",
        Assembly: "YES",
        depth: 122,
        height: 46,
        weight: 50,
        capacity: 1,
        itemWeight: 50,
        type: "Platform",
        color: "Teak",
      },
    },
    {
      title: "Acacia Solid Sheesham Wood Queen Size Bed for Bedroom | Upholstered Bed | Wooden Platform Bed Cot Double Bed for Hotels with Upholstery Premium Fabric | 6.5 x 5 Ft | Rosewood, Browndust",
      image: bed_img_2,
      price: 19998,
      discount: 43,
      originalPrice: 35000,
      ratings: 4,
      category: "bed",
      description: {
        brand: "Acacia",
        Assembly: "YES",
        depth: 198,
        height: 91,
        weight: 80,
        capacity: 2,
        itemWeight: 80,
        type: "Platform",
        color: "Browndust",
      },
    },
    {
      title: "s k modern art Wrought Iron Storage Bed (4 X 6, Black Coated Frame Black Leather headboard | Without Mattress)",
      image: bed_img_3,
      price: 21849,
      discount: 17,
      originalPrice: 26220,
      ratings: 4.0,
      category: "bed",
      description: {
        brand: "s k modern art",
        Assembly: "YES",
        depth: 182.9,
        height: 182.9,
        weight: 60,
        capacity: 2,
        itemWeight: 60,
        type: "Platform with Storage",
        color: "Black",
      },
    },
    {
      title: "Klenta Home Decor Modern Queen Size Upholstered Bed | Wooden Platform Double Cot | Upholstery Premium Fabric Bed (Ash, Queen)",
      image: bed_img_4,
      price: 15000,
      discount: 40,
      originalPrice: 25000,
      ratings: 4,
      category: "bed",
      description: {
        brand: "Klenta Home Decor",
        Assembly: "YES",
        depth: 206,
        height: 107,
        weight: 70,
        capacity: 2,
        itemWeight: 70,
        type: "Upholstered",
        color: "Ash",
      },
    },
    {
      title: "BedCult Furniture Solid Sheesham Wood Wooden Single Size Bed for Bedroom (Single, Design 32)",
      image: bed_img_5,
      price: 15000,
      discount: 40,
      originalPrice: 25000,
      ratings: 4,
      category: "bed",
      description: {
        brand: "BedCult Furniture",
        Assembly: "YES",
        depth: 101.5,
        height: 88.8,
        weight: 100,
        capacity: 1,
        itemWeight: 100,
        type: "Bed",
        color: "Brown",
      },
    }
  ],
microwave: [
    {
      title: "Panasonic 20L Solo Microwave Oven (NN-ST26JMFDG, Silver, 51 Auto Menus)",
      image: microwave_img_1,
      price: 6440,
      discount: 14,
      originalPrice: 7490,
      ratings: 4.3,
      category: "microwave",
      description: {
        brand: "Panasonic",
        Assembly: "NO",
        depth: 44.3, // cm
        height: 25.8, // cm
        weight: 10.5, // kg
        capacity: 20, // liters
        itemWeight: 10.5, // kg
        type: "Solo",
        color: "Silver",
      },
    },
    {
      title: "Panasonic 27L Convection Microwave Oven (NN-CT645BFDG, Black Mirror, 360° Heat Wrap, Magic Grill)",
      image: microwave_img_2,
      price: 12189,
      discount: 25,
      originalPrice: 16190,
      ratings: 4.3,
      category: "microwave",
      description: {
        brand: "Panasonic",
        Assembly: "NO",
        depth: 50, // cm approx
        height: 31, // cm approx
        weight: 18, // kg approx
        capacity: 27, // liters
        itemWeight: 18, // kg
        type: "Convection",
        color: "Black Mirror",
      },
    },
    {
      title: "LG 28 L Convection Microwave Oven (MC2846BV, Black, Health Plus Menu, Indian Cuisine, Tandoor Se, Steam Clean & Stainless Steel Cavity)",
      image: microwave_img_3,
      price: 15990,
      discount: 30,
      originalPrice: 22990,
      ratings: 4.3,
      category: "microwave",
      description: {
        brand: "LG",
        Assembly: "NO",
        depth: 48.3, // cm approx
        height: 30.5, // cm approx
        weight: 19, // kg approx
        capacity: 28, // liters
        itemWeight: 19, // kg
        type: "Convection",
        color: "Black",
      },
    },
    {
      title: "Samsung 28 L Convection Microwave Oven (MC28A5013AK/TL, Black, Curd Making, 10 Yr warranty)",
      image: microwave_img_4,
      price: 14990,
      discount: 25,
      originalPrice: 19990,
      ratings: 4.2,
      category: "microwave",
      description: {
        brand: "Samsung",
        Assembly: "NO",
        depth: 47.4, // cm approx
        height: 31, // cm approx
        weight: 17.5, // kg approx
        capacity: 28, // liters
        itemWeight: 17.5, // kg
        type: "Convection",
        color: "Black",
      },
    },
    {
      title: "IFB 30L Convection Microwave Oven with 101 Standard Cook Menus (30BRC2, Black, 360 Degree Motorized Rotisserie, Weight Defrost, Steam Clean)",
      image: microwave_img_5,
      price: 14990,
      discount: 30,
      originalPrice: 21500,
      ratings: 4.3,
      category: "microwave",
      description: {
        brand: "IFB",
        Assembly: "NO",
        depth: 48, // cm approx
        height: 30, // cm approx
        weight: 20, // kg approx
        capacity: 30, // liters
        itemWeight: 20, // kg
        type: "Convection",
        color: "Black",
      },
    }
  ],
center_table: [
    {
      title: "CREATIVE SKILLS Coffee Table 2 Tier,with Storage Metal Base Engineered Wood Center Table for Living Room, Tea Table, Metal Rectangle Cocktail Table (Black-Golden)",
      image: table_img_1,
      price: 5000,
      discount: 50,
      originalPrice: 10000,
      ratings: 4,
      category: "center_table",
      description: {
        brand: "CREATIVE SKILLS",
        Assembly: "YES",
        depth: 50,
        height: 45,
        weight: 10,
        capacity: 0,
        itemWeight: 10,
        type: "Coffee Table",
        color: "Black-Golden",
      },
    },
    {
      title: "Lukzer Engineered Wood Center Table with Wheels Open Rack Storage Organizing Desk Bed Side Display Stand Fashionable Furniture Rolling Coffee Tea Table (CT-003/White) DIY (80X40X40 Cm)",
      image: table_img_2,
      price: 2486,
      discount: 50,
      originalPrice: 4990,
      ratings: 3.5,
      category: "center_table",
      description: {
        brand: "Lukzer",
        Assembly: "YES",
        depth: 40,
        height: 40,
        weight: 12.1,
        capacity: 0,
        itemWeight: 12.1,
        type: "Center Table",
        color: "White",
      },
    },
    {
      title: "THE KASHTH Retro Shape Brown Coffee Table Made with Mango Wood",
      image: table_img_3,
      price: 6000,
      discount: 50,
      originalPrice: 12000,
      ratings: 4,
      category: "center_table",
      description: {
        brand: "THE KASHTH",
        Assembly: "NO",
        depth: 60,
        height: 45,
        weight: 15,
        capacity: 0,
        itemWeight: 15,
        type: "Coffee Table",
        color: "Brown",
      },
    },
    {
      title: "Home Centre Clary Coffee Table – White | Modern Living Room Center Table with Shelf Storage | Durable E2 Grade Engineered Wood | 1 Year Warranty | 90 x 55 x 45 cm",
      image: table_img_4,
      price: 4000,
      discount: 50,
      originalPrice: 8000,
      ratings: 4,
      category: "center_table",
      description: {
        brand: "Home Centre",
        Assembly: "YES",
        depth: 55,
        height: 45,
        weight: 20,
        capacity: 0,
        itemWeight: 20,
        type: "Coffee Table",
        color: "White",
      },
    },
    {
      title: "ARTILUXE Orchid Marble Round Nesting Center Table,Coffee Table in Stainless Steel PVD Gold Finish",
      image: table_img_5,
      price: 24500,
      discount: 20,
      originalPrice: 30500,
      ratings: 4,
      category: "center_table",
      description: {
        brand: "ARTILUXE",
        Assembly: "YES",
        depth: 76.2,
        height: 45.7,
        weight: 50,
        capacity: 0,
        itemWeight: 50,
        type: "Nesting Center Table",
        color: "Gold",
      },
    }
  ],
}
