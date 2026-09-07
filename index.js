const express = require('express');
const router = express.Router();

// Данные для страницы услуг
const services = [
    { id: 1, name: 'Веб-разработка', description: 'Создаём сайты любой сложности', icon: '🌐' },
    { id: 2, name: 'Мобильные приложения', description: 'Нативные и кроссплатформенные решения', icon: '📱' },
    { id: 3, name: 'SEO-продвижение', description: 'Выводим в топ поисковых систем', icon: '🔍' },
    { id: 4, name: 'Облачные решения', description: 'Надёжные и масштабируемые системы', icon: '☁️' }
];

router.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Главная',
        activePage: 'home',
        metaDescription: 'Добро пожаловать на наш сайт'
    });
});

router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'О нас',
        activePage: 'about',
        metaDescription: 'Узнайте больше о нашей компании'
    });
});

router.get('/services', (req, res) => {
    res.render('pages/services', {
        title: 'Услуги',
        activePage: 'services',
        metaDescription: 'Наши услуги и цены',
        services: services
    });
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Контакты',
        activePage: 'contact',
        metaDescription: 'Свяжитесь с нами'
    });
});

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Получено сообщение:', { name, email, message });
    
    res.render('pages/contact', {
        title: 'Контакты',
        activePage: 'contact',
        metaDescription: 'Свяжитесь с нами',
        successMessage: 'Спасибо! Ваше сообщение отправлено.'
    });
});

module.exports = router;
