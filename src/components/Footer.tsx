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
    <footer id="main-footer" className="bg-[#050505] border-t border-neutral-800 py-12 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand info */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-display font-bold text-lg text-white">
              {personalInfo.name}
            </div>
            <p className="text-xs text-neutral-400">
              {personalInfo.university} • {lang === 'pt' ? 'Engenharia de Software' : 'Software Engineering'} (2025–2028)
            </p>
            <p className="text-[11px] text-neutral-400 font-mono">
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'pt' ? 'Protótipos Figma' : 'Figma Prototypes'}</span>
            </button>

            <a
              id="footer-social-github"
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-neutral-900 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              id="footer-social-linkedin"
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-neutral-900 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              id="footer-social-whatsapp"
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-neutral-900 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              id="footer-social-email"
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-neutral-900 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition-colors"
              aria-label="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            id="footer-btn-back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-all cursor-pointer"
          >
            <span>{lang === 'pt' ? 'Voltar ao Topo' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </div>

        <div className="pt-6 border-t border-neutral-800 text-center text-xs text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2">
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
