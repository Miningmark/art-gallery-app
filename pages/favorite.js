import FavoritePieces from "@/components/Favorite/FavoritePieces";

export default function FavoritePage({
  artpieces,
  favorites,
  onToggleFavorite,
}) {
  return (
    <>
      <FavoritePieces
        artpieces={artpieces}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
