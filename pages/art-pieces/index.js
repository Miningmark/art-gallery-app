import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  artpieces,
  favorites,
  onToggleFavorite,
}) {
  return (
    <ArtPieces
      artpieces={artpieces}
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
