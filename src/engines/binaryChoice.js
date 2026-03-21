export const renderBinaryChoiceGame = (config) => {
  const { data, question, yesLabel, noLabel } = config;
  const el = document.createElement('div');
  el.className = 'binary-game animate-fade-up';

  // Shuffle data
  const shuffled = [...data].sort(() => Math.random() - 0.5);

  let idx = 0;
  let score = 0;
  let streak = 0;
  let bestStreak = 0;
  let answering = false;

  const total = shuffled.length;

  const mount = () => {
    el.innerHTML = `
      <div class="container">
        <div class="game-topbar">
          <button class="topbar-btn" id="back-btn">←</button>
          <span class="progress-pill" id="progress">${idx + 1} / ${total}</span>
          <span class="streak-pill" id="streak-display">🔥 ${streak}</span>
        </div>

        <div class="flex justify-center" style="padding: 1rem 0 3rem;">
          <div id="card-zone" style="width: 100%; max-width: 380px;"></div>
        </div>

        <div class="feedback-flash" id="flash"></div>
      </div>
    `;

    el.querySelector('#back-btn').onclick = () => { location.hash = 'home'; };

    renderCard();
  };

  const renderCard = () => {
    if (idx >= total) { renderGameOver(); return; }

    const item = shuffled[idx];
    const zone = el.querySelector('#card-zone');

    zone.innerHTML = `
      <div class="card animate-reveal" style="border-radius: var(--radius-xl);">
        <div class="placeholder-img" style="aspect-ratio: 1/1;">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="p-6 text-center">
          <h3 class="text-2xl font-bold font-display">${item.name}</h3>
          <p class="text-sm text-muted mt-1">${item.info}</p>
          <p class="font-display font-semibold text-lg mt-6 mb-4" style="color: var(--text);">${question}</p>
          <div class="flex gap-3">
            <button class="btn-no flex-1" id="btn-no">${noLabel}</button>
            <button class="btn-yes flex-1" id="btn-yes">${yesLabel}</button>
          </div>
        </div>
      </div>
    `;

    zone.querySelector('#btn-yes').onclick = () => handleAnswer(true);
    zone.querySelector('#btn-no').onclick = () => handleAnswer(false);
  };

  const handleAnswer = (userPick) => {
    if (answering) return;
    answering = true;

    const correct = userPick === shuffled[idx].answer;
    const flash = el.querySelector('#flash');
    const card = el.querySelector('.card');

    if (correct) {
      score++;
      streak++;
      if (streak > bestStreak) bestStreak = streak;
      flash.className = 'feedback-flash success show';
      el.querySelector('#streak-display').textContent = '🔥 ' + streak;
      el.querySelector('#streak-display').classList.add('animate-pop');
    } else {
      streak = 0;
      flash.className = 'feedback-flash error show';
      el.querySelector('#streak-display').textContent = '🔥 0';
      if (card) card.classList.add('animate-shake');
    }

    setTimeout(() => {
      flash.className = 'feedback-flash';
      answering = false;
      idx++;
      if (el.querySelector('#progress')) {
        el.querySelector('#progress').textContent = `${Math.min(idx + 1, total)} / ${total}`;
      }
      renderCard();
    }, 700);
  };

  const renderGameOver = () => {
    const accuracy = Math.round((score / total) * 100);
    el.innerHTML = `
      <div class="container flex justify-center items-center min-h-screen">
        <div class="game-over-card animate-bounce">
          <h2 class="text-3xl font-bold font-display mb-6">Round Over</h2>
          <div class="flex gap-3 mb-8">
            <div class="stat-box flex-1">
              <div class="stat-value">${score}/${total}</div>
              <div class="stat-label">Score</div>
            </div>
            <div class="stat-box flex-1">
              <div class="stat-value" style="color: ${accuracy >= 70 ? 'var(--green)' : 'var(--red)'}">${accuracy}%</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-box flex-1">
              <div class="stat-value" style="color: var(--orange)">${bestStreak}</div>
              <div class="stat-label">Best Streak</div>
            </div>
          </div>
          <div class="flex gap-3">
            <button class="btn-primary flex-1" id="replay">Play Again</button>
            <button class="btn-secondary flex-1" id="go-home">Home</button>
          </div>
        </div>
      </div>
    `;

    el.querySelector('#replay').onclick = () => {
      idx = 0; score = 0; streak = 0; bestStreak = 0;
      shuffled.sort(() => Math.random() - 0.5);
      mount();
    };
    el.querySelector('#go-home').onclick = () => { location.hash = 'home'; };
  };

  mount();
  return el;
};
