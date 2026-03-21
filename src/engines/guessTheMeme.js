export const renderGuessTheMeme = (config) => {
  const { data } = config;
  const el = document.createElement('div');
  el.className = 'meme-game animate-fade-up';

  const shuffled = [...data].sort(() => Math.random() - 0.5);

  let idx = 0;
  let score = 0;
  let timeLeft = 5;
  let timer = null;
  let answering = false;
  let audio = new Audio();

  const total = shuffled.length;

  const mount = () => {
    el.innerHTML = `
      <div class="container">
        <div class="game-topbar">
          <button class="topbar-btn" id="back-btn">←</button>
          <span class="progress-pill" id="progress">${idx + 1} / ${total}</span>
          <span class="progress-pill" id="score-display">Score: ${score}</span>
        </div>

        <div class="flex justify-center" style="padding: 1rem 0 2rem;">
          <div id="meme-zone" style="width: 100%; max-width: 420px;">
            <div class="text-center mb-6">
              <button id="sound-btn" class="select-none" style="
                width: 72px; height: 72px; border-radius: 50%;
                background: var(--orange); color: #fff;
                font-size: 1.75rem; border: none; cursor: pointer;
                box-shadow: 0 4px 20px rgba(250,140,22,0.3);
              ">🔊</button>
              <p class="font-display font-semibold text-lg mt-3">What meme is this?</p>
            </div>

            <div class="timer-track mb-6">
              <div class="timer-fill" id="timer-bar" style="width: 100%;"></div>
            </div>

            <div class="meme-grid" id="options-grid"></div>
          </div>
        </div>

        <div class="feedback-flash" id="flash"></div>
      </div>
    `;

    el.querySelector('#back-btn').onclick = () => {
      clearInterval(timer);
      audio.pause();
      location.hash = 'home';
    };

    el.querySelector('#sound-btn').onclick = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    renderRound();
  };

  const playSound = () => {
    const item = shuffled[idx];
    audio.src = item.audio;
    audio.play().catch(() => {});
  };

  const startTimer = () => {
    timeLeft = 5;
    const bar = el.querySelector('#timer-bar');
    if (bar) bar.style.width = '100%';

    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft -= 0.05;
      const pct = Math.max(0, (timeLeft / 5) * 100);
      if (bar) bar.style.width = `${pct}%`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        handleAnswer(null);
      }
    }, 50);
  };

  const renderRound = () => {
    if (idx >= total) { renderGameOver(); return; }

    const item = shuffled[idx];
    const grid = el.querySelector('#options-grid');

    grid.innerHTML = item.options.map((opt, i) => `
      <div class="meme-option" data-idx="${i}">
        <img src="${opt.image}" alt="${opt.label}" />
      </div>
    `).join('');

    grid.querySelectorAll('.meme-option').forEach(opt => {
      opt.onclick = () => handleAnswer(parseInt(opt.dataset.idx));
    });

    playSound();
    startTimer();
  };

  const handleAnswer = (pick) => {
    if (answering) return;
    answering = true;
    clearInterval(timer);
    audio.pause();

    const item = shuffled[idx];
    const correct = pick === item.correctIndex;
    const flash = el.querySelector('#flash');
    const options = el.querySelectorAll('.meme-option');

    if (correct) {
      score++;
      flash.className = 'feedback-flash success show';
      el.querySelector('#score-display').textContent = 'Score: ' + score;
      if (options[pick]) options[pick].classList.add('correct');
    } else {
      flash.className = 'feedback-flash error show';
      if (pick !== null && options[pick]) options[pick].classList.add('wrong');
      if (options[item.correctIndex]) options[item.correctIndex].classList.add('correct');
    }

    setTimeout(() => {
      flash.className = 'feedback-flash';
      answering = false;
      idx++;
      if (el.querySelector('#progress')) {
        el.querySelector('#progress').textContent = `${Math.min(idx + 1, total)} / ${total}`;
      }
      renderRound();
    }, 1000);
  };

  const renderGameOver = () => {
    el.innerHTML = `
      <div class="container flex justify-center items-center min-h-screen">
        <div class="game-over-card animate-bounce">
          <h2 class="text-3xl font-bold font-display mb-3">🎉 Nice one!</h2>
          <div class="stat-box mb-6">
            <div class="stat-value" style="font-size: 3rem; color: var(--orange);">${score}/${total}</div>
            <div class="stat-label">Memes Guessed</div>
          </div>
          <div class="flex gap-3">
            <button class="btn-primary flex-1" id="replay">Play Again</button>
            <button class="btn-secondary flex-1" id="go-home">Home</button>
          </div>
        </div>
      </div>
    `;

    el.querySelector('#replay').onclick = () => {
      idx = 0; score = 0;
      shuffled.sort(() => Math.random() - 0.5);
      mount();
    };
    el.querySelector('#go-home').onclick = () => {
      clearInterval(timer);
      audio.pause();
      location.hash = 'home';
    };
  };

  mount();
  return el;
};
