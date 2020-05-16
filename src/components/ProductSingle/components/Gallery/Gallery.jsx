import React from "react";

import Logo from "images/icons/2-SPAN.svg";

import { PrimaryImage, ThumbImage } from "./Gallery.styles";

function Gallery({ images }) {
  const displayThumbs = images.edges.length >= 2;

  return (
    <>
      <PrimaryImage
        logoThumbnail={!images.edges.length}
        style={{
          backgroundImage: `url(${
            images.edges.length ? images.edges[0].node.originalSrc : Logo
          })`,
        }}
      />
      {displayThumbs && (
        <div className="flex">
          {images.edges.map(
            ({ node: img }, index) =>
              index >= 1 && (
                <ThumbImage
                  key={img.id}
                  style={{ backgroundImage: `url(${img.originalSrc})` }}
                />
              )
          )}
        </div>
      )}
    </>
  );
}

export default Gallery;
