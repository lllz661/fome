const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Удаляем активные классы
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Добавляем активный класс к текущему
    tab.classList.add("active");
    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});
