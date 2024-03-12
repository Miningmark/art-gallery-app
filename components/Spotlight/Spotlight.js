import ArtPieces from "../ArtPieces/ArtPieces";
import Image from "next/image";
import { useState, useEffect } from "react";
import FavoriteButton from "../Favorite/FavoriteButton";
import styled from "styled-components";

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
      <figure>
        <Image
          alt={randomImage.name}
          src={randomImage.imageSource}
          sizes="70vh"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        ></Image>
        <figcaption>Artist: {randomImage.artist}</figcaption>
      </figure>
      <FavoriteButton
        favorite={favorties[value]}
        onToggleFavorite={() => onToggleFavorite(value)}
      />
    </>
  );
}
