import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Calendar,
  Layers,
  Sparkles,
  Eye,
  Filter,
  Clock,
  LayoutGrid
} from 'lucide-react';
import { Language, Project } from '../types';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectsProps {
  lang: Language;
  onOpenPrototype: (prototypeId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ lang, onOpenPrototype }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Chronological sorting (earliest to latest or latest to earliest)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredProjects = projectsData
    .filter((p) => (selectedCategory === 'all' ? true : p.category === selectedCategory))
    .sort((a, b) => (sortOrder === 'asc' ? a.year - b.year : b.year - a.year));

  const categories = [
    { id: 'all', label: { pt: 'Todos', en: 'All' } },
    { id: 'web', label: { pt: 'Front-End / Web', en: 'Front-End / Web' } },
    { id: 'system', label: { pt: 'Sistemas & MVC', en: 'Systems & MVC' } },
    { id: 'backend', label: { pt: 'Back-End & APIs', en: 'Back-End & APIs' } }
  ];

  return (
    <section id="projetos" className="py-20 relative border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono tracking-wider uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>02. {lang === 'pt' ? 'Portfólio & Código' : 'Portfolio & Code'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === 'pt' ? 'Projetos Desenvolvidos' : 'Projects Timeline'}
            </h2>
            <p className="text-neutral-400 text-sm mt-1">
              {lang === 'pt'
                ? 'Evolução cronológica de projetos práticos, acadêmicos e laboratoriais com código-fonte.'
                : 'Chronological timeline of software projects, academic labs, and open source repositories.'}
            </p>
          </div>

          {/* Wireframe Button */}
          <button
            id="projects-btn-view-wireframe"
            onClick={() => onOpenPrototype('projetos')}
            className="self-start md:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Ver Wireframe desta Seção (Figma)' : 'View Wireframe (Figma)'}</span>
          </button>
        </div>

        {/* Filters & View Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 mb-10">
          
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <Filter className="w-4 h-4 text-neutral-400 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-project-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>

          {/* View Mode & Chronological Order Controls */}
          <div className="flex items-center gap-2">
            <button
              id="projects-btn-order-toggle"
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-neutral-300 bg-neutral-800 hover:bg-neutral-750 border border-neutral-700 cursor-pointer"
              title={lang === 'pt' ? 'Alternar ordem cronológica' : 'Toggle chronological order'}
            >
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>
                {sortOrder === 'asc'
                  ? lang === 'pt' ? 'Antigo → Recente' : 'Oldest → Newest'
                  : lang === 'pt' ? 'Recente → Antigo' : 'Newest → Oldest'}
              </span>
            </button>

            <div className="flex items-center bg-neutral-800/80 p-0.5 rounded-lg border border-neutral-700">
              <button
                id="projects-btn-view-timeline"
                onClick={() => setViewMode('timeline')}
                className={`p-1.5 rounded-md text-xs transition-all cursor-pointer ${
                  viewMode === 'timeline'
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Linha do Tempo"
              >
                <Clock className="w-4 h-4" />
              </button>
              <button
                id="projects-btn-view-grid"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md text-xs transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Grade de Cards"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* TIMELINE VIEW */}
        {viewMode === 'timeline' && (
          <div className="relative pl-6 md:pl-8 border-l-2 border-neutral-800 space-y-12 ml-2 sm:ml-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`timeline-project-card-${project.id}`}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-white flex items-center justify-center shadow-sm group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all shadow-xl space-y-4">
                  
                  {/* Top Bar: Date & Category & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-mono font-bold">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        {project.timelineDate} ({project.year})
                      </span>
                      <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 bg-neutral-800/80 px-2.5 py-1 rounded-md border border-neutral-700">
                        {project.category}
                      </span>
                    </div>

                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-white bg-neutral-800 px-2.5 py-0.5 rounded-full border border-neutral-700">
                        <Sparkles className="w-3 h-3 text-neutral-300" />
                        {lang === 'pt' ? 'Destaque' : 'Featured'}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-neutral-400 mt-0.5">
                      {project.subtitle[lang]}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {project.description[lang]}
                  </p>

                  {/* Metrics if present */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-1">
                      {project.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-xs flex items-center gap-2"
                        >
                          <span className="text-neutral-400 font-mono">{m.label[lang]}:</span>
                          <span className="font-bold text-white">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-neutral-800 text-neutral-300 text-xs font-mono border border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <a
                        id={`project-github-link-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-750 px-3.5 py-2 rounded-lg border border-neutral-700 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>{lang === 'pt' ? 'Repositório GitHub' : 'GitHub Code'}</span>
                      </a>

                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          id={`project-demo-link-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-black bg-white hover:bg-neutral-200 px-3.5 py-2 rounded-lg transition-colors shadow-sm"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{lang === 'pt' ? 'Ver Deploy / Demo' : 'Live Demo'}</span>
                        </a>
                      )}
                    </div>

                    <button
                      id={`project-modal-btn-${project.id}`}
                      onClick={() => setActiveProjectModal(project)}
                      className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{lang === 'pt' ? 'Detalhes & Wireframe' : 'Details & Wireframe'}</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`grid-project-card-${project.id}`}
                className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-200 text-xs font-mono font-bold border border-neutral-700">
                      {project.timelineDate}
                    </span>
                    <span className="text-xs uppercase font-mono text-neutral-400">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {project.subtitle[lang]}
                    </p>
                  </div>

                  <p className="text-neutral-300 text-xs leading-relaxed line-clamp-3">
                    {project.description[lang]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[11px] font-mono border border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="flex items-center gap-1 text-xs font-medium text-neutral-300 hover:text-white cursor-pointer"
                  >
                    <span>{lang === 'pt' ? 'Ver Mais' : 'More Info'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      {activeProjectModal && (
        <div
          id="project-detail-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            id="project-detail-modal-box"
            className="bg-[#0f0f0f] border border-neutral-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  {activeProjectModal.timelineDate} • {activeProjectModal.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeProjectModal.title}
                </h3>
                <p className="text-neutral-400 text-sm">
                  {activeProjectModal.subtitle[lang]}
                </p>
              </div>
              <button
                id="modal-btn-close"
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Wireframe / Illustration Banner */}
            {activeProjectModal.wireframeImage && (
              <div className="rounded-xl overflow-hidden border border-neutral-700 bg-black p-2">
                <img
                  src={activeProjectModal.wireframeImage}
                  alt={activeProjectModal.title}
                  className="w-full h-auto max-h-56 object-contain rounded-lg"
                />
                <p className="text-[11px] font-mono text-neutral-400 text-center mt-2">
                  {lang === 'pt'
                    ? 'Captura do protótipo Figma / Interface em funcionamento'
                    : 'Figma wireframe / working UI snapshot'}
                </p>
              </div>
            )}

            <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
              <h4 className="font-bold text-white text-base">
                {lang === 'pt' ? 'Sobre a Implementação' : 'Implementation Details'}
              </h4>
              <p>
                {activeProjectModal.fullDescription?.[lang] || activeProjectModal.description[lang]}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white text-xs font-mono uppercase mb-2">
                {lang === 'pt' ? 'Tecnologias Utilizadas' : 'Stack & Tools'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-neutral-800 text-neutral-200 text-xs font-mono border border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-white hover:bg-neutral-200 transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{lang === 'pt' ? 'Acessar no GitHub' : 'View on GitHub'}</span>
              </a>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-700 cursor-pointer"
              >
                {lang === 'pt' ? 'Fechar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
