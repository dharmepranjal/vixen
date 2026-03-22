export const render = () => {
  const home = document.createElement('div');
  home.className = 'home-page';

  home.innerHTML = `
    <div class="container tabloid-layout">

      <header class="tabloid-header text-center animate-reveal">
        <h1 class="giant-headline font-display uppercase">GUESSS</h1>
        <p class="tabloid-subtitle uppercase">The Internet's Most Unhinged Quiz Show &bull; Vol. 69</p>
        <div class="tabloid-divider"></div>
      </header>

      <div class="editorial-grid">

        <!-- Epstein Files (Hero Card) -->
        <a href="#epstein" class="hero-clipping-link animate-reveal" style="animation-delay: 0.1s">
          <div class="card clipping-style">
            <span class="stamp">★ EXCLUSIVE ★</span>
            <div class="clipping-img-wrap">
              <img src="/assets/epstein_hero.jpg" alt="Epstein Files" class="clipping-img" />
              <div class="clipping-overlay">
                <h2 class="text-4xl font-display uppercase mb-2">The Epstein Files: Who's Named?</h2>
                <div class="flex gap-2">
                  <span class="tag tag-red">TRUE/FALSE</span>
                  <span class="tag tag-blue">CELEBRITY</span>
                </div>
              </div>
            </div>
            <div class="p-6">
              <p class="text-lg italic text-secondary">A list leaked from the shadows. Guess which elites were actually mentioned in the infamous files. 12 names, no second chances.</p>
            </div>
          </div>
        </a>

        <div class="secondary-grid">
          <!-- Pedo or Not -->
          <a href="#pedo" class="clipping-link animate-reveal" style="animation-delay: 0.2s; --rot: 2deg">
            <div class="card clipping-style">
              <span class="stamp" style="background: var(--ink)">BREAKING</span>
              <div class="clipping-img-wrap mini">
                <img src="/assets/pedo_hero.png" alt="Pedo or Not" class="clipping-img" />
              </div>
              <div class="p-5">
                <h2 class="text-2xl font-display uppercase mb-2">Pedo or Not?</h2>
                <p class="text-sm text-secondary mb-3">Spot the predators hiding in plain sight. Use your gut.</p>
                <div class="flex gap-2">
                  <span class="tag">CRIME</span>
                  <span class="tag tag-red">DARK</span>
                </div>
              </div>
            </div>
          </a>

          <!-- Rapper Felony -->
          <a href="#rappers" class="clipping-link animate-reveal" style="animation-delay: 0.3s; --rot: -1.5deg">
            <div class="card clipping-style">
              <span class="stamp">⚠ ALERT</span>
              <div class="clipping-img-wrap mini">
                <img src="/assets/rappers_hero.png" alt="Rapper Felony" class="clipping-img" />
              </div>
              <div class="p-5">
                <h2 class="text-2xl font-display uppercase mb-2">Rapper Felony</h2>
                <p class="text-sm text-secondary mb-3">Rap sheet or clean record? The answer might surprise you.</p>
                <div class="flex gap-2">
                  <span class="tag">HIP-HOP</span>
                  <span class="tag tag-red">FELON</span>
                </div>
              </div>
            </div>
          </a>

          <!-- Guess the Meme -->
          <a href="#meme" class="clipping-link animate-reveal" style="animation-delay: 0.4s; --rot: 1deg">
            <div class="card clipping-style">
              <span class="stamp" style="background: var(--mustard); color: black;">VIRAL 🔥</span>
              <div class="clipping-img-wrap mini">
                <img src="/assets/meme_hero.png" alt="Guess the Meme" class="clipping-img" />
              </div>
              <div class="p-5">
                <h2 class="text-2xl font-display uppercase mb-2">Guess Meme</h2>
                <p class="text-sm text-secondary mb-3">5 seconds. One clip. Can you identify the internet's soul?</p>
                <div class="flex gap-2">
                  <span class="tag tag-blue">AUDIO</span>
                  <span class="tag">SPEED</span>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>

      <footer class="text-center mt-12 mb-8 animate-reveal" style="animation-delay: 0.6s">
        <p class="text-muted italic text-sm">tap or click any blank area to summon the internet spirits 👆</p>
      </footer>

    </div>
  `;

  return home;
};

// Scoped Tabloid Styles
const style = document.createElement('style');
style.textContent = `
  .tabloid-layout {
    padding-top: 4rem;
    padding-bottom: 6rem;
    position: relative;
    z-index: 10;
  }
  .tabloid-header {
    margin-bottom: 4rem;
  }
  .giant-headline {
    font-size: clamp(4rem, 15vw, 8rem);
    letter-spacing: -0.05em;
    margin-bottom: 0.5rem;
    color: var(--ink);
  }
  .tabloid-subtitle {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--tabloid-red);
    letter-spacing: 0.15em;
    margin-bottom: 1.5rem;
  }
  .tabloid-divider {
    height: 6px;
    background: var(--ink);
    width: 100%;
    position: relative;
  }
  .tabloid-divider::after {
    content: "";
    position: absolute;
    height: 1.5px;
    background: var(--ink);
    width: 100%;
    bottom: -6px;
    left: 0;
  }

  .editorial-grid {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  /* Hero Clipping Style */
  .clipping-style {
    position: relative;
    background: var(--bg-card);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .clipping-img-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
    background: var(--bg-secondary);
  }
  .clipping-img-wrap.mini {
    aspect-ratio: 4/3;
    border-bottom: 1.5px solid var(--border);
  }
  .clipping-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  .hero-clipping-link:hover .clipping-img {
    transform: scale(1.05);
  }
  .clipping-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    background: linear-gradient(transparent, rgba(28,25,23,0.95));
    color: white;
  }
  .clipping-overlay h2 { color: white; }

  /* Grid Layouts */
  .secondary-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media (max-width: 900px) {
    .secondary-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .secondary-grid { grid-template-columns: 1fr; }
  }

  /* Physical Chaos: Rotations */
  .clipping-link {
    display: block;
    transform: rotate(var(--rot, 0deg));
  }
  .clipping-link:hover {
    transform: translate(-4px, -12px) rotate(0deg) scale(1.03);
    z-index: 20;
    position: relative;
  }
`;
document.head.appendChild(style);
