import React from "react";

function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        style={{ width: "100%" }}
      />
      <p>{image.user.name}</p>
    </div>
  );
}

export default ImageCard;
