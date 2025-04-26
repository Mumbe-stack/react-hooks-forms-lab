import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import ItemList from "./ItemList";
import itemsData from "../data/items";

function App() {
  const [items, setItems] = useState(itemsData);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false); // add dark mode state

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleSearchChange(searchValue) {
    setSearch(searchValue);
  }

  function handleCategoryChange(categoryValue) {
    setSelectedCategory(categoryValue);
  }

  function toggleDarkMode() {
    setDarkMode((dark) => !dark);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <header>
        <h1>Shopping List</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>

      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={(e) => handleCategoryChange(e.target.value)}
      />
      <ItemList items={itemsToDisplay} />
    </div>
  );
}

export default App;
