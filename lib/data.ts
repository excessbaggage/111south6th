const CDN = "https://photos.zillowstatic.com/fp";
const SIZE = "uncropped_scaled_within_1536_1152";

const hashes = [
  "a58f1d0b3943b31133d16105469b0c93",
  "8e372a0c736fc41a3c80c2bf87028948",
  "81ab7066af35df9f2b906ad5be4002f8",
  "9b6b871b82dab9120fa02a8ed7b478cb",
  "5d242e6b26317cdcf614f61df682ce61",
  "b4d52072e0ece2be6b7cc1706689f84c",
  "be65034c0d6e79c97308f1c2bf404487",
  "1a8d4ceaad327121ee09b128e8c7c35b",
  "35da708f351eb4e15d3adf28d98bc330",
  "c6b67cfbb896a97cd401ff3868e7f2f1",
  "607c43ba7a54d5dad93385264c1422b7",
  "e020c8bc4e9155b80f6d20f76983d672",
  "51bbb9a507bd4e7db4b576c96b9f644f",
  "aa2609884eb6ceaadd9fc8b74bec9f99",
  "0c4974da5a4c516ff381c970f1e5ca94",
  "d5c757f25e1cfa8d87c11195ab958bc1",
  "248d2fff870f66ce73a50e65a947658a",
  "1376a57ba5974719db885366c804a94e",
  "42d81c2642ab676feed946e39530befa",
  "b7ca3cc07cc4b9f96062e157ea5ec9d4",
  "4489bca4e62ef3044b78360b41631c33",
  "7bafbdd1406e4af2502d88ce7a13c0fa",
  "e71cb641a3621c9d4381d7d7f310ff5a",
  "4ed0fffa155c5c74caf131959f282c4c",
  "a5e44b29c0953b4851a5ef4f8c0cbfc9",
  "c9afd2cbaa5aeee4d870badb495b2f55",
  "3b8566c6d41f206a720d82092e88964c",
  "2c8d0101173904464501540d8c1069a6",
  "ff835a900c50df8b06c6741f8b5f3add",
  "04e399f7caff68aa5fc285f01216c297",
  "f6cbdb96d6a29a5c546b23ad1e49f51b",
  "533e4d2fbb549a81ba03cbc887389ade",
  "05a3a92c2ce5ea296792da28bf80d75a",
  "233c6171265665f35d2238fb412e7569",
  "afd39a493986fc14539a0ffda4677cdf",
  "d823e3bd2e52564806f11eb114ab1303",
  "10913c5776ec48a9ecdf8c5bb9a4ecff",
  "ca2d4e14a7215c3095bc2aed3e2e27d5",
  "4401b6892f20c6307c9de9d1d731bf53",
  "b689925a219b5d39b8fc908a76b17b33",
  "14758e738a49475bffc0ff0262ced012",
  "ac87feba55219ba9f6870406a1947211",
  "3aaef26a639f23d5427eb3f2b326d651",
  "e59986d971eb0f7d5e3915238a370d7c",
  "9a1cde182fc4cf88f267fea74999f560",
  "086a45b1d5fc1ab0de205e4089312788",
  "bcfdd9b890b3eb45af94225d3f0dd0fd",
  "6650b58c8c1a8a9eb4b0240ee25c2a21",
  "908dbe47026428856a2cc9ef2e9d8316",
  "34a089d3b1e7f2b946e35e6c17251857",
  "57905accb0cdbcf3539f68fa238b63e6",
  "c9b07fa7a11701f224f456ac08a4043c",
  "b77c86eb74612cce9d3e36f8fd694bdf",
  "2524b2b4ac6c41797e718e13dc7119d2",
  "05b6ee5ae2d57e0db165d56cbd3af49e",
  "2635759253420c7a2ff2fae12f23c3ea",
  "7b785462729c87db8dcf691ba428b5db",
  "fd9169bddde30ba3a5dc801351c7846b",
  "58ee3b519d2828b1942082e09aa982a9",
  "e27c6a440c69ad159cae57b11c408311",
  "efeffee98759462694d7a2b3d8661a85",
  "2bde3889e5c80c5b7c003f83ac923ae0",
  "56a6cd60da39134cc2994318e1a283cc",
  "c4060b88a47cb7d6cce216941b75792d",
  "6159dc26069e0b7b9ee4a248ac9a426b",
  "e92072da87846f2df9c2cb01471f280f",
  "b85c3bbd52b4d684c1ce42eceda1eeca",
  "cd4b19a9ca92feb82000dfebcb422ed1",
  "275b564226aa335dde6763db3f343fa9",
  "8fc9c798142de130c6342773f96c9f69",
  "cbc4b0bbcc8f530d01adde0c8983b5a5",
  "e5e5322edd78950f9a05bc660b28b6ae",
  "6ffe7e7186e8499d9cc3f1ce541af3ac",
  "38e5074cb563466b5a00ff5eda9a6ed1",
  "d5c49e0580be97ff4d42f23b5d4b3a97",
  "f0a06c490becef64566c0615038e4471",
  "11f7bb33ee13ae3ba8bb01fa56353a3d",
  "6a104f0861207aaacf8e7e78a33caef5",
  "03391eb2042350d6eca3ddb4aa7db1e4",
  "80850b39fbfaf4bbccdbf5d80b597178",
  "97bcee08007bb6ca2fb5ac4e69c46ede",
  "a30506c6a311064e8d3253b3dba83b17",
  "44ed6d41a487ede23405c3be6b05b31f",
  "dc1269c60a82ed54063b54d015cf06f6",
  "57ef1fb10a3d62748c6493510fecccf9",
  "a52d55b8d849ebbe0554c845cdebdb55",
  "185bdc2a61ab7fdfe2f03c66dd19c85b",
  "f093dac50399c72259640d727b5ff93e",
];

