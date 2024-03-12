import Link from "next/link";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Image from "next/image";
import FavoriteButton from "../Favorite/FavoriteButton";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ArtPieces({ artpieces, favorites, onToggleFavorite }) {
  return (
    <>
      <section>
        {artpieces.map((artpiece, index) => (
          <StyledArticle key={artpiece.slug}>
            <ArtPiecePreview
              title={artpiece.name}
              image={artpiece.imageSource}
              artist={artpiece.artist}
            />
            <FavoriteButton
              favorite={favorites[index]}
              onToggleFavorite={() => onToggleFavorite(index)}
            />
            <StyledLink href={`/art-pieces/${artpiece.slug}`}>
              show Details
            </StyledLink>
          </StyledArticle>
        ))}
      </section>
    </>
  );
}
