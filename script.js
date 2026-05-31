/* ============================================
   PATO DEV - script.js
   Code Quacker Portfolio - All interactions
   ============================================ */

'use strict';

// ============================================================
// TRANSLATIONS (i18n)
// ============================================================
const translations = {
  pt: {
    'nav.skills': 'Skills', 'nav.portfolio': 'Portfólio', 'nav.pricing': 'Planos',
    'nav.games': 'Games', 'nav.contact': 'Contato',
    'hero.badge': 'Disponível para projetos',
    'hero.sub': 'Turning bugs into features since 2024',
    'hero.tagline': 'Seu projeto não precisa ser um pato manco — vem voar comigo!',
    'hero.cta': 'Bora Codar?', 'hero.contact': 'Falar comigo',
    'hero.stat1': 'Projetos entregues', 'hero.stat2': 'Quacks garantidos', 'hero.stat3': 'Patos mancos',
    'skills.tag': 'O que eu sei', 'skills.title': 'Meu Arsenal',
    'skills.desc': 'Cada skill é uma pena no meu chapéu',
    'skills.frontend': 'Front-End', 'skills.backend': 'Back-End & Tools',
    'skills.proficiency': 'Nível de proficiência',
    'portfolio.tag': 'O que eu construí', 'portfolio.title': 'Portfólio',
    'portfolio.desc': 'Projetos reais, resultados reais',
    'portfolio.tag1': 'Simples mas funcional', 'portfolio.tag2': 'Interativo e saboroso',
    'portfolio.tag3': 'Experiência única', 'portfolio.demo': 'Ver Demo', 'portfolio.want': 'Quero um assim',
    'portfolio.proj1': 'Site Institucional', 'portfolio.proj2': 'Site Restaurante',
    'portfolio.proj3': 'E-commerce de Roupas',
    'portfolio.proj1desc': 'Layout estático, responsivo, otimizado para SEO.',
    'portfolio.proj2desc': 'Animações suaves, cardápio interativo, UI/UX personalizada.',
    'portfolio.proj3desc': 'Design profissional, galeria de produtos, experiência imersiva.',
    'diff.tag': 'Por que eu?', 'diff.title': 'Meus Diferenciais',
    'diff.d1': 'Code que não empaca', 'diff.d2': 'Debug mais rápido que foguete',
    'diff.d3': 'Seu projeto nas nuvens antes do almoço',
    'diff.d4': 'API integrada com tempero de mãe',
    'diff.drag': 'Arraste as ferramentas para sua caixa de projeto!',
    'diff.dropzone': 'Solte as ferramentas aqui',
    'pricing.tag': 'Investimento', 'pricing.title': 'Planos & Preços',
    'pricing.desc': 'Escolha o plano que vai fazer seu projeto voar',
    'pricing.plan1': 'Web Start', 'pricing.plan2': 'Pro Quack', 'pricing.plan3': 'Master Duck',
    'pricing.popular': 'Mais Popular', 'pricing.hire': 'Contratar',
    'pricing.f1_1': 'Site simples e estático', 'pricing.f1_2': 'Responsivo',
    'pricing.f1_3': 'Até 5 páginas', 'pricing.f1_4': 'Entrega em 7 dias',
    'pricing.f1_5': 'Animações avançadas', 'pricing.f1_6': 'Elementos 3D',
    'pricing.f2_1': 'Interações avançadas', 'pricing.f2_2': 'UI/UX personalizada',
    'pricing.f2_3': 'Animações suaves', 'pricing.f2_4': 'Até 8 páginas',
    'pricing.f2_5': 'Entrega em 14 dias', 'pricing.f2_6': 'Elementos 3D/Gamificados',
    'pricing.f3_1': 'Design único e autoral', 'pricing.f3_2': 'Experiência imersiva',
    'pricing.f3_3': 'Elementos 3D/Gamificados', 'pricing.f3_4': 'Páginas ilimitadas',
    'pricing.f3_5': 'Entrega em 21 dias', 'pricing.f3_6': 'Suporte dedicado',
    'pricing.ideal1': 'Ideal para: landing pages, currículo online',
    'pricing.ideal2': 'Ideal para: negócios locais, restaurantes',
    'pricing.ideal3': 'Ideal para: e-commerce, portfólio premium',
    'games.tag': 'Entretenimento', 'games.title': 'Mini-Games Arena',
    'games.desc': 'Enquanto eu não te respondo, se diverte aí!',
    'games.g1title': 'Bug Hunter', 'games.g2title': 'Code Runner', 'games.g3title': 'Quack Clicker',
    'games.g1desc': 'Cace os bugs e ganhe pontos! Cada bug morto troca o idioma do site.',
    'games.g2desc': 'Palavras de código caem! Clique nelas antes que cheguem ao fundo.',
    'games.g3desc': 'Clique no pato e faça ele grasnar! Confetes de código a cada quack!',
    'games.best': 'Recorde:', 'games.start': 'Começar',
    'contact.tag': 'Bora conversar?', 'contact.title': 'Contato',
    'contact.desc': 'Pronto para voar? Me chama!',
    'contact.name': 'Seu nome', 'contact.email': 'Seu email',
    'contact.message': 'Mensagem', 'contact.send': 'Enviar Mensagem',
    'footer.tagline': 'Code Quacker - JavaBeak',
    'footer.copy': '© 2024 Endreus Valério. Feito com muito Quack!'
  },
  en: {
    'nav.skills': 'Skills', 'nav.portfolio': 'Portfolio', 'nav.pricing': 'Plans',
    'nav.games': 'Games', 'nav.contact': 'Contact',
    'hero.badge': 'Available for projects',
    'hero.sub': 'Turning bugs into features since 2024',
    'hero.tagline': 'Your project doesn\'t have to be a lame duck — come fly with me!',
    'hero.cta': 'Let\'s Code!', 'hero.contact': 'Talk to me',
    'hero.stat1': 'Projects delivered', 'hero.stat2': 'Quacks guaranteed', 'hero.stat3': 'Lame ducks',
    'skills.tag': 'What I know', 'skills.title': 'My Arsenal',
    'skills.desc': 'Every skill is a feather in my cap',
    'skills.frontend': 'Front-End', 'skills.backend': 'Back-End & Tools',
    'skills.proficiency': 'Proficiency level',
    'portfolio.tag': 'What I built', 'portfolio.title': 'Portfolio',
    'portfolio.desc': 'Real projects, real results',
    'portfolio.tag1': 'Simple but functional', 'portfolio.tag2': 'Interactive & tasty',
    'portfolio.tag3': 'Unique experience', 'portfolio.demo': 'See Demo', 'portfolio.want': 'I want one!',
    'portfolio.proj1': 'Institutional Website', 'portfolio.proj2': 'Restaurant Website',
    'portfolio.proj3': 'Clothing E-commerce',
    'portfolio.proj1desc': 'Static layout, responsive, SEO-optimized.',
    'portfolio.proj2desc': 'Smooth animations, interactive menu, custom UI/UX.',
    'portfolio.proj3desc': 'Professional design, product gallery, immersive experience.',
    'diff.tag': 'Why me?', 'diff.title': 'My Differentials',
    'diff.d1': 'Code that never gets stuck', 'diff.d2': 'Debug faster than a rocket',
    'diff.d3': 'Your project in the cloud before lunch',
    'diff.d4': 'API integrated with love',
    'diff.drag': 'Drag tools to your project toolbox!',
    'diff.dropzone': 'Drop tools here',
    'pricing.tag': 'Investment', 'pricing.title': 'Plans & Pricing',
    'pricing.desc': 'Choose the plan that will make your project soar',
    'pricing.plan1': 'Web Start', 'pricing.plan2': 'Pro Quack', 'pricing.plan3': 'Master Duck',
    'pricing.popular': 'Most Popular', 'pricing.hire': 'Hire Me',
    'pricing.f1_1': 'Simple static site', 'pricing.f1_2': 'Responsive',
    'pricing.f1_3': 'Up to 5 pages', 'pricing.f1_4': '7-day delivery',
    'pricing.f1_5': 'Advanced animations', 'pricing.f1_6': '3D elements',
    'pricing.f2_1': 'Advanced interactions', 'pricing.f2_2': 'Custom UI/UX',
    'pricing.f2_3': 'Smooth animations', 'pricing.f2_4': 'Up to 8 pages',
    'pricing.f2_5': '14-day delivery', 'pricing.f2_6': '3D/Gamified elements',
    'pricing.f3_1': 'Unique authorial design', 'pricing.f3_2': 'Immersive experience',
    'pricing.f3_3': '3D/Gamified elements', 'pricing.f3_4': 'Unlimited pages',
    'pricing.f3_5': '21-day delivery', 'pricing.f3_6': 'Dedicated support',
    'pricing.ideal1': 'Ideal for: landing pages, online resume',
    'pricing.ideal2': 'Ideal for: local businesses, restaurants',
    'pricing.ideal3': 'Ideal for: e-commerce, premium portfolio',
    'games.tag': 'Entertainment', 'games.title': 'Mini-Games Arena',
    'games.desc': 'While I don\'t reply, entertain yourself!',
    'games.g1title': 'Bug Hunter', 'games.g2title': 'Code Runner', 'games.g3title': 'Quack Clicker',
    'games.g1desc': 'Hunt bugs and earn points! Each killed bug changes site language.',
    'games.g2desc': 'Code words fall! Click them before they hit the ground.',
    'games.g3desc': 'Click the duck and make it quack! Code confetti at every quack!',
    'games.best': 'Best:', 'games.start': 'Start',
    'contact.tag': 'Let\'s talk?', 'contact.title': 'Contact',
    'contact.desc': 'Ready to fly? Hit me up!',
    'contact.name': 'Your name', 'contact.email': 'Your email',
    'contact.message': 'Message', 'contact.send': 'Send Message',
    'footer.tagline': 'Code Quacker - JavaBeak',
    'footer.copy': '© 2024 Endreus Valério. Made with lots of Quack!'
  }
};

