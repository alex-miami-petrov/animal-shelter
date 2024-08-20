document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleButton");
  const text = document.getElementById("text");

  button.addEventListener("click", () => {
    if (text.classList.contains("text-hidden")) {
      text.classList.remove("text-hidden");
      text.classList.add("text-expanded");
      button.textContent = "Згорнути";
    } else {
      text.classList.remove("text-expanded");
      text.classList.add("text-hidden");
      button.textContent = "Показати більше";
    }
  });
});