export const photos = hashes.map((h) => `${CDN}/${h}-${SIZE}.webp`);

export const property = {
  address: "111 South 6th Street",
  city: "Fernandina Beach",
  state: "FL",
  zip: "32034",
  price: 999000,
  priceFormatted: "$999,000",
  beds: 3,
  baths: 3,
  sqft: 2189,
  sqftFormatted: "2,189",
  lotSqft: 4735,
  lotFormatted: "4,735",
  yearBuilt: "c. 1884",
  mls: "115315",
  status: "For Sale",
  lat: 30.6693,
  lng: -81.4627,
};

export const agents = {
  names: "Tina Smith & Brenda Slater",
  brokerage: "Pineywoods Realty, LLC",
  phone: "(904) 557-3020",
  email: "info@pineywoodsrealty.com",
};

export const features = [
  {
    icon: "kitchen",
    title: "Thermador Chef's Kitchen",
    description:
      "Six-burner gas stove, custom cabinetry with quartz countertops, oversized eat-at island, and under-cabinet lighting.",
  },
  {
    icon: "fireplace",
    title: "Two Working Fireplaces",
    description:
      "Original fireplaces in the kitchen den and morning sitting room, adding warmth and historic character.",
  },
  {
    icon: "floor",
    title: "Original Hardwood Floors",
    description:
      "Beautiful hardwood floors throughout, preserved from the home's earliest days with 7.5-inch baseboards.",
  },
  {
    icon: "studio",
    title: "Detached Studio Space",
    description:
      "Heated and cooled bonus space perfect for an art studio, home office, or guest retreat.",
  },
  {
    icon: "glass",
    title: "Vintage Paned Glass",
    description:
      "Period-authentic glass doorknobs and vintage paned glass windows throughout the residence.",
  },
  {
    icon: "bedroom",
    title: "Private Treehouse Bedroom",
    description:
      "Oversized upstairs bedroom nestled among mature trees with large walk-in closets and dual-vanity bath.",
  },
  {
    icon: "dining",
    title: "Built-in Banquette",
    description:
      "Custom built-in banquette seating in the kitchen, ideal for casual dining and morning coffee.",
  },
  {
    icon: "doors",
    title: "French Doors Throughout",
    description:
      "Elegant French doors connect living spaces, flooding the home with natural light.",
  },
  {
    icon: "climate",
    title: "Zoned Climate Control",
    description:
      "Modern mini-split system (2019) provides efficient, room-by-room temperature control year-round.",
  },
];

export const storyParagraphs = [
  "Steps from the boutiques, galleries, and waterfront dining of historic Centre Street, this circa 1884 residence occupies a prized position in Fernandina Beach's celebrated Silk Stocking District — the neighborhood where the island's most prominent families built their grand homes during the Golden Age of Amelia Island.",
  "Thoughtfully rebuilt in 2003 and enriched by its current owners, the home marries period character with modern refinement. The chef's kitchen showcases a Thermador six-burner gas stove, an oversized island with quartz countertops, and a built-in banquette — all anchored by a working fireplace in the adjoining den. French doors and vintage paned glass fill every room with light, while original hardwood floors and 7.5-inch baseboards speak to the craftsmanship of a bygone era.",
  "Featured on the 2024 Amelia Island History Museums Cottages & Garden Tours, this is a home that has earned its place in the island's story. The upstairs master suite — an oversized retreat nestled among mature oaks — feels like a private treehouse, complete with walk-in closets and a dual-vanity bath. A detached, climate-controlled studio offers endless possibilities. This is more than a home. It is a piece of Amelia Island's living history.",
];

