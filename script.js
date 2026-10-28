/**
 * EARTH BOTANICAL PORTFOLIO - CORE ENGINE
 * Features:
 * 1. Apple Glass Round Cursor (White to Transparent Glass over Text)
 * 2. Canvas Bioluminescent Spores & Botanical Particle System
 * 3. Web Audio API Generative Forest Ambiance Synthesizer
 * 4. Dynamic Profile & Position Customizer with LocalStorage
 * 5. Animated Stats Counters & FAQ Accordion
 * 6. Work Filters & High-Fidelity Video Modal
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DYNAMIC PROFILE & ROLE CUSTOMIZATION
  // =========================================================================
  const defaultProfile = {
    name: 'Aryan Singh',
    role: 'Creative Video Editor & Visual Storyteller'
  };

  const storedProfile = {
    name: localStorage.getItem('portfolio_name') || defaultProfile.name,
    role: localStorage.getItem('portfolio_role') || defaultProfile.role
  };

  function updateProfileDisplay(profile) {
    const navName = document.getElementById('nav-brand-name');
    const heroName = document.getElementById('hero-display-name');
    const heroRole = document.getElementById('hero-display-role');
    const aboutName = document.getElementById('about-name-highlight');
    const footerName = document.getElementById('footer-display-name');
    const footerRole = document.getElementById('footer-display-role');
    const footerCopy = document.getElementById('footer-copy-name');

    if (navName) navName.textContent = profile.name;
    if (heroName) heroName.textContent = profile.name;
    if (heroRole) heroRole.textContent = profile.role;
    if (aboutName) aboutName.textContent = profile.name;
    if (footerName) footerName.textContent = profile.name;
    if (footerRole) footerRole.textContent = profile.role;
    if (footerCopy) footerCopy.textContent = profile.name;

    document.title = `${profile.name} | ${profile.role} | Earth Botanical Portfolio`;
  }

  updateProfileDisplay(storedProfile);

  // Profile Modal Controls
  const profileModal = document.getElementById('profile-modal');
  const openModalBtn = document.getElementById('profile-edit-btn');
  const openMobileModalBtn = document.getElementById('mobile-profile-edit-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const saveProfileBtn = document.getElementById('save-profile-btn');
  const inputName = document.getElementById('input-name');
  const inputRole = document.getElementById('input-role');

  function openModal() {
    inputName.value = storedProfile.name;
    inputRole.value = storedProfile.role;
    profileModal.classList.remove('hidden');
  }

  function closeModal() {
    profileModal.classList.add('hidden');
  }

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (openMobileModalBtn) openMobileModalBtn.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');
    openModal();
  });
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (profileModal) {
    profileModal.addEventListener('click', (e) => {
      if (e.target === profileModal) closeModal();
    });
  }

  // Presets
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pName = btn.getAttribute('data-name');
      const pRole = btn.getAttribute('data-role');
      if (pName && inputName) inputName.value = pName;
      if (pRole && inputRole) inputRole.value = pRole;
    });
  });

  if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
      storedProfile.name = inputName.value.trim() || defaultProfile.name;
      storedProfile.role = inputRole.value.trim() || defaultProfile.role;

      localStorage.setItem('portfolio_name', storedProfile.name);
      localStorage.setItem('portfolio_role', storedProfile.role);

      updateProfileDisplay(storedProfile);
      closeModal();
    });
  }


  // =========================================================================
  // 2. APPLE GLASS ROUND CURSOR
  // Solid white circle in free space -> Morphs into transparent Apple Glass
  // lens when hovering over any text element.
  // =========================================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorFollower = document.getElementById('cursor-follower');

  let mouseX = -100, mouseY = -100;
  let dotX = -100, dotY = -100;
  let followerX = -100, followerY = -100;
  let isHoveringText = false;
  let isHoveringInteractive = false;
  let isCursorVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isCursorVisible && cursorDot) {
      isCursorVisible = true;
      cursorDot.style.opacity = '1';
      if (cursorFollower) cursorFollower.style.opacity = '1';
    }

    // Inspect hovered element to trigger Apple Glass transition
    const target = e.target;
    if (target) {
      // Check if hovering over text
      const isText = !!(
        target.tagName === 'P' ||
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.tagName === 'H4' ||
        target.tagName === 'H5' ||
        target.tagName === 'H6' ||
        target.tagName === 'SPAN' ||
        target.tagName === 'LI' ||
        target.tagName === 'BLOCKQUOTE' ||
        target.closest('p, h1, h2, h3, h4, h5, h6, span, li, blockquote')
      );

      // Check if interactive (button, link, input)
      const isInteractive = !!(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a, button, input, .work-card, .preset-btn')
      );

      if (isText !== isHoveringText) {
        isHoveringText = isText;
        if (cursorDot) {
          if (isHoveringText) {
            cursorDot.classList.add('cursor-text-glass');
            if (cursorFollower) cursorFollower.classList.add('cursor-hidden');
          } else {
            cursorDot.classList.remove('cursor-text-glass');
            if (cursorFollower) cursorFollower.classList.remove('cursor-hidden');
          }
        }
      }

      if (isInteractive !== isHoveringInteractive) {
        isHoveringInteractive = isInteractive;
        if (cursorFollower && !isHoveringText) {
          cursorFollower.style.transform = isInteractive 
            ? `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) scale(1.6)`
            : `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) scale(1)`;
        }
      }
    }
  }, { passive: true });

  // Click Feedback
  window.addEventListener('mousedown', () => {
    if (cursorDot) cursorDot.classList.add('cursor-click');
  });

  window.addEventListener('mouseup', () => {
    if (cursorDot) cursorDot.classList.remove('cursor-click');
  });

  // Smooth Render Loop using requestAnimationFrame with Spring Physics
  function renderCursor() {
    // Lerp dot
    dotX += (mouseX - dotX) * 0.28;
    dotY += (mouseY - dotY) * 0.28;

    // Lerp follower
    followerX += (mouseX - followerX) * 0.14;
    followerY += (mouseY - followerY) * 0.14;

    if (cursorDot) {
      cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
    }

    if (cursorFollower && !isHoveringText) {
      cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) ${isHoveringInteractive ? 'scale(1.6)' : 'scale(1)'}`;
    }

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);


  // =========================================================================
  // 3. AMBIENT NATURE CANVAS (Bioluminescent Spores & Emerald Particles)
  // =========================================================================
  const canvas = document.getElementById('nature-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(width < 768 ? 35 : 70, 85);

    class BotanicalSpore {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.radius = Math.random() * 2.5 + 1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -(Math.random() * 0.5 + 0.2); // Drifts upward like fireflies
        this.alpha = Math.random() * 0.6 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulse = Math.random() * Math.PI * 2;
        this.hue = Math.random() > 0.3 ? 155 : 140; // Emerald to deep mint green
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        // Subtle reaction to mouse position
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }

        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset();
        }
      }

      draw() {
        const currentAlpha = Math.max(0.1, this.alpha + Math.sin(this.pulse) * 0.25);
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 85%, 65%, ${currentAlpha})`;
        ctx.shadowColor = `hsla(${this.hue}, 90%, 60%, 0.8)`;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new BotanicalSpore());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    }
    requestAnimationFrame(animateParticles);
  }


  // =========================================================================
  // 4. GENERATIVE FOREST AMBIANCE SYNTHESIZER (Web Audio API)
  // Synthesizes lush wind, canopy rustle, and subtle chimes in real-time.
  // =========================================================================
  let audioCtx = null;
  let isAudioPlaying = false;
  let windSource = null;
  let windGain = null;

  const audioToggle = document.getElementById('ambiance-toggle');
  const audioIconOff = document.getElementById('audio-icon-off');
  const audioIconOn = document.getElementById('audio-icon-on');

  function initForestAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioCtx = new AudioContext();

    // 1. Generate Pink Noise buffer for natural wind rustling
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.05; // Gentle volume
      b6 = white * 0.115926;
    }

    windSource = audioCtx.createBufferSource();
    windSource.buffer = noiseBuffer;
    windSource.loop = true;

    // Filter to simulate soft foliage resonance
    const windFilter = audioCtx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.setValueAtTime(420, audioCtx.currentTime);

    // Filter LFO to create undulating canopy breeze
    const lfo = audioCtx.createOscillator();
    lfo.frequency.setValueAtTime(0.15, audioCtx.currentTime); // 1 cycle per 6.6s
    const lfoGain = audioCtx.createGain();
    lfoGain.gain.setValueAtTime(250, audioCtx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(windFilter.frequency);
    lfo.start();

    windGain = audioCtx.createGain();
    windGain.gain.setValueAtTime(0, audioCtx.currentTime);

    windSource.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(audioCtx.destination);
    windSource.start();
  }

  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      if (!audioCtx) {
        initForestAudio();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (!isAudioPlaying) {
        windGain.gain.setTargetAtTime(0.35, audioCtx.currentTime, 1.2);
        isAudioPlaying = true;
        if (audioIconOff) audioIconOff.classList.add('hidden');
        if (audioIconOn) audioIconOn.classList.remove('hidden');
        audioToggle.classList.add('border-emerald-400', 'bg-emerald-500/20');
      } else {
        windGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.8);
        isAudioPlaying = false;
        if (audioIconOff) audioIconOff.classList.remove('hidden');
        if (audioIconOn) audioIconOn.classList.add('hidden');
        audioToggle.classList.remove('border-emerald-400', 'bg-emerald-500/20');
      }
    });
  }


  // =========================================================================
  // 5. SCROLL PROGRESS BAR
  // =========================================================================
  const scrollProgress = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && scrollProgress) {
      const progress = window.scrollY / totalHeight;
      scrollProgress.style.transform = `scaleX(${progress})`;
    }
  }, { passive: true });


  // =========================================================================
  // 6. STATS COUNTER ANIMATION (IntersectionObserver)
  // =========================================================================
  const counters = document.querySelectorAll('.counter');
  let counted = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 2000;
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out expo
            const easeProgress = 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(easeProgress * target);

            counter.textContent = current;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              counter.textContent = target;
            }
          }

          requestAnimationFrame(updateCount);
        });
      }
    });
  }, { threshold: 0.3 });

  const statSection = document.querySelector('.stat-card');
  if (statSection) counterObserver.observe(statSection.parentElement);


  // =========================================================================
  // 7. WORKS FILTERING
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      workCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hide-card');
        } else {
          card.classList.add('hide-card');
        }
      });
    });
  });


  // =========================================================================
  // 8. VIDEO MODAL PLAYER
  // =========================================================================
  const videoModal = document.getElementById('video-modal');
  const modalVideoElement = document.getElementById('modal-video-element');
  const modalVideoTitle = document.getElementById('modal-video-title');
  const closeVideoModalBtn = document.getElementById('close-video-modal');

  document.querySelectorAll('.play-modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = trigger.getAttribute('data-video');
      const title = trigger.getAttribute('data-title');

      if (modalVideoElement && videoSrc) {
        modalVideoElement.src = videoSrc;
        modalVideoElement.play().catch(() => {});
      }
      if (modalVideoTitle && title) {
        modalVideoTitle.textContent = title;
      }
      if (videoModal) {
        videoModal.classList.remove('hidden');
      }
    });
  });

  function closeVideoModal() {
    if (videoModal) videoModal.classList.add('hidden');
    if (modalVideoElement) {
      modalVideoElement.pause();
      modalVideoElement.src = '';
    }
  }

  if (closeVideoModalBtn) closeVideoModalBtn.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideoModal();
  });


  // =========================================================================
  // 9. FAQ ACCORDION
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });


  // =========================================================================
  // 10. MOBILE MENU TOGGLE
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Update Year in Footer
  const yearElem = document.getElementById('year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();

});

