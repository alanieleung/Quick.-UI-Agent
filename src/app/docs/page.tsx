"use client";

import Header from "../components/Header";
import { BookOpen, Code, Zap, Palette, MessageSquare, Lightbulb, ArrowRight, CheckCircle, AlertCircle, Terminal } from "lucide-react";

const SECTIONS = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <BookOpen className="w-5 h-5" />,
    content: [
      {
        title: "What is QuickUI Agent?",
        text: "QuickUI Agent is an AI-powered UI generator that creates beautiful, responsive HTML components using Tailwind CSS. Simply describe what you want, and the AI will generate production-ready code.",
      },
      {
        title: "How to Use",
        steps: [
          "Enter a description of the UI component you want",
          "Select your preferred AI provider (StepFun or OpenAI)",
          "Choose a design style (Modern, Minimal, Glassmorphism, etc.)",
          "Click Generate and watch the AI create your component",
          "Preview, edit, and copy the generated code",
        ],
      },
    ],
  },
  {
    id: "ai-providers",
    title: "AI Providers",
    icon: <Zap className="w-5 h-5" />,
    content: [
      {
        title: "StepFun (階躍星辰)",
        text: "More affordable option with excellent Chinese language support. Uses the step-1-8k model. Great for budget-conscious users.",
        pros: ["Lower cost", "Good Chinese support", "Fast response"],
      },
      {
        title: "OpenAI GPT-4o",
        text: "Premium option with state-of-the-art capabilities. Better at understanding complex design requirements and generating high-quality code.",
        pros: ["Superior code quality", "Better design understanding", "More consistent output"],
      },
    ],
  },
  {
    id: "design-styles",
    title: "Design Styles",
    icon: <Palette className="w-5 h-5" />,
    content: [
      {
        title: "Modern Minimal",
        text: "Clean, contemporary design with generous whitespace, subtle shadows, and refined typography. Uses indigo/slate color palette.",
      },
      {
        title: "Ultra Minimal",
        text: "Maximum whitespace, thin borders, and pure elegance. Focus on content readability without visual distractions.",
      },
      {
        title: "Glassmorphism",
        text: "Modern glass-like effect with backdrop blur, semi-transparent backgrounds, and vibrant gradient backdrops.",
      },
      {
        title: "Vibrant Gradients",
        text: "Bold, colorful designs with rich gradients, gradient text, and dynamic color transitions.",
      },
      {
        title: "Soft UI (Neumorphism)",
        text: "Tactile, soft design with subtle shadows creating depth and 3D-like button appearances.",
      },
    ],
  },
  {
    id: "prompt-tips",
    title: "Prompt Writing Tips",
    icon: <Lightbulb className="w-5 h-5" />,
    content: [
      {
        title: "Be Specific",
        text: "Instead of 'a button', try 'a primary CTA button with rounded corners, gradient background, and hover animation'.",
      },
      {
        title: "Include Context",
        text: "Mention the purpose: 'A pricing card for SaaS product' or 'A login form for mobile app'.",
      },
      {
        title: "Describe Interactions",
        text: "Add hover effects, transitions, or animations: 'with hover scale effect and smooth color transition'.",
      },
      {
        title: "Specify Colors",
        text: "Mention color preferences: 'using blue and purple gradient' or 'dark mode with neon accents'.",
      },
    ],
  },
  {
    id: "examples",
    title: "Example Prompts",
    icon: <Code className="w-5 h-5" />,
    content: [
      {
        title: "Pricing Cards",
        code: "Three pricing cards for SaaS product: Starter ($9), Pro ($29), Enterprise ($99). Include feature lists, popular badge on Pro, gradient backgrounds, and hover lift effects.",
      },
      {
        title: "Login Form",
        code: "Modern login form with email/password fields, 'Remember me' checkbox, 'Forgot password' link, Google/GitHub social login buttons, and sign up link. Dark theme with purple accents.",
      },
      {
        title: "Dashboard Stats",
        code: "Dashboard header with 4 stat cards: Total Revenue, Active Users, Conversion Rate, New Signups. Include trend indicators, icons, and gradient backgrounds. Glassmorphism style.",
      },
      {
        title: "Testimonial Section",
        code: "Customer testimonial card with 5-star rating, quote text, customer avatar, name, and company. Include decorative quote marks and subtle shadow.",
      },
    ],
  },
];

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 space-y-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                Documentation
              </p>
              {SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {section.icon}
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <main className="lg:col-span-9">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-white mb-4">
                Documentation
              </h1>
              <p className="text-gray-400 text-lg">
                Learn how to use QuickUI Agent effectively and create stunning UI components.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-16">
              {SECTIONS.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((item, index) => (
                      <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          {item.title}
                        </h3>
                        
                        {item.text && (
                          <p className="text-gray-400 mb-4">
                            {item.text}
                          </p>
                        )}

                        {item.steps && (
                          <ol className="space-y-2">
                            {item.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start gap-3 text-gray-400">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs flex items-center justify-center font-medium">
                                  {stepIndex + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        )}

                        {item.pros && (
                          <ul className="space-y-2">
                            {item.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="flex items-center gap-2 text-gray-400">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.code && (
                          <div className="mt-4 p-4 bg-gray-950 rounded-lg border border-gray-800">
                            <code className="text-sm text-blue-300 font-mono">
                              {item.code}
                            </code>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Ready to create?
              </h2>
              <p className="text-gray-400 mb-6">
                Start generating beautiful UI components with AI now.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Go to Generator
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>
            Need more help? Check out the GitHub repository or contact support.
          </p>
        </div>
      </footer>
    </div>
  );
}