// Current state
let currentLang = localStorage.getItem('pato-lang') || 'pt';
let currentTheme = localStorage.getItem('pato-theme') || 'dark';
let focusMode = false;
let startTime = Date.now();

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  initScrollEffects();
  initIntersectionObserver();
  initTypewriter();
  initHeroCanvas();
  initDragDrop();
  initLikes();
  initContactForm();
  initCodingTimer();
  initKeyboardShortcuts();
  initTiltCards();
  loadGameScores();
  initQuackButton();
});

// ============================================================
// THEME
// ============================================================
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('pato-theme', theme);
}

document.getElementById('themeToggle')?.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
});

// ============================================================
// LANGUAGE
// ============================================================
function applyLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  const flag = document.getElementById('langFlag');
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'pt' ? 'PT' : 'EN';
  localStorage.setItem('pato-lang', lang);
  // Re-init typewriter words
  restartTypewriter();
}

document.getElementById('langToggle')?.addEventListener('click', () => {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
});

// ============================================================
// SCROLL EFFECTS
// ============================================================
function initScrollEffects() {
  const scrollProgress = document.getElementById('scrollProgress');
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const pct = (scrolled / maxScroll) * 100;

    if (scrollProgress) scrollProgress.style.width = pct + '%';
    if (header) header.classList.toggle('scrolled', scrolled > 60);
    if (backToTop) backToTop.classList.toggle('visible', scrolled > 400);

    // Parallax on hero
    const heroCanvas = document.getElementById('heroCanvas');
    if (heroCanvas && scrolled < window.innerHeight) {
      heroCanvas.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
  }, { passive: true });

  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
