import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "id";

type Dict = Record<string, string>;

const en: Dict = {
  // nav
  "nav.home": "Home",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.portfolio": "Portfolio",
  "nav.more": "More",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "nav.menu": "Menu",
  "common.backToTop": "Back to top",
  "common.toggleTheme": "Toggle theme",
  "common.toggleLanguage": "Switch language",

  // hero
  "hero.eyebrow": "Hello, I'm Vinto",
  "hero.titleA": "Building digital",
  "hero.titleEm": "experiences",
  "hero.titleB": "with AI & technology.",
  "hero.desc": "Computer Technology student passionate about AI, UI/UX design, web development, and emerging technologies.",
  "hero.ctaPortfolio": "View Portfolio",
  "hero.ctaCv": "View CV",
  "hero.ctaContact": "Contact Me",
  "hero.available": "Available for collaboration",
  "hero.basedIn": "Based in",
  "hero.basedInValue": "Indonesia",
  "hero.focus": "Focus",
  "hero.status": "Status",
  "hero.statusValue": "Open to projects",
  "hero.scroll": "Scroll to about",

  // about
  "about.eyebrow": "About",
  "about.title": "A quiet obsession with the details.",
  "about.role": "Designer · Developer · Student",
  "about.lead": "I'm a Computer Technology student who believes great software is equal parts engineering rigor and editorial taste — quiet, intentional, and a little cinematic.",
  "about.body": "My work lives at the intersection of artificial intelligence, interface design, and modern web development. I spend my time prototyping with new tools, studying how interfaces feel, and shipping experiments that turn complex technology into something delightful.",
  "about.cards.education.title": "Education",
  "about.cards.education.body": "Computer Technology student exploring the intersection of software, design, and intelligent systems.",
  "about.cards.interests.title": "Interests",
  "about.cards.interests.body": "Artificial intelligence, generative tools, design systems, and the craft of building products that feel alive.",
  "about.cards.goals.title": "Career Goals",
  "about.cards.goals.body": "To build human-centered digital products and shape how people interact with emerging technologies.",

  // skills
  "skills.eyebrow": "Skills & Expertise",
  "skills.title": "The craft, the tools, the language.",
  "skills.desc": "A monochrome stack of the disciplines and software I rely on every day.",
  "skills.technical": "Technical",
  "skills.disciplines": "06 disciplines",
  "skills.tools": "Tools",
  "skills.daily": "Daily drivers",
  "skills.toolsNote": "I gravitate toward tools that prize speed, taste, and the joy of building.",
  "skill.ai": "Artificial Intelligence",
  "skill.web": "Web Development",
  "skill.uiux": "UI/UX Design",
  "skill.frontend": "Frontend Development",
  "skill.prompt": "Prompt Engineering",
  "skill.vibe": "Vibe Coding",

  // portfolio
  "portfolio.eyebrow": "Featured Projects",
  "portfolio.title": "Selected work, carefully crafted.",
  "portfolio.desc": "A small set of projects spanning web, mobile, design, and AI.",
  "portfolio.filter.all": "All",
  "portfolio.live": "Live Demo",
  "portfolio.github": "GitHub",
  "proj.sikom.title": "SIKOM Information System",
  "proj.sikom.desc": "A centralized information portal designed for a campus computer department, focused on clarity and fast access.",
  "proj.mobile.title": "Mobile UI/UX Startup",
  "proj.mobile.desc": "End-to-end product design for a startup mobile app — research, flows, prototyping, and a polished visual system.",
  "proj.ai.title": "AI-Powered Website Builder",
  "proj.ai.desc": "Generative interface that turns natural language prompts into production-ready landing pages.",
  "proj.innov.title": "Digital Innovation Project",
  "proj.innov.desc": "A research-driven concept exploring how everyday workflows can be reimagined with intelligent assistants.",

  // more
  "more.eyebrow": "More About Me",
  "more.title": "A wider look at the work and the person.",
  "more.cards.education.title": "Education",
  "more.cards.education.body": "Computer Technology — currently in formal study, continuously self-taught beyond the syllabus.",
  "more.cards.certs.title": "Certifications",
  "more.cards.certs.body": "AI fundamentals, modern frontend, UI/UX design — accumulating a deep, practical foundation.",
  "more.cards.orgs.title": "Organizations",
  "more.cards.orgs.body": "Active member of campus tech communities and student development collectives.",
  "more.cards.achv.title": "Achievements",
  "more.cards.achv.body": "Recognized for digital innovation projects and design-led problem solving.",
  "more.cards.interests.title": "Interests",
  "more.cards.interests.body": "Generative AI, design systems, typography, product strategy, and ambient computing.",
  "more.cards.hobbies.title": "Hobbies",
  "more.cards.hobbies.body": "Music, photography, exploring cities, and collecting screenshots of well-designed apps.",
  "more.stats.projects": "Projects Completed",
  "more.stats.tech": "Technologies Learned",
  "more.stats.years": "Years of Experience",
  "more.stats.certs": "Certifications",

  // contact
  "contact.eyebrow": "Contact",
  "contact.title": "Let's connect.",
  "contact.desc": "Have a project, an idea, or just want to say hello?",
  "contact.name": "Name",
  "contact.namePh": "Your name",
  "contact.email": "Email",
  "contact.emailPh": "you@domain.com",
  "contact.message": "Message",
  "contact.messagePh": "Tell me about your project…",
  "contact.send": "Send Message",
  "contact.sending": "Sending…",
  "contact.toast": "Opening your email client…",

  // blog
  "blog.eyebrow": "Journal",
  "blog.heroA": "Stories, ideas, and",
  "blog.heroEm": "knowledge",
  "blog.heroB": "that shape better thinking.",
  "blog.heroDesc": "Practical insights, inspiring stories, and useful guides designed to help you learn, grow, and keep moving one step further.",
  "blog.categoriesEyebrow": "Categories",
  "blog.categoriesTitle": "Browse by category",
  "blog.listTitle": "Blog",
  "blog.listDesc": "Practical guides, technology updates, and stories that inspire everyday life.",
  "blog.sort": "Sort",
  "blog.latest": "Latest",
  "blog.oldest": "Oldest",
  "blog.read": "Read",
  "blog.minRead": "min read",
  "blog.empty": "No posts in this category yet.",
  "blog.cat.aiTools": "AI Tools",
  "blog.cat.technology": "Technology",
  "blog.cat.design": "Design",
  "blog.cat.lifestyle": "Lifestyle",
  "blog.cat.culture": "Culture",
  "post.1.title": "Designing in Black & White: The Discipline of Restraint",
  "post.1.excerpt": "How monochrome design forces clarity in hierarchy, typography, and the moments that actually matter.",
  "post.2.title": "Prompt Engineering as a Craft, Not a Hack",
  "post.2.excerpt": "Treating prompts like product specs — patterns I use to get consistent results from modern LLMs.",
  "post.3.title": "The Quiet Web: Building Interfaces That Feel Calm",
  "post.3.excerpt": "Lessons from Apple, Linear, and Vercel on motion, spacing, and the art of saying less.",
  "post.4.title": "A Student's Stack: What I Actually Reach For in 2026",
  "post.4.excerpt": "The honest, opinionated toolkit I use to ship side projects without burning out.",
  "post.5.title": "Slow Mornings, Fast Code",
  "post.5.excerpt": "A small routine that protects deep work — and why energy beats hours every single time.",
  "post.6.title": "Notes from Home: Stories That Shape How I Build",
  "post.6.excerpt": "The places, rituals, and traditions that quietly influence the way I think about design.",
};

