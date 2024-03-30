import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    // setupFiles: ["./testConfig.ts"],
    coverage: {
      provider: "v8",
      // exclude: [...configDefaults.coverage.exclude, "*.config.js"],
      all: true,
    },
  },
  plugins: [react()],
  build: {
    target: "esnext",
  },
})
