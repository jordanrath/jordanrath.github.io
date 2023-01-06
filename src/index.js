import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import Loader from './components/Loader';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const loaderElement = document.getElementById("loader");
const loader = createRoot(loaderElement);

// render loader immediately
loader.render(
  <StrictMode>
    <Loader />
  </StrictMode>
);

// after async operations, render the rest of app
setTimeout(() => {
root.render(
  <StrictMode>
      <App />
  </StrictMode>
);

// remove loader once app is rendered
loader.unmount();
}, 1500);