export const timeline = [
  { year: "1562", event: "French explorer Jean Ribault becomes the first European to set foot on Amelia Island" },
  { year: "1811", event: "George J.F. Clarke plats Old Town Fernandina — the last Spanish-planned city in the Western Hemisphere" },
  { year: "1855", event: "Senator David Yulee begins Florida's first cross-state railroad from Fernandina" },
  { year: "c. 1884", event: "111 South 6th Street is built during the Golden Age of Fernandina Beach" },
  { year: "1896", event: "American Resorts magazine names Fernandina 'The Queen of Summer Resorts'" },
  { year: "1973", event: "Fernandina Beach Historic District listed on the National Register of Historic Places" },
  { year: "2003", event: "The home is thoughtfully rebuilt, preserving its historic character" },
  { year: "2024", event: "Featured on the Amelia Island History Museums Cottages & Garden Tours" },
];

export const historyContent = {
  headline: "Where History Lives",
  intro:
    "Amelia Island holds a distinction shared by no other place in America — it is the only U.S. location to have flown eight different national flags. From French explorers in 1562 to the present day, this island has been shaped by centuries of ambition, conflict, and reinvention.",
  silkStocking:
    "The neighborhood surrounding 6th Street is known as the Silk Stocking District, named for the wealthy industrialists and shipping magnates who built grand Victorian homes here during Fernandina's Golden Age (1869–1915). When Henry Flagler's railroad bypassed the island in the 1890s, economic stagnation inadvertently preserved one of the finest collections of Victorian architecture in the American South.",
  nationalRegister:
    "The Fernandina Beach Downtown Historic District was listed on the National Register of Historic Places in 1973 and expanded in 1987 — encompassing more than 50 blocks and over 400 protected structures. The Smithsonian Institution has called Fernandina Beach one of the best examples of small-town living in the United States.",
  pullQuote:
    "\"One of the best examples of small town living in the U.S.\" — The Smithsonian Institution",
};

export const neighborhood = [
  { name: "Centre Street Shops & Dining", distance: "2 min walk", icon: "shop" },
  { name: "Amelia River Waterfront", distance: "3 min walk", icon: "water" },
  { name: "Palace Saloon (FL's Oldest Bar)", distance: "3 min walk", icon: "landmark" },
  { name: "Florida House Inn (FL's Oldest Hotel)", distance: "2 min walk", icon: "landmark" },
  { name: "Fernandina Beach Marina", distance: "5 min walk", icon: "anchor" },
  { name: "Fort Clinch State Park", distance: "5 min drive", icon: "fort" },
  { name: "Amelia Island Lighthouse", distance: "5 min drive", icon: "lighthouse" },
  { name: "Main Beach & Seaside Park", distance: "8 min drive", icon: "beach" },
];

export const seoJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "111 S 6th St, Fernandina Beach, FL 32034",
  url: "https://111south6th.com",
  datePosted: "2026-03-06",
  description:
    "Circa 1884 historic home in Fernandina Beach's National Register Historic District. 3 bedrooms, 3 bathrooms, 2,189 sqft. Thermador chef's kitchen, two working fireplaces, original hardwood floors. Featured on the 2024 Amelia Island History Museums Cottages & Garden Tours. Located in the celebrated Silk Stocking District, steps from Centre Street.",
  offers: {
    "@type": "Offer",
    price: "999000",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  about: {
    "@type": "Residence",
    name: "111 S 6th St",
    address: {
      "@type": "PostalAddress",
      streetAddress: "111 S 6th St",
      addressLocality: "Fernandina Beach",
      addressRegion: "FL",
      postalCode: "32034",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.6693,
      longitude: -81.4627,
    },
    numberOfRooms: 10,
    numberOfBedrooms: 3,
    numberOfBathroomsTotal: 3,
    floorSize: {
      "@type": "QuantitativeValue",
      value: 2189,
      unitCode: "FTK",
    },
    yearBuilt: 1884,
  },
};
