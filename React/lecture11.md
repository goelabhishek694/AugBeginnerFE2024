---

---
## Agenda
* React Perf
    * Code splitting ->
    * dynamic imports
    * Lazy Loading ->
        * React.Lazy and
        * react suspense
        
* Memoization
    * useMemo
    * useCallBack


## React Code Splitting and Lazy Loading:

### Scenario Without Code Splitting and Lazy Loading

Imagine a scenario where you have built a comprehensive React application with multiple components, pages, and features. In a standard setup, all of your JavaScript code, including all the components, gets bundled into one large file during the build process. When a user accesses your application, this entire bundle is loaded and executed in the browser.

Suppose we have this app with three compnents `HomePage`,`AboutPage`,`ContactPage` and a `Navbar` component to navigate between them 

 Below is an example of how you can create `HomePage`, `AboutPage`, and `ContactPage` components and implement routing for these components using `react-router-dom`.

First, you need to install `react-router-dom` if you haven't already:

```bash
npm install react-router-dom
```

Then, you can create your components and implement the routing as follows:

1. **Create the HomePage Component:**

```jsx
// HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};

export default HomePage;
```

2. **Create the AboutPage Component:**

```jsx
// AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about us on this page.</p>
    </div>
  );
};

export default AboutPage;
```

3. **Create the ContactPage Component:**

```jsx
// ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Get in touch with us through this page.</p>
    </div>
  );
};

export default ContactPage;
```

4. **Create the Navbar Component:**

```jsx
// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
```

5. **Set Up Routing in the App Component:**

```jsx
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
```

6. **Update your main entry file (index.js):**

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

This setup creates a simple React application with three pages: Home, About, and Contact, and a navbar to navigate between them using `react-router-dom`. When you click on the links in the navbar, the corresponding page component will be rendered.


In this example, all the components (HomePage, AboutPage, and ContactPage) are loaded at once, regardless of whether the user needs them immediately or not.

<img src='https://i.ibb.co/vkp6YWj/Screenshot-2024-05-25-at-1-30-10-PM.png'>

Here you can see a complete bundle has been loaded which has loaded all the components regardless of if need them or not




### Problems That Can Arise in this scenario

1. **Long Initial Load Time**: The initial load time can be significantly high as the browser needs to download a large JavaScript bundle before rendering any content.
2. **Poor Performance**: Large bundle sizes can lead to performance issues, especially on slower networks or less powerful devices.
3. **Unnecessary Resource Usage**: Users might download code for components and features they never interact with, leading to wasted resources.


### Understanding Dynamic Import in Detail 

Dynamic import is a powerful feature in JavaScript that allows you to load modules asynchronously. This means that instead of loading all your JavaScript code upfront, you can load parts of it on demand. This can be particularly useful in large applications where you want to optimize performance and reduce initial load times.

In React, dynamic import can be used to load components only when they are needed. This helps in splitting your code and loading it in smaller chunks, which is often referred to as "code splitting".


Let's take a same example and implement dynamic import using functional components and hooks.



Sure! Let's delve into React's dynamic import and understand how it can optimize the loading of components by only loading them when needed, creating chunks for better performance.

### What is Dynamic Import?

Dynamic import is a feature that allows you to import JavaScript modules (including React components) dynamically and asynchronously. Instead of loading all components at once, you can load them on demand, which can significantly reduce the initial load time of your application. This process is known as code splitting.

### Step-by-Step Guide to Implement Dynamic Import

1. **Setup the Project:**

   Make sure you have the basic project setup with `react-router-dom` installed, as shown in the initial example.

2. **Update Component Imports to Use Dynamic Imports:**

   Instead of importing the components at the top of the file, use the `import()` function to load them dynamically within the routes.

3. **Modify App Component to Use Dynamic Imports:**

   Here's how you can modify the `App.jsx` to use dynamic imports:

