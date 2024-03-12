import Image from "next/image";
import styled from "styled-components";

const ColorPlate = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const StyledPlate = styled.div`
  display: flex;
  padding: 1rem;
`;

export default function ArtPieceDetail({
  artpiece: { title, artist, year, genre, imageSource, colors },
}) {
  return (
    <>
      <h2>{title}</h2>
      <Image alt={title} src={imageSource} width={400} height={400}></Image>
      <StyledPlate>
        {colors.map((color) => (
          <ColorPlate key={color} color={color}></ColorPlate>
        ))}
      </StyledPlate>
      <ul>
        <li>Artist: {artist}</li>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
      </ul>
    </>
  );
}
