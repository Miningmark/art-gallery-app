import Heart from "./heart.svg";

const LikedHeart = () => <Heart height={50} width={50} fill="red" />;

export default function Favorite({ artpieces }) {
  return (
    <>
      <LikedHeart></LikedHeart>
    </>
  );
}
