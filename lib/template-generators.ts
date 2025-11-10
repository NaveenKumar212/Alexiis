import { colorSchemes } from './templates';

type CustomizationData = {
  title: string;
  subtitle: string;
  colorScheme: string;
  companyName: string;
  description: string;
};

type ColorScheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export function generateAIPlatform(custom: CustomizationData, colors: ColorScheme): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${custom.title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes pulse-glow { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
    .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
    @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
    .float { animation: float 6s ease-in-out infinite; }
  </style>
</head>
<body class="font-sans overflow-x-hidden" style="background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%); color: white;">
  <nav class="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-cyan-500/20">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">${custom.companyName}</div>
      <div class="flex space-x-6">
        <a href="#features" class="text-gray-300 hover:text-cyan-400 transition">Features</a>
        <a href="#technology" class="text-gray-300 hover:text-cyan-400 transition">Technology</a>
        <a href="#pricing" class="text-gray-300 hover:text-cyan-400 transition">Pricing</a>
        <button class="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition">Get Started</button>
      </div>
    </div>
  </nav>

  <section class="relative pt-32 pb-20 px-6 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-20 left-10 pulse-glow"></div>
      <div class="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-20 right-10 pulse-glow" style="animation-delay: 1.5s;"></div>
    </div>
    <div class="max-w-6xl mx-auto text-center relative z-10">
      <div class="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6 float">Powered by Advanced AI</div>
      <h1 class="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">${custom.title}</h1>
      <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">${custom.subtitle}</p>
      <div class="flex justify-center space-x-4">
        <button class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition transform hover:scale-105">Start Free Trial</button>
        <button class="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition">Watch Demo</button>
      </div>
    </div>
  </section>

  <section id="features" class="py-20 px-6 relative">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Advanced AI Capabilities</h2>
      <div class="grid md:grid-cols-3 gap-8">
        ${['Neural Processing', 'Machine Learning', 'Deep Analytics', 'Real-time Insights', 'Auto Scaling', 'Secure Infrastructure'].map((feature, i) => `
        <div class="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-400 transition hover:transform hover:scale-105">
          <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold mb-4">${i + 1}</div>
          <h3 class="text-2xl font-bold mb-3 text-cyan-300">${feature}</h3>
          <p class="text-gray-400">Experience cutting-edge AI technology that transforms how you work and make decisions.</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section id="technology" class="py-20 px-6 bg-gradient-to-b from-transparent to-cyan-900/20">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-12">Trusted by Industry Leaders</h2>
      <div class="grid grid-cols-4 gap-12 opacity-50">
        ${[1, 2, 3, 4].map(i => `<div class="text-4xl font-bold text-gray-600">LOGO ${i}</div>`).join('')}
      </div>
    </div>
  </section>

  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-16">
      <h2 class="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
      <p class="text-xl mb-8 opacity-90">Join thousands of companies using AI to stay ahead</p>
      <button class="px-12 py-4 bg-white text-cyan-600 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">Start Your Journey</button>
    </div>
  </section>

  <footer class="py-12 px-6 border-t border-cyan-500/20">
    <div class="max-w-6xl mx-auto text-center text-gray-400">
      <p>&copy; 2024 ${custom.companyName}. Powered by Advanced AI.</p>
    </div>
  </footer>
</body>
</html>`;
}

export function generateLuxuryFashion(custom: CustomizationData, colors: ColorScheme): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${custom.title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
    .playfair { font-family: 'Playfair Display', serif; }
  </style>
</head>
<body class="font-sans bg-white text-gray-900">
  <nav class="fixed top-0 w-full z-50 backdrop-blur-sm bg-white/90 border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
      <div class="text-3xl font-light tracking-widest playfair">${custom.companyName}</div>
      <div class="flex space-x-8 text-sm tracking-wider uppercase">
        <a href="#collection" class="hover:text-gray-600 transition">Collection</a>
        <a href="#about" class="hover:text-gray-600 transition">About</a>
        <a href="#contact" class="hover:text-gray-600 transition">Contact</a>
      </div>
    </div>
  </nav>

  <section class="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-7xl font-light mb-6 playfair tracking-wide">${custom.title}</h1>
      <p class="text-xl text-gray-600 mb-12 font-light tracking-wide">${custom.subtitle}</p>
      <button class="px-12 py-4 bg-black text-white font-light tracking-widest text-sm uppercase hover:bg-gray-900 transition">Explore Collection</button>
    </div>
  </section>

  <section id="collection" class="py-20 px-6">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-5xl font-light text-center mb-16 playfair">Featured Collection</h2>
      <div class="grid md:grid-cols-3 gap-8">
        ${['Spring Elegance', 'Summer Luxe', 'Autumn Grace', 'Winter Sophistication', 'Evening Gowns', 'Designer Accessories'].map(item => `
        <div class="group cursor-pointer">
          <div class="aspect-[3/4] bg-gray-100 mb-6 overflow-hidden">
            <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform duration-700">
              <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <h3 class="text-xl mb-2 playfair">${item}</h3>
          <p class="text-gray-600 text-sm tracking-wider">From $2,500</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="py-32 px-6 bg-black text-white">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-5xl font-light mb-6 playfair">Timeless Elegance</h2>
      <p class="text-xl font-light mb-12 text-gray-300">Experience luxury crafted to perfection</p>
      <button class="px-12 py-4 border-2 border-white font-light tracking-widest text-sm uppercase hover:bg-white hover:text-black transition">Book Consultation</button>
    </div>
  </section>

  <footer class="py-16 px-6 bg-gray-50 border-t">
    <div class="max-w-6xl mx-auto text-center text-gray-600">
      <p class="text-sm tracking-widest uppercase">&copy; 2024 ${custom.companyName}. Luxury Fashion House.</p>
    </div>
  </footer>
</body>
</html>`;
}

export function generateFineDining(custom: CustomizationData, colors: ColorScheme): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${custom.title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="font-serif bg-zinc-900 text-gray-100">
  <nav class="fixed top-0 w-full z-50 backdrop-blur-md bg-zinc-900/80 border-b border-amber-900/30">
    <div class="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
      <div class="text-3xl font-light tracking-wider text-amber-500">${custom.companyName}</div>
      <div class="flex space-x-8">
        <a href="#menu" class="text-gray-300 hover:text-amber-500 transition">Menu</a>
        <a href="#experience" class="text-gray-300 hover:text-amber-500 transition">Experience</a>
        <a href="#reservations" class="px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition">Reserve Table</a>
      </div>
    </div>
  </nav>

  <section class="relative h-screen flex items-center justify-center">
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-zinc-900"></div>
    <div class="relative z-10 text-center px-6">
      <h1 class="text-7xl font-light mb-6 text-amber-400">${custom.title}</h1>
      <p class="text-2xl text-gray-300 mb-12 font-light italic">${custom.subtitle}</p>
      <div class="flex justify-center space-x-6">
        <button class="px-10 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">Book Now</button>
        <button class="px-10 py-4 border border-amber-600 text-amber-500 rounded-lg hover:bg-amber-600/10 transition">View Menu</button>
      </div>
    </div>
  </section>

  <section id="menu" class="py-32 px-6 bg-zinc-800">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-5xl font-light text-center mb-20 text-amber-400">Our Menu</h2>
      <div class="space-y-16">
        ${['Appetizers', 'Main Course', 'Desserts'].map(section => `
        <div>
          <h3 class="text-3xl font-light mb-8 text-amber-500 border-b border-amber-900/30 pb-4">${section}</h3>
          <div class="grid gap-8">
            ${[1, 2, 3].map(i => `
            <div class="flex justify-between items-start">
              <div>
                <h4 class="text-xl mb-2">Signature Dish ${i}</h4>
                <p class="text-gray-400 italic">Exquisite ingredients crafted to perfection</p>
              </div>
              <span class="text-xl text-amber-500 font-light">$${45 + i * 10}</span>
            </div>
            `).join('')}
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="py-32 px-6 bg-gradient-to-b from-amber-900/20 to-zinc-900">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-light mb-6">An Unforgettable Experience</h2>
      <p class="text-xl text-gray-300 mb-12 font-light">Michelin-starred cuisine in an intimate setting</p>
      <button class="px-12 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition text-lg">Reserve Your Table</button>
    </div>
  </section>

  <footer class="py-12 px-6 border-t border-amber-900/30">
    <div class="max-w-6xl mx-auto text-center text-gray-400">
      <p>&copy; 2024 ${custom.companyName}. Fine Dining Excellence.</p>
    </div>
  </footer>
</body>
</html>`;
}

export function generateRealEstate(custom: CustomizationData, colors: ColorScheme): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${custom.title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="font-sans bg-gray-50">
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-blue-600">${custom.companyName}</div>
      <div class="flex space-x-8">
        <a href="#properties" class="text-gray-700 hover:text-blue-600 transition">Properties</a>
        <a href="#services" class="text-gray-700 hover:text-blue-600 transition">Services</a>
        <a href="#contact" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact Agent</a>
      </div>
    </div>
  </nav>

  <section class="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-6xl font-bold mb-6 text-gray-900">${custom.title}</h1>
      <p class="text-xl text-gray-600 mb-12">${custom.subtitle}</p>
      <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        <div class="grid md:grid-cols-4 gap-4">
          <input type="text" placeholder="Location" class="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <select class="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Property Type</option>
            <option>House</option>
            <option>Apartment</option>
          </select>
          <input type="text" placeholder="Price Range" class="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">Search</button>
        </div>
      </div>
    </div>
  </section>

  <section id="properties" class="py-20 px-6">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center">Featured Properties</h2>
      <div class="grid md:grid-cols-3 gap-8">
        ${[1, 2, 3, 4, 5, 6].map(i => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer">
          <div class="aspect-video bg-gradient-to-br from-blue-200 to-blue-400 relative overflow-hidden">
            <div class="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">For Sale</div>
            <div class="w-full h-full flex items-center justify-center text-white text-6xl font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">${i}</div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2">$${(500 + i * 50)},000</h3>
            <p class="text-gray-600 mb-4">Modern Luxury Home</p>
            <div class="flex space-x-4 text-sm text-gray-500">
              <span>3 Beds</span> <span>2 Baths</span> <span>2,400 sqft</span>
            </div>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="py-20 px-6 bg-blue-600 text-white">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6">Find Your Dream Home Today</h2>
      <p class="text-xl mb-8 opacity-90">Work with experienced agents who know the market</p>
      <button class="px-12 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl transition">Schedule Consultation</button>
    </div>
  </section>

  <footer class="py-12 px-6 bg-gray-900 text-gray-400">
    <div class="max-w-6xl mx-auto text-center">
      <p>&copy; 2024 ${custom.companyName}. Your Trusted Real Estate Partner.</p>
    </div>
  </footer>
</body>
</html>`;
}