// INTERSECTION OBSERVER
// ============================================================
function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Animate skill fills
        entry.target.querySelectorAll?.('.skill-fill').forEach(fill => {
          fill.style.width = fill.style.getPropertyValue('--fill') || '0%';
        });
        // Animate progress bars
        entry.target.querySelectorAll?.('.progress-bar-fill').forEach(bar => {
          const w = bar.getAttribute('data-width');
          bar.style.setProperty('--target', w);
          setTimeout(() => bar.style.width = w + '%', 100);
        });
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  // Also observe skill cards for bar animation
  document.querySelectorAll('.skill-card').forEach(card => {
    const cardObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        card.classList.add('visible');
        const fill = card.querySelector('.skill-fill');
        if (fill) fill.style.width = getComputedStyle(fill).getPropertyValue('--fill') || '0%';
      }
    }, { threshold: 0.3 });
    cardObs.observe(card);
  });
}

// ============================================================
// TYPEWRITER
// ============================================================
const typewriterWords = {
  pt: ['Code Quacker', 'JavaBeak', 'Pato Dev', 'Frontend Dev'],
  en: ['Code Quacker', 'JavaBeak', 'Pato Dev', 'Frontend Dev']
};
let twIndex = 0, twCharIndex = 0, twDeleting = false, twTimeout = null;

function typewriterTick() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const words = typewriterWords[currentLang];
  const word = words[twIndex];

  if (twDeleting) {
    el.textContent = word.substring(0, twCharIndex - 1);
    twCharIndex--;
    if (twCharIndex <= 0) {
      twDeleting = false;
      twIndex = (twIndex + 1) % words.length;
      twTimeout = setTimeout(typewriterTick, 400);
      return;
    }
  } else {
    el.textContent = word.substring(0, twCharIndex + 1);
    twCharIndex++;
    if (twCharIndex >= word.length) {
      twDeleting = true;
      twTimeout = setTimeout(typewriterTick, 1800);
      return;
    }
  }
  twTimeout = setTimeout(typewriterTick, twDeleting ? 60 : 110);
}

