import React from "react";

function ItemList({ items }) {
  return (
    <ul className="Items">
      {items.map((item) => (
        <li key={item.id}>
          {item.name} ({item.category})
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
