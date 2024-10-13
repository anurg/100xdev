### React Issues faced
WSL has issues reloading on changes (HMR)
Change the vite.config.js file to include the following:
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
})

```