// الترجمة
let currentLang = 'ar';

const translations = {
    ar: {
        name: "يامن",
        title: "Full Stack Developer | Software Engineer",
        cvBtn: "تحميل السيرة الذاتية (CV)",
        aboutTitle: "👋 من أنا",
        aboutDesc1: "طالب في كلية الهندسة المعلوماتية - السنة الخامسة (برمجيات). لدي خبرة سنة واحدة في تطوير تطبيقات الويب باستخدام Laravel، وخلال هذه الفترة طورت عدة مشاريع عملية تطبق أنماط التصميم ومبادئ Clean Code.",
        aboutDesc2: "ما يميزني هو قدرتي على التعلم بسرعة والتكيف مع التقنيات الجديدة. أؤمن أن البرمجة رحلة تعلم مستمرة، وأنا دائم البحث والتطوير لأقدم أفضل الحلول البرمجية.",
        aboutQuickLearner: "سنة واحدة خبرة + تعلم سريع = جاهز لأي تحدٍ!",
        skillsTitle: "التقنيات التي أعرفها",
        backendTitle: "Backend",
        databaseTitle: "قواعد البيانات",
        frontendTitle: "Frontend",
        architectureTitle: "هندسة البرمجيات",
        toolsTitle: "الأدوات والتقنيات",
        projectsTitle: "مشاريعي",
        oracleTitle: "Oracle Database Expertise",
        oracleDesc: "خبرة عملية في مشاريع Data Engineering باستخدام Oracle Database:",
        galleryTitle: "📸 معرض الأعمال",
        footerText: "© 2026 يامن - Full Stack Developer"
    },
    en: {
        name: "Yamen",
        title: "Full Stack Developer | Software Engineer",
        cvBtn: "Download CV",
        aboutTitle: "👋 About Me",
        aboutDesc1: "5th year Information Engineering student (Software). I have 1 year of experience in web development with Laravel, building projects that apply Design Patterns and Clean Code principles.",
        aboutDesc2: "What sets me apart is my ability to learn quickly and adapt to new technologies. I believe programming is a continuous learning journey.",
        aboutQuickLearner: "1 year experience + fast learning = ready for any challenge!",
        skillsTitle: "Technologies I Know",
        backendTitle: "Backend",
        databaseTitle: "Databases",
        frontendTitle: "Frontend",
        architectureTitle: "Software Architecture",
        toolsTitle: "Tools & Technologies",
        projectsTitle: "My Projects",
        oracleTitle: "Oracle Database Expertise",
        oracleDesc: "Practical experience in Data Engineering projects using Oracle Database:",
        galleryTitle: "📸 Work Gallery",
        footerText: "© 2026 Yamen - Full Stack Developer"
    }
};

