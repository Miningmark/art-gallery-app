import Link from "next/link";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
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
  margin-bottom: 30px;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function FavoritePieces({
  artpieces,
  favorites,
  onToggleFavorite,
}) {
  console.log("artpieces:", artpieces);

  const hasFavorite = favorites.filter((favorite) => favorite === true);
  return (
    <>
      <section>
        {hasFavorite.length === 0 ? <p>You have no favorites</p> : null}
        {artpieces.map((artpiece, index) => {
          if (favorites[index]) {
            return (
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
                  Show Details
                </StyledLink>
              </StyledArticle>
            );
          }
        })}
      </section>
    </>
  );
}
