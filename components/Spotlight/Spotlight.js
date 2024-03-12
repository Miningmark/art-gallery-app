import ArtPieces from "../ArtPieces/ArtPieces";
import Image from "next/image";
import { useState, useEffect } from "react";
import FavoriteButton from "../Favorite/FavoriteButton";

export default function Spotlight({ artpieces, onToggleFavorite, favorties }) {
  const [value, setValue] = useState(-1);
  useEffect(() => {
    setValue(Math.floor(Math.random() * artpieces.length));
    console.log("Use: ", value);
  }, []);

  if (value === -1) {
    return null;
  }

  const randomImage = artpieces[value];

  console.log("After: ", value);

  return (
    <>
      <h2>{randomImage.name}</h2>
      <Image
        src={randomImage.imageSource}
        alt={randomImage.name}
        width={100}
        height={100}
      />
      <FavoriteButton
        favorite={favorties[value]}
        onToggleFavorite={() => onToggleFavorite(value)}
      />
    </>
  );
}
