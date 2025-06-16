import React from 'react';
import Tile from './Tile';
import type { LetterState } from '../hooks/useGame';

type GameBoardProps = {
  guesses: string[];
  currentGuess: string;
  maxGuesses: number;
  wordLength: number;
  getLetterStates: (guess: string) => LetterState[];
};

const GameBoard: React.FC<GameBoardProps> = ({
  guesses,
  currentGuess,
  maxGuesses,
  wordLength,
  getLetterStates,
}) => {
  // 空行を含めて常にmaxGuesses行表示
  const rows = Array(maxGuesses).fill('').map((_, index) => {
    if (index < guesses.length) {
      return guesses[index];
    }
    if (index === guesses.length) {
      return currentGuess;
    }
    return '';
  });

  return (
    <div className="flex flex-col gap-2 items-center w-full max-w-[350px]">
      {rows.map((guess, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2 w-full">
          {Array.from({ length: wordLength }).map((_, colIndex) => (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              letter={guess[colIndex] || ''}
              state={guess ? getLetterStates(guess)[colIndex] : 'empty'}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard; 