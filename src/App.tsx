import { useGame } from './hooks/useGame';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';

function App() {
  const { guesses, currentGuess, handleKeyPress, message, getLetterStates, shareUrl } = useGame();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Infinity Wordle</h1>
      <GameBoard
        guesses={guesses}
        currentGuess={currentGuess}
        maxGuesses={6}
        wordLength={5}
        getLetterStates={getLetterStates}
      />
      {message && (
        <div className="mt-4 text-lg font-semibold text-yellow-400">
          {message}
        </div>
      )}
      {shareUrl && (
        <div className="mt-4 text-sm text-gray-400">
          Share URL: <a href={shareUrl} className="text-blue-400 hover:underline">{shareUrl}</a>
        </div>
      )}
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;
