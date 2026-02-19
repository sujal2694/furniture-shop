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
      price: 799,
      discount: 50,
      ratings: 3.3,
      category: "sofa",
      description: {
        brand: "Contemporary",
        Assembly: "NO",
        depth: 137,
        height: 17,
        weight: 50,
        capacity: 3,
        itemWeight: 33,
        type: "sectional",
        color: "Walnut",
      },
    },
    {
      _id:2,
      title: "3 Seater Modular L Shape Sofa Set with Ottoman | Soft Velvet Suede Fabric | Modern Design",
      image: sofa_img_2,
      price: 1299,
      originalPrice: 34403, // ← removed in this version
      ratings: 4.7,
      discount: 56,
      category: "sofa",
      description: {
        brand: "SOCOZI",
        Assembly: "NO",
        depth: 137,
        height: 17,
        weight: 50,
        capacity: 3,
        itemWeight: 33,
        type: "sectional",
        color: "Greenish Teal",
      },
    },
    {
      _id:3,
      title: "WESTIDO Orlando Leatherette 3 Seater Sofa | 1 year Warranty",
      image: sofa_img_3,
      price: 899,
      ratings: 3.2,
      category: "sofa",
      discount: 53,
      description: {
        brand: "WESTIDO",
        Assembly: "NO",
        depth: 53,
        height: 16,
        weight: 350,
        capacity: 3,
        itemWeight: 80,
        type: "Standard",
        color: "Brown",
      },
    },
    {
      _id:4,
      title: "3 Seater Modular L Shape Sofa | Soft Velvet Suede Fabric",
      image: sofa_img_4,
      price: 1199,
      discount: 60,
      ratings: 5,
      category: "sofa",
      description: {
        brand: "SOCOZI",
        Assembly: "NO",
        depth: 137,
        height: 17,
        weight: 50,
        capacity: 3,
        itemWeight: 33,
        type: "sectional",
        color: "Cream",
      },
    },
    {
      _id:5,
      title: "Duroflex Ease Plus - 2 Seater Sofa Set for living room | 3 year warranty",
      image: sofa_img_5,
      price: 949,
      discount: 33,
      ratings: 3.9,
      category: "sofa",
      description: {
        brand: "Duroflex",
        Assembly: "YES",
        depth: 137,
        height: 17,
        weight: 50,
        capacity: 2,
        itemWeight: 27,
        type: "Loveseat",
        color: "Greenish Teal",
      },
    }
  ],

  ac: [
    {
      _id:6,
      title: "Whirlpool 1.5 Ton 5 Star, Magicool Inverter Split AC (MAGICOOL 15T 5S INV CNV S5K2PP0, Copper, Convertible 4-in-1 Cooling Mode, HD Filter White)",
      image: ac_img_1,
      price: 2199,
      discount: 52,
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
      _id:7,
      title: "Godrej 1 Ton 5 Star, 5 Years Comprehensive Warranty, AI Powered, 5-in-1 Convertible Cooling, Self Clean, Inverter Split AC ...",
      image: ac_img_2,
      price: 1699,
      discount: 40,
      ratings: 3.9,
      category: "ac",
      description: { /* unchanged */ },
    },
    {
      _id:8,
      title: "Samsung 1.5 Ton 3 Star WiFi Enabled Bespoke AI WindFree Air Conditioner ...",
      image: ac_img_3,
      price: 2399,
      discount: 33,
      ratings: 4,
      category: "ac",
      description: { /* unchanged */ },
    },
    {
      _id:9,
      title: "Cruise 1.5 Ton 3 Star Inverter Split AC with 7-Stage Air Filtration ...",
      image: ac_img_4,
      price: 1899,
      discount: 38,
      ratings: 4,
      category: "ac",
      description: { /* unchanged */ },
    },
    {
      _id:10,
      title: "Voltas 1.5 Ton 3 Star Inverter Split AC (Copper, 4-in-1 Adjustable Mode ...) ...",
      image: ac_img_5,
      price: 1999,
      discount: 42,
      ratings: 4,
      category: "ac",
      description: { /* unchanged */ },
    }
  ],

  refrigerator: [
    {
      _id:11,
      title: "Haier 185L 2 Star Direct Cool Single Door Refrigerator ...",
      image: refrigerator_img_1,
      price: 649,
      discount: 36,
      ratings: 4.2,
      category: "refrigerator",
      description: { /* unchanged */ },
    },
    {
      _id:12,
      title: "LG Smart Choice, 446 L, 1 Star, Convertible ...",
      image: refrigerator_img_2,
      price: 1299,
      discount: 27,
      ratings: 4.3,
      category: "refrigerator",
      description: { /* unchanged */ },
    },
    {
      _id:13,
      title: "Samsung 236 L, 3 Star, Convertible ...",
      image: refrigerator_img_3,
      price: 899,
      discount: 20,
      ratings: 4.1,
      category: "refrigerator",
      description: { /* unchanged */ },
    },
    {
      _id:14,
      title: "Haier 240L 2 Star Frost Free Top Mount Double Door ...",
      image: refrigerator_img_4,
      price: 949,
      discount: 35,
      ratings: 4.1,
      category: "refrigerator",
      description: { /* unchanged */ },
    },
    {
      _id:15,
      title: "Samsung 350 L, 3 Star, Convertible 5-in-1 ...",
      image: refrigerator_img_5,
      price: 1199,
      discount: 34,
      ratings: 4,
      category: "refrigerator",
      description: { /* unchanged */ },
    }
  ],

  bed: [
    {
      _id:16,
      title: "RATANDHARA FURNITURE Single Size Leopard Sheesham Wood Platform Bed Without Storage ...",
      image: bed_img_1,
      price: 749,
      discount: 58,
      ratings: 4,
      category: "bed",
      description: { /* unchanged */ },
    },
    {
      _id:17,
      title: "Acacia Solid Sheesham Wood Queen Size Bed ...",
      image: bed_img_2,
      price: 1199,
      discount: 43,
      ratings: 4,
      category: "bed",
      description: { /* unchanged */ },
    },
    {
      _id:18,
      title: "s k modern art Wrought Iron Storage Bed ...",
      image: bed_img_3,
      price: 1099,
      discount: 17,
      ratings: 4.0,
      category: "bed",
      description: { /* unchanged */ },
    },
    {
      _id:19,
      title: "Klenta Home Decor Modern Queen Size Upholstered Bed ...",
      image: bed_img_4,
      price: 999,
      discount: 40,
      ratings: 4,
      category: "bed",
      description: { /* unchanged */ },
    },
    {
      _id:20,
      title: "BedCult Furniture Solid Sheesham Wood Wooden Single Size Bed ...",
      image: bed_img_5,
      price: 799,
      discount: 40,
      ratings: 4,
      category: "bed",
      description: { /* unchanged */ },
    }
  ],

  microwave: [
    {
      _id:21,
      title: "Panasonic 20L Solo Microwave Oven ...",
      image: microwave_img_1,
      price: 449,
      discount: 14,
      ratings: 4.3,
      category: "microwave",
      description: { /* unchanged */ },
    },
    {
      _id:22,
      title: "Panasonic 27L Convection Microwave Oven ...",
      image: microwave_img_2,
      price: 649,
      discount: 25,
      ratings: 4.3,
      category: "microwave",
      description: { /* unchanged */ },
    },
    {
      _id:23,
      title: "LG 28 L Convection Microwave Oven ...",
      image: microwave_img_3,
      price: 749,
      discount: 30,
      ratings: 4.3,
      category: "microwave",
      description: { /* unchanged */ },
    },
    {
      _id:24,
      title: "Samsung 28 L Convection Microwave Oven ...",
      image: microwave_img_4,
      price: 699,
      discount: 25,
      ratings: 4.2,
      category: "microwave",
      description: { /* unchanged */ },
    },
    {
      _id:25,
      title: "IFB 30L Convection Microwave Oven ...",
      image: microwave_img_5,
      price: 729,
      discount: 30,
      ratings: 4.3,
      category: "microwave",
      description: { /* unchanged */ },
    }
  ],

  center_table: [
    {
      _id:26,
      title: "CREATIVE SKILLS Coffee Table 2 Tier ...",
      image: table_img_1,
      price: 299,
      discount: 50,
      ratings: 4,
      category: "center_table",
      description: { /* unchanged */ },
    },
    {
      _id:27,
      title: "Lukzer Engineered Wood Center Table with Wheels ...",
      image: table_img_2,
      price: 249,
      discount: 50,
      ratings: 3.5,
      category: "center_table",
      description: { /* unchanged */ },
    },
    {
      _id:28,
      title: "THE KASHTH Retro Shape Brown Coffee Table ...",
      image: table_img_3,
      price: 349,
      discount: 50,
      ratings: 4,
      category: "center_table",
      description: { /* unchanged */ },
    },
    {
      _id:29,
      title: "Home Centre Clary Coffee Table – White ...",
      image: table_img_4,
      price: 279,
      discount: 50,
      ratings: 4,
      category: "center_table",
      description: { /* unchanged */ },
    },
    {
      _id:30,
      title: "ARTILUXE Orchid Marble Round Nesting Center Table ...",
      image: table_img_5,
      price: 599,
      discount: 20,
      ratings: 4,
      category: "center_table",
      description: { /* unchanged */ },
    }
  ],
}
