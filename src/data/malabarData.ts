export interface TourItinerary {
  id: string;
  optionValue: string;
  badge: string;
  title: string;
  price: string;
  priceNumeric: number;
  description: string;
  footerMeta?: string;
  imageSrc: string;
  imageAlt: string;
  colSpan: string;
  aspectRatio: string;
  isLargeCard: boolean;
  highlights: string[];
  routeStops: { day: string; title: string; detail: string }[];
  inclusions: string[];
}

export interface FleetVehicle {
  id: string;
  optionValue: string;
  category: 'bikes' | 'sedans' | 'suvs' | 'caravans' | 'buses';
  categoryLabel: string;
  icon: string;
  badgeText: string;
  tagText: string;
  title: string;
  description: string;
  priceMain: string;
  priceUnit: string;
  priceNumeric?: number;
  imageSrc: string;
  imageAlt: string;
  specs: { label: string; value: string }[];
}

export interface EthosPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialQuote {
  id: string;
  quote: string;
  author: string;
  location: string;
}

export const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD4RA8AXrRrbi-_O4bKgK9i7FnPE47I8uBGUOJHetb6NSKSxuYfbfVYnA5FZoIWv6YlWuPTT8iRtLh6YLpPRjiKy0epWx19G7pwXCXbYcoAXW4Nvsersmj3s08QuI9dYuuTA4ToXMUC_2q_XDFTS5UEBw9X79UkwuoOi-ZbSz98eIDJZwfrxxgOsc3iC5InlLUi5vO4Thk1ytFqR5YGHgOxAY5Q0ZPibWvXrmO9jqHsl3Uudl43cTGG';

