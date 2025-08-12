// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs/promises";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", 
    include: /src\/.*\.jsx?$/, 
    exclude: [], 
    target: "esnext", 
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext", 
      loader: {
        ".js": "jsx",
      },
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => {
              return {
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8"),
              };
            });
          },
        },
      ],
    },
  },
  build: {
    target: "esnext",
  },
  server: {
    hmr: {
      overlay: false, 
    },
  },
});