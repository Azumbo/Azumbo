(function () {
  const SUPPORTED = ['en', 'ru', 'it'];
  const DEFAULT = 'en';

  function getLocaleFromPath() {
    const match = window.location.pathname.match(/^\/(en|ru|it)(\/|$)/);
    return match ? match[1] : null;
  }

  function buildLocaleUrl(locale) {
    const path = window.location.pathname.replace(/^\/(en|ru|it)(?=\/|$)/, '') || '/';
    return `/${locale}${path === '/' ? '/' : path}`;
  }

  function createLanguageSwitcher() {
    const nav = document.querySelector('nav');
    if (!nav || nav.querySelector('.lang-switcher')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-switcher';

    const label = document.createElement('label');
    label.setAttribute('for', 'locale-switcher');
    label.className = 'sr-only';
    label.textContent = 'Switch language';

    const select = document.createElement('select');
    select.id = 'locale-switcher';
    select.setAttribute('aria-label', 'Switch language');

    [
      { value: 'en', text: 'English' },
      { value: 'ru', text: 'Русский' },
      { value: 'it', text: 'Italiano' },
    ].forEach((item) => {
      const option = document.createElement('option');
      option.value = item.value;
      option.textContent = item.text;
      select.appendChild(option);
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    nav.appendChild(wrapper);

    const locale = getLocaleFromPath() || localStorage.getItem('azumbo_locale') || DEFAULT;
    select.value = SUPPORTED.includes(locale) ? locale : DEFAULT;

    select.addEventListener('change', () => {
      localStorage.setItem('azumbo_locale', select.value);
      document.cookie = `azumbo_locale=${select.value}; path=/; max-age=31536000; samesite=lax`;
      window.location.href = buildLocaleUrl(select.value);
    });
  }

  function setupAriaLive() {
    if (document.querySelector('[data-live-region]')) return;
    const live = document.createElement('div');
    live.className = 'sr-only';
    live.setAttribute('aria-live', 'polite');
    live.setAttribute('data-live-region', 'true');
    document.body.appendChild(live);
  }

  createLanguageSwitcher();
  setupAriaLive();
})();
