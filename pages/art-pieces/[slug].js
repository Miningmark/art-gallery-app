import ArtPieceDetail from "@/components/ArtPieceDetail/ArtPieceDetail";
import FavoriteButton from "@/components/Favorite/FavoriteButton";
import { useRouter } from "next/router";
import CommentForm from "@/components/Comments/CommentsForm";
import styled from "styled-components";

const SytledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
`;

const StyledUL2 = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 5px;
  position: relative;
`;

const StyledLI2 = styled.li`
  background-color: #505050;
  border-radius: 10px;
  list-style: none;
  width: calc(100%-40px);
  padding-left: 20px;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 10px;
  background-color: #404040;
  color: white;
  margin-bottom: 20px;
`;

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
  console.log("comments :", comments);
  return (
    <SytledSection>
      <ArtPieceDetail artpiece={artpiece} />
      <FavoriteButton
        favorite={favorites[index]}
        onToggleFavorite={() => onToggleFavorite(index)}
      />
      <CommentForm onSetComment={onSetComment} index={index}></CommentForm>
      <StyledUL2>
        {comments[index].map((comment, index2) => (
          <StyledLI2 key={index2}>{comment}</StyledLI2>
        ))}
      </StyledUL2>

      <StyledButton onClick={handleOnClick}>Back</StyledButton>
    </SytledSection>
  );
}
