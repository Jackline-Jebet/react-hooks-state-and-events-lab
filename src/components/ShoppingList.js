import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterCategory, setFilterCategory]=useState('All');

  function handleCategoryChange(event) {
    setFilterCategory(()=>event.target.value);
  }

  const itemDisplay=items.filter((item)=>{
    if (filterCategory === 'All') {
      return true;
    }
    else {
      return item.category === filterCategory;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
