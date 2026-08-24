import React, { useState, useEffect } from 'react';
import { Layers, ExternalLink, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { prototypeScreenshots, personalInfo } from '../data/portfolioData';

interface PrototypeViewerModalProps {
  isOpen: boolean;
  initialSectionId?: string;
  lang: Language;
  onClose: () => void;
}

export const PrototypeViewerModal: React.FC<PrototypeViewerModalProps> = ({
  isOpen,
  initialSectionId,
  lang,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (initialSectionId) {
      const idx = prototypeScreenshots.findIndex((p) => p.id === initialSectionId);
      if (idx !== -1) {
        setCurrentIndex(idx);
      }
    }
  }, [initialSectionId, isOpen]);

  if (!isOpen) return null;

  const current = prototypeScreenshots[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? prototypeScreenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === prototypeScreenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="prototype-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="prototype-modal-dialog"
        className="bg-[#0c142b] border border-teal-500/30 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#080e21]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                <span>{current.title[lang]}</span>
                <span className="text-xs font-mono font-normal text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-500/20">
                  {currentIndex + 1} / {prototypeScreenshots.length}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'pt'
                  ? 'Wireframes de média fidelidade desenhados no Figma para a disciplina de Projeto de Software'
                  : 'Mid-fidelity wireframes designed in Figma for Software Engineering Lab'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              id="modal-btn-open-figma"
              href={personalInfo.figmaPrototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-teal-300 bg-teal-950/60 hover:bg-teal-900 border border-teal-500/30 transition-colors"
            >
              <span>{lang === 'pt' ? 'Abrir no Figma' : 'Open in Figma'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              id="modal-btn-close-prototype"
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Tabs & Image display */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center gap-2">
            {prototypeScreenshots.map((item, idx) => (
              <button
                key={item.id}
                id={`modal-tab-proto-${item.id}`}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-900'
                }`}
              >
                {item.title[lang]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              title="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              title="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Preview Container */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#070c1b]">
          <div className="relative max-w-full rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black">
            <img
              src={current.image}
              alt={current.title[lang]}
              className="max-h-[62vh] w-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-[#091024] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>
              {lang === 'pt'
                ? 'Conforme especificado no README (Sprint Lab01S01)'
                : 'As specified in project README (Sprint Lab01S01)'}
            </span>
          </div>

          <a
            href={personalInfo.figmaPrototypeUrl}
            target="_blank"
            rel="noreferrer"
            className="sm:hidden text-teal-400 underline font-mono"
          >
            Figma link
          </a>
        </div>
      </div>
    </div>
  );
};
