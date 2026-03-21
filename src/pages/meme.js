import { renderGuessTheMeme } from '../engines/guessTheMeme.js';
import { memeData } from '../data/memes.js';

export const render = () => {
  return renderGuessTheMeme({
    title: "Guess the Meme!",
    data: memeData
  });
};
