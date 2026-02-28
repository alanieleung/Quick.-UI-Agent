# Contributing to QuickUI Agent

First off, thank you for considering contributing to QuickUI Agent! It's people like you that make this tool better for everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our commitment to:

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Respect different viewpoints and experiences

## 🚀 Getting Started

### Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/quickui-agent.git
cd quickui-agent

# Add upstream remote
git remote add upstream https://github.com/original/quickui-agent.git

# Install dependencies
npm install

# Create a branch for your feature
git checkout -b feature/your-feature-name
```

## 💡 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating a bug report, please:

1. Check if the issue already exists
2. Use the latest version
3. Collect relevant information (browser, OS, steps to reproduce)

**Template:**

```markdown
**Description:**
Clear description of the bug

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior:**
What you expected to happen

**Screenshots:**
If applicable

**Environment:**
- OS: [e.g. macOS, Windows]
- Browser: [e.g. Chrome, Safari]
- Version: [e.g. 22]
```

### 💡 Suggesting Features

Feature requests are welcome! Please provide:

- Clear use case
- Expected behavior
- Why this would be useful
- Possible implementation approach

### 🎨 Adding UI Templates

Want to add a new template? Great!

1. **Design Guidelines:**
   - Use Tailwind CSS classes only
   - Ensure responsive design
   - Include hover/interactive states
   - Follow accessibility best practices

2. **Template Structure:**

```typescript
{
  id: "unique-id",
  name: "Template Name",
  description: "Brief description",
  category: "Marketing" | "E-commerce" | "Dashboard" | "Forms" | "Social" | "Navigation",
  icon: <IconComponent />,
  code: `<div class="...">...</div>`
}
```

3. **Add to:** `src/app/templates/page.tsx`

### 🔧 Code Contributions

Areas where help is needed:

- [ ] Bug fixes
- [ ] Performance improvements
- [ ] New features
- [ ] Documentation
- [ ] Tests
- [ ] Translations

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Environment Variables

```bash
cp .env.example .env.local

# Add your API keys:
# STEPFUN_API_KEY=your_key
# OPENAI_API_KEY=your_key
```

### Running Locally

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

### Testing Changes

1. Test in multiple browsers
2. Check responsive design
3. Verify both AI providers work
4. Test all design styles

## 📝 Style Guidelines

### TypeScript

```typescript
// Use explicit types
function generateUI(prompt: string): Promise<string> {
  // ...
}

// Use interfaces for objects
interface Template {
  id: string;
  name: string;
  code: string;
}

// Avoid 'any'
// ❌ Bad
const data: any = response;

// ✅ Good
const data: GenerationResponse = response;
```

### React Components

```typescript
// Functional components with hooks
"use client";

import { useState } from "react";

interface Props {
  title: string;
  onClick: () => void;
}

export default function MyComponent({ title, onClick }: Props) {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={onClick}>
      {title}: {count}
    </button>
  );
}
```

### Tailwind CSS

```html
<!-- Use consistent ordering -->
<!-- Layout → Spacing → Sizing → Typography → Visuals -->
<div class="flex items-center gap-4 p-4 w-full text-sm text-gray-700 bg-white rounded-lg shadow-md">

<!-- Use arbitrary values sparingly -->
<!-- ❌ Bad -->
<div class="w-[123px] h-[45px]">

<!-- ✅ Good -->
<div class="w-32 h-12">
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `CodeEditor.tsx`)
- Hooks: `camelCase.ts` (e.g., `useGenerator.ts`)
- Utilities: `camelCase.ts` (e.g., `formatCode.ts`)
- Styles: `kebab-case.css` (e.g., `globals.css`)

## 💬 Commit Messages

Use conventional commits format:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, semicolons)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Build process, dependencies

**Examples:**

```bash
feat(templates): add new dashboard stats template

fix(generator): resolve streaming response error

docs(readme): update installation instructions

style(components): format with prettier
```

## 🔄 Pull Request Process

1. **Update Documentation**
   - Add JSDoc comments for functions
   - Update README if needed
   - Add to CHANGELOG

2. **Before Submitting**
   ```bash
   # Run linter
   npm run lint
   
   # Build project
   npm run build
   
   # Test all features
   ```

3. **PR Template**

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Refactoring

## Testing
- [ ] Tested locally
- [ ] Tested on Vercel preview
- [ ] Checked responsive design

## Screenshots
If applicable

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

4. **Review Process**
   - Maintainers will review within 48 hours
   - Address requested changes
   - Squash commits if requested

## 🎯 Priority Areas

We especially welcome contributions in:

1. **Performance Optimization**
   - Bundle size reduction
   - Rendering optimization
   - Caching strategies

2. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader support

3. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests

4. **Documentation**
   - API documentation
   - Usage examples
   - Video tutorials

## 🏆 Recognition

Contributors will be:

- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Added to our Hall of Fame

## ❓ Questions?

- Open a [Discussion](../../discussions)
- Join our [Discord](https://discord.gg/quickui)
- Email: contributors@quickui-agent.com

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)

---

Thank you for contributing! 🎉