```jsx
// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  const [HomePage, setHomePage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);
  const [ContactPage, setContactPage] = useState(null);

  useEffect(() => {
    // Preload HomePage component
    import('./HomePage').then((module) => setHomePage(() => module.default));
  }, []);

  const loadHomePage = () => {
    import('./HomePage').then((module) => setHomePage(() => module.default));
  };

  const loadAboutPage = () => {
    import('./AboutPage').then((module) => setAboutPage(() => module.default));
  };

  const loadContactPage = () => {
    import('./ContactPage').then((module) => setContactPage(() => module.default));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={loadHomePage}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={loadAboutPage}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={loadContactPage}>Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={HomePage ? <HomePage /> : <div>Loading...</div>} />
          <Route path="/about" element={AboutPage ? <AboutPage /> : <div>Loading...</div>} />
          <Route path="/contact" element={ContactPage ? <ContactPage /> : <div>Loading...</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
```

### How Dynamic Import Optimizes the Code

1. **Code Splitting:**
   - Dynamic imports create separate chunks for each component. When you run `npm run build`, Webpack (the module bundler used by Create React App) will create separate files for `HomePage`, `AboutPage`, and `ContactPage`. These files are only loaded when needed.

2. **On-Demand Loading:**
   - Instead of loading all components at once, components are loaded only when a user navigates to the respective route. This reduces the initial load time, making the app faster to start.

3. **Improved Performance:**
   - By splitting the code and loading components on-demand, you reduce the size of the initial JavaScript bundle. This can lead to faster page loads and improved performance, especially for users with slower network connections.

### Example of Webpack Chunk Creation

When you build the app, Webpack will create chunks like:

```
main.js
HomePage.chunk.js
AboutPage.chunk.js
ContactPage.chunk.js
```

These chunks will be loaded dynamically when a user navigates to the respective route. This can be observed in the network tab of the browser's developer tools when you navigate through the app.

<img src='https://i.ibb.co/QbD8rxH/Screenshot-2024-05-25-at-1-30-51-PM.png'>



<img src='https://i.ibb.co/mDm83NR/Screenshot-2024-05-25-at-1-31-10-PM.png'>

By using dynamic imports, you optimize your React application by loading only the necessary components when they are required, which improves the overall performance and user experience.

In this implementation:
- We maintain state using the `useState` hook to keep track of whether each component has been loaded.
- We use the `import()` function to dynamically load the components when a button is clicked.
- The `import()` function returns a promise that resolves to the module object, from which we can access the default export (the component itself).
- Once the component is loaded, we update the state to render the component.


Now you will see whenever you click on a button only the component associated with that button will get loaded and chunks will be created for each respective component separately



### Key Points About Dynamic Import

1. **Asynchronous Loading**: Dynamic import allows you to load modules asynchronously, meaning the rest of your application can continue to run while the module is being fetched.
2. **Code Splitting**: By using dynamic import, you can split your code into smaller chunks that are loaded on demand. This helps in reducing the initial load time of your application.
3. **Improved Performance**: Loading only the necessary code when it is needed can significantly improve the performance of your application, especially for large applications with many components.
4. **Better Resource Utilization**: Users download only the code they need, which saves bandwidth and results in a more efficient use of resources.

Dynamic import is a powerful tool for optimizing React applications.









## But, Yes! of course there is a But, There are some cons as well as why only dynamic imports may not be the best techinique for code splitting

While dynamic import as shown in the example above can be a powerful tool, there are a few reasons why it might not be the best approach for every situation.

1. **Manual State Management**: In the given example, we manually manage the state for each dynamically imported component. This can become cumbersome and error-prone as the number of components grows, leading to more boilerplate code and potential bugs.

2. **Lack of Built-in Fallback UI**: The example does not provide a built-in way to show a fallback UI while the component is loading. While we can add this manually, it requires additional code and effort. `React.Suspense` offers a straightforward way to handle this. We will see this next

3. **Complexity**: The code for manually importing and managing state can become complex, especially in larger applications. This complexity can make the code harder to maintain and understand.

4. **Best Practices**: Using `React.lazy` and `Suspense` is a React-recommended approach for code splitting and lazy loading. It leverages React’s built-in mechanisms, ensuring better integration and reliability.

### Implementing Code Splitting with lazy and suspense 

 Let's enhance the example with code splitting and lazy loading using `React.lazy()` and `React.Suspense`. We'll also discuss the drawbacks of just using dynamic imports and explain how `React.lazy()` and `React.Suspense` with a fallback component can address these issues.


