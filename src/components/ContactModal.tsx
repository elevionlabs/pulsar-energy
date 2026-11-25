import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  ExternalLink,
  Linkedin,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PulsarLogo } from './PulsarLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    sector?: string;
    monthlyBill?: number;
    estimatedSavings?: number;
  };
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const TARGET_EMAIL = 'atendimento@pulsarenergy.com.br';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    monthlySpend: initialData?.monthlyBill ? `R$ ${initialData.monthlyBill.toLocaleString('pt-BR')}` : '',
    sector: initialData?.sector || 'Siderurgia & Metalurgia',
    message: '',
  });

  const [protocol] = useState(() => `#PLS-${Math.floor(100000 + Math.random() * 900000)}`);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        monthlySpend: initialData.monthlyBill
          ? `R$ ${initialData.monthlyBill.toLocaleString('pt-BR')}`
          : prev.monthlySpend,
        sector: initialData.sector || prev.sector,
      }));
    }
  }, [initialData]);

  const emailSubject = `[Diagnóstico Técnico ${protocol}] ${formData.company || 'Empresa'} - ${formData.name || 'Contato'}`;

  const formattedEmailBody =
    `Olá Equipe de Engenharia da Pulsar Energy,\n\n` +
    `Seguem os dados preenchidos através do formulário da Landing Page para análise de diagnóstico técnico e eficiência energética:\n\n` +
    `--------------------------------------------------\n` +
    `• PROTOCOLO: ${protocol}\n` +
    `• NOME DO CONTATO: ${formData.name}\n` +
    `• E-MAIL CORPORATIVO: ${formData.email}\n` +
    `• TELEFONE DE CONTATO: ${formData.phone}\n` +
    `• EMPRESA / CARGO: ${formData.company}\n` +
    `• SEGMENTO INDUSTRIAL: ${formData.sector}\n` +
    `• FATURA MENSAL DE ENERGIA: ${formData.monthlySpend || 'Não informada'}\n` +
    (initialData?.estimatedSavings
      ? `• ECONOMIA ANUAL ESTIMADA NO SIMULADOR: R$ ${initialData.estimatedSavings.toLocaleString('pt-BR')}\n`
      : '') +
    `• DESAFIO / ESCOPO: ${formData.message || 'Solicitação de avaliação técnica preliminar de eficiência energética, infraestrutura e adequação operacional.'}\n` +
    `• DESTINATÁRIO: ${TARGET_EMAIL}\n` +
    `--------------------------------------------------\n\n` +
    `Atenciosamente,\n${formData.name}`;

  const encodedSubject = encodeURIComponent(emailSubject);
  const encodedBody = encodeURIComponent(formattedEmailBody);

  // Direct webmail compose links
  const emailProviders = [
    {
      id: 'gmail',
      name: 'Gmail (Web)',
      desc: 'Abre diretamente no Google Mail',
      color: 'from-[#EA4335]/20 to-[#EA4335]/5 hover:border-[#EA4335]/60',
      badgeColor: 'bg-[#EA4335]/20 text-[#EA4335]',
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${encodedSubject}&body=${encodedBody}`,
      target: '_blank',
    },
    {
      id: 'outlook',
      name: 'Outlook / Hotmail',
      desc: 'Abre no Outlook Live pessoal',
      color: 'from-[#0078D4]/20 to-[#0078D4]/5 hover:border-[#0078D4]/60',
      badgeColor: 'bg-[#0078D4]/20 text-[#0078D4]',
      url: `https://outlook.live.com/mail/0/deeplink/compose?to=${TARGET_EMAIL}&subject=${encodedSubject}&body=${encodedBody}`,
      target: '_blank',
    },
    {
      id: 'office365',
      name: 'Microsoft 365 Corporativo',
      desc: 'Para e-mails empresariais do Office 365',
      color: 'from-[#00A4EF]/20 to-[#00A4EF]/5 hover:border-[#00A4EF]/60',
      badgeColor: 'bg-[#00A4EF]/20 text-[#00A4EF]',
      url: `https://outlook.office.com/mail/deeplink/compose?to=${TARGET_EMAIL}&subject=${encodedSubject}&body=${encodedBody}`,
      target: '_blank',
    },
    {
      id: 'yahoo',
      name: 'Yahoo Mail',
      desc: 'Abre no composer do Yahoo',
      color: 'from-[#6001D2]/20 to-[#6001D2]/5 hover:border-[#6001D2]/60',
      badgeColor: 'bg-[#6001D2]/20 text-[#A855F7]',
      url: `https://compose.mail.yahoo.com/?to=${TARGET_EMAIL}&subj=${encodedSubject}&body=${encodedBody}`,
      target: '_blank',
    },
    {
      id: 'default',
      name: 'Aplicativo de E-mail do Sistema',
      desc: 'Apple Mail, Thunderbird ou app padrão',
      color: 'from-white/10 to-white/5 hover:border-white/40',
      badgeColor: 'bg-white/15 text-white',
      url: `mailto:${TARGET_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`,
      target: '_self',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#C61F37', '#ED2749', '#FFFFFF'],
      });
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedEmailBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0B0B0E] border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl z-10 my-auto text-left"
      >
        {/* Subtle red glow top accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#ED2749] to-transparent pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-[#A9A9AE] hover:text-white bg-white/[0.04] border border-white/10 transition-colors cursor-pointer z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-2 flex flex-col items-center">
            <div className="mb-3">
              <PulsarLogo height={48} className="h-10 sm:h-12" />
            </div>

            <div className="w-12 h-12 rounded-full bg-[#C61F37]/20 border border-[#ED2749]/40 flex items-center justify-center text-[#ED2749] mb-3 shadow-lg shadow-[#C61F37]/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-[20px] sm:text-[23px] font-bold text-white text-center mb-1">
              Escolha seu E-mail para Enviar
            </h3>

            <p className="text-[13px] text-[#A9A9AE] text-center max-w-md font-light mb-4">
              Selecione o provedor que você utiliza para abrir o e-mail já preenchido e endereçado para{' '}
              <strong className="text-white font-medium">{TARGET_EMAIL}</strong>:
            </p>

            {/* Protocol & Recipient Bar */}
            <div className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[12px] font-mono-tech text-white/85 mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
              <div>
                <span className="text-[#A9A9AE]">PROTOCOLO: </span>
                <span className="text-[#ED2749] font-bold">{protocol}</span>
              </div>
              <div>
                <span className="text-[#A9A9AE]">DESTINO: </span>
                <span className="text-white font-medium">{TARGET_EMAIL}</span>
              </div>
            </div>

            {/* Provider Options Grid */}
            <div className="w-full space-y-2 mb-4">
              {emailProviders.map((provider) => (
                <a
                  key={provider.id}
                  href={provider.url}
                  target={provider.target}
                  rel="noopener noreferrer"
                  className={`w-full p-3 rounded-xl bg-gradient-to-r ${provider.color} border border-white/10 transition-all duration-200 flex items-center justify-between group hover:scale-[1.01] hover:shadow-lg`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:border-[#ED2749]/50 transition-colors">
                      <Mail className="w-4 h-4 text-[#ED2749]" />
                    </div>
                    <div className="text-left">
                      <div className="text-[13.5px] font-semibold text-white flex items-center gap-2">
                        <span>{provider.name}</span>
                      </div>
                      <div className="text-[11.5px] text-[#A9A9AE]">
                        {provider.desc}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[12px] font-medium text-white/80 group-hover:text-white shrink-0 pl-2">
                    <span>Abrir</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A9A9AE] group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            {/* Secondary Actions: Copy & Phone */}
            <div className="w-full space-y-2.5 mb-4">
              <button
                type="button"
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/12 border border-white/15 text-white text-[12.5px] font-medium transition-colors cursor-pointer text-center"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400 font-semibold">Dados copiados para a área de transferência!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#ED2749] shrink-0" />
                    <span>Copiar dados formatados caso não seja nenhuma das opções acima</span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href="tel:+551144742183"
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-[#A9A9AE] hover:text-white text-[12px] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ED2749]" />
                  <span>Fixo: (11) 4474-2183</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/washington-souza-9a879b294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-[#A9A9AE] hover:text-white text-[12px] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#ED2749]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#A9A9AE]" />
                </a>
              </div>
            </div>

            {/* Back / Edit button */}
            <div className="flex items-center justify-between w-full pt-1 border-t border-white/5">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-1.5 text-[12px] text-[#A9A9AE] hover:text-white transition-colors cursor-pointer py-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Editar informações preenchidas</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="text-[12px] text-[#A9A9AE] hover:text-white underline underline-offset-4 transition-colors cursor-pointer py-1"
              >
                Fechar janela
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="mb-4">
                <PulsarLogo height={48} className="h-10 sm:h-12" />
              </div>
              <h3 className="text-[22px] sm:text-[26px] font-semibold text-white tracking-tight">
                Fale com a Engenharia da Pulsar
              </h3>
              <p className="text-[13.5px] text-[#A9A9AE] font-light mt-1">
                Preencha os dados da sua planta para encaminhar a solicitação técnica para <span className="text-white/90">{TARGET_EMAIL}</span>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11.5px] font-mono-tech text-[#A9A9AE] uppercase mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-[13.5px] focus:outline-none focus:border-[#ED2749]"
                  />
                </div>

                <div>
                  <label className="block text-[11.5px] font-mono-tech text-[#A9A9AE] uppercase mb-1.5">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@empresa.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-[13.5px] focus:outline-none focus:border-[#ED2749]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11.5px] font-mono-tech text-[#A9A9AE] uppercase mb-1.5">
                    Telefone de Contato *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 4474-2183"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-[13.5px] focus:outline-none focus:border-[#ED2749]"
                  />
                </div>

                <div>
                  <label className="block text-[11.5px] font-mono-tech text-[#A9A9AE] uppercase mb-1.5">
                    Empresa & Cargo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Empresa - Ex: Gerente de Utilidades"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-[13.5px] focus:outline-none focus:border-[#ED2749]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11.5px] font-mono-tech text-[#A9A9AE] uppercase mb-1.5">
                    Segmento Industrial
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D0D10] border border-white/10 text-white text-[13.5px] focus:outline-none focus:border-[#ED2749]"
                  >
                    <option>Siderurgia & Metalurgia</option>
                    <option>Alimentos & Bebidas</option>
                    <option>Química & Petroquímica</option>
                    <option>Papel & Celulose</option>
                    <option>Mineração & Cimento</option>
                    <option>Manufatura & Automotivo</option>
                    <option>Outro Segmento Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11.5px] font-mono-tech text-[#A9A9AE] uppercase mb-1.5">
                    Faixa de Fatura Mensal
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: R$ 250.000 / mês"
                    value={formData.monthlySpend}
                    onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-[13.5px] focus:outline-none focus:border-[#ED2749]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11.5px] font-mono-tech text-[#A9A9AE] uppercase mb-1.5">
                  Principal desafio ou objetivo técnico (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Redução de consumo em compressores, adequação tarifária, projeto solar ou automação SCADA."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-[13.5px] focus:outline-none focus:border-[#ED2749] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-[#C61F37] hover:bg-[#ED2749] text-white text-[14.5px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#C61F37]/35 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Avançar para Envio do E-mail</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-[#A9A9AE]/80">
                Você poderá escolher entre Gmail, Outlook, Microsoft 365 ou seu app padrão na próxima etapa.
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};

