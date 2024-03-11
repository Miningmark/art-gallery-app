import Heart from "./heart.svg";

const likedHeart = <Heart height={30} width={30} fill="red" />;
const unlikeHeart = <Heart height={30} width={30} fill="black" />;

export default function FavoriteButton({ favorite, onToggleFavorite }) {
  return (
    <>
      <button onClick={onToggleFavorite}>
        {favorite ? likedHeart : unlikeHeart}
      </button>
    </>
  );
}
