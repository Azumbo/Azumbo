'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { SoftwareApplicationJsonLd } from '../../components/seo/JsonLd';
import { SITE_URL } from '../../lib/seo';

type Lang = 'it' | 'en' | 'ru';
type LeaderEntry = { name: string; score: number };
type ItemType = { v: number | 'x2'; e: string; c: 'good' | 'special' | 'enemy' };

const translations: Record<Lang, Record<string, string>> = {
  it: {
    'points-label': 'PUNTI',
    'timer-label': 'TEMPO',
    'start-btn': 'INIZIA GIOCO',
    'leaderboard-title': '🏆 CLASSIFICA CIRÒ 🏆',
    footer: 'Tocca i simboli! Attenzione a 🍕🍍! Salva i record!',
    'city-label': 'Cirò Marina • Costa degli Achei',
    'tip-brasilena': '🍾 Brasilena +1',
    'tip-wine': '🍇 Cirò DOC +2',
    'tip-amphora': '🏺 Anfora +3',
    'tip-lighthouse': '🗼 Faro (x2)',
    'tip-enemy': '🍕🍍 Nemico -2',
    'game-over-text': 'Punteggio: {score}!\nInserisci il tuo nome:',
    'default-name': 'Tapper di Mare',
    'zero-score-msg': '0 punti? Attento alla pizza 🍕🍍!',
    'empty-leader': 'Nessun record.',
    pts: 'pts'
  },
  en: {
    'points-label': 'POINTS',
    'timer-label': 'TIMER',
    'start-btn': 'START GAME',
    'leaderboard-title': '🏆 LEADERBOARD 🏆',
    footer: 'Tap items! Beware of 🍕🍍! Save your score!',
    'city-label': 'Cirò Marina • Costa degli Achei',
    'tip-brasilena': '🍾 Brasilena +1',
    'tip-wine': '🍇 Cirò DOC +2',
    'tip-amphora': '🏺 Amphora +3',
    'tip-lighthouse': '🗼 Lighthouse (x2)',
    'tip-enemy': '🍕🍍 Enemy -2',
    'game-over-text': 'Score: {score}!\nEnter your name:',
    'default-name': 'Sea Tapper',
    'zero-score-msg': '0 points? Avoid 🍕🍍!',
    'empty-leader': 'No records.',
    pts: 'pts'
  },
  ru: {
    'points-label': 'ОЧКИ',
    'timer-label': 'ТАЙМЕР',
    'start-btn': 'НАЧАТЬ ИГРУ',
    'leaderboard-title': '🏆 ТАБЛИЦА ЛИДЕРОВ 🏆',
    footer: 'Тапай по символам! Осторожно 🍕🍍! Сохраняй рекорды!',
    'city-label': 'Cirò Marina • Costa degli Achei',
    'tip-brasilena': '🍾 Brasilena +1',
    'tip-wine': '🍇 Cirò DOC +2',
    'tip-amphora': '🏺 Амфора +3',
    'tip-lighthouse': '🗼 Маяк (x2)',
    'tip-enemy': '🍕🍍 Враг -2',
    'game-over-text': 'Результат: {score}!\nВведите ваше имя:',
    'default-name': 'Игрок с юга',
    'zero-score-msg': '0 очков? Избегай 🍕🍍!',
    'empty-leader': 'Нет рекордов.',
    pts: 'очк.'
  }
};

const itemTypes: ItemType[] = [
  { v: 1, e: '🍾', c: 'good' },
  { v: 2, e: '🍇', c: 'good' },
  { v: 3, e: '🏺', c: 'good' },
  { v: 'x2', e: '🗼', c: 'special' },
  { v: -2, e: '🍕🍍', c: 'enemy' },
  { v: 4, e: '🧿', c: 'good' }
];

const rankIcons = ['🥇', '🥈', '🥉', '📌', '📌'];

