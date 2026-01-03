function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// DARK MODE
const desktopToggle = document.getElementById("dark-mode-toggle");
const mobileToggle = document.getElementById("dark-mode-toggle-mobile");

function updateIcons(isDark) {
  const iconClass = isDark ? "fa-sun" : "fa-moon";

  if (desktopToggle) {
    desktopToggle.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
  }

  if (mobileToggle) {
    mobileToggle.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateIcons(isDark);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  updateIcons(true);
}

// Event listeners
if (desktopToggle) {
  desktopToggle.addEventListener("click", toggleDarkMode);
}

if (mobileToggle) {
  mobileToggle.addEventListener("click", toggleDarkMode);
}
