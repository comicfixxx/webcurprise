
import { useState } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { GenerateButton } from "@/components/GenerateButton";
import { LinkCard } from "@/components/LinkCard";
import { Category, MysteryLink, links } from "@/data/links";
import { toast } from "sonner";

const generateRandomLink = (category: Category | null): MysteryLink => {
  const filteredLinks = category
    ? links.filter((link) => link.category === category)
    : links;
  
  return filteredLinks[Math.floor(Math.random() * filteredLinks.length)];
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [generatedLinks, setGeneratedLinks] = useState<MysteryLink[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate a loading state
    setTimeout(() => {
      const newLink = generateRandomLink(selectedCategory);
      
      if (generatedLinks.length > 0 && newLink.url === generatedLinks[0].url) {
        toast.error("Got a duplicate link! Trying again...");
        handleGenerate();
        return;
      }

      setGeneratedLinks((prev) => [newLink, ...prev].slice(0, 5));
      setIsGenerating(false);
      toast.success("New mystery link generated!");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-secondary px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-accent">Mystery Link Generator</h1>
          <p className="text-secondary-foreground/80">
            Discover amazing websites, one click at a time
          </p>
        </div>

        <div className="space-y-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="flex justify-center">
            <GenerateButton onClick={handleGenerate} isGenerating={isGenerating} />
          </div>

          <div className="space-y-4">
            {generatedLinks.map((link, index) => (
              <LinkCard key={`${link.url}-${index}`} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
