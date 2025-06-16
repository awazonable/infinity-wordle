import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/infinity-wordle/', // GitHubリポジトリ名に合わせて設定
})
