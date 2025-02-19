
import { Category } from "@/data/links";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

const categories: Category[] = ["productivity", "learning", "entertainment", "tools"];

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center px-2">
      <button
        onClick={() => onSelectCategory(null)}
        className={cn(
          "px-4 py-2 sm:py-1 rounded-full text-sm transition-colors touch-manipulation",
          "border border-primary hover:bg-primary/10 active:bg-primary/20",
          !selectedCategory && "bg-primary text-primary-foreground"
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "px-4 py-2 sm:py-1 rounded-full text-sm capitalize transition-colors touch-manipulation",
            "border border-primary hover:bg-primary/10 active:bg-primary/20",
            selectedCategory === category && "bg-primary text-primary-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
