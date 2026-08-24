import React from 'react';
import { ArrowUp, MessageCircle, Mail, Layers, Heart } from 'lucide-react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  lang: Language;
  onOpenPrototypeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenPrototypeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#070d1e] border-t border-slate-800/80 py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand info */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-display font-bold text-lg text-white">
              {personalInfo.name}
            </div>
            <p className="text-xs text-slate-400">
              {personalInfo.university} • {lang === 'pt' ? 'Engenharia de Software' : 'Software Engineering'} (2025–2028)
            </p>
            <p className="text-[11px] text-teal-400 font-mono">
              {lang === 'pt'
                ? 'Disciplina de Projeto de Software — Laboratório 1 (2026.2)'
                : 'Software Engineering Project Course — Lab 01 (2026.2)'}
            </p>
          </div>

          {/* Social Icons & Prototype trigger */}
          <div className="flex items-center gap-3">
            <button
              id="footer-btn-prototypes"
              onClick={onOpenPrototypeModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-teal-300 bg-teal-950/40 hover:bg-teal-900/50 border border-teal-500/30 transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'pt' ? 'Protótipos Figma' : 'Figma Prototypes'}</span>
            </button>

            <a
              id="footer-social-github"
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:text-teal-300 hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              id="footer-social-linkedin"
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:text-teal-300 hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              id="footer-social-whatsapp"
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:text-teal-300 hover:bg-slate-800 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              id="footer-social-email"
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-800/80 hover:text-teal-300 hover:bg-slate-800 transition-colors"
              aria-label="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            id="footer-btn-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-750 border border-slate-700 transition-all cursor-pointer"
          >
            <span>{lang === 'pt' ? 'Voltar ao Topo' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
          </button>
        </div>

        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. {lang === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com React, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
