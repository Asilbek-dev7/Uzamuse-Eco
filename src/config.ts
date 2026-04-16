
// ==========================================
// CONFIGURATION: IMAGES & LINKS
// ==========================================

const ASSETS_BASE = "/assets/images";

export const SITE_CONFIG = {
  // ASSETS
  assetsBase: ASSETS_BASE,

  // LOGO
  logo: `https://lh3.googleusercontent.com/d/1515Qv-gaIV8N1nTSiecBWPfIMVyIG4iU`, 
  
  // HERO SECTION
  hero: {
    background: `https://lh3.googleusercontent.com/d/12omOd627nrEeO_SQwP7PoQRS-2IZ5mI3`,
    centerImage: `https://lh3.googleusercontent.com/d/1sLVFGpWLOsUQd7NxLMPhXUUJaJ4Z7k_k`
  },
  // ABOUT SECTION (WHY CHOOSE US)
  about: {
    main: `https://lh3.googleusercontent.com/d/1lN-eeyjzx1m2GJqQeb3JqgMY7Mp4HLdL`,
    img1: `https://lh3.googleusercontent.com/d/1Z6YuD7jvI-KTcSIxi1mz1-jtTYg-A01b`,
    img2: `https://lh3.googleusercontent.com/d/14Z9b3X8Wb8ExRLd-Aq8GVXLRv4pnZudR`,
    img3: `https://lh3.googleusercontent.com/d/1nILprq0nErIS2xnLSKqRsb0VrVI5HcOz`,
    img4: `https://lh3.googleusercontent.com/d/1sLVFGpWLOsUQd7NxLMPhXUUJaJ4Z7k_k`
  },

  // SOCIAL LINKS
  social: {
    telegram: "https://t.me/ExtremeConstruction",
    instagram: "https://www.instagram.com/uzamuse_market/"
  },

  // MARKET PRODUCTS
  products: [
    // ASCENDER / ЗАЖИМЫ
    { id: 1, name: "Hand Ascender (HSS02ROJ)", price: "510.000 UZS", image: `${ASSETS_BASE}/products/ascender-1.jpg`, category: "Ascender" },
    { id: 2, name: "Right Hand Ascender (HHSS01GL)", price: "852.000 UZS", image: `${ASSETS_BASE}/products/ascender-2.jpg`, category: "Ascender" },
    { id: 3, name: "Electric Ascender (XDT8653)", price: "14.400.000 UZS", image: `${ASSETS_BASE}/products/ascender-3.jpg`, category: "Ascender" },
    { id: 4, name: "H5-Descender (HH8636FHQH)", price: "3.810.000 UZS", image: `${ASSETS_BASE}/products/ascender-4.jpg`, category: "Ascender" },

    // FALL ARRESTER / СТРАХОВКА
    { id: 5, name: "Fall Arrester (XDQ9640)", price: "336.000 UZS", image: `${ASSETS_BASE}/products/fall-arrester-1.jpg`, category: "Fall Arrester" },
    { id: 6, name: "Fall Arrester (XDT1032P)", price: "4.104.000 UZS", image: `${ASSETS_BASE}/products/fall-arrester-2.jpg`, category: "Fall Arrester" },

    // ANCHORS / АНКЕРЫ
    { id: 7, name: "Eight-holes multianchor (XDQ9722BL)", price: "390.000 UZS", image: `${ASSETS_BASE}/products/anchor-1.jpg`, category: "Anchors" },
    { id: 8, name: "304Piton M8 (XD8625)", price: "48.000 UZS", image: `${ASSETS_BASE}/products/anchor-2.jpg`, category: "Anchors" },
    { id: 9, name: "304Piton M10 (XD8608)", price: "60.000 UZS", image: `${ASSETS_BASE}/products/anchor-3.jpg`, category: "Anchors" },
    { id: 10, name: "316Piton M10 (XD8627CP)", price: "78.000 UZS", image: `${ASSETS_BASE}/products/anchor-4.jpg`, category: "Anchors" },
    { id: 11, name: "304Piton M12 (XD8639CP)", price: "85.200 UZS", image: `${ASSETS_BASE}/products/anchor-5.jpg`, category: "Anchors" },
    { id: 12, name: "Ring (HKKH12GB)", price: "372.000 UZS", image: `${ASSETS_BASE}/products/anchor-6.jpg`, category: "Anchors" },

    // HARNESS / СТРАХОВОЧНЫЕ СИСТЕМЫ
    { id: 13, name: "Half Body Safety Harness (XDA9518Orange)", price: "198.000 UZS", image: `${ASSETS_BASE}/products/harness-half-1.jpg`, category: "Half Body Harness" },
    { id: 14, name: "Full Body Safety Harness (XDA9516)", price: "888.000 UZS", image: `${ASSETS_BASE}/products/harness-full-1.jpg`, category: "Full Body Harness" },
    { id: 15, name: "Full Body Safety Harness (XDA9516S)", price: "852.000 UZS", image: `${ASSETS_BASE}/products/harness-full-2.jpg`, category: "Full Body Harness" },
    { id: 16, name: "Via Ferrata Full (XDA9599CR)", price: "888.000 UZS", image: `${ASSETS_BASE}/products/harness-full-3.jpg`, category: "Full Body Harness" },
    { id: 17, name: "Body Harness (XDA9599ET)", price: "816.000 UZS", image: `${ASSETS_BASE}/products/harness-full-4.jpg`, category: "Full Body Harness" },
    { id: 18, name: "Children Safety Harness (HA9552RH)", price: "528.000 UZS", image: `${ASSETS_BASE}/products/harness-child-1.jpg`, category: "Children Harness" },
    { id: 19, name: "Children Safety Harness (HA9552BL)", price: "528.000 UZS", image: `${ASSETS_BASE}/products/harness-child-2.jpg`, category: "Children Harness" },
    { id: 20, name: "Children Safety Harness (HA9526BLS)", price: "588.000 UZS", image: `${ASSETS_BASE}/products/harness-child-3.jpg`, category: "Children Harness" },
    { id: 21, name: "Children Safety Harness (HA9526YHS)", price: "588.000 UZS", image: `${ASSETS_BASE}/products/harness-child-4.jpg`, category: "Children Harness" },
    { id: 22, name: "Half Body Safety Harness (HA9526RHL)", price: "684.000 UZS", image: `${ASSETS_BASE}/products/harness-half-2.jpg`, category: "Half Body Harness" },
    { id: 23, name: "Half Body Safety Harness (HA9553BLL)", price: "744.000 UZS", image: `${ASSETS_BASE}/products/harness-half-3.jpg`, category: "Half Body Harness" },
    { id: 24, name: "Full Body Safety Harness (HA9558AGHL)", price: "780.000 UZS", image: `${ASSETS_BASE}/products/harness-full-5.jpg`, category: "Full Body Harness" },
    { id: 25, name: "Full Body Safety Harness with chest ascender (HH9592L)", price: "4.104.000 UZS", image: `${ASSETS_BASE}/products/harness-full-6.jpg`, category: "Full Body Harness" },
    { id: 26, name: "Full Body Safety Harness with chest ascender (HH9592M)", price: "4.104.000 UZS", image: `${ASSETS_BASE}/products/harness-full-7.jpg`, category: "Full Body Harness" },
    { id: 27, name: "Half Body Safety Harness (HH9588)", price: "390.000 UZS", image: `${ASSETS_BASE}/products/harness-half-4.jpg`, category: "Half Body Harness" },
    { id: 28, name: "Full Body Safety Harness (Yellow/Black)", price: "768.000 UZS", image: `${ASSETS_BASE}/products/harness-full-8.jpg`, category: "Full Body Harness" },

    // PULLEY / БЛОКИ
    { id: 29, name: "Double Pulley (XDQ9676Gray)", price: "408.000 UZS", image: `${ASSETS_BASE}/products/pulley-1.jpg`, category: "Pulley" },
    { id: 30, name: "Pulley (XD8610Red)", price: "132.000 UZS", image: `${ASSETS_BASE}/products/pulley-2.jpg`, category: "Pulley" },
    { id: 31, name: "Pulley (XD8610Black)", price: "294.000 UZS", image: `${ASSETS_BASE}/products/pulley-3.jpg`, category: "Pulley" },
    { id: 32, name: "Pulley (HPU03GGL)", price: "312.000 UZS", image: `${ASSETS_BASE}/products/pulley-4.jpg`, category: "Pulley" },
    { id: 33, name: "Double Pulley (HPU05GJ)", price: "516.000 UZS", image: `${ASSETS_BASE}/products/pulley-5.jpg`, category: "Pulley" },
    { id: 34, name: "Double Pulley (H9751OJ)", price: "1.524.000 UZS", image: `${ASSETS_BASE}/products/pulley-6.jpg`, category: "Pulley" },
    { id: 35, name: "Pulley (HH9720GL)", price: "516.000 UZS", image: `${ASSETS_BASE}/products/pulley-7.jpg`, category: "Pulley" },
    { id: 36, name: "Zip line pulley (HH9796)", price: "1.212.000 UZS", image: `${ASSETS_BASE}/products/pulley-8.jpg`, category: "Pulley" },
    { id: 37, name: "Triple Pulley (HPU03BGGL)", price: "1.092.000 UZS", image: `${ASSETS_BASE}/products/pulley-9.jpg`, category: "Pulley" },
    { id: 38, name: "Triple Pulley (HPU03CGGL)", price: "1.092.000 UZS", image: `${ASSETS_BASE}/products/pulley-10.jpg`, category: "Pulley" },
    { id: 39, name: "4:1 Pulley System Set (XDCP9771GL)", price: "5.364.000 UZS", image: `${ASSETS_BASE}/products/pulley-11.jpg`, category: "Pulley" },

    // HELMET / КАСКИ
    { id: 40, name: "Helmet (XDQ9650OJ)", price: "360.000 UZS", image: `${ASSETS_BASE}/products/helmet-1.jpg`, category: "Helmet" },
    { id: 41, name: "Helmet (XDQ9664YellowS)", price: "144.000 UZS", image: `${ASSETS_BASE}/products/helmet-2.jpg`, category: "Helmet" },
    { id: 42, name: "Helmet (XDQ9664YellowM)", price: "144.000 UZS", image: `${ASSETS_BASE}/products/helmet-3.jpg`, category: "Helmet" },
    { id: 43, name: "Helmet (XDQ9664YellowL)", price: "144.000 UZS", image: `${ASSETS_BASE}/products/helmet-4.jpg`, category: "Helmet" },
    { id: 44, name: "Helmet (HH9669GL)", price: "510.000 UZS", image: `${ASSETS_BASE}/products/helmet-5.jpg`, category: "Helmet" },

    // CARABINER / КАРАБИНЫ
    { id: 45, name: "Carabiner (XDQ9608SilverR)", price: "144.000 UZS", image: `${ASSETS_BASE}/products/carabiner-1.jpg`, category: "Carabiner" },
    { id: 46, name: "Carabiner (HH8122TNGG)", price: "120.000 UZS", image: `${ASSETS_BASE}/products/carabiner-2.jpg`, category: "Carabiner" },
    { id: 47, name: "Carabiner (XD8121TNOorange)", price: "120.000 UZS", image: `${ASSETS_BASE}/products/carabiner-3.jpg`, category: "Carabiner" },
    { id: 48, name: "Carabiner (XDQ9692)", price: "492.000 UZS", image: `${ASSETS_BASE}/products/carabiner-4.jpg`, category: "Carabiner" },
    { id: 49, name: "Carabiner (A3107SGH)", price: "312.000 UZS", image: `${ASSETS_BASE}/products/carabiner-5.jpg`, category: "Carabiner" },
    { id: 50, name: "Carabiner (H8126NBH)", price: "144.000 UZS", image: `${ASSETS_BASE}/products/carabiner-6.jpg`, category: "Carabiner" },

    // ROPE / ВЕРЕВКИ
    { id: 51, name: "10.5mm dynamic rope (XDS9802105)", price: "30.000 UZS", image: `${ASSETS_BASE}/products/rope-1.jpg`, category: "Rope" },
    { id: 52, name: "10mm static nylon rope (XDS980110RedG)", price: "12.000 UZS", image: `${ASSETS_BASE}/products/rope-2.jpg`, category: "Rope" },
    { id: 53, name: "Dyneema rope (HH9867100J)", price: "42.000 UZS", image: `${ASSETS_BASE}/products/rope-3.jpg`, category: "Rope" },
    { id: 54, name: "Nylon rope (HH9868BL)", price: "12.000 UZS", image: `${ASSETS_BASE}/products/rope-4.jpg`, category: "Rope" },
    { id: 55, name: "Nylon rope (HH9868RH)", price: "12.000 UZS", image: `${ASSETS_BASE}/products/rope-5.jpg`, category: "Rope" },
    { id: 56, name: "Dyneema Blended Rope (HH9884BY)", price: "42.000 UZS", image: `${ASSETS_BASE}/products/rope-6.jpg`, category: "Rope" },
    { id: 57, name: "Dyneema Blended Rope (HH988475RY)", price: "42.000 UZS", image: `${ASSETS_BASE}/products/rope-7.jpg`, category: "Rope" },

    // BAGS / СУМКИ
    { id: 58, name: "Waterproof rope bag (HBAG0330YH)", price: "510.000 UZS", image: `${ASSETS_BASE}/products/bag-1.jpg`, category: "Bags" },
    { id: 59, name: "Buffer Bag (H9350)", price: "156.000 UZS", image: `${ASSETS_BASE}/products/bag-2.jpg`, category: "Bags" },
    { id: 60, name: "Equipment Package (XDBAG20FYH38)", price: "1.176.000 UZS", image: `${ASSETS_BASE}/products/bag-3.jpg`, category: "Bags" },
    { id: 61, name: "Equipment Management Package (HHBAG34BH)", price: "1.956.000 UZS", image: `${ASSETS_BASE}/products/bag-4.jpg`, category: "Bags" },
    { id: 62, name: "Tool bag (HHBAG27GL)", price: "114.000 UZS", image: `${ASSETS_BASE}/products/bag-5.jpg`, category: "Bags" },

    // ACCESSORIES / АКСЕССУАРЫ
    { id: 63, name: "Dacron Sling (XDD931260)", price: "36.000 UZS", image: `${ASSETS_BASE}/products/accessory-1.jpg`, category: "Accessories" },
    { id: 64, name: "Dacron Sling (XDD931280)", price: "48.000 UZS", image: `${ASSETS_BASE}/products/accessory-2.jpg`, category: "Accessories" },
    { id: 65, name: "Dacron Sling (XDD9312120)", price: "54.000 UZS", image: `${ASSETS_BASE}/products/accessory-3.jpg`, category: "Accessories" },
    { id: 66, name: "Rope Protector (XDQ6628)", price: "78.000 UZS", image: `${ASSETS_BASE}/products/accessory-4.jpg`, category: "Accessories" },
    { id: 67, name: "Swivel (HHXZH9M)", price: "426.000 UZS", image: `${ASSETS_BASE}/products/accessory-5.jpg`, category: "Accessories" },
    { id: 68, name: "Lanyard (XDD9305Yellow)", price: "270.000 UZS", image: `${ASSETS_BASE}/products/accessory-6.jpg`, category: "Accessories" },
    { id: 69, name: "Multifunction thwart (HHZB04GL)", price: "1.242.000 UZS", image: `${ASSETS_BASE}/products/accessory-7.jpg`, category: "Accessories" },
  ]
};
