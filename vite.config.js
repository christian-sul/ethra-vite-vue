import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// });

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      tailwindcss(),
      vue(),
      vueDevTools({
        // appendTo: '',
        componentInspector: true,
        launchEditor: 'visualstudio'
      })
    ],
    resolve: {
      alias: {
        // '@': path.resolve(__dirname, './src'),
        '@': fileURLToPath(new URL('./', import.meta.url)),
      }
    }
  }
});
