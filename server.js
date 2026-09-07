const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ---------- НАСТРОЙКИ ----------
// Устанавливаем шаблонизатор EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Статические файлы (CSS, JS, изображения)
app.use(express.static(path.join(__dirname, 'public')));

// Парсинг данных из форм (если понадобится)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ---------- МАРШРУТЫ (ROUTING) ----------

// Главная страница
app.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Главная',
        activePage: 'home',
        metaDescription: 'Добро пожаловать на наш сайт'
    });
});

// Страница "О нас"
app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'О нас',
        activePage: 'about',
        metaDescription: 'Узнайте больше о нашей компании'
    });
});

// Страница "Услуги"
app.get('/services', (req, res) => {
    // Можно передать данные из базы данных
    const services = [
        { id: 1, name: 'Веб-разработка', description: 'Создаём сайты любой сложности', icon: '🌐' },
        { id: 2, name: 'Мобильные приложения', description: 'Нативные и кроссплатформенные решения', icon: '📱' },
        { id: 3, name: 'SEO-продвижение', description: 'Выводим в топ поисковых систем', icon: '🔍' },
        { id: 4, name: 'Облачные решения', description: 'Надёжные и масштабируемые системы', icon: '☁️' }
    ];

    res.render('pages/services', {
        title: 'Услуги',
        activePage: 'services',
        metaDescription: 'Наши услуги и цены',
        services: services
    });
});

// Страница "Контакты"
app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Контакты',
        activePage: 'contact',
        metaDescription: 'Свяжитесь с нами'
    });
});

// Обработка формы обратной связи (пример POST-запроса)
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Получено сообщение:', { name, email, message });
    
    // Здесь можно отправить письмо, сохранить в БД и т.д.
    res.render('pages/contact', {
        title: 'Контакты',
        activePage: 'contact',
        metaDescription: 'Свяжитесь с нами',
        successMessage: 'Спасибо! Ваше сообщение отправлено.'
    });
});

// Динамический маршрут с параметром (пример: /blog/123)
app.get('/blog/:id', (req, res) => {
    const postId = req.params.id;
    // Здесь можно получить пост из БД
    res.send(`<h1>Пост #${postId}</h1><p>Содержимое поста...</p><a href="/">На главную</a>`);
});

// Обработка 404 (страница не найдена)
app.use((req, res) => {
    res.status(404).render('pages/404', {
        title: 'Страница не найдена',
        activePage: null
    });
});

// Обработка ошибок (500)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/500', {
        title: 'Ошибка сервера',
        activePage: null
    });
});

// ---------- ЗАПУСК СЕРВЕРА ----------
app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
    console.log(`📄 Доступные страницы:`);
    console.log(`   - http://localhost:${PORT}/`);
    console.log(`   - http://localhost:${PORT}/about`);
    console.log(`   - http://localhost:${PORT}/services`);
    console.log(`   - http://localhost:${PORT}/contact`);
});