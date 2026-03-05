// تفعيل مكتبة AOS للحركات
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// بيانات المشاريع للعرض في المودال
const projectsData = {
    1: {
        title: "🏦 Banking System",
        fullDescription: "نظام بنكي متكامل تم تطويره باستخدام Laravel مع تطبيق مجموعة واسعة من أنماط التصميم (Design Patterns) لضمان مرونة وقابلية صيانة الكود.",
        details: [
            "تطبيق أنماط Creational: Factory Pattern لإنشاء الحسابات",
            "تطبيق أنماط Structural: Composite Pattern للهيكل الهرمي",
            "تطبيق أنماط Behavioral: Observer, State, Repository, Strategy, Chain of Responsibility",
            "تحسينات الأداء: استخدام Redis للتخزين المؤقت (Caching)",
            "تطبيق Pagination لتقسيم النتائج",
            "استخدام Eloquent ORM بكفاءة مع Eager Loading"
        ],
        tech: ["Laravel", "PHP", "MySQL", "Redis", "Design Patterns", "REST API"]
    },
    2: {
        title: "⚖️ Government Complaints System",
        fullDescription: "نظام متكامل لإدارة وتتبع شكاوى المواطنين، مع التركيز على الأمان وجودة الكود.",
        details: [
            "تطبيق Clean Code و SOLID Principles",
            "نظام مصادقة متقدم مع OTP (كلمة مرور لمرة واحدة)",
            "تسجيل جميع الإجراءات (Audit History)",
            "نظام نسخ احتياطي آلي (Backup)",
            "تحسين الأداء باستخدام Caching و Eager Loading",
            "توثيق شامل للأحداث والأخطاء (Logging)"
        ],
        tech: ["Laravel", "MySQL", "Redis", "Security", "Clean Code", "SOLID"]
    },
    3: {
        title: "🧩 Crypto Puzzle",
        fullDescription: "لعبة ألغاز تفاعلية مبنية بلغة Java تعتمد على مصفوفة ثنائية الأبعاد.",
        details: [
            "استخدام 2D Arrays لإدارة حالة اللعبة",
            "خوارزميات بحث ومطابقة الأرقام المتطابقة",
            "توليد أرقام هدايا عشوائية عند الدمج",
            "نظام نقاط ومتجر لاستبدال الهدايا",
            "واجهة مستخدم رسومية باستخدام Swing"
        ],
        tech: ["Java", "2D Arrays", "Swing", "Game Logic", "Random Generation"]
    },
    4: {
        title: "🔢 Secret Number Game",
        fullDescription: "لعبة تخمين الرقم السري مع طبقة حماية خاصة للمشرف.",
        details: [
            "خوارزميات تخمين ذكية (Binary Search Logic)",
            "نظام حماية بكلمة مرور خاصة للدمن (Admin)",
            "إمكانية تجاوز المراحل للمشرف",
            "تتبع المحاولات وتقديم التلميحات",
            "تصميم مرن لإضافة مستويات صعوبة"
        ],
        tech: ["Java", "Algorithms", "Security", "Game Logic", "Binary Search"]
    },
    5: {
        title: "🐾 Animal Association - نظام إدارة جمعية حيون",
        fullDescription: "نظام متكامل لإدارة جمعية حيون لرعاية وتبني الحيوانات، تم تطويره باستخدام Laravel لتسهيل عمليات التبني، الرعاية البيطرية، وإدارة التبرعات.",
        details: [
            "إدارة الحيوانات: تسجيل الحيوانات المتاحة للتبني مع صور وتفاصيل طبية",
            "نظام طلبات التبني: استقبال وإدارة طلبات الراغبين في التبني مع الموافقات",
            "إدارة الأقسام: تنظيم الأقسام الداخلية للجمعية (مبيت، عيادة، مطبخ)",
            "نظام التبرعات: استقبال التبرعات المالية والعينية وتتبعها",
            "تقارير وإحصائيات: لوحة تحكم تعرض إحصائيات التبني والرعاية",
            "إدارة الموظفين: صلاحيات مختلفة للمشرفين والأطباء والمتطوعين",
            "نظام تذكير: مواعيد التطعيمات والزيارات الدورية للحيوانات"
        ],
        tech: ["Laravel", "MySQL", "PHP", "Bootstrap", "AdminLTE", "Eloquent ORM", "MVC", "Authentication", "Authorization"]
    },
    6: {
        title: "🔧 Commang",
        fullDescription: "أداة سطر أوامر (CLI) لأتمتة المهام المتكررة وتحسين إنتاجية المطور.",
        details: [
            "مجموعة أوامر لأتمتة عمليات Git",
            "أدوات لإنشاء هيكل المشاريع بسرعة",
            "إدارة الملفات والمجلدات بذكاء",
            "إمكانية إضافة أوامر مخصصة",
            "توثيق كامل للأوامر والاستخدام"
        ],
        tech: ["Java", "CLI", "Automation", "File Management", "Git Integration"]
    }
};

