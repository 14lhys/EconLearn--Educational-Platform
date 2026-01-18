import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Use process.cwd() with type casting to fix the 'Property cwd does not exist' error in environment where process is not correctly typed as Node Process
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    },
    // เพิ่มการตั้งค่าเพื่อรองรับการรันไฟล์ TSX ใน root โดยตรง
    server: {
      host: true,
      port: 5173,
    }
  };
});