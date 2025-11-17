import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MapPin, Clock, Heart, ShieldCheck, 
  Activity, Users, ArrowRight, CheckCircle2, Menu, X, Star,
  MessageCircle, ChevronDown, Home, Lock, Smile
} from 'lucide-react';

// --- CONFIGURAÇÃO GLOBAL ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
  `}</style>
);

// --- COMPONENTES UI ---

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md";
  
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/20 transform hover:-translate-y-1", 
    secondary: "bg-teal-600 hover:bg-teal-700 text-white shadow-teal-600/20 transform hover:-translate-y-1",
    outline: "border-2 border-white text-white hover:bg-white/10",
    ghost: "text-slate-600 hover:text-teal-600 font-medium bg-slate-100 hover:bg-slate-200",
    whatsapp: "bg-green-500 hover:bg-green-600 text-white shadow-green-500/20"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = '', id = '', bg = 'white' }) => (
  <section id={id} className={`py-20 px-6 md:px-12 ${bg === 'gray' ? 'bg-slate-50' : bg === 'dark' ? 'bg-slate-900 text-white' : 'bg-white'} ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// Componente de FAQ (Accordion)
const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-200 last:border-0">
    <button 
      className="flex justify-between items-center w-full py-5 text-left font-semibold text-slate-800 hover:text-teal-600 transition"
      onClick={onClick}
    >
      <span className="text-lg pr-4">{question}</span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
        <ChevronDown size={20} />
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
          <p className="pb-5 text-slate-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  const scrollToForm = () => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  const handleWhatsApp = () => window.open('https://wa.me/5511999999999?text=Olá, preciso de ajuda.', '_blank');
  const handleCall = () => window.open('tel:08001234567', '_self');

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen antialiased selection:bg-teal-100 selection:text-teal-900">
      <GlobalStyles />
      
      {/* HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-teal-600 p-2 rounded-lg shadow-lg shadow-teal-600/20">
              <Heart className="text-white h-6 w-6" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-none">RESTAURA</h1>
              <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">Vidas</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#sobre" className="hover:text-teal-600 transition">Por que nós?</a>
            <a href="#depoimentos" className="hover:text-teal-600 transition">Depoimentos</a>
            <a href="#faq" className="hover:text-teal-600 transition">Dúvidas</a>
            <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
              <div className="text-right hidden lg:block">
                <p className="text-xs text-slate-400 font-bold uppercase">Emergência 24h</p>
                <p className="font-bold text-slate-900 text-lg">0800 123 4567</p>
              </div>
              <Button variant="primary" onClick={handleCall} className="py-2 px-4 text-sm">
                Ligar Agora
              </Button>
            </div>
          </div>

          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Por que nós?</a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <Button variant="primary" onClick={handleCall} className="w-full">Ligar Agora</Button>
          </div>
        )}
      </nav>

      {/* 1️⃣ HERO SECTION (CORRIGIDA E APRIMORADA) */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-900 overflow-hidden">
        {/* Imagem de Fundo (Garante carregamento) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2670&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          {/* Gradiente para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Texto (Esquerda) */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <FadeIn>
                <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-teal-900/50 border border-teal-700 text-teal-300 text-sm font-bold mb-6 shadow-lg shadow-teal-900/20">
                  <Clock size={16} /> Atendimento Humanizado 24 horas
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  A recuperação começa com um passo. <span className="text-orange-500">Dê esse passo hoje.</span>
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Seja qual for o vício, existe um caminho de volta. 
                  No Grupo Restaura Vidas, oferecemos tratamento especializado, seguro e acolhedor para reconstruir histórias.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="primary" onClick={scrollToForm} className="text-lg px-8">
                    Quero ajuda agora
                  </Button>
                  <Button variant="outline" onClick={handleWhatsApp} className="border-slate-600 text-white hover:bg-white/10 hover:border-white">
                    <MessageCircle size={20} /> Falar no WhatsApp
                  </Button>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-400 text-sm">
                   <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500"/> Sigilo Total</span>
                   <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500"/> Resgate 24h</span>
                </div>
              </FadeIn>
            </div>

            {/* Imagem Direita (Nova Adição) */}
            <div className="lg:w-1/2 w-full hidden lg:block">
              <FadeIn delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2670&auto=format&fit=crop" 
                    alt="Acolhimento e Paz" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Ambiente Monitorado</p>
                      <p className="text-xs text-slate-500">Segurança e tranquilidade para a recuperação.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>

      {/* 2️⃣ POR QUE NOS ESCOLHER (Design Solicitado) */}
      <Section id="sobre" className="bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Por Que Nos Escolher</h2>
            <p className="text-slate-500 text-lg">Seis pilares que fazem do Grupo Restaurar sua melhor escolha</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Heart size={28} />, 
                title: "Tratamento humanizado e confidencial", 
                desc: "Respeitamos sua privacidade e dignidade em cada etapa do processo." 
              },
              { 
                icon: <Clock size={28} />, 
                title: "24h de suporte e acompanhamento", 
                desc: "Equipe disponível a qualquer hora para atender suas necessidades." 
              },
              { 
                icon: <Home size={28} />, 
                title: "Estrutura confortável e segura", 
                desc: "Ambiente acolhedor projetado para o seu bem-estar e recuperação." 
              },
              { 
                icon: <Users size={28} />, 
                title: "Apoio familiar e espiritual", 
                desc: "Incluímos a família no processo e oferecemos suporte espiritual." 
              },
              { 
                icon: <MapPin size={28} />, 
                title: "Localização discreta", 
                desc: "Ambiente tranquilo e privativo, longe do agito urbano." 
              },
              { 
                icon: <ShieldCheck size={28} />, 
                title: "Equipe com mais de 10 anos de experiência", 
                desc: "Profissionais altamente qualificados e comprometidos com resultados." 
              },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                {/* Card Estilo Clean */}
                <div className="h-full p-1 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col items-start p-6 h-full">
                    <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* 3️⃣ HISTÓRIAS DE TRANSFORMAÇÃO (Depoimentos) */}
      <Section id="depoimentos" className="bg-white">
        <div className="container mx-auto text-center">
          <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Resultados Reais</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 mb-16">Histórias de Transformação</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Eu achava que não tinha mais jeito. A clínica não só salvou minha vida, como devolveu minha família. Sou eternamente grato.",
                author: "Carlos M.",
                role: "Em recuperação há 2 anos"
              },
              {
                text: "O atendimento humanizado fez toda a diferença. Não fui tratado como um problema, mas como alguém que precisava de ajuda.",
                author: "Ricardo S.",
                role: "Ex-paciente"
              },
              {
                text: "Internar meu filho foi a decisão mais difícil, mas foi a melhor. Hoje ele é outra pessoa, cheio de vida e sonhos.",
                author: "Maria Helena",
                role: "Mãe de paciente"
              }
            ].map((depo, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left hover:shadow-lg transition relative">
                  <div className="flex gap-1 mb-4 text-orange-400">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 italic mb-6">"{depo.text}"</p>
                  <div>
                    <p className="font-bold text-slate-900">{depo.author}</p>
                    <p className="text-xs text-slate-400 uppercase font-bold">{depo.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* 4️⃣ PERGUNTAS FREQUENTES (FAQ) */}
      <Section id="faq" bg="gray">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h2>
            <p className="text-slate-500 mt-2">Tire suas dúvidas sobre o processo de internação.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
            {[
              { q: "Vocês aceitam plano de saúde?", a: "Sim, trabalhamos com reembolso assistido e aceitamos diversos convênios. Entre em contato para verificar a cobertura do seu plano." },
              { q: "Como funciona o resgate?", a: "Possuímos uma equipe especializada em remoção 24 horas, com ambulância e profissionais treinados para realizar o transporte com segurança e dignidade." },
              { q: "A família pode visitar?", a: "Sim. Acreditamos que a família é fundamental na recuperação. As visitas ocorrem de acordo com a evolução terapêutica do paciente." },
              { q: "Qual o tempo de tratamento?", a: "O tempo varia caso a caso, mas geralmente o ciclo completo de desintoxicação e reabilitação dura entre 3 a 6 meses." }
            ].map((item, idx) => (
              <AccordionItem 
                key={idx} 
                question={item.q} 
                answer={item.a} 
                isOpen={openFaq === idx} 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
              />
            ))}
          </div>
        </div>
      </Section>

      {/* 5️⃣ CONTATO MELHORADO */}
      <Section id="contato" className="bg-blue-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Lado Esquerdo (Ação Rápida) */}
            <div className="lg:w-2/5 bg-teal-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Precisa de ajuda urgente?</h3>
                <p className="text-teal-100 mb-8">
                  Não espere a situação piorar. Fale com um de nossos terapeutas agora mesmo.
                </p>
                
                <div className="space-y-4">
                  <button onClick={handleCall} className="w-full bg-white text-teal-700 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-teal-50 transition shadow-lg">
                    <Phone size={24} /> LIGAR 0800 123 4567
                  </button>
                  
                  <button onClick={handleWhatsApp} className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-green-600 transition shadow-lg">
                    <MessageCircle size={24} /> CHAMAR NO WHATSAPP
                  </button>
                </div>
              </div>

              <div className="mt-12 relative z-10 flex items-center gap-2 text-sm text-teal-100">
                <Lock size={16} /> Atendimento sigiloso e seguro.
              </div>
            </div>

            {/* Lado Direito (Formulário) */}
            <div className="lg:w-3/5 p-10 bg-white text-slate-800">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Ou solicite uma ligação</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome</label>
                    <input type="text" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Telefone</label>
                    <input type="tel" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none" placeholder="(DDD) 99999-9999" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mensagem (Opcional)</label>
                  <textarea rows="3" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <Button variant="primary" className="w-full py-4 text-lg">
                  Enviar Pedido de Ajuda
                </Button>
              </form>
            </div>

          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-sm border-t border-slate-800">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart className="text-teal-600" fill="currentColor" size={20} />
              <span className="font-bold text-white text-lg">GRUPO RESTAURA VIDAS</span>
            </div>
            <p>© 2025 Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a href="https://wa.me/5511999999999" target="_blank" className="fixed bottom-6 right-6 z-50 animate-bounce">
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110">
          <MessageCircle size={32} fill="currentColor" />
        </div>
      </a>

    </div>
  );
}