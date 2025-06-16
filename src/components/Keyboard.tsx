import React from 'react';

type KeyboardProps = {
  onKeyPress: (key: string) => void;
};

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress }) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
  ];

  const handleKeyClick = (key: string) => {
    onKeyPress(key);
  };

  return (
    <div className="flex flex-col gap-2 mt-8">
      {rows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex justify-center gap-2">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => handleKeyClick(key)}
              className={`
                min-w-[40px] h-14 px-2 rounded
                bg-wordle-keyboard text-white font-bold
                hover:bg-opacity-80 active:bg-opacity-60
                ${key === 'Enter' || key === '⌫' ? 'min-w-[65px]' : ''}
              `}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard; 