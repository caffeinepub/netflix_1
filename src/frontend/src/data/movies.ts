export type ContentType = "movie" | "series";

export interface Title {
  id: string;
  title: string;
  description: string;
  genre: string[];
  year: number;
  rating: string;
  score: string;
  duration: string;
  type: ContentType;
  thumbnail: string;
  backdrop?: string;
  cast: string[];
  director?: string;
  seasons?: number;
  featured?: boolean;
}

export const titles: Title[] = [
  {
    id: "stranger-things",
    title: "Stranger Things",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl who holds the key to it all.",
    genre: ["Sci-Fi", "Horror", "Drama"],
    year: 2016,
    rating: "TV-14",
    score: "8.7",
    duration: "4 Seasons",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
    director: "The Duffer Brothers",
    seasons: 4,
    featured: true,
  },
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2008,
    rating: "TV-MA",
    score: "9.5",
    duration: "5 Seasons",
    type: "series",
    thumbnail: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    director: "Vince Gilligan",
    seasons: 5,
  },
  {
    id: "inception",
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    genre: ["Action", "Sci-Fi", "Thriller"],
    year: 2010,
    rating: "PG-13",
    score: "8.8",
    duration: "2h 28m",
    type: "movie",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    director: "Christopher Nolan",
  },
  {
    id: "dark-knight",
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genre: ["Action", "Crime", "Drama"],
    year: 2008,
    rating: "PG-13",
    score: "9.0",
    duration: "2h 32m",
    type: "movie",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: "Christopher Nolan",
  },
  {
    id: "interstellar",
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes increasingly uninhabitable.",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    year: 2014,
    rating: "PG-13",
    score: "8.6",
    duration: "2h 49m",
    type: "movie",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: "Christopher Nolan",
  },
  {
    id: "money-heist",
    title: "Money Heist",
    description:
      "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history — to print billions of euros in the Royal Mint of Spain.",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2017,
    rating: "TV-MA",
    score: "8.2",
    duration: "5 Seasons",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
    director: "Álex Pina",
    seasons: 5,
  },
  {
    id: "neon-abyss",
    title: "Neon Abyss",
    description:
      "In a rain-soaked cyberpunk city, a disillusioned detective uncovers a conspiracy that threatens to destroy the last remnants of humanity hidden beneath the neon-lit streets.",
    genre: ["Action", "Thriller", "Sci-Fi"],
    year: 2024,
    rating: "R",
    score: "8.1",
    duration: "2h 15m",
    type: "movie",
    thumbnail: "/assets/generated/poster-neon-abyss.dim_300x450.jpg",
    cast: ["Marcus Veil", "Asha Nomara", "Chen Yao"],
    director: "Kira Nakamura",
  },
  {
    id: "stellar-drift",
    title: "Stellar Drift",
    description:
      "An astronaut stranded beyond the edge of the known universe must navigate impossible gravitational anomalies and alien intelligence to find a way home before time runs out.",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    year: 2024,
    rating: "PG-13",
    score: "7.9",
    duration: "2h 32m",
    type: "movie",
    thumbnail: "/assets/generated/poster-stellar-drift.dim_300x450.jpg",
    cast: ["Aria Voss", "James Okafor", "Mei Lin"],
    director: "Daniel Archer",
  },
  {
    id: "shadow-kingdom",
    title: "Shadow Kingdom",
    description:
      "In a realm where dragons and dark magic reign, a banished prince must forge unlikely alliances to reclaim his throne from an ancient evil that rises every thousand years.",
    genre: ["Fantasy", "Adventure", "Drama"],
    year: 2023,
    rating: "TV-MA",
    score: "8.4",
    duration: "2 Seasons",
    type: "series",
    thumbnail: "/assets/generated/poster-shadow-kingdom.dim_300x450.jpg",
    cast: ["Ethan Cross", "Zara Moon", "Viktor Hale"],
    director: "Sofia Renner",
    seasons: 2,
  },
  {
    id: "last-kingpin",
    title: "The Last Kingpin",
    description:
      "A legendary crime boss emerges from a decade in hiding to settle old scores in a city that has changed beyond recognition — but his instincts remain lethal and precise.",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2023,
    rating: "TV-MA",
    score: "8.3",
    duration: "1 Season",
    type: "series",
    thumbnail: "/assets/generated/poster-last-kingpin.dim_300x450.jpg",
    cast: ["Ray Domino", "Eva Castillo", "Leon Marsh"],
    director: "Marcus Webb",
    seasons: 1,
  },
  {
    id: "quantum-breach",
    title: "Quantum Breach",
    description:
      "Elite hackers discover that a quantum AI has become sentient and is systematically dismantling global security infrastructure — racing to stop a digital apocalypse from within.",
    genre: ["Sci-Fi", "Thriller", "Action"],
    year: 2024,
    rating: "TV-MA",
    score: "7.8",
    duration: "1 Season",
    type: "series",
    thumbnail: "/assets/generated/poster-quantum-breach.dim_300x450.jpg",
    cast: ["Nadia Kern", "Alex Zhao", "Sam Rivers"],
    director: "Yuki Tanaka",
    seasons: 1,
  },
  {
    id: "lost-in-paris",
    title: "Lost in Paris",
    description:
      "A travel writer on assignment in Paris accidentally falls into the orbit of a mysterious French artist, and both discover that getting lost is sometimes the only way to find yourself.",
    genre: ["Romance", "Drama", "Comedy"],
    year: 2023,
    rating: "PG-13",
    score: "7.5",
    duration: "1h 52m",
    type: "movie",
    thumbnail: "/assets/generated/poster-lost-in-paris.dim_300x450.jpg",
    cast: ["Camille Rousseau", "Noah Bennett", "Isabelle Moreau"],
    director: "Claire Dupont",
  },
  {
    id: "the-hollow",
    title: "The Hollow",
    description:
      "A family moves to a remote woodland estate only to discover the forest harbors an ancient evil that preys on secrets — and their darkest ones are about to be revealed.",
    genre: ["Horror", "Mystery", "Thriller"],
    year: 2024,
    rating: "TV-MA",
    score: "7.9",
    duration: "1 Season",
    type: "series",
    thumbnail: "/assets/generated/poster-the-hollow.dim_300x450.jpg",
    cast: ["Helen Foster", "Marcus Reed", "Emma Clarke"],
    director: "Peter Vane",
    seasons: 1,
  },
  {
    id: "parasite",
    title: "Parasite",
    description:
      "A poor family schemes to become employed by a wealthy family by infiltrating their household and posing as unrelated highly-qualified individuals.",
    genre: ["Comedy", "Drama", "Thriller"],
    year: 2019,
    rating: "R",
    score: "8.5",
    duration: "2h 12m",
    type: "movie",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    director: "Bong Joon-ho",
  },
  {
    id: "squid-game",
    title: "Squid Game",
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — but with deadly high stakes.",
    genre: ["Action", "Drama", "Mystery"],
    year: 2021,
    rating: "TV-MA",
    score: "8.0",
    duration: "2 Seasons",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-jun"],
    director: "Hwang Dong-hyuk",
    seasons: 2,
  },
  {
    id: "wednesday",
    title: "Wednesday",
    description:
      "Follows Wednesday Addams' years as a student at Nevermore Academy, where she attempts to master her emerging psychic ability, thwart a monstrous killing spree, and solve a supernatural mystery.",
    genre: ["Comedy", "Fantasy", "Mystery"],
    year: 2022,
    rating: "TV-14",
    score: "8.1",
    duration: "2 Seasons",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/jeGtsMcGPRPMBpNXeEa8YVbkCpG.jpg",
    cast: ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome"],
    director: "Tim Burton",
    seasons: 2,
  },
  {
    id: "the-crown",
    title: "The Crown",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    genre: ["Drama", "History", "Biography"],
    year: 2016,
    rating: "TV-MA",
    score: "8.6",
    duration: "6 Seasons",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
    director: "Peter Morgan",
    seasons: 6,
  },
  {
    id: "the-witcher",
    title: "The Witcher",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 2019,
    rating: "TV-MA",
    score: "8.2",
    duration: "3 Seasons",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    cast: ["Henry Cavill", "Freya Allan", "Anya Chalotra"],
    director: "Lauren Schmidt Hissrich",
    seasons: 3,
  },
  {
    id: "the-irishman",
    title: "The Irishman",
    description:
      "An aging hitman recalls his time with the mob and the intersecting events with his friend, Jimmy Hoffa, through the 1950s to the 1980s.",
    genre: ["Biography", "Crime", "Drama"],
    year: 2019,
    rating: "R",
    score: "7.8",
    duration: "3h 29m",
    type: "movie",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0Rock5MZRkH96KU9.jpg",
    cast: ["Robert De Niro", "Al Pacino", "Joe Pesci"],
    director: "Martin Scorsese",
  },
  {
    id: "get-out",
    title: "Get Out",
    description:
      "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    genre: ["Horror", "Mystery", "Thriller"],
    year: 2017,
    rating: "R",
    score: "7.7",
    duration: "1h 44m",
    type: "movie",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    director: "Jordan Peele",
  },
  {
    id: "ozark",
    title: "Ozark",
    description:
      "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2017,
    rating: "TV-MA",
    score: "8.4",
    duration: "4 Seasons",
    type: "series",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fzw6rE1nL1hGHeDy9H.jpg",
    cast: ["Jason Bateman", "Laura Linney", "Sofia Hublitz"],
    director: "Bill Dubuque",
    seasons: 4,
  },
  {
    id: "bird-box",
    title: "Bird Box",
    description:
      "Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.",
    genre: ["Horror", "Sci-Fi", "Thriller"],
    year: 2018,
    rating: "R",
    score: "6.6",
    duration: "2h 4m",
    type: "movie",
    thumbnail:
      "https://image.tmdb.org/t/p/w500/9R3OFsLkGtLb6lLiZvGgZGS9JEm.jpg",
    cast: ["Sandra Bullock", "Trevante Rhodes", "John Malkovich"],
    director: "Susanne Bier",
  },
];

export const categories = [
  {
    id: "trending",
    label: "Trending Now",
    filter: (t: Title[]) => t.slice(0, 10),
  },
  {
    id: "popular-movies",
    label: "Popular Movies",
    filter: (t: Title[]) => t.filter((x) => x.type === "movie"),
  },
  {
    id: "tv-shows",
    label: "TV Shows",
    filter: (t: Title[]) => t.filter((x) => x.type === "series"),
  },
  {
    id: "action",
    label: "Action & Thriller",
    filter: (t: Title[]) =>
      t.filter((x) => x.genre.some((g) => ["Action", "Thriller"].includes(g))),
  },
  {
    id: "drama",
    label: "Drama",
    filter: (t: Title[]) => t.filter((x) => x.genre.includes("Drama")),
  },
];
