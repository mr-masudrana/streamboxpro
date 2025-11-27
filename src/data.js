// --- Configuration & Data ---

export const TAG_CONFIG = {
  bd: { label: "Bangla", color: "bg-emerald-600 text-white", border: "border-emerald-500" },
  in_wb: { label: "Bengali", color: "bg-orange-600 text-white", border: "border-orange-500" },
  south: { label: "Dubbed", color: "bg-purple-600 text-white", border: "border-purple-500" },
  bolly: { label: "Hindi", color: "bg-blue-600 text-white", border: "border-blue-500" },
  holly: { label: "English", color: "bg-red-600 text-white", border: "border-red-500" }
};

export const MOCK_DATA = [
  {
    id: 1,
    type: "movie",
    origin: "bd",
    title: "Toofan",
    rating: 8.8,
    year: 2024,
    duration: "2h 25m",
    genre: ["Action", "Crime"],
    description:
      "A notorious gangster rises to power in 90s Bangladesh, challenging the entire system.",
    cover:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=1200&q=80",
    poster:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&q=80",
    quality: "4K WEB-DL",
    trending: true,
    dateAdded: "2024-11-20",
    trailerId: "vNw_hZ_a_Zk"
  },

  {
    id: 101,
    type: "series",
    origin: "bd",
    title: "Mohanagar 3",
    rating: 9.1,
    year: 2024,
    duration: "Season 3",
    genre: ["Thriller", "Crime"],
    description:
      "OC Harun returns to face his toughest challenge yet in a night that never ends.",
    cover:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80",
    quality: "1080p WEB-DL",
    trending: true,
    dateAdded: "2024-11-15",
    trailerId: "wJqG6c8tS0g"
  },

  {
    id: 2,
    type: "movie",
    origin: "south",
    title: "Pushpa 2: The Rule",
    rating: 9.2,
    year: 2024,
    duration: "2h 45m",
    genre: ["Action", "Drama"],
    description: "Pushpa Raj's rule begins as he takes on new enemies.",
    cover:
      "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&w=1200&q=80",
    poster:
      "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&w=400&q=80",
    quality: "4K HDR",
    trending: true,
    dateAdded: "2024-11-25",
    trailerId: "8FkLRujp-Uk"
  },

  {
    id: 202,
    type: "movie",
    origin: "south",
    title: "Salaar",
    rating: 7.8,
    year: 2023,
    duration: "2h 55m",
    genre: ["Action", "Thriller"],
    description:
      "A gang leader makes a promise to a dying friend and takes on other criminal gangs.",
    cover:
      "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&w=1200&q=80",
    poster:
      "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&w=400&q=80",
    quality: "1080p WEB-DL",
    trending: true,
    dateAdded: "2024-10-12",
    trailerId: "H7A2p6q9y8o"
  },

  {
    id: 3,
    type: "movie",
    origin: "bolly",
    title: "Jawan",
    rating: 8.0,
    year: 2023,
    duration: "2h 49m",
    genre: ["Action", "Thriller"],
    description: "A man is driven by a personal vendetta to rectify the wrongs in society.",
    cover:
      "https://images.unsplash.com/photo-1596727147705-54a9d0820948?auto=format&fit=crop&w=1200&q=80",
    poster:
      "https://images.unsplash.com/photo-1596727147705-54a9d0820948?auto=format&fit=crop&w=400&q=80",
    quality: "4K WEB-DL",
    trending: true,
    dateAdded: "2024-10-22",
    trailerId: "COv52Qyctws"
  },

  {
    id: 5,
    type: "movie",
    origin: "holly",
    title: "Dune: Part Two",
    rating: 9.0,
    imdbRank: 12,
    year: 2024,
    duration: "2h 46m",
    genre: ["Sci-Fi", "Adventure"],
    description:
      "Paul Atreides unites with Chani while on a warpath of revenge.",
    cover:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=1200&q=80",
    poster:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=400&q=80",
    quality: "4K BluRay",
    trending: true,
    dateAdded: "2024-11-22",
    trailerId: "Way9Dexny3w"
  },

  {
    id: 501,
    type: "series",
    origin: "holly",
    title: "Fallout",
    rating: 8.6,
    year: 2024,
    duration: "Season 1",
    genre: ["Sci-Fi", "Action"],
    description:
      "In a future post-apocalyptic LA, citizens must live in underground bunkers.",
    cover:
      "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?auto=format&fit=crop&w=1200&q=80",
    poster:
      "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?auto=format&fit=crop&w=400&q=80",
    quality: "4K WEB-DL",
    trending: true,
    dateAdded: "2024-11-10",
    trailerId: "V-mugKDQDlg"
  },

  {
    id: 502,
    type: "movie",
    origin: "holly",
    title: "Deadpool & Wolverine",
    rating: 8.5,
    imdbRank: 25,
    year: 2024,
    duration: "2h 10m",
    genre: ["Action", "Comedy"],
    description: "Wolverine joins Deadpool in the third installment.",
    cover:
      "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=1200&q=80",
    poster:
      "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=400&q=80",
    quality: "HDCAM",
    trending: true,
    dateAdded: "2024-11-28",
    trailerId: "73_1biulkYk"
  }
];