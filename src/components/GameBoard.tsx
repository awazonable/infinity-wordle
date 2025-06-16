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
  const renderRow = (guess: string, rowIndex: number, isCurrentRow: boolean = false) => {
    const tiles = [];
    const states = isCurrentRow ? Array(wordLength).fill('empty') : (guess ? getLetterStates(guess) : Array(wordLength).fill('empty'));

    for (let i = 0; i < wordLength; i++) {
      const letter = guess[i] || '';
      tiles.push(
        <Tile
          key={`${rowIndex}-${i}`}
          letter={letter}
          state={states[i]}
        />
      );
    }
    return tiles;
  };

  const renderEmptyRows = () => {
    const emptyRows = [];
    const remainingRows = maxGuesses - guesses.length - 1;
    for (let i = 0; i < remainingRows; i++) {
      emptyRows.push(
        <div key={`empty-${i}`} className="grid grid-cols-5 gap-2 w-full">
          {renderRow('', guesses.length + i + 1)}
        </div>
      );
    }
    return emptyRows;
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-[350px] mx-auto px-2">
      {guesses.map((guess, index) => (
        <div key={`guess-${index}`} className="grid grid-cols-5 gap-2 w-full">
          {renderRow(guess, index)}
        </div>
      ))}
      <div className="grid grid-cols-5 gap-2 w-full">
        {renderRow(currentGuess, guesses.length, true)}
      </div>
      {renderEmptyRows()}
    </div>
  );
};

export default GameBoard; 