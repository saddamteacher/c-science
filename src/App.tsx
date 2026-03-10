import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { 
  Terminal, 
  BookOpen, 
  Code2, 
  Cpu, 
  Layout, 
  User, 
  ChevronRight, 
  Github, 
  ExternalLink,
  Menu,
  X,
  Play,
  CheckCircle2,
  Trophy,
  ArrowLeft,
  ArrowRight,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { lessons, projects } from './data/lessons';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Course', path: '/course' },
    { name: 'Lessons', path: '/lessons' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Terminal className="text-black" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tighter neon-glow">SADDAM TEACHER</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === link.path ? "text-accent" : "text-gray-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="border-t border-white/10 py-12 px-6 mt-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Terminal className="text-accent" size={24} />
          <span className="text-xl font-bold tracking-tighter">SADDAM TEACHER</span>
        </div>
        <p className="text-gray-400 text-sm">
          O'zbekistondagi eng professional Python va Computer Science akademiyasi. 
          Biz bilan kelajakni kodlang.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Sahifalar</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><Link to="/lessons" className="hover:text-accent">Darslar</Link></li>
          <li><Link to="/projects" className="hover:text-accent">Loyihalar</Link></li>
          <li><Link to="/about" className="hover:text-accent">Biz haqimizda</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Bog'lanish</h4>
        <p className="text-sm text-gray-400">Telegram: @saddam_teacher</p>
        <p className="text-sm text-gray-400">Email: info@saddam.uz</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} SADDAM TEACHER Academy. Barcha huquqlar himoyalangan.
    </div>
  </footer>
);

const CodeBlock = ({ code, language = 'python' }: { code: string, language?: string }) => (
  <div className="rounded-xl overflow-hidden jetbrains-shadow border border-white/10 my-6">
    <div className="bg-[#1e1e1e] px-4 py-2 flex items-center justify-between border-b border-white/5">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{language}</span>
    </div>
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      customStyle={{
        margin: 0,
        padding: '1.5rem',
        fontSize: '0.9rem',
        fontFamily: 'JetBrains Mono, monospace',
        backgroundColor: '#0D0D0D'
      }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
);

// --- Pages ---

const HomePage = () => (
  <div className="pt-32 px-6">
    <section className="max-w-7xl mx-auto text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-block px-4 py-1.5 rounded-full glass text-accent text-xs font-bold tracking-widest uppercase mb-4"
      >
        Python & Computer Science Academy
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
      >
        SADDAM <span className="text-accent">TEACHER</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl"
      >
        Professional darajadagi dasturlashni o'rganing. Apple va JetBrains standartlari asosida yaratilgan mukammal o'quv dasturi.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link to="/lessons" className="px-8 py-4 bg-accent text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
          <Play size={20} fill="currentColor" /> Darslarni boshlash
        </Link>
        <Link to="/course" className="px-8 py-4 glass font-bold rounded-xl hover:bg-white/10 transition-colors">
          Kurs haqida
        </Link>
      </motion.div>
    </section>

    <section className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: <Cpu className="text-blue-400" />, title: "Computer Science", desc: "Algoritmlar, ma'lumotlar tuzilmasi va kompyuter arxitekturasi." },
        { icon: <Code2 className="text-accent" />, title: "Professional Python", desc: "Asoslardan boshlab murakkab OOP va loyihalargacha." },
        { icon: <Layout className="text-purple-400" />, title: "Real Loyihalar", desc: "Portfolio uchun 4 ta yirik va o'nlab kichik loyihalar." }
      ].map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-8 glass rounded-3xl space-y-4 hover:border-accent/50 transition-colors"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
        </motion.div>
      ))}
    </section>
  </div>
);

