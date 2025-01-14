import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    output: {
      assetFileNames: (assetInfo) => {
        if (assetInfo.name === "favicon.ico") {
          return "[name][extname]"; // Keep it in the root
        }
        return "assets/[name]-[hash][extname]";
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
