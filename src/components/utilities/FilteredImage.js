import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image } from "react-konva";

export function FilteredImage({ imageUrl, filter }) {
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    img.onload = () => setImage(img);
  }, [imageUrl]);
  useEffect(() => {
    if (image) {
      imageRef.current.cache();
      imageRef.current.getLayer().batchDraw();
    }
  }, [image]);

  return (
    <Stage width={218} height={152}>
      <Layer>
        <Image ref={imageRef} image={image} width={218} height={152}></Image>
      </Layer>
    </Stage>
  );
}
