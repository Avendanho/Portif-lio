import React from 'react';
import {
  ArrowRight,
  Code2,
  FolderGit2,
  Mail,
  MessageCircle,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  lang: Language;
  onOpenPrototypeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenPrototypeModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background Subtle Monochrome Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700/80 text-neutral-300 text-xs font-medium backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
              <span>
                {lang === 'pt'
                  ? 'Engenharia de Software • PUC Minas (2025–2028)'
                  : 'Software Engineering • PUC Minas (2025–2028)'}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-neutral-400 font-mono text-sm tracking-wide uppercase">
                {lang === 'pt' ? 'Olá, meu nome é' : 'Hello, my name is'}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold text-neutral-300">
                {personalInfo.title[lang]}
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {lang === 'pt'
                ? 'Construo soluções web robustas, arquiteturas escaláveis e interfaces modernas. Foco em desenvolvimento Full Stack com TypeScript, React, Next.js, Node.js e práticas ágeis de engenharia de software.'
                : 'Building reliable web solutions, scalable software architectures, and clean interfaces. Focused on Full Stack development with TypeScript, React, Next.js, Node.js, and agile engineering practices.'}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-btn-explore-projects"
                onClick={() => scrollToSection('projetos')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black bg-white hover:bg-neutral-200 transition-all shadow-sm active:scale-95 text-sm sm:text-base cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-black" />
                <span>{lang === 'pt' ? 'Ver Projetos' : 'Explore Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-contact"
                onClick={() => scrollToSection('contato')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-700/80 transition-all active:scale-95 text-sm sm:text-base cursor-pointer"
              >
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>{lang === 'pt' ? 'Entrar em Contato' : 'Contact Me'}</span>
              </button>

              <button
                id="hero-btn-wireframes"
                onClick={onOpenPrototypeModal}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 transition-all text-sm cursor-pointer"
                title={lang === 'pt' ? 'Ver wireframes desenhados no Figma' : 'View Figma wireframes'}
              >
                <Layers className="w-4 h-4 text-neutral-400" />
                <span>{lang === 'pt' ? 'Wireframes Figma' : 'Figma Designs'}</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-neutral-400">
              <span className="text-xs font-mono text-neutral-500">
                {lang === 'pt' ? 'Redes & Contato:' : 'Connect:'}
              </span>
              <a
                id="hero-social-github"
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800 transition-colors"
                aria-label="GitHub de Bernardo Avendanho"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                id="hero-social-linkedin"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800 transition-colors"
                aria-label="LinkedIn de Bernardo Avendanho"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                id="hero-social-whatsapp"
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800 transition-colors"
                aria-label="WhatsApp de Bernardo Avendanho"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                id="hero-social-email"
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800 transition-colors"
                aria-label="E-mail de Bernardo Avendanho"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Feature Card with Code / Terminal aesthetic */}
          <div className="w-full lg:w-2/5 max-w-md">
            <div className="relative rounded-2xl bg-neutral-900/90 p-1 border border-neutral-800 shadow-2xl shadow-black/80">
              
              {/* Card Header (Mac/Linux window controls) */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-[#0a0a0a] rounded-t-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                  <Code2 className="w-3 h-3 text-neutral-400" />
                  <span>bernardo-avendanho.ts</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-300 bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700">
                  PUC Minas
                </span>
              </div>

              {/* Terminal / Code Body */}
              <div className="p-5 font-mono text-xs text-neutral-300 space-y-3 leading-relaxed">
                <div>
                  <span className="text-neutral-500">const</span>{' '}
                  <span className="text-white font-semibold">engineer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1.5">
                  <div>
                    <span className="text-neutral-500">nome:</span>{' '}
                    <span className="text-neutral-200">'{personalInfo.name}'</span>,
                  </div>
                  <div>
                    <span className="text-neutral-500">instituicao:</span>{' '}
                    <span className="text-neutral-200">'{personalInfo.university}'</span>,
                  </div>
                  <div>
                    <span className="text-neutral-500">curso:</span>{' '}
                    <span className="text-neutral-200">'Engenharia de Software'</span>,
                  </div>
                  <div>
                    <span className="text-neutral-500">conclusao:</span>{' '}
                    <span className="text-white font-semibold">2028</span>,
                  </div>
                  <div>
                    <span className="text-neutral-500">coreStack:</span> [
                    <span className="text-neutral-300">'TypeScript'</span>,{' '}
                    <span className="text-neutral-300">'React'</span>,{' '}
                    <span className="text-neutral-300">'Node'</span>,{' '}
                    <span className="text-neutral-300">'Next.js'</span>,{' '}
                    <span className="text-neutral-300">'Postgres'</span>],
                  </div>
                  <div>
                    <span className="text-neutral-500">disponivelPara:</span>{' '}
                    <span className="text-white">'Estágio & Projetos'</span>,
                  </div>
                </div>
                <div>&#125;;</div>

                <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-neutral-300" />
                  <span>Laboratório 1 — Segundo Semestre / 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
