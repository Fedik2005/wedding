// ============================================================
//  АНИМАЦИИ ДЛЯ СВАДЕБНОГО ПРИГЛАШЕНИЯ (Ivory Garden V2)
//  Адаптировано из оригинального JS-файла Simplewed
//  Все пути к картинкам: ivory-garden/v2/
// ============================================================

// ---- ФУНКЦИЯ ДЛЯ ПЛАВНОГО ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ ----
// (Скопировано из оригинального JS, адаптировано под ваши классы)

document.addEventListener('DOMContentLoaded', function() {
    // Находим все блоки с классом .ivory-v2-reveal
    const reveals = document.querySelectorAll('.ivory-v2-reveal');
    
    // Если блоки уже есть на странице — показываем их при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс visible, который запускает анимацию
                entry.target.classList.add('visible');
                // После появления отключаем наблюдение за этим элементом
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,        // 15% блока видно — запускаем анимацию
        rootMargin: '0px 0px -50px 0px'  // Чуть раньше начинаем анимацию
    });
    
    // Начинаем следить за всеми блоками
    reveals.forEach(el => {
        observer.observe(el);
    });
});

// ---- ПУЛЬСАЦИЯ СЕРДЕЧКА (КАК В ОРИГИНАЛЕ) ----
// Добавляем keyframes для сердечка
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

// Запускаем пульсацию для всех сердечек
const hearts = document.querySelectorAll('.ivory-v2-heart');
hearts.forEach(heart => {
    heart.style.display = 'inline-block';
    heart.style.animation = 'heartPulse 1.5s ease-in-out infinite';
});

// ---- ПЛАВНОЕ ПОЯВЛЕНИЕ ЛИСТЬЕВ (КАК В ОРИГИНАЛЕ) ----
const leaves = document.querySelectorAll('.ivory-v2-leaf');
leaves.forEach(leaf => {
    // Добавляем плавное появление для листьев
    leaf.style.transition = 'opacity 1s ease, transform 1s ease';
    
    // Создаём наблюдатель для каждого листа
    const leafObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                leaf.style.opacity = '0.7';
                leafObserver.unobserve(leaf);
            }
        });
    }, { threshold: 0.1 });
    
    leafObserver.observe(leaf);
});

// ---- АНИМАЦИЯ ТАЙМЕРА ПРИ НАВЕДЕНИИ ----
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

// ---- ПЛАВНОЕ ПОЯВЛЕНИЕ АНКЕТЫ (КАК В ОРИГИНАЛЕ) ----
const rsvpForm = document.querySelector('.ivory-v2-rsvp-form');
if (rsvpForm) {
    // Добавляем анимацию для анкеты
    rsvpForm.style.opacity = '0';
    rsvpForm.style.transform = 'translateY(20px)';
    rsvpForm.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Создаём наблюдатель для анкеты
    const formObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rsvpForm.style.opacity = '1';
                rsvpForm.style.transform = 'translateY(0)';
                formObserver.unobserve(rsvpForm);
            }
        });
    }, { threshold: 0.2 });
    
    formObserver.observe(rsvpForm);
}

// ---- ПЕРЕКЛЮЧЕНИЕ МЕЖДУ ФОРМОЙ И СООБЩЕНИЕМ ----
// (Функция showSuccess уже есть в вашем index.html)

console.log('✅ Анимации загружены! Все элементы появляются при скролле.');
console.log('📁 Пути к картинкам: ivory-garden/v2/');
