import { analyzePrompt, type PromptAnalysis } from './prompt-generator';
import { colorSchemes } from './templates';

type ColorScheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

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

export function generateReactProject(prompt: string): { [filename: string]: string } {
  const analysis = analyzePrompt(prompt);
  const colors = colorSchemes[analysis.colorScheme as keyof typeof colorSchemes] || colorSchemes.blue;

  const projectName = analysis.appName.toLowerCase().replace(/\s+/g, '-');

  const files: { [filename: string]: string } = {};

  // package.json
  files['package.json'] = JSON.stringify({
    name: projectName,
    version: '0.1.0',
    private: true,
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview'
    },
    dependencies: {
      react: '^18.3.1',
      'react-dom': '^18.3.1',
      'react-router-dom': '^6.22.0',
      'lucide-react': '^0.344.0'
    },
    devDependencies: {
      '@types/react': '^18.3.5',
      '@types/react-dom': '^18.3.0',
      '@vitejs/plugin-react': '^4.2.1',
      autoprefixer: '^10.4.18',
      postcss: '^8.4.35',
      tailwindcss: '^3.4.1',
      typescript: '^5.5.3',
      vite: '^5.1.4'
    }
  }, null, 2);

  // vite.config.ts
  files['vite.config.ts'] = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
`;

  // tsconfig.json
  files['tsconfig.json'] = JSON.stringify({
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      moduleResolution: 'bundler',
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'react-jsx',
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true
    },
    include: ['src'],
    references: [{ path: './tsconfig.node.json' }]
  }, null, 2);

  // tsconfig.node.json
  files['tsconfig.node.json'] = JSON.stringify({
    compilerOptions: {
      composite: true,
      skipLibCheck: true,
      module: 'ESNext',
      moduleResolution: 'bundler',
      allowSyntheticDefaultImports: true
    },
    include: ['vite.config.ts']
  }, null, 2);

  // tailwind.config.js
  files['tailwind.config.js'] = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '${colors.primary}',
        secondary: '${colors.secondary}',
      }
    },
  },
  plugins: [],
}
`;

  // postcss.config.js
  files['postcss.config.js'] = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;

  // index.html
  files['index.html'] = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${analysis.appName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

  // README.md
  files['README.md'] = `# ${analysis.appName}

${analysis.description}

## Getting Started

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
  ├── components/      # Reusable components
  ├── pages/          # Page components
  ├── App.tsx         # Main app component with routing
  ├── main.tsx        # Entry point
  └── index.css       # Global styles
\`\`\`

## Features

${analysis.features.map((f: string) => `- ${f}`).join('\n')}

## Tech Stack

- React 18
- TypeScript
- React Router
- Tailwind CSS
- Vite
- Lucide React (icons)
`;

  // .gitignore
  files['.gitignore'] = `# Dependencies
node_modules/

# Production build
dist/

# Environment variables
.env
.env.local
.env.production.local

# Editor directories
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
`;

  // src/main.tsx
  files['src/main.tsx'] = `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`;

  // src/index.css
  files['src/index.css'] = `@tailwind base;
@tailwind components;
@tailwind utilities;

.gradient-primary {
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
}

.text-gradient {
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
`;

  // src/App.tsx
  files['src/App.tsx'] = `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Features from './pages/Features'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
`;

  // src/components/Layout.tsx
  files['src/components/Layout.tsx'] = `import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '${colors.background}', color: '${colors.text}' }}>
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
`;

  // src/components/Navigation.tsx
  files['src/components/Navigation.tsx'] = `import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl gradient-primary">
              ${analysis.appName.charAt(0).toUpperCase()}
            </div>
            <span className="text-2xl font-bold text-gradient">${analysis.appName}</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={\`font-medium transition pb-1 \${
                isActive('/')
                  ? 'text-gray-900 font-bold border-b-2 border-primary'
                  : 'text-gray-700 hover:text-gray-900'
              }\`}
            >
              Home
            </Link>
            <Link
              to="/features"
              className={\`font-medium transition pb-1 \${
                isActive('/features')
                  ? 'text-gray-900 font-bold border-b-2 border-primary'
                  : 'text-gray-700 hover:text-gray-900'
              }\`}
            >
              Features
            </Link>
            <Link
              to="/about"
              className={\`font-medium transition pb-1 \${
                isActive('/about')
                  ? 'text-gray-900 font-bold border-b-2 border-primary'
                  : 'text-gray-700 hover:text-gray-900'
              }\`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={\`font-medium transition pb-1 \${
                isActive('/contact')
                  ? 'text-gray-900 font-bold border-b-2 border-primary'
                  : 'text-gray-700 hover:text-gray-900'
              }\`}
            >
              Contact
            </Link>
          </div>

          <button className="px-6 py-2.5 rounded-lg text-white font-semibold hover:shadow-lg transition gradient-primary">
            ${defaultTemplate.hero.cta1}
          </button>
        </div>
      </div>
    </nav>
  )
}
`;

  // src/components/Footer.tsx
  files['src/components/Footer.tsx'] = `import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold gradient-primary">
                ${analysis.appName.charAt(0).toUpperCase()}
              </div>
              <span className="text-xl font-bold text-gradient">${analysis.appName}</span>
            </div>
            <p className="text-gray-600">${defaultTemplate.hero.subheadline}</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/" className="hover:text-gray-900 transition">Home</Link></li>
              <li><Link to="/features" className="hover:text-gray-900 transition">Features</Link></li>
              <li><Link to="/about" className="hover:text-gray-900 transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-gray-900 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>contact@${projectName}.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-gray-600">
              <a href="#" className="hover:text-gray-900 transition">Twitter</a>
              <a href="#" className="hover:text-gray-900 transition">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 pt-8 border-t border-gray-200">
          <p>&copy; 2024 ${analysis.appName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
`;

  // src/pages/Home.tsx
  files['src/pages/Home.tsx'] = `import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              ${defaultTemplate.hero.headline}
              <span className="block text-gradient mt-2">${analysis.appName}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              ${defaultTemplate.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 rounded-xl text-white font-bold text-lg hover:shadow-2xl transition gradient-primary">
                ${defaultTemplate.hero.cta1}
              </button>
              <button className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-primary text-primary transition hover:bg-gray-50">
                ${defaultTemplate.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-gradient">${analysis.appName}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            ${analysis.description}
          </p>
          <Link
            to="/features"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-white font-bold text-lg hover:shadow-2xl transition gradient-primary"
          >
            <span>Explore Features</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
`;

  // src/pages/Features.tsx
  files['src/pages/Features.tsx'] = `export default function Features() {
  const features = ${JSON.stringify(defaultTemplate.features, null, 2)}

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-gradient">Features</span>
          </h1>
          <p className="text-xl text-gray-600">Everything you need to succeed</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-6 gradient-primary">
                {i + 1}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
`;

  // src/pages/About.tsx
  files['src/pages/About.tsx'] = `export default function About() {
  const stats = [
    { value: '500+', label: 'Happy Customers' },
    { value: '50+', label: 'Countries' },
    { value: '99%', label: 'Satisfaction Rate' }
  ]

  const features = ${JSON.stringify(defaultTemplate.features.slice(0, 4), null, 2)}

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">${analysis.appName}</span>
          </h1>
          <p className="text-xl text-gray-600">Our story and mission</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              ${defaultTemplate.hero.subheadline} We're dedicated to providing the best
              experience for our customers and helping them achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="text-5xl font-bold mb-2 text-gradient">{stat.value}</div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-2xl mr-4 gradient-primary text-white px-3 py-1 rounded-lg">✓</span>
                  <div>
                    <span className="font-bold text-gray-900">{feature.title}:</span> {feature.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
`;

  // src/pages/Contact.tsx
  files['src/pages/Contact.tsx'] = `import { useState, FormEvent } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-600">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white gradient-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">contact@${projectName}.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white gradient-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white gradient-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Business Street, Suite 100<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-bold hover:shadow-lg transition gradient-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
`;

  return files;
}
