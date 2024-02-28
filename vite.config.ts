import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginTerminal from "vite-plugin-terminal";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginTerminal()],
});
