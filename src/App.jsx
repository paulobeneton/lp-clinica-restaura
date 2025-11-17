import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, MapPin, Clock, Heart, ShieldCheck, 
  Activity, Users, ArrowRight, CheckCircle2, Menu, X, Star,
  MessageCircle, ChevronDown, Home, Lock, Stethoscope, 
  Utensils, Brain, Leaf, AlertTriangle, Coins, Pill
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
    light: "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
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
  const handleWhatsApp = (number = '5511999999999') => window.open(`https://wa.me/${number}?text=Olá, preciso de ajuda com internamento.`, '_blank');
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
            <a href="#tratamento" className="hover:text-teal-600 transition">Tratamento</a>
            <a href="#equipe" className="hover:text-teal-600 transition">Equipe & Rotina</a>
            <a href="#unidades" className="hover:text-teal-600 transition">Unidades</a>
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
            <a href="#tratamento" onClick={() => setIsMenuOpen(false)}>Tratamento</a>
            <a href="#equipe" onClick={() => setIsMenuOpen(false)}>Equipe</a>
            <a href="#unidades" onClick={() => setIsMenuOpen(false)}>Unidades</a>
            <Button variant="primary" onClick={handleCall} className="w-full">Ligar Agora</Button>
          </div>
        )}
      </nav>

      {/* 1️⃣ HERO SECTION */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-900 overflow-hidden">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2670&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
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
                  <Button variant="outline" onClick={() => handleWhatsApp()} className="border-slate-600 text-white hover:bg-white/10 hover:border-white">
                    <MessageCircle size={20} /> Falar no WhatsApp
                  </Button>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-400 text-sm">
                   <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500"/> Sigilo Total</span>
                   <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500"/> Resgate 24h</span>
                </div>
              </FadeIn>
            </div>
            {/* Imagem Direita */}
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

      {/* 2️⃣ O QUE TRATAMOS (NOVA SEÇÃO) */}
      <Section className="bg-white border-b border-slate-100 py-12">
        <div className="container mx-auto text-center">
           <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Especialistas em Recuperação de:</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { name: "Álcool", icon: <Utensils size={24} /> },
                { name: "Drogas", icon: <Leaf size={24} /> },
                { name: "Medicamentos", icon: <Pill size={24} /> },
                { name: "Jogos (Bets)", icon: <Coins size={24} /> },
                { name: "Outros Vícios", icon: <AlertTriangle size={24} /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600 font-semibold opacity-70 hover:opacity-100 hover:text-teal-600 transition cursor-default">
                  {item.icon} {item.name}
                </div>
              ))}
           </div>
        </div>
      </Section>

      {/* 3️⃣ CONEXÃO EMOCIONAL */}
      <Section className="bg-slate-50 text-center max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-8 flex justify-center">
            <div className="bg-teal-100 p-4 rounded-full text-teal-600">
              <Users size={40} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Entendemos o que você está passando
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Sabemos que pedir ajuda não é fácil. Muitos tentam sozinhos, mas recaem. 
            Aqui, você encontra <span className="font-bold text-teal-700">acolhimento, cuidado e tratamento especializado</span> — sem julgamentos, focados em recomeços reais.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
             {[
               "Ambiente seguro e humanizado",
               "Equipe multidisciplinar 24h",
               "Foco em recomeços duradouros"
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                 <CheckCircle2 className="text-green-500 shrink-0" />
                 <span className="font-medium text-slate-700">{item}</span>
               </div>
             ))}
          </div>
        </FadeIn>
      </Section>

      {/* 4️⃣ JORNADA DE TRATAMENTO (ATUALIZADA COM DADOS OFICIAIS) */}
      <Section id="tratamento" className="bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Metodologia Exclusiva</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">Plano de Tratamento em 3 Etapas</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A dependência química é uma doença progressiva e incurável, mas tratável. 
              Nosso modelo baseia-se na conscientização e nos 12 Passos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
             {/* Linha Conectora */}
             <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-slate-100 -z-10"></div>

            {/* Etapa 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-lg transition-all relative">
                <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white font-bold text-2xl shadow-lg shadow-orange-500/30">1</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Desintoxicação</h3>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-4 block">1º e 2º Mês</span>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Adaptação ao convívio e desintoxicação física. Foco na reeducação alimentar e recuperação dos aspectos físicos fragilizados pelo uso compulsivo.
                </p>
              </div>
            </FadeIn>

            {/* Etapa 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-2xl border-2 border-teal-500 shadow-xl h-full transform md:-translate-y-4 relative">
                <div className="bg-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white font-bold text-2xl shadow-lg shadow-teal-600/30">2</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Conscientização</h3>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-4 block">3º e 4º Mês</span>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Aspecto psicológico profundo. Autoconhecimento do eu interior e da doença. Aplicação intensiva de terapias e psicologia aplicada.
                </p>
              </div>
            </FadeIn>

            {/* Etapa 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full hover:shadow-lg transition-all relative">
                <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white font-bold text-2xl shadow-lg shadow-blue-500/30">3</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ressocialização</h3>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4 block">5º e 6º Mês</span>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Aspecto Espiritual e valorização da vida. Fortalecimento da fé em um poder superior e preparação para o retorno social e familiar.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 5️⃣ ESTRUTURA TÉCNICA E ATIVIDADES (NOVA SEÇÃO DETALHADA) */}
      <Section id="equipe" className="bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Excelência no Cuidado</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nossa metodologia combina acompanhamento médico rigoroso, disciplina e uma rotina terapêutica completa para ocupar a mente e curar o corpo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Coluna 1: Equipe */}
            <FadeIn delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full">
                <div className="flex items-center gap-3 mb-6 text-teal-400">
                  <Stethoscope size={28} />
                  <h3 className="text-xl font-bold text-white">Equipe Técnica</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Psiquiatra",
                    "Psicóloga",
                    "Enfermeira Padrão",
                    "Terapeutas (24 Horas)",
                    "Coordenadores (24 Horas)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm border-b border-white/5 pb-2 last:border-0">
                      <CheckCircle2 size={16} className="text-teal-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Coluna 2: Terapias Específicas */}
            <FadeIn delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full">
                <div className="flex items-center gap-3 mb-6 text-orange-400">
                  <Brain size={28} />
                  <h3 className="text-xl font-bold text-white">Terapias Aplicadas</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="mb-2">
                    <strong className="text-white block">P.P.R (Prevenção a Recaída)</strong>
                    Ferramentas de "Evite e Procure" para a vida pós-internação.
                  </li>
                  <li className="mb-2">
                    <strong className="text-white block">T.R.E (Racional Emotiva)</strong>
                    Aprender a lidar com Raiva, Vergonha e Luto.
                  </li>
                  <li className="mb-2">
                    <strong className="text-white block">Laborterapia</strong>
                    Terapia do trabalho para disciplina e autoestima.
                  </li>
                  <li>
                    <strong className="text-white block">Reunião de Sentimentos</strong>
                    Partilha e identificação de emoções em grupo.
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Coluna 3: Rotina e Alimentação */}
            <FadeIn delay={0.3}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full">
                <div className="flex items-center gap-3 mb-6 text-green-400">
                  <Utensils size={28} />
                  <h3 className="text-xl font-bold text-white">Rotina Saudável</h3>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider">4 Refeições Diárias</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <span className="bg-white/10 px-3 py-1 rounded">Café da Manhã</span>
                    <span className="bg-white/10 px-3 py-1 rounded">Almoço</span>
                    <span className="bg-white/10 px-3 py-1 rounded">Café da Tarde</span>
                    <span className="bg-white/10 px-3 py-1 rounded">Jantar</span>
                  </div>
                </div>
                <div>
                   <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider">Atividades</h4>
                   <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Educação Física</li>
                      <li>• Meditação / Relaxamento</li>
                      <li>• Espiritualidade (Manhã)</li>
                      <li>• Reuniões de N.A. e A.A.</li>
                   </ul>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </Section>

      {/* 6️⃣ POR QUE NOS ESCOLHER (DESIGN SOLICITADO) */}
      <Section id="diferenciais" className="bg-slate-50">
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

      {/* 7️⃣ NOSSAS UNIDADES */}
      <Section id="unidades" className="bg-white border-t border-slate-100">
        <div className="container mx-auto text-center">
          <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Estrutura Premium</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 mt-2">Nossas Unidades</h2>
          <p className="text-slate-500 text-lg mb-16 max-w-3xl mx-auto">
            Com unidades estrategicamente localizadas, oferecemos um ambiente propício à recuperação em diferentes regiões.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                image: "https://images.unsplash.com/photo-1550993074-0f2c41804702?q=80&w=2670&auto=format&fit=crop", 
                title: "Unidade I - Campo Limpo", 
                address: "Rua das Flores, 123", 
                city: "Campo Limpo Paulista, SP",
                phone: "5511987654321",
                mapLink: "http://maps.google.com"
              },
              { 
                image: "https://images.unsplash.com/photo-1582234057917-a9a7a13d7890?q=80&w=2670&auto=format&fit=crop", 
                title: "Unidade II - Cantareira", 
                address: "Estrada da Mata, 456", 
                city: "Mairiporã, SP",
                phone: "5511998876655",
                mapLink: "http://maps.google.com"
              },
              { 
                image: "https://images.unsplash.com/photo-1627725917452-957262841f3e?q=80&w=2670&auto=format&fit=crop", 
                title: "Unidade III - Litoral", 
                address: "Av. Beira Mar, 789", 
                city: "Guarujá, SP",
                phone: "5513976543210",
                mapLink: "http://maps.google.com"
              },
            ].map((unit, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                  <div className="h-56 w-full bg-slate-200 overflow-hidden">
                    <img src={unit.image} alt={`Unidade ${unit.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col items-center justify-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{unit.title}</h3>
                    <p className="text-slate-500 text-sm mb-6">{unit.city}</p>
                    <div className="flex flex-col gap-3 w-full">
                      <Button variant="light" className="w-full" onClick={() => handleWhatsApp(unit.phone)}>
                        <MessageCircle size={16} className="text-green-500" /> WhatsApp
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

      {/* 8️⃣ HISTÓRIAS DE TRANSFORMAÇÃO */}
      <Section id="depoimentos" className="bg-slate-50">
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
                <div className="bg-white p-8 rounded-3xl border border-slate-100 text-left hover:shadow-lg transition relative h-full flex flex-col">
                  <div className="flex gap-1 mb-4 text-orange-400">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 italic mb-6 flex-grow">"{depo.text}"</p>
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

      {/* 9️⃣ FAQ */}
      <Section id="faq" className="bg-white">
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
              { q: "A doença tem cura?", a: "A dependência química é uma doença incurável, progressiva e fatal, mas tratável. Nosso objetivo é estacionar a doença e proporcionar qualidade de vida através da conscientização e manutenção contínua." }
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

      {/* 🔟 CONTATO MELHORADO */}
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
                  
                  <button onClick={() => handleWhatsApp()} className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-green-600 transition shadow-lg">
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
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Motivo</label>
                   <select className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-500 outline-none">
                      <option>Internação para Drogas</option>
                      <option>Internação para Álcool</option>
                      <option>Vício em Jogos</option>
                      <option>Outros</option>
                   </select>
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