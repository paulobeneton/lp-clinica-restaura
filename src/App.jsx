import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MapPin, Clock, Heart, ShieldCheck, 
  Activity, Users, ArrowRight, CheckCircle2, Menu, X, Star,
  MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Home, Lock, Stethoscope, 
  Utensils, Brain, Leaf, AlertTriangle, Coins, Pill, Wine, ZoomIn
} from 'lucide-react';

// --- ÍCONE WHATSAPP OFICIAL (Vetorizado) ---
const WhatsAppIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// --- CONFIGURAÇÃO GLOBAL & FONTES ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap');
    
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3, h4, h5, h6 { font-family: 'Funnel Display', sans-serif; }
    
    .glass-panel {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
  `}</style>
);

// --- DADOS DA GALERIA ---
const galleryImages = [
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-01.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-trespontas01.jpg?q=80&w=800", title: "Unidade Três Pontas" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-02.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-03.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-trespontas02.jpg?q=80&w=800", title: "Unidade Três Pontas" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-04.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-05.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-trespontas03.jpg?q=80&w=800", title: "Unidade Três Pontas" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-06.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-07.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-08.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-trespontas04.jpg?q=80&w=800", title: "Unidade Três Pontas" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-09.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-10.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-trespontas05.jpg?q=80&w=800", title: "Unidade Três Pontas" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-11.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-12.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-trespontas06.jpg?q=80&w=800", title: "Unidade Três Pontas" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-13.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-14.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-trespontas07.jpg?q=80&w=800", title: "Unidade Três Pontas" },
  { src: "https://cdn.agsup.com.br/grv/unidade-paraguacu-15.jpg?q=80&w=800", title: "Unidade Paraguaçu" },
  { src: "https://cdn.agsup.com.br/grv/unidade-trespontas01.jpg?q=80&w=800", title: "Unidade Três Pontas" },
];

// --- COMPONENTES UI ---

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyle = "px-8 py-3.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm tracking-wide disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-orange-600 hover:to-orange-700 text-white shadow-orange-500/25 transform hover:-translate-y-0.5", 
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20",
    outline: "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
    ghost: "text-slate-600 hover:text-teal-700 hover:bg-teal-50 font-semibold shadow-none rounded-lg px-4",
    headerCall: "bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/20 px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transform hover:-translate-y-0.5",
    whatsapp: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-green-500/20 px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transform hover:-translate-y-0.5"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = '', id = '', bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
  };

  return (
    <section id={id} className={`py-24 px-6 md:px-12 relative overflow-hidden ${bgColors[bg] || 'bg-white'} ${className}`}>
      {children}
    </section>
  );
};

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

// --- COMPONENTE CARROSSEL ---
const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Ajusta quantos itens mostram na tela (Mobile = 1, Desktop = 3)
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 768 ? 3 : 1);
    };
    handleResize(); // Chama na montagem
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= galleryImages.length - itemsToShow) return 0;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return galleryImages.length - itemsToShow;
      return prev - 1;
    });
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 group">
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/70 hover:text-white transition"><X size={40} strokeWidth={1} /></button>
            <img src={lightboxImage} alt="Zoom" className="max-h-[90vh] max-w-full rounded shadow-2xl" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-6"
          animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group/item flex-shrink-0"
              style={{ width: `calc(${100 / itemsToShow}% - ${(24 * (itemsToShow - 1)) / itemsToShow}px)` }}
              onClick={() => setLightboxImage(img.src)}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium flex items-center gap-2"><ZoomIn size={16} /> {img.title}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-slate-800 hover:text-teal-600 transition-all opacity-80 hover:opacity-100 z-10"><ChevronLeft size={24} /></button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-slate-800 hover:text-teal-600 transition-all opacity-80 hover:opacity-100 z-10"><ChevronRight size={24} /></button>
    </div>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-200 last:border-0">
    <button 
      className="flex justify-between items-center w-full py-6 text-left text-slate-800 hover:text-teal-700 transition group"
      onClick={onClick}
    >
      <span className={`text-lg transition-all ${isOpen ? 'font-bold text-teal-700' : 'font-medium'}`}>{question}</span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-slate-400 group-hover:text-teal-600">
        <ChevronDown size={20} strokeWidth={1.5} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-slate-500 leading-relaxed font-light">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  // ESTADOS DO FORMULÁRIO (Agora com Cidade)
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', subject: 'Internação para Drogas' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  // TELEFONE PRINCIPAL (EVANDRO)
  const phoneNumber = "5535999726322";
  const displayPhone = "(35) 99972-6322";
  
  // ⚠️ INSIRA SEU WEBHOOK AQUI (Se não tiver, deixe vazio "")
  const WEBHOOK_URL = "https://n8n.agsup.click/webhook-test/clinica-recuperacao"; 

  const scrollToForm = () => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  
  // Link Geral
  const handleWhatsApp = (text = '') => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  
  // Função de Ligar
  const handleCall = () => window.open(`tel:${phoneNumber}`, '_self');

  // --- FUNÇÃO DE ENVIO (WEBHOOK + WHATSAPP) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    // Mensagem WhatsApp agora inclui a cidade
    const whatsappText = `Olá, me chamo *${formData.name}*, sou de *${formData.city}*. Gostaria de informações sobre *${formData.subject}*. Meu telefone é ${formData.phone}.`;

    try {
      // 1. Envia para o Webhook
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            ...formData, 
            date: new Date().toLocaleString('pt-BR'),
            origin: 'Landing Page'
          })
        }).catch(err => console.error("Erro silencioso no Webhook:", err));
      }

      // 2. Simula envio visual
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');

      // 3. Redireciona para o WhatsApp
      setTimeout(() => {
         handleWhatsApp(whatsappText);
         setFormData({ name: '', phone: '', city: '', subject: 'Internação para Drogas' });
         setStatus(null);
      }, 2000);

    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen antialiased selection:bg-teal-100 selection:text-teal-900">
      <GlobalStyles />
      
            {/* HEADER - LOGO LIMPA E CENTRALIZADA COM ESPAÇAMENTO AJUSTADO */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm h-24 transition-all duration-300">
        <div className="container mx-auto px-6 h-full flex justify-between items-center relative">
          
          {/* LADO ESQUERDO: MENU ALINHADO À DIREITA (Próximo da Logo) */}
          <div className="hidden lg:flex items-center justify-end gap-6 w-5/12 pr-12">
            <a href="#tratamento" style={{ fontFamily: "'Funnel Display', sans-serif" }} className="text-xl font-medium text-slate-600 hover:text-teal-700 transition-colors hover:bg-slate-50 px-3 py-2 rounded-xl">Tratamento</a>
            <a href="#galeria" style={{ fontFamily: "'Funnel Display', sans-serif" }} className="text-xl font-medium text-slate-600 hover:text-teal-700 transition-colors hover:bg-slate-50 px-3 py-2 rounded-xl">Estrutura</a>
            <a href="#unidades" style={{ fontFamily: "'Funnel Display', sans-serif" }} className="text-xl font-medium text-slate-600 hover:text-teal-700 transition-colors hover:bg-slate-50 px-3 py-2 rounded-xl">Unidades</a>
          </div>

          {/* LOGO LIMPA CENTRALIZADA (Ajuste de Espaçamento) */}
          <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0 flex justify-center z-10 h-full items-center py-2">
             <img 
               src="https://cdn.agsup.com.br/grv/logo-2.png" 
               alt="Grupo Restaura Vidas" 
               className="h-16 lg:h-24 w-auto object-contain transition-all duration-300 my-auto" // Adicionado my-auto para centralizar verticalmente se houver sobra
             />
          </div>

          {/* LADO DIREITO: BOTÃO WHATSAPP */}
          <div className="hidden lg:flex items-center justify-start gap-8 w-5/12 pl-12">
             <div className="text-right">
               <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Plantão 24h</span>
               <a href={`tel:${phoneNumber}`} className="text-xl font-bold text-slate-900 hover:text-teal-600 transition font-mono">{displayPhone}</a>
             </div>
             <Button variant="whatsapp" onClick={() => handleWhatsApp()}>
               <WhatsAppIcon className="w-5 h-5" /> WhatsApp
             </Button>
          </div>

          {/* MOBILE */}
          <button className="lg:hidden text-slate-800 ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
        
        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-white border-t border-slate-100 p-4 flex flex-col gap-3 shadow-xl absolute w-full"
            >
              <a href="#tratamento" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "'Funnel Display', sans-serif" }} className="py-3 px-4 text-lg text-slate-700 hover:bg-slate-50 rounded-lg font-medium">Tratamento</a>
              <a href="#unidades" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "'Funnel Display', sans-serif" }} className="py-3 px-4 text-lg text-slate-700 hover:bg-slate-50 rounded-lg font-medium">Unidades</a>
              <a href="#galeria" onClick={() => setIsMenuOpen(false)} style={{ fontFamily: "'Funnel Display', sans-serif" }} className="py-3 px-4 text-lg text-slate-700 hover:bg-slate-50 rounded-lg font-medium">Estrutura</a>
              <div className="py-2 px-4 border-t border-slate-100 mt-2">
                 <p className="text-xs text-slate-400 uppercase font-bold">Emergência</p>
                 <p className="text-lg font-bold text-slate-900">{displayPhone}</p>
              </div>
              <Button variant="whatsapp" onClick={() => handleWhatsApp()} className="w-full mt-2 flex justify-center gap-2">
                 <WhatsAppIcon className="w-5 h-5" /> WhatsApp
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* 1️⃣ HERO SECTION */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden min-h-[calc(100vh-6rem)] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594178056038-f86460166649?q=80&w=2070&auto=format&fit=crop" 
            alt="Família feliz se abraçando" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <FadeIn>
                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-teal-300 text-sm font-medium mb-8 backdrop-blur-sm">
                  <Clock size={14} /> Atendimento Humanizado 24 horas
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                  A recuperação começa com <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">um passo.</span>
                </h1>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                  Seja qual for o vício, existe um caminho de volta. 
                  Oferecemos tratamento especializado, seguro e acolhedor para reconstruir histórias.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="primary" onClick={scrollToForm} className="min-w-[200px]">
                    Quero Ajuda Agora
                  </Button>
                  <Button variant="outline" onClick={() => handleWhatsApp()} className="min-w-[200px]">
                    <WhatsAppIcon className="w-5 h-5" /> Falar no WhatsApp
                  </Button>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-8 text-slate-400 text-sm font-medium">
                   <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-teal-500"/> Sigilo Total</span>
                   <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-teal-500"/> Resgate 24h</span>
                   <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-teal-500"/> Equipe Médica</span>
                </div>
              </FadeIn>
            </div>
            
            {/* IMAGEM DIREITA COM ALTURA CORRIGIDA (450px) */}
            <div className="lg:w-1/2 w-full hidden lg:block">
              <FadeIn delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-800">
                  <img 
                    src="https://cdn.agsup.com.br/grv/imagem-clinica.jpeg?q=80&w=2070&auto=format&fit=crop" 
                    alt="Acolhimento e Paz" 
                    className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl flex items-start gap-4 z-20">
                    <div className="bg-teal-500 p-3 rounded-full text-white shadow-lg shadow-teal-500/30">
                      <ShieldCheck size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Ambiente Monitorado</p>
                      <p className="text-sm text-slate-600">Segurança, paz e tranquilidade fundamentais para a recuperação plena.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* 2️⃣ ESPECIALISTAS EM RECUPERAÇÃO */}
      <Section bg="gray">
        <div className="container mx-auto">
           <div className="text-center mb-12 max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold text-slate-900 mb-4">Especialistas em Recuperação</h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Nossa equipe multidisciplinar desenvolveu protocolos específicos para cada tipo de dependência. 
                Entendemos que cada substância age de forma diferente no organismo e, por isso, o tratamento precisa ser direcionado.
              </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "Álcool", icon: <Wine size={32} className="text-purple-600" />, hoverBorder: "hover:border-purple-300", hoverShadow: "hover:shadow-purple-100" },
                { name: "Drogas", icon: <Leaf size={32} className="text-green-600" />, hoverBorder: "hover:border-green-300", hoverShadow: "hover:shadow-green-100" },
                { name: "Medicamentos", icon: <Pill size={32} className="text-blue-600" />, hoverBorder: "hover:border-blue-300", hoverShadow: "hover:shadow-blue-100" },
                { name: "Jogos (Bets)", icon: <Coins size={32} className="text-yellow-500" />, hoverBorder: "hover:border-yellow-300", hoverShadow: "hover:shadow-yellow-100" },
                { name: "Outros Vícios", icon: <AlertTriangle size={32} className="text-red-500" />, hoverBorder: "hover:border-red-300", hoverShadow: "hover:shadow-red-100" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className={`bg-white p-8 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-4 cursor-default transition-all duration-300 shadow-sm ${item.hoverBorder} hover:shadow-xl ${item.hoverShadow}`}
                >
                  <div className="p-4 bg-slate-50 rounded-full">{item.icon}</div>
                  <span className="font-bold text-slate-800 text-lg">{item.name}</span>
                </motion.div>
              ))}
           </div>
        </div>
      </Section>

      {/* 3️⃣ CONEXÃO EMOCIONAL */}
      <Section className="bg-white text-center max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-8 flex justify-center">
            <div className="bg-teal-50 p-6 rounded-full text-teal-600">
              <Users size={48} strokeWidth={1} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Entendemos o que você está passando
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            Sabemos que pedir ajuda não é fácil. Muitos tentam sozinhos, mas recaem. 
            Aqui, você encontra <strong className="text-teal-700 font-semibold">acolhimento, cuidado e tratamento especializado</strong> — sem julgamentos, focados em recomeços reais.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
             {["Ambiente seguro e humanizado", "Equipe multidisciplinar 24h", "Foco em recomeços duradouros"].map((item, i) => (
               <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                 <span className="font-medium text-slate-700 text-lg">{item}</span>
               </div>
             ))}
          </div>
        </FadeIn>
      </Section>

      {/* 4️⃣ JORNADA DE TRATAMENTO */}
      <Section id="tratamento" bg="gray">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Metodologia Exclusiva</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">Plano de Tratamento</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative items-stretch">
             <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

            <FadeIn delay={0.1}>
              <div className="bg-white p-10 rounded-3xl border border-slate-200 h-full hover:shadow-xl transition-all duration-500 relative group">
                <div className="bg-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-white font-bold text-3xl shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">1</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Desintoxicação</h3>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-6 block">1º a 3º Mês</span>
                <p className="text-slate-500 leading-relaxed font-light">Adaptação ao convívio e desintoxicação física. Foco na reeducação alimentar e recuperação dos aspectos físicos.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-3xl border border-slate-200 h-full hover:shadow-xl transition-all duration-500 relative group">
                <div className="bg-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-white font-bold text-3xl shadow-lg shadow-teal-600/30 group-hover:scale-110 transition-transform">2</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Conscientização</h3>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-6 block">3º e 4º Mês</span>
                <p className="text-slate-500 leading-relaxed font-light">Aspecto psicológico profundo. Autoconhecimento do eu interior. Aplicação intensiva de terapias.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-10 rounded-3xl border border-slate-200 h-full hover:shadow-xl transition-all duration-500 relative group">
                <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 text-white font-bold text-3xl shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">3</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ressocialização</h3>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-6 block">5º e 6º Mês</span>
                <p className="text-slate-500 leading-relaxed font-light">Aspecto Espiritual e valorização da vida. Fortalecimento da fé e preparação para o retorno social.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 5️⃣ GALERIA CARROSSEL */}
      <Section id="galeria" className="bg-slate-50">
         <div className="container mx-auto text-center mb-16">
           <h2 className="text-4xl font-bold text-slate-900">Nossa Estrutura</h2>
           <p className="text-slate-500 mt-2 font-light">Um ambiente projetado para a paz e recuperação.</p>
         </div>
         <GalleryCarousel />
      </Section>

      {/* 6️⃣ EXCELÊNCIA NO CUIDADO */}
      <Section id="equipe" bg="white">
        <div className="container mx-auto">
           <div className="text-center mb-20">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Alto Padrão</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">Excelência no Cuidado</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Bloco 1: Equipe */}
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 h-full shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 transition-colors duration-300">
                   <Stethoscope size={32} className="text-teal-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Equipe Técnica</h3>
                <ul className="space-y-4">
                  {["Psiquiatra", "Psicóloga", "Enfermeira Padrão", "Terapeutas 24h", "Coordenadores"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                      <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                         <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Bloco 2: Terapias */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 h-full shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors duration-300">
                   <Brain size={32} className="text-orange-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Terapias</h3>
                <div className="space-y-5">
                  <div>
                     <strong className="text-slate-900 block mb-1 text-lg">P.P.R</strong>
                     <span className="text-slate-500 text-sm font-light block">Prevenção a Recaída e ferramentas para a vida.</span>
                  </div>
                  <div>
                     <strong className="text-slate-900 block mb-1 text-lg">T.R.E</strong>
                     <span className="text-slate-500 text-sm font-light block">Terapia Racional Emotiva e sentimentos.</span>
                  </div>
                  <div>
                     <strong className="text-slate-900 block mb-1 text-lg">Laborterapia</strong>
                     <span className="text-slate-500 text-sm font-light block">Disciplina e resgate da autoestima.</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bloco 3: Rotina */}
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 h-full shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors duration-300">
                   <Utensils size={32} className="text-green-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Rotina Diária</h3>
                <div className="mb-8">
                  <h4 className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Alimentação Balanceada</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-600">
                    <span className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-center">Café da Manhã</span>
                    <span className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-center">Almoço</span>
                    <span className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-center">Café da Tarde</span>
                    <span className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-center">Jantar</span>
                  </div>
                </div>
                <div>
                   <h4 className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Atividades</h4>
                   <div className="flex flex-wrap gap-2">
                      <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Espiritualidade</span>
                      <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Educação Física</span>
                      <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Reuniões N.A.</span>
                   </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </Section>

      {/* 7️⃣ UNIDADES (ATUALIZADA: 2 UNIDADES) */}
      <Section id="unidades" className="bg-white border-t border-slate-100">
         <div className="container mx-auto">
           <div className="text-center mb-16">
             <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Presença Nacional</span>
             <h2 className="text-4xl font-bold text-slate-900 mt-2">Nossas Unidades</h2>
           </div>

           {/* Grid ajustado para 2 colunas centralizadas */}
           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  title: "Unidade Três Pontas",
                  img: "https://cdn.agsup.com.br/grv/unidade-trespontas.jpeg?q=80&w=800", 
                  address: "Condomínio Chácaras do Lago - Três Pontas, MG",
                  phone: "(35) 99972-6322",
                  whatsappLink: "https://agsup.click/clinica-tres-pontas"
                },
                { 
                  title: "Unidade Paraguaçu",
                  img: "https://cdn.agsup.com.br/grv/unidade-paraguacu.jpeg?q=80&w=800", 
                  address: "Rodovia BR 491 KM 209 - Paraguaçu, MG",
                  phone: "(35) 99972-6322",
                  whatsappLink: "https://agsup.click/clinica-paraguacu"
                }
              ].map((unit, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl group h-full flex flex-col">
                     <div className="h-64 overflow-hidden relative"> {/* Aumentei um pouco a altura da foto para 2 cards */}
                        <img src={unit.img} alt={unit.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                     </div>
                     <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-6">{unit.title}</h3>
                        
                        <div className="space-y-4 text-slate-300 text-sm mb-8 flex-grow">
                          <div className="flex gap-3">
                             <MapPin className="text-teal-500 shrink-0" size={20} />
                             <span className="text-base">{unit.address}</span>
                          </div>
                          <div className="flex gap-3">
                             <Phone className="text-teal-500 shrink-0" size={20} />
                             <span className="text-base">{unit.phone}</span>
                          </div>
                          <div className="flex gap-3">
                             <Clock className="text-teal-500 shrink-0" size={20} />
                             <span className="text-base">24 horas - Todos os dias</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <button onClick={handleCall} className="flex items-center justify-center gap-2 w-full text-white font-medium py-2 hover:text-teal-400 transition">
                             <Phone size={16} /> Ligar Agora
                          </button>
                          {/* BOTÃO WHATSAPP ESPECÍFICO DA UNIDADE */}
                          <Button variant="whatsapp" onClick={() => window.open(unit.whatsappLink, '_blank')} className="w-full py-3 text-sm flex justify-center gap-2 shadow-none">
                             <WhatsAppIcon className="w-5 h-5" /> Falar no WhatsApp
                          </Button>
                        </div>
                     </div>
                  </div>
                </FadeIn>
              ))}
           </div>
         </div>
      </Section>

      {/* 8️⃣ POR QUE NOS ESCOLHER */}
      <Section id="diferenciais" bg="gray">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Por Que Nos Escolher</h2>
            <p className="text-slate-500 text-lg font-light">Seis pilares que fazem do Grupo Restaurar sua melhor escolha</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Heart size={28} />, title: "Tratamento humanizado", desc: "Respeito e dignidade em cada etapa." },
              { icon: <Clock size={28} />, title: "24h de suporte", desc: "Equipe disponível a qualquer hora." },
              { icon: <Home size={28} />, title: "Estrutura segura", desc: "Ambiente acolhedor projetado para o bem-estar." },
              { icon: <Users size={28} />, title: "Apoio familiar", desc: "Inclusão da família e suporte espiritual." },
              { icon: <MapPin size={28} />, title: "Localização discreta", desc: "Ambiente tranquilo longe do agito." },
              { icon: <ShieldCheck size={28} />, title: "Equipe Experiente", desc: "Profissionais com +10 anos de experiência." },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                    <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      {React.cloneElement(item.icon, { strokeWidth: 1.5 })}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* 9️⃣ DEPOIMENTOS */}
      <Section id="depoimentos" bg="white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Histórias de Transformação</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Eu achava que não tinha mais jeito. A clínica não só salvou minha vida, como devolveu minha família.", author: "Carlos M.", role: "Em recuperação" },
              { text: "O atendimento humanizado fez toda a diferença. Não fui tratado como um problema, mas como alguém que precisava de ajuda.", author: "Ricardo S.", role: "Ex-paciente" },
              { text: "Internar meu filho foi difícil, mas foi a melhor decisão. Hoje ele é outra pessoa, cheio de vida.", author: "Maria Helena", role: "Mãe" }
            ].map((depo, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-slate-50 p-10 rounded-t-3xl rounded-br-3xl rounded-bl-none border border-slate-100 text-left hover:shadow-lg transition relative h-full flex flex-col">
                  <div className="flex gap-1 mb-6 text-orange-400">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 italic mb-8 flex-grow font-light text-lg">"{depo.text}"</p>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{depo.author}</p>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">{depo.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* 🔟 CONTATO MELHORADO (SPLIT) */}
      <Section id="contato" className="bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Lado Esquerdo (Infos) */}
            <div className="lg:w-5/12 p-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Precisa de ajuda?</h3>
                  <p className="text-slate-300 text-lg mb-8 font-light leading-relaxed">
                    Nossa equipe de triagem está pronta para te ouvir. O atendimento é sigiloso, seguro e imediato.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-teal-400">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Plantão 24h</p>
                        <p className="text-xl font-bold">{displayPhone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-green-400">
                        <MessageCircle size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">WhatsApp</p>
                        <p className="text-xl font-bold">{displayPhone}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                   <p className="flex items-center gap-2 text-slate-400 text-sm">
                     <Lock size={16} /> Suas informações estão 100% seguras.
                   </p>
                </div>
              </div>
            </div>

            {/* Lado Direito (Formulário) */}
            <div className="lg:w-7/12 p-12 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicite uma Ligação</h3>
              <p className="text-slate-500 mb-8 font-light">Preencha os dados abaixo e ligamos para você em instantes.</p>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" 
                      placeholder="Seu nome" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Telefone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" 
                      placeholder="(DDD) 99999-9999" 
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                   <div>
                       <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Cidade</label>
                       <input 
                          type="text" 
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" 
                          placeholder="Sua cidade" 
                          required
                       />
                   </div>
                   <div>
                       <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Como podemos ajudar?</label>
                       <select 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition text-slate-600"
                       >
                          <option>Internação para Drogas</option>
                          <option>Internação para Álcool</option>
                          <option>Vício em Jogos</option>
                          <option>Outros</option>
                       </select>
                   </div>
                </div>
                
                <Button variant="whatsapp" className="w-full py-5 text-lg shadow-xl shadow-green-500/20 flex justify-center items-center gap-3 disabled:opacity-70" disabled={isSending}>
                   {isSending ? (
                     <>Enviando...</>
                   ) : (
                     <><WhatsAppIcon className="w-6 h-6" /> SOLICITAR AJUDA AGORA</>
                   )}
                </Button>

                {/* Mensagens de Status */}
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-50 text-green-700 rounded-lg text-center border border-green-100">
                     <p className="font-bold">Solicitação Recebida!</p>
                     <p className="text-sm">Nossa equipe entrará em contato. Redirecionando para WhatsApp...</p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-50 text-red-700 rounded-lg text-center border border-red-100">
                     <p>Erro ao enviar. Por favor, clique no botão flutuante do WhatsApp.</p>
                  </motion.div>
                )}
              </form>
            </div>

          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-sm border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
            {/* Créditos Supimpa - Com fonte Funnel Display */}
            <p 
              className="text-center text-base text-slate-500" 
              style={{ fontFamily: "'Funnel Display', sans-serif" }}
            >
               Grupo Restaura Vidas {new Date().getFullYear()} - Feito com <span style={{color: 'red'}}>❤</span> pelo time da <a title="Gostou? Podemos ajudar sua empresa também! Entre em contato" href="https://agenciasupimpa.com.br?utm_source=gruporestauravida&amp;utm_id=clientes" target="_blank" rel="noopener" className="hover:text-teal-500 transition"><b>SUPIMPA</b> - Agência Digital</a>
            </p>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a href={`https://wa.me/${phoneNumber}`} target="_blank" className="fixed bottom-6 right-6 z-50 hover:-translate-y-1 transition-transform">
        <div className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center">
           <WhatsAppIcon className="w-8 h-8" />
        </div>
      </a>
    </div>
  );
}




