<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AZUMBO — Indie Game Studio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-bg: #ffffff;
            --primary-text: #171717;
            --secondary-bg: #f5f5f5;
            --accent-color: #3b82f6;
            --border-color: #e5e5e5;
        }
        
        body.dark {
            --primary-bg: #0a0a0a;
            --primary-text: #ededed;
            --secondary-bg: #262626;
            --accent-color: #60a5fa;
            --border-color: #404040;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: background-color 0.3s, color 0.3s;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--primary-bg);
            color: var(--primary-text);
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background-color: rgba(10, 10, 10, 0.8);
            backdrop-filter: blur(10px);
            position: sticky;
            top: 0;
            z-index: 100;
            padding: 15px 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-weight: 900;
            font-size: 1.5rem;
            letter-spacing: 0.05em;
            color: white;
        }
        
        nav {
            display: flex;
            gap: 20px;
        }
        
        nav a {
            color: #d4d4d4;
            text-decoration: none;
            font-size: 0.9rem;
            padding: 8px 12px;
            border-radius: 6px;
            transition: all 0.2s;
        }
        
        nav a:hover {
            color: white;
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .lang-buttons {
            display: flex;
            gap: 8px;
        }
        
        .lang-btn {
            padding: 6px 12px;
            border: none;
            border-radius: 6px;
            font-size: 0.8rem;
            cursor: pointer;
        }
        
        .lang-btn.active {
            background-color: white;
            color: black;
        }
        
        .lang-btn:not(.active) {
            background-color: #404040;
            color: #d4d4d4;
        }
        
        .hero {
            padding: 80px 0;
            text-align: left;
        }
        
        .subtitle {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #737373;
            margin-bottom: 10px;
        }
        
        h1 {
            font-size: 3.5rem;
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: 1.1rem;
            color: #737373;
            max-width: 600px;
            margin-bottom: 30px;
        }
        
        .cta-buttons {
            display: flex;
            gap: 15px;
            margin-bottom: 40px;
        }
        
        .btn-primary {
            background-color: black;
            color: white;
            padding: 12px 25px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.2s;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .btn-secondary {
            background-color: transparent;
            color: var(--primary-text);
            padding: 12px 25px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            border: 1px solid var(--border-color);
            transition: all 0.2s;
        }
        
        .btn-secondary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .platforms h3 {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #737373;
            margin-bottom: 15px;
        }
        
        .platform-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .platform-tag {
            display: flex;
            align-items: center;
            gap: 8px;
            background-color: var(--secondary-bg);
            padding: 8px 16px;
            border-radius: 100px;
            font-size: 0.9rem;
        }
        
        .platform-icon {
            font-size: 14px;
            width: 16px;
            height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        section {
            padding: 60px 0;
        }
        
        h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 15px;
        }
        
        .section-desc {
            color: #737373;
            margin-bottom: 30px;
            max-width: 600px;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .service-card {
            background-color: var(--primary-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 25px;
            transition: all 0.2s;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .service-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .service-icon {
            font-size: 18px;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-color);
        }
        
        .service-title {
            font-size: 1.2rem;
            font-weight: 600;
        }
        
        .service-desc {
            color: #737373;
            font-size: 0.95rem;
            margin-bottom: 15px;
        }
        
        .price-tag {
            display: inline-block;
            padding: 5px 12px;
            border: 1px solid var(--border-color);
            border-radius: 100px;
            font-size: 0.8rem;
            font-weight: 600;
        }
        
        .games-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .game-card {
            background-color: var(--primary-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 25px;
            transition: all 0.2s;
            text-decoration: none;
            color: inherit;
        }
        
        .game-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .game-image {
            height: 160px;
            background-color: var(--secondary-bg);
            border-radius: 12px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #737373;
        }
        
        .game-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        .game-desc {
            color: #737373;
            font-size: 0.95rem;
            margin-bottom: 15px;
        }
        
        .game-platforms {
            font-size: 0.8rem;
            color: #a3a3a3;
        }
        
        .about-section {
            max-width: 800px;
        }
        
        .contact-section a {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            border: 1px solid var(--border-color);
            border-radius: 12px;
            text-decoration: none;
            color: inherit;
            font-weight: 500;
            transition: all 0.2s;
        }
        
        .contact-section a:hover {
            background-color: var(--secondary-bg);
        }
        
        footer {
            border-top: 1px solid var(--border-color);
            padding: 30px 0;
            text-align: center;
            color: #737373;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            
            .cta-buttons {
                flex-direction: column;
            }
            
            .header-content {
                flex-direction: column;
                gap: 15px;
            }
            
            nav {
                order: 3;
                width: 100%;
                justify-content: center;
            }
        }
        
        /* Dark mode toggle */
        .theme-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--secondary-bg);
            border: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 99;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .theme-toggle i {
            font-size: 20px;
        }
    </style>
</head>
<body>
    <header>
        <div class="container header-content">
            <div class="logo">AZUMBO</div>
            <nav>
                <a href="#games">Games</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
            <div class="lang-buttons">
                <button class="lang-btn active">EN</button>
                <button class="lang-btn">IT</button>
                <button class="lang-btn">RU</button>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <p class="subtitle">Mobile-first games with humor & heart.</p>
            <h1>AZUMBO — Indie Game Studio</h1>
            <p>We craft fast, funny and viral-ready casual games for Android, iOS and Nintendo Switch.</p>
            <div class="cta-buttons">
                <a href="/cornettoclicker" class="btn-primary">Play in browser</a>
                <a href="mailto:azumbogames@gmail.com" class="btn-secondary">Contact</a>
            </div>
            <div class="platforms">
                <h3>Platforms</h3>
                <div class="platform-tags">
                    <span class="platform-tag">
                        <span class="platform-icon"><i class="fab fa-android"></i></span>
                        Android
                    </span>
                    <span class="platform-tag">
                        <span class="platform-icon"><i class="fab fa-apple"></i></span>
                        iOS
                    </span>
                    <span class="platform-tag">
                        <span class="platform-icon"><i class="fas fa-gamepad"></i></span>
                        Nintendo Switch
                    </span>
                </div>
            </div>
        </div>
    </section>

    <section id="services">
        <div class="container">
            <h2>Services</h2>
            <p class="section-desc">From prototype sprints to publishing and platform ports.</p>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-header">
                        <span class="service-icon"><i class="fas fa-pen-fancy"></i></span>
                        <span class="service-title">Prototype Sprint (5–10 days)</span>
                    </div>
                    <p class="service-desc">Fast vertical slice: core loop, basic art/sfx, deployable build for tests.</p>
                    <span class="price-tag">from €499</span>
                </div>
                <div class="service-card">
                    <div class="service-header">
                        <span class="service-icon"><i class="fas fa-globe"></i></span>
                        <span class="service-title">Publishing & UA</span>
                    </div>
                    <p class="service-desc">Store assets, QA, soft launch, UA creatives, analytics. Rev-share friendly.</p>
                    <span class="price-tag">from €0 + rev-share</span>
                </div>
                <div class="service-card">
                    <div class="service-header">
                        <span class="service-icon"><i class="fas fa-gamepad"></i></span>
                        <span class="service-title">Porting to Nintendo Switch</span>
                    </div>
                    <p class="service-desc">Technical port, input/UI adaption, performance pass, submission support.</p>
                    <span class="price-tag">custom quote</span>
                </div>
            </div>
            <a href="mailto:azumbogames@gmail.com" class="btn-primary">Request a quote</a>
        </div>
    </section>

    <section id="games">
        <div class="container">
            <h2>Featured games</h2>
            <div class="games-grid">
                <a href="/cornettoclicker" class="game-card">
                    <div class="game-image">Game Preview</div>
                    <h3 class="game-title">Cornetto Clicker</h3>
                    <p class="game-desc">Catch croissants, dodge hazards. Snacky arcade fun.</p>
                    <p class="game-platforms">Web • Android • iOS (soon)</p>
                </a>
                <a href="/frogger" class="game-card">
                    <div class="game-image">Game Preview</div>
                    <h3 class="game-title">Frogger</h3>
                    <p class="game-desc">Classic frog-style hops with modern UX.</p>
                    <p class="game-platforms">Web • Android • iOS (soon)</p>
                </a>
            </div>
        </div>
    </section>

    <section class="about-section">
        <div class="container">
            <h2>About AZUMBO</h2>
            <p>AZUMBO is a tiny indie studio focused on snackable, high-polish games, lean tech and rapid publishing.</p>
        </div>
    </section>

    <section id="contact" class="contact-section">
        <div class="container">
            <h2>Get in touch</h2>
            <a href="mailto:azumbogames@gmail.com">
                <i class="far fa-envelope"></i>
                Email: azumbogames@gmail.com
            </a>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>© 2025 AZUMBO. All rights reserved.</p>
        </div>
    </footer>

    <div class="theme-toggle" id="themeToggle">
        <i class="fas fa-moon"></i>
    </div>

    <script>
        // Dark mode toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Check for saved theme preference or respect OS preference
        if (localStorage.getItem('theme') === 'dark' || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))) {
            body.classList.add('dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            
            if (body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
        
        // Language buttons functionality
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                langButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    </script>
</body>
</html>
