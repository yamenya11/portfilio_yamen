// =========================================
// Yamen Najem Portfolio - Professional Script
// =========================================

let currentLang = 'en';

const translations = {
    en: {
        name: "Yamen Najem",
        title: 'Odoo ERP Developer <span class="divider">|</span> Laravel Backend Developer',
        heroDesc: "Information Technology Engineering graduate from Damascus University, specializing in Odoo ERP customization and Laravel backend development. I build scalable ERP solutions and modern web applications.",
        cvBtnText: "Download CV",
        contactBtnText: "Contact Me",
        navAbout: "About",
        navSkills: "Skills",
        navExperience: "Experience",
        navProjects: "Projects",
        navContact: "Contact",
        aboutTitle: "About Me",
        aboutDesc1: 'I\'m an <strong>Information Technology Engineering graduate</strong> from Damascus University (Class of 2026), with hands-on experience in <strong>Odoo ERP customization</strong> and <strong>Laravel backend development</strong>.',
        aboutDesc2: 'I specialize in building custom Odoo modules using Python ORM, XML/QWeb, REST API controllers, and cross-module business process design. I\'m passionate about ERP systems, IoT integration, and delivering impactful business solutions.',
        aboutDesc3: 'What sets me apart is my <strong>ability to learn quickly</strong> and adapt to new technologies. I believe programming is a continuous learning journey, and I\'m always seeking improvement.',
        skillsTitle: "Technical Skills",
        backendTitle: "ERP & Backend",
        databaseTitle: "Databases",
        langTitle: "Programming Languages",
        frontendTitle: "Frontend & Frameworks",
        architectureTitle: "Software Engineering",
        toolsTitle: "Tools & DevOps",
        experienceTitle: "Experience",
        projectsTitle: "Featured Projects",
        contactTitle: "Get In Touch",
        contactSubtitle: "Let's build something amazing together",
        footerText: "© 2026 Yamen Najem. All rights reserved."
    },
    ar: {
        name: "يامن نجم",
        title: 'مطور Odoo ERP <span class="divider">|</span> مطور Laravel Backend',
        heroDesc: "خريج هندسة تقانة المعلومات من جامعة دمشق، متخصص في تخصيص Odoo ERP وتطوير Laravel Backend. أبني حلول ERP قابلة للتوسع وتطبيقات ويب حديثة.",
        cvBtnText: "تحميل السيرة الذاتية",
        contactBtnText: "تواصل معي",
        navAbout: "من أنا",
        navSkills: "المهارات",
        navExperience: "الخبرات",
        navProjects: "المشاريع",
        navContact: "التواصل",
        aboutTitle: "من أنا",
        aboutDesc1: 'أنا <strong>خريج هندسة تقانة المعلومات</strong> من جامعة دمشق (دفعة 2026)، لدي خبرة عملية في <strong>تخصيص Odoo ERP</strong> و<strong>تطوير Laravel Backend</strong>.',
        aboutDesc2: 'أتخصص في بناء وحدات Odoo المخصصة باستخدام Python ORM و XML/QWeb ووحدات تحكم REST API وتصميم العمليات عبر الوحدات. شغوف بأنظمة ERP وتكامل IoT وتقديم حلول أعمال مؤثرة.',
        aboutDesc3: 'ما يميزني هو <strong>قدرتي على التعلم السريع</strong> والتكيف مع التقنيات الجديدة. أؤمن أن البرمجة رحلة تعلم مستمرة، وأنا دائماً أسعى للتحسين.',
        skillsTitle: "المهارات التقنية",
        backendTitle: "ERP و Backend",
        databaseTitle: "قواعد البيانات",
        langTitle: "لغات البرمجة",
        frontendTitle: "Frontend و Frameworks",
        architectureTitle: "هندسة البرمجيات",
        toolsTitle: "الأدوات و DevOps",
        experienceTitle: "الخبرات",
        projectsTitle: "المشاريع المميزة",
        contactTitle: "تواصل معي",
        contactSubtitle: "لنبنِ شيئاً مذهلاً معاً",
        footerText: "© 2026 يامن نجم. جميع الحقوق محفوظة."
    }
};

// ========== Theme Toggle ==========
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.className = savedTheme;
}

function toggleTheme() {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
}

// ========== Language Toggle ==========
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        
        const langText = langToggle.querySelector('.lang-text');
        if (langText) langText.textContent = currentLang === 'en' ? 'AR' : 'EN';

        updateContent();
    });
}

function updateContent() {
    const t = translations[currentLang];
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };
    const setHTML = (id, html) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    };

    setText('name', t.name);
    setHTML('title', t.title);
    setText('heroDesc', t.heroDesc);
    setText('cvBtnText', t.cvBtnText);
    setText('contactBtnText', t.contactBtnText);
    setText('navAbout', t.navAbout);
    setText('navSkills', t.navSkills);
    setText('navExperience', t.navExperience);
    setText('navProjects', t.navProjects);
    setText('navContact', t.navContact);
    setText('aboutTitle', t.aboutTitle);
    setHTML('aboutDesc1', t.aboutDesc1);
    setHTML('aboutDesc2', t.aboutDesc2);
    setHTML('aboutDesc3', t.aboutDesc3);
    setText('skillsTitle', t.skillsTitle);
    setText('backendTitle', t.backendTitle);
    setText('databaseTitle', t.databaseTitle);
    setText('langTitle', t.langTitle);
    setText('frontendTitle', t.frontendTitle);
    setText('architectureTitle', t.architectureTitle);
    setText('toolsTitle', t.toolsTitle);
    setText('experienceTitle', t.experienceTitle);
    setText('projectsTitle', t.projectsTitle);
    setText('contactTitle', t.contactTitle);
    setText('contactSubtitle', t.contactSubtitle);
    setText('footerText', t.footerText);
}

// ========== Smooth Scroll ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ========== Scroll to Top ==========
function initScrollToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'scroll-top-btn';
    btn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== Scroll Animations ==========
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section, .skill-category, .project-card, .timeline-item, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========== Initialize Everything ==========
function init() {
    initTheme();
    initLanguageToggle();
    initSmoothScroll();
    initScrollToTop();
    initScrollAnimations();
    updateContent();

    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    console.log('%c🚀 Yamen Najem Portfolio', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%c✨ Professional Edition Loaded', 'color: #06b6d4; font-size: 14px;');
}

document.addEventListener('DOMContentLoaded', init);