import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import type { LetterState } from '../hooks/useGame';

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

const GameBoard: React.FC = () => {
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [board, setBoard] = useState<string[][]>(
    Array(MAX_ATTEMPTS).fill(null).map(() => Array(WORD_LENGTH).fill(''))
  );
  const [gameOver, setGameOver] = useState(false);

  // キーボード入力の処理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;

      const key = e.key.toLowerCase();
      if (key === 'backspace') {
        if (currentCol > 0) {
          const newBoard = [...board];
          newBoard[currentRow][currentCol - 1] = '';
          setBoard(newBoard);
          setCurrentCol(currentCol - 1);
        }
      } else if (key === 'enter') {
        if (currentCol === WORD_LENGTH) {
          if (currentRow < MAX_ATTEMPTS - 1) {
            setCurrentRow(currentRow + 1);
            setCurrentCol(0);
          } else {
            setGameOver(true);
          }
        }
      } else if (/^[a-z]$/.test(key) && currentCol < WORD_LENGTH) {
        const newBoard = [...board];
        newBoard[currentRow][currentCol] = key;
        setBoard(newBoard);
        setCurrentCol(currentCol + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentRow, currentCol, board, gameOver]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-5 gap-2 w-full max-w-[350px]">
        {board.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((letter, colIndex) => (
              <Tile
                key={`${rowIndex}-${colIndex}`}
                letter={letter}
                state={
                  rowIndex < currentRow
                    ? 'correct' // 仮の状態
                    : rowIndex === currentRow && colIndex < currentCol
                    ? 'present' // 仮の状態
                    : 'empty'
                }
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GameBoard; 