export const TOUR_ITINERARIES: TourItinerary[] = [
  {
    id: 'munnar-cardamom-hills',
    optionValue: 'tour-munnar',
    badge: '3 Days · High Range',
    title: 'Munnar & The Cardamom Hills',
    price: 'from ₹14,200',
    priceNumeric: 14200,
    description:
      'Ascend colonial cart paths into fragrant cloud forests, visiting boutique organic tea factories and shaded spice groves at 1,600m altitude.',
    footerMeta: 'Includes Private Chauffeur + Estate Stay',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA53sNtgNLqDM9iIJEqaj7hbY5SJF_kz-NKf5c38AiFJTgM-dZXeGI4si4MKjpTZ6fPgHSNQUA4wCHL_IWND_r4DfNXW5GAHiWRYVVDEySDbxBFX1KMnFK7t_QCH4KdAmgnDyBvcU5A1xrrry6x7Ba3fRU95Bnh2dLVC1iw-0zG3NfFgXc_Tp0ciT7IYQHjslAJkAfFMdzCxBTt37lEXBypKKh8VDIQ4JFWU6iBtzhc7W4f-iORLP9z',
    imageAlt: 'Winding road through lush green terraced tea plantations of Munnar under mist',
    colSpan: 'md:col-span-7',
    aspectRatio: 'aspect-[16/10]',
    isLargeCard: true,
    highlights: [
      'Private ascent via Neriamangalam forest bridge and Periyar river viewpoints',
      'Guided tasting at an orthodox 1920s high-grown tea factory in Kolukkumalai foothills',
      'Two nights at a restored planters bungalow surrounded by cardamom and wild pepper'
    ],
    routeStops: [
      {
        day: 'Day 01',
        title: 'Fort Kochi to Lockhart Gap (135 km · 4.5 hrs)',
        detail: 'Morning departure from Fort Kochi, pausing at family-run rubber & nutmeg homesteads along the foothills.'
      },
      {
        day: 'Day 02',
        title: 'Silent Valley Ridge & Tea Tasting',
        detail: 'Early dawn ridge walk with an estate naturalist followed by an unhurried afternoon leaf-to-cup session.'
      },
      {
        day: 'Day 03',
        title: 'Cardamom Reserve Descent to Coast',
        detail: 'Wind down through Santhanpara spice estates back to Cochin International Airport or Fort Kochi.'
      }
    ],
    inclusions: ['Toyota Innova or Sedan with Native Chauffeur', '2 Nights Heritage Planter Bungalow (Breakfast & Dinner)', 'All Forest Checkpost & Estate Entry Permits']
  },
  {
    id: 'vembanad-alleppey-houseboat',
    optionValue: 'tour-alleppey',
    badge: '2 Nights · Waterway Drift',
    title: 'Vembanad & Alleppey Houseboat',
    price: 'from ₹18,500',
    priceNumeric: 18500,
    description:
      'Glide along palm-sheltered lagoons on an exclusive anjili-wood barge, moored at secluded village jetties as twilight falls.',
    footerMeta: 'Full Board · Private Chef',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4RA8AXrRrbi-_O4bKgK9i7FnPE47I8uBGUOJHetb6NSKSxuYfbfVYnA5FZoIWv6YlWuPTT8iRtLh6YLpPRjiKy0epWx19G7pwXCXbYcoAXW4Nvsersmj3s08QuI9dYuuTA4ToXMUC_2q_XDFTS5UEBw9X79UkwuoOi-ZbSz98eIDJZwfrxxgOsc3iC5InlLUi5vO4Thk1ytFqR5YGHgOxAY5Q0ZPibWvXrmO9jqHsl3Uudl43cTGG',
    imageAlt: 'Wooden kettuvallam boat anchored by lush coconut palms on backwater canal',
    colSpan: 'md:col-span-5',
    aspectRatio: 'aspect-[4/3]',
    isLargeCard: true,
    highlights: [
      'Private single-bedroom traditional hand-tied Kettuvallam crafted from jackfruit timber',
      'Cruising quiet Kuttanad polder canals away from the commercial houseboat corridors',
      'Onboard Malabar cuisine prepared fresh with Toddy shop-inspired Karimeen & duck roast'
    ],
    routeStops: [
      {
        day: 'Day 01',
        title: 'Fort Kochi to Muhamma Private Jetty',
        detail: 'Chauffeured coastal drive via Andhakaranazhi beach to board at noon on the western bank of Vembanad.'
      },
      {
        day: 'Day 02',
        title: 'Champakulam & Narrow Village Canals',
        detail: 'Transfer to a country canoe for narrow canals, St. Mary’s Basilica, and toddy-tapping groves.'
      },
      {
        day: 'Day 03',
        title: 'Dawn Lagoon Crossing & Disembarkation',
        detail: 'Morning coffee over misty Vembanad waters before returning to Fort Kochi or Marari.'
      }
    ],
    inclusions: ['Exclusive Private Kettuvallam Barge + 3 Crew', 'All Meals Freshly Prepared Onboard', 'Round-trip Fort Kochi Chauffeur Transfer']
  },
  {
    id: 'wayanad-rainforest-coffee',
    optionValue: 'tour-wayanad',
    badge: '4 Days · Rainforest',
    title: 'Wayanad Rainforest & Coffee',
    price: 'from ₹19,800',
    priceNumeric: 19800,
    description:
      'Dense canopy walks, prehistoric caves, and tranquil stays inside heirloom coffee plantations in the northern Western Ghats.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALXZpR9Odc-GkfEhribnAyqd5gy6CJRvcSlY66JMJyFVVIhW9sL_nek49jqjsxaakXCWsmC_jCRamvSvePEB4fvZIqIdRqfi1lq_ZbVMSDpP42Di2wBiMLo-Gv6DiOpdXEFigi2VurW-LwYy_VvOgXf_Oh802yKGKGfoq3tcmUrWC5efjVGiJWoM8tgCMGjQQgIFzHKZHQx1VDSYf4C87p-MR6SOBbKktTddTHrzv5TPjNgv0SSA5l',
    imageAlt:
      'Dense emerald green rainforest canopy in Wayanad Kerala with morning mist wrapping around wild bamboo thickets and cardamom leaves under soft warm lighting.',
    colSpan: 'md:col-span-4',
    aspectRatio: 'aspect-[3/2]',
    isLargeCard: false,
    highlights: [
      'Ascend the nine hairpin bends of Thamarassery Churam at dawn',
      'Stay inside a 90-acre shade-grown Arabica and Robusta estate near Kalpetta',
      'Private walks through Kuruva river island bamboo groves and Edakkal petroglyphs'
    ],
    routeStops: [
      {
        day: 'Day 01',
        title: 'Malabar Coast to Lakkidi Crest',
        detail: 'Scenic climb from Kozhikode or Kochi into the high rainforest canopy of Wayanad.'
      },
      {
        day: 'Day 02–03',
        title: 'Coffee Harvest Trails & Bamboo Rafting',
        detail: 'Two unhurried days exploring Kabini tributaries, wildlife corridors, and estate roasting.'
      },
      {
        day: 'Day 04',
        title: 'Descent via Calicut Heritage Spice Bazaar',
        detail: 'Return journey with a traditional Malabar lunch stop in Kozhikode.'
      }
    ],
    inclusions: ['Chauffeured SUV or Self-Drive Enfield Option', '3 Nights Coffee Estate Sanctuary', 'Guided Canopy & Estate Walks']
  },
  {
    id: 'old-fort-kochi-mattancherry',
    optionValue: 'tour-kochi',
    badge: 'Single Day · Cultural',
    title: 'Old Fort Kochi & Mattancherry',
    price: 'from ₹3,400',
    priceNumeric: 3400,
    description:
      'An unhurried historical stroll past Dutch palaces, Syrian spice godowns, and the historic cantilevered Chinese fishing nets.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1ywSK5HlHfJq8dudqqpbYg4R35i8GM5Z1DIb7Re_ZhRWXtuutnbvJQ4P5HC5S9dCxuG4bqiuo3sQ_uU0WthvMTrok3CC83NcXaz9YvHMlYsistjRaoLxrRktkZL2ghptInMyJCHJjOjVQX42QMxJl75DzoeiS1mAXY4VfMe030gCfhO5PuaCtBt8LHgLLteHs1KLbWl2XID0pFaP9XtlOBnxqkxVywRg1nZmQnGcFWC1ixptoloH0',
    imageAlt:
      'Historic cobblestone lane in Fort Kochi with colonial Portuguese ochre and white facades, weathered timber shutters, and tropical rain tree shadows.',
    colSpan: 'md:col-span-4',
    aspectRatio: 'aspect-[3/2]',
    isLargeCard: false,
    highlights: [
      'Private architectural walk led by a local Fort Kochi archivist',
      'Access to working ginger and black pepper auction godowns on Bazaar Road',
      'Sunset tea overlooking the cantilevered Cheena Vala fishing nets'
    ],
    routeStops: [
      {
        day: '08:30',
        title: 'St. Francis Church & Bastion Bungalow',
        detail: 'Begin beneath the rain trees of Parade Ground before the midday warmth arrives.'
      },
      {
        day: '11:30',
        title: 'Mattancherry Palace & Jew Town Spice Warehouses',
        detail: 'Explore mural-painted royal chambers and active spice sorting courtyards.'
      },
      {
        day: '16:30',
        title: 'Calvathy Ferry & Dusk at the Nets',
        detail: 'Conclude at our Calvathy Road atelier with fresh lime soda and coastal stories.'
      }
    ],
    inclusions: ['Local Historian Guide', 'Chauffeured Sedan Between Precincts', 'Heritage Cafe Lunch & Monument Tickets']
  },
  {
    id: 'marari-coastline-village-drift',
    optionValue: 'tour-marari',
    badge: '2 Days · Coastline',
    title: 'Marari Coastline & Village Drift',
    price: 'from ₹8,900',
    priceNumeric: 8900,
    description:
      'Fisherfolk hamlets, quiet secluded beaches, and barefoot walks through coir-weaving co-operatives along the Arabian Sea.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0qxg2Of1zc6eTr3qGMNCrEbxWinhctW8RtYyAGVs9rzC6BTPIKx_tSlEzefESeGs9NLi4AMah1rUxHDJ8yr1jpKwFSHZmvb5-A9jQ0yRJVaNU3INm-U3W4lDZm3grl38owoiQf1NGjt6-Gaq45BMJiHfRZm0idkLZXrUwDLRsLJJjzSpx3JEzHS5sGV23NPWUUbHXyYCPn0hEBVo1Tja0DSoNo7RObEeQVSfyNfOHIqH0WoARfvOF',
    imageAlt:
      'Quiet golden sandy beach at Marari Kerala lined with bending coconut palm trees and a traditional wooden dugout canoe under serene sunset sky.',
    colSpan: 'md:col-span-4',
    aspectRatio: 'aspect-[3/2]',
    isLargeCard: false,
    highlights: [
      'Coastal back-road route via Chellanam and Arthunkal Basilica',
      'Morning visit to women-led village coir spinning and loom co-operatives',
      'Overnight stay in a lime-plastered coastal cottage steps from the Arabian Sea'
    ],
    routeStops: [
      {
        day: 'Day 01',
        title: 'Old Coast Road South from Fort Kochi',
        detail: 'Follow the narrow strip between pokkali rice paddies and the sea down to Mararikulam.'
      },
      {
        day: 'Day 02',
        title: 'Dawn Beach Landing & Coir Guilds',
        detail: 'Watch traditional kattumaram boats land at sunrise before a lazy afternoon under the palms.'
      }
    ],
    inclusions: ['Chauffeured Car or Royal Enfield Rental', '1 Night Coastal Heritage Cottage', 'Village Co-operative Walk']
  }
];

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'royal-enfield-hunter-350',
    optionValue: 'fleet-bike',
    category: 'bikes',
    categoryLabel: 'Bikes & Scooters',
    icon: 'two_wheeler',
    badgeText: '2 Seats · Self-drive',
    tagText: 'Daily rental',
    title: 'Royal Enfield Hunter 350 & Activa 125',
    description:
      'For slow exploration of Fort Kochi alleyways and coastal back-roads down to Chellanam beach.',
    priceMain: '₹800',
    priceUnit: '/ day',
    priceNumeric: 800,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9Posqe3d4RB9Xju9Z5dqwd7Lx0TcBlfbgl2dUp3Y2J5E5wr344PA1_3UJg6l3svyRYYV3F2TNY9F9KYOqlvvGaW8_MskfvBTmZd50ZPzfixBmKvwtUVeGawN6mT1syiTwxNfV2ijdXVKe1RAtbLJQrjZo7KUAQvOpCjpkKEqMriseqy3hHtX2bSCH-9XnlJWmdBywOYGhai3QmyTL0NdQwWZ9VHW6NbtU4xUwpNsGmScHrHln3Wqh',
    imageAlt:
      'Classic Royal Enfield modern motorcycle parked outside a heritage colonial bungalow in Fort Kochi surrounded by lush tropical palms in warm natural sunlight.',
    specs: [
      { label: 'Included', value: '2 DOT Helmets, Pannier Straps, Phone Mount' },
      { label: 'Deposit', value: '₹3,000 Refundable · Unlimited KM within Kerala' }
    ]
  },
  {
    id: 'toyota-etios-maruti-ciaz',
    optionValue: 'fleet-sedan',
    category: 'sedans',
    categoryLabel: 'Sedans',
    icon: 'directions_car',
    badgeText: '4 Seats + Luggage',
    tagText: 'Chauffeur',
    title: 'Toyota Etios & Maruti Ciaz',
    description:
      'Comfortable, air-conditioned city travel and airport pickups from Cochin International.',
    priceMain: '₹2,400',
    priceUnit: '/ 80km',
    priceNumeric: 2400,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCetq6eT4IAQjOXG645ZDgePB9E1SQwXSLMtZvKNOQFSieCIwlklvKTvQSqG-LMTJx13tTKI7IJjQUd5PECpexxcTK9plvhmWnUsgb1JIhMswBVdLcK9VvA7jTNPeAUYEczZrLsauUMdegKRQvVY8mi61bxDEsvJX-Go3WAnoMewLcQM4pI0JgtZPZ34NCazpfAWp4tsuUhzwct5Ibfgtskg97NOqITMV1Ixx1fs3IvkYly6_E-3fcI',
    imageAlt:
      'Clean elegant white sedan automobile driving smoothly along an empty scenic palm-fringed coastal highway in Kerala in warm afternoon light.',
    specs: [
      { label: 'Chauffeur', value: 'English & Malayalam speaking Fort Kochi native' },
      { label: 'Extra KM', value: '₹16 / km · Driver allowance included' }
    ]
  },
  {
    id: 'toyota-innova-crysta-fortuner',
    optionValue: 'fleet-innova',
    category: 'suvs',
    categoryLabel: 'Luxury SUVs',
    icon: 'airport_shuttle',
    badgeText: '6–7 Seats',
    tagText: 'Ghat Specialist',
    title: 'Toyota Innova Crysta & Fortuner',
    description:
      'Spacious and sure-footed across high-range ghats of Munnar, Idukki, and the cardamom ridges.',
    priceMain: '₹3,800',
    priceUnit: '/ day',
    priceNumeric: 3800,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAy63z4ovW8Y73YKDLhw63CjiLuilktdcPSSTeFRdGbErES3nBYAVLm4N-hXkDkyarYxJekvb8ETAbUANPLdZkwummiTGfVwQHxFJwA6gnyeTci4uKIBzcph1ahE0GqOL4Xe_r4InyHEG64evUwmLyweG4foeF_3uRdZElC9NpulBP6CX-oGyy0iQGx8h4FRD5twG9FVajNR9S43B7qxESmUf7Pz-_kPgGvolz1A0TavEp5vRw7Xs3s',
    imageAlt:
      'Premium dark green Toyota Innova Crysta SUV navigating an undulating mountain road through high misty tea gardens in Kerala Western Ghats.',
    specs: [
      { label: 'Seating', value: 'Captain Bucket Seats + Full Expedition Roof Rack' },
      { label: 'Allowance', value: 'Includes 100 km/day + Chauffeur Bata' }
    ]
  },
  {
    id: 'force-custom-campervan',
    optionValue: 'fleet-camper',
    category: 'caravans',
    categoryLabel: 'Caravans',
    icon: 'bed',
    badgeText: 'Sleeps 3–4',
    tagText: 'Off-grid Living',
    title: 'Force Custom Campervan',
    description:
      'Self-contained road trips through tea estates with kitchenette, fold-out beds, and solar battery bank.',
    priceMain: '₹7,200',
    priceUnit: '/ day',
    priceNumeric: 7200,
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOszgXtuggV2fNZYUnj4LwSA8E1nMF-Zp-HrQ8fAmDwrfdtO7rzhQuaa-PWU2mLnCFiD7nVvG2LJ9i7ZUoXWQA62jnjxmgPIxrWHXThD0j-lf_tf1en5VucpZIqpJ848gVBVzqta84gwM58DShgZcK3Lc4BfrcGHaMhJBhGruQElwBhK6Xewc4CU25nBLnDYo_U2HKIqFO0tnlQNw-8EDyZ6HRlOXU-EyZtAGti-3CPqBiILye9pl4',
    imageAlt:
      'Bespoke campervan van parked overlook scenic tea plantation hills in Kerala with cozy interior timber fittings visible through open door.',
    specs: [
      { label: 'Amenities', value: '400W Solar, Induction Galley, Outdoor Awning & Shower' },
      { label: 'Camp Spots', value: 'Includes curated private estate mooring access' }
    ]
  },
  {
    id: 'force-urbania-luxury-coaches',
    optionValue: 'bespoke',
    category: 'buses',
    categoryLabel: 'Buses & Coaches',
    icon: 'directions_bus',
    badgeText: '12–26 Seats',
    tagText: 'Group Travel',
    title: 'Force Urbania & Luxury Coaches',
    description:
      'Executive family gatherings, quiet group retreats, and plantation visits with dual-zone climate control.',
    priceMain: 'On Quote',
    priceUnit: '/ customized',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCibOIyyCJZX7yeKokrVChX6c2li4vlUGWPM7mIwfmcRpR9TKdmoBNHrbomrS9Ya9cH6hBTxATqYIG7nHAIj3cO1RIQYSV53ha2uxUYzuoAAMsCwbHEjlAZjJtGpFFDlOycXWhHZlo7l6WXF-F-B76pJgnYhxTA4dLW81rR2sZaGHrV5vMe8l-Eu8MvDQq2nJG81Jyzs0_iyZ6NBfKPTYQ3_GsPZYoPfHyp17U8RVJ1Gu9b9w6cvO1Z',
    imageAlt:
      'Modern executive luxury coach bus parked in shaded tropical compound under banyan trees in Fort Kochi Kerala with soft evening atmosphere.',
    specs: [
      { label: 'Cabin', value: 'Reclining Loungers, Panoramic Glass, USB-C at all seats' },
      { label: 'Crew', value: 'Senior Ghats Captain + Dedicated Co-driver' }
    ]
  }
];

