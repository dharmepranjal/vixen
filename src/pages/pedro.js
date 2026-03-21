import { renderBinaryChoiceGame } from '../engines/binaryChoice.js';
import { pedroData } from '../data/pedro.js';

export const render = () => {
  return renderBinaryChoiceGame({
    title: "Pedo or Not?",
    question: "Known or alleged Predator?",
    data: pedroData,
    yesLabel: "PEDO",
    noLabel: "NOT PEDO",
    theme: { accent: "var(--accent-pink)" }
  });
};
