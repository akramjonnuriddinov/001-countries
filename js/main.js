
const elDarkModeButton = document.querySelector(".dark-mode-btn");

elDarkModeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});