const LessonsListPage = () => {
  const [search, setSearch] = useState('');
  
  const filteredLessons = lessons.filter(l => 
    l.title.toLowerCase().includes(search.toLowerCase()) || 
    l.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">O'quv dasturi</h1>
          <p className="text-gray-400">32 ta darsdan iborat to'liq Python kursi.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Darsni qidirish..." 
            className="w-full pl-12 pr-4 py-3 glass rounded-xl focus:outline-none focus:border-accent transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson, i) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link 
              to={`/lessons/${lesson.slug}`}
              className="group block p-6 glass rounded-3xl hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">Dars {lesson.id}</span>
                <ChevronRight className="text-gray-600 group-hover:text-accent transition-colors" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{lesson.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{lesson.description}</p>
              <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                <BookOpen size={14} /> 2 soatlik material
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const LessonDetailPage = () => {
  const { slug } = useParams();
  const lesson = lessons.find(l => l.slug === slug);
  const currentIndex = lessons.findIndex(l => l.slug === slug);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  if (!lesson) return <div className="pt-32 text-center">Dars topilmadi.</div>;

  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto">
      <Link to="/lessons" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent mb-8 transition-colors">
        <ArrowLeft size={16} /> Barcha darslar
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <header className="space-y-4">
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Dars {lesson.id}</span>
          <h1 className="text-5xl font-black tracking-tight">{lesson.title}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{lesson.introduction}</p>
        </header>

        <div className="markdown-body">
          <ReactMarkdown>{lesson.theory}</ReactMarkdown>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Code2 className="text-accent" /> Kod misollari
          </h2>
          {lesson.codeExamples.map((ex, i) => (
            <div key={i} className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-400">{ex.title}</h4>
              <CodeBlock code={ex.code} />
              <p className="text-sm text-gray-500 italic">{ex.explanation}</p>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="p-8 glass rounded-3xl space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Terminal size={20} className="text-blue-400" /> Sinf ishlari
            </h3>
            <ul className="space-y-3">
              {lesson.classwork.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="p-8 glass rounded-3xl space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BookOpen size={20} className="text-purple-400" /> Amaliy mashqlar
            </h3>
            <ul className="space-y-3">
              {lesson.exercises.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="p-8 glass rounded-3xl border-accent/20 space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Layout size={24} className="text-accent" /> Uyga vazifa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.homework.map((item, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 text-sm text-gray-300">
                <span className="text-accent font-mono mr-2">{i + 1}.</span> {item}
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 bg-accent/5 rounded-3xl border border-accent/20 space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2 text-accent">
            <Trophy size={20} /> Challenge vazifa
          </h3>
          <p className="text-gray-300 leading-relaxed">{lesson.challenge}</p>
        </section>

        {/* Navigation between lessons */}
        <div className="flex justify-between items-center pt-12 border-t border-white/10">
          {prevLesson ? (
            <Link to={`/lessons/${prevLesson.slug}`} className="flex flex-col items-start gap-1 group">
              <span className="text-xs text-gray-500 flex items-center gap-1"><ArrowLeft size={12} /> Oldingi</span>
              <span className="font-bold group-hover:text-accent transition-colors">{prevLesson.title}</span>
            </Link>
          ) : <div />}
          
          {nextLesson ? (
            <Link to={`/lessons/${nextLesson.slug}`} className="flex flex-col items-end gap-1 group text-right">
              <span className="text-xs text-gray-500 flex items-center gap-1">Keyingi <ArrowRight size={12} /></span>
              <span className="font-bold group-hover:text-accent transition-colors">{nextLesson.title}</span>
            </Link>
          ) : <div />}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsPage = () => (
  <div className="pt-32 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16 space-y-4">
      <h1 className="text-4xl md:text-5xl font-black">Kurs loyihalari</h1>
      <p className="text-gray-400 max-w-2xl mx-auto">Kurs yakunida talabalar tomonidan tayyorlanadigan professional darajadagi loyihalar.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="group glass rounded-3xl overflow-hidden"
        >
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-2 mb-3">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-[10px] font-bold bg-accent text-black px-2 py-0.5 rounded uppercase tracking-wider">{t}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
            <button className="w-full py-3 glass rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Loyiha tafsilotlari <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 px-6 max-w-4xl mx-auto space-y-16">
    <section className="text-center space-y-6">
      <div className="w-32 h-32 bg-accent rounded-full mx-auto flex items-center justify-center mb-8 jetbrains-shadow">
        <User size={64} className="text-black" />
      </div>
      <h1 className="text-4xl font-black">Saddam Teacher haqida</h1>
      <p className="text-xl text-gray-400 leading-relaxed">
        Men Saddam Teacher, Python va Computer Science bo'yicha mutaxassisman. 
        Mening maqsadim - O'zbekistonda jahon darajasidagi dasturchilarni tayyorlash.
      </p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-8 glass rounded-3xl space-y-4">
        <h3 className="text-xl font-bold">Bizning Missiya</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Murakkab texnologiyalarni sodda va tushunarli tilda o'rgatish orqali yoshlarga IT olamiga yo'l ochish.
        </p>
      </div>
      <div className="p-8 glass rounded-3xl space-y-4">
        <h3 className="text-xl font-bold">Bizning Qadriyatlar</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Sifatli ta'lim, amaliy yondashuv va doimiy rivojlanish. Biz faqat kod yozishni emas, balki fikrlashni o'rgatamiz.
        </p>
      </div>
    </div>

    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Nega bizni tanlashadi?</h2>
      <div className="space-y-4">
        {[
          "Xalqaro standartlar asosidagi o'quv dasturi",
          "Har bir dars uchun 2 soatdan ortiq chuqur material",
          "Real loyihalar ustida ishlash imkoniyati",
          "Doimiy mentorlik va qo'llab-quvvatlash",
          "Zamonaviy va qulay ta'lim platformasi"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 glass rounded-2xl">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <CheckCircle2 size={18} className="text-accent" />
            </div>
            <span className="text-gray-300 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const CourseOverviewPage = () => (
  <div className="pt-32 px-6 max-w-4xl mx-auto space-y-16">
    <section className="space-y-6">
      <h1 className="text-5xl font-black tracking-tight">Kurs haqida</h1>
      <p className="text-xl text-gray-400 leading-relaxed">
        Ushbu kurs Python dasturlash tilini noldan boshlab professional darajagacha o'rgatishga mo'ljallangan. 
        Biz nafaqat til sintaksisini, balki Computer Science asoslarini ham chuqur o'rganamiz.
      </p>
    </section>

    <section className="space-y-8">
      <h2 className="text-3xl font-bold">Kurs tarkibi</h2>
      <div className="space-y-6">
        {[
          { title: "Python Asoslari", desc: "O'zgaruvchilar, turlar, shartlar va sikllar.", lessons: "1-10 darslar" },
          { title: "Advanced Python", desc: "Funksiyalar, modullar va fayllar bilan ishlash.", lessons: "11-17 darslar" },
          { title: "OOP (Obyektga Yo'naltirilgan Dasturlash)", desc: "Klasslar, merosxo'rlik, inkapsulyatsiya.", lessons: "18-23 darslar" },
          { title: "Algoritmlar va Ma'lumotlar Tuzilmasi", desc: "Big O, qidirish, saralash, Stack va Queue.", lessons: "24-30 darslar" },
          { title: "Final Loyihalar", desc: "Real dunyo muammolariga yechim topish.", lessons: "31-32 darslar" }
        ].map((module, i) => (
          <div key={i} className="p-8 glass rounded-3xl border-l-4 border-accent space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{module.title}</h3>
              <span className="text-xs font-mono text-accent">{module.lessons}</span>
            </div>
            <p className="text-gray-400 text-sm">{module.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <div className="text-center">
      <Link to="/lessons" className="px-12 py-5 bg-accent text-black font-black rounded-2xl hover:scale-105 transition-transform inline-block">
        HOZIROQ BOSHLASH
      </Link>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CourseOverviewPage />} />
            <Route path="/lessons" element={<LessonsListPage />} />
            <Route path="/lessons/:slug" element={<LessonDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
