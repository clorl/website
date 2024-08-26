function getFirstBrowserLanguage() {
  var nav = window.navigator,
    browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
    i,
    language

  if (Array.isArray(nav.languages)) {
    for (i = 0; i < nav.languages.length; i++) {
      language = nav.languages[i]
      if (language && language.length) {
        return language
      }
    }
  }

  // support for other well known properties in browsers
  for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
    language = nav[browserLanguagePropertyKeys[i]]
    if (language && language.length) {
      return language
    }
  }
  return 'en'
}

const userLang = getFirstBrowserLanguage()
const supportedLanguages = {
  'fr': '/fr/',
  'en': '/'
};

function handleLanguageChange(selectElement) {
  const selectedLang = selectElement.value;
  setLanguagePreference(selectedLang);
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
  return document.cookie.split('; ').find(row => row.startsWith(name + '='))
    ?.split('=')[1];
}

function getUserPreferredLanguage() {
  return getCookie('preferredLanguage') || userLang.slice(0, 2);
}

const preferredLanguage = getUserPreferredLanguage();

if (supportedLanguages[preferredLanguage] && !window.location.pathname.startsWith(supportedLanguages[preferredLanguage])) {
  window.location.href = supportedLanguages[preferredLanguage];
}

function setLanguagePreference(lang) {
  if (supportedLanguages[lang]) {
    setCookie('preferredLanguage', lang, 365); // Store preference for one year
    window.location.href = supportedLanguages[lang]; // Redirect to the selected language version
  }
}
