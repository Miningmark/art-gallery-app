import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <Image alt={title} src={image} width={400} height={400}></Image>
      <h3>{artist}</h3>
    </>
  );
}
