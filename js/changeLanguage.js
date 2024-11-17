// $(document).ready(function () {

//   $("#language-menu").hide();

//   $("#language-toggle").click(function (e) {
//     e.stopPropagation();
//     $("#language-menu").show();
//   });

//   $("#language-menu").click(function (e) {
//     e.stopPropagation();
//   });

//   $(document).click(function () {
//     $("#language-menu").hide();
//   });

//   $("#language-menu a").click(function (e) {
//     e.preventDefault();
//     var lang = $(this).attr("data-lang");
//     changeLanguage(lang);
//     $("#language-menu").hide();
//   });

//   const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
//   const dropdownList = [...dropdownElementList].map(
//     (dropdownToggleEl) => new bootstrap.Dropdown(dropdownToggleEl)
//   );

//   function changeLanguage(lang) {

//     $("#language-toggle").text(lang.toUpperCase());

//     $.ajax({
//       url: "your-backend-endpoint",
//       method: "GET",
//       data: { lang: lang },
//       success: function (response) {
//         console.log("Контент на мові " + lang + ":", response);

//       },
//       error: function (err) {
//         console.error(
//           "Помилка при отриманні контенту на мові " + lang + ":",
//           err
//         );
//       },
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const dropdownToggle = document.getElementById("dropdownMenuButton");
//   const menuItems = document.querySelectorAll(".dropdown-item");

//   menuItems.forEach((item) => {
//     item.addEventListener("click", function (e) {
//       e.preventDefault();
//       const lang = this.getAttribute("data-lang");
//       const currentLanguage = dropdownToggle.textContent.trim();

//       if (
//         (lang === "en" && currentLanguage !== "EN") ||
//         (lang === "ua" && currentLanguage !== "UA")
//       ) {
//         dropdownToggle.textContent = lang.toUpperCase();
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownMenuButton");
  const menuItems = document.querySelectorAll(".dropdown-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");

      const currentLanguage = dropdownToggle.textContent.trim();

      dropdownToggle.textContent = lang.toUpperCase();

      if (lang === "en") {
        document.querySelector(".dropdown-item.en").style.display = "none";
        document.querySelector(".dropdown-item.ua").style.display = "block";
      } else if (lang === "ua") {
        document.querySelector(".dropdown-item.en").style.display = "block";
        document.querySelector(".dropdown-item.ua").style.display = "none";
      }
    });
  });
});