### Using `React.lazy()` and `React.Suspense`

`React.lazy()` allows you to define a component that is loaded dynamically. `React.Suspense` provides a way to handle the loading state while the component is being loaded.

1. **Setup the Project:**

   Ensure you have the basic project setup with `react-router-dom` installed.

2. **Update Component Imports to Use `React.lazy()`:**

   Modify the imports in `App.jsx` to use `React.lazy()` for dynamic imports.

3. **Wrap Components with `React.Suspense`:**

   Use `React.Suspense` to handle the loading state with a fallback component.

### Step-by-Step Implementation

1. **Create the Components:**

   Ensure you have `HomePage`, `AboutPage`, and `ContactPage` components as before.

2. **Update App Component:**

   Here's how you can modify the `App.jsx` to use `React.lazy()` and `React.Suspense`:

```jsx
// App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Lazy load the components
const HomePage = lazy(() => import('./HomePage'));
const AboutPage = lazy(() => import('./AboutPage'));
const ContactPage = lazy(() => import('./ContactPage'));

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
```

### Explanation of `React.lazy()` and `React.Suspense`

1. **`React.lazy()`**
   - `React.lazy()` allows you to dynamically import components, which means the component will only be loaded when it is needed. This helps in reducing the initial load time of the application by splitting the code into smaller chunks.

   ```jsx
   const HomePage = lazy(() => import('./HomePage'));
   ```

2. **`React.Suspense`**
   - `React.Suspense` is a component that can wrap lazy-loaded components and handle the loading state. It takes a `fallback` prop, which is a React element that will be displayed while the component is being loaded.

   ```jsx
   <Suspense fallback={<div>Loading...</div>}>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/contact" element={<ContactPage />} />
     </Routes>
   </Suspense>
   ```

   The `fallback` prop is used to display a loading indicator while the lazy-loaded component is being fetched. This provides a better user experience as the user is informed that something is happening in the background.

### Benefits of Using `React.lazy()` and `React.Suspense`

1. **Simplified Code:**
   - You don't need to manually handle the loading logic for each component. `React.lazy()` and `React.Suspense` provide a cleaner and more maintainable approach.

2. **Better User Experience:**
   - The `fallback` component ensures that users see a loading indicator, reducing confusion during component loading.

3. **Automatic Code Splitting:**
   - Webpack (used by Create React App) automatically creates separate chunks for each lazy-loaded component, optimizing the application's performance.

By using `React.lazy()` and `React.Suspense`, you can easily implement code splitting and lazy loading in your React application, leading to improved performance and a better user experience.

 let's create a React example that demonstrates a scenario where `useMemo` can significantly improve performance. We will start with a component that performs a costly computation every time it renders, and then we will optimize it using `useMemo`.

### Initial Scenario without `useMemo`

Here, we have a simple React component that calculates the sum of a large array of numbers whenever it renders. This can be a costly computation and can lead to performance issues if the component re-renders frequently.

```javascript
import React, { useState } from 'react';

const generateLargeArray = () => {
  const largeArray = [];
  for (let i = 0; i < 1000000; i++) {
    largeArray.push(i);
  }
  return largeArray;
};

const sumArray = (arr) => {
  console.log('Calculating sum...');
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const LargeArraySum = () => {
  const [count, setCount] = useState(0);
  const largeArray = generateLargeArray();
  const sum = sumArray(largeArray);

  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default LargeArraySum;
```

#### Explanation:
- `generateLargeArray`: Generates a large array with 1,000,000 elements.
- `sumArray`: Calculates the sum of all elements in the array and logs when it's being called.
- `LargeArraySum`: A component that displays the sum of the array and has a button to increment a counter.

**Performance Issue:**
- Every time the component re-renders (e.g., when the button is clicked), the `sumArray` function is called again, recalculating the sum of the array even though the array has not changed. This is inefficient and can lead to poor performance.

### Optimized Scenario with `useMemo`

We can use the `useMemo` hook to memoize the result of the `sumArray` function so that it's only recalculated when the array changes.

