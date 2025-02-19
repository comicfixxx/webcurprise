
import { Sparkles } from "lucide-react";

interface GenerateButtonProps {
  onClick: () => void;
  isGenerating: boolean;
}

export function GenerateButton({ onClick, isGenerating }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isGenerating}
      className="group relative w-full sm:w-auto px-6 sm:px-8 py-4 bg-primary hover:bg-primary-hover active:bg-primary-hover text-primary-foreground rounded-lg transition-all duration-300 animate-float disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
    >
      <span className="flex items-center justify-center gap-2 text-base sm:text-lg">
        <Sparkles className="w-5 h-5" />
        {isGenerating ? "Discovering..." : "Generate Mystery Link"}
      </span>
    </button>
  );
}
