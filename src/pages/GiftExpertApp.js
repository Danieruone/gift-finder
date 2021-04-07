import React, { useState } from "react";
// components
import { AddCategory } from "../components/AddCategory";
import { GiftGrid } from "../components/GiftGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["The big bang theory"]);
  return (
    <div>
      <div className="top-container">
        <div className="typewriter">
          <h1>The best gift finder...</h1>
        </div>
        <AddCategory setCategories={setCategories} categories={categories} />
      </div>

      {categories.map((category, idx) => (
        <GiftGrid key={idx} category={category} />
      ))}
    </div>
  );
};