function initTypewriter() {
  twIndex = 0; twCharIndex = 0; twDeleting = false;
  clearTimeout(twTimeout);
  typewriterTick();
}

function restartTypewriter() {
  clearTimeout(twTimeout);
  twIndex = 0; twCharIndex = 0; twDeleting = false;
  typewriterTick();
}

// ============================================================
// HERO CANVAS (Three.js + Particles)
// ============================================================
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas || !window.THREE) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
  camera.position.z = 5;

  // Resize
  function resize() {
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // Lighting
  const ambient = new THREE.AmbientLight(0xffd166, 0.8);
  scene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xf4a261, 1.5);
  dirLight.position.set(5, 5, 5);
  scene.add(dirLight);

  // Main rotating cube (code box)
  const geo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
  const mat = new THREE.MeshPhongMaterial({
    color: 0xffd166,
    wireframe: false,
    transparent: true,
    opacity: 0.15,
    side: THREE.DoubleSide
  });
  const wireGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0xffd166, wireframe: true, transparent: true, opacity: 0.4 });
  const cube = new THREE.Mesh(geo, mat);
  const wireCube = new THREE.Mesh(wireGeo, wireMat);
  cube.position.set(-2.5, 0.5, -1);
  wireCube.position.copy(cube.position);
  scene.add(cube);
  scene.add(wireCube);

  // Floating particles (code symbols)
  const symbols = ['<>', '{}', '()', ';', '=>', '[]', '//'];
  const particles = [];
  for (let i = 0; i < 40; i++) {
    const partGeo = new THREE.SphereGeometry(0.04 + Math.random() * 0.06, 6, 6);
    const partMat = new THREE.MeshBasicMaterial({
      color: Math.random() > 0.5 ? 0xffd166 : 0xf4a261,
      transparent: true,
      opacity: 0.3 + Math.random() * 0.5
    });
    const part = new THREE.Mesh(partGeo, partMat);
    part.position.set(
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 5 - 2
    );
    part.userData = {
      speed: 0.005 + Math.random() * 0.01,
      amplitude: 0.5 + Math.random() * 1.5,
      phase: Math.random() * Math.PI * 2,
      originalY: part.position.y
    };
    scene.add(part);
    particles.push(part);
  }

  // Mouse tracking for parallax
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Animate
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    cube.rotation.x = t * 0.4;
    cube.rotation.y = t * 0.6;
    wireCube.rotation.copy(cube.rotation);

    // Parallax effect
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    // Float particles
    particles.forEach(p => {
      p.position.y = p.userData.originalY + Math.sin(t * p.userData.speed * 60 + p.userData.phase) * p.userData.amplitude * 0.3;
      p.rotation.z = t * 0.5;
    });

    renderer.render(scene, camera);
  }
  animate();
}

// ============================================================
// HAMBURGER MENU
// ============================================================
document.getElementById('hamburger')?.addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('navLinks')?.classList.toggle('open');
});

// Close on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('hamburger')?.classList.remove('active');
    document.getElementById('navLinks')?.classList.remove('open');
  });
});

// ============================================================
// DRAG & DROP
// ============================================================
function initDragDrop() {
  const dropZone = document.getElementById('dropZone');
  const tools = document.querySelectorAll('.drag-item');

  tools.forEach(tool => {
    tool.addEventListener('dragstart', e => {
      tool.classList.add('dragging');
      e.dataTransfer.setData('text/plain', tool.getAttribute('data-tool'));
    });
    tool.addEventListener('dragend', () => tool.classList.remove('dragging'));
  });

  if (!dropZone) return;

  dropZone.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const toolName = e.dataTransfer.getData('text/plain');
    const dragged = document.querySelector(`.drag-item[data-tool="${toolName}"]`);
    if (dragged) {
      // Remove icon text, just add chip to drop zone
      const chip = document.createElement('span');
      chip.className = 'dropped-item';
      chip.textContent = toolName.toUpperCase();
      dropZone.appendChild(chip);
      dragged.style.opacity = '0.3';
      dragged.setAttribute('draggable', 'false');
    }
  });

  // Touch support for mobile
  tools.forEach(tool => {
    tool.addEventListener('touchstart', e => {
      tool.classList.add('dragging');
    }, { passive: true });
    tool.addEventListener('touchend', e => {
      tool.classList.remove('dragging');
      const touch = e.changedTouches[0];
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      if (el?.closest('#dropZone')) {
        const chip = document.createElement('span');
        chip.className = 'dropped-item';
        chip.textContent = tool.getAttribute('data-tool').toUpperCase();
        dropZone.appendChild(chip);
        tool.style.opacity = '0.3';
        tool.setAttribute('draggable', 'false');
      }
    }, { passive: true });
  });
}

