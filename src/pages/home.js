export const render = () => {
  const home = document.createElement('div');
  home.className = 'home-page';

  home.innerHTML = `
    <div class="container" style="padding-top: 2.5rem; padding-bottom: 3rem;">

      <header class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-bold font-display" style="letter-spacing: -0.04em;">GUESSS</h1>
      </header>

      <div class="game-grid">

        <!-- Epstein Files -->
        <a href="#epstein" class="game-card-link">
          <div class="card">
            <div class="placeholder-img">
              <img src="/assets/epstein_hero.jpg" alt="Epstein Files" />
            </div>
            <div class="p-5">
              <h2 class="text-xl font-bold font-display mb-2">Epstein Files or Not</h2>
              <p class="text-sm text-muted mb-3">Guess who's named in the files</p>
              <div class="flex gap-2 flex-wrap">
                <span class="tag tag-red">True/False</span>
                <span class="tag tag-blue">Celebrity</span>
              </div>
            </div>
          </div>
        </a>

        <!-- Pedro or Not -->
        <a href="#pedro" class="game-card-link">
          <div class="card">
            <div class="placeholder-img">
              <img src="/assets/pedro_hero.png" alt="Pedro or Not" />
            </div>
            <div class="p-5">
              <h2 class="text-xl font-bold font-display mb-2">Pedro or Not</h2>
              <p class="text-sm text-muted mb-3">Spot the predators</p>
              <div class="flex gap-2 flex-wrap">
                <span class="tag tag-orange">Dark</span>
                <span class="tag tag-red">Crime</span>
              </div>
            </div>
          </div>
        </a>

        <!-- Rapper Felony -->
        <a href="#rappers" class="game-card-link">
          <div class="card">
            <div class="placeholder-img">
              <img src="/assets/rappers_hero.png" alt="Rapper Felony" />
            </div>
            <div class="p-5">
              <h2 class="text-xl font-bold font-display mb-2">Rapper Felony</h2>
              <p class="text-sm text-muted mb-3">Felony or clean record?</p>
              <div class="flex gap-2 flex-wrap">
                <span class="tag tag-purple">Hip-Hop</span>
                <span class="tag tag-red">Crime</span>
              </div>
            </div>
          </div>
        </a>

        <!-- Guess the Meme -->
        <a href="#meme" class="game-card-link">
          <div class="card">
            <div class="placeholder-img">
              <img src="/assets/meme_hero.png" alt="Guess the Meme" />
            </div>
            <div class="p-5">
              <h2 class="text-xl font-bold font-display mb-2">Guess the Meme</h2>
              <p class="text-sm text-muted mb-3">5 seconds. Pick the meme.</p>
              <div class="flex gap-2 flex-wrap">
                <span class="tag tag-green">Audio</span>
                <span class="tag tag-blue">Speed</span>
              </div>
            </div>
          </div>
        </a>

      </div>
    </div>
  `;

  return home;
};

// Scoped styles
const style = document.createElement('style');
style.textContent = `
  .game-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }
  .game-card-link .card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .game-card-link .placeholder-img {
    border-radius: 0;
    border-bottom: 1px solid var(--border);
    aspect-ratio: 4/3;
  }
`;
document.head.appendChild(style);
