import ArtPieces from "../ArtPieces/ArtPieces";
import Image from "next/image";

export default function Spotlight({ artpieces }) {
  const randomImage = artpieces[Math.floor(Math.random() * artpieces.length)];
  return (
    <>
      <h2>{randomImage.name}</h2>
      <Image
        src={randomImage.imageSource}
        alt={randomImage.name}
        width={400}
        height={400}
      />
    </>
  );
}
