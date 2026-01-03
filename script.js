function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ===== DARK MODE SWITCH LOGIC ===== */

const desktopCheckbox = document.getElementById("theme-checkbox-desktop");
const mobileCheckbox = document.getElementById("theme-checkbox-mobile");

// start in LIGHT mode
document.body.classList.remove("dark-mode");

function syncTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  desktopCheckbox.checked = isDark;
  mobileCheckbox.checked = isDark;
}

desktopCheckbox.addEventListener("change", () => {
  syncTheme(desktopCheckbox.checked);
});

mobileCheckbox.addEventListener("change", () => {
  syncTheme(mobileCheckbox.checked);
});
