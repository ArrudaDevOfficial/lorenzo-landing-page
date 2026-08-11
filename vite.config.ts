import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'

export default defineConfig({
  resolve: { tsconfigPaths: true },
  // nitro() é o que permite deploy em runtimes como Vercel, Netlify, Cloudflare etc.
  // sem ele o build não sabe gerar o output de servidor esperado por essas plataformas.
  plugins: [tailwindcss(), tanstackStart(), nitro(), viteReact()],
})
