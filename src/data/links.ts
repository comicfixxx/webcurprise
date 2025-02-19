
export type Category = 
  | "entertainment" 
  | "education" 
  | "technology" 
  | "business" 
  | "lifestyle" 
  | "gaming"
  | "featured";

export interface MysteryLink {
  title: string;
  description: string;
  url: string;
  category: Category;
  isFeatured?: boolean;
}

export const links: MysteryLink[] = [
  // Entertainment
  {
    title: "Netflix",
    description: "Stream your favorite movies and TV shows on the world's leading streaming platform.",
    url: "https://netflix.com",
    category: "entertainment",
  },
  {
    title: "Spotify",
    description: "Listen to millions of songs, podcasts, and audiobooks on the go.",
    url: "https://spotify.com",
    category: "entertainment",
  },
  {
    title: "YouTube",
    description: "Watch, share, and create videos with the world's largest video platform.",
    url: "https://youtube.com",
    category: "entertainment",
  },
  
  // Education
  {
    title: "Coursera",
    description: "Learn from top universities and companies with online courses and certifications.",
    url: "https://coursera.org",
    category: "education",
  },
  {
    title: "Khan Academy",
    description: "Free world-class education for anyone, anywhere.",
    url: "https://khanacademy.org",
    category: "education",
  },
  {
    title: "edX",
    description: "Access courses from leading institutions worldwide.",
    url: "https://edx.org",
    category: "education",
  },

  // Technology
  {
    title: "GitHub",
    description: "Home to millions of developers and their projects. Build software together.",
    url: "https://github.com",
    category: "technology",
  },
  {
    title: "Stack Overflow",
    description: "Developer community for asking and answering programming questions.",
    url: "https://stackoverflow.com",
    category: "technology",
  },
  {
    title: "TechCrunch",
    description: "Latest technology news and startup coverage.",
    url: "https://techcrunch.com",
    category: "technology",
  },

  // Business
  {
    title: "LinkedIn",
    description: "Professional networking and career development platform.",
    url: "https://linkedin.com",
    category: "business",
  },
  {
    title: "Forbes",
    description: "Business news, investing, and financial information.",
    url: "https://forbes.com",
    category: "business",
  },
  {
    title: "Harvard Business Review",
    description: "Leading destination for management insights and ideas.",
    url: "https://hbr.org",
    category: "business",
  },

  // Lifestyle
  {
    title: "Pinterest",
    description: "Discover and save creative ideas for everything.",
    url: "https://pinterest.com",
    category: "lifestyle",
  },
  {
    title: "Instagram",
    description: "Share and discover photos, videos, and stories from around the world.",
    url: "https://instagram.com",
    category: "lifestyle",
  },
  {
    title: "Medium",
    description: "Platform for reading and writing thought-provoking stories.",
    url: "https://medium.com",
    category: "lifestyle",
  },

  // Gaming
  {
    title: "Twitch",
    description: "Live streaming platform for gamers and creative content.",
    url: "https://twitch.tv",
    category: "gaming",
  },
  {
    title: "Steam",
    description: "Digital distribution platform for PC gaming.",
    url: "https://store.steampowered.com",
    category: "gaming",
  },
  {
    title: "IGN",
    description: "Video game news, reviews, and guides.",
    url: "https://ign.com",
    category: "gaming",
  }
];
