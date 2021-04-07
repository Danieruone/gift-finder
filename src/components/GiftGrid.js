import React, { useEffect, useState } from "react";
// components
import { GiftGridItem } from "./GiftGridItem";
// helpers
import { getGifs } from "../helpers/getGifs";

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category)
      .then(setImages)
      .catch((e) => console.log(e));
  }, [category]);

  return (
    <div>
      <h3>{category}</h3>
      <div className="gift-grid">
        {images.map((img) => {
          return <GiftGridItem key={img.id} {...img} />;
        })}
      </div>
      <hr />
    </div>
  );
};
