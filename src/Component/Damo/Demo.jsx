
import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Server, 
  Layers, 
  ExternalLink, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Menu, 
  X, 
  Terminal, 
  Cpu, 
  Globe, 
  Database,
  ArrowRight,
  Sparkles,
  ChevronRight,
  UserCheck
} from 'lucide-react';

export default function Demo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  // Hero Section Dynamic Typing Effect
  const phrases = [
    "Full-Stack Web Applications",
    "Modern React & Next.js Interfaces",
    "Scalable Node.js & NestJS Backends",
    "High-Performance Web Solutions"
  ];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeout;

    const typeEffect = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        setTypedText(currentPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        timeout = setTimeout(typeEffect, 2000);
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        timeout = setTimeout(typeEffect, 500);
      } else {
        timeout = setTimeout(typeEffect, isDeleting ? 40 : 80);
      }
    };

    timeout = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Services Data
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-emerald-400" />,
      title: "Frontend Development",
      description: "Crafting pixel-perfect, responsive, and highly dynamic user interfaces using React, Next.js, and Tailwind CSS with smooth state management.",
      tags: ["React.js", "Tailwind CSS", "TypeScript", "Redux/Zustand"]
    },
    {
      icon: <Server className="w-8 h-8 text-teal-400" />,
      title: "Backend Development",
      description: "Building robust REST APIs, microservices, and secure database architectures using Node.js, Express, NestJS, and PostgreSQL/MongoDB.",
      tags: ["Node.js", "NestJS", "Express", "REST API", "PostgreSQL"]
    },
    {
      icon: <Layers className="w-8 h-8 text-emerald-300" />,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development combining responsive frontends with powerful server-side business logic and cloud integrations.",
      tags: ["Full-Stack", "Auth & Security", "Database Design", "Deployment"]
    }
  ];

  // Portfolio Projects Data
  const projects = [
    {
      id: 1,
      title: "E-Commerce SaaS Platform",
      category: "fullstack",
      categoryLabel: "Full-Stack",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      description: "A complete multi-vendor marketplace platform featuring real-time analytics dashboard, Stripe payment processing, and JWT authentication.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Enterprise Dashboard Analytics",
      category: "frontend",
      categoryLabel: "Front-end",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Interactive data visualization dashboard with dark/light themes, customizable widgets, dynamic charts, and responsive grid system.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "RESTful Task Management API",
      category: "backend",
      categoryLabel: "Back-end",
      image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80",
      description: "Production-ready backend API with JWT authentication, role-based access control, Swagger documentation, and automated testing.",
      techStack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI Workspace & Chat Assistant",
      category: "fullstack",
      categoryLabel: "Full-Stack",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      description: "Modern web application integrating OpenAI APIs for real-time document interaction, custom AI prompts, and history storage.",
      techStack: ["React", "NestJS", "OpenAI API", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Fintech Mobile-Responsive App",
      category: "frontend",
      categoryLabel: "Front-end",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-responsive digital banking interface with micro-interactions, dark mode support, and smooth transaction flows.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Real-time Notification Microservice",
      category: "backend",
      categoryLabel: "Back-end",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      description: "Scalable backend microservice handling WebSocket connections for live user notifications and Redis pub/sub queuing.",
      techStack: ["Node.js", "WebSockets", "Redis", "Docker"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  // Tech Stack Items
  const techStack = [
    { name: "React.js", category: "Frontend", level: "Expert", icon: <Globe className="w-6 h-6 text-emerald-400" /> },
    { name: "TypeScript", category: "Language", level: "Advanced", icon: <Code2 className="w-6 h-6 text-teal-400" /> },
    { name: "Tailwind CSS", category: "Styling", level: "Expert", icon: <Sparkles className="w-6 h-6 text-emerald-300" /> },
    { name: "Node.js", category: "Backend", level: "Advanced", icon: <Server className="w-6 h-6 text-emerald-400" /> },
    { name: "NestJS", category: "Backend Framework", level: "Intermediate", icon: <Cpu className="w-6 h-6 text-teal-300" /> },
    { name: "PostgreSQL / MongoDB", category: "Database", level: "Advanced", icon: <Database className="w-6 h-6 text-emerald-400" /> },
    { name: "REST APIs & GraphQL", category: "Architecture", level: "Expert", icon: <Terminal className="w-6 h-6 text-teal-400" /> },
    { name: "Git & GitHub", category: "DevOps", level: "Expert", icon: <Github className="w-6 h-6 text-emerald-300" /> }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Background Decorative Gradients */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-10 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              &lt;/&gt;
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent">
                DevStudio
              </span>
              <span className="block text-xs text-emerald-400 font-mono tracking-wider">FULL-STACK PORTFOLIO</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a>
            <a href="#tech" className="hover:text-emerald-400 transition-colors">Tech Stack</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact" 
          
              className="px-5 py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:opacity-90 transition-all shadow-md shadow-emerald-500/20 active:scale-95"

            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-b border-emerald-900/30 px-4 pt-2 pb-6 space-y-4">
            <a 
              href="#about" 
              className="block text-base font-medium py-2 text-slate-300 hover:text-emerald-400"
              onClick={() => setIsMenuOpen(false)}
            >About</a>
            <a 
              href="#services" 
              className="block text-base font-medium py-2 text-slate-300 hover:text-emerald-400"
              onClick={() => setIsMenuOpen(false)}
            >Services</a>
            <a 
              href="#portfolio" 
              className="block text-base font-medium py-2 text-slate-300 hover:text-emerald-400"
              onClick={() => setIsMenuOpen(false)}
            >Portfolio</a>
            <a 
              href="#tech" 
              className="block text-base font-medium py-2 text-slate-300 hover:text-emerald-400"
              onClick={() => setIsMenuOpen(false)}
            >Tech Stack</a>
            <a 
              href="#contact" 
              className="block text-base font-medium py-2 text-slate-300 hover:text-emerald-400"
              onClick={() => setIsMenuOpen(false)}
            >Contact</a>
            <a 
              href="#contact" 
              className="block w-full text-center px-5 py-3 rounded-lg font-semibold bg-emerald-500 text-slate-950"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="relative pt-12 pb-20 md:pt-24 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Available for Remote & Freelance Projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building Next-Gen <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse text-emerald-400">|</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              I am a passionate Full-Stack Web Developer specialized in building scalable backend systems and high-performance frontend interfaces. Ready to convert your business ideas into clean, functional code.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#portfolio" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 active:scale-95"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 text-slate-200 transition-all active:scale-95"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-slate-400 font-mono">Quality Assurance</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400">15+</p>
                <p className="text-xs text-slate-400 font-mono">Completed Apps</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">24/7</p>
                <p className="text-xs text-slate-400 font-mono">Client Support</p>
              </div>
            </div>
          </div>

          {/* Interactive Hero Code Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-emerald-500/30 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-500">developer.config.ts</span>
              </div>
              
              <pre className="mt-4 text-xs sm:text-sm font-mono text-slate-300 leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-emerald-400">const</span> developer = &#123;{"\n"}
                  &nbsp;&nbsp;name: <span className="text-amber-300">'Full Stack Developer'</span>,{"\n"}
                  &nbsp;&nbsp;skills: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'Node.js'</span>, <span className="text-amber-300">'NestJS'</span>, <span className="text-amber-300">'Tailwind'</span>],{"\n"}
                  &nbsp;&nbsp;experience: <span className="text-teal-300">'Modern Web Apps'</span>,{"\n"}
                  &nbsp;&nbsp;codeQuality: <span className="text-amber-300">'Clean & Scalable'</span>,{"\n"}
                  &nbsp;&nbsp;availability: <span className="text-emerald-400">true</span>,{"\n"}
                  &nbsp;&nbsp;hireable: () =&gt; &#123;{"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return</span> <span className="text-amber-300">"Ready for new projects!"</span>;{"\n"}
                  &nbsp;&nbsp;&#125;{"\n"}
                  &#125;;
                </code>
              </pre>

              <div className="mt-6 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Verified code standard & full-stack development capability.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-mono tracking-widest text-emerald-400 uppercase">My Expertise</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">High Quality Services Offered</p>
            <p className="text-slate-400 text-sm sm:text-base">
              Providing end-to-end web engineering, from modern frontend visual interfaces to high-performance secure backends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-emerald-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Portfolio / Projects Section */}
      <section id="portfolio" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Recent Work</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white mt-2">Featured Projects</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {['all', 'frontend', 'backend', 'fullstack'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all capitalize ${
                  activeTab === tab 
                    ? 'bg-emerald-500 text-slate-950 shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'all' ? 'All Work' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors"></div>
                  <span className="absolute top-3 left-3 text-xs font-mono px-2.5 py-1 rounded-full bg-slate-950/80 border border-emerald-500/30 text-emerald-400 backdrop-blur-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  View Details <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-3">
                  <a href={project.githubUrl} className="text-slate-400 hover:text-white" title="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.demoUrl} className="text-slate-400 hover:text-white" title="Live Preview">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Core Skills</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white mt-2">Technologies & Frameworks</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4 hover:border-emerald-500/30 transition-all"
              >
                <div className="p-3 rounded-lg bg-slate-800/80 flex-shrink-0">
                  {tech.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{tech.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-400">{tech.category}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono">
                      {tech.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Get In Touch</h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">Let's Discuss Your Project</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Have a web application idea or looking for a full-stack developer to join your team? Send me a message and I'll get back to you shortly.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-lg bg-emerald-950/60 text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Address</p>
                  <p className="text-sm font-semibold text-white">developer@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-lg bg-emerald-950/60 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-white">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-lg bg-emerald-950/60 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-white">Available Worldwide (Remote)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-sm">Thank you for reaching out. I will respond to your inquiry soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">YOUR NAME</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">YOUR EMAIL</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">PROJECT TYPE</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors">
                      <option>Full-Stack Web Application</option>
                      <option>Frontend Development (React/Tailwind)</option>
                      <option>Backend Development (Node.js/NestJS)</option>
                      <option>Bug Fix / Code Review</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">MESSAGE</label>
                    <textarea 
                      rows="4" 
                      required 
                      placeholder="Tell me about your project requirement..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:opacity-95 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative space-y-6">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-56 object-cover rounded-xl"
            />

            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400">
                {selectedProject.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{selectedProject.title}</h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div>
              <p className="text-xs font-mono text-slate-400 mb-2">TECHNOLOGY STACK</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-slate-800 text-emerald-300 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-800">
              <a 
                href={selectedProject.demoUrl} 
                className="flex-1 py-3 text-center rounded-xl font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 text-sm"
              >
                Live Demo
              </a>
              <a 
                href={selectedProject.githubUrl} 
                className="flex-1 py-3 text-center rounded-xl font-semibold bg-slate-800 text-white hover:bg-slate-700 text-sm"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>© 2026 Developer Portfolio Studio. Created for Demo & Presentation.</p>
      </footer>

    </div>
  );
}
