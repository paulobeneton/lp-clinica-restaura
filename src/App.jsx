import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MapPin, Clock, Heart, ShieldCheck, 
  Activity, Users, ArrowRight, CheckCircle2, Menu, X 
} from 'lucide-react';

// --- Componentes UI ---

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg";
  
  // Paleta de Cores Médica/Acolhedora
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/20 transform hover:-translate-y-1", // Ação (Ligue agora)
    secondary: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20", // Confiança
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50", // Informativo
    whatsapp: "bg-green-500 hover:bg-green-600 text-white shadow-green-500/30" // WhatsApp
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ children, className = '', id = '' }) => (
  <section id={id} className={`py-20 px-6 md:px-12 ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Função para rolar até o formulário
  const scrollToForm = () => {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    // Substitua pelo número real
    window.open('https://wa.me/5511999999999?text=Olá, gostaria de informações sobre internação.', '_blank');
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen">
      
      {/* HEADER / NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-full">
              <Heart className="text-white h-6 w-6" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900 leading-none">GRUPO</h1>
              <span className="text-sm font-semibold text-blue-600 tracking-widest">RESTAURA VIDAS</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#tratamento" className="hover:text-blue-600 transition">O Tratamento</a>
            <a href="#diferenciais" className="hover:text-blue-600 transition">Diferenciais</a>
            <a href="#localizacao" className="hover:text-blue-600 transition">Localização</a>
            
            {/* Botão de Emergência no Menu */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end text-sm">
                <span className="text-slate-500">Precisa de ajuda urgente?</span>
                <span className="font-bold text-blue-900 text-lg">0800 123 4567</span>
              </div>
              <Button variant="primary" onClick={handleWhatsApp} className="py-2 px-4 text-sm">
                Plantão 24h
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl">
            <a href="#tratamento" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium">O Tratamento</a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium">Diferenciais</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-slate-600 font-medium">Contato</a>
            <Button variant="primary" onClick={handleWhatsApp} className="w-full">Falar no WhatsApp</Button>
          </div>
        )}
      </nav>

      {/* 1️⃣ HERO SECTION */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-blue-900">
        {/* Imagem de Fundo com Overlay */}
        <div className="absolute inset-0 z-0">
           {/* Substitua por uma foto real de "mãos dadas" ou "natureza" */}
          <img 
            src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=2570&auto=format&fit=crop" 
            alt="Acolhimento" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3 text-center md:text-left">
            <FadeIn>
              <span className="inline-block py-1 px-4 rounded-full bg-blue-800 text-blue-200 text-sm font-semibold mb-6 border border-blue-700">
                ❤️ Atendimento Humanizado 24 horas
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                A recuperação começa com um passo. <span className="text-orange-400">Dê esse passo hoje.</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Seja qual for o vício (álcool, drogas, jogos), existe um caminho de volta. 
                No Grupo Restaura Vidas, você e sua família não precisam trilhar isso sozinhos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="primary" onClick={scrollToForm} className="text-lg px-8">
                  Quero ajuda agora
                </Button>
                <Button variant="outline" onClick={handleWhatsApp} className="border-white text-white hover:bg-white/10">
                  <Phone size={20} /> Falar com Especialista
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* 2️⃣ SEÇÃO DE CONEXÃO (EMPATIA) */}
      <Section className="bg-white text-center max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-8 flex justify-center">
            <div className="bg-blue-50 p-4 rounded-full text-blue-600">
              <Users size={48} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Entendemos o que você está passando
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Sabemos que pedir ajuda não é fácil. Muitos tentam sozinhos, mas a doença da adicção é complexa e recaídas acontecem. 
            Aqui, você encontra <span className="font-bold text-blue-700">acolhimento, cuidado e tratamento especializado</span> — sem julgamentos, apenas o desejo genuíno de ver uma vida restaurada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
             {[
               "Ambiente Seguro e Livre de Drogas",
               "Equipe Multidisciplinar Especializada",
               "Foco em Recomeços Reais e Duradouros"
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                 <CheckCircle2 className="text-green-500 shrink-0" />
                 <span className="font-medium text-slate-700">{item}</span>
               </div>
             ))}
          </div>
        </FadeIn>
      </Section>

      {/* 3️⃣ COMO FUNCIONA (TRATAMENTO) */}
      <Section id="tratamento" className="bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Nossa Metodologia de Tratamento</h2>
            <p className="text-slate-600">Um processo estruturado para resgatar a saúde física, mental e espiritual.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Etapa 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">1</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Acolhimento e Avaliação</h3>
                <p className="text-slate-600">
                  Recepção empática do paciente e da família. Avaliação médica e psicológica completa para definir o plano de tratamento individualizado.
                </p>
              </div>
            </FadeIn>

            {/* Etapa 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-bl-lg">FASE INTENSIVA</div>
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">2</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Tratamento Personalizado</h3>
                <p className="text-slate-600">
                  Desintoxicação monitorada, terapias em grupo e individuais, atividades físicas e reeducação comportamental com apoio 24h.
                </p>
              </div>
            </FadeIn>

            {/* Etapa 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">3</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Ressocialização</h3>
                <p className="text-slate-600">
                  Preparação para a volta ao convívio social. Fortalecimento dos vínculos familiares, plano de prevenção à recaída e projeto de vida.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 4️⃣ DIFERENCIAIS (POR QUE NÓS) */}
      <Section id="diferenciais" className="bg-white">
        <div className="container mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
             {/* Imagem ilustrativa de estrutura */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=2532&auto=format&fit=crop" 
                  alt="Estrutura da Clínica" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-900/90 to-transparent p-8">
                  <p className="text-white font-medium flex items-center gap-2">
                    <ShieldCheck className="text-green-400" /> Local licenciado e regularizado
                  </p>
                </div>
             </div>
          </div>
          
          <div className="md:w-1/2">
            <FadeIn>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Por que escolher o Grupo Restaura Vidas?</h2>
              <div className="space-y-6">
                {[
                  { icon: <Heart className="text-orange-500" />, title: "Tratamento Humanizado", desc: "O paciente é tratado com amor e respeito, não como um número." },
                  { icon: <Clock className="text-blue-500" />, title: "Monitoramento 24 Horas", desc: "Equipe de enfermagem e cuidadores disponíveis dia e noite." },
                  { icon: <Users className="text-green-500" />, title: "Apoio Familiar", desc: "A família recebe orientação e suporte durante todo o processo." },
                  { icon: <MapPin className="text-purple-500" />, title: "Localização Discreta", desc: "Ambiente tranquilo, em contato com a natureza, preservando o sigilo." },
                  { icon: <Activity className="text-red-500" />, title: "Equipe Experiente", desc: "Profissionais com mais de 10 anos de experiência em reabilitação." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-slate-50 p-2 rounded-lg h-fit border border-slate-100 shadow-sm">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 5️⃣ LOCALIZAÇÃO + CTA MAPA */}
      <Section id="localizacao" className="bg-blue-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Estamos prontos para receber quem você ama</h2>
          <p className="text-blue-200 mb-8 text-lg">
            Localizados em uma área verde privilegiada, oferecemos a tranquilidade necessária para a reflexão e recuperação.
          </p>
          
          {/* Placeholder do Mapa */}
          <div className="w-full h-64 bg-blue-800 rounded-xl border-2 border-blue-700 flex items-center justify-center mb-8 relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=-23.550520,-46.633308&zoom=14&size=600x300&key=YOUR_API_KEY')] bg-cover bg-center opacity-50 group-hover:opacity-40 transition"></div>
             <Button variant="primary" onClick={handleWhatsApp} className="relative z-10">
               <MapPin size={18} /> Solicitar Localização Exata via WhatsApp
             </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-blue-200">
            <span className="flex items-center gap-2"><Clock className="text-orange-400" /> Internações Imediatas 24h</span>
            <span className="flex items-center gap-2"><ShieldCheck className="text-green-400" /> Transporte de Resgate Especializado</span>
          </div>
        </div>
      </Section>

      {/* 6️⃣ SEÇÃO FINAL - FORMULÁRIO */}
      <Section id="contato" className="bg-slate-50">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">Fale com um especialista agora</h2>
              <p className="text-slate-600">Preencha o formulário abaixo. Sua recuperação começa aqui.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                <input type="text" placeholder="Seu nome" className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp / Telefone</label>
                <input type="tel" placeholder="(DDD) 99999-9999" className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Motivo do Contato</label>
                <select className="w-full p-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white">
                  <option>Tratamento para Álcool</option>
                  <option>Tratamento para Drogas</option>
                  <option>Vício em Jogos/Apostas</option>
                  <option>Outros Vícios</option>
                  <option>Dúvidas Gerais</option>
                </select>
              </div>

              <div className="pt-2">
                <Button variant="primary" className="w-full text-lg py-4">
                  Solicitar Ajuda Agora
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-4 bg-slate-50 p-2 rounded">
                <ShieldCheck size={14} className="text-green-600" />
                <span>Suas informações são 100% confidenciais. Não julgamos, ajudamos.</span>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* RODAPÉ */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-sm">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
               <Heart className="text-blue-500" fill="currentColor" />
               <span className="text-lg font-bold text-white">GRUPO RESTAURA VIDAS</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Sobre Nós</a>
              <a href="#" className="hover:text-white transition">Tratamentos</a>
              <a href="#" className="hover:text-white transition">Blog</a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 Grupo Restaura Vidas. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1">
               <CheckCircle2 size={14} className="text-green-500" /> Responsável Técnico: Dr. Modelo CRM/SP 12345
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 flex items-center gap-2"
      >
        <Phone size={24} fill="currentColor" />
        <span className="hidden md:inline font-bold">Ajuda Online</span>
      </a>

    </div>
  );
}