// ============================================================
// LIKES
// ============================================================
function initLikes() {
  const savedLikes = JSON.parse(localStorage.getItem('pato-likes') || '{}');

  document.querySelectorAll('.like-btn').forEach((btn, i) => {
    const key = 'proj-' + i;
    let count = savedLikes[key] || 0;
    let liked = false;
    btn.querySelector('.like-count').textContent = count;

    btn.addEventListener('click', () => {
      if (liked) {
        liked = false;
        count--;
        btn.classList.remove('liked');
        btn.querySelector('i').className = 'fa-regular fa-heart';
      } else {
        liked = true;
        count++;
        btn.classList.add('liked');
        btn.querySelector('i').className = 'fa-solid fa-heart';
        spawnHearts(btn);
      }
      btn.querySelector('.like-count').textContent = count;
      savedLikes[key] = count;
      localStorage.setItem('pato-likes', JSON.stringify(savedLikes));
    });
  });
}

function spawnHearts(btn) {
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement('span');
    heart.textContent = '♥';
    heart.style.cssText = `
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      font-size: ${12 + Math.random() * 12}px;
      color: #e63946;
      animation: heartFly 1s ease-out forwards;
      left: ${btn.getBoundingClientRect().left + Math.random() * btn.offsetWidth}px;
      top: ${btn.getBoundingClientRect().top}px;
    `;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }

  if (!document.getElementById('heartFlyStyle')) {
    const s = document.createElement('style');
    s.id = 'heartFlyStyle';
    s.textContent = `@keyframes heartFly { to { transform: translateY(-60px) scale(0); opacity: 0; } }`;
    document.head.appendChild(s);
  }
}

// ============================================================
// TILT CARDS
// ============================================================
function initTiltCards() {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const tiltX = ((y - cy) / cy) * 8;
      const tiltY = ((cx - x) / cx) * 8;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ============================================================
// CONTACT FORM
// ============================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
      if (field.type === 'email' && field.value && !field.value.includes('@')) {
        field.classList.add('error');
        valid = false;
      }
    });

    if (valid) {
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.querySelector('span').textContent;
      btn.querySelector('span').textContent = currentLang === 'pt' ? 'Enviado! ✓' : 'Sent! ✓';
      btn.style.background = '#2ecc71';
      spawnGlobalConfetti();
      setTimeout(() => {
        btn.querySelector('span').textContent = origText;
        btn.style.background = '';
        form.reset();
      }, 2500);
    }
  });
}

// ============================================================
// CODING TIMER
// ============================================================
function initCodingTimer() {
  function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
    const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
    const s = String(elapsed % 60).padStart(2, '0');
    const el = document.getElementById('timerDisplay');
    if (el) el.textContent = `${h}:${m}:${s}`;
  }
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
function initKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    // F = focus mode
    if (e.key === 'f' || e.key === 'F') {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      focusMode = !focusMode;
      document.body.classList.toggle('focus-mode', focusMode);
    }
    // T = theme toggle
    if (e.key === 't' || e.key === 'T') {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    }
    // ESC = close modals
    if (e.key === 'Escape') {
      document.querySelectorAll('.game-modal.open').forEach(m => m.classList.remove('open'));
      stopAllGames();
    }
  });
}

// ============================================================
// QUACK BUTTON
// ============================================================
function initQuackButton() {
  const btn = document.getElementById('quackBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    // Web Audio quack
    playQuackSound();
    spawnGlobalConfetti();
    btn.style.transform = 'scale(0.9) rotate(-3deg)';
    setTimeout(() => btn.style.transform = '', 200);
  });
}

function playQuackSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(280, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.12);
    osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  } catch(e) {}
}

