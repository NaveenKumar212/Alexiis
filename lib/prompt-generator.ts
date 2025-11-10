import { colorSchemes } from './templates';

interface PromptAnalysis {
  appName: string;
  appType: string;
  description: string;
  features: string[];
  colorScheme: string;
  components: string[];
}

interface IndustryTemplate {
  type: string;
  keywords: string[];
  colorScheme: string;
  hero: {
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  sections: string[];
  stats?: Array<{
    value: string;
    label: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const industryTemplates: Record<string, IndustryTemplate> = {
  saas: {
    type: 'saas',
    keywords: ['saas', 'software', 'dashboard', 'analytics', 'platform', 'tool', 'automation'],
    colorScheme: 'blue',
    hero: {
      headline: 'Streamline Your Workflow',
      subheadline: 'The all-in-one platform that helps teams collaborate, automate, and achieve more',
      cta1: 'Start Free Trial',
      cta2: 'Watch Demo'
    },
    features: [
      { title: 'Real-Time Collaboration', description: 'Work together seamlessly with your team in real-time' },
      { title: 'Advanced Analytics', description: 'Get deep insights into your data with powerful analytics' },
      { title: 'Automation Tools', description: 'Automate repetitive tasks and save hours every week' },
      { title: 'Integrations', description: 'Connect with your favorite tools and apps' },
      { title: 'Secure & Reliable', description: 'Enterprise-grade security with 99.9% uptime' },
      { title: '24/7 Support', description: 'Our team is here to help you succeed' }
    ],
    sections: ['hero', 'features', 'stats', 'pricing', 'testimonials', 'cta'],
    stats: [
      { value: '50K+', label: 'Active Users' },
      { value: '1M+', label: 'Tasks Completed' },
      { value: '99.9%', label: 'Uptime' },
      { value: '24/7', label: 'Support' }
    ],
    testimonial: {
      quote: 'This platform has transformed how our team works. We\'ve increased productivity by 40% and couldn\'t be happier.',
      author: 'Sarah Johnson',
      role: 'CTO, TechCorp'
    }
  },
  ecommerce: {
    type: 'ecommerce',
    keywords: ['shop', 'store', 'ecommerce', 'buy', 'sell', 'product', 'marketplace', 'retail'],
    colorScheme: 'purple',
    hero: {
      headline: 'Discover Premium Products',
      subheadline: 'Shop the latest collection of handcrafted items designed with care',
      cta1: 'Shop Now',
      cta2: 'View Collections'
    },
    features: [
      { title: 'Curated Selection', description: 'Hand-picked products from trusted artisans' },
      { title: 'Fast Shipping', description: 'Free shipping on orders over $50' },
      { title: 'Secure Checkout', description: 'Safe and encrypted payment processing' },
      { title: 'Easy Returns', description: '30-day hassle-free return policy' },
      { title: 'Quality Guarantee', description: 'Every product is quality checked' },
      { title: 'Customer Care', description: 'Dedicated support team ready to help' }
    ],
    sections: ['hero', 'products', 'features', 'testimonials', 'newsletter'],
    testimonial: {
      quote: 'Amazing quality and fast delivery! I\'ve been a customer for 2 years and never disappointed.',
      author: 'Michael Chen',
      role: 'Verified Customer'
    }
  },
  restaurant: {
    type: 'restaurant',
    keywords: ['restaurant', 'food', 'dining', 'menu', 'cafe', 'bistro', 'kitchen', 'chef'],
    colorScheme: 'orange',
    hero: {
      headline: 'Exceptional Dining Experience',
      subheadline: 'Farm-to-table cuisine crafted with passion and served with love',
      cta1: 'Reserve Table',
      cta2: 'View Menu'
    },
    features: [
      { title: 'Fresh Ingredients', description: 'Locally sourced, organic ingredients daily' },
      { title: 'Expert Chefs', description: 'Award-winning culinary team' },
      { title: 'Cozy Atmosphere', description: 'Perfect ambiance for any occasion' },
      { title: 'Private Events', description: 'Host your special celebrations with us' },
      { title: 'Wine Selection', description: 'Curated list of fine wines' },
      { title: 'Catering Services', description: 'Bring our cuisine to your event' }
    ],
    sections: ['hero', 'menu', 'features', 'gallery', 'reservations'],
    testimonial: {
      quote: 'The best dining experience in town! Every dish is a masterpiece and the service is impeccable.',
      author: 'Emily Rodriguez',
      role: 'Food Critic'
    }
  },
  fitness: {
    type: 'fitness',
    keywords: ['fitness', 'gym', 'workout', 'training', 'exercise', 'health', 'wellness'],
    colorScheme: 'red',
    hero: {
      headline: 'Transform Your Body',
      subheadline: 'Join our community and achieve your fitness goals with expert guidance',
      cta1: 'Start Free Week',
      cta2: 'View Classes'
    },
    features: [
      { title: 'Expert Trainers', description: 'Certified professionals to guide your journey' },
      { title: 'Modern Equipment', description: 'State-of-the-art fitness equipment' },
      { title: 'Group Classes', description: 'Yoga, HIIT, Spin, and more' },
      { title: 'Personal Training', description: 'Customized workout plans' },
      { title: 'Nutrition Coaching', description: 'Meal plans and dietary guidance' },
      { title: 'Flexible Hours', description: 'Open 24/7 for your convenience' }
    ],
    sections: ['hero', 'features', 'classes', 'trainers', 'pricing'],
    stats: [
      { value: '10K+', label: 'Members' },
      { value: '50+', label: 'Classes Weekly' },
      { value: '15+', label: 'Expert Trainers' },
      { value: '24/7', label: 'Access' }
    ],
    testimonial: {
      quote: 'I\'ve tried many gyms, but this one truly helped me reach my goals. The trainers are amazing!',
      author: 'David Martinez',
      role: 'Member Since 2021'
    }
  },
  realestate: {
    type: 'realestate',
    keywords: ['real estate', 'property', 'home', 'house', 'apartment', 'listing', 'broker', 'realtor'],
    colorScheme: 'slate',
    hero: {
      headline: 'Find Your Dream Home',
      subheadline: 'Discover exceptional properties in prime locations with expert guidance',
      cta1: 'Browse Listings',
      cta2: 'Schedule Tour'
    },
    features: [
      { title: 'Prime Locations', description: 'Properties in the most desirable neighborhoods' },
      { title: 'Expert Agents', description: 'Experienced realtors to guide you' },
      { title: 'Virtual Tours', description: '360° virtual property tours' },
      { title: 'Market Insights', description: 'Latest market trends and analysis' },
      { title: 'Easy Process', description: 'Streamlined buying and selling' },
      { title: 'Financing Help', description: 'Connect with trusted lenders' }
    ],
    sections: ['hero', 'listings', 'features', 'testimonials', 'contact'],
    stats: [
      { value: '500+', label: 'Properties Sold' },
      { value: '95%', label: 'Client Satisfaction' },
      { value: '20+', label: 'Years Experience' },
      { value: '$2B+', label: 'Total Sales' }
    ],
    testimonial: {
      quote: 'They made buying our first home a breeze. Professional, knowledgeable, and truly caring.',
      author: 'Lisa & James Wilson',
      role: 'Happy Homeowners'
    }
  },
  healthcare: {
    type: 'healthcare',
    keywords: ['healthcare', 'medical', 'clinic', 'hospital', 'doctor', 'health', 'wellness', 'therapy'],
    colorScheme: 'teal',
    hero: {
      headline: 'Compassionate Healthcare',
      subheadline: 'Expert medical care with a personal touch for you and your family',
      cta1: 'Book Appointment',
      cta2: 'Our Services'
    },
    features: [
      { title: 'Experienced Doctors', description: 'Board-certified medical professionals' },
      { title: 'Modern Facilities', description: 'State-of-the-art medical equipment' },
      { title: 'Comprehensive Care', description: 'Full range of medical services' },
      { title: 'Telemedicine', description: 'Virtual consultations available' },
      { title: 'Insurance Accepted', description: 'Work with all major providers' },
      { title: 'Emergency Care', description: '24/7 urgent care services' }
    ],
    sections: ['hero', 'services', 'doctors', 'features', 'contact'],
    testimonial: {
      quote: 'The care I received was exceptional. The staff is caring, and the doctors truly listen.',
      author: 'Patricia Anderson',
      role: 'Patient'
    }
  },
  portfolio: {
    type: 'portfolio',
    keywords: ['portfolio', 'creative', 'designer', 'artist', 'photographer', 'freelance', 'work'],
    colorScheme: 'emerald',
    hero: {
      headline: 'Creative Designer & Developer',
      subheadline: 'Crafting beautiful digital experiences that make an impact',
      cta1: 'View Work',
      cta2: 'Get In Touch'
    },
    features: [
      { title: 'UI/UX Design', description: 'Creating intuitive and beautiful interfaces' },
      { title: 'Brand Identity', description: 'Developing unique brand identities' },
      { title: 'Web Development', description: 'Building responsive websites and apps' },
      { title: 'Strategy', description: 'Digital strategy and consulting' },
      { title: 'Prototyping', description: 'Interactive prototypes and mockups' },
      { title: 'Consulting', description: 'Expert advice for your projects' }
    ],
    sections: ['hero', 'projects', 'about', 'skills', 'contact'],
    stats: [
      { value: '100+', label: 'Projects Completed' },
      { value: '50+', label: 'Happy Clients' },
      { value: '8+', label: 'Years Experience' },
      { value: '15+', label: 'Awards Won' }
    ],
    testimonial: {
      quote: 'Outstanding work! They brought our vision to life and exceeded all expectations.',
      author: 'Rachel Kim',
      role: 'CEO, StartupCo'
    }
  },
  agency: {
    type: 'agency',
    keywords: ['agency', 'marketing', 'advertising', 'digital', 'branding', 'services'],
    colorScheme: 'indigo',
    hero: {
      headline: 'Grow Your Business',
      subheadline: 'Full-service digital agency helping brands reach their full potential',
      cta1: 'Start Project',
      cta2: 'Our Work'
    },
    features: [
      { title: 'Digital Marketing', description: 'Data-driven marketing strategies' },
      { title: 'Brand Strategy', description: 'Build a memorable brand identity' },
      { title: 'Web Design', description: 'Beautiful, conversion-focused websites' },
      { title: 'SEO & Analytics', description: 'Rank higher and track performance' },
      { title: 'Social Media', description: 'Engage your audience effectively' },
      { title: 'Content Creation', description: 'Compelling content that converts' }
    ],
    sections: ['hero', 'services', 'portfolio', 'stats', 'testimonials', 'cta'],
    stats: [
      { value: '200+', label: 'Clients Served' },
      { value: '500+', label: 'Projects Delivered' },
      { value: '95%', label: 'Client Retention' },
      { value: '10+', label: 'Years in Business' }
    ],
    testimonial: {
      quote: 'They helped us triple our online revenue in just 6 months. Absolutely phenomenal results!',
      author: 'Mark Stevens',
      role: 'Founder, GrowthCo'
    }
  }
};

export function analyzePrompt(prompt: string): PromptAnalysis {
  const lowerPrompt = prompt.toLowerCase();

  let matchedTemplate: IndustryTemplate | null = null;
  let maxMatches = 0;

  for (const [key, template] of Object.entries(industryTemplates)) {
    const matches = template.keywords.filter(keyword => lowerPrompt.includes(keyword)).length;
    if (matches > maxMatches) {
      maxMatches = matches;
      matchedTemplate = template;
    }
  }

  if (!matchedTemplate) {
    matchedTemplate = industryTemplates.saas;
  }

  const features: string[] = [];
  if (lowerPrompt.includes('contact')) features.push('Contact Form');
  if (lowerPrompt.includes('newsletter')) features.push('Newsletter');
  if (lowerPrompt.includes('testimonial')) features.push('Testimonials');
  if (lowerPrompt.includes('pricing')) features.push('Pricing');
  if (lowerPrompt.includes('faq')) features.push('FAQ');
  if (lowerPrompt.includes('team')) features.push('Team');
  if (lowerPrompt.includes('gallery')) features.push('Gallery');

  const appNameMatch = prompt.match(/(?:called|named|for)\s+["']?([^"',.]+)["']?/i);
  const appName = appNameMatch ? appNameMatch[1].trim() : `${matchedTemplate.hero.headline}`;

  return {
    appName,
    appType: matchedTemplate.type,
    description: prompt,
    features: features.length > 0 ? features : matchedTemplate.features.map(f => f.title),
    colorScheme: matchedTemplate.colorScheme,
    components: matchedTemplate.sections
  };
}

function generateIndustryContent(analysis: PromptAnalysis): string {
  const template = industryTemplates[analysis.appType] || industryTemplates.saas;
  const colors = colorSchemes[analysis.colorScheme as keyof typeof colorSchemes] || colorSchemes.blue;

  const hasStats = template.stats && template.sections.includes('stats');
  const hasPricing = template.sections.includes('pricing');
  const hasTestimonials = template.sections.includes('testimonials');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${analysis.appName}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gradient-primary {
      background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    }
    .text-gradient {
      background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    * {
      scroll-behavior: smooth;
    }
  </style>
</head>
<body class="antialiased" style="background: ${colors.background}; color: ${colors.text};">
  <nav class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl gradient-primary">
            ${analysis.appName.charAt(0).toUpperCase()}
          </div>
          <span class="text-2xl font-bold text-gradient">${analysis.appName}</span>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-gray-700 hover:text-gray-900 font-medium transition">Home</a>
          <a href="#features" class="text-gray-700 hover:text-gray-900 font-medium transition">Features</a>
          <a href="#about" class="text-gray-700 hover:text-gray-900 font-medium transition">About</a>
          <a href="#contact" class="text-gray-700 hover:text-gray-900 font-medium transition">Contact</a>
        </div>
        <button class="px-6 py-2.5 rounded-lg text-white font-semibold hover:shadow-lg transition gradient-primary">
          ${template.hero.cta1}
        </button>
      </div>
    </div>
  </nav>

  <section id="home" class="pt-32 pb-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          ${template.hero.headline}
          <span class="block text-gradient mt-2">${analysis.appName}</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          ${template.hero.subheadline}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button class="px-8 py-4 rounded-xl text-white font-bold text-lg hover:shadow-2xl transition gradient-primary">
            ${template.hero.cta1}
          </button>
          <button class="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition hover:bg-gray-50" style="border-color: ${colors.primary}; color: ${colors.primary};">
            ${template.hero.cta2}
          </button>
        </div>
      </div>
    </div>
  </section>

  <section id="features" class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">
          Why Choose <span class="text-gradient">Us</span>
        </h2>
        <p class="text-xl text-gray-600">Everything you need to succeed</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        ${template.features.slice(0, 6).map((feature, i) => `
        <div class="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
          <div class="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-6 gradient-primary">
            ${i + 1}
          </div>
          <h3 class="text-2xl font-bold mb-3">${feature.title}</h3>
          <p class="text-gray-600">${feature.description}</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  ${hasStats ? `
  <section class="py-20 px-4 gradient-primary">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-4 gap-8 text-center text-white">
        ${template.stats!.map(stat => `
        <div>
          <div class="text-5xl font-bold mb-2">${stat.value}</div>
          <div class="text-xl opacity-90">${stat.label}</div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  ${hasPricing ? `
  <section class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">
          Simple <span class="text-gradient">Pricing</span>
        </h2>
        <p class="text-xl text-gray-600">Choose the plan that fits your needs</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition">
          <h3 class="text-2xl font-bold mb-2">Starter</h3>
          <div class="text-5xl font-bold mb-6" style="color: ${colors.primary};">$29<span class="text-xl text-gray-600">/mo</span></div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center"><span class="mr-2">✓</span> ${template.features[0].title}</li>
            <li class="flex items-center"><span class="mr-2">✓</span> ${template.features[1].title}</li>
            <li class="flex items-center"><span class="mr-2">✓</span> Basic Support</li>
          </ul>
          <button class="w-full py-3 rounded-lg border-2 font-semibold transition hover:bg-gray-50" style="border-color: ${colors.primary}; color: ${colors.primary};">
            Get Started
          </button>
        </div>
        <div class="bg-white rounded-2xl p-8 border-2 hover:shadow-xl transition relative" style="border-color: ${colors.primary};">
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold gradient-primary">
            Popular
          </div>
          <h3 class="text-2xl font-bold mb-2">Professional</h3>
          <div class="text-5xl font-bold mb-6" style="color: ${colors.primary};">$79<span class="text-xl text-gray-600">/mo</span></div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center"><span class="mr-2">✓</span> Everything in Starter</li>
            <li class="flex items-center"><span class="mr-2">✓</span> ${template.features[2].title}</li>
            <li class="flex items-center"><span class="mr-2">✓</span> Priority Support</li>
          </ul>
          <button class="w-full py-3 rounded-lg text-white font-semibold hover:shadow-lg transition gradient-primary">
            Get Started
          </button>
        </div>
        <div class="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-xl transition">
          <h3 class="text-2xl font-bold mb-2">Enterprise</h3>
          <div class="text-5xl font-bold mb-6" style="color: ${colors.primary};">$199<span class="text-xl text-gray-600">/mo</span></div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center"><span class="mr-2">✓</span> Everything in Pro</li>
            <li class="flex items-center"><span class="mr-2">✓</span> ${template.features[3].title}</li>
            <li class="flex items-center"><span class="mr-2">✓</span> 24/7 Support</li>
          </ul>
          <button class="w-full py-3 rounded-lg border-2 font-semibold transition hover:bg-gray-50" style="border-color: ${colors.primary}; color: ${colors.primary};">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
  ` : ''}

  ${hasTestimonials ? `
  <section class="py-20 px-4 bg-gray-50">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-5xl font-bold mb-16">
        What Our <span class="text-gradient">Clients Say</span>
      </h2>
      <div class="bg-white rounded-3xl p-12 shadow-lg">
        <div class="text-6xl text-gradient mb-6">"</div>
        <p class="text-2xl text-gray-700 mb-8">${template.testimonial!.quote}</p>
        <div class="flex items-center justify-center space-x-4">
          <div class="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
            ${template.testimonial!.author.charAt(0)}
          </div>
          <div class="text-left">
            <div class="font-bold text-lg">${template.testimonial!.author}</div>
            <div class="text-gray-600">${template.testimonial!.role}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  ` : ''}

  <section class="py-20 px-4">
    <div class="max-w-4xl mx-auto text-center gradient-primary rounded-3xl p-16 text-white">
      <h2 class="text-5xl font-bold mb-6">Ready to Get Started?</h2>
      <p class="text-xl mb-10 opacity-90">Join thousands of satisfied customers today</p>
      <button class="px-10 py-5 bg-white rounded-xl font-bold text-lg hover:shadow-2xl transition" style="color: ${colors.primary};">
        ${template.hero.cta1}
      </button>
    </div>
  </section>

  <footer class="bg-gray-900 text-white py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl gradient-primary">
              ${analysis.appName.charAt(0).toUpperCase()}
            </div>
            <span class="text-xl font-bold">${analysis.appName}</span>
          </div>
          <p class="text-gray-400">${template.hero.subheadline.substring(0, 80)}...</p>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-4">Product</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition">Features</a></li>
            <li><a href="#" class="hover:text-white transition">Pricing</a></li>
            <li><a href="#" class="hover:text-white transition">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-4">Company</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition">About</a></li>
            <li><a href="#" class="hover:text-white transition">Careers</a></li>
            <li><a href="#" class="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-4">Legal</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-white transition">Privacy</a></li>
            <li><a href="#" class="hover:text-white transition">Terms</a></li>
            <li><a href="#" class="hover:text-white transition">Security</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2024 ${analysis.appName}. Built with Greta AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

export function generateWebAppFromPrompt(prompt: string): string {
  const analysis = analyzePrompt(prompt);
  return generateIndustryContent(analysis);
}

export type { PromptAnalysis };
