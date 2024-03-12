import Link from "next/link";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Image from "next/image";
import FavoriteButton from "../Favorite/FavoriteButton";

export default function ArtPieces({ artpieces, favorites, onToggleFavorite }) {
  return (
    <>
      <ul>
        {artpieces.map((artpiece, index) => (
          <li key={artpiece.slug}>
            <Link href={`/art-pieces/${artpiece.slug}`}>{artpiece.name}</Link>
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
        ))}
      </ul>
    </>
  );
}
