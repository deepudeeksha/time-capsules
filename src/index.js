import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your CSS styles if needed
import App from './App'; // Import the main App component

// Create the root DOM node and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);