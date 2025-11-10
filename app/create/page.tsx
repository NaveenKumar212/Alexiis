'use client';

import { useState } from 'react';
import { Wand2, Sparkles, ArrowRight, Download, Eye, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { generateWebAppFromPrompt, analyzePrompt } from '@/lib/prompt-generator';
import { supabase } from '@/lib/supabase';

export default function CreatePage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [appAnalysis, setAppAnalysis] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);

  const examples = [
    'Create a modern SaaS landing page for a project management tool',
    'Build a restaurant website with menu and reservations',
    'Design an e-commerce store for handmade jewelry',
    'Make a portfolio website for a graphic designer',
    'Create a fitness gym website with class schedules',
    'Build a real estate property listing website'
  ];

  async function handleGenerate() {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setShowPreview(false);

    try {
      const analysis = analyzePrompt(prompt);
      setAppAnalysis(analysis);

      const code = generateWebAppFromPrompt(prompt);
      setGeneratedCode(code);

      const { data, error } = await supabase
        .from('generated_apps')
        .insert({
          user_prompt: prompt,
          app_name: analysis.appName,
          app_description: analysis.description,
          app_type: analysis.appType,
          html_code: code,
          features: analysis.features,
          color_scheme: { scheme: analysis.colorScheme },
          status: 'published'
        })
        .select()
        .single();

      if (!error && data) {
        await supabase
          .from('prompt_history')
          .insert({
            prompt: prompt,
            generated_app_id: data.id
          });
      }

      setShowPreview(true);
    } catch (error) {
      console.error('Error generating app:', error);
      alert('Failed to generate app. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  }

  function handleDownload() {
    if (!generatedCode) return;

    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${appAnalysis?.appName.toLowerCase().replace(/\s+/g, '-') || 'app'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
              <Link href="/generate" className="text-gray-400 hover:text-white transition-colors font-medium">
                Templates
              </Link>
              <Link
                href="/create"
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
              >
                Create with AI
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!showPreview ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Generation</span>
              </div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Describe Your
                <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Dream Website
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-12">
                Just tell us what you want, and our AI will generate a complete, production-ready website for you
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <label className="block text-lg font-semibold text-gray-200 mb-4">
                Describe your website
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Create a modern SaaS landing page for a project management tool with pricing, features, and contact form..."
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
                rows={6}
              />
              <div className="mt-6 flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  {prompt.length} characters
                </span>
                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-xl font-bold hover:shadow-lg hover:shadow-emerald-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      <span>Generate Website</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Try these examples:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {examples.map((example, i) => (
                  <button
                    key={i}
                    onClick={() => setPrompt(example)}
                    className="text-left p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="flex items-start space-x-3">
                      <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {example}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">How it works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Describe your website</h4>
                    <p className="text-gray-400">Tell us what kind of website you want to create</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">AI generates your site</h4>
                    <p className="text-gray-400">Our AI analyzes your prompt and creates a custom website</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Preview & Download</h4>
                    <p className="text-gray-400">Preview your website and download the code instantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {appAnalysis?.appName}
                  </span>
                </h2>
                <p className="text-gray-400">Your website is ready!</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowPreview(false);
                    setGeneratedCode('');
                    setAppAnalysis(null);
                  }}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all"
                >
                  New Prompt
                </button>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download HTML</span>
                </button>
              </div>
            </div>

            {appAnalysis && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Detected Features:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/30 text-sm">
                    {appAnalysis.appType}
                  </span>
                  {appAnalysis.features.map((feature: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30 text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <div className="border-b border-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Eye className="w-5 h-5" />
                  <span>Live Preview</span>
                </div>
              </div>
              <div className="bg-white" style={{ height: '70vh' }}>
                <iframe
                  srcDoc={generatedCode}
                  className="w-full h-full"
                  title="Website Preview"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
