const sidemenu = document.querySelector("#sidemenu");

const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav");

function openMenu() {
  sidemenu.style.transform = 'translateX(-16rem)';
}
function closeMenu() {
  sidemenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
  if (scrollY > 50) {
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
  }
  else {
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
  }
})


// ------------- Dark Mode & Light Mode

// Apply the initial theme based on localStorage or OS preference
document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
);

function toggleTheme() {
  // Toggle the 'dark' class on the document element
  document.documentElement.classList.toggle('dark');

  // Update localStorage based on the current theme
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
}