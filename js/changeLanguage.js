$(document).ready(function () {
  // Початкове приховання меню
  $("#language-menu").hide();

  // Клік на кнопку language-toggle
  $("#language-toggle").click(function (e) {
    e.stopPropagation(); // Зупиняємо подальше випливання події
    $("#language-menu").show(); // Показуємо меню language-menu
  });

  // Клік на будь-який елемент в межах language-menu
  $("#language-menu").click(function (e) {
    e.stopPropagation(); // Зупиняємо подальше випливання події
  });

  // Клік поза language-menu ховає його
  $(document).click(function () {
    $("#language-menu").hide();
  });

  // Обробка кліку на посилання в меню
  $("#language-menu a").click(function (e) {
    e.preventDefault();
    var lang = $(this).attr("data-lang");
    changeLanguage(lang);
    $("#language-menu").hide(); // Ховаємо меню після вибору мови
  });

  function changeLanguage(lang) {
    // Оновлюємо текст кнопки або іншого елемента з вибором мови
    $("#language-toggle").text(lang.toUpperCase());

    // Тут ви можете додати свою логіку для зміни контенту на сторінці на обрану мову
    // Наприклад, якщо у вас є AJAX-запит для отримання вмісту на обраній мові:
    $.ajax({
      url: "your-backend-endpoint",
      method: "GET",
      data: { lang: lang },
      success: function (response) {
        console.log("Контент на мові " + lang + ":", response);
        // Тут ви можете оновити DOM з отриманим відповідним контентом
      },
      error: function (err) {
        console.error(
          "Помилка при отриманні контенту на мові " + lang + ":",
          err
        );
      },
    });
  }
});
