document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("language-toggle");
  const languageMenu = document.getElementById("language-menu");

  if (languageToggle && languageMenu) {
    languageToggle.addEventListener("click", function () {
      languageMenu.classList.toggle("show");
    });

    const languageLinks = languageMenu.querySelectorAll("a");
    languageLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const lang = this.getAttribute("data-lang");
        changeLanguage(lang);
        languageMenu.classList.remove("show");
      });
    });

    function changeLanguage(lang) {
      // Ваш код для зміни мови
      console.log("Вибрана мова:", lang);
      // Тут ви можете реалізувати логіку зміни мови на вашому сайті
      // Наприклад, оновлення тексту на сторінці, збереження вибраної мови у cookies або localStorage і т.д.
    }
  } else {
    console.error("Не вдалося знайти кнопку або меню мови.");
  }
});