// ============================================================
// CONFETTI
// ============================================================
function spawnGlobalConfetti() {
  const container = document.getElementById('globalConfetti');
  if (!container) return;
  const codeSymbols = ['<>', '{}', '()', '=>', '[]', ';', 'npm', 'git', 'JS', 'CSS'];
  const colors = ['#FFD166', '#F4A261', '#264653', '#2ecc71', '#e74c3c'];

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const piece = document.createElement('div');
      piece.className = 'g-confetti-piece';
      const isCode = Math.random() > 0.5;
      if (isCode) {
        piece.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        piece.style.cssText = `
          position: absolute;
          font-family: 'Space Mono', monospace;
          font-size: ${8 + Math.random() * 8}px;
          font-weight: 700;
          color: ${colors[Math.floor(Math.random() * colors.length)]};
          left: ${Math.random() * 100}%;
          top: -30px;
          --dx: ${(Math.random() - 0.5) * 200}px;
          animation: gConfettiFall ${1.5 + Math.random() * 1.5}s ease-out forwards;
          pointer-events: none;
        `;
      } else {
        piece.style.cssText = `
          position: absolute;
          width: ${6 + Math.random() * 8}px;
          height: ${6 + Math.random() * 8}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
          left: ${Math.random() * 100}%;
          top: -20px;
          --dx: ${(Math.random() - 0.5) * 300}px;
          animation: gConfettiFall ${1.5 + Math.random() * 1.5}s ease-out forwards;
          pointer-events: none;
        `;
      }
      container.appendChild(piece);
      setTimeout(() => piece.remove(), 3000);
    }, i * 40);
  }
}

// ============================================================
// PLAN CONFETTI
// ============================================================
window.planConfetti = function(btn) {
  spawnGlobalConfetti();
  // Redirect to WhatsApp
  setTimeout(() => {
    window.open('https://wa.me/5521993245046?text=Quero%20um%20site!', '_blank');
  }, 400);
};

// ============================================================
// GAMES
// ============================================================
function loadGameScores() {
  const scores = JSON.parse(localStorage.getItem('pato-scores') || '{}');
  if (scores.bugHunter) document.getElementById('bugBestScore').textContent = scores.bugHunter;
  if (scores.codeRunner) document.getElementById('codeRunnerBestScore').textContent = scores.codeRunner;
  if (scores.quackClicker) document.getElementById('quackBestScore').textContent = scores.quackClicker;
}

function saveScore(game, score) {
  const scores = JSON.parse(localStorage.getItem('pato-scores') || '{}');
  if (!scores[game] || score > scores[game]) {
    scores[game] = score;
    localStorage.setItem('pato-scores', JSON.stringify(scores));
    loadGameScores();
    return true; // new record
  }
  return false;
}

window.openGame = function(gameId) {
  const modalMap = { bugHunter: 'bugHunterModal', codeRunner: 'codeRunnerModal', quackClicker: 'quackClickerModal' };
  const modal = document.getElementById(modalMap[gameId]);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeGame = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
  stopAllGames();
};

function stopAllGames() {
  stopBugHunter();
  stopCodeRunner();
}

// ============================================================
// GAME 1: BUG HUNTER
// ============================================================
let bhInterval = null, bhTimerInt = null, bhScore = 0, bhTime = 30, bhRunning = false;

window.startBugHunter = function() {
  stopBugHunter();
  bhScore = 0; bhTime = 30; bhRunning = true;
  document.getElementById('bhScore').textContent = 0;
  document.getElementById('bhTimer').textContent = 30;
  document.getElementById('bhStartBtn').disabled = true;

  const area = document.getElementById('bugHunterArea');
  area.innerHTML = '';

  const bugIcons = ['🐛', '🐞', '🕷️', '🦟', '🪲'];
  function spawnBug() {
    if (!bhRunning) return;
    const bug = document.createElement('div');
    bug.className = 'game-bug';
    bug.textContent = bugIcons[Math.floor(Math.random() * bugIcons.length)];
    bug.style.left = (5 + Math.random() * 85) + '%';
    bug.style.top = (5 + Math.random() * 85) + '%';
    area.appendChild(bug);

    bug.addEventListener('click', () => {
      if (!bhRunning) return;
      bhScore++;
      document.getElementById('bhScore').textContent = bhScore;
      bug.style.transform = 'scale(0)';
      bug.style.transition = '0.2s';
      setTimeout(() => bug.remove(), 200);

      // Bug kill toggles language!
      if (bhScore % 3 === 0) {
        applyLang(currentLang === 'pt' ? 'en' : 'pt');
      }

      // Spawn new bug
      setTimeout(spawnBug, 800 + Math.random() * 1200);
    });

    // Auto remove after 4s
    setTimeout(() => { if (bug.parentNode) bug.remove(); }, 4000);
  }

  // Spawn initial bugs
  for (let i = 0; i < 4; i++) setTimeout(spawnBug, i * 400);
  bhInterval = setInterval(spawnBug, 1500);

  bhTimerInt = setInterval(() => {
    bhTime--;
    document.getElementById('bhTimer').textContent = bhTime;
    if (bhTime <= 0) {
      endBugHunter();
    }
  }, 1000);
};

