import { renderBinaryChoiceGame } from '../engines/binaryChoice.js';
import { rappersData } from '../data/rappers.js';

export const render = () => {
  return renderBinaryChoiceGame({
    title: "Rappers with Felony or Not?",
    question: "Do they have a Felony record?",
    data: rappersData,
    yesLabel: "FELON",
    noLabel: "CLEAN",
    theme: { accent: "var(--accent-purple)" }
  });
};
