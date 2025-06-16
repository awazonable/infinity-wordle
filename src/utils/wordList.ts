// 5文字の英単語リスト
export const WORDS = [
  'APPLE', 'BEACH', 'CLOUD', 'DREAM', 'EARTH',
  'FLAME', 'GHOST', 'HEART', 'IVORY', 'JUICE',
  'KNIFE', 'LIGHT', 'MAGIC', 'NIGHT', 'OCEAN',
  'PEACE', 'QUEEN', 'RADIO', 'SMILE', 'TIGER',
  'UNITY', 'VOICE', 'WATER', 'YOUTH', 'ZEBRA',
  // 実際のゲームでは、より多くの単語を追加します
];

// 単語のバリデーション用の辞書
export const DICTIONARY = new Set(WORDS);

// ランダムな単語を取得
export const getRandomWord = () => {
  const index = Math.floor(Math.random() * WORDS.length);
  return WORDS[index];
};

// 単語が有効かどうかをチェック
export const isValidWord = (word: string) => {
  return DICTIONARY.has(word.toUpperCase());
}; 