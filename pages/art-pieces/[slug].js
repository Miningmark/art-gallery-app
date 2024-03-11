import ArtPieceDetail from "@/components/ArtPieceDetail/ArtPieceDetail";
import { useRouter } from "next/router";

export default function ArtPiecePage({ artpieces }) {
  const router = useRouter();
  const slug = router.query.slug;
  const artpiece = artpieces.find((artpiece) => artpiece.slug === slug);
  function handleOnClick() {
    router.push("/art-pieces");
  }
  return (
    <>
      <ArtPieceDetail artpiece={artpiece} />
      <button onClick={handleOnClick}>Back</button>
    </>
  );
}
