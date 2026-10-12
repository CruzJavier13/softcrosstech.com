// Diccionaries of translations for different languages
const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.about": "Sobre Mí",
    "nav.contact": "Contacto",
    "hero.title": "Ingeniería de Automatización & Desarrollo de Software",
    "hero.subtitle": "Optimizamos procesos industriales e integramos hardware, pesaje y desarrollo web a medida.",
    "hero.btnServices": "Ver Servicios",
    "hero.btnPortfolio": "Explorar Proyectos"
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About Me",
    "nav.contact": "Contact",
    "hero.title": "Automation Engineering & Software Development",
    "hero.subtitle": "We optimize industrial processes and integrate custom hardware, weighing systems, and web development.",
    "hero.btnServices": "Our Services",
    "hero.btnPortfolio": "Explore Projects"
  }
};

// Language toggle logic
let currentLang = localStorage.getItem("softcross_lang") || "es";

function updateLanguage(lang) {
  // Update lang on HTML
  document.documentElement.lang = lang;
  
  // Buscar todos los elementos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update the button label
  document.getElementById("current-lang").textContent = lang.toUpperCase();
  
  // Save preference
  localStorage.setItem("softcross_lang", lang);
}

// Event listener for the language toggle button
document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-toggle");
  
  // Load saved language on startup
  updateLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      updateLanguage(currentLang);
    });
  }
});