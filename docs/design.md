# Infinity Wordle 設計書

## 1. 概要
Infinity Wordleは、Wordleの無限プレイ版です。URLパラメータで単語を指定できるため、友達と問題を共有できます。

## 2. 技術スタック
- フロントエンド: React + TypeScript
- ビルドツール: Vite
- スタイリング: Tailwind CSS
- デプロイ: GitHub Pages

## 3. 主要コンポーネント

### 3.1 App.tsx
- アプリケーションのルートコンポーネント
- 状態管理（useGame）の統括
- レイアウトの基本構造を提供
- キーボードとゲームボードの配置

### 3.2 GameBoard.tsx
- 5x6のグリッドを表示
- 各行を独立したgrid-cols-5として実装
- 空のタイルも含めて常に30マス（5x6）を表示
- 各タイルの状態（correct/present/absent/empty）を管理

### 3.3 Tile.tsx
- 個々のタイルを表示
- 状態に応じた背景色の変更
- 空のタイルは透明背景（bg-transparent）で表示
- アスペクト比1:1を維持（aspect-square）

### 3.4 Keyboard.tsx
- 仮想キーボードの表示
- キー入力のハンドリング
- 使用済みキーの状態表示

## 4. 状態管理

### 4.1 useGame.ts
- ゲームの状態管理
- 入力値の検証
- 勝敗判定
- URLパラメータの処理

### 4.2 状態
- guesses: 過去の推測
- currentGuess: 現在の推測
- gameOver: ゲーム終了フラグ
- message: システムメッセージ
- shareUrl: 共有URL

## 5. スタイリング

### 5.1 カラーパレット
- 正解: #538d4e (bg-wordle-correct)
- 存在: #b59f3b (bg-wordle-present)
- 不在: #3a3a3c (bg-wordle-absent)
- キーボード: #818384 (bg-wordle-keyboard)
- 空タイル: 透明背景 + グレーの枠線

### 5.2 レイアウト
- グリッド: 5列固定（grid-cols-5）
- タイル: 正方形（aspect-square）
- 最大幅: 350px
- ギャップ: 0.5rem

## 6. 今後の課題
- [ ] キーボードの状態表示（使用済みキーの色分け）
- [ ] アニメーションの追加
- [ ] レスポンシブ対応の改善
- [ ] ダークモードの完全対応
- [ ] 統計情報の表示
- [ ] ローカライゼーション対応 