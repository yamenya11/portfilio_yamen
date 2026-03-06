const translations = {
    ar: {
        name: "يامن",
        title: "Laravel Developer | مهندس برمجيات",
        email: "yamenjajem709@gmail.com",
        linkedin: "LinkedIn",
        skillsTitle: "التقنيات التي أعرفها",
        projectsTitle: "مشاريعي",
        footerText: "© 2026 يامن - Laravel Developer",
        aboutTitle: "👋 من أنا",
        aboutDesc1: "طالب في كلية الهندسة المعلوماتية - السنة الخامسة (برمجيات). لدي خبرة سنة واحدة في تطوير تطبيقات الويب باستخدام Laravel، وخلال هذه الفترة طورت عدة مشاريع عملية تطبق أنماط التصميم ومبادئ Clean Code.",
        aboutDesc2: "ما يميزني هو قدرتي على التعلم بسرعة والتكيف مع التقنيات الجديدة. أؤمن أن البرمجة رحلة تعلم مستمرة، وأنا دائم البحث والتطوير لأقدم أفضل الحلول البرمجية.",
        aboutQuickLearner: "سنة واحدة خبرة + تعلم سريع = جاهز لأي تحدٍ!",
        backendTitle: "Backend",
        databaseTitle: "قواعد البيانات",
        frontendTitle: "Frontend",
        architectureTitle: "هندسة البرمجيات",
        phone: "اتصل بي"
    },
    en: {
        name: "Yamen",
        title: "Laravel Developer | Software Engineer",
        email: "yamenjajem709@gmail.com",
        linkedin: "LinkedIn",
        skillsTitle: "Technologies I Know",
        projectsTitle: "My Projects",
        footerText: "© 2026 Yamen - Laravel Developer",
        aboutTitle: "👋 About Me",
        aboutDesc1: "Information Engineering student - 5th Year (Software). I have 1 year of experience in web development with Laravel, during which I built several practical projects applying Design Patterns and Clean Code principles.",
        aboutDesc2: "What sets me apart is my ability to learn quickly and adapt to new technologies. I believe programming is a continuous learning journey, and I'm always researching and improving to deliver the best software solutions.",
        aboutQuickLearner: "1 year experience + fast learning = ready for any challenge!",
        backendTitle: "Backend",
        databaseTitle: "Databases",
        frontendTitle: "Frontend",
        architectureTitle: "Software Architecture",
        phone: "Call Me"
    }
};

let currentLang = 'ar';

document.getElementById('langToggle').addEventListener('click', function() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    const langText = document.querySelector('.lang-text');
    const langIcons = document.querySelectorAll('.lang-icon');
    
    if (currentLang === 'ar') {
        langText.textContent = 'English';
        langIcons[0].textContent = '🇸🇦';
        langIcons[1].textContent = '🇬🇧';
    } else {
        langText.textContent = 'العربية';
        langIcons[0].textContent = '🇬🇧';
        langIcons[1].textContent = '🇸🇦';
    }
    
    document.getElementById('name').textContent = translations[currentLang].name;
    document.getElementById('title').textContent = translations[currentLang].title;
    
    // تحديث البريد الإلكتروني (النص فقط)
    const emailLinks = document.querySelectorAll('.contact-info a[href^="mailto"] span');
    emailLinks.forEach(span => span.textContent = translations[currentLang].email);
    
    document.getElementById('skillsTitle').textContent = translations[currentLang].skillsTitle;
    document.getElementById('projectsTitle').textContent = translations[currentLang].projectsTitle;
    document.getElementById('footerText').textContent = translations[currentLang].footerText;
    document.getElementById('aboutTitle').textContent = translations[currentLang].aboutTitle;
    document.getElementById('aboutDesc1').textContent = translations[currentLang].aboutDesc1;
    document.getElementById('aboutDesc2').textContent = translations[currentLang].aboutDesc2;
    document.getElementById('aboutQuickLearner').textContent = translations[currentLang].aboutQuickLearner;
    document.getElementById('backendTitle').textContent = translations[currentLang].backendTitle;
    document.getElementById('databaseTitle').textContent = translations[currentLang].databaseTitle;
    document.getElementById('frontendTitle').textContent = translations[currentLang].frontendTitle;
    document.getElementById('architectureTitle').textContent = translations[currentLang].architectureTitle;
});

// تمرير سلس
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

// رسالة ترحيب
console.log('مرحباً! رقم الهاتف: 0932307869');