function endBugHunter() {
  bhRunning = false;
  stopBugHunter();
  const area = document.getElementById('bugHunterArea');
  area.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:'Luckiest Guy',cursive;font-size:2rem;color:var(--yellow);flex-direction:column;gap:16px">
    <span>Fim de jogo!</span><span style="font-size:1.2rem;font-family:Poppins">Score: ${bhScore}</span>
  </div>`;
  const isRecord = saveScore('bugHunter', bhScore);
  document.getElementById('bhBest').textContent = JSON.parse(localStorage.getItem('pato-scores') || '{}').bugHunter || 0;
  if (isRecord && bhScore > 0) { spawnGlobalConfetti(); }
  document.getElementById('bhStartBtn').disabled = false;
}

function stopBugHunter() {
  bhRunning = false;
  clearInterval(bhInterval);
  clearInterval(bhTimerInt);
  bhInterval = null; bhTimerInt = null;
}

// Update best display when modal opens
document.getElementById('bugHunterModal')?.addEventListener('click', () => {
  const scores = JSON.parse(localStorage.getItem('pato-scores') || '{}');
  if (scores.bugHunter) document.getElementById('bhBest').textContent = scores.bugHunter;
});

// ============================================================
// GAME 2: CODE RUNNER
// ============================================================
let crInterval = null, crScore = 0, crLives = 3, crRunning = false;
const codeWords = ['if()', 'let', 'const', 'var', 'for()', 'while()', 'fn()', 'null', 'true', 'fetch()', 'async', 'await', '.map()', '.filter()', 'class', 'return', 'import', 'export'];

window.startCodeRunner = function() {
  stopCodeRunner();
  crScore = 0; crLives = 3; crRunning = true;
  document.getElementById('crScore').textContent = 0;
  document.getElementById('crLives').textContent = 3;
  document.getElementById('crStartBtn').disabled = true;

  const area = document.getElementById('codeRunnerArea');
  area.innerHTML = '<div class="cr-floor"></div>';

  function spawnWord() {
    if (!crRunning) return;
    const word = document.createElement('div');
    word.className = 'falling-word';
    word.textContent = codeWords[Math.floor(Math.random() * codeWords.length)];
    word.style.left = (5 + Math.random() * 80) + '%';
    word.style.top = '-30px';
    area.appendChild(word);

    const speed = 60 + crScore * 2; // Gets faster
    const duration = Math.max(2000, 5000 - crScore * 50);
    word.style.transition = `top ${duration}ms linear`;
    setTimeout(() => word.style.top = (area.offsetHeight - 40) + 'px', 50);

    // Missed word
    const missTimeout = setTimeout(() => {
      if (word.parentNode) {
        word.remove();
        crLives--;
        document.getElementById('crLives').textContent = crLives;
        if (crLives <= 0) endCodeRunner();
      }
    }, duration + 100);

    word.addEventListener('click', () => {
      clearTimeout(missTimeout);
      if (!crRunning) return;
      crScore++;
      document.getElementById('crScore').textContent = crScore;
      word.classList.add('clicked');
      setTimeout(() => word.remove(), 300);
    });
  }

  crInterval = setInterval(spawnWord, Math.max(600, 1500 - crScore * 10));
  setTimeout(spawnWord, 200);
};

function endCodeRunner() {
  crRunning = false;
  stopCodeRunner();
  const area = document.getElementById('codeRunnerArea');
  area.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:'Luckiest Guy',cursive;font-size:2rem;color:var(--yellow);flex-direction:column;gap:16px">
    <span>Game Over!</span><span style="font-size:1.2rem;font-family:Poppins">Score: ${crScore}</span>
  </div>`;
  const isRecord = saveScore('codeRunner', crScore);
  document.getElementById('crBest').textContent = JSON.parse(localStorage.getItem('pato-scores') || '{}').codeRunner || 0;
  if (isRecord && crScore > 0) spawnGlobalConfetti();
  document.getElementById('crStartBtn').disabled = false;
}

function stopCodeRunner() {
  crRunning = false;
  clearInterval(crInterval);
  crInterval = null;
}

// ============================================================
// GAME 3: QUACK CLICKER
// ============================================================
let qcScore = 0;

