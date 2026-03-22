import './styles/tokens.css';
import './styles/animations.css';
import './styles/main.css';
import './styles/floatingMemes.css'; // Add dedicated styles
import { initRouter } from './router.js';

// Get the app container
const app = document.querySelector('#app');

// Initialize the router
const router = initRouter(app);

// Additional global settings (e.g. disclaimer)
console.log("GUESSS v1.0.0 initializing...");
