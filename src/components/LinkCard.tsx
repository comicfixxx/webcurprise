
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
      className="group p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-reveal"
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground capitalize mb-3">
            {link.category}
          </span>
          <h3 className="text-xl font-semibold text-accent group-hover:text-primary transition-colors">
            {link.title}
          </h3>
          <p className="mt-2 text-secondary-foreground/80">{link.description}</p>
        </div>
        <ExternalLink className="text-accent/50 group-hover:text-primary transition-colors" size={20} />
      </div>
    </a>
  );
}
