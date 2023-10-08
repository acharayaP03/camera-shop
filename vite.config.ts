import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './src',
  plugins: [react()],
  esbuild: {
    loader: "tsx",
    include: [
      // Business as usual for .jsx and .tsx files
      "src/**/*.jsx",
      "src/**/*.tsx",
      "node_modules/**/*.jsx",
      "node_modules/**/*.tsx",

      // Add these lines to allow all .js files to contain JSX
      "src/**/*.js",
      "node_modules/**/*.js",

      // Add these lines to allow all .ts files to contain JSX
      "src/**/*.ts",
      "node_modules/**/*.ts",
    ],
  },
  server: {
    port: 3000,
  }
})
