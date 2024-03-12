import Image from "next/image";
import styled from "styled-components";

const StyledArtPiece = styled.picture``;

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <figure>
        <Image
          alt={title}
          src={image}
          sizes="70vh"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        ></Image>
        <figcaption>Artist: {artist}</figcaption>
      </figure>
    </>
  );
}
