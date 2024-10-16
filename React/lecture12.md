
## Agenda 

In this class we will put into use whatever we have learnt so far and will be solving som frequently asked React Machine coding Problems 

We will be solving these Problems throughout the class

Before moving to Machine coding problems we will see one hook i.e the `useRef` hook

1. StopWatch
2. Automatic Image Carousel
3. Creating your Own Hook (Custom Hook)

The `useRef` hook in React is a powerful tool for directly accessing and interacting with DOM elements and for persisting values across renders without causing re-renders.  

Explanation of how `useRef` works

### How `useRef` Works

1. **Creating a Reference**: You can create a reference using `useRef(initialValue)`. This returns a mutable object with a `current` property, which is initialized to the passed `initialValue`.

2. **Persisting Values**: Unlike state, changes to the `current` property of the ref do not trigger a re-render. This makes refs perfect for storing values that should persist across renders without affecting the UI.

3. **Accessing DOM Elements**: You can assign a ref to a DOM element using the `ref` attribute in JSX. This allows you to directly interact with the DOM element, similar to `document.querySelector` in vanilla JavaScript.

### Example: Using `useRef` to Access a DOM Element

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

In this example:
- `useRef(null)` creates a ref object with a `current` property initialized to `null`.
- The `ref` attribute is used to attach this ref to the `<input>` element.
- When the button is clicked, `inputRef.current.focus()` is called, which focuses the input field.

### Example: Persisting Values Across Renders

```jsx
import React, { useRef, useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  );
}

export default Timer;
```

In this example:
- `useRef(null)` creates a ref to store the interval ID.
- `intervalRef.current` is set to the interval ID returned by `setInterval`.
- This ref persists across renders without causing re-renders, allowing the timer to run in the background.

### Use Cases for `useRef`

1. **Accessing DOM Elements**: When you need to interact directly with a DOM element, such as focusing an input, measuring dimensions, or manipulating the element in other ways.

2. **Storing Mutable Values**: When you need to store a mutable value that persists across renders but doesn't need to cause a re-render when updated. Examples include timers, intervals, previous state values, or any other non-UI related data.

3. **Avoiding Re-Initialization**: When you want to initialize a value only once and keep it around across renders, like initializing a library or maintaining a stable reference to a callback function.

### Conclusion

The `useRef` hook is a versatile tool in React for dealing with direct DOM manipulations and persisting values without triggering re-renders. It is particularly useful in scenarios where you need a persistent, mutable reference or direct access to DOM elements.

### Problem Statement

Create a stopwatch application using React. The stopwatch should have the following features:
1. Start the timer.
2. Stop the timer.
3. Reset the timer.
4. Display the elapsed time in a format of hours:minutes:seconds.

### Features Required

1. **Start Button**: To start the stopwatch.
2. **Stop Button**: To stop the stopwatch.
3. **Reset Button**: To reset the stopwatch to 00:00:00.
4. **Display**: To show the elapsed time.

### Steps to Create the Stopwatch

#### Step 1: Set Up the React Project

First, ensure you have Node.js and npm installed. Then, create a new React project using Create React App:

```bash
npx create-react-app stopwatch
cd stopwatch
npm start
```

This will set up a new React project and start the development server.

#### Step 2: Create the Stopwatch Component

Create a new component called `Stopwatch.js` inside the `src` folder:

```jsx
import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
```

#### Explanation

1. **useState**: This hook is used to manage the state of the time and the running status of the stopwatch.
   - `time` stores the elapsed time in seconds.
   - `isRunning` keeps track of whether the stopwatch is currently running.

2. **useRef**: This hook is used to store a reference to the timer interval. It allows us to keep track of the timer between renders without causing re-renders.

3. **startTimer Function**: This function starts the stopwatch.
   - It checks if the stopwatch is not already running.
   - If not running, it sets `isRunning` to true and starts an interval that increments the `time` state every second (1000 milliseconds).

4. **stopTimer Function**: This function stops the stopwatch.
   - It checks if the stopwatch is running.
   - If running, it clears the interval and sets `isRunning` to false.

5. **resetTimer Function**: This function resets the stopwatch.
   - It clears the interval, sets `isRunning` to false, and resets the `time` state to 0.

6. **formatTime Function**: This function formats the elapsed time into a human-readable format (hh:mm:ss).

#### Step 3: Use the Stopwatch Component in App

Modify the `App.js` file to include the `Stopwatch` component:

```jsx
import React from 'react';
import Stopwatch from './Stopwatch';

const App = () => {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
};

export default App;
```

#### Step 4: Styling (Optional)

