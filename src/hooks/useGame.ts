import { useState, useEffect } from 'react';
import { getRandomWord, isValidWord } from '../utils/wordList';
import { getWordFromUrl, generateShareUrl } from '../utils/urlUtils';

const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

export type LetterState = 'correct' | 'present' | 'absent' | 'empty';

export const useGame = () => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [targetWord] = useState(() => {
    const wordFromUrl = getWordFromUrl();
    return wordFromUrl || getRandomWord();
  });
  const [message, setMessage] = useState('');
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (targetWord) {
      setShareUrl(generateShareUrl(targetWord));
    }
  }, [targetWord]);

  const checkGuess = (guess: string): LetterState[] => {
    const result: LetterState[] = [];
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');

    // まず全ての文字を'absent'として初期化
    for (let i = 0; i < WORD_LENGTH; i++) {
      result[i] = 'absent';
    }

    // 完全一致をチェック
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (guessLetters[i] === targetLetters[i]) {
        result[i] = 'correct';
        targetLetters[i] = ''; // 使用済みとしてマーク
      }
    }

    // 部分一致をチェック
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (result[i] === 'correct') continue;

      const index = targetLetters.indexOf(guessLetters[i]);
      if (index !== -1) {
        result[i] = 'present';
        targetLetters[index] = ''; // 使用済みとしてマーク
      }
    }

    return result;
  };

  const handleKeyPress = (key: string) => {
    if (gameOver) return;

    if (key === 'Enter') {
      if (currentGuess.length === WORD_LENGTH) {
        if (!isValidWord(currentGuess)) {
          setMessage('Not in word list');
          return;
        }

        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);
        setCurrentGuess('');
        setMessage('');

        // 勝敗判定
        if (currentGuess === targetWord) {
          setGameOver(true);
          setMessage('You won!');
        } else if (newGuesses.length >= MAX_GUESSES) {
          setGameOver(true);
          setMessage(`Game over! The word was ${targetWord}`);
        }
      }
    } else if (key === '⌫') {
      setCurrentGuess(currentGuess.slice(0, -1));
      setMessage('');
    } else if (currentGuess.length < WORD_LENGTH) {
      setCurrentGuess(currentGuess + key);
      setMessage('');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleKeyPress('Enter');
      } else if (e.key === 'Backspace') {
        handleKeyPress('⌫');
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        handleKeyPress(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, guesses, gameOver]);

  const getLetterStates = (guess: string): LetterState[] => {
    return checkGuess(guess);
  };

  return {
    guesses,
    currentGuess,
    gameOver,
    message,
    shareUrl,
    handleKeyPress,
    getLetterStates,
  };
}; 