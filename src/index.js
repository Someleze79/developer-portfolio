// Import React library to create components
import React from "react";

// Import ReactDOM to render our app to the browser
import ReactDOM from "react-dom/client";

// Import the main App component (root component)
import App from "./App";

// Import global styles for the entire application
import "./styles.css";

// Create a root element where the React app will be injected
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    {/* StrictMode helps identify potential problems in the app */}
    <App />
  </React.StrictMode>
);