```javascript
import React, { useState, useMemo } from 'react';

const generateLargeArray = () => {
  const largeArray = [];
  for (let i = 0; i < 1000000; i++) {
    largeArray.push(i);
  }
  return largeArray;
};

const sumArray = (arr) => {
  console.log('Calculating sum...');
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const LargeArraySum = () => {
  const [count, setCount] = useState(0);
  const largeArray = useMemo(() => generateLargeArray(), []);

  const sum = useMemo(() => sumArray(largeArray), [largeArray]);

  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default LargeArraySum;
```

#### Explanation:
- `useMemo(() => generateLargeArray(), [])`: Memoizes the large array, so `generateLargeArray` is only called once when the component mounts.
- `useMemo(() => sumArray(largeArray), [largeArray])`: Memoizes the result of `sumArray`, so it's only recalculated when `largeArray` changes. Since `largeArray` doesn't change in this example, `sumArray` is only called once.

**Performance Improvement:**
- By using `useMemo`, the costly `sumArray` function is not re-executed on every render unless the dependency (`largeArray`) changes. This prevents unnecessary recalculations and significantly improves performance.

### Step-by-Step Explanation:

1. **Initial Render:**
   - Without `useMemo`: `generateLargeArray` and `sumArray` are called on every render.
   - With `useMemo`: `generateLargeArray` is called once, and `sumArray` is called once.

2. **Subsequent Renders:**
   - Without `useMemo`: `generateLargeArray` and `sumArray` are called on every render.
   - With `useMemo`: Neither `generateLargeArray` nor `sumArray` is called again unless the dependencies change.

3. **Button Click (Increment Counter):**
   - Without `useMemo`: Causes a re-render, `sumArray` recalculates the sum.
   - With `useMemo`: Causes a re-render, but `sumArray` is not called again as the large array hasn't changed.

By memoizing expensive computations with `useMemo`, we ensure that our component only performs these calculations when absolutely necessary, leading to more efficient and performant React applications.


### Scenario without `useCallback`

Let's consider a simple React component that renders a list of items. There's a button for each item that, when clicked, removes the item from the list.

#### Without `useCallback`

```jsx
import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const removeItem = (itemToRemove) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item}>
          {item} 
          <button onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
```

#### Explanation

In this example:
- The `removeItem` function is recreated every time the `ItemList` component re-renders. 
- Since the `removeItem` function is passed as a prop to each button's `onClick` event, each button receives a new function reference on each render.
- This can lead to performance issues, especially if the list of items is large, because the component and its children are unnecessarily re-rendered.

### Optimizing with `useCallback`

To optimize this scenario, we can use the `useCallback` hook to memoize the `removeItem` function, ensuring that it is only recreated when the dependencies change.

```jsx
import React, { useState, useCallback } from 'react';

const ItemList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const removeItem = useCallback((itemToRemove) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>
          {item} 
          <button onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
```

#### Explanation

- **`useCallback`**: The `useCallback` hook returns a memoized version of the callback function that only changes if one of the dependencies has changed. In this case, we have no dependencies, so `removeItem` will be memoized and will not change across renders.
- **Optimization**: Since `removeItem` is now memoized, it maintains the same reference between renders unless the state changes. This prevents unnecessary re-renders of the child components, thus improving performance.

### Step-by-Step Explanation

1. **Initial State and Function Creation**:
   - Initially, `useState` is used to create the `items` state.
   - `removeItem` is a function defined within the `ItemList` component.

2. **Without `useCallback`**:
   - `removeItem` is recreated on every render.
   - Each button's `onClick` event receives a new function reference on every render.
   - This can lead to performance issues due to unnecessary re-renders.

3. **Using `useCallback`**:
   - `removeItem` is wrapped with `useCallback`.
   - `useCallback` memoizes the function, ensuring that it keeps the same reference across renders unless dependencies change.
   - The component and its children do not re-render unnecessarily, improving performance.

By using `useCallback`, we ensure that the `removeItem` function reference remains stable, avoiding unnecessary re-renders and improving the overall performance of the component.


Start the Doubt Session!