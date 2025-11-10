'use client';

import { useEffect, useState } from 'react';
import { supabase, Template } from '@/lib/supabase';
import TemplateCard from '@/components/TemplateCard';
import { Wand2, Filter, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function GeneratePage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'landing', name: 'Landing Pages' },
    { id: 'saas', name: 'SaaS & Tech' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'restaurant', name: 'Food & Hospitality' },
    { id: 'portfolio', name: 'Creative & Media' },
    { id: 'professional', name: 'Professional Services' },
    { id: 'realestate', name: 'Real Estate' },
    { id: 'education', name: 'Education' },
    { id: 'fitness', name: 'Fitness & Wellness' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'blog', name: 'Blog & Content' },
    { id: 'agency', name: 'Agency' },
    { id: 'startup', name: 'Startup' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'hospitality', name: 'Hotels & Travel' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'nonprofit', name: 'Nonprofit' },
  ];

  useEffect(() => {
    loadTemplates();
  }, []);

  useEffect(() => {
    filterTemplates();
  }, [selectedCategory, searchQuery, templates]);

  async function loadTemplates() {
    try {
      const { data, error } = await supabase
        .from('templates')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTemplates(data || []);
      setFilteredTemplates(data || []);
    } catch (error) {
      console.error('Error loading templates:', error);
    } finally {
      setLoading(false);
    }
  }

  function filterTemplates() {
    let filtered = templates;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((t) => t.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredTemplates(filtered);
  }

  function handleTemplateSelect(template: Template) {
    router.push(`/customize?template=${template.id}`);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Wand2 className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Greta AI
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="/generate"
                className="text-white font-medium"
              >
                Templates
              </Link>
              <Link
                href="/create"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Create with AI
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-6">
            <Wand2 className="w-4 h-4" />
            <span>37+ Premium Templates</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Perfect Template
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select a template to customize and generate your production-ready website
          </p>
        </div>

        <div className="mb-12 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-gray-500 transition-all"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-12 pr-10 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white cursor-pointer transition-all min-w-[200px]"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id} className="bg-gray-900">
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black shadow-lg shadow-emerald-500/30'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-400"></div>
          </div>
        ) : (
          <>
            <div className="mb-6 text-gray-400 text-lg">
              <span className="text-emerald-400 font-semibold">{filteredTemplates.length}</span> template{filteredTemplates.length !== 1 ? 's' : ''} available
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onClick={() => handleTemplateSelect(template)}
                />
              ))}
            </div>
          </>
        )}

        {!loading && filteredTemplates.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400 mb-6">No templates found matching your criteria</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105"
            >
              <span>Clear Filters</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
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
