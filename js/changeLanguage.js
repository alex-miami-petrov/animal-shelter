$(document).ready(function () {
  $("#language-toggle").click(function () {
    $("#language-menu").toggle();
  });

  $("#language-menu a").click(function (e) {
    e.preventDefault();
    var lang = $(this).attr("data-lang");
    changeLanguage(lang);
    $("#language-menu").hide();
  });

  function changeLanguage(lang) {
    // Оновлюємо текст кнопки або іншого елемента з вибором мови
    $("#language-toggle").text(lang.toUpperCase()); // Приклад: встановлюємо текст кнопки в верхній регістр обраної мови

    // Тут ви можете додати свою логіку для зміни контенту на сторінці на обрану мову
    // Наприклад, якщо у вас є AJAX-запит для отримання вмісту на обраній мові:
    $.ajax({
      url: "your-backend-endpoint", // Замініть це на URL вашого серверу, який повертає вміст на обраній мові
      method: "GET",
      data: { lang: lang },
      success: function (response) {
        // Обробка успішного відповіді від сервера
        console.log("Контент на мові " + lang + ":", response);
        // Тут ви можете оновити DOM з отриманим відповідним контентом
      },
      error: function (err) {
        // Обробка помилки від сервера
        console.error(
          "Помилка при отриманні контенту на мові " + lang + ":",
          err
        );
      },
    });
  }
});
