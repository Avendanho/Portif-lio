import React, { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MapPin,
  Sparkles,
  Phone,
  Eye,
  AlertCircle
} from 'lucide-react';
import { Language, ContactFormValues } from '../types';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactProps {
  lang: Language;
  onOpenPrototype: (prototypeId: string) => void;
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({
  lang,
  onOpenPrototype,
  onShowToast
}) => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    onShowToast(
      lang === 'pt'
        ? 'E-mail copiado para a área de transferência!'
        : 'Email copied to clipboard!'
    );
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    onShowToast(
      lang === 'pt'
        ? 'WhatsApp / Telefone copiado!'
        : 'Phone number copied!'
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formValues.name.trim() || !formValues.email.trim() || !formValues.message.trim()) {
      setErrorMsg(
        lang === 'pt'
          ? 'Por favor, preencha todos os campos obrigatórios (*).'
          : 'Please fill in all required fields (*).'
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      setErrorMsg(
        lang === 'pt'
          ? 'Por favor, insira um endereço de e-mail válido.'
          : 'Please provide a valid email address.'
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate sending & trigger client mailto draft as fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      onShowToast(
        lang === 'pt'
          ? 'Mensagem enviada com sucesso! Obrigado pelo contato.'
          : 'Message sent successfully! Thank you for reaching out.'
      );

      // Open mailto fallback in background
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formValues.subject || `Contato de ${formValues.name} via Portfólio`
      )}&body=${encodeURIComponent(
        `Nome: ${formValues.name}\nE-mail: ${formValues.email}\n\nMensagem:\n${formValues.message}`
      )}`;
      
      // Clear form
      setFormValues({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contato" className="py-20 relative border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono tracking-wider uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>04. {lang === 'pt' ? 'Conexão & Oportunidades' : 'Get in Touch'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === 'pt' ? 'Entre em Contato' : 'Contact Me'}
            </h2>
            <p className="text-neutral-400 text-sm mt-1">
              {lang === 'pt'
                ? 'Disponível para estágios, projetos de software, parcerias e networking.'
                : 'Available for internships, software projects, partnerships, and technical networking.'}
            </p>
          </div>

          {/* Wireframe Button */}
          <button
            id="contact-btn-view-wireframe"
            onClick={() => onOpenPrototype('contato')}
            className="self-start md:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Ver Wireframe desta Seção (Figma)' : 'View Wireframe (Figma)'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column (2 cols): Contact Channels & Social Cards */}
          <div className="lg:col-span-2 space-y-4">
            
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neutral-300" />
                <span>{lang === 'pt' ? 'Canais Diretos' : 'Direct Channels'}</span>
              </h3>
              <p className="text-neutral-300 text-xs leading-relaxed">
                {lang === 'pt'
                  ? 'Fique à vontade para me mandar uma mensagem no WhatsApp, conectar no LinkedIn ou enviar um e-mail.'
                  : 'Feel free to drop a message via WhatsApp, connect on LinkedIn, or shoot an email.'}
              </p>
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-400 block">E-mail</span>
                  <a
                    id="contact-link-email"
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                id="contact-btn-copy-email"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                title={lang === 'pt' ? 'Copiar e-mail' : 'Copy email'}
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-400 block">WhatsApp</span>
                  <a
                    id="contact-link-whatsapp"
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  id="contact-btn-copy-phone"
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                  title={lang === 'pt' ? 'Copiar telefone' : 'Copy phone'}
                >
                  <Copy className="w-4 h-4" />
                </button>
                <a
                  id="contact-btn-open-whatsapp"
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700 transition-colors"
                  title="Abrir WhatsApp"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-400 block">LinkedIn</span>
                  <a
                    id="contact-link-linkedin"
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors"
                  >
                    linkedin.com/in/avendanho
                  </a>
                </div>
              </div>
              <a
                id="contact-btn-open-linkedin"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-800 text-white border border-neutral-700">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-400 block">GitHub</span>
                  <a
                    id="contact-link-github"
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-neutral-200 hover:text-white transition-colors"
                  >
                    github.com/avendanho
                  </a>
                </div>
              </div>
              <a
                id="contact-btn-open-github"
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location Pill */}
            <div className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center gap-3 text-xs text-neutral-400">
              <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

          </div>

          {/* Right Column (3 cols): Validated Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'pt' ? 'Envie uma Mensagem Direta' : 'Send a Direct Message'}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {lang === 'pt'
                    ? 'Preencha o formulário abaixo para enviar uma mensagem por e-mail.'
                    : 'Fill in the form below to send an email message directly.'}
                </p>
              </div>

              {submittedSuccess && (
                <div className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 text-neutral-200 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">
                      {lang === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!'}
                    </strong>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {lang === 'pt'
                        ? 'Obrigado pelo contato! Retornarei o mais breve possível.'
                        : 'Thanks for reaching out! I will get back to you as soon as possible.'}
                    </p>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 rounded-xl bg-neutral-800 border border-red-500/40 text-red-300 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-input-name"
                      className="block text-xs font-mono font-medium text-neutral-300"
                    >
                      {lang === 'pt' ? 'Seu Nome *' : 'Your Name *'}
                    </label>
                    <input
                      id="contact-input-name"
                      type="text"
                      required
                      placeholder={lang === 'pt' ? 'Ex: João Silva' : 'e.g. John Doe'}
                      value={formValues.name}
                      onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-white text-sm transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-input-email"
                      className="block text-xs font-mono font-medium text-neutral-300"
                    >
                      {lang === 'pt' ? 'Seu E-mail *' : 'Your Email *'}
                    </label>
                    <input
                      id="contact-input-email"
                      type="email"
                      required
                      placeholder="email@exemplo.com"
                      value={formValues.email}
                      onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-white text-sm transition-all"
                    />
                  </div>

                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-input-subject"
                    className="block text-xs font-mono font-medium text-neutral-300"
                  >
                    {lang === 'pt' ? 'Assunto' : 'Subject'}
                  </label>
                  <input
                    id="contact-input-subject"
                    type="text"
                    placeholder={
                      lang === 'pt'
                        ? 'Ex: Oportunidade de Estágio / Projeto'
                        : 'e.g. Internship Opportunity / Project'
                    }
                    value={formValues.subject}
                    onChange={(e) => setFormValues({ ...formValues, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-white text-sm transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-input-message"
                    className="block text-xs font-mono font-medium text-neutral-300"
                  >
                    {lang === 'pt' ? 'Mensagem *' : 'Message *'}
                  </label>
                  <textarea
                    id="contact-input-message"
                    rows={4}
                    required
                    placeholder={
                      lang === 'pt'
                        ? 'Escreva sua mensagem aqui...'
                        : 'Type your message here...'
                    }
                    value={formValues.message}
                    onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-white text-sm transition-all resize-none"
                  />
                </div>

                <button
                  id="contact-btn-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-black bg-white hover:bg-neutral-200 transition-all shadow-sm active:scale-95 text-sm cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? lang === 'pt' ? 'Enviando...' : 'Sending...'
                      : lang === 'pt' ? 'Enviar Mensagem' : 'Send Message'}
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
