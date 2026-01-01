function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// DARK MODE
const body = document.body;
const btn = document.getElementById("dark-mode-toggle");

// Load saved state
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  btn.textContent = "☀️";
}

btn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-mode");
  btn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
