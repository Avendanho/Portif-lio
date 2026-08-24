import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Layers, Send, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenPrototypeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenPrototypeModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['inicio', 'sobre-mim', 'projetos', 'experiencias', 'contato'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'sobre-mim', label: { pt: 'Sobre Mim', en: 'About Me' } },
    { id: 'projetos', label: { pt: 'Projetos', en: 'Projects' } },
    { id: 'experiencias', label: { pt: 'Experiências', en: 'Experience' } },
    { id: 'contato', label: { pt: 'Contato', en: 'Contact' } }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          id="nav-brand-logo"
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('inicio');
          }}
          className="group flex items-center gap-3 cursor-pointer text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold font-display text-base shadow-sm group-hover:bg-neutral-200 transition-all">
            BA
          </div>
          <div>
            <div className="font-display font-bold text-base text-white tracking-tight flex items-center gap-2">
              {personalInfo.name}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <p className="text-xs text-neutral-400 font-mono tracking-tight">
              {personalInfo.university} • {personalInfo.period}
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 bg-[#111111]/80 p-1.5 rounded-full border border-neutral-800 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white text-black shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {item.label[lang]}
              </button>
            );
          })}
        </nav>

        {/* Right CTA / Language toggle / Figma modal button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Wireframes Button */}
          <button
            id="nav-btn-prototypes"
            onClick={onOpenPrototypeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 transition-colors"
            title={lang === 'pt' ? 'Ver Wireframes do Figma' : 'View Figma Wireframes'}
          >
            <Layers className="w-3.5 h-3.5 text-neutral-300" />
            <span>{lang === 'pt' ? 'Protótipos' : 'Wireframes'}</span>
          </button>

          {/* Language Switcher */}
          <button
            id="nav-btn-lang-toggle"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 transition-colors"
            title={lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
          >
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span>{lang === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          {/* Contact Direct CTA */}
          <button
            id="nav-btn-cta-contact"
            onClick={() => scrollToSection('contato')}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Fale Comigo' : 'Get in Touch'}</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-btn-lang-toggle"
            onClick={onToggleLang}
            className="p-2 rounded-lg text-xs font-bold text-white bg-neutral-900 border border-neutral-800"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            id="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-200 hover:text-white bg-neutral-900 rounded-lg border border-neutral-800"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-[#0a0a0a] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                <span>{item.label[lang]}</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              id="mobile-btn-prototypes"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrototypeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-800"
            >
              <Layers className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Ver Wireframes do Figma' : 'View Figma Wireframes'}</span>
            </button>

            <button
              id="mobile-btn-contact-action"
              onClick={() => scrollToSection('contato')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Falar no WhatsApp / E-mail' : 'Contact via WhatsApp / Email'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