// ========== Dark/Light Mode ==========
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ========== Language Toggle ==========
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            
            const langText = document.querySelector('.lang-text');
            const langIcons = document.querySelectorAll('.lang-icon');
            
            if (langText && langIcons.length >= 2) {
                if (currentLang === 'ar') {
                    langText.textContent = 'English';
                    langIcons[0].textContent = '🇸🇦';
                    langIcons[1].textContent = '🇬🇧';
                } else {
                    langText.textContent = 'العربية';
                    langIcons[0].textContent = '🇬🇧';
                    langIcons[1].textContent = '🇸🇦';
                }
            }
            
            // تحديث النصوص
            const nameEl = document.getElementById('name');
            const titleEl = document.getElementById('title');
            const aboutTitle = document.getElementById('aboutTitle');
            const aboutDesc1 = document.getElementById('aboutDesc1');
            const aboutDesc2 = document.getElementById('aboutDesc2');
            const aboutQuick = document.getElementById('aboutQuickLearner');
            const skillsTitle = document.getElementById('skillsTitle');
            const backendTitle = document.getElementById('backendTitle');
            const databaseTitle = document.getElementById('databaseTitle');
            const frontendTitle = document.getElementById('frontendTitle');
            const architectureTitle = document.getElementById('architectureTitle');
            const toolsTitle = document.getElementById('toolsTitle');
            const projectsTitle = document.getElementById('projectsTitle');
            const oracleTitle = document.getElementById('oracleTitle');
            const oracleDesc = document.getElementById('oracleDesc');
            const galleryTitle = document.getElementById('galleryTitle');
            const footerText = document.getElementById('footerText');
            const cvBtnSpan = document.querySelector('.cv-btn span');
            
            if (nameEl) nameEl.textContent = translations[currentLang].name;
            if (titleEl) titleEl.textContent = translations[currentLang].title;
            if (aboutTitle) aboutTitle.textContent = translations[currentLang].aboutTitle;
            if (aboutDesc1) aboutDesc1.textContent = translations[currentLang].aboutDesc1;
            if (aboutDesc2) aboutDesc2.textContent = translations[currentLang].aboutDesc2;
            if (aboutQuick) aboutQuick.textContent = translations[currentLang].aboutQuickLearner;
            if (skillsTitle) skillsTitle.textContent = translations[currentLang].skillsTitle;
            if (backendTitle) backendTitle.textContent = translations[currentLang].backendTitle;
            if (databaseTitle) databaseTitle.textContent = translations[currentLang].databaseTitle;
            if (frontendTitle) frontendTitle.textContent = translations[currentLang].frontendTitle;
            if (architectureTitle) architectureTitle.textContent = translations[currentLang].architectureTitle;
            if (toolsTitle) toolsTitle.textContent = translations[currentLang].toolsTitle;
            if (projectsTitle) projectsTitle.textContent = translations[currentLang].projectsTitle;
            if (oracleTitle) oracleTitle.innerHTML = `<i class="fas fa-database"></i> ${translations[currentLang].oracleTitle}`;
            if (oracleDesc) oracleDesc.textContent = translations[currentLang].oracleDesc;
            if (galleryTitle) galleryTitle.innerHTML = translations[currentLang].galleryTitle;
            if (footerText) footerText.textContent = translations[currentLang].footerText;
            if (cvBtnSpan) cvBtnSpan.textContent = translations[currentLang].cvBtn;
        });
    }
}

// ========== Smooth Scroll ==========
function initSmoothScroll() {
    document.querySelectorAll('.nav-tag').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== Gallery Filter ==========
function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    // إضافة تأثير بسيط
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.animation = 'fadeIn 0.4s ease';
                    }, 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ========== Add CSS Animation ==========
function addAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .fade-in {
            animation: fadeIn 0.6s ease forwards;
        }
        
        section {
            animation: fadeIn 0.8s ease forwards;
        }
        
        .skill-tag, .project-card, .oracle-item, .gallery-item {
            animation: fadeIn 0.5s ease backwards;
        }
        
        .skill-tag:nth-child(1) { animation-delay: 0.05s; }
        .skill-tag:nth-child(2) { animation-delay: 0.1s; }
        .skill-tag:nth-child(3) { animation-delay: 0.15s; }
        .skill-tag:nth-child(4) { animation-delay: 0.2s; }
        .skill-tag:nth-child(5) { animation-delay: 0.25s; }
        .skill-tag:nth-child(6) { animation-delay: 0.3s; }
        
        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:nth-child(4) { animation-delay: 0.4s; }
        .project-card:nth-child(5) { animation-delay: 0.5s; }
        .project-card:nth-child(6) { animation-delay: 0.6s; }
    `;
    document.head.appendChild(style);
}

// ========== Scroll to Top Button ==========
function addScrollToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'scroll-top-btn';
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== Skill Tags Click Effect ==========
function initSkillClickEffect() {
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            console.log(`🎯 Skill clicked: ${this.textContent}`);
        });
    });
}

// ========== Intersection Observer for Scroll Animations ==========
function initScrollAnimations() {
    const elements = document.querySelectorAll('.skill-tag, .project-card, .oracle-item, .gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '50px' });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ========== Typing Effect for Title ==========
function typeEffect(element, text, speed = 50) {
    if (!element) return;
    let i = 0;
    element.textContent = "";
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// ========== Initialize Everything ==========
function init() {
    initTheme();
    addAnimations();
    initLanguageToggle();
    initSmoothScroll();
    initGalleryFilter();
    initSkillClickEffect();
    initScrollAnimations();
    addScrollToTop();
    
    // Typing effect on title after delay
    setTimeout(() => {
        const titleElement = document.getElementById('title');
        if (titleElement) {
            typeEffect(titleElement, translations[currentLang].title, 60);
        }
    }, 300);
    
    // Theme toggle event
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    console.log('🚀 Yamen Portfolio Loaded Successfully!');
    console.log('🎨 Dark/Light Mode Active');
    console.log('✨ Animations Ready');
}

// Start everything when DOM is ready
document.addEventListener('DOMContentLoaded', init);