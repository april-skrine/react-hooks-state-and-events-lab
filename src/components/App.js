import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  const [isLightMode, setLightMode] = useState(true)
  const appClass = isLightMode ? "App dark" : "App light"
  const darkModeToggle = () => setLightMode(!isLightMode)

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeToggle}>{isLightMode ? 'Light Mode' : 'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
