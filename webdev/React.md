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

### React Recall- As on 14-Oct-2024
- React library works on the principle that to manipulate DOM, we can put all changing variables in State and build logic in such a way that whenever State changes, the part of application re-renders. This result in the consistency in different changing parts of the big Application. 
- Step to create new react app using vite starter
```
npm create vite@latest
```
- Vite starter template gives the minimal dependencies (react & react-dom) and rest are the dev dependencies.
- The structure of the generated app is src folder (main.jsx,app.jsx, app.css), index.html, index.css
- index.html is the starting file of the project which has only a div element with id=root
- main.jsx has javascript code which gets the root div and render app.jsx (app component) inside it at runtime.
  ```
  createRoot(document.getElementById('root')).render(
    <App />
)
  ```
  - app.jsx contains the components which are rendered.
  - 