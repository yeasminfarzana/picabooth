import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import Konva from "konva";

export function FilteredImage({ imageUrl, filter }) {
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);

  const handleFilter = () => {
    const node = imageRef.current;
    switch (filter) {
      case "blackandwhite":
        node.filters([Konva.Filters.Grayscale]);
        break;
      case "seppia":
        node.filters([Konva.Filters.Sepia]);
        break;
      case "bright":
        node.filters([Konva.Filters.Brighten]);
        node.brightness(0.1);
        break;
      case "vintage":
        node.filters([
          Konva.Filters.Blur,
          Konva.Filters.HSL,
          Konva.Filters.Contrast,
          Konva.Filters.Brighten,
        ]);
        node.blurRadius(0.4);
        node.hue(5);
        node.saturation(-0.5);
        node.contrast(25);
        node.brightness(0.05);
        break;
      default:
        node.filters([]);
        break;
    }
  };

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    img.onload = () => setImage(img);
  }, [imageUrl]);

  useEffect(() => {
    if (image) {
      handleFilter();
      imageRef.current.cache();
      imageRef.current.getLayer().batchDraw();
    }
  }, [image, filter]);

  return (
    <Stage width={221} height={154}>
      <Layer>
        <Image ref={imageRef} image={image} width={221} height={154}></Image>
      </Layer>
    </Stage>
  );
}
