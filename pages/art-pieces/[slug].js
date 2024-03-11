import ArtPieceDetail from "@/components/ArtPieceDetail/ArtPieceDetail";
import FavoriteButton from "@/components/Favorite/FavoriteButton";
import { useRouter } from "next/router";

export default function ArtPiecePage({
  artpieces,
  favorites,
  onToggleFavorite,
}) {
  const router = useRouter();
  const slug = router.query.slug;
  const artpiece = artpieces.find((artpiece) => artpiece.slug === slug);
  function handleOnClick() {
    router.push("/art-pieces");
  }
  return (
    <>
      <ArtPieceDetail artpiece={artpiece} />
      <FavoriteButton
        favorite={favorties.find((artpiece) => artpiece)}
        onToggleFavorite={() => onToggleFavorite(value)}
      />
      <button onClick={handleOnClick}>Back</button>
    </>
  );
}
