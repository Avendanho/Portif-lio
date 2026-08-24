import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrototypeViewerModal } from './components/PrototypeViewerModal';
import { Toast } from './components/Toast';

export function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [prototypeModalOpen, setPrototypeModalOpen] = useState(false);
  const [initialPrototypeSection, setInitialPrototypeSection] = useState<string>('sobre-mim');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const handleOpenPrototype = (sectionId: string = 'sobre-mim') => {
    setInitialPrototypeSection(sectionId);
    setPrototypeModalOpen(true);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#0a1124] text-slate-100 flex flex-col font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* Top sticky navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenPrototypeModal={() => handleOpenPrototype('sobre-mim')}
      />

      {/* Main content body */}
      <main className="flex-grow">
        <Hero
          lang={lang}
          onOpenPrototypeModal={() => handleOpenPrototype('sobre-mim')}
        />

        <About
          lang={lang}
          onOpenPrototype={handleOpenPrototype}
        />

        <Projects
          lang={lang}
          onOpenPrototype={handleOpenPrototype}
        />

        <Experience
          lang={lang}
          onOpenPrototype={handleOpenPrototype}
        />

        <Contact
          lang={lang}
          onOpenPrototype={handleOpenPrototype}
          onShowToast={handleShowToast}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenPrototypeModal={() => handleOpenPrototype('sobre-mim')}
      />

      {/* Interactive Figma Wireframes Modal Viewer */}
      <PrototypeViewerModal
        isOpen={prototypeModalOpen}
        initialSectionId={initialPrototypeSection}
        lang={lang}
        onClose={() => setPrototypeModalOpen(false)}
      />

      {/* Toast feedback alerts */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
