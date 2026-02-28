"use client";

import { useState } from "react";
import { Send, Wand2, Loader2 } from "lucide-react";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isGenerating: boolean;
}

const EXAMPLE_PROMPTS = [
  "A modern pricing card with 3 tiers",
  "A login form with social buttons",
  "A hero section with CTA buttons",
  "A testimonial carousel",
  "A feature grid with icons",
];

export default function PromptInput({ onSubmit, isGenerating }: PromptInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isGenerating) {
      onSubmit(prompt.trim());
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Wand2 className="absolute left-4 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the UI component you want to generate..."
            className="w-full pl-12 pr-32 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            disabled={isGenerating}
          />
          <button
            type="submit"
            disabled={!prompt.trim() || isGenerating}
            className="absolute right-2 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="hidden sm:inline">Generating...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Generate</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Example Prompts */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-sm text-gray-500">Try:</span>
        {EXAMPLE_PROMPTS.map((example) => (
          <button
            key={example}
            onClick={() => setPrompt(example)}
            disabled={isGenerating}
            className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}
