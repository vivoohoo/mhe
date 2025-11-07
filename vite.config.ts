import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],

  // Move cache to the OS temp directory to avoid NTFS rename issues on /mnt/e
  cacheDir: path.join(os.tmpdir(), "vite-cache"),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // Re-enable pre-bundling so React's CommonJS is transformed for ESM default interop
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
