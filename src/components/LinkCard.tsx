
import { MysteryLink } from "@/data/links";
import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  link: MysteryLink;
}

export function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 sm:p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-reveal touch-manipulation"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground capitalize mb-2 sm:mb-3 touch-manipulation">
            {link.category}
          </span>
          <h3 className="text-lg sm:text-xl font-semibold text-accent group-hover:text-primary transition-colors line-clamp-2">
            {link.title}
          </h3>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-secondary-foreground/80 line-clamp-2">
            {link.description}
          </p>
        </div>
        <ExternalLink className="text-accent/50 group-hover:text-primary transition-colors flex-shrink-0" size={20} />
      </div>
    </a>
  );
}
