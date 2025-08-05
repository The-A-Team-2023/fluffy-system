// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/home/project/services/admin-ui-service";
var vite_config_default = defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  // Build configuration
  build: {
    outDir: "dist",
    // Disable source maps in production
    sourcemap: false,
    // Use esbuild for safer minification (less likely to break React)
    minify: "esbuild",
    // Rollup specific options
    rollupOptions: {
      output: {
        // Disable chunk splitting to prevent React timing issues
        manualChunks: void 0,
        // Use content hash for cache busting
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]"
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1e3,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Asset handling
    assetsInlineLimit: 4096
    // 4kb
  },
  server: {
    port: 3010,
    host: true,
    open: "/",
    strictPort: false,
    // Disable HMR overlay for errors
    hmr: {
      overlay: false
    }
  },
  // Preview configuration (for testing production build)
  preview: {
    port: 4173,
    strictPort: false
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom"
    ],
    // Force pre-bundling of React
    force: true
  },
  // Environment variables prefix
  envPrefix: "VITE_"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3NlcnZpY2VzL2FkbWluLXVpLXNlcnZpY2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3Byb2plY3Qvc2VydmljZXMvYWRtaW4tdWktc2VydmljZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L3NlcnZpY2VzL2FkbWluLXVpLXNlcnZpY2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBiYXNlOiAnLycsXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxuICAgIH1cbiAgfSxcbiAgLy8gQnVpbGQgY29uZmlndXJhdGlvblxuICBidWlsZDoge1xuICAgIG91dERpcjogJ2Rpc3QnLFxuICAgIC8vIERpc2FibGUgc291cmNlIG1hcHMgaW4gcHJvZHVjdGlvblxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgXG4gICAgLy8gVXNlIGVzYnVpbGQgZm9yIHNhZmVyIG1pbmlmaWNhdGlvbiAobGVzcyBsaWtlbHkgdG8gYnJlYWsgUmVhY3QpXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgXG4gICAgLy8gUm9sbHVwIHNwZWNpZmljIG9wdGlvbnNcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gRGlzYWJsZSBjaHVuayBzcGxpdHRpbmcgdG8gcHJldmVudCBSZWFjdCB0aW1pbmcgaXNzdWVzXG4gICAgICAgIG1hbnVhbENodW5rczogdW5kZWZpbmVkLFxuICAgICAgICBcbiAgICAgICAgLy8gVXNlIGNvbnRlbnQgaGFzaCBmb3IgY2FjaGUgYnVzdGluZ1xuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0uW2hhc2hdLmpzJyxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLltoYXNoXS5qcycsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5baGFzaF0uW2V4dF0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFxuICAgIC8vIEluY3JlYXNlIGNodW5rIHNpemUgd2FybmluZyBsaW1pdFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcbiAgICBcbiAgICAvLyBFbmFibGUgQ1NTIGNvZGUgc3BsaXR0aW5nXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIFxuICAgIC8vIEFzc2V0IGhhbmRsaW5nXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYsIC8vIDRrYlxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDEwLFxuICAgIGhvc3Q6IHRydWUsXG4gICAgb3BlbjogJy8nLFxuICAgIHN0cmljdFBvcnQ6IGZhbHNlLFxuICAgIFxuICAgIC8vIERpc2FibGUgSE1SIG92ZXJsYXkgZm9yIGVycm9yc1xuICAgIGhtcjoge1xuICAgICAgb3ZlcmxheTogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgXG4gIC8vIFByZXZpZXcgY29uZmlndXJhdGlvbiAoZm9yIHRlc3RpbmcgcHJvZHVjdGlvbiBidWlsZClcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDQxNzMsXG4gICAgc3RyaWN0UG9ydDogZmFsc2UsXG4gIH0sXG4gIFxuICAvLyBPcHRpbWl6ZSBkZXBlbmRlbmNpZXNcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogW1xuICAgICAgJ3JlYWN0JywgXG4gICAgICAncmVhY3QtZG9tJ1xuICAgIF0sXG4gICAgLy8gRm9yY2UgcHJlLWJ1bmRsaW5nIG9mIFJlYWN0XG4gICAgZm9yY2U6IHRydWUsXG4gIH0sXG4gIFxuICAvLyBFbnZpcm9ubWVudCB2YXJpYWJsZXMgcHJlZml4XG4gIGVudlByZWZpeDogJ1ZJVEVfJyxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVTLFNBQVMsb0JBQW9CO0FBQ3BVLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFFUixXQUFXO0FBQUE7QUFBQSxJQUdYLFFBQVE7QUFBQTtBQUFBLElBR1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBO0FBQUEsUUFFTixjQUFjO0FBQUE7QUFBQSxRQUdkLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFHQSx1QkFBdUI7QUFBQTtBQUFBLElBR3ZCLGNBQWM7QUFBQTtBQUFBLElBR2QsbUJBQW1CO0FBQUE7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBO0FBQUEsSUFHWixLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBR0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFBQTtBQUFBLEVBR0EsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxPQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUEsRUFHQSxXQUFXO0FBQ2IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