You can choose to add some basic styling to the `src/App.css` file to improve the appearance of the stopwatch:

```css
.App {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
  font-family: Arial, sans-serif;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
}

h1 {
  font-size: 48px;
}
```

### Optimizing the Stopwatch (can be provided in post Reads)

To ensure the stopwatch is optimized, especially in terms of rendering performance, consider the following:

1. **Memoization**: Using `React.memo` to prevent unnecessary re-renders of the `Stopwatch` component.
2. **useCallback**: Using `useCallback` to memoize the `startTimer`, `stopTimer`, and `resetTimer` functions.

Here's how you can implement these optimizations:

#### Step 5: Optimize with React.memo and useCallback

Update the `Stopwatch.js` file:

```jsx
import React, { useState, useRef, useCallback } from 'react';

const Stopwatch = React.memo(() => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  }, [isRunning]);

  const stopTimer = useCallback(() => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  }, [isRunning]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  }, []);

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
});

export default Stopwatch;
```

#### Explanation of Optimizations

1. **React.memo**: This higher-order component is used to prevent re-renders of the `Stopwatch` component unless its props change. Since `Stopwatch` doesn't receive any props, it effectively prevents unnecessary re-renders caused by parent component updates.

2. **useCallback**: This hook is used to memoize the `startTimer`, `stopTimer`, and `resetTimer` functions. It ensures these functions are not re-created on every render unless their dependencies change. This reduces the chances of passing new function references to child components, which can trigger unnecessary re-renders.

### Conclusion

This step-by-step guide provides a comprehensive approach to creating a stopwatch in React, starting from the basic setup and gradually optimizing the implementation for better performance. By using hooks like `useState`, `useRef`, and `useCallback`, along with `React.memo`, you can ensure the application is efficient and maintains a good performance profile.

## Problem Statement

Create a simple image carousel component in React that automatically cycles through a list of images, displaying one image at a time. The carousel should also allow users to manually navigate to the next or previous image using buttons.

### Features:

1. Automatically cycles through images every 2 seconds.
2. Manual navigation to the next or previous image using buttons.
3. Displays image, title, and description for each item.

### Step-by-Step Explanation and Implementation

### Step 1: Setting Up the Component

First, you need to import the necessary hooks and define the list of items (images, titles, and descriptions) that will be displayed in the carousel.

```jsx
import React, { useState, useEffect } from 'react';

const items = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Item 1',
    description: 'Description of item 1',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Item 2',
    description: 'Description of item 2',
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Item 3',
    description: 'Description of item 3',
  },
];
```

### Step 2: Initializing State

Use the `useState` hook to manage the current item index.

```jsx
const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(0);
```

### Step 3: Navigation Functions

Define functions to navigate to the next and previous items in the carousel.

```jsx
  function nextItem() {
    if (currentItem === items.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem((curr) => curr + 1);
    }
  }

  function prevItem() {
    if (currentItem === 0) {
      setCurrentItem(items.length - 1);
    } else {
      setCurrentItem((curr) => curr - 1);
    }
  }
```

### Step 4: Automatic Cycling with useEffect

Use the `useEffect` hook to automatically cycle through the images every 2 seconds. Clear the interval when the component unmounts to avoid memory leaks.

```jsx
  useEffect(() => {
    const timer = setInterval(() => {
      nextItem();
    }, 2000);
    return () => clearInterval(timer);
  }, [currentItem]);
```

### Step 5: Rendering the Carousel

Render the carousel with navigation buttons and display the current item.

```jsx
  return (
    <div className="carousel">
      <button onClick={prevItem}>Prev</button>
      <div className="carousel-item">
        <img
          height="200"
          width="200"
          src={items[currentItem].imageUrl}
          alt={items[currentItem].title}
        />
        <h2>{items[currentItem].title}</h2>
        <p>{items[currentItem].description}</p>
      </div>
      <button onClick={nextItem}>Next</button>
    </div>
  );
};

export default Carousel;
```

### Rendering the Carousel in App.jsx

Finally, render the `Carousel` component in the main application file (`App.jsx`).

```jsx
import React from 'react';
import Carousel from './Carousel';

const App = () => {
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel />
    </div>
  );
};

export default App;
```

### Full Code

Here is the complete code for the `Carousel` component and `App.jsx`.

#### Carousel.jsx

