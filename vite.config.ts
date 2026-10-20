import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
//
// ملاحظة مهمة عند الرفع (Deployment):
// • base = './' يجعل كل روابط الملفات نسبية، فيعمل الموقع في:
//   - جذر النطاق        → https://example.com/
//   - مجلد فرعي         → https://example.com/al-wadi/
//   - GitHub Pages      → https://user.github.io/repo/
//   دون الحاجة لتعديل أي شيء.
// • إن أردت تثبيت مسار معيّن، استبدل './' بالمسار، مثال: '/al-wadi/'.
// • انسخ محتويات مجلد dist/ إلى الاستضافة (وليس مجلد المشروع).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    copyPublicDir: true,
  },
  server: {
    host: true,
    port: 5173,
  },
})
