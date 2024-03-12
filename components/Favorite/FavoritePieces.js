import Link from "next/link";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavoriteButton from "../Favorite/FavoriteButton";

export default function FavoritePieces({
  artpieces,
  favorites,
  onToggleFavorite,
}) {
  console.log("artpieces:", artpieces);

  const hasFavorite = favorites.filter((favorite) => favorite === true);
  return (
    <>
      <ul>
        {hasFavorite.length === 0 ? <p>You have no favorites</p> : null}
        {artpieces.map((artpiece, index) => {
          if (favorites[index]) {
            return (
              <li key={artpiece.slug}>
                <Link href={`/art-pieces/${artpiece.slug}`}>
                  {artpiece.name}
                </Link>
                <ArtPiecePreview
                  title={artpiece.name}
                  image={artpiece.imageSource}
                  artist={artpiece.artist}
                />
                <FavoriteButton
                  favorite={favorites[index]}
                  onToggleFavorite={() => onToggleFavorite(index)}
                />
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
