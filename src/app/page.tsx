"use client";

import { useState } from "react";
import Header from "./components/Header";
import PromptInput from "./components/PromptInput";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import { Code2, Eye, Sparkles, Zap, Bot, Palette, Wand2, Layers, Box } from "lucide-react";

type Provider = "stepfun" | "openai";
type Style = "modern" | "minimal" | "glassmorphism" | "gradient" | "neumorphism";

const DEFAULT_CODE = `<!-- Welcome to QuickUI Agent -->
<!-- Enter a prompt above to generate UI components -->

<div class="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gradient-to-br from-slate-50 to-slate-100">
  <div class="w-24 h-24 mb-8 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/25">
    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
  <h1 class="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
    QuickUI Agent
  </h1>
  <p class="text-lg text-slate-600 max-w-md mb-10">
    Describe the UI component you want, and let AI generate stunning designs for you.
  </p>
  <div class="flex gap-4">
    <button class="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300">
      Get Started
    </button>
    <button class="px-8 py-3.5 bg-white text-slate-700 rounded-xl font-medium shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 border border-slate-200 hover:scale-105 transition-all duration-300">
      Learn More
    </button>
  </div>
</div>`;

const PROVIDER_CONFIG = {
  stepfun: {
    name: "StepFun",
    description: "More Affordable",
    icon: Bot,
    color: "from-green-500 to-emerald-600",
  },
  openai: {
    name: "OpenAI",
    description: "GPT-4o - More Powerful",
    icon: Zap,
    color: "from-blue-500 to-purple-600",
  },
};

const STYLE_CONFIG: Record<Style, { name: string; description: string; icon: typeof Palette; prompt: string }> = {
  modern: {
    name: "Modern",
    description: "Modern Minimal",
    icon: Box,
    prompt: "Clean, modern design with generous whitespace, subtle shadows, and refined typography. Use slate/indigo color palette with rounded-xl corners.",
  },
  minimal: {
    name: "Minimal",
    description: "Ultra Minimal",
    icon: Layers,
    prompt: "Ultra-minimalist design with maximum whitespace, thin borders, subtle grays. Focus on content and readability. No gradients, pure elegance.",
  },
  glassmorphism: {
    name: "Glass",
    description: "Glassmorphism",
    icon: Wand2,
    prompt: "Glassmorphism style with backdrop-blur, semi-transparent backgrounds (bg-white/70), subtle borders (border-white/20), and vibrant gradient backgrounds behind the glass elements.",
  },
  gradient: {
    name: "Gradient",
    description: "Vibrant Gradients",
    icon: Palette,
    prompt: "Bold, vibrant gradients (from-indigo-500 via-purple-500 to-pink-500), colorful accents, gradient text, gradient buttons, and dynamic color transitions.",
  },
  neumorphism: {
    name: "Soft UI",
    description: "Soft UI",
    icon: Box,
    prompt: "Neumorphism/Soft UI style with soft shadows (shadow-[4px_4px_10px_#e2e8f0,-4px_-4px_10px_#ffffff]), subtle depth, and tactile button appearances on light gray backgrounds.",
  },
};

export default function Home() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<"split" | "code" | "preview">("split");
  const [lastPrompt, setLastPrompt] = useState("");
  const [provider, setProvider] = useState<Provider>("stepfun");
  const [style, setStyle] = useState<Style>("modern");

  const generateUI = async (prompt: string) => {
    setIsGenerating(true);
    setLastPrompt(prompt);

    const stylePrompt = STYLE_CONFIG[style].prompt;
    const fullPrompt = `${prompt}. Design style: ${stylePrompt}. Make it look premium, polished, and production-ready like top-tier SaaS products (Linear, Vercel, Stripe quality).`;

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: fullPrompt, provider }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to generate");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let generatedCode = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          generatedCode += decoder.decode(value, { stream: true });
          setCode(generatedCode);
        }
      }
    } catch (error: any) {
      console.error("Generation error:", error);
      alert(error.message || "Failed to generate UI. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerate = () => {
    if (lastPrompt) {
      generateUI(lastPrompt);
    }
  };

  const currentProvider = PROVIDER_CONFIG[provider];
  const ProviderIcon = currentProvider.icon;
  const currentStyle = STYLE_CONFIG[style];
  const StyleIcon = currentStyle.icon;

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-400">AI-Powered UI Generator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Generate Stunning UI Components
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Describe what you need, choose a design style, and let AI create beautiful,
            production-ready components.
          </p>
        </div>

        {/* Controls */}
        <div className="max-w-4xl mx-auto mb-6 space-y-4">
          {/* Provider Selection */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm text-gray-400 whitespace-nowrap">AI Provider:</span>
            <div className="flex items-center gap-2 p-1 bg-gray-900 rounded-lg border border-gray-800">
              {(Object.keys(PROVIDER_CONFIG) as Provider[]).map((key) => {
                const config = PROVIDER_CONFIG[key];
                const Icon = config.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setProvider(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      provider === key
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                    title={config.description}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{config.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Style Selection */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm text-gray-400 whitespace-nowrap">Design Style:</span>
            <div className="flex flex-wrap items-center justify-center gap-2 p-1 bg-gray-900 rounded-lg border border-gray-800">
              {(Object.keys(STYLE_CONFIG) as Style[]).map((key) => {
                const config = STYLE_CONFIG[key];
                const Icon = config.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setStyle(key)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      style === key
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                    title={config.description}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{config.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${currentProvider.color} text-white text-xs font-medium`}>
              <ProviderIcon className="w-3.5 h-3.5" />
              <span>{currentProvider.name}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-medium">
              <StyleIcon className="w-3.5 h-3.5" />
              <span>{currentStyle.name}</span>
            </div>
          </div>

          <PromptInput onSubmit={generateUI} isGenerating={isGenerating} />
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-1 p-1 bg-gray-900 rounded-lg border border-gray-800">
            <button
              onClick={() => setActiveTab("split")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "split"
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Split</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "code"
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Code</span>
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "preview"
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
          </div>
        </div>

        {/* Editor & Preview */}
        <div
          className={`grid gap-6 ${
            activeTab === "split"
              ? "grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}
          style={{ height: "calc(100vh - 580px)", minHeight: "500px" }}
        >
          {(activeTab === "split" || activeTab === "code") && (
            <CodeEditor
              code={code}
              onChange={setCode}
              onRegenerate={handleRegenerate}
              isGenerating={isGenerating}
            />
          )}
          {(activeTab === "split" || activeTab === "preview") && (
            <Preview code={code} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>
            Copyright @ Alanie Leung.
          </p>
        </div>
      </footer>
    </div>
  );
}
