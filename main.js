// Любой клиентский код (аналитика, анимации, обработка форм)
console.log('Сайт загружен!');

// Пример: подтверждение отправки формы
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        // Можно добавить валидацию
        console.log('Форма отправлена');
    });
});