import React from "react";
import ImageCard from "./ImageCard";

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.length > 0 ? (
        images.map((img) => <ImageCard key={img.id} image={img} />)
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
}

export default Gallery;
