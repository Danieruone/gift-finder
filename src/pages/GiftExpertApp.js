import React, { useState } from "react";
// components
import { AddCategory } from "../components/AddCategory";
import { GiftGrid } from "../components/GiftGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["The big bang theory"]);
  return (
    <div>
      <h2>Gift expert app</h2>
      <AddCategory setCategories={setCategories} categories={categories} />
      <hr />

      {categories.map((category, idx) => (
        <GiftGrid key={idx} category={category} />
      ))}
    </div>
  );
};
