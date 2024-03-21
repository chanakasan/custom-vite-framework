import path from "node:path";
import process from "node:process";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: "web",
  publicDir: "./public",
  build: {
    outDir: "../dist"
  },
  resolve: {
    alias: {
      "@app": path.resolve(process.cwd(), "app"),
      "@ui": path.resolve(process.cwd(), "app/components/ui"),
    }
  },
  plugins: [react()],
});