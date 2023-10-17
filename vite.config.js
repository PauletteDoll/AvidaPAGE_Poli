import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importa el módulo 'path' de Node.js

export default defineConfig({
  plugins: [react()],
  // Resto de la configuración...
  resolve: {
    alias: {
      // Puedes configurar alias usando path
      '@my-alias': path.resolve(__dirname, 'src/my-folder'),
    },
  },
});
