'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase, Template } from '@/lib/supabase';
import { colorSchemes } from '@/lib/templates';
import { generateAIPlatform, generateLuxuryFashion, generateFineDining, generateRealEstate } from '@/lib/template-generators';
import { generateWordPressTheme } from '@/lib/wordpress-generator';
import { Wand2, Download, Eye, Code, Save, ArrowLeft, FileArchive } from 'lucide-react';
import Link from 'next/link';

declare global {
  interface Window {
    JSZip: any;
  }
}

function CustomizeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const templateId = searchParams.get('template');

  const [template, setTemplate] = useState<Template | null>(null);
  const [loading, setLoading] = useState(true);
  const [customizations, setCustomizations] = useState({
    title: '',
    subtitle: '',
    colorScheme: 'blue',
    companyName: 'Your Company',
    description: '',
  });
  const [generatedCode, setGeneratedCode] = useState('');
  const [showPreview, setShowPreview] = useState(true);
  const [isJSZipLoaded, setIsJSZipLoaded] = useState(false);

  useEffect(() => {
    if (templateId) {
      loadTemplate(templateId);
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    script.async = true;
    script.onload = () => setIsJSZipLoaded(true);
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [templateId]);

  async function loadTemplate(id: string) {
    try {
      const { data, error } = await supabase
        .from('templates')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) throw error;
      if (data) {
        setTemplate(data);
        setCustomizations({
          title: `Welcome to ${data.name}`,
          subtitle: data.description,
          colorScheme: data.base_config?.colorScheme || 'blue',
          companyName: 'Your Company',
          description: data.description,
        });
        generateCode(data, customizations);
      }
    } catch (error) {
      console.error('Error loading template:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (template) {
      generateCode(template, customizations);
    }
  }, [customizations, template]);

  function generateCode(tmpl: Template, custom: typeof customizations) {
    const colors = colorSchemes[custom.colorScheme as keyof typeof colorSchemes];

    const code = generateTemplateCode(tmpl.category, custom, colors);
    setGeneratedCode(code);
  }

  function generateTemplateCode(category: string, custom: typeof customizations, colors: any) {
    const templateName = template?.name || '';

    if (templateName === 'AI Platform') return generateAIPlatform(custom, colors);
    if (templateName === 'Luxury Fashion') return generateLuxuryFashion(custom, colors);
    if (templateName === 'Fine Dining') return generateFineDining(custom, colors);
    if (templateName === 'Real Estate') return generateRealEstate(custom, colors);

    switch (category) {
      case 'landing':
        return generateLandingPage(custom, colors);
      case 'portfolio':
        return generatePortfolio(custom, colors);
      case 'ecommerce':
        return generateEcommerce(custom, colors);
      case 'saas':
        return generateAIPlatform(custom, colors);
      case 'restaurant':
        return generateRestaurant(custom, colors);
      case 'blog':
        return generateBlog(custom, colors);
      case 'realestate':
        return generateRealEstate(custom, colors);
      default:
        return generateLandingPage(custom, colors);
    }
  }

  function generateLandingPage(custom: typeof customizations, colors: any) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${custom.title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root {
      --primary: ${colors.primary};
      --secondary: ${colors.secondary};
      --accent: ${colors.accent};
    }
  </style>
</head>
<body class="font-sans" style="background: ${colors.background}; color: ${colors.text}">
  <nav class="border-b backdrop-blur-sm sticky top-0 z-50 bg-white/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="text-2xl font-bold" style="color: ${colors.primary}">${custom.companyName}</div>
        <div class="flex space-x-6">
          <a href="#features" class="hover:opacity-70 transition">Features</a>
          <a href="#about" class="hover:opacity-70 transition">About</a>
          <a href="#contact" class="px-6 py-2 rounded-lg text-white transition hover:opacity-90" style="background: ${colors.primary}">Get Started</a>
        </div>
      </div>
    </div>
  </nav>

  <section class="py-20 px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-6xl font-bold mb-6" style="color: ${colors.primary}">${custom.title}</h1>
      <p class="text-xl mb-12 opacity-80">${custom.subtitle}</p>
      <button class="px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary})">
        Start Your Journey
      </button>
    </div>
  </section>

  <section id="features" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16" style="color: ${colors.secondary}">Amazing Features</h2>
      <div class="grid md:grid-cols-3 gap-8">
        ${[1, 2, 3].map(i => `
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <div class="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold" style="background: ${colors.primary}">
            ${i}
          </div>
          <h3 class="text-xl font-bold mb-2">Feature ${i}</h3>
          <p class="opacity-70">Powerful feature that helps you achieve your goals faster and better.</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="py-20 px-4" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary})">
    <div class="max-w-4xl mx-auto text-center text-white">
      <h2 class="text-4xl font-bold mb-4">Ready to Get Started?</h2>
      <p class="text-xl mb-8 opacity-90">Join thousands of satisfied customers today</p>
      <button class="px-8 py-4 bg-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition" style="color: ${colors.primary}">
        Sign Up Free
      </button>
    </div>
  </section>

  <footer class="py-12 px-4 border-t">
    <div class="max-w-6xl mx-auto text-center opacity-60">
      <p>&copy; 2024 ${custom.companyName}. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`;
  }

  function generatePortfolio(custom: typeof customizations, colors: any) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${custom.title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="font-sans" style="background: ${colors.background}; color: ${colors.text}">
  <header class="py-20 px-4 text-center" style="background: ${colors.primary}; color: white">
    <h1 class="text-5xl font-bold mb-4">${custom.companyName}</h1>
    <p class="text-xl">${custom.subtitle}</p>
  </header>

  <section class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16">Featured Work</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${[1, 2, 3, 4, 5, 6].map(i => `
        <div class="group cursor-pointer">
          <div class="aspect-video rounded-xl overflow-hidden mb-4" style="background: linear-gradient(135deg, ${colors.primary}, ${colors.accent})">
            <div class="w-full h-full flex items-center justify-center text-white text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
              ${i}
            </div>
          </div>
          <h3 class="text-xl font-bold">Project ${i}</h3>
          <p class="opacity-70">Creative design work</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
</body>
</html>`;
  }

  function generateEcommerce(custom: typeof customizations, colors: any) {
    return generateLandingPage(custom, colors).replace('Amazing Features', 'Featured Products').replace('Feature', 'Product');
  }

  function generateSaaS(custom: typeof customizations, colors: any) {
    return generateLandingPage(custom, colors).replace('Amazing Features', 'Pricing Plans').replace('Feature', 'Plan');
  }

  function generateRestaurant(custom: typeof customizations, colors: any) {
    return generateLandingPage(custom, colors).replace('Amazing Features', 'Our Menu').replace('Feature', 'Dish');
  }

  function generateBlog(custom: typeof customizations, colors: any) {
    return generateLandingPage(custom, colors).replace('Amazing Features', 'Latest Articles').replace('Feature', 'Article');
  }

  async function handleSave() {
    try {
      const { data, error } = await supabase
        .from('generated_sites')
        .insert({
          title: customizations.title,
          description: customizations.description,
          template_type: template?.category || '',
          template_name: template?.name || '',
          customizations: customizations,
          generated_code: generatedCode,
          is_published: false,
        })
        .select()
        .single();

      if (error) throw error;
      alert('Site saved successfully!');
    } catch (error) {
      console.error('Error saving site:', error);
      alert('Error saving site. Please try again.');
    }
  }

  function handleDownload() {
    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website.html';
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleDownloadWordPress() {
    if (!isJSZipLoaded || !template) {
      alert('Please wait while WordPress theme is being prepared...');
      return;
    }

    try {
      const colors = colorSchemes[customizations.colorScheme as keyof typeof colorSchemes];
      const themeName = template.name.replace(/[^a-zA-Z0-9]/g, '-');
      const themeFiles = generateWordPressTheme(template.name, customizations, colors, template.category);

      const zip = new window.JSZip();
      const themeFolder = zip.folder(themeName);

      Object.entries(themeFiles).forEach(([path, content]) => {
        if (content !== 'PLACEHOLDER') {
          themeFolder?.file(path, content);
        }
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${themeName}-wordpress-theme.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating WordPress theme:', error);
      alert('Error generating WordPress theme. Please try again.');
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Template not found</p>
          <Link href="/generate" className="text-blue-600 hover:underline">
            Back to templates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/generate" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Templates</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Wand2 className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Alexis
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-4 py-2 bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition border border-white/10"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 transition font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>HTML</span>
              </button>
              <button
                onClick={handleDownloadWordPress}
                disabled={!isJSZipLoaded}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                <FileArchive className="w-4 h-4" />
                <span>WordPress</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-5rem)]">
        <div className="w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto p-6">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Customize</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={customizations.companyName}
                onChange={(e) => setCustomizations({ ...customizations, companyName: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Main Title
              </label>
              <input
                type="text"
                value={customizations.title}
                onChange={(e) => setCustomizations({ ...customizations, title: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subtitle
              </label>
              <textarea
                value={customizations.subtitle}
                onChange={(e) => setCustomizations({ ...customizations, subtitle: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={customizations.description}
                onChange={(e) => setCustomizations({ ...customizations, description: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Color Scheme
              </label>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(colorSchemes).map((scheme) => (
                  <button
                    key={scheme}
                    onClick={() => setCustomizations({ ...customizations, colorScheme: scheme })}
                    className={`p-3 rounded-lg border-2 transition ${
                      customizations.colorScheme === scheme
                        ? 'border-emerald-400 bg-emerald-500/10'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex space-x-1 mb-2">
                      <div className="w-6 h-6 rounded" style={{ background: colorSchemes[scheme as keyof typeof colorSchemes].primary }} />
                      <div className="w-6 h-6 rounded" style={{ background: colorSchemes[scheme as keyof typeof colorSchemes].secondary }} />
                    </div>
                    <div className="text-xs font-medium capitalize text-gray-300">{scheme}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => setShowPreview(true)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
                  showPreview ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </button>
              <button
                onClick={() => setShowPreview(false)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
                  !showPreview ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>Code</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            {showPreview ? (
              <iframe
                srcDoc={generatedCode}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            ) : (
              <pre className="w-full h-full overflow-auto p-6 bg-gray-900 text-gray-100 text-sm">
                <code>{generatedCode}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CustomizePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    }>
      <CustomizeContent />
    </Suspense>
  );
}
