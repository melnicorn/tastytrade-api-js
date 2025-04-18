import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['lib/tastytrade-api.ts'], // Entry file(s) for bundling. Add more entries here for multiple outputs.
  format: ['esm', 'cjs'],           // Output both ESM and CJS formats
  dts: true,                        // Generate TypeScript declaration files (.d.ts) for IDEs
  sourcemap: true,                  // Include source maps for debugging (optional).
  splitting: false,                 // Disable code-splitting for a single file library (no extra chunks).
  clean: true,                      // Clean the output directory before each build.
  outDir: 'dist',                   // Output directory for bundled files.
  // minify: true,                    // (Optional) Minify the output for smaller package size.
  // onSuccess: 'npm run test'        // (Optional) Post-build command, e.g., run tests.
})