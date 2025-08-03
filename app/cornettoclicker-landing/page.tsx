'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import './style.css';

const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.game': 'GAME',
    'nav.biz': 'FOR BUSINESS',
    'nav.download': 'DOWNLOAD',
    'hero.subtitle': 'LEGENDARY CLICKER IS BACK!',
    'hero.play': 'PLAY NOW',
    'features.title': 'GAME FEATURES',
    'features.f1': '50+ ice creams',
    'features.f2': 'Retro achievements',
    'features.f3': 'Cross-platform',
    'biz.title': 'WANT THIS GAME FOR YOUR BUSINESS?',
    'biz.bakery': 'BAKERY \u2192 CROISSANTS',
    'biz.winery': 'WINERY \u2192 GRAPES',
    'biz.brewery': 'BREWERY \u2192 BOTTLES',
    'biz.cafe': 'CAFE \u2192 COOKIES',
    'biz.offer_title': 'YOUR BRANDED GAME IN 7 DAYS:',
    'biz.offer1': 'Logo & brand colors',
    'biz.offer2': 'Custom collectibles',
    'biz.offer3': 'Web + iOS + Android',
    'biz.offer4': 'Retro sounds',
    'biz.cta_text': 'Want more loyal customers? Let them play!',
    'biz.cta_btn': 'ORDER NOW',
  },
  ru: {
    'nav.game': '\u041E \u0418\u0413\u0420\u0415',
    'nav.biz': '\u0414\u041B\u042F \u0411\u0418\u0417\u041D\u0415\u0421\u0410',
    'nav.download': '\u0421\u041A\u0410\u0427\u0410\u0422\u042C',
    'hero.subtitle': '\u041B\u0415\u0413\u0415\u041D\u0414\u0410\u0420\u041D\u042B\u0419 \u041A\u041B\u0418\u041A\u0415\u0420 \u0412\u0415\u0420\u041D\u0423\u041B\u0421\u042F!',
    'hero.play': '\u0418\u0413\u0420\u0410\u0422\u042C \u0421\u0415\u0419\u0427\u0410\u0421',
    'features.title': '\u041E\u0421\u041E\u0411\u0415\u041D\u041D\u041E\u0421\u0422\u0418 \u0418\u0413\u0420\u042B',
    'features.f1': '50+ \u043C\u043E\u0440\u043E\u0436\u0435\u043D\u044B\u0445',
    'features.f2': '\u0420\u0435\u0442\u0440\u043E \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F',
    'features.f3': '\u041A\u0440\u043E\u0441\u0441-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u043E',
    'biz.title': '\u0425\u041E\u0422\u0418\u0422\u0415 \u0418\u0413\u0420\u0423 \u0414\u041B\u042F \u0412\u0410\u0428\u0415\u0413\u041E \u0411\u0418\u0417\u041D\u0415\u0421\u0410?',
    'biz.bakery': '\u041F\u0415\u041A\u0410\u0420\u041D\u042F \u2192 \u041A\u0420\u0423\u0410\u0421\u0421\u0410\u041D\u042B',
    'biz.winery': '\u0412\u0418\u041D\u041E\u0414\u0415\u041B\u042C\u041D\u042F \u2192 \u0412\u0418\u041D\u041E\u0413\u0420\u0410\u0414',
    'biz.brewery': '\u041F\u0418\u0412\u041E\u0412\u0410\u0420\u041D\u042F \u2192 \u0411\u0423\u0422\u042B\u041B\u041A\u0418',
    'biz.cafe': '\u041A\u0410\u0424\u0415 \u2192 \u041F\u0415\u0427\u0415\u041D\u042C\u0415',
    'biz.offer_title': '\u0412\u0410\u0428\u0410 \u0411\u0420\u0415\u041D\u0414\u0418\u0420\u041E\u0412\u0410\u041D\u041D\u0410\u042F \u0418\u0413\u0420\u0410 \u0417\u0410 7 \u0414\u041D\u0415\u0419:',
    'biz.offer1': '\u041B\u043E\u0433\u043E \u0438 \u0446\u0432\u0435\u0442\u0430 \u0431\u0440\u0435\u043D\u0434\u0430',
    'biz.offer2': '\u041E\u0441\u043E\u0431\u044B\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B',
    'biz.offer3': 'Web + iOS + Android',
    'biz.offer4': '\u0420\u0435\u0442\u0440\u043E \u0437\u0432\u0443\u043A\u0438',
    'biz.cta_text': '\u0425\u043E\u0442\u0438\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043B\u043E\u044F\u043B\u044C\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432? \u041F\u0443\u0441\u0442\u044C \u043E\u043D\u0438 \u0438\u0433\u0440\u0430\u044E\u0442!',
    'biz.cta_btn': '\u0417\u0410\u041A\u0410\u0417\u0410\u0422\u042C \u0418\u0413\u0420\u0423',
  },
  it: {
    'nav.game': 'SUL GIOCO',
    'nav.biz': 'PER AZIENDE',
    'nav.download': 'SCARICA',
    'hero.subtitle': 'IL CLICKER LEGGENDARIO \u00C8 TORNATO!',
    'hero.play': 'GIOCA ORA',
    'features.title': 'CARATTERISTICHE DEL GIOCO',
    'features.f1': 'Oltre 50 gelati',
    'features.f2': 'Obiettivi retr\u00F2',
    'features.f3': 'Cross-platform',
    'biz.title': 'VUOI QUESTO GIOCO PER LA TUA ATTIVIT\u00C0?',
    'biz.bakery': 'PANIFICIO \u2192 CROISSANT',
    'biz.winery': 'CANTINA \u2192 UVA',
    'biz.brewery': 'BIRRERIA \u2192 BOTTIGLIE',
    'biz.cafe': 'CAFF\u00C8 \u2192 BISCOTTI',
    'biz.offer_title': 'IL TUO GIOCO BRANDIZZATO IN 7 GIORNI:',
    'biz.offer1': 'Logo e colori brand',
    'biz.offer2': 'Collezionabili personalizzati',
    'biz.offer3': 'Web + iOS + Android',
    'biz.offer4': 'Suoni retr\u00F2',
    'biz.cta_text': 'Vuoi pi\u00F9 clienti fedeli? Falli giocare!',
    'biz.cta_btn': 'ORDINA ORA',
  },
};

