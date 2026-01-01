function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*dark menu*/
const darkBtn = document.getElementById("dark-mode-toggle");
const darkBtnMobile = document.getElementById("dark-mode-toggle-mobile");
const body = document.body;

// Load previous preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  if (darkBtn) darkBtn.textContent = "☀️";
  if (darkBtnMobile) darkBtnMobile.textContent = "☀️";
}

function toggleDarkMode() {
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (darkBtn) darkBtn.textContent = isDark ? "☀️" : "🌙";
  if (darkBtnMobile) darkBtnMobile.textContent = isDark ? "☀️" : "🌙";
}

if (darkBtn) darkBtn.addEventListener("click", toggleDarkMode);
if (darkBtnMobile) darkBtnMobile.addEventListener("click", toggleDarkMode);
