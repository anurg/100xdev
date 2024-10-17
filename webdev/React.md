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
  - Components are reusable JS functions which return a single JSX (similar to HTML) nested code which is rendered.
  - React rerenders the components when the state of the component changes(??? Not clear on this)
  - React provides hooks like useState which helps in tracking the state
  ```
    const [count, setCount] = useState(0);
  ```
  - Here count is a variable and setCount is a function returned by useState hook. 0 is the inintial value set to count variable. setCount function is used to change count value.
  - React tracks the count value and whenever it is changed then the component is rerendered.
  - useRef is used when component is mounted for first time for side-effects. Side-effects are calling third parties API, changing DOM elements etc
  - useRef returns a function which can be used to clear the side effects(e.g Timers set can be cleared).
  - useRef also uses an array which can contain variables , on change of which the useRef can fire again.
  - conditional rendering- using tertiary operator we can use the conditional  rendering in react. 
  - In react, JS code is written inside the {} brackets
  - 

  ### Important React one liners
  https://dev.to/nnnirajn/10-react-one-liners-every-ui-developer-should-know-c97?context=digest

