document.addEventListener("DOMContentLoaded", () => {
    const routes = document.querySelectorAll(".route"); 
    const paths = document.querySelectorAll("path"); 
    
    routes.forEach((route, index) => {
        setTimeout(() => {
            route.style.opacity = 1; 
            setTimeout(() => {
            }, 2000);
        }, index * 2000); 
    });
});



/*Анимация 3 */
const inputField = document.getElementById('name');
const inputLabel = document.querySelector('.input-label');

inputField.addEventListener('focus', () => {
    inputLabel.style.top = '-20px';
    inputLabel.style.left = '50%';
    inputLabel.style.transform = 'translateX(-50%)';
    inputLabel.style.fontSize = '14px';
});

inputField.addEventListener('blur', () => {
    if (!inputField.value) {
        inputLabel.style.top = '10px';
        inputLabel.style.left = '10px';
        inputLabel.style.transform = 'translateX(0)';
        inputLabel.style.fontSize = '16px';
    }
});