export default function CornettoLanding() {
  const [lang, setLang] = useState('en');
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    if (['en', 'ru', 'it'].includes(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  useEffect(() => {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n')!;
      el.textContent = translations[lang][key];
    });
  }, [lang]);

  const changeLang = (l: string) => setLang(l);

  const startMiniGame = () => {
    window.open('/cornettoclicker/game.html', '_blank');
  };

  useEffect(() => {
    const hover = new Audio('/cornettoclicker/hover.mp3');
    const buttons = document.querySelectorAll('.pixel-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        hover.currentTime = 0;
        hover.play();
      });
    });

    document.querySelectorAll('.niche').forEach((niche) => {
      const icon = niche.querySelector('.pixel-icon') as HTMLElement;
      const original = icon?.textContent;
      niche.addEventListener('mouseenter', () => {
        if (icon) icon.textContent = '✨';
      });
      niche.addEventListener('mouseleave', () => {
        if (icon) icon.textContent = original || '';
      });
    });

    const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let index = 0;
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === sequence[index].toLowerCase()) {
        index++;
        if (index === sequence.length) {
          alert('BONUS!');
          startMiniGame();
          index = 0;
        }
      } else {
        index = 0;
      }
    };
    window.addEventListener('keydown', keyHandler);
    return () => window.removeEventListener('keydown', keyHandler);
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="landing-container">
      <header className="pixel-header" aria-label="Main navigation">
        <Image
          src="/cornettoclicker/logo.svg"
          alt="🥐 Cornetto Clicker"
          width={64}
          height={64}
          className="pixel-logo"
          onClick={() => {
            const c = clicks + 1;
            setClicks(c);
            if (c >= 5) startMiniGame();
          }}
        />
        <nav className="pixel-nav">
          <a href="#game" data-i18n="nav.game"></a>
          <a href="#biz" data-i18n="nav.biz"></a>
          <a href="#download" data-i18n="nav.download"></a>
          <div className="lang-switcher" aria-label="Switch language">
            <button data-lang="en" onClick={() => changeLang('en')}>🇬🇧</button>
            <button data-lang="ru" onClick={() => changeLang('ru')}>🇷🇺</button>
            <button data-lang="it" onClick={() => changeLang('it')}>🇮🇹</button>
          </div>
        </nav>
      </header>

      <section className="crt-effect pixel-hero" id="game">
        <div id="croissant-sprite" className="sprite-animation" />
        <h1>🥐 CORNETTO CLICKER</h1>
        <h2 data-i18n="hero.subtitle"></h2>
        <button className="pixel-btn play-btn" data-i18n="hero.play"></button>
        <div className="platform-badges">
          <span className="ios-badge">iOS</span>
          <span className="android-badge">ANDROID</span>
          <span className="web-badge">WEB</span>
        </div>
      </section>

      <section className="pixel-section" id="features">
        <h2 data-i18n="features.title"></h2>
        <div className="pokedex-ui">
          <div className="pixel-feature">❖ <span data-i18n="features.f1"></span></div>
          <div className="pixel-feature">❖ <span data-i18n="features.f2"></span></div>
          <div className="pixel-feature">❖ <span data-i18n="features.f3"></span></div>
        </div>
      </section>

      <section className="pixel-section biz-section" id="biz">
        <h2 data-i18n="biz.title"></h2>
        <div className="niche-grid">
          <div className="niche bakery" data-niche="bakery">
            <div className="pixel-icon">🍞</div>
            <span data-i18n="biz.bakery"></span>
          </div>
          <div className="niche winery" data-niche="winery">
            <div className="pixel-icon">🍷</div>
            <span data-i18n="biz.winery"></span>
          </div>
          <div className="niche brewery" data-niche="brewery">
            <div className="pixel-icon">🍺</div>
            <span data-i18n="biz.brewery"></span>
          </div>
          <div className="niche cafe" data-niche="cafe">
            <div className="pixel-icon">☕</div>
            <span data-i18n="biz.cafe"></span>
          </div>
        </div>
        <div className="offer-box">
          <h3 data-i18n="biz.offer_title"></h3>
          <ul className="pixel-list">
            <li>✅ <span data-i18n="biz.offer1"></span></li>
            <li>✅ <span data-i18n="biz.offer2"></span></li>
            <li>✅ <span data-i18n="biz.offer3"></span></li>
            <li>✅ <span data-i18n="biz.offer4"></span></li>
          </ul>
        </div>
        <div className="biz-cta">
          <p data-i18n="biz.cta_text"></p>
          <button className="pixel-btn biz-btn blink-me" data-i18n="biz.cta_btn"></button>
          <p className="pixel-email">📩 azumbogames@gmail.com</p>
        </div>
      </section>

      <footer className="pixel-footer">
        <div className="social-links">
          <a href="#" className="pixel-social" aria-label="Twitter">🐦</a>
          <a href="#" className="pixel-social" aria-label="Game store">🎮</a>
        </div>
        <p className="copyright">© 1993-{new Date().getFullYear()} Cornetto Games</p>
        <button className="easter-egg" onClick={startMiniGame}>👾</button>
      </footer>
    </div>
    </>
  );
}
