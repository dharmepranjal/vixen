import { initFloatingMemes, destroyFloatingMemes } from './utils/floatingMemes.js';

const routes = {
  home: async () => (await import('./pages/home.js')).render(),
  epstein: async () => (await import('./pages/epstein.js')).render(),
  pedo: async () => (await import('./pages/pedo.js')).render(),
  rappers: async () => (await import('./pages/rappers.js')).render(),
  meme: async () => (await import('./pages/meme.js')).render(),
};

export const initRouter = (container) => {
  const navigate = async () => {
    const hash = window.location.hash.slice(1) || 'home';
    const route = routes[hash] || routes.home;

    // Handle floating memes background
    if (hash === 'home' || hash === '') {
      initFloatingMemes();
    } else {
      destroyFloatingMemes();
    }

    // Clear and render new page
    container.innerHTML = '';
    const pageElement = await route();
    
    if (pageElement instanceof Node) {
      container.appendChild(pageElement);
    } else {
      container.innerHTML = pageElement;
    }
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  window.addEventListener('hashchange', navigate);
  window.addEventListener('load', navigate);
  
  // Return navigation method
  return {
    to: (path) => { window.location.hash = path; },
    refresh: navigate
  };
};
