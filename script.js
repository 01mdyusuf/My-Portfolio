function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// DARK MODE
const body = document.body;
const btn = document.getElementById("dark-mode-toggle");
const btnMobile = document.getElementById("dark-mode-toggle-mobile");

function updateIcon() {
  const isDark = body.classList.contains("dark-mode");
  const icon = isDark ? "fa-sun" : "fa-moon";

  if (btn) btn.innerHTML = `<i class="fa-solid ${icon}"></i>`;
  if (btnMobile) btnMobile.innerHTML = `<i class="fa-solid ${icon}"></i>`;
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}
updateIcon();

btn?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
  updateIcon();
});

btnMobile?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
  updateIcon();
});