// بيانات الترجمة
const translations = {
    ar: {
        name: "يامن",
        title: "مهندس برمجيات | متخصص في Laravel و Java",
        email: "your.email@example.com",
        linkedin: "LinkedIn",
        skillsTitle: "المهارات التقنية",
        projectsTitle: "المشاريع البرمجية",
        footerText: "© 2026 يامن - جميع الحقوق محفوظة",
        detailsBtn: "عرض التفاصيل",
        statProjects: "مشاريع كاملة",
        statYears: "سنوات تعلم",
        statPassion: "شغف بالتعلم",
        statCoffee: "فنجان قهوة",
        aboutTitle: "👋 من أنا",
        aboutDesc1: "طالب في كلية الهندسة المعلوماتية - السنة الخامسة (برمجيات). متخصص في تطوير تطبيقات الويب باستخدام Laravel وأحب تحويل الأفكار إلى حلول برمجية عملية.",
        aboutDesc2: "ما يميزني هو شغفي بالتعلم المستمر، دائماً أبحث عن التقنيات الجديدة وأحب حل المشكلات المعقدة بطريقة إبداعية. أؤمن أن البرمجة ليست مجرد كتابة أكواد، بل هي فن لحل المشكلات وتحسين حياة الناس."
    },
    en: {
        name: "Yamen",
        title: "Software Engineer | Laravel & Java Specialist",
        email: "your.email@example.com",
        linkedin: "LinkedIn",
        skillsTitle: "Technical Skills",
        projectsTitle: "Software Projects",
        footerText: "© 2026 Yamen - All Rights Reserved",
        detailsBtn: "View Details",
        statProjects: "Completed Projects",
        statYears: "Learning Years",
        statPassion: "Passion for Learning",
        statCoffee: "Coffee Cups",
        aboutTitle: "👋 About Me",
        aboutDesc1: "Student at Faculty of Information Engineering - 5th Year (Software Engineering). Specialized in web development with Laravel and passionate about turning ideas into practical software solutions.",
        aboutDesc2: "What sets me apart is my continuous passion for learning. I'm always exploring new technologies and love solving complex problems creatively. I believe programming is not just about writing code, but an art of problem-solving and improving people's lives."
    }
};

let currentLang = 'ar';

// عرض تفاصيل المشروع في المودال
function showProjectDetails(projectId) {
    const project = projectsData[projectId];
    const modalBody = document.getElementById('modalBody');
    
    if (project) {
        let techList = project.tech.map(tech => `<span>${tech}</span>`).join('');
        
        let detailsList = project.details.map(detail => 
            `<li style="margin-bottom: 10px; list-style-type: disc; margin-right: 20px;">${detail}</li>`
        ).join('');
        
        modalBody.innerHTML = `
            <div class="modal-body">
                <h2>${project.title}</h2>
                <p style="font-size: 1.1em; color: #555; margin-bottom: 20px;">${project.fullDescription}</p>
                
                <h3 style="color: #667eea; margin-bottom: 10px;">التفاصيل التقنية:</h3>
                <ul style="margin-bottom: 20px;">
                    ${detailsList}
                </ul>
                
                <h3 style="color: #667eea; margin-bottom: 10px;">التقنيات المستخدمة:</h3>
                <div class="modal-tech-list">
                    ${techList}
                </div>
            </div>
        `;
        
        document.getElementById('projectModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// إغلاق المودال
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// إغلاق المودال عند الضغط خارج المحتوى
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
}

// إغلاق المودال عند الضغط على ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// تبديل اللغة
document.getElementById('langToggle').addEventListener('click', function() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    
    // تغيير اتجاه الصفحة
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    
    // تغيير نص الزر مع الأيقونات
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
    
    // تحديث النصوص الثابتة
    document.getElementById('name').textContent = translations[currentLang].name;
    document.getElementById('title').textContent = translations[currentLang].title;
    document.getElementById('email').innerHTML = `<i class="fas fa-envelope"></i> ${translations[currentLang].email}`;
    document.getElementById('linkedin').innerHTML = `<i class="fab fa-linkedin"></i> ${translations[currentLang].linkedin}`;
    document.getElementById('skillsTitle').textContent = translations[currentLang].skillsTitle;
    document.getElementById('projectsTitle').textContent = translations[currentLang].projectsTitle;
    document.getElementById('footerText').textContent = translations[currentLang].footerText;
    
    // تحديث أزرار التفاصيل
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.textContent = translations[currentLang].detailsBtn;
    });
    
    // تحديث الإحصائيات وقسم "من أنا"
    document.getElementById('statProjects').textContent = translations[currentLang].statProjects;
    document.getElementById('statYears').textContent = translations[currentLang].statYears;
    document.getElementById('statPassion').textContent = translations[currentLang].statPassion;
    document.getElementById('statCoffee').textContent = translations[currentLang].statCoffee;
    document.getElementById('aboutTitle').textContent = translations[currentLang].aboutTitle;
    document.getElementById('aboutDesc1').textContent = translations[currentLang].aboutDesc1;
    document.getElementById('aboutDesc2').textContent = translations[currentLang].aboutDesc2;
});

// تفعيل الوضع الليلي بناءً على تفضيلات النظام
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
}

// إظهار رسالة ترحيب في الكونسول
console.log('مرحباً بك في موقع يامن الشخصي! 👋');
console.log('Animal Association project is now properly documented as a Laravel-based animal shelter management system 🐾');