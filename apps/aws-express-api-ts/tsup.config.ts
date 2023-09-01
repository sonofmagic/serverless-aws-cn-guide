import { defineConfig } from 'tsup'
const isDev = process.env.NODE_ENV === 'development'
export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: isDev,
  clean: true
})