export const ETHOS_POINTS: EthosPoint[] = [
  {
    id: 'native-chauffeurs',
    icon: 'signpost',
    title: 'Native Chauffeurs',
    description:
      'Experienced local drivers who know every river ferry crossing, forest checkpoint, quiet toddy shop, and monsoon detour across the Western Ghats.'
  },
  {
    id: 'transparent-billing',
    icon: 'receipt_long',
    title: 'Transparent Billing',
    description:
      'Clear per-kilometer and daily rates. Fuel, interstate permits, parking receipts, and driver allowances are explained upfront with zero hidden charges.'
  },
  {
    id: 'direct-kochi-desk',
    icon: 'support_agent',
    title: 'Direct 24/7 Kochi Desk',
    description:
      'Speak directly to our mechanics and dispatchers in Fort Kochi, whether you encounter a fallen palm in Munnar at midnight or an early dawn departure in Kumarakom.'
  }
];

export const TESTIMONIALS: TestimonialQuote[] = [
  {
    id: 'anand-claire',
    quote:
      '“Our driver, Biju, didn’t merely drive us; he read the skies before Munnar and guided us to small family-run tea sheds no tourist guidebook mentions.”',
    author: 'Anand & Claire',
    location: 'Bengaluru'
  },
  {
    id: 'marcus-lindqvist',
    quote:
      '“Hiring the Hunter 350 for ten days through Wayanad was effortless. The bike was in pristine condition, and the Kochi team checked in whenever rain was heavy.”',
    author: 'Marcus Lindqvist',
    location: 'Stockholm'
  },
  {
    id: 'meera-nambiar',
    quote:
      '“The restraint and honesty of Malabar Journeys is rare. No forced stops at spice tourist markets, just thoughtful, dignified travel through God’s Own Country.”',
    author: 'Dr. Meera Nambiar',
    location: 'Chennai'
  }
];
