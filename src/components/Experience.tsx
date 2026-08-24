import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  ExternalLink,
  Eye,
  Layers
} from 'lucide-react';
import { Language } from '../types';
import { experiencesData } from '../data/portfolioData';

interface ExperienceProps {
  lang: Language;
  onOpenPrototype: (prototypeId: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ lang, onOpenPrototype }) => {
  const getBadgeType = (type: string) => {
    switch (type) {
      case 'work':
        return { label: { pt: 'Profissional', en: 'Professional' }, color: 'text-white bg-neutral-800 border-neutral-700' };
      case 'academic':
        return { label: { pt: 'Acadêmico / Lab', en: 'Academic / Lab' }, color: 'text-neutral-200 bg-neutral-800/90 border-neutral-700' };
      case 'extension':
        return { label: { pt: 'Extensão Universitária', en: 'Extension' }, color: 'text-neutral-300 bg-neutral-800 border-neutral-700' };
      case 'event':
        return { label: { pt: 'Hackathon & Eventos', en: 'Hackathon & Events' }, color: 'text-white bg-neutral-800 border-neutral-700' };
      default:
        return { label: { pt: 'Experiência', en: 'Experience' }, color: 'text-neutral-300 bg-neutral-800 border-neutral-700' };
    }
  };

  return (
    <section id="experiencias" className="py-20 relative border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono tracking-wider uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>03. {lang === 'pt' ? 'Trajetória & Vivência' : 'Career & Experience'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === 'pt' ? 'Experiências & Atuação' : 'Experience & Background'}
            </h2>
            <p className="text-neutral-400 text-sm mt-1">
              {lang === 'pt'
                ? 'Laboratórios de software, projetos acadêmicos e extensão na PUC Minas.'
                : 'Software labs, university extension programs, and technical challenges at PUC Minas.'}
            </p>
          </div>

          {/* Wireframe Button */}
          <button
            id="experience-btn-view-wireframe"
            onClick={() => onOpenPrototype('experiencias')}
            className="self-start md:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Ver Wireframe desta Seção (Figma)' : 'View Wireframe (Figma)'}</span>
          </button>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-8">
          {experiencesData.map((exp) => {
            const badge = getBadgeType(exp.type);

            return (
              <div
                key={exp.id}
                id={`experience-card-${exp.id}`}
                className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all shadow-xl space-y-5 group"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${badge.color}`}>
                        {badge.label[lang]}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-neutral-400 font-mono">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                      {exp.role[lang]}
                    </h3>

                    <div className="text-sm font-semibold text-neutral-300 flex items-center gap-2">
                      <span>{exp.company}</span>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-400 hover:text-white"
                          aria-label={`Visitar site de ${exp.company}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300 self-start">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{exp.period[lang]}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {exp.description[lang]}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                    {lang === 'pt' ? 'Principais Atividades & Conquistas:' : 'Key Achievements & Deliverables:'}
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements[lang].map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-neutral-400 mr-1">
                    {lang === 'pt' ? 'Competências:' : 'Skills:'}
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 text-xs font-mono border border-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
