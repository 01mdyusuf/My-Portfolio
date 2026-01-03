function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ===== DARK MODE SWITCH LOGIC ===== */

const desktopCheckbox = document.getElementById("theme-checkbox-desktop");
const mobileCheckbox = document.getElementById("theme-checkbox-mobile");

function setTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);

  // Sync both switches
  if (desktopCheckbox) desktopCheckbox.checked = isDark;
  if (mobileCheckbox) mobileCheckbox.checked = isDark;

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Desktop switch
if (desktopCheckbox) {
  desktopCheckbox.addEventListener("change", () => {
    setTheme(desktopCheckbox.checked);
  });
}

// Mobile switch
if (mobileCheckbox) {
  mobileCheckbox.addEventListener("change", () => {
    setTheme(mobileCheckbox.checked);
  });
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark");
