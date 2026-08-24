import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Target,
  Heart,
  CheckCircle2,
  Download,
  Eye,
  FileText,
  Code,
  Server,
  Wrench,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { personalInfo, skillGroups } from '../data/portfolioData';

interface AboutProps {
  lang: Language;
  onOpenPrototype: (prototypeId: string) => void;
}

export const About: React.FC<AboutProps> = ({ lang, onOpenPrototype }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'education'>('profile');
  const [cvDownloaded, setCvDownloaded] = useState(false);

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setCvDownloaded(true);
    // Trigger printable / download view
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(`
        <html>
          <head>
            <title>Currículo - Bernardo Avendanho</title>
            <style>
              body { font-family: sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; max-width: 800px; margin: 0 auto; }
              h1 { color: #0f172a; margin-bottom: 4px; }
              h2 { color: #0d9488; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px; }
              .header-info { color: #64748b; font-size: 14px; margin-bottom: 20px; }
              .badge { background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-size: 13px; margin-right: 6px; }
            </style>
          </head>
          <body>
            <h1>${personalInfo.name}</h1>
            <div class="header-info">
              Engenharia de Software (PUC Minas, 2025–2028) | ${personalInfo.location}<br/>
              E-mail: ${personalInfo.email} | WhatsApp: ${personalInfo.phone} | GitHub: github.com/avendanho
            </div>
            <h2>Resumo Profissional</h2>
            <p>${personalInfo.about.pt.bio}</p>
            <h2>Formação Acadêmica</h2>
            <p><strong>Bacharelado em Engenharia de Software</strong> — Pontifícia Universidade Católica de Minas Gerais (PUC Minas)<br/>
            Período: 2025 – 2028 (Previsão de Conclusão)</p>
            <h2>Principais Competências</h2>
            <p>TypeScript, JavaScript, React, Next.js, Node.js, Express, Python, PostgreSQL, MySQL, Tailwind CSS, Git, Docker, Scrum/Kanban.</p>
            <h2>Objetivo Profissional</h2>
            <p>${personalInfo.about.pt.careerGoals}</p>
          </body>
        </html>
      `);
      win.document.close();
    }
  };

  return (
    <section id="sobre-mim" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-teal-400 text-xs font-mono tracking-wider uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span>01. {lang === 'pt' ? 'Apresentação & Perfil' : 'Profile & Introduction'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === 'pt' ? 'Sobre Mim' : 'About Me'}
            </h2>
          </div>

          {/* Figma Reference Link Button */}
          <button
            id="about-btn-view-wireframe"
            onClick={() => onOpenPrototype('sobre-mim')}
            className="self-start md:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-teal-300 bg-teal-950/40 hover:bg-teal-900/60 border border-teal-500/30 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Ver Wireframe desta Seção (Figma)' : 'View Wireframe (Figma)'}</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 mb-8 overflow-x-auto scrollbar-none gap-2">
          <button
            id="about-tab-profile"
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'profile'
                ? 'border-teal-400 text-teal-300 bg-slate-900/50'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{lang === 'pt' ? 'Biografia & Objetivos' : 'Biography & Goals'}</span>
          </button>

          <button
            id="about-tab-skills"
            onClick={() => setActiveTab('skills')}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'skills'
                ? 'border-teal-400 text-teal-300 bg-slate-900/50'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>{lang === 'pt' ? 'Habilidades & Tecnologias' : 'Skills & Tech Stack'}</span>
          </button>

          <button
            id="about-tab-education"
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'education'
                ? 'border-teal-400 text-teal-300 bg-slate-900/50'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{lang === 'pt' ? 'Formação & Universidade' : 'Education & PUC Minas'}</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Main Bio Text */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-400" />
                  <span>{lang === 'pt' ? 'Quem é Bernardo?' : 'Who is Bernardo?'}</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  {personalInfo.about[lang].bio}
                </p>
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-teal-300 uppercase tracking-wider font-mono mb-3">
                    {lang === 'pt' ? 'Destaques Acadêmicos' : 'Academic Highlights'}
                  </h4>
                  <ul className="space-y-2.5">
                    {personalInfo.about[lang].academicHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Career Goals Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-950/30 to-slate-900/80 border border-teal-500/20 space-y-3">
                <div className="flex items-center gap-2 text-teal-300 font-bold text-base">
                  <Target className="w-5 h-5 text-teal-400" />
                  <span>{lang === 'pt' ? 'Objetivo Profissional' : 'Career Objective'}</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {personalInfo.about[lang].careerGoals}
                </p>
              </div>
            </div>

            {/* Side Card: Quick Details & CV Action */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
                <h4 className="font-bold text-white text-base">
                  {lang === 'pt' ? 'Informações Gerais' : 'Quick Details'}
                </h4>
                
                <div className="space-y-3.5 text-sm">
                  <div>
                    <span className="text-slate-400 block text-xs font-mono uppercase">
                      {lang === 'pt' ? 'Instituição' : 'Institution'}
                    </span>
                    <span className="font-semibold text-slate-200">{personalInfo.university}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono uppercase">
                      {lang === 'pt' ? 'Curso' : 'Degree'}
                    </span>
                    <span className="font-semibold text-slate-200">
                      {lang === 'pt' ? 'Engenharia de Software (Bacharelado)' : 'Software Engineering (B.S.)'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono uppercase">
                      {lang === 'pt' ? 'Período' : 'Graduation Window'}
                    </span>
                    <span className="font-semibold text-teal-400">{personalInfo.period}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono uppercase">
                      {lang === 'pt' ? 'Localização' : 'Location'}
                    </span>
                    <span className="font-semibold text-slate-200">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    id="about-btn-download-cv"
                    onClick={handleDownloadCV}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-md shadow-teal-500/20 active:scale-95 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>{lang === 'pt' ? 'Visualizar / Baixar Currículo' : 'View / Download Resume'}</span>
                  </button>
                  {cvDownloaded && (
                    <p className="text-[11px] text-teal-400 text-center mt-2 font-mono">
                      ✓ {lang === 'pt' ? 'Currículo aberto para visualização e impressão!' : 'Resume opened for preview & print!'}
                    </p>
                  )}
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Heart className="w-4 h-4 text-teal-400" />
                  <span>{lang === 'pt' ? 'Áreas de Interesse' : 'Areas of Interest'}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.about[lang].interests.map((interest, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-teal-300 text-xs font-medium border border-teal-500/20"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Skills */}
        {activeTab === 'skills' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillGroups.map((group) => {
                const IconComponent =
                  group.icon === 'Layout'
                    ? Code
                    : group.icon === 'Server'
                    ? Server
                    : Wrench;

                return (
                  <div
                    key={group.id}
                    className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5 hover:border-teal-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-teal-950/60 border border-teal-500/30 text-teal-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-white text-lg">
                        {group.title[lang]}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {group.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                              {skill.name}
                              {skill.popular && (
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                              )}
                            </span>
                            <span className="text-slate-400 font-mono">{skill.category}</span>
                          </div>
                          {skill.proficiency && (
                            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-teal-500 to-teal-300 h-1.5 rounded-full transition-all duration-500"
                                style={{ width: `${skill.proficiency}%` }}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Education */}
        {activeTab === 'education' && (
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-teal-950/80 border border-teal-500/30 text-teal-400 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">
                  {lang === 'pt' ? 'Graduação em Andamento' : 'Undergraduate Degree'}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {lang === 'pt'
                    ? 'Bacharelado em Engenharia de Software'
                    : 'B.S. in Software Engineering'}
                </h3>
                <p className="text-teal-300 font-semibold">
                  Pontifícia Universidade Católica de Minas Gerais (PUC Minas)
                </p>
                <p className="text-slate-400 text-sm font-mono">
                  Belo Horizonte, MG • {personalInfo.period}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
              <div className="space-y-3">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-400" />
                  <span>{lang === 'pt' ? 'Disciplinas e Núcleos Chave' : 'Core Focus Disciplines'}</span>
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Projeto de Software & Laboratórios Práticos (Lab01)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Algoritmos, Estruturas de Dados & Complexidade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Arquitetura de Software & Padrões de Projeto (GoF)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Bancos de Dados Relacionais e Modelagem ER</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <Target className="w-4 h-4 text-teal-400" />
                  <span>{lang === 'pt' ? 'Metodologias e Práticas' : 'Methods & Engineering Practices'}</span>
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Metodologias Ágeis (Scrum, Kanban, Sprints Quinzenais)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Prototipação UI/UX no Figma & Validação com Usuários</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Engenharia de Requisitos e Histórias de Usuário</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Controle de Versão Colaborativo (Git Flow / GitHub)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
