'use client';

import { useEffect, useState } from 'react';
import { Sparkles, Rocket, Globe, Wand2, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Wand2 className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Greta AI
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/generate"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Templates
              </Link>
              <Link
                href="/create"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Create with AI
              </Link>
              <Link
                href="/create"
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-32 text-center relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -top-20 left-1/4 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-40 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className={`relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Website Generation</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Build Professional
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Websites in Seconds
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Generate stunning, production-ready websites with AI. Choose from 37+ premium templates across every industry. Download as HTML or complete WordPress themes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/generate"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-105"
              >
                <Rocket className="w-5 h-5" />
                <span>Start Creating</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>

        <div id="features" className={`grid md:grid-cols-3 gap-6 py-20 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <FeatureCard
            icon={<Globe className="w-10 h-10" />}
            title="37+ Premium Templates"
            description="Industry-specific designs for SaaS, E-commerce, Restaurants, Real Estate, Healthcare, and more"
            gradient="from-emerald-500 to-cyan-500"
          />
          <FeatureCard
            icon={<Wand2 className="w-10 h-10" />}
            title="Full Customization"
            description="Customize colors, content, layouts with real-time preview. Your brand, your way"
            gradient="from-cyan-500 to-blue-500"
          />
          <FeatureCard
            icon={<Sparkles className="w-10 h-10" />}
            title="WordPress Export"
            description="Download complete WordPress themes with multiple pages, ready for deployment"
            gradient="from-blue-500 to-purple-500"
          />
        </div>

        <div className={`py-20 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Every Industry,
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Every Need</span>
            </h2>
            <p className="text-xl text-gray-400">Professional templates designed for your specific business</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'SaaS & Tech', icon: '⚡' },
              { name: 'E-Commerce', icon: '🛍️' },
              { name: 'Restaurants', icon: '🍽️' },
              { name: 'Real Estate', icon: '🏠' },
              { name: 'Healthcare', icon: '⚕️' },
              { name: 'Education', icon: '📚' },
              { name: 'Portfolio', icon: '💼' },
              { name: 'Fitness', icon: '💪' },
              { name: 'Legal', icon: '⚖️' },
              { name: 'Automotive', icon: '🚗' },
              { name: 'Hospitality', icon: '🏨' },
              { name: 'Landing Pages', icon: '🚀' },
            ].map((item) => (
              <div
                key={item.name}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-emerald-500/50 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="font-semibold text-sm text-gray-300 group-hover:text-white transition-colors">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`py-20 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 rounded-3xl p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Complete WordPress Themes
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Not just templates. Get fully functional WordPress themes with multiple pages, automatic setup, and production-ready code.
                </p>
                <div className="space-y-4">
                  {[
                    'Home, About, Services, Contact & more',
                    'Automatic page creation on activation',
                    'Responsive design for all devices',
                    'SEO optimized structure',
                    'Contact forms and integrations'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl border border-emerald-500/30 flex items-center justify-center">
                  <Globe className="w-32 h-32 text-emerald-400 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 text-center">
          <div className="relative bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Ready to Launch Your Website?
              </h2>
              <p className="text-xl mb-10 text-black/80 max-w-2xl mx-auto">
                Join thousands of businesses using Greta AI to create stunning websites in minutes
              </p>
              <Link
                href="/generate"
                className="inline-flex items-center space-x-2 px-10 py-5 bg-black text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                <span>Start Building Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Greta AI
              </span>
            </div>
            <p className="text-gray-400">AI-Powered Website Generation Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, gradient }: { icon: React.ReactNode; title: string; description: string; gradient: string }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all">
      <div className={`inline-flex p-3 bg-gradient-to-br ${gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
