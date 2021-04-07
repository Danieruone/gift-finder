import React, { useEffect, useState } from "react";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=ozWCYbA8JNvl1IshP0s1ZWAwYOYw7oZS`;

  const getGifs = async () => {
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

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