export default function CiroTapPage() {
  const playAreaRef = useRef<HTMLDivElement>(null);
  const [currentLang, setCurrentLang] = useState<Lang>('it');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderEntry[]>([]);

  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const spawnIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const multiplierEndTimerRef = useRef<NodeJS.Timeout | null>(null);
  const gameActiveRef = useRef(false);
  const langRef = useRef<Lang>('it');
  const multiplierActiveRef = useRef(false);
  const scoreRef = useRef(0);

  const t = useMemo(() => translations[currentLang], [currentLang]);

  useEffect(() => {
    const lang = (localStorage.getItem('ciro_lang') as Lang | null) || 'it';
    if (lang in translations) {
      setCurrentLang(lang);
    }
    loadLeaderboard();

    return () => {
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
      if (spawnIntervalRef.current) clearInterval(spawnIntervalRef.current);
      if (multiplierEndTimerRef.current) clearTimeout(multiplierEndTimerRef.current);
    };
  }, []);

  useEffect(() => {
    gameActiveRef.current = gameActive;
  }, [gameActive]);

  useEffect(() => {
    langRef.current = currentLang;
  }, [currentLang]);

  async function loadLeaderboard() {
    try {
      const response = await fetch('/api/cirotap-score');
      if (!response.ok) return;
      const result = (await response.json()) as LeaderEntry[];
      setLeaderboard(result);
    } catch {
      setLeaderboard([]);
    }
  }

  async function saveScore(playerName: string, playerScore: number) {
    try {
      await fetch('/api/cirotap-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: playerName, score: playerScore })
      });
      loadLeaderboard();
    } catch {
      // no-op
    }
  }

  function showParticle(x: number, y: number, value: number, color: string) {
    const playArea = playAreaRef.current;
    if (!playArea) return;

    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.color = color;
    particle.innerText = value > 0 ? `+${value}` : `${value}`;
    playArea.appendChild(particle);
    setTimeout(() => particle.remove(), 800);
  }

  function showFloatingMessage(text: string, color: string) {
    const playArea = playAreaRef.current;
    if (!playArea) return;

    const msg = document.createElement('div');
    msg.innerText = text;
    Object.assign(msg.style, {
      position: 'absolute',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: color,
      color: '#fff',
      padding: '5px 15px',
      borderRadius: '20px',
      fontWeight: 'bold',
      zIndex: '100',
      animation: 'floatUpParticle 1s forwards'
    });
    playArea.appendChild(msg);
    setTimeout(() => msg.remove(), 1000);
  }

  function addPoints(basePoints: number, x: number, y: number) {
    const points = multiplierActiveRef.current && basePoints > 0 ? basePoints * 2 : basePoints;
    scoreRef.current += points;
    setScore(scoreRef.current);
    showParticle(x, y, points, points > 0 ? '#2ecc71' : '#e74c3c');
  }

  function createTapItem() {
    const playArea = playAreaRef.current;
    if (!playArea || !gameActiveRef.current) return;

    const r = Math.random();
    let type = itemTypes[0];
    if (r > 0.35) type = itemTypes[1];
    if (r > 0.55) type = itemTypes[2];
    if (r > 0.68) type = itemTypes[3];
    if (r > 0.76) type = itemTypes[4];
    if (r > 0.94) type = itemTypes[5];

    const item = document.createElement('button');
    item.className = `tap-item ${type.c === 'enemy' ? 'enemy' : ''}`;
    item.type = 'button';
    item.innerText = type.e;
    item.setAttribute('aria-label', `tap-${type.e}`);

    const size = 75;
    const maxX = playArea.clientWidth - size - 10;
    const maxY = playArea.clientHeight - size - 10;
    item.style.left = `${Math.max(10, Math.random() * maxX)}px`;
    item.style.top = `${Math.max(10, Math.random() * maxY)}px`;

    const handleTap = (event: MouseEvent | TouchEvent) => {
      event.preventDefault();
      if (!gameActiveRef.current) return;

      const parentRect = playArea.getBoundingClientRect();
      const point = 'touches' in event ? event.touches[0] : event;
      const clickX = point.clientX - parentRect.left - 10;
      const clickY = point.clientY - parentRect.top - 20;

      if (type.c === 'enemy') {
        addPoints(-2, clickX, clickY);
        if (navigator.vibrate) navigator.vibrate(200);
      } else if (type.c === 'special') {
        addPoints(1, clickX, clickY);
        multiplierActiveRef.current = true;
        showFloatingMessage('x2 FARO!', '#f39c12');
        if (multiplierEndTimerRef.current) clearTimeout(multiplierEndTimerRef.current);
        multiplierEndTimerRef.current = setTimeout(() => {
          multiplierActiveRef.current = false;
        }, 3000);
      } else {
        addPoints(type.v as number, clickX, clickY);
      }

      item.style.transform = 'scale(0)';
      setTimeout(() => item.remove(), 100);
    };

    item.addEventListener('touchstart', handleTap as EventListener, { passive: false });
    item.addEventListener('mousedown', handleTap as EventListener);

    playArea.appendChild(item);

    setTimeout(() => {
      if (item.parentNode) {
        item.style.opacity = '0';
        setTimeout(() => item.remove(), 300);
      }
    }, 1200);
  }

  function endGame() {
    setGameActive(false);
    gameActiveRef.current = false;
    if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
    if (spawnIntervalRef.current) clearInterval(spawnIntervalRef.current);

    setTimeout(() => {
      if (scoreRef.current > 0) {
        const name = window.prompt(
          translations[langRef.current]['game-over-text'].replace('{score}', String(scoreRef.current)),
          translations[langRef.current]['default-name']
        );
        if (name) {
          saveScore(name.substring(0, 15), scoreRef.current);
        }
      } else {
        window.alert(translations[langRef.current]['zero-score-msg']);
      }
    }, 400);
  }

  function startGame() {
    const playArea = playAreaRef.current;
    if (!playArea) return;

    scoreRef.current = 0;
    setScore(0);
    setTimeLeft(30);
    multiplierActiveRef.current = false;
    setGameActive(true);
    gameActiveRef.current = true;
    playArea.innerHTML = '';

    gameIntervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          endGame();
          return 0;
        }
        return next;
      });
    }, 1000);

    spawnIntervalRef.current = setInterval(() => {
      createTapItem();
      if (Math.random() < 0.2) setTimeout(createTapItem, 200);
    }, 600);
  }

  return (
    <main className="ciro-page">
      <SoftwareApplicationJsonLd
        name="Brasilena Tap: Cirò Marina"
        description="Mobile-first tap game with multilingual interface and online AZUMBO leaderboard."
        url={`${SITE_URL}/cirotap`}
        inLanguage="it,en,ru"
      />

      <h1 className="sr-only">Brasilena Tap: Cirò Marina</h1>
      <p className="sr-only">
        Brasilena Tap is a fast-paced arcade browser game set in Cirò Marina. Play on mobile, compete in the AZUMBO leaderboard, and train your reaction speed.
      </p>
      <section className="game-container" aria-label="Brasilena Tap game container">
        <div className="top-bar" />

        <div className="lang-switch">
          {(['it', 'en', 'ru'] as Lang[]).map((lang) => (
            <button
              key={lang}
              className={`lang-btn ${currentLang === lang ? 'active' : ''}`}
              type="button"
              onClick={() => {
                setCurrentLang(lang);
                localStorage.setItem('ciro_lang', lang);
              }}
            >
              {lang.toUpperCase()} {lang === 'it' ? '🇮🇹' : lang === 'en' ? '🇬🇧' : '🇷🇺'}
            </button>
          ))}
        </div>

        <div className="hero">
          <p>{t['city-label']}</p>
          <h2>
            <span>🍾</span> BRASILENA TAP <span>🌊</span>
          </h2>
        </div>

        <div className="stats">
          <div className="stat-box">
            <div className="stat-label">{t['points-label']}</div>
            <div className="stat-value score">{score}</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">{t['timer-label']}</div>
            <div className="stat-value timer">{timeLeft}</div>
          </div>
        </div>

        <div className="play-area" ref={playAreaRef} />

        <div className="button-area">
          <button className="btn-start" type="button" onClick={startGame} disabled={gameActive}>
            {t['start-btn']}
          </button>
        </div>

        <div className="leaderboard">
          <h3>{t['leaderboard-title']}</h3>
          <div className="leader-list">
            {leaderboard.length === 0 ? (
              <div className="empty-text">{t['empty-leader']}</div>
            ) : (
              leaderboard.map((entry, idx) => (
                <div className="leader-item" key={`${entry.name}-${entry.score}-${idx}`}>
                  <div className="leader-name">
                    {rankIcons[idx] || '📌'} {entry.name}
                  </div>
                  <div className="leader-score">
                    {entry.score} {t.pts}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="local-tip">
          <span>{t['tip-brasilena']}</span>
          <span>{t['tip-wine']}</span>
          <span>{t['tip-amphora']}</span>
          <span>{t['tip-lighthouse']}</span>
          <span className="tip-negative">{t['tip-enemy']}</span>
        </div>

        <footer>{t.footer}</footer>
      </section>

      <style jsx>{`
        .ciro-page {
          min-height: 100vh;
          margin: 0;
          padding: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        .game-container {
          max-width: 450px;
          width: 100%;
          background: #fffdf7;
          border-radius: 40px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2), inset 0 0 0 4px #e59866;
          overflow: hidden;
        }
        .top-bar {
          height: 8px;
          background: linear-gradient(90deg, #009246 33.3%, #fff 33.3%, #fff 66.6%, #ce2b37 66.6%);
        }
        .lang-switch {
          padding: 12px 16px 4px;
          display: flex;
          justify-content: flex-end;
          gap: 8px;
        }
        .lang-btn {
          background: #f1e5d1;
          border: 2px solid transparent;
          font-size: 1rem;
          padding: 4px 10px;
          border-radius: 20px;
          font-weight: 600;
        }
        .lang-btn.active {
          background: #ffd966;
          border-color: #e6b800;
        }
        .hero {
          padding: 10px 16px 20px;
          text-align: center;
        }
        .hero h2 {
          margin: 0;
          font-size: 2.1rem;
          color: #d35400;
        }
        .hero p {
          margin: 8px 0;
          font-weight: 700;
          background: #e67e22;
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          color: #fff;
          font-size: 0.85rem;
        }
        .stats {
          display: flex;
          justify-content: space-around;
          padding: 0 20px 15px;
          gap: 15px;
        }
        .stat-box {
          background: white;
          border: 3px solid #f39c12;
          border-radius: 25px;
          padding: 10px;
          text-align: center;
          flex: 1;
        }
        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #e67e22;
          font-weight: 700;
        }
        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
          margin-top: 5px;
        }
        .score { color: #27ae60; }
        .timer { color: #e74c3c; }
        .play-area {
          position: relative;
          background: linear-gradient(180deg, #4facfe 0%, #00f2fe 100%);
          min-height: 380px;
          height: 55vw;
          max-height: 480px;
          margin: 0 15px;
          border-radius: 35px;
          overflow: hidden;
          border: 4px solid #fff;
          touch-action: none;
        }
        :global(.tap-item) {
          position: absolute;
          width: 75px;
          height: 75px;
          background: #fff;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          cursor: pointer;
          z-index: 5;
        }
        :global(.tap-item.enemy) {
          background: #ffeaa7;
          border: 2px solid #ff7675;
        }
        :global(.particle) {
          position: absolute;
          font-weight: 700;
          font-size: 1.5rem;
          pointer-events: none;
          animation: floatUpParticle 0.8s ease-out forwards;
          z-index: 10;
        }
        @keyframes floatUpParticle {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-50px) scale(1.5); opacity: 0; }
        }
        .button-area { padding: 25px 20px 15px; text-align: center; }
        .btn-start {
          background: linear-gradient(180deg, #2ecc71 0%, #27ae60 100%);
          border: none;
          font-size: 1.3rem;
          font-weight: 700;
          padding: 15px 30px;
          border-radius: 40px;
          color: #fff;
          width: 90%;
          cursor: pointer;
        }
        .btn-start:disabled { opacity: 0.55; cursor: not-allowed; }
        .leaderboard {
          background: #fdf3e7;
          margin: 10px 20px 20px;
          border-radius: 25px;
          padding: 15px;
          border: 3px dashed #e67e22;
        }
        .leaderboard h3 {
          margin: 0 0 15px 0;
          font-size: 1.2rem;
          text-align: center;
          color: #d35400;
        }
        .leader-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          background: #fff;
          border-radius: 14px;
          padding: 10px;
        }
        .empty-text {
          color: #888;
          text-align: center;
        }
        .leader-score {
          background: #e67e22;
          color: #fff;
          border-radius: 16px;
          padding: 2px 10px;
        }
        .local-tip {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 0 15px 15px;
          font-size: 0.75rem;
          font-weight: 600;
          flex-wrap: wrap;
        }
        .local-tip span {
          background: #fff;
          padding: 5px 12px;
          border-radius: 20px;
        }
        .tip-negative {
          background: #ffeaa7 !important;
          color: #d63031;
          border: 1px solid #ff7675;
        }
        footer {
          font-size: 0.7rem;
          text-align: center;
          padding: 15px;
          color: #888;
          background: #f8f9fa;
        }
      `}</style>
    </main>
  );
}
