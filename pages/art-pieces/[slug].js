import ArtPieceDetail from "@/components/ArtPieceDetail/ArtPieceDetail";
import FavoriteButton from "@/components/Favorite/FavoriteButton";
import { useRouter } from "next/router";
import CommentForm from "@/components/Comments/CommentsForm";

export default function ArtPiecePage({
  artpieces,
  favorites,
  onToggleFavorite,
  onSetComment,
  comments,
}) {
  const router = useRouter();
  const slug = router.query.slug;
  const artpiece = artpieces.find((artpiece) => artpiece.slug === slug);

  const index = artpieces.findIndex((artpiece) => artpiece.slug === slug);

  function handleOnClick() {
    router.push("/art-pieces");
  }
  return (
    <>
      <ArtPieceDetail artpiece={artpiece} />
      <CommentForm onSetComment={onSetComment} index={index}></CommentForm>
      <ul>
        {comments[index].map((comment, index2) => (
          <li key={index2}>{comment}</li>
        ))}
      </ul>
      <FavoriteButton
        favorite={favorites[index]}
        onToggleFavorite={() => onToggleFavorite(index)}
      />
      <button onClick={handleOnClick}>Back</button>
    </>
  );
}
