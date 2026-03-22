/**
 * Floating Memes V4 — Tabloid Newsprint Rework
 * Tuned for the warm cream background with physical tape props.
 * Memes sit BEHIND content for a conspiracy-board feel.
 */

const CURATED_MEMES = [
  // Classic OG Internet Icons
  'https://media.tenor.com/RaGGElDyBBUAAAAM/dog-doge.gif',
  'https://media.tenor.com/swv26x431-QAAAAM/pedro-raccoon.gif',
  'https://media.tenor.com/DHkIdy0a-JgAAAAM/cat-vibe.gif',
  'https://media.tenor.com/On7kvXhzml4AAAAM/laughing-hysterically.gif',
  'https://media.tenor.com/X7DVkMlRfH0AAAAM/rick-roll-rick-ashley.gif',
  'https://media.tenor.com/WHdlNVB1YjkAAAAM/shaq-shimmy.gif',
  'https://media.tenor.com/nBt3CVfKILEAAAAM/dog-bonk.gif',
  'https://media.tenor.com/epDv3KaClBYAAAAM/pepe-the-frog-dancing.gif',
  'https://media.tenor.com/oUDhBo2LaqcAAAAM/roll-safe-think-about-it.gif',
  'https://media.tenor.com/CNzXiDbv5DcAAAAM/nyan-cat.gif',
  'https://i.imgflip.com/26am.jpg',                // Futurama Fry
  'https://i.imgflip.com/1ur9b0.jpg',              // Distracted Boyfriend
  'https://i.imgflip.com/4t0m5.jpg',               // Disaster Girl
  'https://i.imgflip.com/1h7in3.jpg',              // Expanding Brain
  'https://i.imgflip.com/2fm6x.jpg',               // Drake Hotline Bling
  'https://i.imgflip.com/3si4.jpg',                // Y U No
  'https://i.imgflip.com/gr6p.jpg',                // Success Kid
  'https://i.imgflip.com/1bij.jpg',                // One Does Not Simply
  'https://i.imgflip.com/1otk96.jpg',              // Change My Mind
  'https://i.imgflip.com/9ehk.jpg',                // Arthur Fist
  'https://media.tenor.com/7Sj-w1X_V74AAAAM/surprised-pikachu.gif',
  'https://media.tenor.com/I66Vf9YvC94AAAAM/this-is-fine-dog.gif',
  'https://media.tenor.com/7UayX8X5FkMAAAAM/stonks-stock-market.gif',
  'https://media.tenor.com/iN6kV0hwfOEAAAAM/party-parrot.gif',
  'https://media.tenor.com/9m5y9y9_f8kAAAAM/trollface-troll.gif',
  'https://media.tenor.com/6U9846S5e5oAAAAM/michael-jordan-crying.gif',
  'https://media.tenor.com/tHgh7g74p7gAAAAM/coffin-dance-pallbearers.gif',
  'https://media.tenor.com/K_f9_pByL9UAAAAM/monke-monkey-spin.gif',
  'https://media.tenor.com/u_pW8h-02YAAAAAM/jamming-cat.gif',
  'https://i.imgflip.com/1yo728.jpg',              // Two Buttons
  'https://i.imgflip.com/39tko.jpg',               // Shut Up and Take My Money
  'https://i.imgflip.com/4x6eey.jpg',              // Trade Offer
  'https://media.tenor.com/uGzQvHwXFkAAAAAM/pepe-punch.gif',
  'https://i.imgflip.com/4rk04b.jpg',              // Bernie sitting
  'https://i.imgflip.com/345v97.jpg',              // Woman yelling at cat
  'https://i.imgflip.com/1f661k.jpg',              // Evil Patrick
  'https://media.tenor.com/i-3X0yM0m_UAAAAM/thanos-avengers.gif',
  'https://i.imgflip.com/2666sc.jpg',              // Spongebob Mocking
  'https://i.imgflip.com/1j9606.jpg',              // Roll Safe
  'https://i.imgflip.com/65x31.jpg',               // Squinting Fry
  'https://media.tenor.com/pZ_jY-XQ580AAAAM/skull.gif',
  'https://media.tenor.com/2fIu-1c-qNwAAAAM/spiderman-dance.gif',
  'https://media.tenor.com/F_J9pZcK1MAAAAAM/pikachu-flash.gif',
  'https://media.tenor.com/uDclQ84cT-IAAAAM/cat-dance.gif',
  'https://media.tenor.com/tInl87O5SyoAAAAM/elmo-fire.gif',
  'https://media.tenor.com/vHqY7OshNTEAAAAM/monka-shook.gif',
  'https://media.tenor.com/9i4z0tE79qEAAAAM/gigachad-chad.gif',
];