```jsx
import React, { useState, useEffect } from 'react';

const items = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Item 1',
    description: 'Description of item 1',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Item 2',
    description: 'Description of item 2',
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Item 3',
    description: 'Description of item 3',
  },
];

const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(0);

  function nextItem() {
    if (currentItem === items.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem((curr) => curr + 1);
    }
  }

  function prevItem() {
    if (currentItem === 0) {
      setCurrentItem(items.length - 1);
    } else {
      setCurrentItem((curr) => curr - 1);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextItem();
    }, 2000);
    return () => clearInterval(timer);
  }, [currentItem]);

  return (
    <div className="carousel">
      <button onClick={prevItem}>Prev</button>
      <div className="carousel-item">
        <img
          height="200"
          width="200"
          src={items[currentItem].imageUrl}
          alt={items[currentItem].title}
        />
        <h2>{items[currentItem].title}</h2>
        <p>{items[currentItem].description}</p>
      </div>
      <button onClick={nextItem}>Next</button>
    </div>
  );
};

export default Carousel;
```

#### App.jsx

```jsx
import React from 'react';
import Carousel from './Carousel';

const App = () => {
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel />
    </div>
  );
};

export default App;
```

### Problem Statement

You need to create a custom hook in React that manages the visibility of an element, such as a modal or dropdown. This custom hook, `useVisibility`, should provide a simple interface to show and hide the element and should be reusable across different components.

### Features Required

1. **Initial Visibility State**: The custom hook should allow setting an initial visibility state.
2. **Toggle Visibility**: The hook should provide a method to toggle the visibility state.
3. **Show and Hide Methods**: The hook should provide methods to explicitly show or hide the element.
4. **Visibility State**: The hook should return the current visibility state.

### Step-by-Step Guide

#### 1. Setting Up the Project

First, ensure you have a React project set up. You can use Create React App if you don't have one already:

```bash
npx create-react-app use-visibility-example
cd use-visibility-example
npm start
```

#### 2. Creating the Custom Hook

Let's create our custom hook, `useVisibility`.

##### 2.1. Create the Hook File

Create a new file named `useVisibility.js` in the `src` directory.

```javascript
// src/useVisibility.js

import { useState, useCallback } from 'react';

function useVisibility(initialVisibility = false) {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const show = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hide = useCallback(() => {
    setIsVisible(false);
  }, []);

  const toggle = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  return {
    isVisible,
    show,
    hide,
    toggle,
  };
}

export default useVisibility;
```

##### Explanation

- **useState**: Initializes the visibility state.
- **useCallback**: Memoizes the show, hide, and toggle functions to prevent unnecessary re-renders.
- **show**: Sets the visibility state to true.
- **hide**: Sets the visibility state to false.
- **toggle**: Toggles the visibility state.

#### 3. Using the Custom Hook

Now, let's use our custom hook in a component.

##### 3.1. Create a Modal Component

Create a new file named `Modal.js` in the `src` directory.

```javascript
// src/Modal.js

import React from 'react';
import './Modal.css'; // Create a CSS file for styling

function Modal({ isVisible, hide }) {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modal Title</h2>
        <p>This is a modal.</p>
        <button onClick={hide}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
```

##### 3.2. Create the CSS for Modal

Create a file named `Modal.css` in the `src` directory.

```css
/* src/Modal.css */

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

##### 3.3. Create the Main App Component

Modify the `App.js` file to use the `useVisibility` hook and the `Modal` component.

```javascript
// src/App.js

import React from 'react';
import useVisibility from './useVisibility';
import Modal from './Modal';

function App() {
  const { isVisible, show, hide, toggle } = useVisibility(false);

  return (
    <div className="App">
      <h1>Custom Hook Example</h1>
      <button onClick={show}>Show Modal</button>
      <button onClick={toggle}>Toggle Modal</button>
      <Modal isVisible={isVisible} hide={hide} />
    </div>
  );
}

export default App;
```

##### Explanation

- **useVisibility**: Initializes the visibility state of the modal.
- **show, hide, toggle**: Methods to control the modal's visibility.
- **Modal Component**: Receives `isVisible` and `hide` as props to conditionally render the modal and close it.

#### 4. Finalizing

Your custom hook `useVisibility` is now complete and reusable. You can use it to manage the visibility state of any element in your React application.

### Summary

1. **Problem Statement**: Create a custom hook to manage the visibility of an element.
2. **Features**: Initial state, toggle, show, hide, and return current state.
3. **Implementation**:
   - Created `useVisibility` hook with `useState` and `useCallback`.
   - Created a `Modal` component to use the custom hook.
   - Used the custom hook in the main `App` component to manage modal visibility.

This  should help you understand how to create and use a custom hook in React for managing visibility. Feel free to expand this concept to more complex state management scenarios as you become more comfortable with custom hooks.

You can create more custom hooks as your need


**Homework** - Identify any situation where you can create a Custom Hook and implment that before next class


