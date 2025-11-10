'use client';

import { Template } from '@/lib/supabase';

interface TemplateCardProps {
  template: Template;
  onClick: (template: Template) => void;
}

export default function TemplateCard({ template, onClick }: TemplateCardProps) {
  return (
    <div
      onClick={() => onClick(template)}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-105"
    >
      <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10 text-center p-6">
          <div className="text-3xl font-bold text-white mb-2">{template.name}</div>
          <div className="text-sm text-emerald-400 uppercase tracking-wider font-medium">{template.category}</div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl text-white mb-2">{template.name}</h3>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">{template.description}</p>

        <div className="flex flex-wrap gap-2">
          {template.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/30 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-cyan-400/0 group-hover:from-emerald-400/5 group-hover:to-cyan-400/5 transition-all duration-300 pointer-events-none" />
    </div>
  );
}
