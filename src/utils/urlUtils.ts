// Base64エンコーディング/デコーディングのためのユーティリティ
export const encodeWord = (word: string): string => {
  return btoa(word);
};

export const decodeWord = (encoded: string): string => {
  try {
    return atob(encoded);
  } catch {
    return '';
  }
};

// URLパラメータから単語を取得
export const getWordFromUrl = (): string | null => {
  const params = new URLSearchParams(window.location.search);
  const encodedWord = params.get('answer');
  if (!encodedWord) return null;
  
  const decodedWord = decodeWord(encodedWord);
  return decodedWord.length === 5 ? decodedWord : null;
};

// 新しいURLを生成
export const generateShareUrl = (word: string): string => {
  const encodedWord = encodeWord(word);
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?answer=${encodedWord}`;
}; 