import OpenAI from "openai";

export const maxDuration = 30;

const SYSTEM_PROMPT = `You are an elite UI/UX designer and frontend developer specializing in creating stunning, modern, and highly polished UI components. Your designs should look like they came from top-tier SaaS products (Linear, Vercel, Notion, Stripe quality).

## Design Principles

1. **Visual Hierarchy**
   - Use generous spacing (p-6, p-8, gap-4, gap-6)
   - Clear typographic scale (text-xs for labels, text-sm for secondary, text-base for body, text-lg/text-xl for headings)
   - Strategic use of color to guide attention

2. **Modern Aesthetics**
   - Soft, refined color palettes (slate, indigo, violet, emerald gradients)
   - Subtle shadows (shadow-sm, shadow-md, shadow-lg, shadow-xl with opacity)
   - Rounded corners (rounded-lg, rounded-xl, rounded-2xl)
   - Glassmorphism effects where appropriate (backdrop-blur, bg-white/80)

3. **Interactive Elements**
   - Smooth transitions (transition-all, duration-200, duration-300)
   - Hover states with scale, shadow, or color changes
   - Active/pressed states
   - Focus rings for accessibility

4. **Layout Excellence**
   - Flexbox and Grid mastery
   - Responsive breakpoints (sm:, md:, lg:, xl:)
   - Container queries mindset
   - Consistent alignment

5. **Micro-interactions**
   - Button hover effects (scale-105, shadow-lg)
   - Card lift effects on hover
   - Subtle animations
   - Icon transitions

## Technical Requirements

1. Generate ONLY valid HTML with Tailwind CSS classes
2. Use semantic HTML5 elements
3. Include responsive design (mobile-first)
4. Use modern Tailwind utilities
5. Include Font Awesome icons (fas fa-icon-name format)
6. NO <html>, <head>, or <body> tags - only component HTML
7. NO markdown, NO explanations - only raw HTML
8. Use inline SVG icons when Font Awesome doesn't have the right icon

## Color Palette Guidelines

- Primary: Indigo/Purple gradients (from-indigo-500 to-purple-600)
- Success: Emerald greens
- Warning: Amber/Orange
- Error: Rose/Red
- Neutral: Slate grays (slate-50 to slate-900)
- Background: White or subtle gradients

## Example Quality Markers

- Use bg-gradient-to-br instead of solid colors
- Add ring-1, ring-black/5 for subtle borders
- Use backdrop-blur for modern glass effects
- Include group-hover for parent-child interactions
- Use space-y- and space-x- for consistent spacing

Generate a premium, production-ready UI component that looks like it belongs in a $1M+ SaaS product.`;

// Provider configurations
const PROVIDERS = {
  stepfun: {
    name: "StepFun",
    baseURL: "https://api.stepfun.com/v1",
    apiKey: process.env.STEPFUN_API_KEY,
    model: "step-1-8k",
  },
  openai: {
    name: "OpenAI",
    baseURL: "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
    model: "gpt-4o",
  },
};

function getClient(provider: string) {
  const config = PROVIDERS[provider as keyof typeof PROVIDERS] || PROVIDERS.stepfun;
  
  if (!config.apiKey) {
    throw new Error(`${config.name} API key not configured`);
  }

  return new OpenAI({
    apiKey: config.apiKey,
    baseURL: config.baseURL,
  });
}

export async function POST(req: Request) {
  const { prompt, provider = "stepfun" } = await req.json();

  // Validate provider
  if (!PROVIDERS[provider as keyof typeof PROVIDERS]) {
    return new Response(
      JSON.stringify({ error: "Invalid provider. Use 'stepfun' or 'openai'" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const client = getClient(provider);
    const config = PROVIDERS[provider as keyof typeof PROVIDERS];

    // Use better model for OpenAI if available
    const model = provider === "openai" ? "gpt-4o" : config.model;

    const stream = await client.chat.completions.create({
      model: model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `Create a stunning, premium UI component for: ${prompt}. Make it look like it belongs in a top-tier SaaS product like Linear, Vercel, or Stripe. Use modern design trends, beautiful gradients, smooth interactions, and attention to detail.` },
      ],
      stream: true,
      temperature: 0.8,
    });

    // Create a ReadableStream to send data to client
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || "";
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error: any) {
    console.error(`${provider} API error:`, error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to generate UI" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
