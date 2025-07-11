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

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#121213]">
      <div className="max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2">
          {rows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex justify-center gap-2">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => onKeyPress(key)}
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
      </div>
    </div>
  );
};

export default Keyboard; 