window.quackClick = function(e) {
  qcScore++;
  document.getElementById('qcScore').textContent = qcScore;
  saveScore('quackClicker', qcScore);
  document.getElementById('qcBest').textContent = JSON.parse(localStorage.getItem('pato-scores') || '{}').quackClicker || 0;

  // Quack sound
  playQuackSound();

  // Show QUACK text
  const quackText = document.getElementById('quackText');
  quackText.classList.remove('show');
  void quackText.offsetWidth; // reflow
  quackText.classList.add('show');

  // Duck shake
  const duck = document.getElementById('quackDuck');
  duck.style.transform = `rotate(${(Math.random() - 0.5) * 20}deg) scale(0.92)`;
  setTimeout(() => duck.style.transform = '', 200);

  // Confetti burst
  spawnQuackConfetti(e);

  // Change accent color periodically
  if (qcScore % 10 === 0) {
    const colors = ['#FFD166', '#F4A261', '#2ecc71', '#e74c3c', '#9b59b6'];
    document.documentElement.style.setProperty('--yellow', colors[Math.floor(Math.random() * colors.length)]);
    setTimeout(() => document.documentElement.style.removeProperty('--yellow'), 3000);
    spawnGlobalConfetti();
  }
};

function spawnQuackConfetti(e) {
  const container = document.getElementById('confettiContainer');
  if (!container) return;
  const symbols = ['<>', '{}', 'JS', 'Q!', '🦆', '⚡', ';;'];
  const colors = ['#FFD166', '#F4A261', '#2ecc71'];

  for (let i = 0; i < 12; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const angle = (Math.random() * 360) * (Math.PI / 180);
    const dist = 60 + Math.random() * 80;
    piece.style.cssText = `
      left: 50%;
      top: 50%;
      color: ${colors[Math.floor(Math.random() * colors.length)]};
      font-size: ${8 + Math.random() * 8}px;
      --dx: ${Math.cos(angle) * dist}px;
      --dy: ${Math.sin(angle) * dist}px;
      animation: confettiFall 1s ease-out forwards;
    `;
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 1000);
  }
}

// ============================================================
// ACTIVE NAV LINK
// ============================================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) link.style.color = 'var(--yellow)';
  });
}, { passive: true });

// ============================================================
// SMOOTH SCROLL FOR NAV
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================================
// MOUSEMOVE PARALLAX ON AVATAR
// ============================================================
document.addEventListener('mousemove', e => {
  const container = document.getElementById('avatarContainer');
  if (!container) return;
  const rect = container.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = (e.clientX - centerX) / window.innerWidth;
  const dy = (e.clientY - centerY) / window.innerHeight;
  container.style.transform = `translate(${dx * 15}px, ${dy * 10}px)`;
});

// ============================================================
// WAVE BUTTONS — Ripple effect
// ============================================================
document.querySelectorAll('.wave-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute;left:${x}px;top:${y}px;
      width:0;height:0;border-radius:50%;
      background:rgba(255,255,255,0.4);
      transform:translate(-50%,-50%);
      animation:ripple 0.6s ease-out forwards;
      pointer-events:none;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

// Ripple keyframes
if (!document.getElementById('rippleStyle')) {
  const s = document.createElement('style');
  s.id = 'rippleStyle';
  s.textContent = `@keyframes ripple { to { width: 300px; height: 300px; opacity: 0; } }`;
  document.head.appendChild(s);
}

// ============================================================
// MAGNETIC CARDS EFFECT
// ============================================================
document.querySelectorAll('.diferencial-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `translateY(-6px) translate(${x * 0.08}px, ${y * 0.08}px) rotate(-1deg)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

// ============================================================
// INITIAL LOAD ANIMATION
// ============================================================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => { document.body.style.opacity = '1'; }, 100);

  // Animate hero elements in sequence
  const heroEls = ['.hero-badge', '.hero-title', '.hero-sub', '.hero-tagline', '.hero-actions', '.hero-stats'];
  heroEls.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`;
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 200 + i * 120);
    }
  });
});

console.log(`
%c 🦆 PATO DEV - CODE QUACKER 🦆
%c Olá dev! Encontrou o Easter Egg do console!
%c Press F = Focus Mode | Press T = Toggle Theme
%c mailto: endreus.dev007@gmail.com
`, 
'font-size:20px;font-family:monospace;color:#FFD166;font-weight:bold;',
'color:#F4A261;font-size:14px;',
'color:#64b5f6;font-size:12px;',
'color:#888;font-size:11px;'
);