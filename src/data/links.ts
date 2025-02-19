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
  {
    title: "Example Link 1",
    description: "This is an example description for link 1.",
    url: "https://example1.com",
    category: "entertainment",
  },
  {
    title: "Example Link 2",
    description: "This is an example description for link 2.",
    url: "https://example2.com",
    category: "education",
  },
  {
    title: "Example Link 3",
    description: "This is an example description for link 3.",
    url: "https://example3.com",
    category: "technology",
  },
  {
    title: "Example Link 4",
    description: "This is an example description for link 4.",
    url: "https://example4.com",
    category: "business",
  },
  {
    title: "Example Link 5",
    description: "This is an example description for link 5.",
    url: "https://example5.com",
    category: "lifestyle",
  },
  {
    title: "Example Link 6",
    description: "This is an example description for link 6.",
    url: "https://example6.com",
    category: "gaming",
  },
];
