"use client";

import { useState } from "react";
import Header from "../components/Header";
import TemplatePreview from "../components/TemplatePreview";
import { Search, Copy, Check, Eye, LayoutGrid, CreditCard, FormInput, BarChart3, ShoppingCart, UserCircle, Mail, Calendar, Settings, FileText, MessageSquare, Bell, Lock, Upload, Image as ImageIcon } from "lucide-react";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  code: string;
}

const CATEGORIES = ["All", "Marketing", "E-commerce", "Dashboard", "Forms", "Social", "Navigation"];

const TEMPLATES: Template[] = [
  {
    id: "hero-section",
    name: "Hero Section",
    description: "A stunning hero section with headline, subtext, and CTA buttons",
    category: "Marketing",
    icon: <LayoutGrid className="w-6 h-6" />,
    code: `<section class="relative min-h-[400px] flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
  <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
  <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
    <span class="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
      ✨ Introducing QuickUI Agent
    </span>
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
      Build Beautiful UI<br/>with AI
    </h1>
    <p class="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
      Generate stunning, responsive UI components in seconds. Just describe what you want, and let AI do the magic.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-xl">
        Get Started Free
      </button>
      <button class="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
        View Templates
      </button>
    </div>
    <div class="mt-12 flex items-center justify-center gap-8 text-white/60 text-sm">
      <div class="flex items-center gap-2">
        <i class="fas fa-check-circle"></i>
        <span>No credit card</span>
      </div>
      <div class="flex items-center gap-2">
        <i class="fas fa-check-circle"></i>
        <span>Free forever</span>
      </div>
      <div class="flex items-center gap-2">
        <i class="fas fa-check-circle"></i>
        <span>Unlimited components</span>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: "pricing-cards",
    name: "Pricing Cards",
    description: "Three-tier pricing cards with features and popular plan badge",
    category: "Marketing",
    icon: <CreditCard className="w-6 h-6" />,
    code: `<div class="p-8 bg-gray-50 min-h-[400px] flex items-center justify-center">
  <div class="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
    <!-- Starter -->
    <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div class="text-sm font-medium text-gray-500 mb-2">Starter</div>
      <div class="flex items-baseline gap-1 mb-4">
        <span class="text-4xl font-bold text-gray-900">$9</span>
        <span class="text-gray-500">/month</span>
      </div>
      <p class="text-gray-600 text-sm mb-6">Perfect for individuals and small projects.</p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-center gap-3 text-sm text-gray-700">
          <i class="fas fa-check text-green-500"></i> 5 Projects
        </li>
        <li class="flex items-center gap-3 text-sm text-gray-700">
          <i class="fas fa-check text-green-500"></i> 10GB Storage
        </li>
        <li class="flex items-center gap-3 text-sm text-gray-700">
          <i class="fas fa-check text-green-500"></i> Basic Analytics
        </li>
        <li class="flex items-center gap-3 text-sm text-gray-400">
          <i class="fas fa-times"></i> Priority Support
        </li>
      </ul>
      <button class="w-full py-3 px-4 bg-gray-100 text-gray-900 rounded-xl font-medium hover:bg-gray-200 transition-colors">
        Get Started
      </button>
    </div>
    
    <!-- Pro -->
    <div class="bg-gradient-to-b from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-2xl transform scale-105 relative">
      <div class="absolute -top-3 left-1/2 -translate-x-1/2">
        <span class="px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">MOST POPULAR</span>
      </div>
      <div class="text-sm font-medium text-white/80 mb-2">Pro</div>
      <div class="flex items-baseline gap-1 mb-4">
        <span class="text-4xl font-bold text-white">$29</span>
        <span class="text-white/70">/month</span>
      </div>
      <p class="text-white/80 text-sm mb-6">For growing teams and businesses.</p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-center gap-3 text-sm text-white">
          <i class="fas fa-check text-amber-300"></i> Unlimited Projects
        </li>
        <li class="flex items-center gap-3 text-sm text-white">
          <i class="fas fa-check text-amber-300"></i> 100GB Storage
        </li>
        <li class="flex items-center gap-3 text-sm text-white">
          <i class="fas fa-check text-amber-300"></i> Advanced Analytics
        </li>
        <li class="flex items-center gap-3 text-sm text-white">
          <i class="fas fa-check text-amber-300"></i> Priority Support
        </li>
      </ul>
      <button class="w-full py-3 px-4 bg-white text-indigo-600 rounded-xl font-medium hover:bg-white/90 transition-colors shadow-lg">
        Get Started
      </button>
    </div>
    
    <!-- Enterprise -->
    <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div class="text-sm font-medium text-gray-500 mb-2">Enterprise</div>
      <div class="flex items-baseline gap-1 mb-4">
        <span class="text-4xl font-bold text-gray-900">$99</span>
        <span class="text-gray-500">/month</span>
      </div>
      <p class="text-gray-600 text-sm mb-6">For large organizations with custom needs.</p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-center gap-3 text-sm text-gray-700">
          <i class="fas fa-check text-green-500"></i> Everything in Pro
        </li>
        <li class="flex items-center gap-3 text-sm text-gray-700">
          <i class="fas fa-check text-green-500"></i> Unlimited Storage
        </li>
        <li class="flex items-center gap-3 text-sm text-gray-700">
          <i class="fas fa-check text-green-500"></i> Custom Integrations
        </li>
        <li class="flex items-center gap-3 text-sm text-gray-700">
          <i class="fas fa-check text-green-500"></i> 24/7 Phone Support
        </li>
      </ul>
      <button class="w-full py-3 px-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
        Contact Sales
      </button>
    </div>
  </div>
</div>`,
  },
  {
    id: "login-form",
    name: "Login Form",
    description: "Clean login form with social auth options",
    category: "Forms",
    icon: <Lock className="w-6 h-6" />,
    code: `<div class="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
  <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
    <div class="text-center mb-8">
      <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-bolt text-white text-xl"></i>
      </div>
      <h2 class="text-2xl font-bold text-gray-900">Welcome back</h2>
      <p class="text-gray-500 mt-1">Sign in to your account</p>
    </div>
    
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <div class="relative">
          <i class="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input type="email" placeholder="you@example.com" class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
        </div>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <div class="relative">
          <i class="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input type="password" placeholder="••••••••" class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
        </div>
      </div>
      
      <div class="flex items-center justify-between">
        <label class="flex items-center gap-2">
          <input type="checkbox" class="w-4 h-4 text-indigo-600 rounded border-gray-300" />
          <span class="text-sm text-gray-600">Remember me</span>
        </label>
        <a href="#" class="text-sm text-indigo-600 hover:text-indigo-700">Forgot password?</a>
      </div>
      
      <button type="submit" class="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
        Sign In
      </button>
    </form>
    
    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>
      
      <div class="mt-4 grid grid-cols-2 gap-3">
        <button class="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          <i class="fab fa-google text-red-500"></i>
          <span class="text-sm font-medium text-gray-700">Google</span>
        </button>
        <button class="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          <i class="fab fa-github text-gray-900"></i>
          <span class="text-sm font-medium text-gray-700">GitHub</span>
        </button>
      </div>
    </div>
    
    <p class="mt-6 text-center text-sm text-gray-600">
      Don't have an account? <a href="#" class="text-indigo-600 hover:text-indigo-700 font-medium">Sign up</a>
    </p>
  </div>
</div>`,
  },
  {
    id: "signup-form",
    name: "Signup Form",
    description: "Multi-field registration form with validation",
    category: "Forms",
    icon: <FormInput className="w-6 h-6" />,
    code: `<div class="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
  <div class="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900">Create your account</h2>
      <p class="text-gray-500 mt-1">Start your 14-day free trial</p>
    </div>
    
    <form class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">First name</label>
          <input type="text" placeholder="John" class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Last name</label>
          <input type="text" placeholder="Doe" class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" placeholder="john@company.com" class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Company</label>
        <input type="text" placeholder="Acme Inc." class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input type="password" placeholder="••••••••" class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <div class="mt-2 flex gap-1">
          <div class="h-1 flex-1 bg-red-400 rounded-full"></div>
          <div class="h-1 flex-1 bg-red-400 rounded-full"></div>
          <div class="h-1 flex-1 bg-yellow-400 rounded-full"></div>
          <div class="h-1 flex-1 bg-gray-200 rounded-full"></div>
        </div>
        <p class="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
      </div>
      
      <label class="flex items-start gap-3">
        <input type="checkbox" class="mt-1 w-4 h-4 text-indigo-600 rounded border-gray-300" />
        <span class="text-sm text-gray-600">
          I agree to the <a href="#" class="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" class="text-indigo-600 hover:underline">Privacy Policy</a>
        </span>
      </label>
      
      <button type="submit" class="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
        Create Account
      </button>
    </form>
    
    <p class="mt-4 text-center text-sm text-gray-600">
      Already have an account? <a href="#" class="text-indigo-600 hover:text-indigo-700 font-medium">Sign in</a>
    </p>
  </div>
</div>`,
  },
  {
    id: "dashboard-stats",
    name: "Dashboard Stats",
    description: "Analytics dashboard with stat cards and charts",
    category: "Dashboard",
    icon: <BarChart3 className="w-6 h-6" />,
    code: `<div class="p-6 bg-gray-50 min-h-[400px]">
  <div class="max-w-6xl mx-auto">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p class="text-gray-500">Welcome back! Here's your overview.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-gray-500">Total Revenue</span>
          <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-dollar-sign text-green-600 text-sm"></i>
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">$45,231</div>
        <div class="flex items-center gap-1 mt-1">
          <i class="fas fa-arrow-up text-green-500 text-xs"></i>
          <span class="text-xs text-green-500 font-medium">+12.5%</span>
          <span class="text-xs text-gray-400">vs last month</span>
        </div>
      </div>
      
      <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-gray-500">Active Users</span>
          <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-users text-blue-600 text-sm"></i>
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">2,345</div>
        <div class="flex items-center gap-1 mt-1">
          <i class="fas fa-arrow-up text-green-500 text-xs"></i>
          <span class="text-xs text-green-500 font-medium">+8.2%</span>
          <span class="text-xs text-gray-400">vs last month</span>
        </div>
      </div>
      
      <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-gray-500">Conversion Rate</span>
          <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-chart-line text-purple-600 text-sm"></i>
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">3.24%</div>
        <div class="flex items-center gap-1 mt-1">
          <i class="fas fa-arrow-down text-red-500 text-xs"></i>
          <span class="text-xs text-red-500 font-medium">-2.1%</span>
          <span class="text-xs text-gray-400">vs last month</span>
        </div>
      </div>
      
      <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-gray-500">Active Sessions</span>
          <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-bolt text-amber-600 text-sm"></i>
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-900">482</div>
        <div class="flex items-center gap-1 mt-1">
          <i class="fas fa-arrow-up text-green-500 text-xs"></i>
          <span class="text-xs text-green-500 font-medium">+18.7%</span>
          <span class="text-xs text-gray-400">vs last month</span>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold text-gray-900">Revenue Overview</h3>
          <select class="text-sm border border-gray-200 rounded-lg px-3 py-1">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
        <div class="h-40 flex items-end gap-2">
          <div class="flex-1 bg-indigo-100 rounded-t" style="height: 40%"></div>
          <div class="flex-1 bg-indigo-100 rounded-t" style="height: 60%"></div>
          <div class="flex-1 bg-indigo-100 rounded-t" style="height: 45%"></div>
          <div class="flex-1 bg-indigo-100 rounded-t" style="height: 80%"></div>
          <div class="flex-1 bg-indigo-100 rounded-t" style="height: 65%"></div>
          <div class="flex-1 bg-indigo-100 rounded-t" style="height: 90%"></div>
          <div class="flex-1 bg-indigo-500 rounded-t" style="height: 100%"></div>
        </div>
        <div class="flex justify-between mt-2 text-xs text-gray-400">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
      
      <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 class="font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <i class="fas fa-check text-green-600 text-xs"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">Payment received</p>
              <p class="text-xs text-gray-500">$250.00 from John Doe</p>
            </div>
            <span class="text-xs text-gray-400">2m</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <i class="fas fa-user text-blue-600 text-xs"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">New user registered</p>
              <p class="text-xs text-gray-500">sarah@example.com</p>
            </div>
            <span class="text-xs text-gray-400">15m</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <i class="fas fa-shopping-cart text-purple-600 text-xs"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900">New order placed</p>
              <p class="text-xs text-gray-500">Order #1234</p>
            </div>
            <span class="text-xs text-gray-400">1h</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: "product-card",
    name: "Product Card",
    description: "E-commerce product card with image and add to cart",
    category: "E-commerce",
    icon: <ShoppingCart className="w-6 h-6" />,
    code: `<div class="p-8 bg-gray-50 min-h-[400px] flex items-center justify-center">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
      <div class="relative overflow-hidden">
        <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <i class="fas fa-headphones text-6xl text-gray-300"></i>
        </div>
        <span class="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">-20%</span>
        <button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <i class="far fa-heart text-gray-600"></i>
        </button>
      </div>
      <div class="p-4">
        <p class="text-xs text-gray-500 mb-1">Audio</p>
        <h3 class="font-semibold text-gray-900 mb-1">Premium Wireless Headphones</h3>
        <div class="flex items-center gap-1 mb-2">
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star-half-alt text-amber-400 text-xs"></i>
          <span class="text-xs text-gray-500 ml-1">(128)</span>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <span class="text-lg font-bold text-gray-900">$199</span>
            <span class="text-sm text-gray-400 line-through ml-2">$249</span>
          </div>
          <button class="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
      <div class="relative overflow-hidden">
        <div class="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
          <i class="fas fa-watch text-6xl text-blue-300"></i>
        </div>
        <span class="absolute top-3 left-3 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">New</span>
        <button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <i class="far fa-heart text-gray-600"></i>
        </button>
      </div>
      <div class="p-4">
        <p class="text-xs text-gray-500 mb-1">Wearables</p>
        <h3 class="font-semibold text-gray-900 mb-1">Smart Watch Pro</h3>
        <div class="flex items-center gap-1 mb-2">
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <span class="text-xs text-gray-500 ml-1">(89)</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-lg font-bold text-gray-900">$399</span>
          <button class="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
      <div class="relative overflow-hidden">
        <div class="aspect-square bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
          <i class="fas fa-camera text-6xl text-purple-300"></i>
        </div>
        <button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <i class="far fa-heart text-gray-600"></i>
        </button>
      </div>
      <div class="p-4">
        <p class="text-xs text-gray-500 mb-1">Photography</p>
        <h3 class="font-semibold text-gray-900 mb-1">DSLR Camera 4K</h3>
        <div class="flex items-center gap-1 mb-2">
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="fas fa-star text-amber-400 text-xs"></i>
          <i class="far fa-star text-gray-300 text-xs"></i>
          <span class="text-xs text-gray-500 ml-1">(256)</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-lg font-bold text-gray-900">$899</span>
          <button class="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: "user-profile",
    name: "User Profile",
    description: "Profile card with avatar, stats, and action buttons",
    category: "Social",
    icon: <UserCircle className="w-6 h-6" />,
    code: `<div class="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-[400px] flex items-center justify-center">
  <div class="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md">
    <div class="h-24 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
    <div class="px-6 pb-6">
      <div class="relative flex justify-between items-end -mt-12 mb-4">
        <div class="relative">
          <div class="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
            <div class="w-full h-full rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <i class="fas fa-user text-4xl text-gray-400"></i>
            </div>
          </div>
          <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div class="flex gap-2 mb-2">
          <button class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Follow
          </button>
          <button class="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
            Message
          </button>
        </div>
      </div>
      
      <div class="mb-4">
        <h2 class="text-xl font-bold text-gray-900">Sarah Johnson</h2>
        <p class="text-gray-500">@sarahj_design</p>
      </div>
      
      <p class="text-gray-600 mb-4">
        Product Designer at TechCorp. Creating beautiful interfaces and user experiences. Coffee lover ☕️
      </p>
      
      <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span class="flex items-center gap-1">
          <i class="fas fa-map-marker-alt"></i> San Francisco, CA
        </span>
        <span class="flex items-center gap-1">
          <i class="fas fa-link"></i> sarah.design
        </span>
      </div>
      
      <div class="flex gap-6 py-4 border-t border-gray-100">
        <div class="text-center">
          <div class="text-xl font-bold text-gray-900">2.4k</div>
          <div class="text-sm text-gray-500">Followers</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-gray-900">892</div>
          <div class="text-sm text-gray-500">Following</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-gray-900">156</div>
          <div class="text-sm text-gray-500">Projects</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: "newsletter",
    name: "Newsletter",
    description: "Email subscription section with input and benefits",
    category: "Marketing",
    icon: <Mail className="w-6 h-6" />,
    code: `<div class="p-8 bg-gray-900 min-h-[400px] flex items-center justify-center">
  <div class="max-w-2xl w-full text-center">
    <div class="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 rounded-full mb-6">
      <i class="fas fa-envelope text-indigo-400 text-sm"></i>
      <span class="text-sm text-indigo-300">Newsletter</span>
    </div>
    
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
      Stay updated with our latest news
    </h2>
    <p class="text-gray-400 mb-8 max-w-lg mx-auto">
      Subscribe to our newsletter and get the latest updates, tips, and exclusive content delivered straight to your inbox.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
      <input 
        type="email" 
        placeholder="Enter your email" 
        class="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
        Subscribe
      </button>
    </div>
    
    <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
      <div class="flex items-center gap-2">
        <i class="fas fa-check-circle text-green-500"></i>
        <span>No spam, ever</span>
      </div>
      <div class="flex items-center gap-2">
        <i class="fas fa-check-circle text-green-500"></i>
        <span>Unsubscribe anytime</span>
      </div>
      <div class="flex items-center gap-2">
        <i class="fas fa-check-circle text-green-500"></i>
        <span>Join 10,000+ subscribers</span>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: "event-card",
    name: "Event Card",
    description: "Event listing with date, time, and RSVP button",
    category: "Social",
    icon: <Calendar className="w-6 h-6" />,
    code: `<div class="p-8 bg-gray-50 min-h-[400px] flex items-center justify-center">
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md w-full">
    <div class="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600">
      <div class="absolute top-4 left-4 bg-white rounded-xl p-3 text-center min-w-[60px]">
        <div class="text-xs font-bold text-red-500 uppercase">MAR</div>
        <div class="text-2xl font-bold text-gray-900">15</div>
      </div>
      <span class="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
        Conference
      </span>
      <div class="absolute inset-0 flex items-center justify-center">
        <i class="fas fa-calendar-alt text-6xl text-white/20"></i>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-2">Design Systems Conference 2024</h3>
      <div class="space-y-2 mb-4">
        <div class="flex items-center gap-3 text-gray-600">
          <i class="far fa-clock text-indigo-500"></i>
          <span>9:00 AM - 5:00 PM PST</span>
        </div>
        <div class="flex items-center gap-3 text-gray-600">
          <i class="fas fa-map-marker-alt text-indigo-500"></i>
          <span>San Francisco Design Center</span>
        </div>
      </div>
      <p class="text-gray-600 mb-4">
        Join us for a day of learning about design systems, component libraries, and building scalable UI.
      </p>
      <div class="flex items-center justify-between">
        <div class="flex -space-x-2">
          <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
            <i class="fas fa-user text-xs text-gray-500"></i>
          </div>
          <div class="w-8 h-8 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center">
            <i class="fas fa-user text-xs text-gray-500"></i>
          </div>
          <div class="w-8 h-8 rounded-full bg-gray-500 border-2 border-white flex items-center justify-center">
            <i class="fas fa-user text-xs text-gray-500"></i>
          </div>
          <div class="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-xs font-medium text-indigo-600">
            +128
          </div>
        </div>
        <button class="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
          RSVP Now
        </button>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: "settings-panel",
    name: "Settings Panel",
    description: "User settings with tabs and form fields",
    category: "Dashboard",
    icon: <Settings className="w-6 h-6" />,
    code: `<div class="p-6 bg-gray-100 min-h-[400px]">
  <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
    <div class="flex">
      <!-- Sidebar -->
      <div class="w-64 bg-gray-50 border-r border-gray-200 p-4">
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">Settings</h3>
        <nav class="space-y-1">
          <a href="#" class="flex items-center gap-3 px-3 py-2 bg-white text-indigo-600 rounded-lg shadow-sm font-medium">
            <i class="far fa-user"></i> Profile
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition-all">
            <i class="fas fa-shield-alt"></i> Account
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition-all">
            <i class="far fa-bell"></i> Notifications
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition-all">
            <i class="fas fa-lock"></i> Security
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition-all">
            <i class="far fa-credit-card"></i> Billing
          </a>
        </nav>
      </div>
      
      <!-- Content -->
      <div class="flex-1 p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Profile Settings</h2>
        
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
              <i class="fas fa-user text-2xl text-white"></i>
            </div>
            <div>
              <button class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Change Avatar
              </button>
              <p class="text-xs text-gray-500 mt-1">JPG, PNG or GIF. Max 2MB.</p>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" value="John" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" value="Doe" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value="john@example.com" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea rows="3" class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">Product designer based in San Francisco.</textarea>
            <p class="text-xs text-gray-500 mt-1">Brief description for your profile.</p>
          </div>
          
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Cancel
            </button>
            <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: "blog-card",
    name: "Blog Card",
    description: "Article preview with image, title, and read more",
    category: "Marketing",
    icon: <FileText className="w-6 h-6" />,
    code: `<div class="p-8 bg-gray-50 min-h-[400px] flex items-center justify-center">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
    <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      <div class="relative h-48 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 group-hover:scale-105 transition-transform duration-500"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <i class="fas fa-paint-brush text-5xl text-white/30"></i>
        </div>
        <span class="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-semibold rounded-full">
          Design
        </span>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          The Future of UI Design: Trends to Watch in 2024
        </h3>
        <p class="text-gray-600 mb-4 line-clamp-2">
          Explore the emerging trends shaping the future of user interface design, from AI-powered tools to immersive 3D experiences.
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
              <i class="fas fa-user text-white text-xs"></i>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">Sarah Chen</p>
              <p class="text-xs text-gray-500">Jan 15 · 5 min read</p>
            </div>
          </div>
          <button class="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
            Read More →
          </button>
        </div>
      </div>
    </article>
    
    <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      <div class="relative h-48 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 group-hover:scale-105 transition-transform duration-500"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <i class="fas fa-code text-5xl text-white/30"></i>
        </div>
        <span class="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-semibold rounded-full">
          Development
        </span>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
          Building Scalable Design Systems with Tailwind CSS
        </h3>
        <p class="text-gray-600 mb-4 line-clamp-2">
          Learn how to create and maintain a robust design system using Tailwind CSS that scales with your team and product.
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <i class="fas fa-user text-white text-xs"></i>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">Mike Johnson</p>
              <p class="text-xs text-gray-500">Jan 12 · 8 min read</p>
            </div>
          </div>
          <button class="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
            Read More →
          </button>
        </div>
      </div>
    </article>
  </div>
</div>`,
  },
  {
    id: "testimonial",
    name: "Testimonial",
    description: "Customer testimonial with quote and avatar",
    category: "Marketing",
    icon: <MessageSquare className="w-6 h-6" />,
    code: `<div class="p-8 bg-gradient-to-br from-indigo-600 to-purple-700 min-h-[400px] flex items-center justify-center">
  <div class="max-w-2xl w-full">
    <div class="bg-white rounded-2xl p-8 shadow-2xl relative">
      <div class="absolute -top-4 left-8 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
        <i class="fas fa-quote-left text-white text-sm"></i>
      </div>
      
      <div class="flex gap-1 mb-4">
        <i class="fas fa-star text-amber-400"></i>
        <i class="fas fa-star text-amber-400"></i>
        <i class="fas fa-star text-amber-400"></i>
        <i class="fas fa-star text-amber-400"></i>
        <i class="fas fa-star text-amber-400"></i>
      </div>
      
      <blockquote class="text-xl text-gray-700 mb-6 leading-relaxed">
        "QuickUI Agent has completely transformed our design workflow. What used to take days now takes minutes. The quality of the generated components is outstanding and saves us countless hours of development time."
      </blockquote>
      
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
          <i class="fas fa-user text-2xl text-white"></i>
        </div>
        <div>
          <div class="font-bold text-gray-900">Emily Rodriguez</div>
          <div class="text-gray-500">Product Lead at TechCorp</div>
        </div>
        <div class="ml-auto">
          <div class="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
            <span class="text-xs text-gray-500 font-medium">TECHCORP</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: "notification-dropdown",
    name: "Notifications",
    description: "Dropdown notification panel with list items",
    category: "Navigation",
    icon: <Bell className="w-6 h-6" />,
    code: `<div class="p-8 bg-gray-100 min-h-[400px] flex items-center justify-center">
  <div class="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden">
    <div class="flex items-center justify-between p-4 border-b border-gray-100">
      <h3 class="font-semibold text-gray-900">Notifications</h3>
      <button class="text-sm text-indigo-600 hover:text-indigo-700">Mark all read</button>
    </div>
    
    <div class="max-h-80 overflow-y-auto">
      <div class="p-4 hover:bg-gray-50 cursor-pointer border-l-2 border-indigo-500 bg-indigo-50/50">
        <div class="flex gap-3">
          <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fas fa-check text-green-600 text-xs"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm text-gray-900">
              <span class="font-semibold">Payment successful</span> — Your subscription has been renewed
            </p>
            <p class="text-xs text-gray-500 mt-1">2 minutes ago</p>
          </div>
        </div>
      </div>
      
      <div class="p-4 hover:bg-gray-50 cursor-pointer border-l-2 border-transparent">
        <div class="flex gap-3">
          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fas fa-user text-blue-600 text-xs"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm text-gray-900">
              <span class="font-semibold">New follower</span> — Sarah Chen started following you
            </p>
            <p class="text-xs text-gray-500 mt-1">1 hour ago</p>
          </div>
        </div>
      </div>
      
      <div class="p-4 hover:bg-gray-50 cursor-pointer border-l-2 border-transparent">
        <div class="flex gap-3">
          <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fas fa-comment text-purple-600 text-xs"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm text-gray-900">
              <span class="font-semibold">New comment</span> — John replied to your post
            </p>
            <p class="text-xs text-gray-500 mt-1">3 hours ago</p>
          </div>
        </div>
      </div>
      
      <div class="p-4 hover:bg-gray-50 cursor-pointer border-l-2 border-transparent">
        <div class="flex gap-3">
          <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fas fa-exclamation text-amber-600 text-xs"></i>
          </div>
          <div class="flex-1">
            <p class="text-sm text-gray-900">
              <span class="font-semibold">Storage warning</span> — You're at 85% capacity
            </p>
            <p class="text-xs text-gray-500 mt-1">Yesterday</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="p-3 border-t border-gray-100 text-center">
      <button class="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
        View all notifications
      </button>
    </div>
  </div>
</div>`,
  },
  {
    id: "file-upload",
    name: "File Upload",
    description: "Drag and drop file upload zone",
    category: "Forms",
    icon: <Upload className="w-6 h-6" />,
    code: `<div class="p-8 bg-gray-50 min-h-[400px] flex items-center justify-center">
  <div class="w-full max-w-lg">
    <div class="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-indigo-500 hover:bg-indigo-50/50 transition-all cursor-pointer">
      <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-cloud-upload-alt text-2xl text-indigo-600"></i>
      </div>
      <h3 class="text-lg font-semibold text-gray-900 mb-2">Upload your files</h3>
      <p class="text-gray-500 mb-4">Drag and drop your files here, or click to browse</p>
      <button class="px-6 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
        Choose Files
      </button>
      <p class="text-xs text-gray-400 mt-4">Supports: PNG, JPG, PDF up to 10MB</p>
    </div>
    
    <div class="mt-4 space-y-3">
      <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
        <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
          <i class="fas fa-image text-purple-600"></i>
        </div>
        <div class="flex-1">
          <p class="text-sm font-medium text-gray-900">design_mockup.png</p>
          <div class="flex items-center gap-2 mt-1">
            <div class="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-green-500 rounded-full" style="width: 100%"></div>
            </div>
            <span class="text-xs text-gray-500">2.4 MB</span>
          </div>
        </div>
        <button class="text-gray-400 hover:text-red-500 transition-colors">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <i class="fas fa-file-pdf text-blue-600"></i>
        </div>
        <div class="flex-1">
          <p class="text-sm font-medium text-gray-900">requirements.pdf</p>
          <div class="flex items-center gap-2 mt-1">
            <div class="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-indigo-500 rounded-full" style="width: 65%"></div>
            </div>
            <span class="text-xs text-gray-500">65%</span>
          </div>
        </div>
        <button class="text-gray-400 hover:text-red-500 transition-colors">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: "image-gallery",
    name: "Image Gallery",
    description: "Grid layout image gallery with hover overlay",
    category: "Social",
    icon: <ImageIcon className="w-6 h-6" />,
    code: `<div class="p-8 bg-gray-900 min-h-[400px]">
  <div class="max-w-4xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-white">Gallery</h2>
      <div class="flex gap-2">
        <button class="px-3 py-1.5 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 transition-colors">
          <i class="fas fa-th"></i>
        </button>
        <button class="px-3 py-1.5 text-gray-400 text-sm rounded-lg hover:bg-white/10 transition-colors">
          <i class="fas fa-list"></i>
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="aspect-square rounded-xl overflow-hidden group relative cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500"></div>
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div class="opacity-0 group-hover:opacity-100 transition-opacity text-center">
            <i class="fas fa-expand text-white text-2xl mb-2"></i>
            <p class="text-white text-sm">Mountain View</p>
          </div>
        </div>
      </div>
      
      <div class="aspect-square rounded-xl overflow-hidden group relative cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500"></div>
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div class="opacity-0 group-hover:opacity-100 transition-opacity text-center">
            <i class="fas fa-expand text-white text-2xl mb-2"></i>
            <p class="text-white text-sm">Ocean Sunset</p>
          </div>
        </div>
      </div>
      
      <div class="aspect-square rounded-xl overflow-hidden group relative cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500"></div>
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div class="opacity-0 group-hover:opacity-100 transition-opacity text-center">
            <i class="fas fa-expand text-white text-2xl mb-2"></i>
            <p class="text-white text-sm">Desert Dunes</p>
          </div>
        </div>
      </div>
      
      <div class="aspect-square rounded-xl overflow-hidden group relative cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500"></div>
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div class="opacity-0 group-hover:opacity-100 transition-opacity text-center">
            <i class="fas fa-expand text-white text-2xl mb-2"></i>
            <p class="text-white text-sm">Cherry Blossom</p>
          </div>
        </div>
      </div>
      
      <div class="aspect-square rounded-xl overflow-hidden group relative cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500"></div>
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div class="opacity-0 group-hover:opacity-100 transition-opacity text-center">
            <i class="fas fa-expand text-white text-2xl mb-2"></i>
            <p class="text-white text-sm">Northern Lights</p>
          </div>
        </div>
      </div>
      
      <div class="aspect-square rounded-xl overflow-hidden group relative cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500"></div>
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div class="opacity-0 group-hover:opacity-100 transition-opacity text-center">
            <i class="fas fa-expand text-white text-2xl mb-2"></i>
            <p class="text-white text-sm">City Lights</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
];

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTemplates = TEMPLATES.filter((template) => {
    const matchesCategory = activeCategory === "All" || template.category === activeCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = async (template: Template) => {
    await navigator.clipboard.writeText(template.code);
    setCopiedId(template.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleUse = (template: Template) => {
    window.location.href = `/?template=${template.id}`;
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            UI Templates
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our collection of pre-designed UI components. Click on any template to use it in the generator.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all"
            >
              {/* Live Preview */}
              <div className="h-64 bg-gray-800 border-b border-gray-800 overflow-hidden">
                <TemplatePreview code={template.code} />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400">
                      {template.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {template.name}
                      </h3>
                      <span className="text-xs text-gray-500 px-2 py-0.5 bg-gray-800 rounded-full">
                        {template.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">
                  {template.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleUse(template)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Eye className="w-4 h-4" />
                    Use Template
                  </button>
                  <button
                    onClick={() => handleCopy(template)}
                    className="p-2.5 text-gray-400 hover:text-white bg-gray-800 rounded-lg transition-colors"
                    title="Copy code"
                  >
                    {copiedId === template.id ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              No templates found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>
            Browse templates, copy code, or use directly in the generator.
          </p>
        </div>
      </footer>
    </div>
  );
}
