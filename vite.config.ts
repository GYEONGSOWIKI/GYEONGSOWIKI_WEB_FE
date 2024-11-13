import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@assets": resolve(__dirname, "./src/assets"),
    },
  },
});
