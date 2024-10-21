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


### Notes of JSX (From react.dev)
 - As the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place—components.
- Keeping a button’s rendering logic and markup together ensures that they stay in sync with each other on every edit. Conversely, details that are unrelated, such as the button’s markup and a sidebar’s markup, are isolated from each other, making it safer to change either of them on their own.
- Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.
### The Rules of JSX 
1. Return a single root element 
To return multiple elements from a component, wrap them with a single parent tag.If you don’t want to add an extra <div> to your markup, you can write <> and </> instead:
```
<>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</> 
```
This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.
2. Close all the tags 
JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.
3. camelCase all most of the things! 
JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead, named after the corresponding DOM property:
```
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>
```
- When you want to pass a string attribute to JSX, you put it in single or double quotes:
- You could use a value from JavaScript by replacing " and " with { and }:Notice the difference between className="avatar", which specifies an "avatar" CSS class name that makes the image round, and src={avatar} that reads the value of the JavaScript variable called avatar. That’s because curly braces let you work with JavaScript right there in your markup!

### Using “double curlies”: CSS and other objects in JSX 
In addition to strings, numbers, and other JavaScript expressions, you can even pass objects in JSX. Objects are also denoted with curly braces, like { name: "Hedy Lamarr", inventions: 5 }. Therefore, to pass a JS object in JSX, you must wrap the object in another pair of curly braces: person={{ name: "Hedy Lamarr", inventions: 5 }}.

You may see this with inline CSS styles in JSX. React does not require you to use inline styles (CSS classes work great for most cases). But when you need an inline style, you pass an object to the style attribute:
```
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```
- Inline style properties are written in camelCase. For example, HTML <ul style="background-color: black"> would be written as <ul style={{ backgroundColor: 'black' }}>  in your component.
- 