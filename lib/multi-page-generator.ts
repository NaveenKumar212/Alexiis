import { colorSchemes } from './templates';
import { analyzePrompt, type PromptAnalysis } from './prompt-generator';

type ColorScheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

// This is a simplified template for multi-page generation
const defaultTemplate = {
  hero: {
    headline: 'Welcome to Your New Website',
    subheadline: 'A modern, professional website built just for you',
    cta1: 'Get Started',
    cta2: 'Learn More'
  },
  features: [
    { title: 'Fast & Responsive', description: 'Lightning-fast performance on all devices' },
    { title: 'Modern Design', description: 'Clean, contemporary aesthetics that stand out' },
    { title: 'Easy to Use', description: 'Intuitive interface for seamless navigation' },
    { title: 'Secure', description: 'Built with security best practices in mind' },
    { title: 'Scalable', description: 'Grows with your business needs' },
    { title: '24/7 Support', description: 'Always here to help when you need us' }
  ]
};

function createNavigation(analysis: PromptAnalysis, colors: ColorScheme, currentPage: string): string {
  return `
    <nav class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl gradient-primary">
              ${analysis.appName.charAt(0).toUpperCase()}
            </div>
            <span class="text-2xl font-bold text-gradient">${analysis.appName}</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="?page=home" class="${currentPage === 'home' ? 'text-gray-900 font-bold border-b-2' : 'text-gray-700 hover:text-gray-900'} font-medium transition pb-1" style="${currentPage === 'home' ? `border-color: ${colors.primary}` : ''}">Home</a>
            <a href="?page=features" class="${currentPage === 'features' ? 'text-gray-900 font-bold border-b-2' : 'text-gray-700 hover:text-gray-900'} font-medium transition pb-1" style="${currentPage === 'features' ? `border-color: ${colors.primary}` : ''}">Features</a>
            <a href="?page=about" class="${currentPage === 'about' ? 'text-gray-900 font-bold border-b-2' : 'text-gray-700 hover:text-gray-900'} font-medium transition pb-1" style="${currentPage === 'about' ? `border-color: ${colors.primary}` : ''}">About</a>
            <a href="?page=contact" class="${currentPage === 'contact' ? 'text-gray-900 font-bold border-b-2' : 'text-gray-700 hover:text-gray-900'} font-medium transition pb-1" style="${currentPage === 'contact' ? `border-color: ${colors.primary}` : ''}">Contact</a>
          </div>
          <button class="px-6 py-2.5 rounded-lg text-white font-semibold hover:shadow-lg transition gradient-primary">
            ${defaultTemplate.hero.cta1}
          </button>
        </div>
      </div>
    </nav>
  `;
}

