// الترجمة
const translations = {
    ar: {
        name: "يامن",
        title: "مهندس برمجيات | Laravel & Java",
        email: "your.email@example.com",
        linkedin: "LinkedIn",
        skillsTitle: "المهارات",
        projectsTitle: "المشاريع",
        footerText: "© 2026 يامن",
        aboutTitle: "👋 من أنا",
        aboutDesc1: "طالب هندسة معلوماتية - سنة خامسة، متخصص في Laravel. أحب التعلم وحل المشكلات البرمجية."
    },
    en: {
        name: "Yamen",
        title: "Software Engineer | Laravel & Java",
        email: "your.email@example.com",
        linkedin: "LinkedIn",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        footerText: "© 2026 Yamen",
        aboutTitle: "👋 About Me",
        aboutDesc1: "Information Engineering student - 5th year, specialized in Laravel. I love learning and solving programming problems."
    }
};

let currentLang = 'ar';

// تبديل اللغة
document.getElementById('langToggle').addEventListener('click', function() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    
    // اتجاه الصفحة
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // نص الزر
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
    
    // تحديث النصوص
    document.getElementById('name').textContent = translations[currentLang].name;
    document.getElementById('title').textContent = translations[currentLang].title;
    document.getElementById('email').textContent = translations[currentLang].email;
    document.getElementById('linkedin').textContent = translations[currentLang].linkedin;
    document.getElementById('skillsTitle').textContent = translations[currentLang].skillsTitle;
    document.getElementById('projectsTitle').textContent = translations[currentLang].projectsTitle;
    document.getElementById('footerText').textContent = translations[currentLang].footerText;
    document.getElementById('aboutTitle').textContent = translations[currentLang].aboutTitle;
    document.getElementById('aboutDesc1').textContent = translations[currentLang].aboutDesc1;
});