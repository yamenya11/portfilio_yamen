const translations = {
    ar: {
        name: "يامن",
        title: "Full Stack Developer | Software Engineer", 
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
        title: "Full Stack Developer | Software Engineer",
        email: "yamennajem709@gmail.com",
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

    // ===== بيانات الصور =====
const galleryData = {
    admin: [
        { name: "لوحة التحكم", image: "assets/images/admin/dashboard.png", description: "واجهة إدارة النظام" },
        { name: "إدارة الحسابات", image: "assets/images/admin/manageaccount.png", description: "إدارة حسابات المستخدمين" }
    ],
    auth: [
        { name: "تسجيل الدخول", image: "assets/images/auth/login.png", description: "واجهة تسجيل الدخول" },
        { name: "إنشاء حساب", image: "assets/images/auth/register.png", description: "واجهة التسجيل" },
        { name: "ترحيب", image: "assets/images/auth/welcome.png", description: "صفحة الترحيب" }
    ],
    client: [
        { name: "الحساب الشخصي", image: "assets/images/client/account.png", description: "عرض معلومات الحساب" },
        { name: "إنشاء حساب جديد", image: "assets/images/client/createaccount.png", description: "إنشاء حساب عميل" },
        { name: "الصفحة الرئيسية", image: "assets/images/client/home.png", description: "الواجهة الرئيسية للعميل" },
        { name: "المعاملات", image: "assets/images/client/transaction.png", description: "عرض المعاملات المالية" }
    ]
};

// عرض الصور في المعرض
function renderGallery(filter = 'all') {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    let items = [];
    if (filter === 'all') {
        // جمع كل الصور
        items = [
            ...galleryData.admin.map(img => ({ ...img, category: 'admin' })),
            ...galleryData.auth.map(img => ({ ...img, category: 'auth' })),
            ...galleryData.client.map(img => ({ ...img, category: 'client' }))
        ];
    } else {
        items = galleryData[filter].map(img => ({ ...img, category: filter }));
    }
    
    items.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', item.category);
        galleryItem.style.animationDelay = `${index * 0.05}s`;
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x200?text=صورة+غير+موجودة'">
            <div class="gallery-info">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
        `;
        
        // إضافة حدث النقر لعرض الصورة مكبرة
        galleryItem.addEventListener('click', () => {
            openModal(item.image, item.name);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// فتح الـ Modal
function openModal(imageSrc, title) {
    let modal = document.getElementById('imageModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <span class="modal-close">&times;</span>
            <img id="modalImage" src="" alt="">
        `;
        document.body.appendChild(modal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-close')) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
    
    const modalImg = document.getElementById('modalImage');
    modalImg.src = imageSrc;
    modalImg.alt = title;
    modal.classList.add('active');
}

// إغلاق الـ Modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// إضافة أحداث الفلترة
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة الـ active من جميع الأزرار
            filterBtns.forEach(b => b.classList.remove('active'));
            // إضافة الـ active للزر المضغوط
            btn.classList.add('active');
            // فلترة الصور
            const filter = btn.getAttribute('data-filter');
            renderGallery(filter);
        });
    });
}

// تشغيل المعرض عند تحميل الصفحة
if (document.getElementById('galleryGrid')) {
    renderGallery('all');
    initGalleryFilters();
}

// إضافة ترجمة لعنوان المعرض
if (typeof translations !== 'undefined') {
    translations.ar.galleryTitle = " معرض الأعمال";
    translations.en.galleryTitle = " Projects Gallery";
    
    // تحديث الترجمة عند تغيير اللغة
    const originalSetLang = document.getElementById('langToggle').onclick;
    if (originalSetLang) {
        const newLangToggle = () => {
            if (currentLang === 'ar') {
                document.getElementById('galleryTitle').textContent = translations.ar.galleryTitle;
            } else {
                document.getElementById('galleryTitle').textContent = translations.en.galleryTitle;
            }
        };
        
        // إضافة التحديث للغة
        const oldHandler = document.getElementById('langToggle').onclick;
        document.getElementById('langToggle').onclick = function() {
            oldHandler();
            newLangToggle();
        };
    }
}
});

// رسالة ترحيب
console.log('مرحباً! رقم الهاتف: 0932307869');