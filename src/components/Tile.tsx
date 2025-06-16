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
        return 'bg-gray-200';
    }
  };

  return (
    <div
      className={`flex items-center justify-center aspect-square border-2 border-gray-300 ${getBackgroundColor()} text-white font-bold text-2xl`}
    >
      {letter}
    </div>
  );
};

export default Tile; 