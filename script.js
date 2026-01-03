function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ===== DARK MODE SWITCH LOGIC =====
const desktopCheckbox = document.getElementById("theme-checkbox-desktop");
const mobileCheckbox = document.getElementById("theme-checkbox-mobile");

function setDarkMode(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  desktopCheckbox.checked = isDark;
  mobileCheckbox.checked = isDark;
}

// Desktop toggle
desktopCheckbox.addEventListener("change", () => {
  setDarkMode(desktopCheckbox.checked);
});

// Mobile toggle
mobileCheckbox.addEventListener("change", () => {
  setDarkMode(mobileCheckbox.checked);
});
