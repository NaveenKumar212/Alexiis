import { colorSchemes } from './templates';

type ColorScheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

type TemplateData = {
  appName: string;
  appType: string;
  hero: {
    headline: string;
    subheadline: string;
    cta1: string;
    cta2: string;
  };
  features: Array<{ title: string; description: string }>;
  stats?: Array<{ value: string; label: string }>;
  testimonial?: { quote: string; author: string; role: string };
  colors: ColorScheme;
  images: { hero: string; feature: string[]; about: string };
};

// Template 1: Modern Split Hero with Feature Cards
export function generateModernSplitLayout(data: TemplateData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.appName}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gradient-primary { background: linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary}); }
    .text-gradient {
      background: linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary});
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    html { scroll-behavior: smooth; }
  </style>
</head>
<body class="antialiased" style="background: ${data.colors.background}; color: ${data.colors.text};">

  <nav class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl gradient-primary">
            ${data.appName.charAt(0).toUpperCase()}
          </div>
          <span class="text-2xl font-bold text-gradient">${data.appName}</span>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-gray-700 hover:text-gray-900 font-medium transition">Home</a>
          <a href="#features" class="text-gray-700 hover:text-gray-900 font-medium transition">Features</a>
          <a href="#about" class="text-gray-700 hover:text-gray-900 font-medium transition">About</a>
          <a href="#contact" class="text-gray-700 hover:text-gray-900 font-medium transition">Contact</a>
        </div>
        <button class="px-6 py-2.5 rounded-lg text-white font-semibold hover:shadow-lg transition gradient-primary">
          ${data.hero.cta1}
        </button>
      </div>
    </div>
  </nav>

  <section id="home" class="pt-32 pb-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            ${data.hero.headline}
            <span class="block text-gradient mt-2">${data.appName}</span>
          </h1>
          <p class="text-xl text-gray-600 mb-10">${data.hero.subheadline}</p>
          <div class="flex flex-col sm:flex-row items-start gap-4">
            <button class="px-8 py-4 rounded-xl text-white font-bold text-lg hover:shadow-2xl transition gradient-primary">
              ${data.hero.cta1}
            </button>
            <button class="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition hover:bg-gray-50" style="border-color: ${data.colors.primary}; color: ${data.colors.primary};">
              ${data.hero.cta2}
            </button>
          </div>
        </div>
        <div>
          <img src="${data.images.hero}" alt="${data.appName}" class="rounded-3xl shadow-2xl w-full h-auto object-cover" style="max-height: 600px;">
        </div>
      </div>
    </div>
  </section>

  <section id="features" class="py-20 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">Why Choose <span class="text-gradient">Us</span></h2>
        <p class="text-xl text-gray-600">Everything you need to succeed</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        ${data.features.slice(0, 6).map((feature, i) => `
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

  ${data.stats ? `
  <section class="py-20 px-4 gradient-primary">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-4 gap-8 text-center text-white">
        ${data.stats.map(stat => `
        <div>
          <div class="text-5xl font-bold mb-2">${stat.value}</div>
          <div class="text-xl opacity-90">${stat.label}</div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <section id="about" class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">About <span class="text-gradient">${data.appName}</span></h2>
        <p class="text-xl text-gray-600">Our Story and Mission</p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="${data.images.about}" alt="About ${data.appName}" class="rounded-3xl shadow-2xl w-full h-auto object-cover">
        </div>
        <div>
          <h3 class="text-3xl font-bold mb-6">Who We Are</h3>
          <p class="text-lg text-gray-600 mb-6">${data.hero.subheadline} We're passionate about delivering excellence.</p>
          <p class="text-lg text-gray-600">Founded with a vision to transform the industry, we've grown into a trusted partner for thousands of satisfied customers worldwide.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="py-20 px-4 bg-gray-50">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-5xl font-bold mb-6">Get In <span class="text-gradient">Touch</span></h2>
      <p class="text-xl text-gray-600 mb-12">We'd love to hear from you</p>
      <div class="bg-white rounded-3xl p-12 shadow-lg">
        <form class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50">
            <input type="email" placeholder="your@email.com" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50">
          </div>
          <textarea rows="5" placeholder="Tell us more..." class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"></textarea>
          <button type="submit" class="w-full py-4 rounded-lg text-white font-bold text-lg hover:shadow-xl transition gradient-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>

  <footer class="bg-gray-900 text-white py-12 px-4">
    <div class="max-w-7xl mx-auto text-center">
      <div class="flex items-center justify-center space-x-3 mb-4">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl gradient-primary">
          ${data.appName.charAt(0).toUpperCase()}
        </div>
        <span class="text-xl font-bold">${data.appName}</span>
      </div>
      <p class="text-gray-400 mb-8">${data.hero.subheadline}</p>
      <p class="text-gray-500">&copy; 2024 ${data.appName}. All rights reserved.</p>
    </div>
  </footer>

  <script>
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  </script>
</body>
</html>`;
}

// Template 2: Full-Width Hero with Overlay
export function generateFullWidthHeroLayout(data: TemplateData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.appName}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gradient-primary { background: linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary}); }
    .text-gradient {
      background: linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary});
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    html { scroll-behavior: smooth; }
    .hero-bg {
      background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${data.images.hero}');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }
  </style>
</head>
<body class="antialiased">

  <nav class="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl gradient-primary">
            ${data.appName.charAt(0).toUpperCase()}
          </div>
          <span class="text-2xl font-bold text-white">${data.appName}</span>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-white hover:text-gray-300 font-medium transition">Home</a>
          <a href="#features" class="text-white hover:text-gray-300 font-medium transition">Features</a>
          <a href="#gallery" class="text-white hover:text-gray-300 font-medium transition">Gallery</a>
          <a href="#contact" class="text-white hover:text-gray-300 font-medium transition">Contact</a>
        </div>
        <button class="px-6 py-2.5 rounded-lg text-white font-semibold hover:shadow-lg transition gradient-primary">
          ${data.hero.cta1}
        </button>
      </div>
    </div>
  </nav>

  <section id="home" class="hero-bg min-h-screen flex items-center justify-center text-center px-4">
    <div class="max-w-4xl">
      <h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white">
        ${data.hero.headline}<br>
        <span class="text-gradient">${data.appName}</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">${data.hero.subheadline}</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="px-10 py-5 rounded-xl text-white font-bold text-lg hover:shadow-2xl transition gradient-primary">
          ${data.hero.cta1}
        </button>
        <button class="px-10 py-5 rounded-xl font-semibold text-lg border-2 border-white text-white transition hover:bg-white hover:text-gray-900">
          ${data.hero.cta2}
        </button>
      </div>
    </div>
  </section>

  <section id="features" class="py-20 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4"><span class="text-gradient">Premium</span> Features</h2>
        <p class="text-xl text-gray-600">Everything you need and more</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${data.features.slice(0, 6).map((feature, i) => `
        <div class="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all">
          <div class="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 gradient-primary group-hover:scale-110 transition">
            ${i + 1}
          </div>
          <h3 class="text-2xl font-bold mb-3">${feature.title}</h3>
          <p class="text-gray-600">${feature.description}</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section id="gallery" class="py-20 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4">Our <span class="text-gradient">Work</span></h2>
        <p class="text-xl text-gray-600">Take a look at what we do</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        ${data.images.feature.map((img, i) => `
        <div class="group relative overflow-hidden rounded-2xl shadow-xl">
          <img src="${img}" alt="Gallery ${i + 1}" class="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="text-white">
              <h3 class="text-2xl font-bold mb-2">${data.features[i]?.title || 'Project'}</h3>
              <p class="text-gray-200">${data.features[i]?.description || 'View details'}</p>
            </div>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  ${data.testimonial ? `
  <section class="py-20 px-4 gradient-primary">
    <div class="max-w-4xl mx-auto text-center text-white">
      <div class="text-6xl mb-6">"</div>
      <p class="text-3xl font-light mb-8 italic">${data.testimonial.quote}</p>
      <div class="flex items-center justify-center space-x-4">
        <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
          ${data.testimonial.author.charAt(0)}
        </div>
        <div class="text-left">
          <div class="font-bold text-lg">${data.testimonial.author}</div>
          <div class="opacity-90">${data.testimonial.role}</div>
        </div>
      </div>
    </div>
  </section>
  ` : ''}

  <section id="contact" class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-5xl font-bold mb-6">Let's <span class="text-gradient">Connect</span></h2>
          <p class="text-xl text-gray-600 mb-8">${data.hero.subheadline}</p>
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white text-xl">📧</div>
              <div>
                <div class="font-bold">Email</div>
                <div class="text-gray-600">hello@${data.appName.toLowerCase().replace(/\s+/g, '')}.com</div>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white text-xl">📞</div>
              <div>
                <div class="font-bold">Phone</div>
                <div class="text-gray-600">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-3xl p-8">
          <form class="space-y-4">
            <input type="text" placeholder="Your name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2">
            <input type="email" placeholder="your@email.com" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2">
            <textarea rows="5" placeholder="Your message..." class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"></textarea>
            <button type="submit" class="w-full py-4 rounded-lg text-white font-bold text-lg hover:shadow-xl transition gradient-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-gray-900 text-white py-12 px-4">
    <div class="max-w-7xl mx-auto text-center">
      <p class="text-gray-400">&copy; 2024 ${data.appName}. All rights reserved.</p>
    </div>
  </footer>

  <script>
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  </script>
</body>
</html>`;
}

// Template 3: Minimalist Centered Layout
export function generateMinimalistLayout(data: TemplateData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.appName}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gradient-primary { background: linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary}); }
    .text-gradient {
      background: linear-gradient(135deg, ${data.colors.primary}, ${data.colors.secondary});
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    html { scroll-behavior: smooth; }
  </style>
</head>
<body class="antialiased bg-white">

  <nav class="fixed w-full top-0 z-50 bg-white border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-24">
        <span class="text-3xl font-light tracking-tight">${data.appName}</span>
        <div class="hidden md:flex space-x-12">
          <a href="#home" class="text-gray-600 hover:text-gray-900 transition">Home</a>
          <a href="#services" class="text-gray-600 hover:text-gray-900 transition">Services</a>
          <a href="#work" class="text-gray-600 hover:text-gray-900 transition">Work</a>
          <a href="#contact" class="text-gray-600 hover:text-gray-900 transition">Contact</a>
        </div>
      </div>
    </div>
  </nav>

  <section id="home" class="pt-48 pb-32 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-7xl md:text-8xl font-light mb-8 tracking-tight leading-none">
        ${data.hero.headline}
      </h1>
      <p class="text-2xl text-gray-600 mb-12 font-light">${data.hero.subheadline}</p>
      <button class="px-12 py-4 rounded-full text-white font-medium text-lg hover:shadow-2xl transition gradient-primary">
        ${data.hero.cta1}
      </button>
    </div>
  </section>

  <section class="py-32 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <img src="${data.images.hero}" alt="${data.appName}" class="rounded-3xl shadow-2xl w-full h-auto object-cover" style="max-height: 700px;">
    </div>
  </section>

  <section id="services" class="py-32 px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-6xl font-light mb-20 text-center">What We Do</h2>
      <div class="space-y-16">
        ${data.features.slice(0, 4).map((feature, i) => `
        <div class="border-t border-gray-200 pt-8">
          <div class="flex items-start justify-between mb-4">
            <h3 class="text-3xl font-light">${feature.title}</h3>
            <span class="text-5xl font-light text-gray-300">0${i + 1}</span>
          </div>
          <p class="text-xl text-gray-600 font-light">${feature.description}</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section id="work" class="py-32 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-6xl font-light mb-20 text-center">Selected Work</h2>
      <div class="grid md:grid-cols-2 gap-8">
        ${data.images.feature.map((img, i) => `
        <div class="group cursor-pointer">
          <div class="overflow-hidden rounded-2xl mb-4">
            <img src="${img}" alt="Project ${i + 1}" class="w-full h-96 object-cover transform group-hover:scale-105 transition duration-700">
          </div>
          <h3 class="text-2xl font-light mb-2">${data.features[i]?.title || 'Project'} ${i + 1}</h3>
          <p class="text-gray-600">${data.features[i]?.description || 'Design & Development'}</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  ${data.stats ? `
  <section class="py-32 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-4 gap-12 text-center">
        ${data.stats.map(stat => `
        <div>
          <div class="text-6xl font-light mb-4 text-gradient">${stat.value}</div>
          <div class="text-lg text-gray-600 font-light">${stat.label}</div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <section id="contact" class="py-32 px-4 bg-gray-50">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-6xl font-light mb-8">Let's Work Together</h2>
      <p class="text-2xl text-gray-600 mb-16 font-light">${data.hero.subheadline}</p>
      <div class="space-y-4 mb-16">
        <a href="mailto:hello@${data.appName.toLowerCase().replace(/\s+/g, '')}.com" class="block text-3xl font-light hover:text-gradient transition">
          hello@${data.appName.toLowerCase().replace(/\s+/g, '')}.com
        </a>
        <a href="tel:+15551234567" class="block text-3xl font-light hover:text-gradient transition">
          +1 (555) 123-4567
        </a>
      </div>
      <button class="px-12 py-4 rounded-full text-white font-medium text-lg hover:shadow-2xl transition gradient-primary">
        Start a Project
      </button>
    </div>
  </section>

  <footer class="py-12 px-4 border-t border-gray-200">
    <div class="max-w-6xl mx-auto text-center">
      <p class="text-gray-500 font-light">&copy; 2024 ${data.appName}. All rights reserved.</p>
    </div>
  </footer>

  <script>
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  </script>
</body>
</html>`;
}

// Template selector based on app type
export function selectTemplate(appType: string, data: TemplateData): string {
  switch (appType) {
    case 'saas':
    case 'agency':
    case 'healthcare':
      return generateModernSplitLayout(data);

    case 'restaurant':
    case 'fitness':
    case 'realestate':
    case 'ecommerce':
      return generateFullWidthHeroLayout(data);

    case 'portfolio':
    case 'creative':
      return generateMinimalistLayout(data);

    default:
      return generateModernSplitLayout(data);
  }
}
