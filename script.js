document.addEventListener("DOMContentLoaded", () => {
    const routes = document.querySelectorAll(".route"); // Изображения рутов
    const paths = document.querySelectorAll("path"); // Пути для отрисовки

    // Анимация путей SVG
    paths.forEach((path, index) => {
      path.style.animationDelay = `${index * 2}s`; // Задержка для каждого пути
    });

    // Анимация появления изображений
    routes.forEach((route, index) => {
        setTimeout(() => {
            route.style.opacity = 1; // Показать изображение
            setTimeout(() => {
                route.style.opacity = 0; // Скрыть изображение после анимации
            }, 2000); // Продолжительность показа совпадает с анимацией пути
        }, index * 2000); // Задержка перед показом следующего изображения
    });
});

/*Анимация 2 */