const DEPTH_LAYERS = [
  { class: 'meme-layer-far', size: [80, 130], opacity: [0.20, 0.35], duration: [25, 45] },
  { class: 'meme-layer-mid', size: [130, 190], opacity: [0.35, 0.55], duration: [18, 32] },
  { class: 'meme-layer-near', size: [190, 270], opacity: [0.50, 0.70], duration: [12, 22] },
];

const FLOAT_PATTERNS = ['float-pattern-1', 'float-pattern-2', 'float-pattern-3', 'float-pattern-4', 'float-pattern-5'];

let container = null;
let spawnTimer = null;
const MAX_MEMES = 25;

function random(min, max) { return Math.random() * (max - min) + min; }

function spawnMeme(x, y, isClick = false) {
  if (!container && !isClick) return;
  if (!container) return;
  if (!isClick && container.querySelectorAll('.floating-meme').length >= MAX_MEMES) return;

  const url = CURATED_MEMES[Math.floor(Math.random() * CURATED_MEMES.length)];
  const layer = isClick
    ? { class: 'click-spawned', size: [220, 300], opacity: [0.70, 0.85], duration: [15, 25] }
    : DEPTH_LAYERS[Math.floor(Math.random() * DEPTH_LAYERS.length)];

  const pattern = FLOAT_PATTERNS[Math.floor(Math.random() * FLOAT_PATTERNS.length)];
  const size = random(layer.size[0], layer.size[1]);
  const opacity = random(layer.opacity[0], layer.opacity[1]);
  const duration = random(layer.duration[0], layer.duration[1]);
  const startRotation = random(-15, 15);

  const wrapper = document.createElement('div');
  const tapeClass = Math.random() > 0.5 ? ' tape-left' : '';
  wrapper.className = `floating-meme ${layer.class}${tapeClass}`;

  if (isClick && x !== undefined && y !== undefined) {
    wrapper.style.left = `${x}px`;
    wrapper.style.top = `${y}px`;
    wrapper.style.animation = `meme-burst 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, ${pattern} ${duration}s ease-in-out infinite alternate`;
  } else {
    wrapper.style.left = `${random(0, 95)}%`;
    wrapper.style.top = `${random(0, 95)}%`;
    wrapper.style.animation = `meme-entrance 2.5s ease-out forwards, ${pattern} ${duration}s ease-in-out infinite alternate`;
  }

  wrapper.style.width = `${size}px`;
  wrapper.style.height = `${size}px`;
  wrapper.style.setProperty('--target-opacity', opacity);
  wrapper.style.setProperty('--start-rotation', `${startRotation}deg`);
  wrapper.style.opacity = '0';

  const img = document.createElement('img');
  img.src = url;
  img.loading = 'lazy';
  img.alt = '';

  wrapper.appendChild(img);
  container.appendChild(wrapper);

  setTimeout(() => {
    if (wrapper.parentNode) {
      wrapper.style.opacity = '0';
      wrapper.style.transition = 'opacity 1s ease-out';
      setTimeout(() => wrapper.remove(), 1000);
    }
  }, duration * 2000);
}

const handleGlobalClick = (e) => {
  if (!container) return;
  if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.card')) return;
  spawnMeme(e.clientX, e.clientY, true);
};

export function initFloatingMemes() {
  if (container) return;
  container = document.createElement('div');
  container.id = 'floating-memes-bg';
  document.body.prepend(container);

  for (let i = 0; i < 15; i++) { setTimeout(spawnMeme, i * 300); }
  spawnTimer = setInterval(spawnMeme, 2500);
  document.addEventListener('mousedown', handleGlobalClick);
}

export function destroyFloatingMemes() {
  if (spawnTimer) { clearInterval(spawnTimer); spawnTimer = null; }
  document.removeEventListener('mousedown', handleGlobalClick);
  if (container) {
    const currentContainer = container;
    currentContainer.querySelectorAll('.floating-meme').forEach(m => { m.style.opacity = '0'; });
    setTimeout(() => { if (currentContainer.parentNode) currentContainer.remove(); }, 500);
    container = null;
  }
}
