import React from "react";

export const GiftGridItem = ({ title, url }) => {
  return (
    <div className="grid-item">
      <div>
        <p>{title}</p>
        <img src={url} alt={title} />
      </div>
    </div>
  );
};
