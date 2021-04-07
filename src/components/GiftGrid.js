import React, { useEffect, useState } from "react";
// components
import { GiftGridItem } from "./GiftGridItem";
// hooks
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div>
      <h3>{category}</h3>
      <div className="gift-grid">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          images.map((img) => {
            return <GiftGridItem key={img.id} {...img} />;
          })
        )}
      </div>
      <hr />
    </div>
  );
};
