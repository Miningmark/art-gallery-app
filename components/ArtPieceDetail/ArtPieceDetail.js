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

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #404040;
  border-radius: 20px;
  margin: 10px;
  padding: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;

const StyledLI = styled.li`
  margin: 5px 10px;
`;

export default function ArtPieceDetail({
  artpiece: { title, artist, year, genre, imageSource, colors },
}) {
  return (
    <>
      <h2>{title}</h2>
      <Image
        alt={title}
        src={imageSource}
        sizes="70vh"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
      ></Image>
      <StyledPlate>
        {colors.map((color) => (
          <ColorPlate key={color} color={color}></ColorPlate>
        ))}
      </StyledPlate>
      <StyledUL>
        <StyledLI>Artist: {artist}</StyledLI>
        <StyledLI>Year: {year}</StyledLI>
        <StyledLI>Genre: {genre}</StyledLI>
      </StyledUL>
    </>
  );
}