function createFooter(analysis: PromptAnalysis): string {
  return `
    <footer class="py-12 px-4 bg-gray-50 border-t border-gray-200 mt-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold gradient-primary">
                ${analysis.appName.charAt(0).toUpperCase()}
              </div>
              <span class="text-xl font-bold text-gradient">${analysis.appName}</span>
            </div>
            <p class="text-gray-600">${defaultTemplate.hero.subheadline}</p>
          </div>
          <div>
            <h4 class="font-bold mb-4">Navigation</h4>
            <ul class="space-y-2 text-gray-600">
              <li><a href="?page=home" class="hover:text-gray-900 transition">Home</a></li>
              <li><a href="?page=features" class="hover:text-gray-900 transition">Features</a></li>
              <li><a href="?page=about" class="hover:text-gray-900 transition">About</a></li>
              <li><a href="?page=contact" class="hover:text-gray-900 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Contact</h4>
            <ul class="space-y-2 text-gray-600">
              <li>contact@${analysis.appName.toLowerCase().replace(/\s+/g, '')}.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Follow Us</h4>
            <div class="flex space-x-4 text-gray-600">
              <a href="#" class="hover:text-gray-900 transition">Twitter</a>
              <a href="#" class="hover:text-gray-900 transition">LinkedIn</a>
            </div>
          </div>
        </div>
        <div class="text-center text-gray-600 pt-8 border-t border-gray-200">
          <p>&copy; 2024 ${analysis.appName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

export function generateMultiPageWebsite(prompt: string): string {
  const analysis = analyzePrompt(prompt);
  const colors = colorSchemes[analysis.colorScheme as keyof typeof colorSchemes] || colorSchemes.blue;

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
    .page { display: none; }
    .page.active { display: block; }
  </style>
</head>
<body class="antialiased" style="background: ${colors.background}; color: ${colors.text};">

  <!-- Home Page -->
  <div id="page-home" class="page active">
    ${createNavigation(analysis, colors, 'home')}
    <section class="pt-32 pb-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            ${defaultTemplate.hero.headline}
            <span class="block text-gradient mt-2">${analysis.appName}</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            ${defaultTemplate.hero.subheadline}
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button class="px-8 py-4 rounded-xl text-white font-bold text-lg hover:shadow-2xl transition gradient-primary">
              ${defaultTemplate.hero.cta1}
            </button>
            <button class="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition hover:bg-gray-50" style="border-color: ${colors.primary}; color: ${colors.primary};">
              ${defaultTemplate.hero.cta2}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4">Welcome to <span class="text-gradient">${analysis.appName}</span></h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-12">${analysis.description}</p>
        <a href="?page=features" class="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg hover:shadow-2xl transition gradient-primary">
          Explore Features
        </a>
      </div>
    </section>
    ${createFooter(analysis)}
  </div>

  <!-- Features Page -->
  <div id="page-features" class="page">
    ${createNavigation(analysis, colors, 'features')}
    <section class="pt-32 pb-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            Our <span class="text-gradient">Features</span>
          </h1>
          <p class="text-xl text-gray-600">Everything you need to succeed</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          ${defaultTemplate.features.map((feature, i) => `
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
    ${createFooter(analysis)}
  </div>

  <!-- About Page -->
  <div id="page-about" class="page">
    ${createNavigation(analysis, colors, 'about')}
    <section class="pt-32 pb-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            About <span class="text-gradient">${analysis.appName}</span>
          </h1>
          <p class="text-xl text-gray-600">Our story and mission</p>
        </div>

        <div class="max-w-4xl mx-auto space-y-12">
          <div class="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm">
            <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              ${defaultTemplate.hero.subheadline} We're dedicated to providing the best experience for our customers and helping them achieve their goals.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="bg-white rounded-2xl p-8 border border-gray-200">
              <div class="text-5xl font-bold mb-2 text-gradient">500+</div>
              <div class="text-xl text-gray-600">Happy Customers</div>
            </div>
            <div class="bg-white rounded-2xl p-8 border border-gray-200">
              <div class="text-5xl font-bold mb-2 text-gradient">50+</div>
              <div class="text-xl text-gray-600">Countries</div>
            </div>
            <div class="bg-white rounded-2xl p-8 border border-gray-200">
              <div class="text-5xl font-bold mb-2 text-gradient">99%</div>
              <div class="text-xl text-gray-600">Satisfaction Rate</div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-2xl p-12">
            <h2 class="text-3xl font-bold mb-6">Why Choose Us</h2>
            <ul class="space-y-4 text-lg text-gray-600">
              ${defaultTemplate.features.slice(0, 4).map(feature => `
              <li class="flex items-start">
                <span class="text-2xl mr-4 gradient-primary text-white px-3 py-1 rounded-lg">✓</span>
                <div>
                  <span class="font-bold text-gray-900">${feature.title}:</span> ${feature.description}
                </div>
              </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>
    ${createFooter(analysis)}
  </div>

  <!-- Contact Page -->
  <div id="page-contact" class="page">
    ${createNavigation(analysis, colors, 'contact')}
    <section class="pt-32 pb-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold mb-4">
            Get In <span class="text-gradient">Touch</span>
          </h1>
          <p class="text-xl text-gray-600">We'd love to hear from you</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 class="text-3xl font-bold mb-8">Contact Information</h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-2xl gradient-primary">
                  📧
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Email</h3>
                  <p class="text-gray-600">contact@${analysis.appName.toLowerCase().replace(/\s+/g, '')}.com</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-2xl gradient-primary">
                  📞
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Phone</h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-2xl gradient-primary">
                  📍
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Address</h3>
                  <p class="text-gray-600">123 Business Street, Suite 100<br>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form class="space-y-4" onsubmit="event.preventDefault(); alert('Thank you for your message! We will get back to you soon.');">
              <div>
                <label class="block text-sm font-semibold mb-2">Name</label>
                <input type="text" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50" placeholder="Your name" style="focus:ring-color: ${colors.primary};">
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2">Email</label>
                <input type="email" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50" placeholder="your@email.com" style="focus:ring-color: ${colors.primary};">
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2">Message</label>
                <textarea rows="4" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50" placeholder="Your message..." style="focus:ring-color: ${colors.primary};"></textarea>
              </div>
              <button type="submit" class="w-full py-3 rounded-lg text-white font-bold hover:shadow-lg transition gradient-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    ${createFooter(analysis)}
  </div>

  <script>
    // Simple client-side routing for multi-page navigation
    function showPage(pageName) {
      // Hide all pages
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });

      // Show selected page
      const targetPage = document.getElementById('page-' + pageName);
      if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);

        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('page', pageName);
        window.history.pushState({}, '', url);
      }
    }

    // Handle navigation clicks
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href^="?page="]');
      if (link) {
        e.preventDefault();
        const pageName = new URL(link.href).searchParams.get('page');
        if (pageName) {
          showPage(pageName);
        }
      }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
      const params = new URLSearchParams(window.location.search);
      const pageName = params.get('page') || 'home';
      showPage(pageName);
    });

    // Show correct page on load
    window.addEventListener('DOMContentLoaded', function() {
      const params = new URLSearchParams(window.location.search);
      const pageName = params.get('page') || 'home';
      showPage(pageName);
    });
  </script>
</body>
</html>`;
}
