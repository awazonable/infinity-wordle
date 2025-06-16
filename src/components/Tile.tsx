import React from 'react';

type TileProps = {
  letter: string;
  state: 'correct' | 'present' | 'absent' | 'empty';
};

const Tile: React.FC<TileProps> = ({ letter, state }) => {
  const getBackgroundColor = () => {
    switch (state) {
      case 'correct':
        return 'bg-wordle-correct';
      case 'present':
        return 'bg-wordle-present';
      case 'absent':
        return 'bg-wordle-absent';
      default:
        return 'bg-transparent';
    }
  };

  return (
    <div
      className={`w-14 h-14 border-2 border-gray-500 flex items-center justify-center text-2xl font-bold uppercase ${getBackgroundColor()} text-white`}
    >
      {letter}
    </div>
  );
};

export default Tile; 