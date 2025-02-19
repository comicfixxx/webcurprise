
export type Category = "productivity" | "learning" | "entertainment" | "tools";

export interface MysteryLink {
  url: string;
  title: string;
  description: string;
  category: Category;
}

export const links: MysteryLink[] = [
  {
    url: "https://notion.so",
    title: "Notion",
    description: "All-in-one workspace for notes, tasks, and collaboration",
    category: "productivity",
  },
  {
    url: "https://coursera.org",
    title: "Coursera",
    description: "Learn skills from world-class universities and companies",
    category: "learning",
  },
  {
    url: "https://chess.com",
    title: "Chess.com",
    description: "Play chess online and improve your skills",
    category: "entertainment",
  },
  {
    url: "https://canva.com",
    title: "Canva",
    description: "Create beautiful designs easily",
    category: "tools",
  },
  {
    url: "https://duolingo.com",
    title: "Duolingo",
    description: "Learn languages for free",
    category: "learning",
  },
  {
    url: "https://todoist.com",
    title: "Todoist",
    description: "Organize your tasks and life",
    category: "productivity",
  },
  {
    url: "https://spotify.com",
    title: "Spotify",
    description: "Music and podcast streaming",
    category: "entertainment",
  },
  {
    url: "https://figma.com",
    title: "Figma",
    description: "Collaborative interface design tool",
    category: "tools",
  },
];