const id: Dict = {
  "nav.home": "Beranda",
  "nav.about": "Tentang",
  "nav.skills": "Keahlian",
  "nav.portfolio": "Portofolio",
  "nav.more": "Lainnya",
  "nav.blog": "Blog",
  "nav.contact": "Kontak",
  "nav.menu": "Menu",
  "common.backToTop": "Kembali ke atas",
  "common.toggleTheme": "Ganti tema",
  "common.toggleLanguage": "Ganti bahasa",

  "hero.eyebrow": "Halo, saya Vinto",
  "hero.titleA": "Membangun",
  "hero.titleEm": "pengalaman",
  "hero.titleB": "digital dengan AI & teknologi.",
  "hero.desc": "Mahasiswa Teknologi Komputer yang antusias pada AI, desain UI/UX, pengembangan web, dan teknologi baru.",
  "hero.ctaPortfolio": "Lihat Portofolio",
  "hero.ctaCv": "Lihat CV",
  "hero.ctaContact": "Hubungi Saya",
  "hero.available": "Tersedia untuk kolaborasi",
  "hero.basedIn": "Berbasis di",
  "hero.basedInValue": "Indonesia",
  "hero.focus": "Fokus",
  "hero.status": "Status",
  "hero.statusValue": "Terbuka untuk proyek",
  "hero.scroll": "Gulir ke tentang",

  "about.eyebrow": "Tentang",
  "about.title": "Obsesi tenang pada detail.",
  "about.role": "Desainer · Pengembang · Mahasiswa",
  "about.lead": "Saya mahasiswa Teknologi Komputer yang percaya perangkat lunak hebat lahir dari perpaduan ketelitian teknis dan selera editorial — tenang, terarah, dan sedikit sinematik.",
  "about.body": "Karya saya berada di persimpangan kecerdasan buatan, desain antarmuka, dan pengembangan web modern. Saya menghabiskan waktu untuk membuat prototipe dengan alat baru, mempelajari nuansa antarmuka, dan merilis eksperimen yang mengubah teknologi rumit menjadi sesuatu yang menyenangkan.",
  "about.cards.education.title": "Pendidikan",
  "about.cards.education.body": "Mahasiswa Teknologi Komputer yang menjelajahi titik temu perangkat lunak, desain, dan sistem cerdas.",
  "about.cards.interests.title": "Minat",
  "about.cards.interests.body": "Kecerdasan buatan, alat generatif, sistem desain, dan seni membangun produk yang terasa hidup.",
  "about.cards.goals.title": "Tujuan Karier",
  "about.cards.goals.body": "Membangun produk digital yang berpusat pada manusia dan membentuk cara orang berinteraksi dengan teknologi baru.",

  "skills.eyebrow": "Keahlian & Keterampilan",
  "skills.title": "Keterampilan, alat, dan bahasanya.",
  "skills.desc": "Tumpukan monokrom berisi disiplin dan perangkat lunak yang saya andalkan setiap hari.",
  "skills.technical": "Teknis",
  "skills.disciplines": "06 disiplin",
  "skills.tools": "Alat",
  "skills.daily": "Andalan harian",
  "skills.toolsNote": "Saya cenderung memilih alat yang mengutamakan kecepatan, selera, dan kegembiraan membangun.",
  "skill.ai": "Kecerdasan Buatan",
  "skill.web": "Pengembangan Web",
  "skill.uiux": "Desain UI/UX",
  "skill.frontend": "Pengembangan Frontend",
  "skill.prompt": "Rekayasa Prompt",
  "skill.vibe": "Vibe Coding",

  "portfolio.eyebrow": "Proyek Unggulan",
  "portfolio.title": "Karya pilihan, dikerjakan dengan teliti.",
  "portfolio.desc": "Sekumpulan kecil proyek di bidang web, mobile, desain, dan AI.",
  "portfolio.filter.all": "Semua",
  "portfolio.live": "Demo Langsung",
  "portfolio.github": "GitHub",
  "proj.sikom.title": "Sistem Informasi SIKOM",
  "proj.sikom.desc": "Portal informasi terpusat untuk departemen komputer kampus, fokus pada kejelasan dan akses cepat.",
  "proj.mobile.title": "UI/UX Startup Mobile",
  "proj.mobile.desc": "Desain produk end-to-end untuk aplikasi mobile startup — riset, alur, prototipe, dan sistem visual yang rapi.",
  "proj.ai.title": "Website Builder Bertenaga AI",
  "proj.ai.desc": "Antarmuka generatif yang mengubah prompt bahasa alami menjadi halaman landing siap produksi.",
  "proj.innov.title": "Proyek Inovasi Digital",
  "proj.innov.desc": "Konsep berbasis riset yang mengeksplorasi bagaimana alur kerja sehari-hari dapat dibayangkan ulang dengan asisten cerdas.",

  "more.eyebrow": "Lebih Banyak Tentang Saya",
  "more.title": "Pandangan lebih luas tentang karya dan pribadinya.",
  "more.cards.education.title": "Pendidikan",
  "more.cards.education.body": "Teknologi Komputer — sedang menjalani studi formal, dan terus belajar mandiri di luar kurikulum.",
  "more.cards.certs.title": "Sertifikasi",
  "more.cards.certs.body": "Dasar AI, frontend modern, desain UI/UX — membangun fondasi praktis yang mendalam.",
  "more.cards.orgs.title": "Organisasi",
  "more.cards.orgs.body": "Anggota aktif komunitas teknologi kampus dan kolektif pengembangan mahasiswa.",
  "more.cards.achv.title": "Pencapaian",
  "more.cards.achv.body": "Diakui untuk proyek inovasi digital dan pemecahan masalah berbasis desain.",
  "more.cards.interests.title": "Minat",
  "more.cards.interests.body": "AI generatif, sistem desain, tipografi, strategi produk, dan ambient computing.",
  "more.cards.hobbies.title": "Hobi",
  "more.cards.hobbies.body": "Musik, fotografi, menjelajahi kota, dan mengumpulkan tangkapan layar aplikasi yang dirancang baik.",
  "more.stats.projects": "Proyek Selesai",
  "more.stats.tech": "Teknologi Dipelajari",
  "more.stats.years": "Tahun Pengalaman",
  "more.stats.certs": "Sertifikasi",

  "contact.eyebrow": "Kontak",
  "contact.title": "Mari terhubung.",
  "contact.desc": "Punya proyek, ide, atau sekadar ingin menyapa?",
  "contact.name": "Nama",
  "contact.namePh": "Nama Anda",
  "contact.email": "Email",
  "contact.emailPh": "anda@domain.com",
  "contact.message": "Pesan",
  "contact.messagePh": "Ceritakan tentang proyek Anda…",
  "contact.send": "Kirim Pesan",
  "contact.sending": "Mengirim…",
  "contact.toast": "Membuka aplikasi email…",

  "blog.eyebrow": "Jurnal",
  "blog.heroA": "Cerita, ide, dan",
  "blog.heroEm": "pengetahuan",
  "blog.heroB": "yang membentuk pemikiran lebih baik.",
  "blog.heroDesc": "Wawasan praktis, cerita yang menginspirasi, dan panduan berguna yang membantu Anda belajar, tumbuh, dan terus melangkah maju.",
  "blog.categoriesEyebrow": "Kategori",
  "blog.categoriesTitle": "Jelajahi berdasarkan kategori",
  "blog.listTitle": "Blog",
  "blog.listDesc": "Panduan praktis, kabar teknologi, dan cerita yang menginspirasi keseharian.",
  "blog.sort": "Urutkan",
  "blog.latest": "Terbaru",
  "blog.oldest": "Terlama",
  "blog.read": "Baca",
  "blog.minRead": "menit baca",
  "blog.empty": "Belum ada tulisan di kategori ini.",
  "blog.cat.aiTools": "Alat AI",
  "blog.cat.technology": "Teknologi",
  "blog.cat.design": "Desain",
  "blog.cat.lifestyle": "Gaya Hidup",
  "blog.cat.culture": "Budaya",
  "post.1.title": "Mendesain dalam Hitam & Putih: Disiplin Pengekangan",
  "post.1.excerpt": "Bagaimana desain monokrom memaksa kejelasan dalam hierarki, tipografi, dan momen yang benar-benar penting.",
  "post.2.title": "Prompt Engineering sebagai Kerajinan, Bukan Trik",
  "post.2.excerpt": "Memperlakukan prompt seperti spesifikasi produk — pola yang saya gunakan untuk hasil konsisten dari LLM modern.",
  "post.3.title": "Web yang Tenang: Membangun Antarmuka yang Terasa Lega",
  "post.3.excerpt": "Pelajaran dari Apple, Linear, dan Vercel tentang gerakan, jarak, dan seni berkata lebih sedikit.",
  "post.4.title": "Tumpukan Mahasiswa: Yang Benar-Benar Saya Pakai di 2026",
  "post.4.excerpt": "Toolkit jujur dan beropini yang saya gunakan untuk merilis proyek sampingan tanpa kelelahan.",
  "post.5.title": "Pagi yang Tenang, Kode yang Cepat",
  "post.5.excerpt": "Rutinitas kecil yang melindungi kerja mendalam — dan mengapa energi mengalahkan jam kerja.",
  "post.6.title": "Catatan dari Rumah: Cerita yang Membentuk Cara Saya Membangun",
  "post.6.excerpt": "Tempat, ritual, dan tradisi yang diam-diam memengaruhi cara saya berpikir tentang desain.",
};

const dicts: Record<Lang, Dict> = { en, id };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: (k: string) => string; mounted: boolean };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("vinto-lang") as Lang | null;
      if (stored === "en" || stored === "id") setLangState(stored);
      else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("id")) setLangState("id");
    } catch {}
    setMounted(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("vinto-lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };
  const toggle = () => setLang(lang === "en" ? "id" : "en");
  const t = (k: string) => dicts[lang][k] ?? dicts.en[k] ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
