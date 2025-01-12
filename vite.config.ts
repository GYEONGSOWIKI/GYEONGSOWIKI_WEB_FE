import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
      "@api": resolve(__dirname, "./src/api"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@constant": resolve(__dirname, "./src/constant"),
      "@styles": resolve(__dirname, "./src/styles"),
    },
  },
});
