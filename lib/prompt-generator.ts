import { colorSchemes } from './templates';

// Pexels stock images organized by category
const imageLibrary: Record<string, { hero: string; feature: string[]; about: string }> = {
  saas: {
    hero: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920',
    feature: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    about: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  ecommerce: {
    hero: 'https://images.pexels.com/photos/6214478/pexels-photo-6214478.jpeg?auto=compress&cs=tinysrgb&w=1920',
    feature: [
      'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    about: 'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  restaurant: {
    hero: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920',
    feature: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    about: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  fitness: {
    hero: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920',
    feature: [
      'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4720267/pexels-photo-4720267.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    about: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  realestate: {
    hero: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
    feature: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    about: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  healthcare: {
    hero: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920',
    feature: [
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    about: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  portfolio: {
    hero: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1920',
    feature: [
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    about: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  agency: {
    hero: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
    feature: [
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    about: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  default: {
    hero: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
    feature: [
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    about: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
};

function getImages(appType: string) {
  return imageLibrary[appType] || imageLibrary.default;
}

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
  const images = getImages(analysis.appType);

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
    html {
      scroll-behavior: smooth;
    }
  </style>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Ensure smooth scrolling works for all anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    });
  </script>
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
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            ${template.hero.headline}
            <span class="block text-gradient mt-2">${analysis.appName}</span>
          </h1>
          <p class="text-xl text-gray-600 mb-10">
            ${template.hero.subheadline}
          </p>
          <div class="flex flex-col sm:flex-row items-start gap-4">
            <button class="px-8 py-4 rounded-xl text-white font-bold text-lg hover:shadow-2xl transition gradient-primary">
              ${template.hero.cta1}
            </button>
            <button class="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition hover:bg-gray-50" style="border-color: ${colors.primary}; color: ${colors.primary};">
              ${template.hero.cta2}
            </button>
          </div>
        </div>
        <div>
          <img src="${images.hero}" alt="${analysis.appName}" class="rounded-3xl shadow-2xl w-full h-auto object-cover" style="max-height: 600px;">
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

  <section id="about" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">
          About <span class="text-gradient">${analysis.appName}</span>
        </h2>
        <p class="text-xl text-gray-600">Our Story and Mission</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 class="text-3xl font-bold mb-6">Who We Are</h3>
          <p class="text-lg text-gray-600 mb-6">
            ${template.hero.subheadline} We're passionate about delivering excellence and helping our customers succeed.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            Founded with a vision to transform the industry, we've grown into a trusted partner for thousands of satisfied customers worldwide.
          </p>
          <div class="grid grid-cols-2 gap-6 mt-8">
            ${template.stats ? template.stats.slice(0, 2).map(stat => `
            <div>
              <div class="text-4xl font-bold text-gradient mb-2">${stat.value}</div>
              <div class="text-gray-600">${stat.label}</div>
            </div>
            `).join('') : `
            <div>
              <div class="text-4xl font-bold text-gradient mb-2">100+</div>
              <div class="text-gray-600">Customers Served</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-gradient mb-2">5+</div>
              <div class="text-gray-600">Years Experience</div>
            </div>
            `}
          </div>
        </div>
        <div>
          <img src="${images.about}" alt="About ${analysis.appName}" class="rounded-3xl shadow-2xl w-full h-auto object-cover" style="max-height: 500px;">
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        ${images.feature.map((img, i) => `
        <div class="group relative overflow-hidden rounded-2xl shadow-lg">
          <img src="${img}" alt="Feature ${i + 1}" class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <h3 class="text-white font-bold text-xl">${template.features[i]?.title || 'Our Work'}</h3>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section id="contact" class="py-20 px-4 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">
          Get In <span class="text-gradient">Touch</span>
        </h2>
        <p class="text-xl text-gray-600">We'd love to hear from you</p>
      </div>
      <div class="bg-white rounded-3xl p-12 shadow-lg">
        <form class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-700">Name</label>
              <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50" placeholder="Your name" style="focus:ring-color: ${colors.primary};">
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2 text-gray-700">Email</label>
              <input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50" placeholder="your@email.com" style="focus:ring-color: ${colors.primary};">
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2 text-gray-700">Subject</label>
            <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50" placeholder="How can we help?" style="focus:ring-color: ${colors.primary};">
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2 text-gray-700">Message</label>
            <textarea rows="5" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50" placeholder="Tell us more..." style="focus:ring-color: ${colors.primary};"></textarea>
          </div>
          <button type="submit" class="w-full py-4 rounded-lg text-white font-bold text-lg hover:shadow-xl transition gradient-primary">
            Send Message
          </button>
        </form>
        <div class="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
          <div class="text-center">
            <div class="w-12 h-12 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white text-xl font-bold">
              📧
            </div>
            <h4 class="font-bold mb-2">Email</h4>
            <p class="text-gray-600">hello@${analysis.appName.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white text-xl font-bold">
              📞
            </div>
            <h4 class="font-bold mb-2">Phone</h4>
            <p class="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center text-white text-xl font-bold">
              📍
            </div>
            <h4 class="font-bold mb-2">Location</h4>
            <p class="text-gray-600">123 Main Street<br>City, State 12345</p>
          </div>
        </div>
      </div>
    </div>
  </section>

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
