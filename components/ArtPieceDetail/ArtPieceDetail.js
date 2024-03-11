import Image from "next/image";

export default function ArtPieceDetail({
  artpiece: { title, artist, year, genre, imageSource },
}) {
  return (
    <>
      <h2>{title}</h2>
      <Image alt={title} src={imageSource} width={400} height={400}></Image>
      <ul>
        <li>Artist: {artist}</li>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
      </ul>
    </>
  );
}
