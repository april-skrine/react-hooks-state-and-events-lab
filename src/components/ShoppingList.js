import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [filterList, setFilterList] = useState("All")
const changeFilter = (e) => setFilterList(e.target.value)

const filteredList = items.filter((item) => {
  if (filterList === "All") {
    return item
  } else {
    return filterList === item.category
  }
})
  
return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
