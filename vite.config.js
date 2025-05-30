import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  };

  if (command === "build") {
    config.base = "/tms-website/";
  }

  return config;
});
