function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ===== DARK MODE SWITCH (SYNCED) ===== */

const desktopCheckbox = document.getElementById("theme-checkbox-desktop");
const mobileCheckbox = document.getElementById("theme-checkbox-mobile");

function applyTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  desktopCheckbox.checked = isDark;
  mobileCheckbox.checked = isDark;
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  applyTheme(true);
}

// Desktop toggle
desktopCheckbox.addEventListener("change", () => {
  applyTheme(desktopCheckbox.checked);
});

// Mobile toggle
mobileCheckbox.addEventListener("change", () => {
  applyTheme(mobileCheckbox.checked);
});
