import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MapPin, Clock, Heart, ShieldCheck, 
  Activity, Users, ArrowRight, CheckCircle2, Menu, X, Star,
  Trees, Home, Hospital, Landmark
} from 'lucide-react';

// --- CONFIGURAÇÃO DE ESTILO GLOBAL (Tipografia Premium) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
  `}</style>
);

// --- COMPONENTES UI ---

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyle = "px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide uppercase";
  
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/20 transform hover:-translate-y-1", 
    secondary: "bg-teal-700 hover:bg-teal-800 text-white shadow-lg shadow-teal-700/20",
    outline: "border-2 border-white text-white hover:bg-white/10",
    ghost: "text-slate-600 hover:text-teal-700 font-medium normal-case tracking-normal",
    light: "bg-slate-100 hover:bg-slate-200 text-slate-700 shadow-sm"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = '', id = '', bg = 'white' }) => (
  <section id={id} className={`py-24 px-6 md:px-12 ${bg === 'gray' ? 'bg-slate-50' : bg === 'dark' ? 'bg-slate-900 text-white' : 'bg-white'} ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }} // Ajustado para aparecer mais facilmente
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToForm = () => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  const handleWhatsApp = (number = '5511999999999') => window.open(`https://wa.me/${number}?text=Olá, gostaria de ajuda.`, '_blank');
  const handlePhoneCall = (number = '08001234567') => window.open(`tel:${number}`, '_blank');

  return (
    <div className="bg-white text-slate-800 min-h-screen antialiased selection:bg-teal-100 selection:text-teal-900">
      <GlobalStyles />
      
      {/* NAVBAR PREMIUM */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="bg-teal-600 p-2 rounded-lg shadow-lg shadow-teal-600/20">
              <Heart className="text-white h-5 w-5" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-none">RESTAURA</h1>
              <span className="text-xs font-semibold text-teal-600 tracking-[0.2em] uppercase">Vidas</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#tratamento" className="text-sm font-medium text-slate-500 hover:text-teal-700 transition">Tratamento</a>
            <a href="#diferenciais" className="text-sm font-medium text-slate-500 hover:text-teal-700 transition">A Clínica</a>
            <a href="#unidades" className="text-sm font-medium text-slate-500 hover:text-teal-700 transition">Unidades</a> {/* Novo link */}
          </div>

          {/* CTA Navbar */}
          <div className="hidden md:flex items-center gap-6">
             <div className="text-right hidden lg:block">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Plantão 24h</p>
                <p className="text-lg font-bold text-slate-900">0800 123 4567</p>
             </div>
             <Button variant="primary" onClick={() => handlePhoneCall('08001234567')} className="px-6 py-3 text-xs">
               Ligar Agora
             </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-b border-slate-100 shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#tratamento" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-700">Tratamento</a>
              <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-700">A Clínica</a>
              <a href="#unidades" onClick={() => setIsMenuOpen(false)} className="font-medium text-slate-700">Unidades</a>
              <Button variant="primary" onClick={handleWhatsApp} className="w-full">Chamar no WhatsApp</Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* 1️⃣ HERO SECTION (Imagem + CTA) - CORRIGIDO */}
      <div className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Nova Imagem Background - Natureza/Paz */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549490237-7e67f730c455?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Refúgio de Paz e Recuperação na Natureza" 
            className="w-full h-full object-cover opacity-30" // Opacidade ajustada
          />
          {/* Gradiente Profissional para Leitura */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/50 border border-teal-700 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck size={14} /> Clínica de Alto Padrão
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                A recuperação começa com <span className="text-teal-400">um passo.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl">
                Tratamento especializado para dependência química e saúde mental em um ambiente seguro, acolhedor e em contato com a natureza.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" onClick={scrollToForm} className="min-w-[200px]">
                  Quero Ajuda Agora
                </Button>
                <Button variant="outline" onClick={handleWhatsApp} className="min-w-[200px]">
                  Falar com Terapeuta
                </Button>
              </div>
              
              {/* Selos de Confiança */}
              <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">24h</span>
                  <span className="text-slate-400 text-sm">Atendimento</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">10+</span>
                  <span className="text-slate-400 text-sm">Anos de História</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">100%</span>
                  <span className="text-slate-400 text-sm">Sigilo Absoluto</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 2️⃣ CONEXÃO EMOCIONAL */}
      <Section className="text-center max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">Nós entendemos sua dor</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Você não precisa lutar sozinho.
          </h3>
          <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            Sabemos que a dependência afeta não apenas o indivíduo, mas toda a família. 
            Nosso compromisso é oferecer um porto seguro onde o julgamento não entra, apenas o cuidado médico, psicológico e humano necessário para reescrever histórias.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
             {[
               { icon: <Heart className="text-rose-500" />, title: "Acolhimento Humano", text: "Tratamos pessoas, não apenas diagnósticos." },
               { icon: <Users className="text-teal-600" />, title: "Suporte Familiar", text: "Orientação contínua para quem ama e cuida." },
               { icon: <Star className="text-amber-500" />, title: "Metodologia Comprovada", text: "Protocolos médicos modernos e eficazes." }
             ].map((item, i) => (
               <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                 <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm">{item.icon}</div>
                 <h4 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h4>
                 <p className="text-slate-500 text-sm">{item.text}</p>
               </div>
             ))}
          </div>
        </FadeIn>
      </Section>

      {/* 3️⃣ COMO FUNCIONA O TRATAMENTO */}
      <Section id="tratamento" bg="gray">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Jornada de Recuperação</h2>
               <p className="text-slate-500 text-lg">Um processo estruturado em 3 pilares fundamentais para garantir a reintegração social.</p>
            </div>
            <Button variant="ghost" onClick={handleWhatsApp} className="hidden md:flex">
              Saiba mais detalhes <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Linha conectora (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

            {[
              { step: "01", title: "Desintoxicação", desc: "Acompanhamento médico intensivo para limpeza do organismo com segurança e conforto." },
              { step: "02", title: "Reabilitação", desc: "Terapias cognitivas e comportamentais para identificar gatilhos e tratar a raiz do problema." },
              { step: "03", title: "Ressocialização", desc: "Preparação gradativa para o retorno ao convívio social e prevenção de recaídas." }
            ].map((fase, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full pt-12 relative group hover:-translate-y-2 transition-transform duration-300">
                   <div className="absolute -top-6 left-8 bg-slate-900 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-teal-600 transition-colors">
                     {fase.step}
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4">{fase.title}</h3>
                   <p className="text-slate-500 leading-relaxed text-sm">{fase.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* 4️⃣ DIFERENCIAIS + GRID - CORRIGIDO */}
      <Section id="diferenciais" bg="white" className="overflow-hidden relative">
         {/* Removido o background decorativo azul pois o fundo agora é branco */}
         
         <div className="container mx-auto relative z-10">
           <div className="text-center mb-16">
             <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Estrutura Premium</span>
             <h2 className="text-3xl md:text-5xl font-bold mt-4 text-slate-900">Por que somos referência?</h2> {/* Corrigido texto */}
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: <Clock className="text-teal-600" size={32} />, label: "Plantão 24 Horas" },
               { icon: <ShieldCheck className="text-teal-600" size={32} />, label: "Segurança Total" },
               { icon: <Activity className="text-teal-600" size={32} />, label: "Médicos Diários" },
               { icon: <Users className="text-teal-600" size={32} />, label: "Terapia Familiar" },
             ].map((dif, i) => (
               <FadeIn key={i} delay={i * 0.1}> {/* Adicionado FadeIn */}
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col items-center justify-center gap-4 hover:bg-slate-100 transition shadow-sm">
                   {dif.icon}
                   <span className="font-semibold text-slate-700">{dif.label}</span> {/* Corrigido texto */}
                 </div>
               </FadeIn>
             ))}
           </div>
         </div>
      </Section>

      {/* 5️⃣ LOCALIZAÇÃO - AGORA SÃO 3 UNIDADES */}
      <Section id="unidades" bg="gray">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossas Unidades</h2>
          <p className="text-slate-500 text-lg mb-16 max-w-3xl mx-auto">
            Com unidades estrategicamente localizadas, oferecemos um ambiente propício à recuperação em diferentes regiões.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                image: "https://images.unsplash.com/photo-1550993074-0f2c41804702?q=80&w=2670&auto=format&fit=crop", 
                title: "Unidade I - Campo Limpo Paulista", 
                address: "Rua das Flores, 123 - Centro", 
                city: "Campo Limpo Paulista, SP",
                phone: "(11) 98765-4321",
                mapLink: "https://maps.app.goo.gl/seu-endereco-unidade-1"
              },
              { 
                image: "https://images.unsplash.com/photo-1582234057917-a9a7a13d7890?q=80&w=2670&auto=format&fit=crop", 
                title: "Unidade II - Serra da Cantareira", 
                address: "Estrada da Mata, 456 - Zona Rural", 
                city: "Mairiporã, SP",
                phone: "(11) 99887-6655",
                mapLink: "https://maps.app.goo.gl/seu-endereco-unidade-2"
              },
              { 
                image: "https://images.unsplash.com/photo-1627725917452-957262841f3e?q=80&w=2670&auto=format&fit=crop", 
                title: "Unidade III - Litoral Sul", 
                address: "Av. Beira Mar, 789 - Centro", 
                city: "Guarujá, SP",
                phone: "(13) 97654-3210",
                mapLink: "https://maps.app.goo.gl/seu-endereco-unidade-3"
              },
            ].map((unit, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden h-full flex flex-col">
                  <div className="h-48 w-full bg-slate-200">
                    <img src={unit.image} alt={`Unidade ${unit.title}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col items-center justify-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{unit.title}</h3>
                    <p className="text-slate-600 text-sm mb-2">{unit.address}</p>
                    <p className="text-slate-500 text-sm mb-6">{unit.city}</p>
                    <div className="flex flex-col gap-3 w-full">
                      <Button variant="light" className="w-full" onClick={() => handleWhatsApp(unit.phone.replace(/\D/g, ''))}>
                        <Phone size={16} className="text-green-500" /> WhatsApp
                      </Button>
                      <a href={unit.mapLink} target="_blank" rel="noopener noreferrer" className="w-full">
                         <Button variant="secondary" className="w-full">
                           <MapPin size={16} /> Ver no Mapa
                         </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* 6️⃣ FORMULÁRIO DE CONTATO */}
      <Section id="contato" bg="gray">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
              
              {/* Coluna Azul (Info) */}
              <div className="md:w-2/5 bg-slate-900 text-white p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Fale Conosco</h3>
                  <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                    Preencha o formulário e nossa equipe de triagem entrará em contato em até 15 minutos.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="text-teal-400" size={18} />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <ShieldCheck className="text-teal-400" size={18} />
                    <span>Sigilo Garantido</span>
                  </div>
                </div>
              </div>

              {/* Coluna Form */}
              <div className="md:w-3/5 p-10">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome Completo</label>
                    <input type="text" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition" placeholder="Digite seu nome" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Telefone / WhatsApp</label>
                    <input type="tel" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition" placeholder="(DDD) 00000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Como podemos ajudar?</label>
                    <textarea rows="3" className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition" placeholder="Descreva brevemente a situação..."></textarea>
                  </div>
                  <Button variant="primary" className="w-full">Solicitar Atendimento</Button>
                </form>
              </div>

            </div>
          </FadeIn>
        </div>
      </Section>

      {/* RODAPÉ */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-70 grayscale hover:grayscale-0 transition">
            <Heart className="text-teal-600" size={20} />
            <span className="font-bold text-slate-700">RESTAURA VIDAS</span>
          </div>
          <p className="text-slate-400 text-sm">© 2025 Grupo Restaura Vidas. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 flex items-center gap-2"
      >
        <Phone size={24} fill="currentColor" />
        <span className="hidden md:inline font-bold">Falar no WhatsApp</span>
      </a>

    </div>
  );
}