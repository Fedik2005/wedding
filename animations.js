// ============================================================
//  АНИМАЦИИ ДЛЯ СВАДЕБНОГО ПРИГЛАШЕНИЯ (Ivory Garden V2)
//  Скопировано из оригинального JS и адаптировано под ваши файлы
// ============================================================

// ---- ПУТИ К ВАШИМ КАРТИНКАМ ----
// Все пути уже настроены на ваши файлы:
// leaf1.png, leaf2.png, leaf4.png, leaf-divider.png, and.svg
// icon1.png, icon2.png, icon3.png, icon4.png, icon6.png, icon7.png

// ---- АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ ЗАГРУЗКЕ ----
document.addEventListener('DOMContentLoaded', function() {
    // Все блоки с классом .ivory-v2-reveal появляются с задержкой
    const reveals = document.querySelectorAll('.ivory-v2-reveal');
    
    // Если блоки уже есть на странице — показываем их
    reveals.forEach((el, index) => {
        // Добавляем небольшую задержку для каждого блока
        setTimeout(() => {
            el.classList.add('visible');
        }, 100 + index * 80);
    });
});

// ---- АНИМАЦИЯ ПРИ СКРОЛЛЕ (появление блоков) ----
// Создаём наблюдатель за появлением элементов
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // После появления отключаем наблюдение за этим элементом
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,        // 15% блока видно — запускаем анимацию
    rootMargin: '0px 0px -50px 0px'  // Чуть раньше начинаем анимацию
});

// Начинаем следить за всеми блоками, которые ещё не видны
document.querySelectorAll('.ivory-v2-reveal:not(.visible)').forEach(el => {
    observer.observe(el);
});

// ---- ПУЛЬСАЦИЯ СЕРДЕЧКА ----
const hearts = document.querySelectorAll('.ivory-v2-heart');
hearts.forEach(heart => {
    heart.style.display = 'inline-block';
    heart.style.animation = 'heartPulse 1.5s ease-in-out infinite';
});

// Добавляем keyframes для сердечка (если их нет в CSS)
if (!document.querySelector('#heart-keyframes')) {
    const style = document.createElement('style');
    style.id = 'heart-keyframes';
    style.textContent = `
        @keyframes heartPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
        }
    `;
    document.head.appendChild(style);
}

// ---- ПЛАВНОЕ ПОЯВЛЕНИЕ ЛИСТЬЕВ ----
const leaves = document.querySelectorAll('.ivory-v2-leaf');
leaves.forEach((leaf, index) => {
    // Добавляем случайную задержку для каждого листа
    leaf.style.opacity = '0';
    leaf.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
        leaf.style.opacity = '0.7';
    }, 500 + index * 300);
});

// ---- УВЕЛИЧЕНИЕ ТАЙМЕРА ПРИ НАВЕДЕНИИ ----
const timerValues = document.querySelectorAll('.ivory-v2-countdown-value');
timerValues.forEach(value => {
    value.style.transition = 'transform 0.3s ease';
    value.addEventListener('mouseenter', () => {
        value.style.transform = 'scale(1.05)';
    });
    value.addEventListener('mouseleave', () => {
        value.style.transform = 'scale(1)';
    });
});

// ---- ПЛАВНОЕ ПОЯВЛЕНИЕ АНКЕТЫ ----
const rsvpForm = document.querySelector('.ivory-v2-rsvp-form');
if (rsvpForm) {
    rsvpForm.style.opacity = '0';
    rsvpForm.style.transform = 'translateY(20px)';
    rsvpForm.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
        rsvpForm.style.opacity = '1';
        rsvpForm.style.transform = 'translateY(0)';
    }, 800);
}

// ---- ПЕРЕКЛЮЧЕНИЕ МЕЖДУ ФОРМОЙ И СООБЩЕНИЕМ ----
// (Функция showSuccess уже есть в вашем index.html)

console.log('✅ Анимации загружены!');
console.log('📁 Пути к картинкам: ivory-garden/v2/');
