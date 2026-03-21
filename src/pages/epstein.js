import { renderBinaryChoiceGame } from '../engines/binaryChoice.js';
import { epsteinData } from '../data/epstein.js';

export const render = () => {
  return renderBinaryChoiceGame({
    title: "Epstein Files or Not?",
    question: "Mentioned in Epstein Files?",
    data: epsteinData,
    yesLabel: "MENTIONED",
    noLabel: "CLEAN",
    theme: { accent: "var(--accent-cyan)" }
  });
};
